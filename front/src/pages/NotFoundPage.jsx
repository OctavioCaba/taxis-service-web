import { Link } from 'react-router-dom';
import { FaHeartBroken } from 'react-icons/fa';

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h2>Oops...&nbsp;&nbsp;<FaHeartBroken /></h2>
      <p>Couldn't find the page you're looking for</p>
      <Link to="/" className="link">To main Page</Link>
    </div>
  );
}
