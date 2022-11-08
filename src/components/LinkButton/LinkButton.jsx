import { Link } from './LinkButton.styled';
import PropTypes from 'prop-types';

export const LinkButton = ({ to, children, end }) => {
  return (
    <>
      <Link to={to} end={end}>
        {children}
      </Link>
    </>
  );
};

LinkButton.propTypes = {
  to: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  end: PropTypes.string,
};
