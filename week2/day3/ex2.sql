-- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.--
-- Update the language of specific films
-- UPDATE film
-- SET language_id = (
--    SELECT language_id FROM language WHERE name = 'French'
--)
-- WHERE title = 'Inception';

-- UPDATE film
-- SET language_id = (
--    SELECT language_id FROM language WHERE name = 'German'
--)
-- WHERE title = 'The Matrix';

-- 2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- The customer table typically has foreign keys referencing:
-- address_id (references the address table)
-- store_id (references the store table)
-- How does this affect INSERT?
-- When inserting into the customer table, you must ensure that the address_id and store_id values exist in their respective referenced tables (address and store). Otherwise, the insert will fail due to foreign key constraints.

-- 3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- Dropping the customer_review table is straightforward, but you should ensure that no other tables or processes depend on it. Use the following command:

-- DROP TABLE customer_review;

-- In this case it was an easy step! However in case we want to add extra Checking, we need first to see If the table is referenced by other tables (e.g., via foreign keys), you would need to drop those dependencies first or use CASCADE to drop them automatically:
-- DROP TABLE customer_review CASCADE;

-- 4. Find out how many rentals are still outstanding (i.e., have not been returned to the store yet).
--SELECT COUNT(*) AS outstanding_rentals
--FROM rental
--WHERE return_date IS NULL;

-- 5. Find the 30 most expensive movies which are outstanding (i.e., have not been returned to the store yet).
-- SELECT f.title, f.rental_rate
-- FROM film f
-- JOIN inventory i ON f.film_id = i.film_id
-- JOIN rental r ON i.inventory_id = r.inventory_id
-- WHERE r.return_date IS NULL
-- ORDER BY f.rental_rate DESC
-- LIMIT 30;

-- 6. Help your friend find the movies he wants to rent: 

-- The 1st film: The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- SELECT f.title, f.description
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
-- AND f.description LIKE '%sumo wrestler%';

-- The 2nd film: A short documentary (less than 1 hour long), rated “R”. 

-- SELECT f.title, f.description, f.length, f.rating
-- FROM film f
-- JOIN film_category fc ON f.film_id = fc.film_id
-- JOIN category c ON fc.category_id = c.category_id
-- WHERE c.name = 'Documentary'
-- AND f.length < 60
-- AND f.rating = 'R';

-- The 3rd film: A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- SELECT f.title, f.description
-- FROM film f
-- JOIN inventory i ON f.film_id = i.film_id
-- JOIN rental r ON i.inventory_id = r.inventory_id
-- JOIN payment p ON r.rental_id = p.rental_id
-- JOIN customer c ON r.customer_id = c.customer_id
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
-- AND p.amount > 4.00
-- AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- The 4th film: His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT f.title, f.description, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title LIKE '%boat%' OR f.description LIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;
