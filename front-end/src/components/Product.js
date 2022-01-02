import './Product.css'
import { Link } from 'react-router-dom'
const Product = () => {
    return (
        <div className='product'>
            <img src="https://images.unsplash.com/photo-1609790026016-54ace8b92d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1525&q=80" alt="product_photo" />
            <div className='product__info'>
                <p className='info__name'>Wibrator</p>
                <p className='info__description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque qui, dolor nisi odio delectus nam tempora cum eveniet recusandae similique quis, fugiat maxime! Accusantium, veritatis pariatur. Natus, quia optio.
                </p>
                <p className='info__price'>€45</p>
                <Link to={`/product/${123}`} className='info__button'>View</Link>
            </div>
        </div>
    )
}

export default Product
