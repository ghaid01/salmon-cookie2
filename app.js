'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieShop(name, min, max, avgCookies) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.hourlySales = [];
    this.dialySales = 0;
    this.cookiesPurchased();
}
CookieShop.prototype.randomInRange = function () {
    var range = this.max - this.min;
    var random = Math.random() * range + this.min;
    return Math.ceil(random);
};
CookieShop.prototype.cookiesPurchased = function () {
    for (var i = 0; i < hours.length; i++) {
        var cookiesSold = Math.ceil(this.randomInRange() * this.avgCookies);
        this.hourlySales.push(cookiesSold);
        this.dialySales += this.cookiesSold;
    }
}
CookieShop.prototype.render = function (table) {
    var tr = document.createElement('tr');
    container.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.name;


    for (var i = 0; i < this.hourlySales.length; i++) {
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.hourlySales[i];
    }
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.dailySales;
}

var container = document.getElementById('content');
var table = document.createElement('table');
container.appendChild(table);

function renderHeaderRow(table) {
    var tr = document.createElement('tr');
    table.appendChild(tr);

    var th = document.createElement('th');
    tr.appendChild(th);

    for (var i = 0; i < hours.length; i++) {
        th = document.createElement('th');
        tr.appendChild(th)
        th.textContent = hours[i];
    }
    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = 'Daily hours Total';

}
function renderFooterRow(table) {
    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = 'totals';

    var megaTotals = 0;
   


    for (var hourIndex = 0; hourIndex < hours.length; hourIndex++){
        var hourlySum = 0;
        for (var shopIndex =0; shopIndex < shops.length; shopIndex++){
            hourlySum +=shops[shopIndex].hourlySales[hourIndex];
        }
        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = hourlySum;
        megaTotals += hourlySum;
    }
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = megaTotals;

}
function renderDataRows(table) {

    for (var i = 0; i < shops.length; i++) {
        var shop = shops[i];
        shop.render(table);
    }
    
}
        


var shops = [];
shops.push(new CookieShop('seattle', 23, 65, 6.3));
shops.push(new CookieShop('dubai', 11, 38, 3.7));
shops.push(new CookieShop('lima', 23, 65, 6.3));
shops.push(new CookieShop('tokyo', 11, 38, 3.7));

renderHeaderRow(table);
renderDataRows(table);
renderFooterRow(table);

function submitHandler(event){
    var location = event.target.name.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var avg = parseFloat(event.target.avgCookies.value);


    var newShop = new CookieShop(location,min,max,avg);
    console.log('newshop',newShop);

    shops.push(newShop);
    newShop.renderDataRows(table);
    
}

var form = document.getElementById('form1');
form.addEventListener('submit', submitHandler);





