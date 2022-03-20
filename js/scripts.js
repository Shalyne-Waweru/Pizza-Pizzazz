//Business Logic


//User Interface Logic
$(document).ready(function(){

  //On Clicking the Order Button
  $("#btn-order").click(function(){
    //Get the Selected Pizza Size,Toppings and Crust
    let pizzaSize = $("#size option:selected").text();
    let pizzaToppings = $("#toppings option:selected").text();
    let pizzaCrust = $("#crust option:selected").text();

    //Get the Pizza Prices
    let pizzaSizePrize = parseInt($("#size option:selected").val());
    let pizzaToppingsPrize = parseInt($("#toppings option:selected").val());
    let pizzaCrustPrize = parseInt($("#crust option:selected").val());
    let total = pizzaSizePrize + pizzaToppingsPrize + pizzaCrustPrize;

    //Set the selected order details in the order summary
    $("#pizzaOrderSize").html(pizzaSize);
    $("#pizzaOrderToppings").html(pizzaToppings);
    $("#pizzaOrderCrust").html(pizzaCrust);
    $("#totalOrderCost").html(total);
  });

});