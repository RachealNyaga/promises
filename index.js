const data =  ["Harry", "Ross", "Bruce", "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes", "Lois", "Wilson", "Jesse" , "Campbell", "Ernest" , "Rogers", "Theresa" , "Patterson", "Henry" , "Simmons", "Michelle" , "Perry", "Frank" , "Butler", "Shirley"];
 function getData() {
     setTimeout(displayData(), 2000);
 }
 function displayData() {
     data.forEach(function(name) {
         console.log(name);
     })
 }
 getData();


 const myPromise = new Promise(function(displayData, reject) {
     setTimeout(function() {
         displayData()
     }, 2000);
 })

 myPromise
     .then(function() {
        data.forEach(function(name) {
             console.log(name);         })     })
     .catch(function(error) {
         console.log(error);
    })