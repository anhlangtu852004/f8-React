import { useMemo, useRef, useState} from 'react'



function Cart() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState()
    const [cart, setCart] = useState([])
    const idCount = useRef(0)

    const handleAddToCart = () => {
        setCart(
            [
                ...cart,
                {
                    id: ++idCount.current,
                    name : name,
                    price : parseInt(price)
                }
            ]
        )
    }

    const handleDelete = (id) => {
        setCart(
            cart => cart.filter(item => item.id !== id)
        )
    }

    const total = useMemo(() => {
        const result = cart.reduce((result, currentPrice) => { return result + currentPrice.price }, 0 )
        return result
    },[cart])

    console.log(cart);
    return ( 
       <div style={{padding: 20}}>
            <h1>cart</h1>
            <div>
                <input 
                    type='text'
                    onChange={ (e)=> setName(e.target.value) }
                />
                    sp
            </div>
            <div>
                <input 
                    type='text'
                    onChange={ (e)=> setPrice(e.target.value) }
                />
                gia
            </div>
            
            <button onClick={handleAddToCart}> add</button>
            <h1>tootal: { total}</h1>

            <ul>
                {cart.map (item =>(
                    <div key={item.id}>
                        <li>{item.name} - {item.price} </li> <button onClick={() => handleDelete(item.id)}>xoa</button>
                    </div>
                ))}
            </ul>
       </div>
     );
}

export default Cart;