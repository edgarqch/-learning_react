import React from 'react';
import './styles/styles.scss';
import Card from './Card'

const App = () => (
  <>
  <div className="topbar">
    <div className="ed-grid m-grid-2">
      <p className="s-mb-1 m-mb-0 s-center m-left">Características > Topbar</p>
      <a className="button--cta button--tiny s-to-center m-to-right" href="https://ed.team">Modelo de botón </a>
    </div>
  </div>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnV6yTvQDYSEr1JYxq_ugPi1Vk2PZaoKQdyXlZ144TIcIjE6j&s" alt="imagen" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner</p>
          <a href="https://ed.team" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-4">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</>
)

export default App;
