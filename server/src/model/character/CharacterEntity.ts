import { Enemy } from "../enemy/EnemyEntity";
import { Faction } from "../faction/FactionEntity";
import { Friend } from "../friend/FriendEntity";
import { Race } from "../race/RaceEntity";
import { Region } from "../region/RegionEntity";
import { Weapon } from "../weapon/WeaponEntity";

export interface Character {
  id: number;
  name: string;
  primary_img: string;
  second_img: string;
  thumbnail: string;
  dateOfBirth: string;
  dateOfDeath: string;
  description: string;
  race: Race;
  faction: Faction;
  region: Region;
  enemies: Enemy[];
  friends: Friend[];
  weapons: Weapon[];
  events: Event[];
}
