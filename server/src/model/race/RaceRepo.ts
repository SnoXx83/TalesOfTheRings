import { ResultSetHeader, RowDataPacket } from "mysql2";
import { db } from "../../database/db.config";
import { Race } from "./RaceEntity";

export default class RaceRepository {
    static async create(race: Omit<Race, "id">): Promise<ResultSetHeader> {

        const { name, primary_img, second_img, description } = race;

        const [result] = await db.query<ResultSetHeader>('INSERT INTO race (name, primary_img, second_img, description) VALUES (?,?,?,?)',
            [name, primary_img, second_img, description]
        );

        return result;
    }

    static async read(): Promise<RowDataPacket[]> {
        const [result] = await db.query<RowDataPacket[]>('SELECT * FROM race');

        return result;
    }

    static async update(data: Omit<Race, "id">): Promise<ResultSetHeader> {

        const { name, primary_img, second_img, description } = data;

        const [result] = await db.query<ResultSetHeader>('UPDATE `race` SET `name` = ?, `primary_img` = ?, `second_img` = ?, `description` = ? WHERE `name` = ?', [name, primary_img, second_img, description, name]);

        return result;
    }

    static async delete(race: Omit<Race, "id">): Promise<ResultSetHeader> {

        const { name } = race;

        const [result] = await db.query<ResultSetHeader>('DELETE FROM `race` WHERE `name` = ? LIMIT 1',
            [name]
        )

        return result;
    }

}