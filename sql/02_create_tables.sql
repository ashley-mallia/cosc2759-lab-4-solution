CREATE TABLE todos (
    id serial,
    name varchar (100) NOT NULL,
    done boolean DEFAULT FALSE,
    PRIMARY KEY (id)
);