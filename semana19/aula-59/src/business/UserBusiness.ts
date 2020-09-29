import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
    authenticator: any;

    public async createUser(user: { email: string; name: string; password: string; role: string; }): Promise<string> {

        const idGenerator = new IdGenerator();
        const hashManager = new HashManager();
        const userDatabase = new UserDatabase();
        const authenticator = new Authenticator();

        try{

            if(!user.name || !user.email || !user.password || !user.role){
                throw new Error("Please fill all the fields");
            }

            if(user.email.indexOf("@") === -1){
                throw new Error("Invalid Email");
            }

            if(user.password.length < 6){
                throw new Error("Password must have at least 6 characters");
            }

            const id = idGenerator.generate();
            const hashPassword = await hashManager.hash(user.password);
            await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);
            const token = authenticator.generateToken({id, role: user.role});
            
            return token;

        }catch(error){
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
    }

    public async getUserByEmail(user: { email: string; password: string; }): Promise<string> {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(user.password, userFromDB.password);

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: userFromDB.id});

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }

    async getAllUsers(token: string) {
        const userDatabase = new UserDatabase();

        this.authenticator.getData(token);
        return await userDatabase.getAllUsers();
    }
}
 