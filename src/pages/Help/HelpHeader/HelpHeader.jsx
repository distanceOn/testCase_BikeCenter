import String from '../../../UI/String';
import { Link } from 'react-router-dom';
import s from './HelpHeader.module.scss';
function HelpHeader() {
	return (
		<>
			<header className={s.header}>
				<nav className={s.nav}>
					<Link to="#">
						<String style={s.link} value="Главная страница" />
					</Link>
					<div>/</div>
					<Link to="/">
						<String style={s.link__active} value="Помощь"></String>
					</Link>
				</nav>
				<div className={s.titles}>
					<String style={s.title} value="Помощь" />
					<div className={s.phones}>
						<String style={s.phone} value="Телефон горячей линии" />{' '}
						<String style={s.number} value="8 (800) 500-30-20" />
					</div>
				</div>
			</header>

			<header className={s.header_mobile}>
				<Link to="/">
					<String style={s.link__active} value="Помощь"></String>
				</Link>
				<div className={s.phones}>
					<String style={s.phone} value="Телефон горячей линии" />{' '}
					<String style={s.number} value="8 (800) 500-30-20" />
				</div>
			</header>
		</>
	);
}

export default HelpHeader;
