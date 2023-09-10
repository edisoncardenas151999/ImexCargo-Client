import { Link } from "react-router-dom";

const NoResult = () => {
  return (
    <div>
      <img
        className="imgNoResult"
        src="https://multichannelmerchant.com/wp-content/uploads/2020/05/no-results-found-magnifying-glass-feature.jpg"
        alt="Logo"
      />
      <p className="pTagNoresults">No Results Found</p>
      <Link to="/tracking">Back to Tracking</Link>
    </div>
  );
};

export default NoResult;
