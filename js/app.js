'use strict';
let hours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','Total:'];


const seattle = {
  locName : 'Seattle',
  minCust : 23,
  maxCust : 65,
  avgCookieSale : 6.3,
  salesNums : [],
  totalCookisPerDay : 0,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  render : function(){
    const container = document.getElementById('location-sales');
    const h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.locName;
    const ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let j=0; j<hours.length-1; j++){
      let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
      this.totalCookisPerDay = this.totalCookisPerDay+num;
      this.salesNums.push(num);
    }
    this.salesNums.push(this.totalCookisPerDay);
    for (let i=0; i<hours.length; i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
    }
  }

};
seattle.render();
// console.log(seattle.salesNum);


const tokyo = {
  locName : 'Tokyo',
  minCust : 3,
  maxCust : 24,
  avgCookieSale : 1.2,
  salesNums : [],
  totalCookisPerDay: 0,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  render : function(){
    const container = document.getElementById('location-sales');
    const h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.locName;
    const ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let j=0; j<hours.length-1; j++){
      let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
      this.totalCookisPerDay = this.totalCookisPerDay+num;
      this.salesNums.push(num);
    }
    this.salesNums.push(this.totalCookisPerDay);
    for (let i=0; i<hours.length; i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
    }
  }

};
tokyo.render();
// console.log(tokyo.salesNum);


const dubai = {
  locName : 'Dubai',
  minCust : 11,
  maxCust : 38,
  avgCookieSale : 3.7,
  salesNums : [],
  totalCookisPerDay: 0,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  render : function(){
    const container = document.getElementById('location-sales');
    const h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.locName;
    const ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let j=0; j<hours.length-1; j++){
      let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
      this.totalCookisPerDay = this.totalCookisPerDay+num;
      this.salesNums.push(num);
    }
    this.salesNums.push(this.totalCookisPerDay);
    for (let i=0; i<hours.length; i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
    }
  }

};
dubai.render();
// console.log(dubai.salesNum);


const paris = {
  locName : 'Paris',
  minCust : 20,
  maxCust : 38,
  avgCookieSale : 2.3,
  salesNums : [],
  totalCookisPerDay: 0,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  render : function(){
    const container = document.getElementById('location-sales');
    const h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.locName;
    const ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let j=0; j<hours.length-1; j++){
      let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
      this.totalCookisPerDay = this.totalCookisPerDay+num;
      this.salesNums.push(num);
    }
    this.salesNums.push(this.totalCookisPerDay);
    for (let i=0; i<hours.length; i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
    }
  }

};
paris.render();
// console.log(paris.salesNum);


const lima = {
  locName : 'Lima',
  minCust : 2,
  maxCust : 16,
  avgCookieSale : 4.6,
  salesNums : [],
  totalCookisPerDay: 0,
  custPerHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  render : function(){
    const container = document.getElementById('location-sales');
    const h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent=this.locName;
    const ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let j=0; j<hours.length-1; j++){
      let num = Math.ceil(this.custPerHour()*this.avgCookieSale);
      this.totalCookisPerDay = this.totalCookisPerDay+num;
      this.salesNums.push(num);
    }
    this.salesNums.push(this.totalCookisPerDay);
    for (let i=0; i<hours.length; i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]} ${this.salesNums[i]} Cookies`;
    }
  }

};
lima.render();
// console.log(lima.salesNum);
