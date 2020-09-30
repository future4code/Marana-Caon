import { UserBusiness } from "../src/business/UserBusiness"
import { stringToUserRole, User, UserRole } from "../src/model/User"

const userDatabase = {
   createUser: jest.fn(
      async (user: User) => { }
   ),
   getUserByEmail: jest.fn(
      (email: string) => undefined
   )
} as any
const idGenerator = {
   generate: jest.fn(() => "id mock")
} as any
const hashGenerator = {
   hash: jest.fn((password: string) => "cypher password"),
   compareHash: jest.fn(
      async (s: string, hash: string) => false
   )
} as any
const tokenGenerator = {
   generate: jest.fn(
      (payload: { id: string, role: UserRole }) => "token de mentirinha"
   )
} as any

const userBusiness: UserBusiness = new UserBusiness(
   userDatabase,
   idGenerator,
   hashGenerator,
   tokenGenerator
)

describe("Testa o método de cadastro", () => {

   test("Deve retornar erro quando um nome não for passado", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "",
            "astrodev@labenu.com.br",
            "bananinha",
            "ADMIN"
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando um email não for passado", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "",
            "bananinha",
            "ADMIN"
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })
   test("Deve retornar erro quando uma senha não for passada", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "astrodev@labenu.com.br",
            "",
            "ADMIN"
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando um role não for passado", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "astrodev@labenu.com.br",
            "bananinha",
            null as any
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando o email for inválido", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "astrodevlabenu.com.br",
            "bananinha",
            "ADMIN"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid email")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando a senha for inválida", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "astrodev@labenu.com.br",
            "uva",
            "ADMIN"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid password")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando o role for inválido", async () => {

      // NÃO É UNITÁRIO !!!!!!!!
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "astrodev@labenu.com.br",
            "bananinha",
            "ADMINISTRADOR"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid user role")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar um token de acesso", async () => {


      const result = await userBusiness.signup(
         "Astrodev",
         "astrodev@labenu.com.br",
         "bananinha",
         "ADMIN"
      )

      expect(result.accessToken).toBe("token de mentirinha")

   })
})

describe("Testa o método de login", () => {

   test("Deve retornar erro quando um email não for passado", async () => {
      expect.assertions(2)

      try {
         await userBusiness.login(
            "",
            "bananinha"
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando uma senha não for passada", async () => {
      expect.assertions(2)

      try {
         await userBusiness.login(
            "astrodev@labenu.com.br",
            ""
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando o usuário não for encontrado", async () => {
      expect.assertions(2)

      try {
         await userBusiness.login(
            "astrodev@labenu.com.br",
            "bananinha"
         )
      } catch (error) {
         expect(error.message).toBe("User not found")
         expect(error.statusCode).toBe(404)
      }
   })

   test("Deve retornar erro quando a senha estiver incorreta", async () => {
      expect.assertions(2)

      userDatabase.getUserByEmail = (email: string) => {
         return new User(
            "id",
            "Astrodev",
            "astrodev@labenu.com.br",
            "bananinha",
            UserRole.ADMIN
         )
      }

      try {
         await userBusiness.login(
            "astrodev@labenu.com.br",
            "bananinha"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid password")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar um token de acesso", async () => {

      hashGenerator.compareHash = jest.fn(
         async (s: string, hash: string) => true
      )

      const result = await userBusiness.login(
         "astrodev@mail.com.br",
         "bananinha"
      )

      expect(result.accessToken).toBe("token de mentirinha")

   })
})

// Exercício 2
// a)
describe("Testando o pegar usuário pelo id", () => {
      let userDatabase = {};
      let hashGenerator = {};
      let tokenGenerator = {};
      let idGenerator = {};
 
   test("Deve retornar mensagem caso usuário não exista", async () => {
     expect.assertions(2);
     try {
       const getUserById = jest.fn();
       userDatabase = { getUserById };
 
       const userBusiness = new UserBusiness(
         userDatabase as any,
         hashGenerator as any,
         tokenGenerator as any,
         idGenerator as any
       );
 
       await userBusiness.getUserById("invalid-id");
     } catch (err) {
       expect(err.statusCode).toBe(404);
       expect(err.message).toBe("User not found");
     }
   });
 });


 // b)
 
 describe("Testando o pegar usuário pelo id", () => {
   let userDatabase = {};
   let hashGenerator = {};
   let tokenGenerator = {};
   let idGenerator = {};
 
   test("Deve retornar mensagem caso usuário não exista", async () => {
     const getUserById = jest.fn(
       (id: string) =>
         new User(
           "id",
           "Marana",
           "marana@gmail.com",
           "hash",
           stringToUserRole("ADMIN")
         )
     );
 
     userDatabase = { getUserById };
 
     const userBusiness = new UserBusiness(
       userDatabase as any,
       hashGenerator as any,
       tokenGenerator as any,
       idGenerator as any
     );
 
     const user = await userBusiness.getUserById("id");
 
     expect(getUserById).toHaveBeenCalledWith("id");
     expect(user).toEqual({
       id: "id",
       name: "Marana",
       email: "marana@gmail.com",
       role: UserRole.ADMIN,
     });
   });
 });


 // Exercício 4
 // a)
 describe("Testando o endpoint de pegar todos os usuários", () => {
   let userDatabase = {};
   let hashGenerator = {};
   let tokenGenerator = {};
   let idGenerator = {};
 
   test("Deve retornar mensagem quando o role do usuário é NORMAL", async () => {
     expect.assertions(2);
     try {
       const userBusiness = new UserBusiness(
         userDatabase as any,
         hashGenerator as any,
         tokenGenerator as any,
         idGenerator as any
       );
 
       await userBusiness.getAllUsers(UserRole.NORMAL);
     } catch (err) {
       expect(err.statusCode).toBe(401);
       expect(err.message).toBe("You must be an admin to access this endpoint");
     }
   });
 });

 // b)
 describe("Testing UserBusiness.allUsers", () => {
   let userDatabase = {};
   let hashGenerator = {};
   let tokenGenerator = {};
   let idGenerator = {};
 
   test("Deve retornar mensagem quando o role do usuário é NORMAL", async () => {
     const getAllUsers = jest.fn(() => [
       new User(
         "id",
         "Marana",
         "marana@gmail.com",
         "hash",
         stringToUserRole("ADMIN")
       ),
     ]);
     userDatabase = { getAllUsers };
 
     const userBusiness = new UserBusiness(
       userDatabase as any,
       hashGenerator as any,
       tokenGenerator as any,
       idGenerator as any
     );
 
     const result = await userBusiness.getAllUsers(UserRole.ADMIN);
 
     expect(getAllUsers).toHaveBeenCalledTimes(1);
     expect(result).toContainEqual({
       id: "id",
       name: "Marana",
       email: "marana@gmail.com",
       role: UserRole.ADMIN,
     });
   });
 });