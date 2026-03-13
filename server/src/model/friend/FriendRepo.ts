import type { Friend } from "./FriendEntity";
import { db } from "../../database/db.config";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

type FriendRow = Friend & RowDataPacket;

export default class FriendRepo {
   // inserer un nouveau friend dans la table friend
   // executer la requete insert into et recuperer le header
   // return insertId
   static async create(friend: Omit<Friend, "id">): Promise<number> {
      const [result] = await db.query<ResultSetHeader>(
         "INSERT INTO friend (name) VALUES (?)",
         [friend.name],
      );
      if (result.affectedRows === 0) {
         throw new Error("Insert failed");
      }
      return result.insertId;
   }
   static async read(): Promise<Friend[]> {
      const [rows] = await db.query<FriendRow[]>("SELECT * FROM friend");
      return rows;
   }
   //    update :
   // recuperer id a modifier + l objet friend
   // executer la requete sql de modification
   // return boolean (si ligne toucher === true sinon false)
   static async update(id: number, friend: Partial<Friend>): Promise<boolean> {
      const [result] = await db.query<ResultSetHeader>(
         "UPDATE friend SET name = ? WHERE id=?",
         [friend, id],
      );
      return result.affectedRows > 0;
   }
   //    recuperer l'id de l objet a delete
   // executer la requete sql
   // return boolean (si ligne toucher === true sinon false)
   static async delete(id: number): Promise<boolean> {
      const [result] = await db.query<ResultSetHeader>(
         "DELETE FROM friend WHERE id = ?",
         [id],
      );
      return result.affectedRows > 0;
   }
}
