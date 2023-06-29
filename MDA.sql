create database My_Database_Activity

use My_Database_Activity

create table CustomerTable ( customer_id INT auto_increment primary key, customer_first_name VARCHAR(100), customer_last_name VARCHAR(100), customer_email VARCHAR(100)
)

create table ordertable ( order_id INT auto_increment primary key, order_date date, customer_id INT, constraint FK_ordertable_CustomerTable foreign key (customer_id) references CustomerTable(customer_id))
 
create table order_itemtable ( order_item_id INT auto_increment primary key, product_name VARCHAR(100), quantity INT, price decimal(10,2), order_id INT, constraint FK_order_itemtable_ordertable foreign key (order_id) references ordertable(order_id))

alter table customertable 

select * from customertable c 
select * from ordertable o 
select * from order_itemtable oi 

insert into customertable ( customer_id, customer_first_name, customer_last_name, customer_email)
values ('135','jason','orlando','jason@gmail.com'),
('132','diego','escobar','diego@gmail.com'),
('131','jack','martinez','jack@gmail.com'),
('176','hope','luxury','hope@gmail.com'),
('145','johnny','green','johnny@gmail.com'),
('122','jordie','juan','jordie@gmail.com'),
('175','caroline','white','caroline@gmail.com')

insert into ordertable ( order_id, order_date, customer_id)
values ('245','2022-02-13', '132'),
('252','2023-06-20', '135'),
('286','2022-11-19', '131'),
('226','2022-12-25', '176'),
('269','2022-03-13', '145'),
('244','2022-06-22', '122'),
('271','2022-12-19', '175')

insert into order_itemtable ( order_item_id, product_name, quantity, price, order_id)
values('342', 'VideoCard', '5', '125000.00', '245'),
('323', 'VideoCard', '2', '50000.00', '252'),
('364', 'VideoCard', '7', '175000.00', '286'),
('389', 'VideoCard', '2', '50000.00', '226'),
('321', 'VideoCard', '7', '175000.00', '269'),
('358', 'VideoCard', '4', '100000.00', '244'),
('394', 'VideoCard', '6', '150000.00', '271')


select sum(price) from order_itemtable 


select * from  order_itemtable
order by price desc limit 5


select * from customertable c 
left join ordertable o 
on c.customer_id = o.customer_id 


select * from ordertable o
left join order_itemtable oi 
on o.order_id = oi.order_id


select * from customertable c 
inner join ordertable o 
on c.customer_id = o.customer_id
inner join order_itemtable oi 
on o.order_id = oi.order_id 





