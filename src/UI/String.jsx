import PropTypes from 'prop-types';

const String = ({ style, value }) => {
	return <p className={style}>{value}</p>;
};

String.propTypes = {
	style: PropTypes.string,
	value: PropTypes.string.isRequired,
};

export default String;
