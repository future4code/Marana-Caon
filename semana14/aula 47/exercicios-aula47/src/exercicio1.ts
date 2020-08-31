//a) O get /subscribers/all;

//b) Promise<any[]>;

//c):
import axios from 'axios';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

async function getSubscribers(): Promise<any[]> {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data;
  };

  console.log(getSubscribers)