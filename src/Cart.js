import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';


export default function Cart(params) {
    const location = useLocation();
    let total = 0;

    // console.log(location.state.cartItems)

    return (
        <>{location.state.cartItems.length !== 0 ?
            location.state.cartItems.map((item, key) => (
                <div className='d-flex border border-primary align-items-center gap-3'>
                    <h5 key={key} >{item.title}</h5>
                    {/* <Image src={item.thumbnail}></Image> */}
                    <Image src={item.thumbnail} width={'150px'} rounded />
                    <span className='bg-success p-1 rounded text-white'>{item.price} $</span>
                    {total = total + item.price}
                </div>
            )) : <h1>Empty Cart</h1>
        }
        </>
    )
}