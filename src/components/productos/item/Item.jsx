import ButtonAddCart from '../buttonAddCart/ButtonAddCart'

export default function Item({idProduct, title, photo, price, description, category}){
    return(
        <div id={idProduct}>
            <h3>{title}</h3>
            <img src={`http://localhost:8080/img-prod/`+category+'/'+photo} alt="imagen del producto" />
            <span>{price}</span>
            <p>{description}</p>
            <ButtonAddCart addProduct={{idProduct, title, photo, price, description, category}}/>
        </div>
    )
}