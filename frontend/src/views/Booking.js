import { Elements } from "@stripe/react-stripe-js";
import InjectedCheckoutForm from '../components/stripe/CheckoutForm';

function Booking() {
	return (
		<Elements>
		 	<InjectedCheckoutForm />
		</Elements>
	 );
  }
  
  export default Booking