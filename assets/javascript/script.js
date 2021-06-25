document.addEventListener("DOMContentLoaded", function(){

    var cliffs= document.getElementById("selectCliffs");
    var Burren = document.getElementById("selectBurren");
    var Bunratty = document.getElementById("selectBunratty");
    var Perfumery = document.getElementById("selectPerfumery");
    var Smoke = document.getElementById("selectSmoke");
    var Hazel =document.getElementById("selectHazel");
    var Dromoland = document.getElementById("selectDromoland");
    var Oldground = document.getElementById("selectOldground");
    var Dooling = document.getElementById("selectDooling");

cliffs.addEventListener('click', function(){
    var x = document.createElement("li");
    x.textContent="The Cliffs of Moher";
    x.onclick = removeItem;
    document.getElementById("emptycase").appendChild(x);
});

Burren.addEventListener('click', function(){
    var x = document.createElement("li");
    x.textContent="The Burren National Park and Ailwee Caves.";
    x.onclick = removeItem;
    document.getElementById("emptycase").appendChild(x);
});
Bunratty.addEventListener('click', function(){
    var x = document.createElement("li");
    x.textContent="Bunratty Castle and Folk Park.";
    x.onclick = removeItem;
    document.getElementById("emptycase").appendChild(x);
});

Perfumery.addEventListener('click', function(){
    var x = document.createElement("li");
    x.textContent="The Burren Perfumery.";
    x.onclick = removeItem;
    document.getElementById("emptycase").appendChild(x);
});

Smoke.addEventListener('click', function(){
    var x = document.createElement("li");
    x.textContent="The Burren Smokehouse.";
    x.onclick = removeItem;
    document.getElementById("emptycase").appendChild(x);
});

Hazel.addEventListener('click', function(){
    var x = document.createElement("li");
    x.textContent="Hazel Mountain Chocolate Factory.";
    x.onclick = removeItem;
    document.getElementById("emptycase").appendChild(x);
});

Dromoland.addEventListener('click', function(){
    var x = document.createElement("li");
    x.textContent="Dromoland Castle and Golf Club.";
    x.onclick = removeItem;
    document.getElementById("emptycase").appendChild(x);
});

Oldground.addEventListener('click', function(){
    var x = document.createElement("li");
    x.textContent="The Old Ground Hotel.";
    x.onclick = removeItem;
    document.getElementById("emptycase").appendChild(x);
});

Dooling.addEventListener('click', function(){
    var x = document.createElement("li");
    x.textContent="Doolin Glamping.";
    x.onclick = removeItem;
    document.getElementById("emptycase").appendChild(x);
});

function removeItem() {
    document.getElementById("emptycase").removeChild(this);
}

});

