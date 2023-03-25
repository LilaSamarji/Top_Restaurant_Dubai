fetch('https://restaurants-api-u1o9.onrender.com')
      .then(response => response.json())
      .then(restaurants =>{

            
            restaurants.forEach(restaurant=>{
            
                  var cards= document.createElement('div');
                cards.innerHTML=`
                <div class="card" style="width:18rem;height:30rem;margin:3rem;">
                <img class="card-img-top" src="${restaurant.Picture}" alt="Card image cap" style="width:100%;">
                <div class="card-body" style="background-color:#FEF5E7;height:30rem;">
                <div  style="color:black ;margin-top:0.3vw;margin-bottom:1vw;"><span style="font-weight:bold;color:#B22222;font-size:1.2vw;">Location</span> <p style="font-size:1.5vw; margin-top:0.3vw;margin-bottom:0.2vw;color:black;margin-left:0.2vw" >  ${restaurant.Location}</p> </div>
                <div class="row" style="justify-content:center;margin-top:0.3vw;margin-bottom:3vw;">
                <div style="margin-right:0.5vw;">  <a style="color:black" href="${restaurant.Instagram}"><img src="images/instagram.png" style="width:2vw;height:2vw;" /></a></div>
                <div style="margin-right:0.5vw; margin-left:0.5vw;"> <a style="color:black" href="tel:${restaurant.Phone}"><img src="images/whatsapp.png" style="width:2vw;height:2vw;" /></a> </div>
                <div style="margin-left:0.5vw;">  <a style="color:black" href="tel:${restaurant.facebook}"><img src="images/facebook.png" style="width:2vw;height:2vw;" /></a> </div>
                </div>
                </div>
              </div>`
cards.setAttribute("id","cards");
document.getElementById("contact").appendChild(cards);
var style=`margin-bottom:20%`;
document.getElementById("cards").style=style;

      
            })
            
      } )


    