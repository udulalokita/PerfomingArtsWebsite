 // An array of products with their details
 const product = [
    // Each product is an object with properties: id, image, title, price, and quantity
    {
        id: 0,
        image: 'Images/guitar.png',
        title: 'Classic Guitar',
        price: 20000,
        quantity: 0,
    },
    {
        id: 1,
        image: 'Images/piano.png',
        title: 'Yamaha Piano',
        price: 150000,
        quantity: 0,

    },
    {
        id: 2,
        image: 'Images/saxaphone.jpg',
        title: 'Arctic Alto Saxaphone',
        price: 90000,
        quantity: 0,
    },
    {
        id: 3,
        image: 'Images/jewelleries.jpg',
        title: 'Dance Jewellery Set',
        price: 25870,
        quantity: 0,
    },
    {
        id: 4,
        image: 'Images/danceCostume.png',
        title: 'Latin Dance Costumes',
        price: 10000,
        quantity: 0,
    },
    {
        id: 5,
        image: 'Images/comedyJuggling.png',
        title: 'Comedy Juggling Set',
        price: 2500,
        quantity: 0,
    },
    {
        id: 6,
        image: 'Images/KandyanCostume.jpg',
        title: 'Kandyan Costume',
        price: 45000,
        quantity: 0,
    },
    {
        id: 7,
        image: 'Images/Mask.jpg',
        title: 'Traditional Mask',
        price: 8500,
        quantity: 0,
    },


];

// A copy of the product array stored in categories
const categories = [...product];

// Rendering the products on the page using the map function
    document.getElementById('root').innerHTML = categories.map((item) =>
{
    var{image, title, price, quantity} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p><b>${title}</b></p><br>
                <div class = 'quantity'>
                    <label for = "quantity">Quantity:</label>
                    <input type = 'number' id = 'quantity${item.id}' min='1' value='1'/> 
                </div>
                <h2>LKR ${price}.00</h2><br>
                <button onclick='addtocart(${item.id})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('')

// Function to add items to the cart
var cart = [];

function addtocart(id){
    var quantity = parseInt(document.getElementById('quantity' + id).value);
    
    // Adding the selected product to the cart array
    product[id].quantity = quantity
    cart.push({...product[id]})
    displaycart();

    // Resetting the quantity input to 1 after adding the product to the cart
    document.getElementById("quantity" + id).value = 1;
    
}

// Function to remove items from the cart
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

// Function to display the cart items and calculate the total price

function displaycart(){
    let j = 0, total = 0;

    // Displaying the number of items in the cart
    document.getElementById("count").innerHTML=cart.length;
    
    // Checking if the cart is empty
    if(cart.length == 0){
        document.getElementById('cartitem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "LKR "+ 0 +".00";
        
    }
    else{
        document.getElementById('cartitem').innerHTML = cart.map((items) =>
        {
            var{image, title, price, quantity} = items;
            total = total + price * quantity;
            document.getElementById("total").innerHTML = "LKR "+total+".00";
            return(
                `<div class = 'cart-item'>
                    <div class = 'row-img'>
                        <img class = 'rowimg' src=${image}>
                    </div>
                    <p style = 'font-size: 15px;'>${title} x ${quantity}</p>
                    <h2 style = 'font-size: 15px;'>LKR ${price * quantity}.00</h2>
                    <i class = 'fa-solid fa-trash' onclick = 'delElement(${j++})'></i>
                </div>`
            )
        }).join('');
        
    }
}

// Function to check if the cart is empty before proceeding to checkout
function check(){
    document.getElementById("count").innerHTML=cart.length;
    var newtotal = document.getElementById("total").innerHTML;
    if (cart.length == "0") {
        
       // Displaying an alert if the cart is empty
        alert ("Cannot Proceed, Your Cart is Empty !!!");
        return false;

    } else if (cart.length != 0) {
        form.addEventListener('submit', function (e){
            e.preventDefault();

            // Storing the total price in the local storage
            localStorage.setItem("tot",newtotal); 

            // Redirecting to the checkout page
            window.location.href ="Checkout.html"  
        })
    }
}