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
export default class RaceRepository {
    static create(race) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, primary_img, second_img, description } = race;
            const [result] = yield db.query('INSERT INTO race (name, primary_img, second_img, description) VALUES (?,?,?,?)', [name, primary_img, second_img, description]);
            return result;
        });
    }
    static read() {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield db.query('SELECT * FROM race');
            return result;
        });
    }
    static update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, primary_img, second_img, description } = data;
            const [result] = yield db.query('UPDATE `race` SET `name` = ?, `primary_img` = ?, `second_img` = ?, `description` = ? WHERE `name` = ?', [name, primary_img, second_img, description, name]);
            return result;
        });
    }
    static delete(race) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = race;
            const [result] = yield db.query('DELETE FROM `race` WHERE `name` = ? LIMIT 1', [name]);
            return result;
        });
    }
}
