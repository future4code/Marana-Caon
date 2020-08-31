//a)

//b)
import axios from 'axios';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const getSubscribers = async (): Promise<any[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data;
  };

  console.log(getSubscribers)

