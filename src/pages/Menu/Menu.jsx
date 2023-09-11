import Img from '../../UI/Img';
import String from '../../UI/String';
import Header from '../../components/Header/Header';
import s from './Menu.module.scss';
import MenuCategory from './MenuCategory/MenuCategory';
import MenuList from './MenuList/MenuList';

function Menu() {
	return (
		<>
			<div>
				<Header />
				<div className={s.menu}>
					<MenuCategory />
					<MenuList />
				</div>
				<div className={s.menu_mobile}>
					<div className={s.city}>
						<String style={s.city__your} value="Ваш город " />
						<div className={s.city__content}>
							<Img style={s.city__icon} url="Telegram" alt="telegram" />
							<String style={s.city__town} value="Краснодар" />
						</div>
					</div>
					<MenuCategory />
				</div>
			</div>
		</>
	);
}

export default Menu;
