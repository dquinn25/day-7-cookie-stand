'use strict'


var hours = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM"]

function randomizer(min, max){
    min = math.ceil(min);
    max =math.floor(max);
    return math.ceil(math.random() * (max - min + 1) + min;
}

var seattleStore = {
    name: "seattle",
     MinCust: 23,
     MaxCust: 65,
     Average: 6.3,
     calculateCustomersOunce; function(){
         var customer = randomizer(this.maxNumCustomers);
         return customers
     }
    hourlyCustomers:[],
    hourlyCookies:[],
    renderToPage : function(){
        var seattleList = document.getElementById('seattleStore-ul'); // getElementById takes an argument of the id as a string
    // 2. new element
    var newListItem = document.createElement('h3');
    // 2.5 content
    newListItem.textContent = seattleStore.name;
    //3. put it on page
    seattleList.appendChild(newListItem);
//==============
    // 2. new element
    for(var i = 0; i < 14; i++ ){
    var newListItem = document.createElement('li');
    // 2.5 content
    newListItem.textContent = hours[i] + ' cookies' + ' ' + seattleStore.hourlyCookies[i];
    //3. put it on page
    seattleList.appendChild(newListItem);
}
    }
}
for(var i = 0; i < 14; i++ ){
    seattleStore.hourlyCustomers= Math.floor(getRandomArbitrary(seattleStore.seattleMinCust, seattleStore.seattleMaxCust))
    
    seattleStore.hourlyCookies.push(Math.floor(seattleStore.seattleAverage * seattleStore.hourlyCustomers))
    
}
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

console.log(seattleStore.hourlyCookies);



// var tokyoStore = {
//     name: "Tokyo",
//      tokyoMinCust: 23,
//      tokyoMaxCust: 65,
//      tokyoAverage: 6.3,
//     hourlyCustomers:[],
//     hourlyCookies:[],
// }


// console.log(getRandomArbitrary(tokyoStore.tokyoMinCust, tokyoStore.tokyoMaxCust));

var dubaiStore = {
    dubaiMinCust: 23,
    dubaiMaxCust: 65,
    dubaiAverage: 6.3,
}

console.log(getRandomArbitrary(dubaiStore.dubaiMinCust, dubaiStore.dubaiMaxCust));

var parisStore = {
    parisMinCust: 23,
    parisMaxCust: 65,
    parisAverage: 6.3,
}

console.log(getRandomArbitrary(parisStore.parisMinCust, parisStore.parisMaxCust));

var limaStore = {
    limaMinCust: 23,
    limaMaxCust: 65,
    limaAverage: 6.3,
}

console.log(getRandomArbitrary(limaStore.limaMinCust, limaStore.limaMaxCust));

// var seattleMinCust: 23;
// var seattleMaxCust: 65;
// var SeattleAverage: 6.3;

// var tokyoMinCust: 3;
// var tokyoMaxCust: 24;
// var tokyoAverage: 1.2

// var DubaiMinCust: 11;
// var seattleMaxCust: 38;
// var SeattleAverage: 3.7;

// var parisMinCust: 20;
// var parisMaxCust: 38;
// var parisAverage: 2.3;

// var limaMinCust: 2;
// var limaMaxCust: 16;
// var limaAverage: 4.6;

// var randomCookiesSeattle 

getRandomArbitrary

seattleStore.renderToPage()

// tokyoStore.renderToPage()












// document.getElementById("store2").innerHTML = "this is how we pass text";