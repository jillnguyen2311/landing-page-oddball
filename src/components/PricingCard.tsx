// /components/PricingCard.tsx
import PropTypes from 'prop-types';
import Spline from '@splinetool/react-spline';

export default function PricingCard({ type, price, features, splineScene }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="px-4 py-6">
          <h2 className="text-lg font-semibold mb-2">{type}</h2>
          <p className="text-2xl font-bold mb-2">{price}</p>
          <ul className="text-gray-600">
            {features.map((feature, index) => (
              <li key={index} className="mb-1">{feature}</li>
            ))}
          </ul>
          <Spline scene={splineScene} />
          <button className="w-full px-4 py-2 mt-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-500">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

PricingCard.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  splineScene: PropTypes.string.isRequired,
};
