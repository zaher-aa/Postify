BEGIN;
DROP TABLE IF EXISTS users ,post ,comments CASCADE;
CREATE TABLE user(
    id SERIAL PRIMARY KEY,
    username VARCHAR (255)NOT NULL,
    email TEXT NOT NOT,

)
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    post_id INT FOREIGN KEY,
   user_id INT FOREIGN KEY,
  

)
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL;
    title TEXT NOT NULL;
    likes INT NOT NULL;
    image_url TEXT NOT NULL;
    user_id FOREIGN KEY;

)
COMMIT;