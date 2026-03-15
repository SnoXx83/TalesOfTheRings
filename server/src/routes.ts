import express from "express";
import friendController from "./model/friend/FriendController.js";

const router = express.Router();

router.get("/api/v1/friends", friendController.getAll);

export default router;
