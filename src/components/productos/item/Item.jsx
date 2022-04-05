

export default function Item({idProduct, title, photo, price, description}){
    return(
        <div id={idProduct}>
            <h3>{title}</h3>
            <img src={`http://localhost:8080/`+photo} alt="imagen del producto" />
            <span>{price}</span>
            <p>{description}</p>
        </div>
    )
}