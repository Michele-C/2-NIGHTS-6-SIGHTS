document.addEventListener("DOMContentLoaded", function()
{

function myfunction (event){
console.log("YOU have Xlicked the burton")
console.log(this.id);}

let myButton = document.getElementById("my-button");
myButton.addEventListener("click", myfunction);


function additem (event){
console.log(" you have clicked on the cliffs")
}

let myBtn=document.getElementById("selectCliffs");
myBtn.addEventListener("click", additem);



function additem(event){

newitem = this.id;
console.log(newitem);
    
    if (newitem === "selectCliffs") {
var x = document.createElement("li");
x.textContent="The Cliffs of Moher";
document.getElementById("emptycase").appendChild(x);
newitem={};
}
else if (newitem === "selectBurren") {
  var x = document.createElement("li");
x.textContent="The Burren National Park including Ailwee Caves";
document.getElementById("emptycase").appendChild(x);
}
else if (newitem === "selectBunratty"){
  var x = document.createElement("li");
x.textContent="Bunratty Castle and Folk Park";
document.getElementById("emptycase").appendChild(x);
}
}
var newitem = {};

newitem.addEventListener('click', additem);

});
/*
  function addItemCliffs(){
        
    var x = document.createElement("li");

        var button = document.getElementById("selectCliffs");
         x.innerHTML=button.value;

     x.onclick = removeItem;
     document.getElementById("emptycase").appendChild(x);
}


function addItemBurren(){

    const x = document.createElement("li");

    const button = document.getElementById("selectBurren");
     
    x.innerHTML = button.value;

     x.onclick = removeItem;

    document.getElementById("emptycase").appendChild(x);
}

function addItemBunratty(){

    let x = document.createElement("li");

    let button = document.getElementById("selectBunratty");
     
    x.innerHTML = button.value;

     x.onclick = removeItem;

    document.getElementById("emptycase").appendChild(x);
}

function addItemPerfumery(){

    var x = document.createElement("li");

    var button = document.getElementById("selectPerfumery");
     
    x.innerHTML = button.value;

     x.onclick = removeItem;

  

    document.getElementById("emptycase").appendChild(x);
}


function addItemSmoke(){

    var x = document.createElement("li");

    var button = document.getElementById("selectSmoke");
     
    x.innerHTML = button.value;
     x.onclick = removeItem;
    document.getElementById("emptycase").appendChild(x);
}


function addItemHazel(){

    var x = document.createElement("li");

    var button = document.getElementById("selectHazel");
     
    x.innerHTML = button.value;

     x.onclick = removeItem;

    document.getElementById("emptycase").appendChild(x);
      
}

function addItemDromoland(){

    var x = document.createElement("li");

    var button = document.getElementById("selectDromoland");
     
    x.innerHTML = button.value;

     x.onclick = removeItem;

    //button.value = "";

    document.getElementById("emptycase").appendChild(x);
}

function addItemOldground(){

    var x = document.createElement("li");

    var button = document.getElementById("selectOldground");
     
    x.innerHTML = button.value;

     x.onclick = removeItem;

    document.getElementById("emptycase").appendChild(x);
}


function addItemDooling(){

    var x = document.createElement("li");

    var button = document.getElementById("selectDooling");
     
    x.innerHTML = button.value;

    x.onclick = removeItem;

    document.getElementById("emptycase").appendChild(x);
}

//removing item from suitcase.

function removeItem() {
    document.getElementById("emptycase").removeChild(this);
    }*/
