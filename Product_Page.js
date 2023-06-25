
const sample = fetch("./product_manifest.json")

setupPage(1);

function setupPage(id){
    
    product_name = sample.product_name
    product_image = "135.png"
    price = "$" + "32"
    product_description = "adfa"
    console.log(product_name)
    document.getElementById("product-image").setAttribute("src", product_image)
    document.getElementById("product-name").innerHTML = product_name
    //document.getElementById("price").innerHTML = price
    //document.getElementById("product-description").innerHTML = product_description
}