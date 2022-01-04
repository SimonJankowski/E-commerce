import './ProductScreen.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom' // we dont have access to match in react-router v6 thats why i use this


import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

const ProductScreen = () => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const productDetails = useSelector(state => state.getProductDetails)
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && params.id !== product._id) {
            dispatch(getProductDetails(params.id));
        }
    }, [dispatch, product, params]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        navigate(`/cart`);
    };


    return (
        <div className='productscreen'>
            {loading ? (
                <h2>put loader here</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className='productscreen__left'>
                        <div className='left__image'>
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className='left__info'>
                            <p className='left__name'>{product.name}</p>
                            <p className='left__name'>{product.price} €</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <div className='productscreen__right'>
                        <div className="right__info">
                            <p>Price<span>{product.price * qty} €</span></p>
                            <p>Status:<span>{product.countInStock > 0 ? "Instock" : "Out of stock"}</span></p>
                            <p>Qty
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>Add to cart</button>
                            </p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default ProductScreen
