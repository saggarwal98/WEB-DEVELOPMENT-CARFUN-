function fetchProducts (done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}

function addProduct (name, manuf, price,location,model,kmdriven,fuel,done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price,
        location:location,
        model:model,
        kmdriven:kmdriven,
        fuel:fuel,
      
       
    }, function (data) {
        done(data)
    })
}

function createProductCard (product) {
    return $(`
    <div class="col-sm-4">
                                   
                                    <div  class="container-fluid tab-pane active"><br> 
                                        <div class="card card_style" style="width:400px">
                                    <div class="card-body ">
                                    <img class="card-img-bottom" src="image7.jpg" alt="Card image" style="width:100%">
                                    <h2 class="product-name"><b>${product.name}</b></h2>
                                    <h2><b> <div class="product-manufacturer">${product.manufacturer}</div></b></h2>
                                    <div class="product-location">${product.location}</div></b>
                                    <b>Rs. ${product.price} </b>
                                    <div class="row">
                                        <div class="col-sm-3">
                                    <img src="image2.jpg" height="50px" width="50px"><br><br>
                                    <p class="product-model"><b>${product.model}</b></p>
                                    </div>
                                    <div class="col-sm-3">
                                    <img src="image3.jpg" height="50px" width="50px"><br><br>
                                    <p class="product-kmdriven"><b>${product.kmdriven}</b><br></p>
                                </div>
                                <div class="col-sm-3">
                                        <img src="image4.jpg" height="50px" width="50px"><br><br>
                                        <p><b>${product.fuel}</b><br></p>
                                    </div>
                                   
                                    </div>
                                    </div><a href="/usedcarsindelhi/hyundaicreta/">
                                    <button class="btn btn-danger" style="width:490px">View Seller Details</button>
                                    </a>
                            </div>
                            </div>
                            </div>
                                    










                                   

    </div>
     `
    
        )
}





       