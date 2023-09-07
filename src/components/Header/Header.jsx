import s from './Header.module.scss';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderNav from './HeaderNav/HeaderNav';
function Header() {
	return (
		<>
			<header className={s.header}>
				<HeaderNav />
				<HeaderMain />
			</header>
		</>
	);
}

export default Header;
