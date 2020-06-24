
function addToCart() {
    var link = document.getElementsByClassName("add");
    var lengths = link.length;
    var cart = document.getElementsByClassName("cart__number")[0];
       cart.innerHTML = ++cart.innerHTML;
       console.log(cart.innerHTML);
}