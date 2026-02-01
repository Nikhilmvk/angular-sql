#!/bin/bash
# wait for SQL Server to start
sleep 15s

# run SQL commands
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Password@123 -Q "
IF DB_ID('AppDB') IS NULL
BEGIN
    CREATE DATABASE AppDB;
END
USE AppDB;
IF OBJECT_ID('Users', 'U') IS NULL
BEGIN
    CREATE TABLE Users(
        name VARCHAR(50),
        email VARCHAR(100)
    );
END
"
