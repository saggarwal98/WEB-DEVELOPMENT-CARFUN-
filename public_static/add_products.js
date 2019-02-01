$(function () {
    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')
    let productLocation = $('#productLocation')
    let productModel = $('#productModel')
    let productKmDriven = $('#productKmDriven')
    let productFuel = $('#productFuel')
   
    
    
    $('#btnProductAdd').click(function () {

        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            productLocation.val(),
            productModel.val(),
            productKmDriven.val(),
            productFuel.val(),
            
            
            function (addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database")
            }
        )


    })

})