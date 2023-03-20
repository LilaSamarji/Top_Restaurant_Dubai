fetch('https://restaurants-api-u1o9.onrender.com')
      .then(response => response.json())
      .then(restaurants =>{

            
            restaurants.forEach(restaurant=>{
            
                  var cards= document.createElement('div');
                cards.innerHTML=`<div class="carousel-item active">
                 <div class="carousel-container">

<div class="card animate__animated animate__fadeInDown" style="width:18rem;  margin-right: 10px; margin-bottom:10px; border:2px solid brown; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
     <img src="" class="card-img-top" style="width:285px;height:200px;">
     <div class="card-body" style="background-color:#FFDAB9; height:20rem;">
       <h3 class="card-title" style="color:#800000	 ;font-size:25px; font-weight:bold">${restaurant.Name}</h3>
       <p><span style="font-weight:bold;color:	#B22222;">Location</span>    ${restaurant.Location} </p>
       <p> <span style="font-weight:bold;color:#B22222	;">Instagram</span> ${restaurant.Instagram}</p>
       <p> <span style="font-weight:bold;color:#B22222;">Contact us</span>  ${restaurant.Phone} </p>
      
       
       <a href="#" class="btn btn-primary" id="clickme"  style=" background: linear-gradient(to bottom right, #EF4765, #FF9A5A)";>Traditional Dishes</a>
     </div>
     </div>
</div>
</div>`;
//document.getElementById("body").appendChild(cards);

var about=document.createElement('p');
about.innerHTML=restaurant.About;

     var s=document.createElement('p');
     var name=restaurant.Name;
     console.log(name)
     document.getElementById(name).innerHTML=restaurant.About;     
       //s.appendChild(about);
      
            })
            
      } )


    