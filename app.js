'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


var seattle = {
    name: 'seattle',
    min: 23,
    max: 65,
    avgCookies: 6.3,
    hourlySales: [],
    dialySales: 0,
    randomInRange: function () {
        var range = this.max - this.min;
        var random = Math.ceil((Math.random() * range) + this.min);
        return random;
},
cookiesPurchased: function () {
        for (var i = 0; i < hours.length; i++){
            var cookiesSold = Math.ceil(this.randomInRange() * this.avgCookies);
            this.hourlySales.push(cookiesSold);
            this.dialySales += cookiesSold;

        }
},
render: function() {
    var container = document.getElementById('content'); 

    var h2 = document.createElement('h2');
   container.appendChild(h2);
    h2.textContent = this.name;

    var ul = document.createElement('ul');
    container.appendChild(ul);

for (var i=0; i<hours.length; i++){
 var li = document.createElement('li');
 ul.appendChild(li);
 li.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies ';

}
var li = document.createElement('li');
ul.appendChild(li);
li.textContent = 'Total: ' +  this.dialySales +' cookies';
},
}

var dubai = {
    name: 'dubai',
    min: 11,
    max: 38,
    avgCookies: 3.7,
    hourlySales : [],
    dialySales: 0,
    randomInRange: function () {
        var range = this.max - this.min;
        var random = Math.ceil((Math.random() * range) + this.min);
        return random;
},
cookiesPurchased: function () {
        for (var i = 0; i < hours.length; i++){
            var cookiesSold = Math.ceil(this.randomInRange() * this.avgCookies);
            this.hourlySales.push(cookiesSold);
            this.dialySales += cookiesSold;

        }
},
render: function() {
    var container = document.getElementById('content'); 

    var h2 = document.createElement('h2');
   container.appendChild(h2);
    h2.textContent = this.name;

    var ul = document.createElement('ul');
    container.appendChild(ul);

for (var i=0; i<hours.length; i++){
 var li = document.createElement('li');
 ul.appendChild(li);
 li.textContent = hours[i] + ': ' +  this.hourlySales[i] + ' cookies ';

}

var li = document.createElement('li');
ul.appendChild(li);
li.textContent = 'Total: ' + this.dialySales +' cookies';
},
}

var shops = [seattle,dubai];
for (var i=0; i<shops.length; i++){
    var shop = shops[i];
    shop.render();
    shop.cookiesPurchased();
}





