import './Product.css'

function Product(props){
    return (
        <div>
            <div className="card">
                <h1>{props.x.title}</h1>
                <div className="header">
                    <span><strong>ID - </strong>{props.x.id}</span>
                    <span><strong>Price - </strong>{props.x.price}</span>
                </div>
                <div className='details'>
                    <p>{props.x.description}</p>
                    <p><strong>Category</strong> - {props.x.category}</p>
                    <img src={props.x.image} alt="" width="100px" />
                    <p><strong>Rating - </strong>{props.x.rating.rate}</p>
                    <p><strong>Count - </strong>{props.x.rating.count}</p>
                </div>
            </div>
        </div>
    )
}

export default Product