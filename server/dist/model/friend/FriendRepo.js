var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { db } from "../../database/db.config";
export default class FriendRepo {
    // inserer un nouveau friend dans la table friend
    // executer la requete insert into et recuperer le header
    // return insertId
    static create(friend) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db.query("INSERT INTO friend (name) VALUES (?)", [friend.name]);
            if (result.affectedRows === 0) {
                throw new Error("Insert failed");
            }
            return result.insertId;
        });
    }
    static read() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield db.query("SELECT * FROM friend");
            return rows;
        });
    }
    //    update :
    // recuperer id a modifier + l objet friend
    // executer la requete sql de modification
    // return boolean (si ligne toucher === true sinon false)
    static update(id, friend) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db.query("UPDATE friend SET name = ? WHERE id=?", [friend, id]);
            return result.affectedRows > 0;
        });
    }
    //    recuperer l'id de l objet a delete
    // executer la requete sql
    // return boolean (si ligne toucher === true sinon false)
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db.query("DELETE FROM friend WHERE id = ?", [id]);
            return result.affectedRows > 0;
        });
    }
}
