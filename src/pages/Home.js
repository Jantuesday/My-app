import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/lemonbackground.png'
import '../styles/Home.css'
import Calamari from '../assets/calamari.jpg'
import Beef from '../assets/beef.jpg'
import Gnocchi from  '../assets/gnocchi.jpg'
import Vongole from '../assets/vongole.png'
import Tiramisu from '../assets/tiramisu.png'
import Cutlery from '../assets/cutlery.png'
import Foods from '../assets/foods.png'
import Delivery from '../assets/delivery.png'

function Home() {
  return (
    <div>
      <meta name="description" content="your text goes here"/>
      <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='headerContainer'>
        <h1>Little <span className='yellowlemon'>Lemon</span> </h1>
        <h2>Amsterdam</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br /> do eiusmod tempor incididunt ut labore et
            dolore magna<br /> aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation <br />ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Link to="/menu">
            <button> Reserve Table </button>
          </Link>
        </div>
      </div>

      <div className="specials-container">
        <div className="box">
          <h1>Specials</h1>

        </div>
        <div className='menubutton'>
          <Link to="/menu">
            <button> Learn more </button>
          </Link>
        </div>

      </div>

      <div className="card-container">
        <div className="card">
        <img src={Calamari} alt="Lemon 1" />
          <h2>Calamari Fritti</h2> <p>$10.99</p>
          <p>Crispy fried calamari served with a zesty marinara sauce.</p>
        </div>
        <div className="card">
        <img src={Beef} alt="Lemon 2" />
          <h2>Osso Buco</h2> <p>$10.99</p>
          <p>Slow-braised veal shank served with saffron risotto and gremolata.</p>
        </div>
        <div className="card">
        <img src={Gnocchi} alt="Lemon 3" />
          <h2>Gnocchi alla Sorrentina</h2> <p>$10.99</p>
          <p>Potato gnocchi baked with tomato sauce, fresh mozzarella, and basil.</p>
        </div>
        <div className="card">
        <img src={Vongole} alt="Lemon 4" />
          <h2>Linguine alle Vongole</h2> <p>$10.99</p>
          <p>Linguine pasta tossed with fresh clams, garlic, white wine, and a touch of red pepper flakes.</p>
        </div>
        <div className="card">
        <img src={Tiramisu} alt="Lemon 5" />
          <h2>Tiramisu</h2> <p>$10.99</p>
          <p>Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.</p>
        </div>
      </div>


      <div className='about-container'>
        <div className="aboutimages1" style={{ textAlign: 'center' }}>
          <img src={Cutlery} alt="abouts" style={{ maxWidth: '40%', height: 'auto' }} />
        </div>
        <div className="aboutimages2">
          <img src={Delivery} alt="abouts" style={{ maxWidth: '40%', height: 'auto' }} />
        </div>
        <div className="aboutimages3">
          <img src={Foods} alt="abouts" style={{ maxWidth: '40%', height: 'auto' }} />
        </div>

      </div>
      <div className='about-container'>
        <div className="abouttext">
          <h1>Excellent Food</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br />elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
        <div className="abouttext1">
          <h1>Excellent Food</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br />elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
        <div className="abouttext2">
          <h1>Excellent Food</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br />elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div>
      </div>


    </div>
  );
}

export default Home