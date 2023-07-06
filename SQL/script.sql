-- #1.	Create a database name “My_Database_Activity”
create database My_Database_Activity

use My_Database_Activity
-- #2.Consider the following schema:
create table Customer(
	customer_id INT auto_increment primary key,
	customer_first_name VARCHAR(100),
	customer_last_name VARCHAR(100),
	customer_email VARCHAR(100),
	
)

create table  List_Order(
 order_id INT auto_increment primary key,
 customer_id INT,
 menu_order_date DATE,
 constraint FK_List_Order_Customer foreign key (customer_id)references Customer(customer_id)
)

create table Order_Item(
	order_item_id INT auto_increment primary key,
	product_name VARCHAR(100),
	quantity INT,
	price decimal(10,2),
	order_id INT,
	constraint FK_Order_Item_List_Order foreign key (order_id) references List_Order(order_id)

)
-- #3.	Insert data in each table.
insert into Customer(customer_first_name,customer_last_name,customer_email)
values('Leny','Hernandez','lh@gmail.com'),
('Susy','Araneta','sa@gmail.com'),
('Marie','Ongpauco','mo@gmail.com'),
('Michelle','Malabanan','mm@gmail.com'),
('Ivy','Marasigan','im@gmail.com')

insert into List_Order(customer_id,menu_order_date)
values(1,'03-10-23'),
(4,'06-05-23'),
(2,'07-01-23'),
(3,'08-04-23'),
(5,'03-04-23'),
(2,'12-04-23'),
(3,'09-03-23'),
(4,'08-02-23'),
(5,'06-02-23'),
(1,'23-05-23')

insert into Order_Item(product_name,quantity,price,order_id)
values('Nestle Raisinets Milk Chocolate',1,99.95,1),
('Colgate Sparkling White Mint',1,79.95,2),
('CowHead Lite Low Fat 1L', 2,198.90,3),
('Sanicare Jumbo Cotton Balls 100',3,164.85,4),
('Oreo Original Vanilla',4,295.80,5),
('SnackBox Triple Chocolate Brownies',2,167.9,6),
('DaoHer Brown Boba MilkTea',1,49.95,7),
('Ice Breakers',5,364.75,8),
('Bogutti Next Bicuits',3,269.85,9),
('Meiji Milk Chocolate Bar 50g',1,49.95,10)

-- #4.Retrieve the total number of customers in the database.
select count(*)  from Customer C

-- #5.	Update the customer email to = ‘updated@email.com’
update customer 
set customer_email= 'updated@email.com'

#6.	Retrieve the total sum of orders.
select Sum(quantity) from Order_Item

-- #7.	Retrieve the customer details along with the total number of orders placed by each customer.
select  customer_first_name, customer_last_name, customer_email, Sum(quantity) from Customer C
left join List_Order L
on C.customer_id=L.customer_id
inner join Order_Item O
on L.order_id=O.order_id
group by customer_first_name

-- #8.	Retrieve the top 5 customers who have made the highest total purchases.
select customer_first_name from Customer C
left join List_Order L
on C.customer_id=L.customer_id
inner join Order_Item O
on L.order_id=O.order_id
order by quantity*price
limit 5

#9.	Delete the customer_id = 2.

 DELETE  from Customer C
 WHERE customer_id = 2

-- #10.Retrieve all records for all tables in one result set. (atleast 3 columns)

select * from Customer C
 cross join List_Order L
on C.customer_id = L.customer_id 
 cross join Order_Item O 
on L.order_id= O.order_id