import { ResultSetHeader, RowDataPacket } from "mysql2";
import {db} from "../../database/db.config";
import {Weapon}  from "./WeaponEntity";

export default class WeaponRepo {

   static async create(weapon: Omit<Weapon, "id">): Promise<number> {
    const [result] = await db.query<ResultSetHeader>("INSERT INTO weapon(name, primary_img, description) VALUES (?, ?, ?)",
        [weapon.name, weapon.primary_img, weapon.description]
    );
    return result.insertId;
    }
    static async readAll(): Promise<Weapon[]> {
        const [rows] = await db.query<(Weapon & RowDataPacket)[]>("SELECT * FROM weapon")
        return rows
    }
    
    static async readOne(id: number): Promise<Weapon>{
        const [row] = await db.query<Weapon & RowDataPacket[]>("SELECT * FROM weapon WHERE id = ?",[id])
        return row
    }
  
    static async update(id: number, weapon: Partial<Omit<Weapon, "id">>): Promise<boolean>{
        const [result] = await db.query<ResultSetHeader>("UPDATE weapon SET name ?, primary_img = ?, description = ? WHERE id = ?",
            [weapon.name, weapon.primary_img, weapon.description, id]
        );
        return result.affectedRows > 0;
    }
    
    static async delete(id: number) {
        const [result] = await db.query<ResultSetHeader>("DELETE FROM weapon WHERE id = ?", [id])
        return result.affectedRows > 0;
    }
}


