INSERT INTO users (username, email, password) VALUES 
  ('Zaher', 'zaherabuamro@gmail.com', '12345'),
  ('John', 'john@gmail.com', 'johnpassword'),
  ('Jill', 'jill@gmail.com', 'Jillpassword'),
  ('John', 'john@gmail.com', 'Jaredpassword'),
  ('Ali', 'Ali@gmail.com', 'Alipassword');

INSERT INTO posts(title, content, likes, comments, image_url, user_id) VALUES 
  ('Post 1', 'This is the first post', 10, 5, 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 1),
  ('Post 2', 'This is the second post', 100, 5, 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 2),
  ('Post 3', 'This is the third post', 0, 5, 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 3),
  ('Post 4', 'This is the fourth post', 34, 5, 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 4),
  ('Post 5', 'This is the fifth post', 646, 5, 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 5);

INSERT INTO comments (content, user_id, post_id) VALUES
  ('This is the first comment', 1, 1),
  ('This is the second comment', 2, 1),
  ('This is the third comment', 3, 1),
  ('This is the fourth comment', 4, 1),
  ('This is the fifth comment', 5, 1),
  ('This is the sixth comment', 1, 2),
  ('This is the seventh comment', 2, 2),
  ('This is the eighth comment', 3, 2),
  ('This is the ninth comment', 4, 2),
  ('This is the tenth comment', 5, 2),
  ('This is the eleventh comment', 1, 3),
  ('This is the twelfth comment', 2, 3),
  ('This is the thirteenth comment', 3, 3),
  ('This is the fourteenth comment', 4, 3),
  ('This is the fifteenth comment', 5, 3),
  ('This is the sixteenth comment', 1, 4),
  ('This is the seventeenth comment', 2, 4),
  ('This is the eighteenth comment', 3, 4),
  ('This is the nineteenth comment', 4, 4),
  ('This is the twentieth comment', 5, 4),
  ('This is the twenty first comment', 1, 5),
  ('This is the twenty second comment', 2, 5),
  ('This is the twenty third comment', 3, 5),
  ('This is the twenty fourth comment', 4, 5),
  ('This is the twenty fifth comment', 5, 5);