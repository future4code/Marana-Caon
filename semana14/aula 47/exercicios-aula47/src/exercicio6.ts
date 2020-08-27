//a)

//b)

//c)
import axios from 'axios';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";


const sendNotifications = async (
    users: User[],
    message: string
  ): Promise<void> => {
    const promiseArray = [];
    for (const user of users) {
      promiseArray.push(
        axios.post(`${baseUrl}/notifications/send`, {
          subscriberId: user.id,
          message: message,
        })
      );
    }
  
    await Promise.all(promiseArray);
  };