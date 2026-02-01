-- create a new database
CREATE DATABASE AppDB;
GO

-- use the new database
USE AppDB;
GO

-- create Users table
CREATE TABLE Users (
    name VARCHAR(50),
    email VARCHAR(100)
);
GO

