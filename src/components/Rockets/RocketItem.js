import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  addReservation,
  cancelReservation,
} from '../../store/rocket/rocketSlice';
import './RocketItem.css';

export default function Rocket({ rocket }) {
  const dispatch = useDispatch();

  return (
    <div className="rocket_container">
      <img
        className="img"
        src={rocket.flickr_images[0]}
        alt={rocket.rocket_name}
      />
      <div className="rocket-details">
        <h3 className="name">{rocket.rocket_name}</h3>
        <p className="description">
          {rocket.reserved && <span className="reserve-badge">reserved</span>}
          {rocket.description}
        </p>
        {rocket.reserved && (
          <button
            type="button"
            className="cancel-reserve-btn"
            onClick={() => dispatch(cancelReservation(rocket.id))}
          >
            Cancel Reservation
          </button>
        )}
        {!rocket.reserved && (
          <button
            type="button"
            className="reserve-btn"
            onClick={() => dispatch(addReservation(rocket.id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    rocket_name: PropTypes.string,
    reserved: PropTypes.bool,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
  }),
};

Rocket.defaultProps = {
  rocket: {
    id: '',
    rocket_name: '',
    reserved: false,
    description: '',
    flickr_images: [],
  },
};
