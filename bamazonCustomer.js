/**
 * Created by ryanhoyda on 7/24/17.
 */
var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "process.env.DB_PASS",
    database: "bamazon_DB"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
    placeOrder();
});


function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_ID);
            console.log(res[i].product_name);
            console.log(res[i].department_name);
            console.log(res[i].price);
            console.log(res[i].stock_quantity);
            console.log("-------------------------");
        }

    });
}

function placeOrder() {
    inquirer.prompt({
        name: "item",
        type: "input",
        message: "What item would you like to purchase? Please enter item ID,"


    }).then(function(answer) {

    });
}