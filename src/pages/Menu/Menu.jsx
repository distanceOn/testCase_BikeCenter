import Header from '../../components/Header/Header';
import s from './Menu.module.scss';
import MenuCategory from './MenuCategory/MenuCategory';

function Menu() {
	return (
		<>
			<div>
				<Header />
				<div className={s.menu}>
					<MenuCategory />
				</div>
			</div>
		</>
	);
}

export default Menu;
