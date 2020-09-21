import knex from "knex";
import dotenv from "dotenv";
import express, { Response, Request }from "express";
import { AddressInfo } from "net";

/***********************************************/

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/***********************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


/***********************************************/

// async function createUserTable(): Promise<void> {
//     try {
//         await connection.raw(`
// //             CREATE TABLE ToDoListUser (
//               	id INT PRIMARY KEY AUTO_INCREMENT, 
//                  name VARCHAR(255) NULL, 
//                  nickname VARCHAR(255) UNIQUE NOT NULL, 
//                  email VARCHAR(255) UNIQUE NOT NULL
//                );
//         `) 
//          console.log("Sucesso")
//     } catch (error) {
//          console.log(error)
//     }
//    }

//    createUserTable();

// 1
async function createNewUser(
    name: string,
    nickname: string,
    email: string
): Promise<void> {
    await connection
        .insert({ name, nickname, email })
        .into("ToDoListUser")
}


app.put("/user", async (req: Request, res: Response)=>{
    try{ 
       await createNewUser(
           req.body.name as string,
           req.body.nickname as string,
           req.body.email as string
       )
       res.status(200).send({message: "Usuário criado com sucesso!"});
    }catch(error){
       res.status(400).send({message: error.message});
    }
 });

//  createNewUser("Patrícia", "patimaionese", "pati@gmail.com");

// 2
const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM ToDoListUser WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

// async function getUserById(id: string) {}

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id);

    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// 3

const updateUser = async(id: string, name: string, nickname: string): Promise<void> => {
    try {
        await connection("ToDoListUser")
        .update({
            name,
            nickname
        })
        .where({id})
    } catch {

    }
}

app.post("/user/edit/:id", async (req: Request, res: Response)=>{
    try{ 
       const id = req.params.id;
       const user = await updateUser(id, name, nickname);

       res.status(200).send({message: "Usuário alterado com sucesso!"});
    }catch(error){
       res.status(400).send({message: error.message});
    }
 });