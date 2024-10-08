// Gọi onclick bên index.html chỗ btn
function searchProduct() {
    // Lấy data từ Id (chỗ index.html chỗ input). Có thể nhập chữ hoa or thường bằng tolowerCase()
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    
    // Xóa results
    document.getElementById("banchay").innerHTML = "";

    // Filter sẽ lấy data.name từ searchQuery.
    var filteredProducts = product.filter(function(item) {
        return item.name.toLowerCase().includes(searchQuery);
    });

    // Show sản phẩm tìm kiếm 
    if (filteredProducts.length > 0) {
        for (var i in filteredProducts) {
            var data = JSON.parse(JSON.stringify(filteredProducts[i]));
            var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
            listproduct += '<div class="card product p-2" style="width:auto">';
            listproduct += '<img class="card-img-top" src="img/' + data.img + '" alt="...">';
            listproduct += '<div class="card-title product-title text-center h5">' + data.name + '</div>';
            listproduct += '<div class="price text-center h6">' + data.price + ' VND</div>';
            listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" ';
            listproduct += 'data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" ';
            listproduct += 'onclick="tks(\'' + data.name + '\')">';
            listproduct += '<a>';
            listproduct += '<i class="fas fa-cart-plus"></i>';
            listproduct += '</a>';
            listproduct += '</span>';
            listproduct += '<div class="text-center">';
            listproduct += '<span class="btn btn-outline-info">';
            listproduct += '<a href="detail.html">DT</a> ';
            listproduct += '</span>';
            listproduct += '</div>';
            listproduct += '</div>';

            document.getElementById("banchay").innerHTML += listproduct;
        }
    } else {
        document.getElementById("banchay").innerHTML = "<p>Cannot find data.</p>";
    }
}

// Initial load of products
listLocal();
