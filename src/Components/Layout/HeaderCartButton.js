
import CartIcon from '../Cart/CartIcon'
import HeaderCart from './HeaderCartButton.module.css'

const HeaderCartButton = props => {

  return <button className={HeaderCart.button }>
<span className={HeaderCart.icon}>
    <CartIcon/>
</span>
<span>Your Cart</span>
<span className={HeaderCart.badge}>
    3
</span>
  </button>
}

export default HeaderCartButton;