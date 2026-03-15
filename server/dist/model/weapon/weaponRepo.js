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
//
export default class WeaponRepo {
    static create(weapon) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db.query("INSERT INTO weapon(name, primary_img, description) VALUES (?, ?, ?)", [weapon.name, weapon.primary_img, weapon.description]);
            return result.insertId;
        });
    }
    static readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield db.query("SELECT * FROM weapon");
            return rows;
        });
    }
    static readOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [row] = yield db.query("SELECT * FROM weapon WHERE id = ?", [id]);
            return row;
        });
    }
    static update(id, weapon) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db.query("UPDATE weapon SET name ?, primary_img = ?, description = ? WHERE id = ?", [weapon.name, weapon.primary_img, weapon.description, id]);
            return result.affectedRows > 0;
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db.query("DELETE FROM weapon WHERE id = ?", [id]);
            return result.affectedRows > 0;
        });
    }
}
