var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import FriendRepo from "./FriendRepo";
export default class FriendController {
    // creer un friend :
    // recuperer données depuis le body
    // appeler methode du repo
    // attendre reponse l id de la db : (insertId)
    // renvoyer succes si creation
    //
    static add(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newFriend = req.body;
                const insertId = yield FriendRepo.create(newFriend);
                res.status(201).json({ insertId });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const friends = yield FriendRepo.read();
                res.json(friends);
            }
            catch (error) {
                next(error);
            }
        });
    }
    // recupere l id depuis url ( req.params)
    //    on verify que le params dans l url est bien un nombre
    // recupere les modification depuis le body
    // appeler methode du repo
    // rnevoyer succes ou pas
    static modify(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const newFriend = req.body;
                if (isNaN(id)) {
                    return res.status(400).json({ message: "id invalide" });
                }
                const isUpdated = yield FriendRepo.update(id, newFriend);
                if (!isUpdated) {
                    res.status(404).json({ message: "update failed" });
                }
                else {
                    res.sendStatus(204);
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    //    recupere id depuis params
    // verifier si id est un number
    // appeler methode du repo
    // succes ou pas
    static destroy(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (isNaN(id)) {
                    return res.status(400).json({ message: "invalide id" });
                }
                const isDeleted = yield FriendRepo.delete(id);
                if (!isDeleted) {
                    res.status(404).json({ message: "not deleted" });
                }
                else {
                    res.sendStatus(204);
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
}
