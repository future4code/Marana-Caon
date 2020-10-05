import { UserInputDTO, LoginInputDTO, UserRole, User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager ,
        private authenticator: Authenticator
    ){}

    async createUser(user: UserInputDTO) {

        if(!user.name || !user.email || !user.password ) {
            throw new Error("Missing input")
        }

        if (user.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (user.password.length < 6) {
            throw new Error("Invalid password");
        }

        if(!user.role) {
            user.role = UserRole.NORMAL
        }

        if(User.stringToUserRole(user.role) !== UserRole.ADMIN && User.stringToUserRole(user.role) !== UserRole.NORMAL) {
            throw new Error("Roles can only be assigned as NORMAL or ADMIN")
        }

        const id = this.idGenerator.generate();

        const hashPassword = await this.hashManager.hash(user.password);

        await this.userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);

        const accessToken = this.authenticator.generateToken({ id, role: user.role });

        return accessToken;
    }

    async getUserByEmail(user: LoginInputDTO) {

        const userFromDB = await this.userDatabase.getUserByEmail(user.email);

        const hashCompare = await this.hashManager.compare(user.password, userFromDB.getPassword());

        const accessToken = this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password");
        }

        return accessToken;
    }

    async login(user: LoginInputDTO) {
        if(!user.email || !user.password) {
            throw new Error("Please inform your email and password.")
        }

        const userFromDB = await this.userDatabase.getUserByEmail(user.email);

        if (!userFromDB) {
            throw new Error("User not found")
        }

        const hashCompare = await this.hashManager.compare(user.password, userFromDB.getPassword());

        const accessToken = this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password");
        }

        return accessToken;
    }
}