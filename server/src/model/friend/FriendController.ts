import { NextFunction, Response, Request } from "express";
import FriendRepo from "./FriendRepo";

export default class FriendController {
   // creer un friend :
   // recuperer données depuis le body
   // appeler methode du repo
   // attendre reponse l id de la db : (insertId)
   // renvoyer succes si creation
   //
   static async add(req: Request, res: Response, next: NextFunction) {
      try {
         const newFriend = req.body;
         const insertId = await FriendRepo.create(newFriend);
         res.status(201).json({ insertId });
      } catch (error) {
         next(error);
      }
   }
   static async getAll(req: Request, res: Response, next: NextFunction) {
      try {
         const friends = await FriendRepo.read();
         res.json(friends);
      } catch (error) {
         next(error);
      }
   }
   // recupere l id depuis url ( req.params)
   //    on verify que le params dans l url est bien un nombre
   // recupere les modification depuis le body
   // appeler methode du repo
   // rnevoyer succes ou pas
   static async modify(req: Request, res: Response, next: NextFunction) {
      try {
         const id = Number(req.params.id);
         const newFriend = req.body;
         if (isNaN(id)) {
            return res.status(400).json({ message: "id invalide" });
         }
         const isUpdated = await FriendRepo.update(id, newFriend);
         if (!isUpdated) {
            res.status(404).json({ message: "update failed" });
         } else {
            res.sendStatus(204);
         }
      } catch (error) {
         next(error);
      }
   }
   //    recupere id depuis params
   // verifier si id est un number
   // appeler methode du repo
   // succes ou pas
   static async destroy(req: Request, res: Response, next: NextFunction) {
      try {
         const id = Number(req.params.id);
         if (isNaN(id)) {
            return res.status(400).json({ message: "invalide id" });
         }

         const isDeleted = await FriendRepo.delete(id);
         if (!isDeleted) {
            res.status(404).json({ message: "not deleted" });
         } else {
            res.sendStatus(204);
         }
      } catch (error) {
         next(error);
      }
   }
}
