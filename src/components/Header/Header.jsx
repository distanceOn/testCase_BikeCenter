import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import HeaderMain from './HeaderMain/HeaderMain';
import HeaderNav from './HeaderNav/HeaderNav';
import Button from '../../UI/Button';
import Img from '../../UI/Img';
function Header() {
	return (
		<>
			<header className={s.header}>
				<HeaderNav />
				<HeaderMain />
			</header>
			<header className={s.header_mobile}>
				<div className={s.header_mobile_left}>
					<Link to="/menu">
						<Button
							style={s.kataBtn}
							type="button"
							content={
								<div className={s.lines}>
									<Img style={s.lines__line} url="Line" alt="line" />
									<Img style={s.lines__line} url="Line" alt="line" />
									<Img style={s.lines__line} url="Line" alt="line" />
								</div>
							}
							contentStyle={s.lines__btn}
						/>
					</Link>
					<Img style={s.logo} url="Logo_mobile" alt="logo" />
				</div>
				<div className={s.header_mobile_right}>
					<Img style={s.search} url="Search__light" alt="search" />
					<Img style={s.cart} url="Cart_light" alt="cart" />
				</div>
			</header>
		</>
	);
}

export default Header;
