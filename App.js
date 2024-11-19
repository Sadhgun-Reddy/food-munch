import React from 'react';
import ReactDOM from 'react-dom';

const Header = ()=>{
  return(
    <div className='header'>
        <div className='logo-container'>
            <img 
               className='logo'
               src="https://www.logodesign.net/logo/smoking-burger-eith-lettuce-3624ld.png"
            />
        </div>
        <div className='nav-items'>
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>cart</li>
            </ul>
        </div>
    </div>
  )
}

const RestaurantCard = ()=>{
   return(
      <div className='res-card '>
         <img alt='restaurant-image' className='res-logo' src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg'/>
         <h3>Our Restaurant</h3>
         <h4>Chinise,North Indian, South Indian</h4>
         <h4>Ratings</h4>
         <p>Delivery Time</p>
      </div>
   )
}

const Body = ()=>{
   return(
      <div className='body'>
         <div className='search'>Search</div>
         <div className='res-container'>
         <RestaurantCard/>
         </div>
      </div>
   )
}



const AppLayout =()=>{
   return(
      <div className='app'>
         <Header />
         <Body/>
      </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);