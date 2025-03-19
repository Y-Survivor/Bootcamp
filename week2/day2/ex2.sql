-- 1. Select all columns from the customer table:--
-- select * from customer;--

-- 2. Display names (first_name, last_name) using an alias named full_name:--
-- SELECT first_name || ' ' || last_name AS full_name FROM customer; --

-- 3. Select all create_date from the customer table (no duplicates):
-- SELECT DISTINCT create_date FROM customer;

-- 4. Get all customer details, displayed in descending order by first_name:--
-- SELECT * FROM customer ORDER BY first_name DESC; --

-- 5. Get film_id, title, description, release_year, and rental_rate in ascending order by rental_rate:--

-- select film_id, title, description, release_year,rental_rate
-- from film
-- order by rental_rate asc;

-- 6. Get address and phone of all customers living in the Texas district:--
-- SELECT address, phone
-- FROM address
-- WHERE district = 'Texas';

-- 7. Retrieve all movie details where the film_id is either 15 or 150:--
-- SELECT *
-- FROM film
-- WHERE film_id IN (15, 150);

-- 8. Check if your favorite movie exists in the database (replace 'Your Favorite Movie' with the actual title):
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'Anthem Luke';

-- 9. Get details of movies starting with the first two letters of your favorite movie (replace 'Yo' with the first two letters of your favorite movie):
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title LIKE 'An%';

-- 10. Find the 10 cheapest movies:
-- SELECT *
-- FROM film
-- ORDER BY rental_rate ASC
-- LIMIT 10;

-- 11. Find the next 10 cheapest movies (without using LIMIT):
-- SELECT *
-- FROM film
-- ORDER BY rental_rate ASC
-- OFFSET 10
-- LIMIT 10;

-- 12. Join customer and payment tables to get customer names, payment amount, and payment date, ordered by customer_id:
-- SELECT c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer c
-- JOIN payment p ON c.customer_id = p.customer_id
-- ORDER BY c.customer_id;

-- 13. Get all movies not in inventory:
-- SELECT f.*
-- FROM film f
-- LEFT JOIN inventory i ON f.film_id = i.film_id
-- WHERE i.inventory_id IS NULL;

-- 14. Find which city is in which country:
-- SELECT ci.city, co.country
-- FROM city ci
-- JOIN country co ON ci.country_id = co.country_id;

-- 15. Bonus: Get customer ID, names, payment amount, and payment date, ordered by staff_id:
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id;

