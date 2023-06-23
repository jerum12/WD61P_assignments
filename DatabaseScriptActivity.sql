/* Table Creation */
create table customer_table (
	customer_id int auto_increment primary key,
	customer_first_name varchar(100),
	customer_last_name varchar(100),
	customer_email varchar(100)
);

create table order_table (
	order_id int auto_increment primary key,
	customer_id int,
	order_date date,
	foreign key (customer_id) references customer_table(customer_id)
);

create table order_item_table (
	order_item_id int auto_increment primary key,
	product_name varchar(100),
	quantity int,
	price decimal(10, 2),
	order_id int,
	foreign key (order_id) references order_table(order_id)
);

/* Insert Data in each Table */
/* Customer Table */
insert into customer_table(customer_id,customer_first_name,customer_last_name,customer_email)
values
(1, 'skye', 'sebastian', 'skye@gmail.com'),
(2, 'skye1', 'sebastian', 'skye1@gmail.com'),
(3, 'skye2', 'sebastian', 'skye2@gmail.com'),
(4, 'skye3', 'sebastian', 'skye3@gmail.com'),
(5, 'skye4', 'sebastian', 'skye4@gmail.com'),
(6, 'skye5', 'sebastian', 'skye5@gmail.com'),
(7, 'skye6', 'sebastian', 'skye6@gmail.com'),
(8, 'skye7', 'sebastian', 'skye7@gmail.com'),
(9, 'skye8', 'sebastian', 'skye8@gmail.com'),
(10, 'skye9', 'sebastian', 'skye9@gmail.com');

select * from customer_table

insert into order_table(order_id, customer_id, order_date)
values
(1, 3, current_date),
(2, 1, current_date),
(3, 4, current_date),
(4, 6, current_date),
(5, 3, current_date),
(6, 9, current_date),
(7, 4, current_date),
(8, 2, current_date),
(9, 5, current_date),
(10, 3, current_date);

select * from order_table

insert into order_item_table(order_item_id, product_name, quantity, price, order_id)
values
(1, 'arcane boots', 1, 800.00, 1),
(2, 'blade of despair', 5, 1800.00, 2),
(3, 'endless battle', 3, 2300.00, 3),
(4, 'butterfly', 2, 5000.00, 4),
(5, 'boots of speed', 6, 500.00, 5),
(6, 'dagon', 5, 6200.00, 6),
(7, 'black king bar', 2, 3800.00, 7),
(8, 'divine reaper', 4, 6200.00, 8),
(9, 'bloodstone', 2, 5000.00, 9),
(10, 'dagger', 3, 2100.00, 10);

select * from order_item_table

/* retrieve the total number of customers in the database */
select count(distinct customer_id) as total_customer
from customer_table

/* update the customer email to updated@email.com */
update customer_table
set customer_email = 'updated@email.com'

select * from customer_table

/* retrieve the total sum of orders */
select sum(quantity) as sum_of_orders
from order_item_table

/* retrieve the customer details along with the total number of orders */
select *, count(ot.customer_id) as total_orders
from customer_table ct
left join order_table ot on ct.customer_id = ot.customer_id
group by ct.customer_id, ct.customer_first_name, ct.customer_last_name, ct.customer_email;

/* retrieve the top 5 customers who have made the highest total purchase */
select *, sum(oit.quantity) as total_purchase
from customer_table ct
left join order_item_table oit on ct.customer_id = oit.quantity
group by ct.customer_id, ct.customer_first_name, ct.customer_last_name, ct.customer_email
order by total_purchase desc
limit 5;

/* delete customer_id = 2 */
select * from customer_table
DELETE FROM order_item_table
WHERE order_id IN (
    SELECT order_id
    FROM order_table
    WHERE customer_id = 2
);

DELETE FROM order_table
WHERE customer_id = 2;

DELETE FROM customer_table
WHERE customer_id = 2;
 /* retrieve all records for all tables in one result set */
SELECT *
FROM customer_table ct
JOIN order_table ot ON ct.customer_id = ot.customer_id
JOIN order_item_table oit ON ot.order_id = oit.order_id
order by ct.customer_id;







