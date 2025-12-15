-- Datenbankstruktur neu aufbauen
DROP TABLE IF EXISTS `KSN_JoinSimple_Sprachkenntnisse`;
DROP TABLE IF EXISTS `KSN_JoinSimple_Fremdsprachen`;
DROP TABLE IF EXISTS `KSN_JoinSimple_Personen`;

-- Tabelle Personen
CREATE TABLE KSN_JoinSimple_Personen (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Vorname VARCHAR(50),
    Nachname VARCHAR(50),
    Geburtsdatum DATE
);

-- Tabelle Fremdsprachen
CREATE TABLE KSN_JoinSimple_Fremdsprachen (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Sprache VARCHAR(50)
);

-- Tabelle Sprachkenntnisse
CREATE TABLE KSN_JoinSimple_Sprachkenntnisse (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    PersonID INT,
    FremdspracheID INT,
    Niveau ENUM('Anfänger', 'Fortgeschritten', 'Fließend', 'Muttersprachler'),
    FOREIGN KEY (PersonID) REFERENCES KSN_JoinSimple_Personen(ID),
    FOREIGN KEY (FremdspracheID) REFERENCES KSN_JoinSimple_Fremdsprachen(ID)
);


-- Seeds erstellen
INSERT INTO `KSN_JoinSimple_Fremdsprachen` (`ID`, `Sprache`) VALUES
(1, 'Englisch'),
(2, 'Französisch'),
(3, 'Spanisch'),
(4, 'Chinesisch');


INSERT INTO `KSN_JoinSimple_Personen` (`ID`, `Vorname`, `Nachname`, `Geburtsdatum`) VALUES
(1, 'Max', 'Mustermann', '1990-05-15'),
(2, 'Anna', 'Müller', '1985-09-23'),
(3, 'Tom', 'Schmidt', '1995-03-10'),
(4, 'Lisa', 'Huber', '1992-07-08'),
(5, 'Markus', 'Bauer', '1980-01-14'),
(6, 'Sophie', 'Klein', '1998-11-02'),
(7, 'Jonas', 'Lehmann', '1993-04-19'),
(8, 'Clara', 'Wagner', '1987-12-30'),
(9, 'Felix', 'Schuster', '1999-09-25'),
(10, 'Lea', 'Hofmann', '2001-02-17'),
(11, 'David', 'Keller', '1983-06-05'),
(12, 'Julia', 'Becker', '1991-10-11'),
(13, 'Sebastian', 'Fischer', '1996-03-29');

INSERT INTO `KSN_JoinSimple_Sprachkenntnisse` (`PersonID`, `FremdspracheID`, `Niveau`) VALUES
( 1, 1, 'Fließend'),
( 1, 3, 'Fortgeschritten'),
( 1, 2, 'Anfänger'),
( 2, 1, 'Muttersprachler'),
( 2, 3, 'Fließend'),
( 3, 4, 'Anfänger'),
( 3, 1, 'Fortgeschritten'),
( 4, 1, 'Fließend'),
( 4, 2, 'Fortgeschritten'),
( 5, 3, 'Anfänger'),
( 5, 4, 'Anfänger'),
( 6, 1, 'Muttersprachler'),
( 6, 2, 'Fließend'),
( 7, 1, 'Fortgeschritten'),
( 7, 3, 'Fließend'),
( 8, 2, 'Muttersprachler'),
( 8, 1, 'Fließend'),
( 9, 1, 'Anfänger'),
( 9, 4, 'Fortgeschritten'),
( 10, 1, 'Fließend'),
( 11, 3, 'Fortgeschritten'),
( 11, 2, 'Anfänger'),
( 12, 1, 'Fortgeschritten'),
( 12, 3, 'Fließend'),
( 12, 4, 'Anfänger'),
( 13, 1, 'Fließend'),
( 13, 2, 'Fortgeschritten');
