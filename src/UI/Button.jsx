import PropTypes from 'prop-types';

const Button = ({ style, value, type }) => {
	return (
		<button type={type} className={style}>
			{value}
		</button>
	);
};

Button.propTypes = {
	style: PropTypes.string,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default Button;
