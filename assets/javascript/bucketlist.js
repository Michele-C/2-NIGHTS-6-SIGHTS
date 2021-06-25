
document.addEventListener("DOMContentLoaded", function () {

    

    
function addItem(){
    
    var newItem= document.createElement("li");
    
    let pressedbutton = document.getElementsByClassName("buttonsuit");

    console.log(pressedbutton);
        
    var x = document.createElement("li");

        var button = document.getElementById("selectCliffs");
         console.log(button.value);
    x.innerHTML = button.value;
console.log(x);
     x.onclick = removeItem;
    

    document.getElementById("emptycase").appendChild(x);
    
}


function addItemBurren(){

    var x = document.createElement("li");

    var button = document.getElementById("selectBurren");
     
    x.innerHTML = button.value;

     x.onclick = removeItem;

    document.getElementById("emptycase").appendChild(x);
}

function addItemBunratty(){

    var x = document.createElement("li");

    var button = document.getElementById("selectBunratty");
     
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
    }

});
