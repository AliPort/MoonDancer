import {useCartElement} from '@stripe/react-stripe-js';

const TourPage = ({productId}) => {
  const cartElement = useCartElement();

  const handleAddLineItem = () => {
    if (!cartElement) return;
    cartElement.addLineItem({product: productId});
  };

  return (
    <div>
      <button onClick={handleAddLineItem}>Add to cart</button>
    </div>
  )
};

export default TourPage