let loadData = ()=>{
   let id = getParameterByName("id");
   let product = ProductHandler.getDataById(id);
   document.getElementById("product-image").src = product.image;
   document.getElementById("product-title").innerText = product.title;
   document.getElementById("product-price").innerText = "$"+ product.price;
   document.getElementById("catgory").innerText = product.category;
   document.getElementById("description").innerText = product.description;
}

let addTobasket = () => {
   let id = getParameterByName("id");
   let product = ProductHandler.getDataById(id);
   BasketDB.addToBasket(product);
}