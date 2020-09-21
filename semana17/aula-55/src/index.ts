import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import { Authenticator } from "./services/Authenticator";
import { UserDatabase } from "./data/UserDataBase";

/*****************************************************/

dotenv.config();

/****************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3306, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;


/****************************************************/

const idgenerator = new IdGenerator();
const id = idgenerator.generatId();
console.log('ID: ', id)

/****************************************************/

const authenticator = new Authenticator();
const token = authenticator.generateToken({id});
console.log('TOKEN: ', token)


/****************************************************/

const creatingUser = new UserDatabase();
creatingUser.createUser(`${id}`, 'ludovico@gmail.com', '654321');