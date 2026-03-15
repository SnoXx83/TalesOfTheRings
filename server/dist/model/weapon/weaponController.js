var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import WeaponRepo from './WeaponRepo';
export default class WeaponController {
    static browse(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const weapons = yield WeaponRepo.readAll();
                res.json(weapons);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "" });
            }
        });
    }
    static getOneWeapon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const weapon = yield WeaponRepo.readOne(id);
                if (!weapon) {
                    return res.status(404).json({ message: "Weapon not found" });
                }
                res.json(weapon);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Server error" });
            }
        });
    }
    static add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, primary_img, description } = req.body;
            if (!req.body) {
                return res.status(400).json({ message: "All fields are required" });
            }
            try {
                const id = yield WeaponRepo.create({ name, primary_img, description });
                res.status(201).json({ message: "Weapon created!" });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "Server error" });
            }
        });
    }
    static remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id)) {
                    return res.status(400).json({ message: "Request invalid" });
                }
                const deleted = yield WeaponRepo.delete(id);
                if (!deleted) {
                    return res.status(404).json({ message: "Weapon not found" });
                }
                res.status(204).send();
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: "server error" });
            }
        });
    }
}
