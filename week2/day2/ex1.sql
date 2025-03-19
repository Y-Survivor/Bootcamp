-- 1) All items, ordered by price (lowest to highest):--
-- select * from items ORDER BY PRICE ASC; --

-- 2) Items with a price above 80 (80 included), ordered by price (highest to lowest).--
-- select * from items where price >= 80 order by price DESC; --

-- 3) The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results. --
-- SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3; --

-- 4) All last names (no other columns!), in reverse alphabetical order (Z-A):--
select  last_name from customers order by last_name DESC;
