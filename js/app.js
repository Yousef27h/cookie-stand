'use strict';

const seattle = {
  locName : 'Seattle',
  minCust : 23,
  maxCust : 65,
  avgCookieSale : 6.3,
  hours : ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','Total:'],
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
    let total = 0;
    let salesNum = [];
    for (let j=0; j<this.hours.length-1; j++){
      let num = Math.round(this.custPerHour()*this.avgCookieSale);
      total = total+num;
      salesNum.push(num);
    }
    salesNum.push(total);
    for (let i=0; i<this.hours.length; i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.hours[i]} ${salesNum[i]} Cookies`;
    }
  }

};
seattle.render();


const tokyo = {
  locName : 'Tokyo',
  minCust : 3,
  maxCust : 24,
  avgCookieSale : 1.2,
  hours : ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','Total:'],
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
    let total = 0;
    let salesNum = [];
    for (let j=0; j<this.hours.length-1; j++){
      let num = Math.round(this.custPerHour()*this.avgCookieSale);
      total = total+num;
      salesNum.push(num);
    }
    salesNum.push(total);
    for (let i=0; i<this.hours.length; i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.hours[i]} ${salesNum[i]} Cookies`;
    }
  }

};
tokyo.render();


const dubai = {
  locName : 'Dubai',
  minCust : 11,
  maxCust : 38,
  avgCookieSale : 3.7,
  hours : ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','Total:'],
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
    let total = 0;
    let salesNum = [];
    for (let j=0; j<this.hours.length-1; j++){
      let num = Math.round(this.custPerHour()*this.avgCookieSale);
      total = total+num;
      salesNum.push(num);
    }
    salesNum.push(total);
    for (let i=0; i<this.hours.length; i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.hours[i]} ${salesNum[i]} Cookies`;
    }
  }

};
dubai.render();


const paris = {
  locName : 'Paris',
  minCust : 20,
  maxCust : 38,
  avgCookieSale : 2.3,
  hours : ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','Total:'],
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
    let total = 0;
    let salesNum = [];
    for (let j=0; j<this.hours.length-1; j++){
      let num = Math.round(this.custPerHour()*this.avgCookieSale);
      total = total+num;
      salesNum.push(num);
    }
    salesNum.push(total);
    for (let i=0; i<this.hours.length; i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.hours[i]} ${salesNum[i]} Cookies`;
    }
  }

};
paris.render();


const lima = {
  locName : 'Lima',
  minCust : 2,
  maxCust : 16,
  avgCookieSale : 4.6,
  hours : ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','Total:'],
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
    let total = 0;
    let salesNum = [];
    for (let j=0; j<this.hours.length-1; j++){
      let num = Math.round(this.custPerHour()*this.avgCookieSale);
      total = total+num;
      salesNum.push(num);
    }
    salesNum.push(total);
    for (let i=0; i<this.hours.length; i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.hours[i]} ${salesNum[i]} Cookies`;
    }
  }

};
lima.render();