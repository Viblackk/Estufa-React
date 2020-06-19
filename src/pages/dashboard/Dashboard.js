import React, { useState, useEffect } from 'react';
import './dashboard.css';
import axios from 'axios';
import Login from '../login/index';
import Card from '../card/index'

const citiesMock = [
  {
    name: 'Rio Preto',
    lat: '-20.8166393',
    lon: '-49.4523953',
  },
  {
    name: 'Fernandópolis',
    lat: '-20.2826',
    lon: '-50.2501',
  },
];

const infoUser = [
  {
    name: 'Vitão',
    idade: '20'
  },
  {
    name: 'Alessandro',
    idade: '20'
  }
]

export default function Dashboard() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    console.log('Chamou');
    async function fetch() {
      await loadClimate();
    }
    fetch().then((r) => {});
  }, []);

  async function loadClimate() {
    const allResults = [];
    citiesMock.map(async (item) => {
    });
    for (let item of citiesMock) {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather`, {
          params: {
            lat: item.lat,
            lon: item.lon,
            cnt: 1,
            appid: '8f21c9e57d78e43ff6bfdabe7004f069'
          }
        }
      );
      setCities(cities => [...cities, response.data]);
    }
    
  }

  return (
    <div className="wrapper">
      <div className="sidebar">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">Zéca pagodinho</a>
        <a href="#contact">Péricles</a>
        <a href="#about">Xand</a>
      </div>
      <div style={{display: 'flex'}}>
      { cities.map(item => <Card cityInformation={item} />) }
      </div>
      {/* <div className="container">
        { infoUser.map(user => (<Login user={user} />)) }
        
        <div className="card-climate">
          {cities ? cities.map((item) => item.name) : null}
        </div>
      </div> */}
    </div>
  );
}
