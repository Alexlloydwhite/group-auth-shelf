
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO item (description, image_url, user_id) VALUES 
('Fly You Fools', 'https://i.imgur.com/SM96caR.gif', 1),
('Rockin', 'https://i.imgur.com/0tykmxD.gif', 1),
('Too Long...', 'https://i.imgur.com/EdPLU67.gif', 1),
('GD APPLE', 'https://www.markon.com/sites/default/files/styles/large/public/pi_photos/Apples_Honeycrisp_Hero.jpg', 2);


-- comments