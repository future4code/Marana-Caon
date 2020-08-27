//a)

//b)
import axios from 'axios';

const baseUrl: string = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const sendNotifications = async (
    users: User[],
    message: string
  ): Promise<void> => {
    const promiseArray: Promise<any>[] = [];
    for (const user of users) {
      await axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: user.id,
        message: message,
      });
    }
  
    console.log("All notifications sent");
  };