import React from 'react';
import './styles/styles.scss';
import Card from './Card'


const posters = [
  {
    "title":"Fullmoon Party",
    "image":"https://comps.canstockphoto.es/fullmoon-cartel-flyer-ilustraci%C3%B3n-clipart-vectorial_csp55564251.jpg",
    "price": 70
  },
  {
    "title":"Halloween Party",
    "image":"https://image.freepik.com/vector-gratis/plantilla-poster-fiesta-halloween-casa-embrujada_52683-23803.jpg",
    "price": 50
  },
  {
    "title":"Electro Night",
    "image":"https://comps.canstockphoto.es/estilo-concierto-cartel-noche-m%C3%BAsica-clip-art-vectorial_csp51531363.jpg",
    "price": 60
  },
  {
    "title":"Summer Party",
    "image":"https://media.istockphoto.com/vectors/summer-beach-party-event-poster-and-flyer-template-design-vector-id538888160",
    "price": 40
  },
  {
    "title":"Cocktail Party",
    "image":"https://media.istockphoto.com/vectors/cocktail-party-poster-neon-vector-summer-party-design-template-bright-vector-id979003400",
    "price": 50
  },
  {
    "title":"Electro Sound",
    "image":"https://comps.canstockphoto.es/sonido-fiesta-electro-poster-clipart-vectorial_csp50725107.jpg",
    "price": 80
  },
  {
    "title":"Pool Party",
    "image":"https://static.vecteezy.com/system/resources/previews/000/559/992/non_2x/summer-pool-party-poster-design-template-with-water-beach-ball-and-float-on-blue-tiled-background-vector-holiday-illustration-for-banner-flyer-invitation-poster.jpg",
    "price": 60
  },
  {
    "title":"Christmas PArty",
    "image":"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-christmas-party-poster-template-05a53796849c84f52810b374ffb7ddf1_screen.jpg?ts=1561436041",
    "price": 50
  }
]


const App = () => (
  <>
  <div className="topbar">
    <div className="ed-grid m-grid-2">
      <p className="s-mb-1 m-mb-0 s-center m-left">Características > Topbar</p>
      <a className="button--cta button--tiny s-to-center m-to-right" href="https://www.google.com">Busqueda en Google</a>
    </div>
  </div>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnV6yTvQDYSEr1JYxq_ugPi1Vk2PZaoKQdyXlZ144TIcIjE6j&s" alt="imagen" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Creative Prety</p>
          <p> Maravillate</p>
          <a href="https://www.google.com" className="button">Que comience la fiesta</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-4">
    {
      posters.map( poster => <Card title={poster.title} image={poster.image} price={poster.price} /> )
    }
  </div>
</>
)

export default App;
