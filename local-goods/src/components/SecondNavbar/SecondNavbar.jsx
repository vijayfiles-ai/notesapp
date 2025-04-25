import React from 'react'
import './SecondNavbar.css'
import shopping_bag from '../../assets/shopping-bag.png'
import cafe from '../../assets/milk-cap.png'
import toys from '../../assets/rubber-duck.png'
import electronics from '../../assets/sound-headset.png'
import mobiles from '../../assets/application.png'
import beauty from '../../assets/beauty.png'
// import fashion from '../../assets/application.png'
import fresh from '../../assets/strawberries.png'



const SecondNavbar = () => {
  return (
    <div className='SecondNavbar'>
       <div className="navbar-left">
        <ul>
          <li><img src={shopping_bag} alt="" />All</li>
          <li><img src={cafe} alt="" />Cafe</li>
          <li><img src={toys} alt="" />Toys</li>
          <li><img src={fresh} alt="" />Fresh</li>
          <li><img src={electronics} alt="" />Electronics</li>
          <li><img src={mobiles} alt="" />Mobiles</li>
          <li><img src={beauty} alt="" />Beauty</li>
          <li><img src={shopping_bag} alt="" />Fashion</li>
        </ul>
      </div>
    </div>
  )
}

export default SecondNavbar
