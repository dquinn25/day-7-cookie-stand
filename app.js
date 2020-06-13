'use strict'


var hours = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM"]


//     function renderToPage(){
//         var seattleList = document.getElementById(this.storeId);
//     // 2. new element
//     var newListItem = document.createElement('h3');
//     // 2.5 content

//     newListItem.textContent = this.name;
//     // 3. put it on page
//     seattleList.appendChild(newListItem);
//     // ==============
//     // 2. new element
//     for(var i = 0; i < 15; i++ ){
//     var newListItem = document.createElement('li');
//     // 2.5 content
//     newListItem.textContent = hours[i] + ' cookies' + ' ' + this.hourlyCookies[i];
//     // 3. put it on page
//     seattleList.appendChild(newListItem);
//     }
//     var newListItem = document.createElement('li');

//     // 2.5 content

//     newListItem.textContent = 'Total: ' + this.total + ' cookies';
//     // 3. put it on page
//     seattleList.appendChild(newListItem); 
// }

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
    console.log(header)
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
//need to call the function hourlytotals and assign it to a variable 
//use the variable in a for loop when we want to a assign text content
function createTableTotal(){

    var footer = document.getElementById('cookie-table');

    var tableRow = document.createElement('tr');

    var tableCell = document.createElement('td');

    tableCell.textContent = 'hourly Totals';

    tableRow.appendChild(tableCell);

        var array = hourlyTotals(); 

    for(var i = 0; i < array.length; i ++){
        tableCell = document.createElement('td');
        tableCell.textContent = array[i];
        tableRow.appendChild(tableCell);
    }
    footer.appendChild(tableRow);

}

// seattleStore.createHours()
// seattleStore.renderToPage()




// limaStore.createHours()
// limaStore.renderToPage()

function hourlyTotals() {
    //befor the for loop make an array. In the for loop put the total in the array. last thing you will do is return the array
    var hourlyCookiesArr = [];
    
    for (var i = 0; i < hours.length; i++) {
        var theTotal = 0;
        theTotal += seattleStore.hourlyCookies[i];
        theTotal += tokyoStore.hourlyCookies[i];
        theTotal += dubaiStore.hourlyCookies[i];
        theTotal += parisStore.hourlyCookies[i];
        theTotal += limaStore.hourlyCookies[i];
        console.log(theTotal);
        hourlyCookiesArr.push(theTotal);
    }
    return hourlyCookiesArr
  }



 
// function createTotal(){
//     var header = document.getElementById('cookie-table');

//     var tableRow = document.createElement('tr');

//     var tableCell = document.createElement('td');

//     tableRow.appendChild(tableCell);

//     for(var i = 0; i < hour[i]; i ++){
//         tableCell = document.createElement('td');
    
//     }
//     header.appendChild(tableRow);
// }

var allStores = []

// constructor function
function CookieStore(name, minCust, maxCust, average){
    this.name = name;
    this.MinCust = minCust;
    this.MaxCust = maxCust;
    this.Average = average;
    this.hourlyCustomers = [];
    this.hourlyCookies = [];
    this.total = 0;
    allStores.push(this)
  }
  console.log(allStores)
  CookieStore.prototype.tableRender = tableRender;
  CookieStore.prototype.createHours = createHours;
  
var seattleStore = new CookieStore('seattle', 23, 65, 6.3);
//   table.appendChild.tableRow

createTableHours()
seattleStore.createHours();


seattleStore.tableRender();
var tokyoStore = new CookieStore('tokyo', 3, 24, 1.2);
//   table.appendChild.tableRow

tokyoStore.createHours();


tokyoStore.tableRender();

var dubaiStore = new CookieStore('dubai', 11, 38, 3.7);
//   table.appendChild.tableRow

dubaiStore.createHours();


dubaiStore.tableRender();

var parisStore = new CookieStore('paris', 20, 38, 2.3);
//   table.appendChild.tableRow

parisStore.createHours();


parisStore.tableRender();

var limaStore = new CookieStore('lima', 2, 16, 4.6);
//   table.appendChild.tableRow

limaStore.createHours();


limaStore.tableRender();

createTableTotal();

//create the outline of form
//create a event listener
//crate a event handler
//city name, min max and average, no ID
//make new object
//render the new store to page
//Questions dry code? <feildset>

var firstDiv = document.getElementById('newStore');


// function createNewCity(event){
    // };
    
    firstDiv.addEventListener('submit', function(event){
        event.preventDefault()
        // alert('you clicked the box');
        console.log('submit', event);
        console.log('city name', event.target.name.value)
        console.log('minCust', event.target.minCust.value)
        console.log('maxCust', event.target.maxCust.value)
        console.log('minCust', event.target.average.value)
        var newName = event.target.name.value
        var newMinCust = event.target.minCust.value
        var newMaxCust = event.target.maxCust.value
        var newAverage = event.target.average.value
        //create table total is only making the footer
        var table = document.getElementById('cookie-table');
        table.deleteRow(-1)
        var newCookieStore = new CookieStore (newName, newMinCust, newMaxCust, newAverage);
        console.log(newCookieStore);

        // newCookieStore.tableRender();
        // newCookieStore.renderToPage();
        newCookieStore.createHours();
        //clear the footer before table render
        

        newCookieStore.tableRender();

createTableTotal();
    });
    
    //    console.log(name, minCust, maxCust, average);
    
// var secondDiv = document.getElementById('minCust');

// firstDiv.addEventListener('submit', function(event){
//     event.preventDefault()
//     // alert('you clicked the box');
//     console.log('submit', event);
//   });

 

