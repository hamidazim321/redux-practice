import {useSelector} from 'react-redux'
import { CartIcon } from './Icons'

const Navbar = () => {
  const {amount} = useSelector((state) => state.cart)
  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux Toolkit</h3>
        <div className='nav-container'>
          <CartIcon/>
        </div>
        <div className='amount-container'>
          <p className='total-amount'>{amount}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar