import './ProductScreen.css';

function ProductScreen() {
    return (
        <div className='productscreen'>
            <div className='productscreen__left'>
                <div className='left__image'>
                    <img src="https://images.unsplash.com/photo-1609790026016-54ace8b92d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1525&q=80" alt="product_photo" />
                </div>
                <div className='left__info'>
                    <p className='left__name'>Product 1</p>
                    <p className='left__name'>Price: €49</p>
                    <p>Description:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, cumque qui, dolor nisi odio delectus</p>
                </div>
            </div>
            <div className='productscreen__right'>
                <div className="right__info">
                    <p>Price<span>€49</span></p>
                    <p>Status:<span>In Stock</span></p>
                    <p>Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add to cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
