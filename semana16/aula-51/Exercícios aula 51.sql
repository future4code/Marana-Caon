USE `turing-marana-caon`;

### Exercício 1
### a) 
### b) SHOW DATABASES: mostra a database onde está trabalhando e SHOW TABLE mostra as tabelas criadas;
### c)

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;


### Exercício 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

### a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

### b) "Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'", "entrada 002 duplicada para chave primária", de ter repetido o id

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Meryl Streep",
  40000000,
  "1949-07-22", 
  "female"
);

### c) "Error Code: 1136. Column count doesn't match value count at row 1", "1 row(s) affected",
### "Contagem de colunas não está semelhante a contagem da linha 1", de estarem faltando parâmetros.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

### d) Error Code: 1364. Field 'name' doesn't have a default value
### "O campo nome não tem um valor padrão", de faltar o nome do ator.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

### e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
### "Valor incorreto de data: '1950' para coluna 'birth_date' na linha 1", de formato da data de aniverário estar errada, precisa ser entre "".

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

### Após corrigidos as querys todos os atores foram adicionados a tabela.

### f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Meryl Streep",
  40000000,
  "1949-07-22", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Pedro Cardoso",
  70000,
  "1962-12-31", 
  "male"
);

### Exercício 3

SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

### a)

SELECT * from Actor WHERE gender = "female";

### b)

SELECT salary from Actor WHERE name = "Tony Ramos";

### c)
### 0 row(s) returned, pois todos os atores estão com gender famale/male.

SELECT * from Actor WHERE gender = "invalid";

### d)

SELECT id, name, salary from Actor WHERE salary < 500000;

### e) o nome está escrito errado, o correto é name. Depois de corrigido retorna o nome de Glória Pires.

SELECT id, name from Actor WHERE id = "002";

### Exercício 4
### a)

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

### b)

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

### c)

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

### d)

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  
  
### Exercício 5
### a)

CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

### b)

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-06-01",
    7
);

### c) 

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Sinopse: Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

### d)

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

### e)

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "A Falecida",
    "Zulmira é uma mulher que vive uma vida simples e miserável em um subúrbio do Rio de Janeiro. Por todas as dificuldades que enfrenta, ela sonha ter um enterro luxuoso. ",
    "1965-07-27",
    9
)

### Exercício 6
### Exercício 7
### Exercício 8








