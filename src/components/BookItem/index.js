import "./index.css"

const BookItem = (props)=>
{
    const {details} = props;
    const {title,image,price,subtitle} = details;
    return(
        <div className="bookItem-container">
            <img src={image} className="book-thumbnail" alt={title} />
            <div className="bookItem-content-container">
                <p className="bookItem-title">{title}</p>
                <p className="bookItem-subtitle">{subtitle}</p>
                <p className="bookItem-price">{price}</p>
            </div>
        </div>
    )
}

export default BookItem;