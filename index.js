fetch('https://restaurants-api-u1o9.onrender.com')
      .then(response => response.json())
      .then(restaurants =>{

            
            restaurants.forEach(restaurant=>{
            
                  var cards= document.createElement('div');
                cards.innerHTML=`
                 <div class="col-4>

<div class="card" style="width:22.3vw;height:22.3vw;  margin-right: 15vw; margin-bottom:10vw;  box-shadow: rgba(0, 0, 0, 0.35) 0px 2vw 5vw; ">
     <img src="${restaurant.Picture}" class="card-img-top">
     <div class="card-body" style="background-color:#CCD1D1;width:22.3vw;height:27.5vw;">
      <div class="row " style="justify-content:center;>
       
       <div  style="color:black ;margin-top:0.3vw;margin-bottom:0.2vw;"><span style="font-weight:bold;color:#B22222;font-size:1.2vw;">Location</span> <p style="font-size:1.5vw; margin-top:0.3vw;margin-bottom:0.2vw;color:black;margin-left:0.2vw" >  ${restaurant.Location}</p> </div>
       <div class="row" style="justify-content:center;margin-top:0.3vw;">
       <div style="margin:0.5vw;" >  <a style="color:black" href="${restaurant.Instagram}"><img src="images/instagram.png" style="width:2vw;height:2vw;" /></a></div>
       <div style="margin:0.5vw; > <a style="color:black" href="tel:${restaurant.Phone}"><img src="images/whatsapp.png" style="width:2vw;height:2vw;" /></a> </div>
       <div style="margin:0.5vw; >  <a style="color:black" href="tel:${restaurant.facebook}"><img src="images/facebook.png" style="width:2vw;height:2vw;" /></a> </div>
       </div>
       </div>
       </div>
     </div>
     </div>
</div>`;
cards.setAttribute("class","col-4")
document.getElementById("contact").appendChild(cards);

      
            })
            
      } )


    