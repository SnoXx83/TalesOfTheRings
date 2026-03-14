var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import RaceRepository from "./RaceRepo";
export default class RaceController {
    static add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body) {
                    return res.status(400).json({ message: "Bad request !" });
                }
                const { name, primary_img, second_img, description } = req.body;
                const result = yield RaceRepository.create({ name, primary_img, second_img, description });
                if (result.insertId) {
                    res.status(201).json({ message: "Success to create new race !", result });
                }
                else {
                    res.status(500).json({ message: "Failed to create a new race !" });
                }
            }
            catch (error) {
                return res.status(500).json({ message: "Error Server !" });
            }
        });
    }
    static readAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield RaceRepository.read();
                if (!response) {
                    return res.status(404).json({ message: "Races not found !" });
                }
                return res.status(200).json(response);
            }
            catch (error) {
                return res.status(500).json({ message: "Server Error !" });
            }
        });
    }
    static updateByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body) {
                    return res.status(400).json({ message: "Bad request !" });
                }
                const { name, primary_img, second_img, description } = req.body;
                const result = yield RaceRepository.update({ name, primary_img, second_img, description });
                if (!result) {
                    return res.status(404).json({ message: "Race not found !" });
                }
                return res.status(200).json({ message: "The race has been updated !" });
            }
            catch (error) {
                return res.status(500).json({ message: "Server Error !" });
            }
        });
    }
    static deleteByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body) {
                    return res.status(400).json({ message: "Bad request !" });
                }
                const { name } = req.body;
                const response = yield RaceRepository.delete(name);
                if (!response) {
                    return res.status(404).json({ message: "Race not found !" });
                }
                return res.status(204).json({ message: "The race has been deleted !" });
            }
            catch (error) {
                return res.status(500).json({ message: "Server Error !" });
            }
        });
    }
}
