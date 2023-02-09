import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Products = () => {
  const token = Cookies.get('JWTTOKEN')
  if (token !== undefined) {
    return (
      <>
        <Header />
        <div className="ProdCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
            alt="products"
            className="pro"
          />
        </div>
      </>
    )
  }
  return <Redirect to="/login" />
}

export default Products
