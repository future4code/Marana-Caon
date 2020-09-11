import { Client } from "./Client";

class ClientManager {
    private clients: Client[] = [];
  
    // demais implementações
  
    public getClientsQuantity(): number {
      return this.clients.length;
    }
  }