import PropTypes from 'prop-types';

const Icon = ({ style, iconPath, alt }) => {
	function getIconUrl(iconPath) {
		return `/public/assets/icons/${iconPath}.svg`;
	}

	return (
		<div>
			<img className={style} src={getIconUrl(iconPath)} alt={alt} />
		</div>
	);
};

Icon.propTypes = {
	style: PropTypes.string.isRequired,
	iconPath: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Icon;
