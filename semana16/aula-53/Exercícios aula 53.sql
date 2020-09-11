USE `turing-marana-caon`;

### Exercício 1

SELECT * FROM Actor;

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)

a)

b)

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);

c)
d)

ALTER TABLE Movie DROP COLUMN rating;

e)

### Exercício 2

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

a)
b)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
)

c)
d)

### Exercício 3

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

a)
b)

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;

### Exercício 4

a)

SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;

b)

SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

c)

SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;


### Exercício 5

SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

a)

b)

SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

c)

SELECT 
		m.id as movie_id, 
    m.title, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movie m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

d)

### Exercício 6

a)

b)

c)

d)
