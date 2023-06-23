/*1*/
create database My_Database_Activity
use My_Database_Activity


/*2*/
create table Customers (
	customer_id INT auto_increment primary key,
	customer_first_name VARCHAR(50),
	customer_last_name VARCHAR(50),
	customer_email VARCHAR(250)
	)

create table Orders (
	order_id INT auto_increment primary key,
	customer_id INT,
	constraint FK_Orders_Customers foreign key (customer_id) references Customers(customer_id),
	order_date DATE,
	total_amount INT
	)

create table Items (
	order_item_id INT auto_increment primary key,
	product_name VARCHAR(250),
	quantity INT,
	price INT,
	order_id INT,
	constraint FK_Items_Orders foreign key (order_id) references Orders(order_id)
	)

	
/*3*/
insert into customers (customer_first_name,	customer_last_name,	customer_email)
values
('Kervi', 'Cruz', 'cruz_kervi217@yahoo.com'),
('Kevin', 'Cruz', 'gunggong@gmail.com'),
('Jose', 'Figuero', 'bugok@gmail.com'),
('Ram', 'De Leon', 'dleon_ram415@yahoo.com'),
('Kaiser', 'Cruz', 'gunggong00@gmail.com'),
('Wally', 'Figuero', 'bugok02@gmail.com')

insert into orders (customer_id,order_date,total_amount)
values
(1, curdate(), 5000.00),
(3, curdate(), 15000.00),
(1, curdate(), 10000.00),
(4, curdate(), 15000.00),
(5, curdate(), 7500.00),
(1, curdate(), 20000.00),
(6, curdate(), 5000.00),
(4, curdate(), 10000.00),
(1, curdate(), 80000.00)

insert into items (product_name, quantity, price, order_id)
values
('ASUS ROG Strix', 1, 5000, 1),
('ASUS ROG Poseidon', 2, 7500, 2),
('ASUS ROG Matrix', 1, 10000, 3),
('ASUS ROG Strix', 3, 5000, 4),
('ASUS ROG Poseidon', 1, 7500, 5),
('ASUS ROG Matrix', 2, 10000, 6),
('ASUS ROG Strix', 1, 5000, 7),
('ASUS ROG Poseidon', 2, 5000, 8),
('ASUS ROG Matrix', 8, 10000, 9)


/*4*/
select count(customer_id) from Customers


/*5*/
update customers 
set customer_email = 'updated@email.com'
where customer_id = 2


/*6*/
select sum(total_amount)
from Orders


/*--------------------------------------------------------------------------------------------------------------*/
/*----COMPARISSON TABLE----*/
select customer_first_name, customer_last_name, customer_email, product_name, price, quantity, total_amount
from orders o
left join customers c 
on o.customer_id = c.customer_id 
left join items i 
on o.order_id = i.order_id 
/*--------------------------------------------------------------------------------------------------------------*/


/*7*/
select customer_first_name, customer_last_name, customer_email, count(order_id) as order_count
from orders o
left join customers c
on o.customer_id = c.customer_id
group by customer_first_name


/*8*/
select customer_first_name, customer_last_name, sum(total_amount) as sum_amount
from orders o
inner join customers c
on o.customer_id = c.customer_id
group by customer_first_name
order by sum_amount desc limit 5


/*9*/
select product_name, sum(quantity) as sum_quantity 
from items
group by product_name
having sum(quantity) >= 10


/*10*/
delete from customers where customer_id = 2


/*----------------------------------------------------------------------------------*/
/*----FOR TESTING PURPOSES----*/
/*--ADD CUSTOMER/S--*/
insert into items (product_name, quantity, price, order_id)
values
('ASUS ROG Strix', 1, 5000, 1)
/*--ADD ITEM/S PURCHASED--*/
insert into items (product_name, quantity, price, order_id)
values
('ASUS ROG Strix', 1, 5000, 1)
/*--ADD ORDER/S PURCHASED--*/
insert into orders (customer_id,order_date,total_amount)
values
(1, curdate(), 5000.00)