'use strict';

let hours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','Total:'];
let totalNums=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function Location(name , minCust , maxCust , avgCookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.salesNums = [];
  this.totalCookisPerDay = 0;
}

Location.prototype.custPerHour = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

Location.prototype.render = function(){
  const tableEl = document.getElementById('myTable');
  const tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  const thEl = document.createElement('th');
  tableRow.appendChild(thEl);
  thEl.textContent = this.name;
  // const container = document.getElementById('location-sales');
  // const h2El = document.createElement('h2');
  // container.appendChild(h2El);
  // h2El.textContent=this.name;
  // const ulEl = document.createElement('ul');
  // container.appendChild(ulEl);
  for (let j=0; j<hours.length-1; j++){
    let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
    this.totalCookisPerDay = this.totalCookisPerDay+num;
    this.salesNums.push(num);
    const tdEl = document.createElement('td');
    tableRow.appendChild(tdEl);
    tdEl.textContent = num;
  }

  const totEl = document.createElement('td');
  tableRow.appendChild(totEl);
  totEl.textContent = this.totalCookisPerDay;
  this.salesNums.push(this.totalCookisPerDay);
  for (let k=0; k<this.salesNums.length ; k++){
    totalNums[k]=totalNums[k]+this.salesNums[k];
  }
  console.log(totalNums);

  Location.prototype.totals = function(){
    const totRowEl = document.createElement('tr');
    tableEl.appendChild(totRowEl);
    const tothEl = document.createElement('th');
    totRowEl.appendChild(tothEl);
    tothEl.textContent = 'Totals';
    for (let i=0; i<totalNums.length ; i++){
      const totdEl = document.createElement('th');
      totRowEl.appendChild(totdEl);
      totdEl.textContent = totalNums[i];
    }
  };

  // for (let i=0; i<hours.length; i++){
  //   const liEl = document.createElement('li');
  //   ulEl.appendChild(liEl);
  //   liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
  // }
};

const seattle = new Location('Seattle', 23, 65,6.3);
const tokyo = new Location('Tokyo',3,24,1.2);
const dubai = new Location('Dubai',11,38,3.7);
const paris = new Location('Paris',20,38,2.3);
const lima = new Location('Lima',2,16,4.6);

seattle.custPerHour();
seattle.render();

tokyo.custPerHour();
tokyo.render();

dubai.custPerHour();
dubai.render();

paris.custPerHour();
paris.render();

lima.custPerHour();
lima.render();

lima.totals();
// const seattle = {
//   locName : 'Seattle',
//   minCust : 23,
//   maxCust : 65,
//   avgCookieSale : 6.3,
//   salesNums : [],
//   totalCookisPerDay : 0,
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   render : function(){
//     const container = document.getElementById('location-sales');
//     const h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent=this.locName;
//     const ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let j=0; j<hours.length-1; j++){
//       let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
//       this.totalCookisPerDay = this.totalCookisPerDay+num;
//       this.salesNums.push(num);
//     }
//     this.salesNums.push(this.totalCookisPerDay);
//     for (let i=0; i<hours.length; i++){
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
//     }
//   }

// };
// seattle.render();
// // console.log(seattle.salesNum);


// const tokyo = {
//   locName : 'Tokyo',
//   minCust : 3,
//   maxCust : 24,
//   avgCookieSale : 1.2,
//   salesNums : [],
//   totalCookisPerDay: 0,
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   render : function(){
//     const container = document.getElementById('location-sales');
//     const h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent=this.locName;
//     const ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let j=0; j<hours.length-1; j++){
//       let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
//       this.totalCookisPerDay = this.totalCookisPerDay+num;
//       this.salesNums.push(num);
//     }
//     this.salesNums.push(this.totalCookisPerDay);
//     for (let i=0; i<hours.length; i++){
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
//     }
//   }

// };
// tokyo.render();
// // console.log(tokyo.salesNum);


// const dubai = {
//   locName : 'Dubai',
//   minCust : 11,
//   maxCust : 38,
//   avgCookieSale : 3.7,
//   salesNums : [],
//   totalCookisPerDay: 0,
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   render : function(){
//     const container = document.getElementById('location-sales');
//     const h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent=this.locName;
//     const ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let j=0; j<hours.length-1; j++){
//       let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
//       this.totalCookisPerDay = this.totalCookisPerDay+num;
//       this.salesNums.push(num);
//     }
//     this.salesNums.push(this.totalCookisPerDay);
//     for (let i=0; i<hours.length; i++){
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
//     }
//   }

// };
// dubai.render();
// // console.log(dubai.salesNum);


// const paris = {
//   locName : 'Paris',
//   minCust : 20,
//   maxCust : 38,
//   avgCookieSale : 2.3,
//   salesNums : [],
//   totalCookisPerDay: 0,
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   render : function(){
//     const container = document.getElementById('location-sales');
//     const h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent=this.locName;
//     const ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let j=0; j<hours.length-1; j++){
//       let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
//       this.totalCookisPerDay = this.totalCookisPerDay+num;
//       this.salesNums.push(num);
//     }
//     this.salesNums.push(this.totalCookisPerDay);
//     for (let i=0; i<hours.length; i++){
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
//     }
//   }

// };
// paris.render();
// // console.log(paris.salesNum);


// const lima = {
//   locName : 'Lima',
//   minCust : 2,
//   maxCust : 16,
//   avgCookieSale : 4.6,
//   salesNums : [],
//   totalCookisPerDay: 0,
//   custPerHour: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },

//   render : function(){
//     const container = document.getElementById('location-sales');
//     const h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent=this.locName;
//     const ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let j=0; j<hours.length-1; j++){
//       let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
//       this.totalCookisPerDay = this.totalCookisPerDay+num;
//       this.salesNums.push(num);
//     }
//     this.salesNums.push(this.totalCookisPerDay);
//     for (let i=0; i<hours.length; i++){
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
//     }
//   }

// };
// lima.render();
// // console.log(lima.salesNum);
