let loadData = () => {
    let template = document.getElementById("template-card").innerHTML;
    let holder = document.getElementById("parent-template-card");
    let dataList =  BasketDB.load();
    if (dataList == null || dataList.length == 0) {
        return;
    }
    dataList.forEach((basket,index) => {
        if (basket != null) {
            let curentItem = template;
            curentItem = curentItem.replace(/__ID__/g,basket.id);
            curentItem = curentItem.replace("__IMAGE__",basket.image);
            curentItem = curentItem.replace("__TITLE__",basket.title);
            curentItem = curentItem.replace("__PRICE__",basket.price);
            curentItem = curentItem.replace("__QTY__",basket.qty);
            holder.innerHTML = curentItem + holder.innerHTML;
        }
    });
};
let increace = (id) => {
    let result = BasketDB.increace(id);
    if (result > 0) {
        document.getElementById("qty_" + id).innerHTML = result;
    }
};
let decreace = (id) => {
    let result = BasketDB.decreace(id);
    if (result > 0) {
        document.getElementById("qty_" + id).innerHTML = result;
    } else {
        document.getElementById("basket-item-" + id).remove();
    }
}