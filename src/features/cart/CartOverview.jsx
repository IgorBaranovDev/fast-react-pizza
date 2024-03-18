import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartPrise, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrise = useSelector(getTotalCartPrise);

  if (!totalCartQuantity) return null;

  return (
    <div className="py-4sm:px-6 flex items-center justify-between bg-stone-800 p-4 px-4  text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrise)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
