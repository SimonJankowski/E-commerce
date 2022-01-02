import './CartItem.css'
import { Link } from 'react-router-dom';

const CartItem = () => {
    return (
        <div className='cartItem'>
            <div className='cartItem__image'>
                <img src="https://images.unsplash.com/photo-1609790026016-54ace8b92d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1525&q=80" alt="product_photo" />
            </div>
            <Link to={`/product/${123}`} className='cartItem__name'>
                <p>Product 1</p>
            </Link>
            <p className='cartItem__price'>€49</p>
            <select className='cartItem__select'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button className='cartItem__deleteBtn'>
                <i className="fas fa-trash"></i></button>
        </div>
    )
}

export default CartItem
