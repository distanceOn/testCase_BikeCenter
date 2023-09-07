import PropTypes from 'prop-types';

const Img = ({ style, url, alt }) => {
	function getIconUrl(url) {
		return `/assets/images/${url}.svg`;
	}

	return <img className={style} src={getIconUrl(url)} alt={alt} />;
};

Img.propTypes = {
	style: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Img;
