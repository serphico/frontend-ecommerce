import { useEffect, useState } from "react"


export default function ButtonBuy(addProduct) {


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ addProduct })
        };

        const addCart = () => {
            fetch('/cart', requestOptions)
            .then(response => response.json())
        }
 
    

    return(
        <button onClick={addCart} className="bg-blue-500 py-2 px-4 text-white font-bold">
            comprar
        </button>
    )
}