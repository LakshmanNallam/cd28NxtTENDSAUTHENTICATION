// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Cart = () => {
  const token = Cookies.get('jwt_token')
  console.log(token)
  if (token !== undefined) {
    return (
      <>
        <Header />
        <div className="ProdCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
            alt="cart"
            className="pro"
          />
        </div>
      </>
    )
  }
  return <Redirect to="/login" />
}

export default Cart
