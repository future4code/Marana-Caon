import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "TestsPosts";

  public async createPost(id: string, photo: string, description: string, createdAt: string, type: string): Promise<void>{

    try {

        await this.getConnection()
        .insert({
            id,
            photo,
            description,
            createdAt,
            type
        })
        .into(PostDatabase.TABLE_NAME);
        
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }

}

  public async getPostById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(PostDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deletePostById(id: string): Promise<any> {
    await this.getConnection()
      .delete()
      .from(PostDatabase.TABLE_NAME)
      .where({ id });
  }
}
