CREATE DATABASE IF NOT EXISTS crud_nodejs_mysql;

USE crud_nodejs_mysql;

CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  phone VARCHAR(30)
);

SHOW TABLES;

DESCRIBE customer;
