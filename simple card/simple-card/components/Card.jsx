const Card = (props) =>{
    return(
        <div className="card">
            <img src={props.img} alt="product" style={{height:"5rem",
                width:"8rem"
            }}/>
        <h4>{props.title}</h4>
        <p>{props.brand}</p>
       <p>{props.price}</p>
    <button>Add to Cart</button>
        </div>
    )
}

export default Card;