class BasketDB {
    static addToBasket(data) {
        let dataList = this.load();
        if (dataList == undefined || dataList == null) {
            dataList = new Array();
        }
        let basketItem = new Basket(
            data.id,
            data.title,
            data.price,
            data.image,
            1);

        let oldData = dataList.find((value) => value != null && value.id == basketItem.id);
        if (oldData != undefined && oldData != null) {
            oldData.qty++;
        } else {
            dataList.push(basketItem);
        }
        setCookie("basket", JSON.stringify(dataList), 30);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added Card',
            showConfirmButton: false,
            timer: 2000
        })
    }

    static load() {
        let str = getCookie("basket");
        debugger;
        if (str == "")
            return null;
        return JSON.parse(str);
    }
    static increace (id) {
        let dataList = this.load();
        if (dataList == undefined || dataList == null) {
            dataList = new Array();
        }
        let oldData = dataList.find((value) => value != null && value.id == id);
        if (oldData != undefined && oldData != null) {
            oldData.qty++;
            setCookie("basket", JSON.stringify(dataList), 30);
            return oldData.qty;
        }
        return 0;
    }
    static decreace (id) {
        let dataList = this.load();
        if (dataList == undefined || dataList == null) {
            dataList = new Array();
        }
        let oldData = dataList.find((value) => value != null && value.id == id);
        if (oldData != undefined && oldData != null) {
            oldData.qty--;
            if (oldData.qty <= 0) {
               let index = dataList.findIndex((value) => value != null && value.id == id);
               delete dataList[index];
            }
            setCookie("basket", JSON.stringify(dataList), 30);
            return oldData.qty;
        }
        return 0;
    }
}