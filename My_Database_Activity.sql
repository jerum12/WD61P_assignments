create database My_Database_Activity

use My_Database_Activity

create table Customer (
   customer_id INT auto_increment primary key,
   customer_first_name VARCHAR(100),
   customer_last_name VARCHAR(100),
   customer_email VARCHAR(100)
)

create table Orders (
   order_id INT auto_increment primary key,
   customer_id INT,
   order_date DATE,
   constraint FK_Order_Customer foreign key (customer_id) references Customer (customer_id)
)

create table Order_Item (
   order_item_id INT auto_increment primary key,
   product_name VARCHAR (100),
   quantity INT,
   price decimal(5,2),
   order_id INT,
   constraint FK_Order_Item_Orders foreign key (order_id) references Orders (order_id)
)

insert into Customer (customer_first_name, customer_last_name, customer_email)
values ('Jose' , 'Rizal', 'jose.rizal@bayani.com' ),
       ('Andres', 'Bonifacio', 'andres.bonifacio@bayani.com'),
       ('Diego', 'Silang', 'diego.silang@bayani.com'),
       ('Gabriela', 'Silang', 'gabriela.silang@bayani.com'),
       ('Gregorio', 'del Pilar', 'gregorio.delPilar@bayani.com')

insert into Orders (customer_id, order_date)
values (1, '2023-06-18'),
       (2, '2023-06-19'),
       (3, '2023-06-20'),
       (4, '2023-06-21'),
       (5, '2023-06-22')
       
insert into Order_Item (product_name, quantity, price, order_id)
values ('Adobong Baboy', 2, 45.00, 1),
       ('Sinigang na Hipon', 1, 99.50, 2),
       ('Lechon Kawali', 3, 70.00, 3),
       ('Bagnet Sisig', 1, 245.50, 4),
       ('Beef Mechado', 3, 300, 5)
       
select count(*) as total_customers
from Customer;

update customer 
set customer_email = 'updated@email.com'


select sum(quantity * price) as total_sum
from Order_item


select c.customer_id, c.customer_first_name, c.customer_last_name, count(o.order_id) as total_orders
from Customer c
left join Orders o on c.customer_id = o.customer_id
group by c.customer_id, c.customer_first_name, c.customer_last_name;



select c.customer_id, c.customer_first_name, c.customer_last_name, sum(oi.quantity * oi.price) as total_purchases
from Customer c
join Orders o on c.customer_id = o.customer_id
join Order_Item oi on o.order_id = oi.order_id
group by c.customer_id, c.customer_first_name, c.customer_last_name
order by total_purchases desc
limit 5;


delete from Customer where customer_id = 2;

select customer_id, customer_first_name, customer_last_name
from Customer
union all
select order_id, customer_id, order_date
from Orders
union all
select order_item_id, product_name, quantity
from Order_Item;




       

       
       
       
       

       
       
       
       
       
       
