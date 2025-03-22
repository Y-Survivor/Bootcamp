/*Summary of Outputs:
Q1: 0

Q2: 2

Q3: 0

Q4: 3


/*-- Create FirstTab table
CREATE TABLE FirstTab (
    id INTEGER, 
    name VARCHAR(10)
);

-- Insert data into FirstTab
INSERT INTO FirstTab (id, name) VALUES
(5, 'Pawan'),
(6, 'Sharlee'),
(7, 'Krish'),
(NULL, 'Avtaar');

-- Select all data from FirstTab
SELECT * FROM FirstTab;

-- Create SecondTab table
CREATE TABLE SecondTab (
    id INTEGER
);

-- Insert data into SecondTab
INSERT INTO SecondTab (id) VALUES
(5),
(NULL);

-- Select all data from SecondTab
SELECT * FROM SecondTab;*/

/* 
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
*/

  SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )