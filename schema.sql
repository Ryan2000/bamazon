
DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;


CREATE TABLE products (
  item_ID INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL (10,4) NOT NULL,
  stock_quantity INT NOT NULL,

  PRIMARY KEY (item_ID)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Super B Energy Complex', 'Health', 8.45, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bronson Vitamin B Complex', 'Health', 9.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Solgar Vitamin B6', 'Health', 7.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Burdock', 'Health', 14.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Reishi Mushroom', 'Health', 11.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bounty Paper Towels ', 'Health & Personal Care', 23.99, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bisell 9595A Clean View Bagless Vacuum', 'Home & Kitchen', 79.99, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Duckworth Large Yellow Duck Dog Toy', 'Pet Supplies', 6.54, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('ZippyPaws Zingy 3-Squeaker No Stuffing Plush Dog Toy', 'Pet Supplies', 6.17, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Phillips Norelco Electric Shaver 2100', 'Beauty & Personal Care', 39.96, 12);




SELECT * FROM products;