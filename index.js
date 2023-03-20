fetch('https://restaurants-api-u1o9.onrender.com')
      .then(response => response.json())
      .then(restaurants =>{

            
            restaurants.forEach(restaurant=>{
            
                  var cards= document.createElement('div');
                cards.innerHTML=`
                 <div>

<div class="card" style="width:18rem;  margin-right: 20px; margin-bottom:10px; border:2px solid brown; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; ">
     <img src="${restaurant.Picture}" class="card-img-top" style="width:285px;height:200px;">
     <div class="card-body" style="background-color:#CCD1D1 ; height:20rem;">
      <div class="row" style="justify-content:center">
       <h3 class="card-title" style="color:#800000	 ;font-size:25px; font-weight:bold">${restaurant.Name}</h3>
       <div style="color:black ;margin-left:5px;margin-right:5px;"><span style="font-weight:bold;color:	#B22222;">Location</span>    ${restaurant.Location} </div>
       <div style="color:black;margin-left:5px;margin-right:5px;">  <a style="color:black" href="${restaurant.Instagram}"><img src="images/instagram.png" style="width:30px;height:30px;"/></a></div>
       <div style="color:black;margin-left:5px;margin-right:5px;">  <a style="color:black" href="tel:${restaurant.Phone}"><img src="images/whatsapp.png" style="width:30px;height:30px;"/></a> </div>
       <div style="color:black;margin-left:5px;margin-right:5px;">  <a style="color:black" href="tel:${restaurant.facebook}"><img src="images/facebook.png" style="width:30px;height:30px;"/></a> </div>
       
       </div>
     </div>
     </div>
</div>`;

document.getElementById("contact").appendChild(cards);

      
            })
            
      } )


    