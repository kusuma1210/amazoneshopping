import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
       <div className="home__container">
        <img         
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm f4 is STM Lens (Black)"
            price={59.990}
            rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71WA9L%2BQNoL._AC_SL1500_.jpg"
            
          />
          <Product
            id="49538094"
            title="(Renewed) Dell 24 inch (60.96cm) Full HD Monitor - Wall Mountable, Height Adjustable, IPS Panel with HDMI and VGA Ports - P2419H (Black)"
            price={9.999}
            rating={5}
            image="https://m.media-amazon.com/images/I/81JRJMAsmjL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="OnePlus 9 5G smartphones"
            price={49.999}
            rating={4}
            
            image="https://images-eu.ssl-images-amazon.com/images/I/41uMUxlpqwL._AC_SX184_.jpg"
          />
          <Product
            id="23445930"
            title="Pure Source India Wax Jar Candle, Pack of 3, Lavender;Lemon Grass;Rose"
            price={876.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71eRNGvu0DL._AC_SX522_.jpg"
          />
          <Product
            id="3254354345"
            title="Sugar Free D'lite Zesty Orange Flavour Dark Chocolate Bar, 80g (Pack of 3)"
            price={481.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/51AxqaZ7m+L._AC_SR160,160_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Prestige Magic Glass Top GTMC 03"
            price={ 3.559}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Co5dFWiBL._AC_SL1500_.jpg"
          />
          <Product
            id="90829345"
            title="Amazon Brand - Solimo 4 Piece Storage Basket Set, Brown"
            price={1000}
            rating={3}
            image="https://m.media-amazon.com/images/I/91+D1HoOX9L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="90829385"
            title="Royaloak Milan Four Seater Dining Table Set (Black)"
            price={16.055}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2BiutneshL._AC_SL1080_.jpg"
          />
          <Product
            id="19981212"
            title="Whirlpool 1.5 Ton 3 Star Inverter Split AC (Copper, 1.5T MAGICOOL PRO+ 3S COPR INVERTER, White)"
            price={31.490}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61Vs-rdtqvL._AC_SL1500_.jpg"
          />
          <Product
            id="19981211"
            title="StBotanica Moroccan Argan Oil Anti Wrinkle Rejuvenating Under Eye Cream - Fights Skin Aging, Fine Lines and Dark Circles, (30 g, Normal Skin)"
            price={725.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61zYCCGm%2BBL._AC_SL1200_.jpg"
          />
          <Product
            id="19981210"
            title="MANSAA LED Star Light for Diwali Christmas Party and House Decoration, 6 Big Stars and 6 Small Stars"
            price={999.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/91+D1HoOX9L._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
      </div>
  
  )
}

export default Home;
