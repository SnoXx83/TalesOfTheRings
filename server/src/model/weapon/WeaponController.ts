import WeaponRepo from './WeaponRepo'
import { Response, Request} from 'express'

export default class WeaponController {

    static async browse(req: Request, res: Response) {
        try {
            const weapons = await WeaponRepo.readAll()
            res.json(weapons)
        } catch (error) {
            console.log(error)
            res.status(500).json({message:""})
        }
    }

    static async getOneWeapon(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const weapon = await WeaponRepo.readOne(id);

            if (!weapon) {
                return res.status(404).json({ message: "Weapon not found" });
            }

            res.json(weapon);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" });
        }
    }

    static async add(req: Request, res: Response) {
        const {name, primary_img, description} = req.body;
        if (!req.body) {
            return res.status(400).json({message: "All fields are required"});
        }
        try {
            const id = await WeaponRepo.create({name, primary_img, description});
            res.status(201).json({message: "Weapon created!"})
        } catch (error) {
           console.log(error);
           res.status(500).json({message: "Server error"})
        }
    }
    
    static async remove(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            if(isNaN(id)) {
                return res.status(400).json({message: "Request invalid"})
            }
            const deleted = await WeaponRepo.delete(id);
            if (!deleted) {
                return res.status(404).json({message: "Weapon not found"})
            }
            res.status(204).send()
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "server error"})
            
        }
    }
}