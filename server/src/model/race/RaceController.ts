import { Request, Response } from "express";
import RaceRepository from "./RaceRepo";

export default class RaceController {
    static async add(req: Request, res: Response) {
        try {
            if (!req.body) {
                return res.status(400).json({ message: "Bad request !" })
            }

            const { name, primary_img, second_img, description } = req.body

            const result = await RaceRepository.create({ name, primary_img, second_img, description });

            if (result.insertId) {
                res.status(201).json({ message: "Success to create new race !", result });
            } else {
                res.status(500).json({ message: "Failed to create a new race !" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Error Server !" });
        }
    }

    static async readAll(req: Request, res: Response) {
        try {
            const response = await RaceRepository.read();

            if (!response) {
                return res.status(404).json({ message: "Races not found !" });
            }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json({ message: "Server Error !" })
        }
    }

    static async updateByName(req: Request, res: Response) {
        try {
            if (!req.body) {
                return res.status(400).json({ message: "Bad request !" })
            }

            const { name, primary_img, second_img, description } = req.body;

            const result = await RaceRepository.update({ name, primary_img, second_img, description });

            if (!result) {
                return res.status(404).json({ message: "Race not found !" });
            }
            return res.status(200).json({ message: "The race has been updated !" });
        } catch (error) {
            return res.status(500).json({ message: "Server Error !" });
        }
    }

    static async deleteByName(req: Request, res: Response) {
        try {
            if (!req.body) {
                return res.status(400).json({ message: "Bad request !" })
            }

            const { name } = req.body;

            const response = await RaceRepository.delete(name);

            if (!response) {
                return res.status(404).json({ message: "Race not found !" });
            }
            return res.status(204).json({ message: "The race has been deleted !" })
        } catch (error) {
            return res.status(500).json({ message: "Server Error !" });
        }
    }

}