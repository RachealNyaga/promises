let displayItems = document.querySelector(".display-items");

fetch("https://dummyjson.com/products")
   .then(function(promise) {
    promise.json()
     .then(function(response){
    response.products.forEach(function(product) {
     console.log(product);
     displayItems.innerHTML += `
     <li>
     <img src="${product.images[3]}" alt="" />
       <h3>${product.title}</h3>
         <p>${product.description}</p>
         
             </li>
       ` 
                });
                
            }) 
            .catch(function(error) {
                console.log("Promise not parsed to JSON");
    })
    })
    .catch(function(error) {
      console.log(error);
   })