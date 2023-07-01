CREATE DATABASE portfolio;

CREATE TABLE work(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    message TEXT
);
