--create database
create database my_database_activity

--create table
--customer table
create table customer_table (
    customer_id int not null auto_increment primary key,
    customer_first_name varchar(100),
    customer_last_name varchar(100),
    customer_email varchar(200)
)

--order table
create table order_table (
    order_id int not null auto_increment primary key,
    customer_id int,
    order_date datetime not null,
    foreign key(customer_id) references customer_table(customer_id)
)

--order item table
create table order_item_table (
    order_item_id int not_null primary key,
    product_name varchar(200)
)