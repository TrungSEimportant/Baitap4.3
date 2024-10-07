    var product = [
        {
            id:"SP1",
            name:"Family room with sea view",
            img : "Fam2_sea.jpg",
            price:"1.200.000",
        },
        {
            id:"SP2",
            name:"Double room with sea view",
            img : "Double_sea.jpg",
            price:"700.000",
        },
        {
            id:"SP3",
            name:"Triple room with sea view",
            img : "Triple2_sea.jpg",
            price:"900.000",
        },
        {
            id:"SP4",
            name:"Double room (For two people)",
            img : "Double2.jpg",
            price:"500.000",
        },
        {
            id:"SP5",
            name:"Superior room",
            img : "Sup.webp",
            price:"300.000",
        },
        {
            id:"SP6",
            name:"Stand Apartment",
            img : "Stand_AP.jpg",
            price:"2.400.000 ",
        },
        {
            id:"SP7",
            name:"Deluxe Apartment",
            img : "Deluxe_AP.jpg",
            price:"5.000.000 ",
        },
        
    ];
// đẩy mảng product vào local
    function Save(){
        localStorage.setItem('listProduct',JSON.stringify(product))
    }
   //lấy sản phẩm 
   function load(){
       product = JSON.parse(localStorage.getItem('listProduct'));
   } 
   //xuất sản phẩm ra html
   if (localStorage.getItem("listProduct") != null) {
    load();
}
Save();
var listLocal = function() {
    var listproduct = "";
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" style="width:auto">';
        listproduct += '<img class="card-img-top" src="img/' + data.img + '" alt="...">';
        listproduct += '<div class="card-title product-title text-center h5">' + data.name + '</div>';
        listproduct += '<div class="price text-center h6">' + data.price + ' VND</div>';
        listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" ';
        // Add hiện thông báo cửa sổ
        listproduct += 'data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" ';
        listproduct += 'onclick="tks(\'' + data.name + '\')">';
        listproduct += '<a>';
        listproduct += '<i class="fas fa-cart-plus"></i>';
        listproduct += '</a>';
        listproduct += '</span>';
        //Add nút chi tiết
        listproduct += '<div class="text-center">';
        
        // 'Chi tiết' button
        listproduct += '<span class="btn btn-outline-info">';
        listproduct += '<a href="detail.html">DT</a> ';
        listproduct += '</span>';
        listproduct += '</div>';
        listproduct += '</div>';

        document.getElementById("banchay").innerHTML += listproduct;
    }
    Save();
}

// Function to display an alert with the product name
function tks(productName) {
    alert('' + productName + ' đã được đặt !');
}

listLocal();


