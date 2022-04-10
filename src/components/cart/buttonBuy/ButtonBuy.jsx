
export default function ButtonAddCart({allCart}) {
        
    const finalCart = JSON.stringify(allCart)


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: finalCart
    };

    const finishBuy = () => {
        fetch('https://tercera-preentrega.herokuapp.com/buy', requestOptions)
        .then(response => response.json())
    }



    return(
        <button onClick={finishBuy} className="bg-blue-500 py-2 px-4 text-white font-bold">
            comprar
        </button>
    )
}