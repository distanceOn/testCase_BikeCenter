import PropTypes from 'prop-types';

const Button = ({ style, value, type, content, contentStyle }) => {
	return (
		<div className={contentStyle}>
			{content ? content : ''}
			<button type={type} className={style}>
				{value}
			</button>
		</div>
	);
};

Button.propTypes = {
	style: PropTypes.string,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	content: PropTypes.object,
	contentStyle: PropTypes.string,
};

export default Button;
