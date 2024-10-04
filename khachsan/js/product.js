    var product = [
        {
            class:"SP1",
            name:"Family room with sea view",
            img : "s11.jpg",
            price:"1.200.000 VND",
        },
        {
            id:"SP2",
            name:"Double room with sea view",
            img : "s12.jpg",
            price:"700.000 VND",
        },
        {
            id:"SP3",
            name:"Triple room with sea view",
            img : "s13.jpg",
            price:"900.000 VND",
        },
        {
            id:"SP4",
            name:"Double room",
            img : "s14.jpg",
            price:"300.000 VND",
        },
        {
            id:"SP5",
            name:"Superior room",
            img : "s21.jpg",
            price:"500.000 VND",
        },
        {
            id:"SP6",
            name:"Stand Apartment",
            img : "s22.jpg",
            price:"2.400.000 VND / 1 month",
        },
        {
            id:"SP7",
            name:"Deluxe Apartment",
            img : "s23.jpg",
            price:"5.000.000 VND / 1 month",
        },
        {
            id:"SP8",
            name:"V.I.P ",
            img : "s24.jpg",
            price:"3.000.000 VND",
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
   var listLocal = function(){
       var listproduct ="";
       for (var i in product){
           var data = JSON.parse(JSON.stringify(product[i]))
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" styte="width:auto">'; 
        listproduct += '<img class="card-img-top" src="img/' + data.img +'" alt="...">';
        listproduct += '<div class="card-title product-title text-center h5" >'+data.name+'</div>';
        listproduct += '<div class="price text-center h6">'+data.price+'₫</div>';
        listproduct +=  '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" onclick="tks()">';
        // listproduct +=  '<a class=" add-to-cart btn" data-name="'+product[i].name+'" data-price="'+product[i].price+'" onclick="tks()">';
        listproduct +=  '<a>';
        listproduct +=  '<i class="fas fa-cart-plus"></i>';
        listproduct +=  '</a>';
        listproduct +=  '</span>';
        listproduct += '</div>';
        listproduct += '</div>';

        document.getElementById("banchay").innerHTML += listproduct;
       }
       Save();
       
   }

listLocal();


