'use strict'


var hours = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM"]

// var seattleStore = {
//     name: "seattle",
//      MinCust: 23,
//      MaxCust: 65,
//      Average: 6.3,
//     hourlyCustomers:[],
//     hourlyCookies:[],
//     storeId : 'seattleStore-ul',
//     createHours : createHours,
//     renderToPage : renderToPage, 
//     total : 0,
//}
    function renderToPage(){
        var seattleList = document.getElementById(this.storeId); // getElementById takes an argument of the id as a string
    // 2. new element
    var newListItem = document.createElement('h3');
    // 2.5 content

    newListItem.textContent = this.name;
    // 3. put it on page
    seattleList.appendChild(newListItem);
    // ==============
    // 2. new element
    for(var i = 0; i < 15; i++ ){
    var newListItem = document.createElement('li');
    // 2.5 content
    newListItem.textContent = hours[i] + ' cookies' + ' ' + this.hourlyCookies[i];
    // 3. put it on page
    seattleList.appendChild(newListItem);
    }
    var newListItem = document.createElement('li');

    // 2.5 content

    newListItem.textContent = 'Total: ' + this.total + ' cookies';
    // 3. put it on page
    seattleList.appendChild(newListItem); 
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function createHours() {
    console.log(this.MinCust);
    for(var i = 0; i < 15; i++ ){
        var getCust = Math.floor(getRandomArbitrary(this.MinCust, this.MaxCust));
        console.log(getCust);
        var hourlyTotal = Math.floor(this.Average * getCust);
        this.hourlyCookies.push(hourlyTotal);
        this.total += hourlyTotal ;
    }
}

function createTableHead(){

}

function tableRender(){
    //render the same data in table form
    var table = document.getElementById('cookie-table');
// function totalTheCookies(){
//     var total = 0
//     return total
var tableRow = document.createElement('tr');
// }
// seattleStore.prototype.createHours = createHours;

// seattleStore.prototype.renderToPage = renderToPage;

var tableCell = document.createElement('td');

tableCell.textContent = this.name;

tableRow.appendChild(tableCell);

for(var i = 0; i < this.hourlyCookies.length; i++){

    tableCell = document.createElement('td');
    tableCell.textContent = this.hourlyCookies[i];
    tableRow.appendChild(tableCell);
    }

    table.appendChild(tableRow);


}

function createTableHours(){
    var header = document.getElementById('cookie-table');

    var tableRow = document.createElement('tr');

    var tableCell = document.createElement('td');

    tableCell.textContent = 'hours';

    tableRow.appendChild(tableCell);

    for(var i = 0; i < hours.length; i ++){
        tableCell = document.createElement('td');
        tableCell.textContent = hours[i];
        tableRow.appendChild(tableCell);
    }
    header.appendChild(tableRow);
}


// seattleStore.createHours()
// seattleStore.renderToPage()


// console.log(seattleStore.total)
// var tokyoStore = {
//     name: "Tokyo",
//      tokyoMinCust: 23,
//      tokyoMaxCust: 65,
//      tokyoAverage: 6.3,
//     hourlyCustomers:[],
//     hourlyCookies:[],
// }


// console.log(getRandomArbitrary(tokyoStore.tokyoMinCust, tokyoStore.tokyoMaxCust));
var tokyoStore = {
    name: "tokyo",
     MinCust: 3,
     MaxCust: 24,
     Average: 1.2,
    hourlyCustomers:[],
    hourlyCookies:[],
    storeId : 'tokyoStore-ul',
    createHours : createHours,
    renderToPage : renderToPage, 
    total : 0,
}

// tokyoStore.createHours()
// tokyoStore.renderToPage()


// console.log(getRandomArbitrary(dubaiStore.dubaiMinCust, dubaiStore.dubaiMaxCust));

var dubaiStore = {
    name: "dubai",
     MinCust: 11,
     MaxCust: 38,
     Average: 3.7,
    hourlyCustomers:[],
    hourlyCookies:[],
    storeId : 'dubaiStore-ul',
    createHours : createHours,
    renderToPage : renderToPage, 
    total : 0,
}

// dubaiStore.createHours()
// dubaiStore.renderToPage()

// console.log(getRandomArbitrary(parisStore.parisMinCust, parisStore.parisMaxCust));

var parisStore = {
    name: "paris",
     MinCust: 20,
     MaxCust: 38,
     Average: 2.3,
    hourlyCustomers:[],
    hourlyCookies:[],
    storeId : 'parisStore-ul',
    createHours : createHours,
    renderToPage : renderToPage, 
    total : 0,
}

// parisStore.createHours()
// parisStore.renderToPage()



// console.log(getRandomArbitrary(limaStore.limaMinCust, limaStore.limaMaxCust));

var limaStore = {
    name: "lima",
     MinCust: 2,
     MaxCust: 16,
     Average: 4.6,
    hourlyCustomers:[],
    hourlyCookies:[],
    storeId : 'limaStore-ul',
    createHours : createHours,
    renderToPage : renderToPage, 
    total : 0,
}

// limaStore.createHours()
// limaStore.renderToPage()

 



// constructor function
function CookieStore(name, storeId, minCust, maxCust, average){
    this.name = name;
    this.storeId = storeId;
    this.MinCust = minCust;
    this.MaxCust = maxCust;
    this.Average = average;
    this.hourlyCustomers = [];
    this.hourlyCookies = [];
    this.total = 0;
  }
  CookieStore.prototype.renderToPage = renderToPage;
  CookieStore.prototype.tableRender = tableRender;
  CookieStore.prototype.createHours = createHours;
  
var seattleStore = new CookieStore('seattle', 'seattleStore-ul', 23, 65, 6.3);
//   table.appendChild.tableRow

createTableHours()
seattleStore.createHours();
seattleStore.renderToPage();

seattleStore.tableRender();

var tokyoStore = new CookieStore('tokyo', 'tokyoStore-ul', 3, 24, 1.2);
//   table.appendChild.tableRow

tokyoStore.createHours();
tokyoStore.renderToPage();

tokyoStore.tableRender();

var dubaiStore = new CookieStore('dubai', 'dubaiStore-ul', 11, 38, 3.7);
//   table.appendChild.tableRow

dubaiStore.createHours();
dubaiStore.renderToPage();

dubaiStore.tableRender();

var parisStore = new CookieStore('paris', 'parisStore-ul', 20, 38, 2.3);
//   table.appendChild.tableRow

parisStore.createHours();
parisStore.renderToPage();

parisStore.tableRender();

var limaStore = new CookieStore('lima', 'limaStore-ul', 2, 16, 4.6);
//   table.appendChild.tableRow

limaStore.createHours();
limaStore.renderToPage();

limaStore.tableRender();

