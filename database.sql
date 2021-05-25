CREATE DATABASE taxis_service_database;
USE taxis_service_database;

CREATE TABLE users(
  id        int(255) auto_increment not null,
  name      varchar(100) not null,
  email     varchar(255) not null,
  password  varchar(255) not null,
  CONSTRAINT pk_usuarios PRIMARY KEY(id),
  CONSTRAINT uq_email UNIQUE(email)
)ENGINE=InnoDb;

CREATE TABLE reservations(
  id            int(255) auto_increment not null,
  user_email    varchar(255) not null,
  reserved_for  date not null,
  reserved_at   date not null,
  CONSTRAINT pk_reservations PRIMARY KEY(id),
  CONSTRAINT fk_reservatio_user FOREIGN KEY(user_email) REFERENCES users(email)
)ENGINE=InnoDb;
