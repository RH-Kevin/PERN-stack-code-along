-- CREATE DATABASE perntodo;

CREATE TABLE IF NOT EXISTS todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

INSERT INTO todo (description) VALUES
    ('Sample Todo 1'),
    ('Sample Todo 2'),
    ('Sample Todo 3');