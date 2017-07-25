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
    password: process.env.DB_PASS,
    database: "bamazon_DB"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();

});


function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        var ids = [];
        for (var i = 0; i < res.length; i++) {
            ids.push(res[i].item_ID.toString());
            console.log(res[i].item_ID);
            console.log(res[i].product_name);
            console.log(res[i].department_name);
            console.log(res[i].price);
            console.log(res[i].stock_quantity);
            console.log("-------------------------");
        }
        placeOrder(ids);

    });
}

function placeOrder(ids) {
    inquirer
        .prompt([
            {
                name: "itemId",
                type: "input",
                message: "What item would you like to purchase? Please enter item ID,",
                choices: ids
            },

            {
                name: "selectedQuantity",
                type: "input",
                message: "Enter the desired quantity: ",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        //console.log('valid');
                        return true;
                    }
                    //console.log('invalid');
                    return 'Please enter a number';
                }
            }
        ]).then(function(answer){
            console.log(answer);
            var query = connection.query(
                "SELECT PRICE, STOCK_QUANTITY FROM PRODUCTS WHERE ?",
                [
                    {
                        ITEM_ID: answer.itemId
                    }
                ],
                function(err, res) {
                    if(err) {
                        throw err;
                    }
                    console.log(res);

                    if(answer.selectedQuantity > res[0].STOCK_QUANTITY) {
                        console.log("Insufficient Quantity");

                    } else {
                        var newQuantity = res[0].STOCK_QUANTITY - answer.selectedQuantity;
                    console.log(newQuantity);
                    updateStockQuantity(answer.itemId, newQuantity);

                    }
                }
            );
    });
}


function updateStockQuantity(itemID, newQuantity) {
    var query = connection.query(
        "UPDATE PRODUCTS SET ? WHERE ?",
        [
            {
                stock_quantity: newQuantity
            },
            {
                item_ID: itemID
            }

        ],
        function(err, res) {
            if (err) {
                throw err;
            }
            console.log("Update Successful")
        }
    )
}