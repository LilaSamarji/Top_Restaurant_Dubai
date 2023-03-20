fetch('https://restaurants-api-u1o9.onrender.com')
      .then(response => response.json())
      .then(restaurants =>{

            
            restaurants.forEach(restaurant=>{
            
                  
var about=restaurant.About;

var name=restaurant.Name;
document.getElementById(name).innerHTML=about;

      
            })
            
      } )
