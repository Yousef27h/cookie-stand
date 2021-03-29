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

const tableEl = document.getElementById('myTable');
function tableFooter(){
  const totRowEl = document.createElement('tr');
  totRowEl.id = 'lastRow';
  // totRowEl.setAttribute('id','lastRow');
  tableEl.appendChild(totRowEl);
  const tothEl = document.createElement('th');
  totRowEl.appendChild(tothEl);
  tothEl.textContent = 'Totals';
  for (let i=0; i<totalNums.length ; i++){
    const totdEl = document.createElement('th');
    totRowEl.appendChild(totdEl);
    totdEl.textContent = totalNums[i];
  }
}
tableFooter();
let myForm = document.getElementById('locForm');
myForm.addEventListener('submit', addNewLoc);

function addNewLoc(event){
  event.preventDefault();

  let locName = event.target.city.value;
  console.log(locName);
  let minNum = event.target.minCust.value;
  console.log(minNum);
  let maxNum = event.target.maxCust.value;
  console.log(maxNum);
  let avgNum = event.target.avgCookieSale.value;
  console.log(avgNum);

  let newLoc = new Location(locName,minNum,maxNum,avgNum);
  newLoc.custPerHour();
  newLoc.render();
  const tableFoot = document.getElementById('lastRow');
  tableEl.removeChild(tableFoot);
  tableFooter();
}

