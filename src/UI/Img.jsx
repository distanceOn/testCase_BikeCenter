import PropTypes from 'prop-types';

const Img = ({ style, url, alt, onClick }) => {
	function getIconUrl(url) {
		return `/assets/images/${url}.svg`;
	}

	return (
		<img onClick={onClick} className={style} src={getIconUrl(url)} alt={alt} />
	);
};

Img.propTypes = {
	style: PropTypes.string,
	url: PropTypes.string,
	alt: PropTypes.string,
	onClick: PropTypes.func,
};

export default Img;
