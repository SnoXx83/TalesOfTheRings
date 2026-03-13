CREATE DATABASE tales_of_the_rings;
USE tales_of_the_rings;

CREATE TABLE faction(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE friend(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE enemy(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE
);
CREATE TABLE adventure(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE,
    primary_img VARCHAR(255) NOT NULL,
    date_of_adventure VARCHAR(100) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE region(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE,
    primary_img VARCHAR(255) NOT NULL,
    secondary_img VARCHAR(255),
    description TEXT NOT NULL
);

CREATE TABLE weapon(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE,
    primary_img VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE race(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE,
    primary_img VARCHAR(255) NOT NULL,
    seconday_img VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);
CREATE TABLE hero(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL UNIQUE,
    primary_img VARCHAR(255) NOT NULL,
    seconday_img VARCHAR(255) NOT NULL,
    thumbnail VARCHAR(255),
    date_of_birth VARCHAR(100) NOT NULL,
    date_of_death VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    race_id INT,
    faction_id INT,
    region_id INT,
    FOREIGN KEY(race_id) REFERENCES race(id),
    FOREIGN KEY(faction_id) REFERENCES faction(id),
    FOREIGN KEY(region_id) REFERENCES region(id)
);

CREATE TABLE hero_has_friend(
   hero_id INT,
   friend_id INT,
   PRIMARY KEY (hero_id, friend_id),
   FOREIGN KEY (hero_id) REFERENCES hero(id),
   FOREIGN KEY (friend_id) REFERENCES friend(id)
);

CREATE TABLE hero_has_enemy(
   hero_id INT,
   enemy_id INT,
   PRIMARY KEY (hero_id, enemy_id),
   FOREIGN KEY (hero_id) REFERENCES hero(id),
   FOREIGN KEY (enemy_id) REFERENCES enemy(id)
);

CREATE TABLE hero_has_adventure(
   hero_id INT,
   adventure_id INT,
   PRIMARY KEY (hero_id, adventure_id),
   FOREIGN KEY (hero_id) REFERENCES hero(id),
   FOREIGN KEY (adventure_id) REFERENCES adventure(id)
);

CREATE TABLE hero_has_weapon(
   hero_id INT,
   weapon_id INT,
   PRIMARY KEY (hero_id, weapon_id),
   FOREIGN KEY (hero_id) REFERENCES hero(id),
   FOREIGN KEY (weapon_id) REFERENCES weapon(id)
);




