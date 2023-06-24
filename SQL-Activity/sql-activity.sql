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
    quantity int,
    price decimal(7,2),
    foreign key (order_id) references order_table(order_id)
)

--INSERT DATA
--customer table
INSERT INTO customer_table (customer_first_name, customer_last_name, customer_email)
VALUES ('John', 'Doe', 'johndoe@yahoo.com');

INSERT INTO customer_table (customer_first_name, customer_last_name, customer_email)
VALUES ('Juan', 'Dela Cruz', 'juandelacruz@gmail.com');

INSERT INTO customer_table (customer_first_name, customer_last_name, customer_email)
VALUES ('Jane', 'Doe', 'janedoe@gmail.com');

INSERT INTO customer_table (customer_first_name, customer_last_name, customer_email)
VALUES ('Jak', 'Roberto', 'jakroberto@gmail.com');

INSERT INTO customer_table (customer_first_name, customer_last_name, customer_email)
VALUES ('Barbie', 'Imperial', 'barbieimperial@yahoo.com');

INSERT INTO customer_table (customer_first_name, customer_last_name, customer_email)
VALUES ('Sarah', 'Geronimo', 'sarahg@gmail.com');

INSERT INTO customer_table (customer_first_name, customer_last_name, customer_email)
VALUES ('John Lloyd', 'Cruz', 'jdl@gmail.com');

INSERT INTO customer_table (customer_first_name, customer_last_name, customer_email)
VALUES ('Maja', 'Salvador', 'majaslvdr@hotmail.com');

INSERT INTO customer_table (customer_first_name, customer_last_name, customer_email)
VALUES ('Johnny', 'Perez', 'johnnyperez@gmail.com');

INSERT INTO customer_table (customer_first_name, customer_last_name, customer_email)
VALUES ('Dingdong', 'Dantes', 'dddantes@gmail.com');


--order table
insert into order_table (customer_id, order_date)
values
    (1, '2023-06-22 10:00:00'),
    (2, '2023-06-23 11:30:00'),
    (3, '2023-06-24 14:45:00'),
    (4, '2023-06-25 09:15:00'),
    (5, '2023-06-26 16:30:00'),
    (6, '2023-06-27 12:00:00'),
    (7, '2023-06-28 17:45:00'),
    (8, '2023-06-29 13:30:00'),
    (9, '2023-06-30 10:45:00'),
    (10, '2023-07-01 15:15:00');


--order item table
insert into order_item_table(order_id, product_name, quantity, price, order_item_id)
values
    (1, 'Caramel Macchiato', 2, 380.00, 0001),
    (2, 'White Chocolate Mocha', 1, 205.00, 0002),
    (3, 'Coffee Latte', 3, 540.00, 0003),
    (4, 'Capuccino', 1, 195.00, 0004),
    (5, 'Frapuccino', 1, 275.00, 0005),
    (6, 'Iced Coffee Tool', 2, 300.00, 0006),
    (7, 'Iced Tea', 1, 155.00, 0007),
    (8, 'Refreshers', 4, 700.00 ,0008),
    (9, 'Pink Drink', 1, 210.00, 0009),
    (10, 'Pumpkin Spice Latte', 1, 245.00, 0010);

--count customers
select count(*) as total_customers
from customer_table;

--update customers' email to updated@email.com
update customer_table
set customer_email = 'updated@email.com';

--retrieve the total sum of orders
select sum(quantity) as total_orders
from order_item_table;

--retrieve customer details along with the total number of orders placed by each customer
select c.customer_id, c.customer_first_name, c.customer_last_name, c.customer_email, count(o.order_id) as total_orders
from customer_table c
left join order_table o on c.customer_id = o.customer_id
group by c.customer_id, c.customer_first_name, c.customer_last_name, c.customer_email;

--retrieve top 5 customerswho made the highest total purchase
select c.customer_id, c.customer_first_name, c.customer_last_name, c.customer_email, sum(oi.price * oi.quantity) as total_purchase
from customer_table c
join order_table o on c.customer_id = o.customer_id
join order_item_table oi on o.order_id = oi.order_id
group by c.customer_id, c.customer_first_name, c.customer_last_name, c.customer_email
order by total_purchase desc
limit 5;

--delete the customer_id = 2
delete from my_database_activity.customer_tbl where customer_id = 2

--retrieve all records for all tables in one result set
select * from customer_table c
join order_table o on c.customer_id = o.customer_id
join order_item_table oi on o.order_id = oi.order_id
order by c.customer_id;