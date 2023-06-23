-- 1.Create a database name “My_Database_Activity”
CREATE database My_Database_Activity

-- 2.Consider the following schema:
	-- a.Customer table:
create table My_Database_Activity.customer_tbl(
customer_id int auto_increment primary key,
customer_first_name varchar(100),
customer_last_name varchar(100),
customer_email varchar(100)
)

	-- b.Order table:
create table My_Database_Activity.order_tbl(
order_id int auto_increment primary key,
customer_id int, 
CONSTRAINT order_tbl_FK FOREIGN KEY (customer_id) REFERENCES  My_Database_Activity.customer_tbl(customer_id),
order_date date
)

	-- c.Order_Item table:
create table My_Database_Activity.order_item_tbl(
order_item_id int auto_increment primary key,
product_name varchar(100),
quantity int,
price int,
order_id int,
CONSTRAINT order_item_tbl_FK FOREIGN KEY (order_id) REFERENCES  My_Database_Activity.order_tbl(order_id)
)

-- 3.Insert data in each table.
insert into My_Database_Activity.customer_tbl (customer_first_name, customer_last_name, customer_email) values 
('Andria Mae', 'Degoma', 'andriadegoma@gmail.com'),
('Paul John', 'Mitchell', 'pauljognmitchell@gmail.com'),
('Parker', 'Mitchell', 'parkermitchell@gmail.com'),
('Mavis', 'Mitchell',' mavismitchell@gmail.com'),
('Macy', 'Mitchell', 'macymitchell@gmail.com')

insert into My_Database_Activity.order_tbl (customer_id, order_date) values 
(5, date('2023-05-08')),
(5, date('2023-06-08')),
(2, date('2023-01-08')),
(4, date('2023-02-08')),
(1, date('2023-03-08')),
(3, date('2023-04-08')),
(3, date('2023-04-10')),
(4, date('2023-02-10')),
(1, date('2023-02-15')),
(2, date('2023-02-08'))


insert into My_Database_Activity.order_item_tbl (product_name, quantity, price, order_id) values
('Oversized T-Shirt', 2, 580, 1),
('Penshoppe Cup', 1, 379, 8),
('High waist wide leg jeans', 1, 578, 3),
('Juju Collagen', 1, 1176, 7),
('Lego', 1, 1200, 4),
('Hot Wheels', 5, 1390, 5),
('Barbie', 3, 4500, 2),
('Pink Doctor Set', 1, 240, 6),
('S-26 Promil Gold One', 1, 3600, 9),
('Cetaphil Head and Body Wash', 1, 568, 10)

-- 4.Retrieve the total number of customers in the database.
select count(customer_id) from My_Database_Activity.customer_tbl

-- 5.Update the customer email to = ‘updated@email.com’
update My_Database_Activity.customer_tbl set customer_email = 'updated@email.com'

-- 6.Retrieve the total sum of orders.
select sum(price) from My_Database_Activity.order_item_tbl

select * from my_database_activity.order_tbl ot 

-- 7.Retrieve the customer details along with the total number of orders placed by each customer.
select a.*,
count(b.customer_id) as Total_Orders
from my_database_activity.customer_tbl a
left join (My_Database_Activity.order_tbl b)
on a.customer_id = b.customer_id
group by a.customer_id 

-- 8.Retrieve the top 5 customers who have made the highest total purchases.
