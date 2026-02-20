let user = localStorage.getItem("user")

if(!user){
    window.location.href = "login.html"; // open login page.
}
document.getElementById("userEmail").innerHTML= user; // set email id in dashboard page.

let foodSelection = document.getElementById("foodSelection");   // reference of food selection section in dashboard page using id selector 
let cartSelection = document.getElementById("cartSelection");   // reference of cart selection section in dashboard page using id selector 

function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html"; // open login page. 
}

let FOOD_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=c"

fetch(FOOD_URL).then(response=>response.json()).
then(data=>{
    //console.log(data.meals)
    displayFood(data.meals)
}).catch(error=> {
    console.log(error)
})

//let price = 40;
function displayFood(meals){
 meals.forEach(meal=> {

    //console.log(meal.strMeal+" "+meal.strMealThumb)
    let price = Math.floor(Math.random()*100) + 50; // generate random price for food item between 50 and 150
    //console.log(price)
    //price = price + 10; // increase price by 10 for each food item
    foodSelection.innerHTML +=`
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200" height="200"/>
        <h3>${meal.strMeal}</h3>
        <p>Price: $${price}</p>
        <input type="button" value = "Add To Cart"
        onclick="addToCart(${meal.idMeal},'${meal.strMeal}',${price})"
        /><br/>
    `
   
 })   
}

let cart = []; // empty array to store cart items
document.getElementById("cartCount").innerHTML = `Cart Items: ${cart.length}`; // display cart item count in dashboard page
function addToCart(mealId, mealName, price){
    //console.log(mealId, mealName, price)
    // if item exists in cart it return that item information otherwise it return undefined
    let item  = cart.find(c=>c.mealId === mealId); // check if item already exists in cart
    
    if(item){
        item.quantity += 1; // if item exists, increase quantity by 1
    }else {
        cart.push({mealId, mealName, price, quantity: 1}); // add new item to cart with quantity 1
        document.getElementById("cartCount").innerHTML = `Cart Items: ${cart.length}`; // display cart 
    }
    console.log("After added to cart", cart )
}