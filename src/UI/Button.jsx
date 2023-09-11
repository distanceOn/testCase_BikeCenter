import PropTypes from 'prop-types';

const Button = ({ style, value, type, content, contentStyle, onClick }) => {
	return (
		<div onClick={onClick} className={contentStyle}>
			{content ? content : ''}
			<button type={type} className={style}>
				{value}
			</button>
		</div>
	);
};

Button.propTypes = {
	style: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	content: PropTypes.object,
	contentStyle: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
