create database My_Database_Activity

create table Customer_Table(
    customer_id INT auto_increment primary key,
    customer_first_name VARCHAR(50),
    customer_last_name VARCHAR(50),
    customer_email VARCHAR(100)
);
create table Order_Table(
    order_id INT auto_increment primary key,
    customer_id INT,
    order_date date,
    foreign key (customer_id) references Customer_Table(customer_id)
);
create table Order_Item_Table(
    order_item_id INT auto_increment primary key,
    product_name VARCHAR(200),
    quantity INT,
    price decimal(10,2),
    order_id NT,
    foreign key (order_id) references Order_Table(order_id)
)
insert into Customer_Table(customer_id, customer_first_name, customer_last_name, customer_email)
values
(1, 'Luna', 'Quinn', 'lunaquinn@gmail.com'),
(2, 'Olivia', 'Miller', 'oliviamiller@gmail.com'),
(3, 'Amelia', 'Campbell', 'ameliacampbell@yahoo.com'),
(4, 'Mia', 'Addison', 'miaaddison23@gmail.com'),
(5, 'Ava', 'Bailey', 'miaaddison23@gmail.com');


select * from Customer_Table

insert into Order_Item_Table(order_item_id, product_name, quantity, price, order_id)
values
(1, 'Glittering Gems', 1, 599.00, 1),
(2, 'Sparkling Stones', 1, 699.00, 2),
(3, 'Celestial Charms', 1, 899.00, 3),
(4, 'Moonlit Jewels', 1, 599.00, 4),
(5, 'Diamond Dusts', 1, 599.00, 5);

select * from Order_Item_Table

select count(customer_id) as total_customers from Customer_Table

update Customer_Table set customer_email = 'updated@email.com'

select * from Customer_Table

select sum(quantity) as sum_orders from Order_Item_Table

select *, count(ot.customer_id) as total_orders from Customer_Table
left join Order_Table ot on ct.customer_id = ot.customer_id
group by ct.customer_id, ct.customer_first_name, ct.customer_last_name, ct.customer_email;

select *, sum(oit.quantity) as total_purchase from Customer_Table ct
left join Order_Item_Table oit on ct.customer_id = oit.quantity
group by ct.customer_id, ct.customer_first_name, ct.customer_last_name, ct.customer_email;
order by total_purchase desc
limit 5;

delete from customer_table where customer_id = 2

select * 
from customer_table ct join order_table ot on ct.customer_id = ot.customer_id
join order_item_table oit on ct.order_id = oit.order_id
order by ct.customer_id;