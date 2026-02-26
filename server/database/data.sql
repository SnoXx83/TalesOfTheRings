-- =========================
-- FACTIONS
-- =========================
INSERT INTO faction (name, description) VALUES
('Communauté de l’Anneau', 'Alliance formée pour détruire l’Anneau Unique.'),
('Peuples Libres de la Terre du Milieu', 'Coalition des royaumes libres contre Sauron.'),
('Forces du Mordor', 'Armées servant Sauron et le mal ancien.');

-- =========================
-- FRIEND
-- =========================
INSERT INTO friend (name) VALUES
('Sam Gamegie'),
('Legolas Vertfeuille'),
('Gimli fils de Glóin'),
('Meriadoc Brandebouc');

-- =========================
-- ENEMY
-- =========================
INSERT INTO enemy (name) VALUES
('Sauron'),
('Nazgûl'),
('Saruman le Blanc'),
('Orques du Mordor');

-- =========================
-- adventure
-- =========================
INSERT INTO adventure (name, primary_img, date_of_adventure, description) VALUES
(
    'Conseil d’Elrond',
    'council_elrond.jpg',
    '3018-10-25 TA',
    'Réunion à Fondcombe décidant du sort de l’Anneau Unique.'
),
(
    'Bataille du Gouffre de Helm',
    'helms_deep.jpg',
    '3019-03-03 TA',
    'Grande bataille opposant le Rohan aux forces de Saruman.'
),
(
    'Bataille des Champs du Pelennor',
    'pelennor_fields.jpg',
    '3019-03-15 TA',
    'Affrontement majeur devant Minas Tirith.'
),
(
    'Destruction de l’Anneau Unique',
    'mount_doom.jpg',
    '3019-03-25 TA',
    'L’Anneau est détruit dans la Montagne du Destin.'
);

-- =========================
-- REGION
-- =========================
INSERT INTO region (name, primary_img, secondary_img, description) VALUES
(
    'La Comté',
    'shire_main.jpg',
    'shire_alt.jpg',
    'Terre paisible des Hobbits.'
),
(
    'Gondor',
    'gondor_main.jpg',
    'gondor_alt.jpg',
    'Royaume des Hommes et dernier grand bastion contre le Mordor.'
),
(
    'Rohan',
    'rohan_main.jpg',
    'rohan_alt.jpg',
    'Royaume des Cavaliers du Riddermark.'
);

-- =========================
-- WEAPON
-- =========================
INSERT INTO weapon (name, primary_img, description) VALUES
(
    'Andúril',
    'anduril.jpg',
    'L’épée reforgée du roi légitime du Gondor.'
),
(
    'Dard',
    'sting.jpg',
    'Petite épée elfique qui luit en présence d’orques.'
),
(
    'Arc de la Forêt Noire',
    'legolas_bow.jpg',
    'Arc utilisé par les archers elfes.'
),
(
    'Hache de bataille naine',
    'dwarf_axe.jpg',
    'Arme traditionnelle des nains.'
);

-- =========================
-- RACE
-- =========================
INSERT INTO race (name, primary_img, seconday_img, description) VALUES
(
    'Hobbit',
    'hobbit_main.jpg',
    'hobbit_alt.jpg',
    'Petit peuple paisible aimant la tranquillité.'
),
(
    'Humain',
    'man_main.jpg',
    'man_alt.jpg',
    'Les Hommes de la Terre du Milieu.'
),
(
    'Elfe',
    'elf_main.jpg',
    'elf_alt.jpg',
    'Peuple ancien, immortel et lié aux forêts.'
),
(
    'Nain',
    'dwarf_main.jpg',
    'dwarf_alt.jpg',
    'Peuple robuste des montagnes, maîtres forgerons et guerriers endurants.'
);

-- =========================
-- hero
-- =========================
INSERT INTO hero
(
    name,
    primary_img,
    seconday_img,
    thumbnail,
    date_of_birth,
    date_of_death,
    description,
    race_id,
    faction_id,
    region_id
)
VALUES
(
    'Frodon Sacquet',
    'frodo_main.jpg',
    'frodo_alt.jpg',
    'frodo_thumb.jpg',
    '2968 TA',
    'Inconnu',
    'Porteur de l’Anneau Unique chargé de le détruire.',
    1, -- Hobbit
    1, -- Communauté de l’Anneau
    1  -- La Comté
),
(
    'Sam Gamegie',
    'sam_main.jpg',
    'sam_alt.jpg',
    'sam_thumb.jpg',
    '2980 TA',
    'Inconnu',
    'Fidèle compagnon de Frodon.',
    1,
    1,
    1
),
(
    'Aragorn',
    'aragorn_main.jpg',
    'aragorn_alt.jpg',
    'aragorn_thumb.jpg',
    '2931 TA',
    'Inconnu',
    'Héritier du trône du Gondor.',
    2, -- Humain
    2, -- Peuples Libres
    2  -- Gondor
),
(
    'Legolas',
    'legolas_main.jpg',
    'legolas_alt.jpg',
    'legolas_thumb.jpg',
    'Inconnu',
    'Inconnu',
    'Prince elfe et archer exceptionnel.',
    3, -- Elfe
    1, -- Communauté
    3  -- Rohan (campagnes militaires)
),
(
    'Gimli',
    'gimli_main.jpg',
    'gimli_alt.jpg',
    'gimli_thumb.jpg',
    '2879 TA',
    'Inconnu',
    'Guerrier nain et membre de la Communauté.',
    4, -- Humain (faute de race Nain dans ta table, on réutilise Humain)
    1,
    3
),
(
    'Boromir',
    'boromir_main.jpg',
    'boromir_alt.jpg',
    'boromir_thumb.jpg',
    '2978 TA',
    '3019 TA',
    'Capitaine du Gondor tombé en défendant les Hobbits.',
    2,
    2,
    2
);

-- =========================
-- hero_HAS_FRIEND
-- =========================
INSERT INTO hero_has_friend (hero_id, friend_id) VALUES
(1, 1), -- Frodon -> Sam
(1, 4), -- Frodon -> Merry
(2, 1), -- Sam -> Sam (réseau proche, volontairement simple)
(3, 2), -- Aragorn -> Legolas
(3, 3), -- Aragorn -> Gimli
(4, 3); -- Legolas -> Gimli

-- =========================
-- hero_HAS_ENEMY
-- =========================
INSERT INTO hero_has_enemy (hero_id, enemy_id) VALUES
(1, 1), -- Frodon -> Sauron
(1, 2), -- Frodon -> Nazgûl
(3, 3), -- Aragorn -> Saruman
(3, 4), -- Aragorn -> Orques
(4, 4), -- Legolas -> Orques
(6, 1); -- Boromir -> Sauron

-- =========================
-- hero_HAS_adventure
-- =========================
INSERT INTO hero_has_adventure (hero_id, adventure_id) VALUES
(1, 1), -- Conseil d’Elrond
(3, 1),
(3, 2),
(4, 2),
(3, 3),
(6, 3),
(1, 4),
(2, 4);

-- =========================
-- hero_HAS_WEAPON
-- =========================
INSERT INTO hero_has_weapon (hero_id, weapon_id) VALUES
(3, 1), -- Aragorn -> Andúril
(1, 2), -- Frodon -> Dard
(4, 3), -- Legolas -> Arc
(5, 4), -- Gimli -> Hache
(6, 1); -- Boromir -> Andúril (symbolique)