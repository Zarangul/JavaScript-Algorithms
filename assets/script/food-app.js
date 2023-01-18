function orderFromUser(){
    let order = prompt("Please, enter your order like foodName/restaurant/yourBadget", "burger/mcdonalds/2");
    console.log(order);
    order = order.toLowerCase();
    let orderArr = order.split("/");
    let food = orderArr[0];
    let restaurant = orderArr[1];
    let price = Number(orderArr[2]);
    function acceptByCourier(){
        confirm("Would you like the courier to accept your order?") ? 
        console.log("Your order accepted by the courier") :
        console.log("Your order canceled");
    }
    let restaurantObj;
    switch(restaurant){
        case "mcdonalds":
            restaurantObj = {
                "french fries": 2,
                burger: 5
            };
            break;
        case "kfc":
            restaurantObj = {
                "french fries": 3,
                burger: 5,
                twister: 4
            };
            break;
        case "burger king":
            restaurantObj = {
                "french fries": 4,
                burger: 6
            };
            break;
        default:
            restaurantObj = "There is no such restaurant";
    }
    let foodArr;
    switch(food){
        case "french fries":
            foodArr = ["mcdonalds", "kfc", "burger king"];
            break;
        case "burger":
            foodArr = ["mcdonalds", "kfc", "burger king"];
            break;
        case "twister":
            foodArr = ["kfc"];
            break;
        default:
            foodArr = ["was not found in the application"];
    }
    function acceptRestaurant(){
        if(restaurantObj[food] <= price){
            return acceptByCourier();
        }else{
            console.log(`Your budget is not enough for ${food} in ${restaurant}:( Try other restaurants`);
        }
    }
    if(restaurantObj.hasOwnProperty(food)){
        return acceptRestaurant();
    }else{
        console.log(`Please change your order. ${food} : ${foodArr.join(", ") }`);
    }
}
orderFromUser();