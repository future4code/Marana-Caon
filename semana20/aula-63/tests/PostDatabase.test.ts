import { PostDatabase } from "../src/data/PostDatabase";
import { BaseDatabase } from "../src/data/BaseDatabase"
import * as dotenv from "dotenv"

dotenv.config();

// Exercício 6

  // a)

  describe("Testando o PostDatabase", () => {

      const postDatabase = new PostDatabase();
    
    test("Create Post", async () => {
      
      const post = {
        id: "123",
        photo: "Foto",
        description: "Descrição",
        createdAt: "28/09/2020",
        type: "Normal"
      };
    
      await postDatabase.createPost(post.id, post.photo, post.description, post.createdAt, post.type);
      const postFromDb = await postDatabase.getPostById(post.id);
    
      expect(postFromDb).not.toBe(undefined);
      expect(postFromDb).toEqual({
        id: "123",
        photo: "Foto",
        description: "Descrição",
        createdAt: "28/09/2020",
        type: "Normal"
      });
    });

    test("Create Post", async () => {
        try {
          const post = {
            id: "123",
            photo: "Foto",
            description: "Descrição",
            createdAt: "28/09/2020",
            type: "Normal"
          };
      
          await postDatabase.createPost(post.id, post.photo, post.description, post.createdAt, post.type);
          await postDatabase.createPost(post.id, post.photo, post.description, post.createdAt, post.type);
        } catch (err) {
          expect(err).not.toBe(undefined)
        }
      });

    afterAll(async () => {
        await postDatabase.deletePostById("123");
        await BaseDatabase.destroyConnection();
    });
});
