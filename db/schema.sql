create database burgers_db;
use burgers_db;

create table burgers
(
    id int not null auto_increment,
    burger_name varchar(40),
    devoured boolean default false,
    primary key (id)
);