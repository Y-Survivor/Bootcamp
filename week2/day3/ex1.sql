1. Get a list of all the languages from the language table. 
-- SELECT name FROM language; --

2. Get a list of all films joined with their languages – select the following details: film title, description, and language name.
-- SELECT f.title, f.description, l.name AS language_name
-- FROM film f
-- JOIN language l ON f.language_id = l.language_id;--

3. Get all languages, even if there are no films in those languages – select the following details: film title, description, and language name.
-- SELECT f.title, f.description, l.name AS language_name
-- FROM language l
-- LEFT JOIN film f ON l.language_id = f.language_id;--

4. Create a new table called new_film with the following columns: id, name. Add some new films to the table.
-- Create the new_film table
-- CREATE TABLE new_film (
--  id SERIAL PRIMARY KEY,
--  name VARCHAR(255) NOT NULL
-- );

-- Add some new films
-- INSERT INTO new_film (name) VALUES
--('Inception'),
--('The Matrix'),
--('Interstellar');--

5. Create a new table called customer_review, which will contain film reviews that customers will make.
-- Create the customer_review table
--CREATE TABLE customer_review (
  --  review_id SERIAL PRIMARY KEY,
  --  film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
  --  language_id INT REFERENCES language(language_id),
  --  title VARCHAR(255) NOT NULL,
  --  score INT CHECK (score >= 1 AND score <= 10),
  --  review_text TEXT,
  --  last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
--);

6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- Add reviews for films in the new_film table
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES
-- (1, 1, 'Mind-blowing!', 9, 'Inception is a masterpiece of storytelling and visuals.'),
-- (2, 1, 'Revolutionary!', 10, 'The Matrix redefined the sci-fi genre.');--

7. Delete a film that has a review from the new_film table. What happens to the customer_review table?

Delete a film from the new_film table
DELETE FROM new_film WHERE id = 1;