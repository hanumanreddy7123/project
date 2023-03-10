import react from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Nav from '../components/Nav'
function Checkout()
{
    return(
        <div>
            <div>
                <Nav/>
            </div>
            CHECKOUT PAGE<br></br>
            <StripeCheckout/>
        </div>
    )
}
export default Checkout