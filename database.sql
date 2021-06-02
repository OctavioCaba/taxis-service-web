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
  CONSTRAINT pk_reservations PRIMARY KEY(id)
)ENGINE=InnoDb;

CREATE TABLE times(
  id                  int(255) auto_increment not null,
  hour                varchar(100) not null,
  taxis_availability  int(100) not null,
  CONSTRAINT pk_times PRIMARY KEY(id)
)ENGINE=InnoDb;

INSERT INTO times VALUES(NULL, "08:00", 8);
INSERT INTO times VALUES(NULL, "08:30", 8);
INSERT INTO times VALUES(NULL, "09:00", 8);
INSERT INTO times VALUES(NULL, "09:30", 8);
INSERT INTO times VALUES(NULL, "10:00", 8);
INSERT INTO times VALUES(NULL, "10:30", 8);
INSERT INTO times VALUES(NULL, "11:00", 8);
INSERT INTO times VALUES(NULL, "11:30", 8);
INSERT INTO times VALUES(NULL, "12:00", 8);
INSERT INTO times VALUES(NULL, "12:30", 8);
INSERT INTO times VALUES(NULL, "13:00", 8);
INSERT INTO times VALUES(NULL, "13:30", 8);
INSERT INTO times VALUES(NULL, "14:00", 8);
INSERT INTO times VALUES(NULL, "14:30", 8);
INSERT INTO times VALUES(NULL, "15:00", 8);
INSERT INTO times VALUES(NULL, "15:30", 8);
INSERT INTO times VALUES(NULL, "16:00", 8);
INSERT INTO times VALUES(NULL, "16:30", 8);
INSERT INTO times VALUES(NULL, "17:00", 8);
INSERT INTO times VALUES(NULL, "17:30", 8);
INSERT INTO times VALUES(NULL, "18:00", 8);
INSERT INTO times VALUES(NULL, "18:30", 8);
INSERT INTO times VALUES(NULL, "19:00", 8);
INSERT INTO times VALUES(NULL, "19:30", 8);
INSERT INTO times VALUES(NULL, "20:00", 8);
