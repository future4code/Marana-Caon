import { PostDatabase } from "../src/data/PostDatabase";

// Exercício 6

  // a)

  describe("Testando o PostDatabase", () => {

      const postDatabase = new PostDatabase();
    
    test("Create Post", async () => {
      
      const post = {
        id: "id do post",
        title: "Título",
        content: "Conteúdo",
      };
    
      await postDatabase.createPost(post.id, post.title, post.content);
      const postFromDb = await postDatabase.getPostById(post.id);
    
      expect(postFromDb).not.toBe(undefined);
      expect(postFromDb).toEqual({
        id: "id do post",
        title: "Título",
        content: "Conteúdo",
      });
    });
  });
  
