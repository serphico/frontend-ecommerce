
import React from 'react'
import ItemCart from './itemCart/ItemCart'

export default function Productos() {
  
    const [data, setData]= React.useState(null);
    React.useEffect(()=>{
      fetch("/cart")
      .then((res)=> res.json())
      .then((data) => {
        setData(data.contentCart)})
    }, [])

    return(
        <>
        {
            !data ? <>Carrito Vacio</> : data.map( (prod) =>{
                return(
                    <>
                        <ItemCart key={prod._id} idProduct={prod._id} title={prod.title} photo={prod.photo} price={prod.price} description={prod.description} category={prod.category} quantity={prod.quantity}/>
                        <ButtonBuy allCart={prod}/>
                    </>
                )
            })
            

        }
            

        </>
    )
    
}