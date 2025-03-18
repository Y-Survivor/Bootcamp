SELECT COUNT(*) AS total_actors
FROM actors;

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('', '', NULL, NULL);

/*This ERROR is because blank fields ('') or NULL values are not allowed in columns 
with NOT NULL constraints.*/
