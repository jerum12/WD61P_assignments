-- 1

create database My_Database_Activity

-- 2

create table Customer_Table (
	customer_id INT auto_increment primary key,
	customer_first_name VARCHAR (100),
	customer_last_name VARCHAR (100),
	customer_email VARCHAR (100)
	)

create table Order_Table (
	order_id INT auto_increment primary key,
	customer_id INT,
	constraint fk_Order_Table_Customer_Table foreign key (customer_id) references Customer_Table (customer_id),
	order_date Date
	)

	
create table Order_Item_Table (
	order_item_id INT auto_increment primary key,
	product_name VARCHAR (100),
	quantity INT,
	price INT,
	order_id INT,
	constraint fk_Order_Item_Table_Order_Table foreign key (order_id) references Order_Table (Order_id)
)

-- 3. insert data in each table

insert into Customer_Table (customer_first_name, customer_last_name, customer_email)
	values ('Sir Jerum', 'Galang', 'jgalang@gmail.com'),
	('John', 'Smith', 'jsmith@gmail.com'),
	('Jowan', 'Custodio', 'jdcustodio@gmail.com'),
	('Agnes', 'De Guzman', 'aguzman@gmail.com'),
	('Jay', 'Sy', 'jsy@gmail.com')
	
insert into Order_Table (customer_id, order_date)
	values (1, '2023-01-02'),
		(2, '2023-01-04'),
		(3, '2023-01-03'),
		(4, '2023-01-08'),
		(5, '2023-01-10')

		
insert into Order_Item_Table (product_name, quantity, price, order_id)
	values ('Guitar', 1, 12000, 1),
	('Shoes', 3, 5000, 2),
	('T-shirt', 6, 4000, 3),
	('Bag', 4, 15000, 4),
	('Pants', 2, 2000, 5)
	
insert into Order_Item_Table ()

-- 4
	
select 
COUNT(customer_id) as Number_of_Customer
from customer_table 
	
-- 5 	
	
update Customer_Table 
set customer_email = 'johnsmith@yahoo.com' where customer_id = 2

-- 6

select 
SUM(price) as total_sum
from order_item_Table
	
-- 7 

select 
	customer_first_name,
	customer_last_name,
	customer_email,
	SUM(quantity) as number_of_orders
from customer_table ct 
join order_table ot 
on ct.customer_id = ot.customer_id 
join order_item_table oit
on ct.customer_id = oit.order_id
group by customer_first_name

-- 8

select 
	customer_first_name,
	customer_last_name,
	customer_email,
	SUM(quantity * price) as price_of_orders
from customer_table ct 
join order_table ot 
on ct.customer_id = ot.customer_id 
join order_item_table oit
on ct.customer_id = oit.order_id
group by customer_first_name
order by price_of_orders desc

-- 9

delete from customer_table
where customer_id = 2

-- 10

select 
*
from customer_table ct 
join order_table ot 
on ct.customer_id = ot.customer_id 
join order_item_table oit
on ct.customer_id = oit.order_id

