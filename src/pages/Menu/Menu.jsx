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
			</div>
		</>
	);
}

export default Menu;
