let loadData = ()=>{
    let template = document.getElementById("product-template-item").innerHTML;
    let holder = document.getElementById("product");
    ProductHandler.getData().forEach((product,index)=> {
            let curentProduct = template;
            curentProduct = curentProduct.replace("__ID__",product.id);
            curentProduct = curentProduct.replace("__IMG__",product.image);
            curentProduct = curentProduct.replace("__TITLE__",product.title);
            curentProduct = curentProduct.replace("__CATGORY__",product.category);
            curentProduct = curentProduct.replace("__PRICE__",product.price);
            holder.innerHTML += curentProduct;
    });
}