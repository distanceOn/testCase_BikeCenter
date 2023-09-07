import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import Icon from '../../UI/Icon';
import String from '../../UI/String';
import s from './Header.module.scss';
function Header() {
	return (
		<>
			<header className={s.header + ' ' + s.text}>
				<div className={s.header__container + ' ' + s.header__container_left}>
					<div className={s.adress}>
						<div className={s.adress__city}>
							<Icon style={s.icon} iconPath="Telegram" alt="Telegram" />
							<String style={s.grey} value="Архангельск-на-под" />
						</div>
						<String
							style={s.grey + ' ' + s.border}
							value="ул. Дорожная, 1Е и еще 3"
						/>
					</div>
					<div className={s.phones + ' ' + s.white + ' ' + s.bold}>
						<String value="8 800 500-03-20" />
						<String value="8 861 200-03-20" />
					</div>
				</div>
				<div className={s.header__container + ' ' + s.header__container_right}>
					<div className={s.btns}>
						<Button
							type="button"
							style={s.btn + ' ' + s.white + ' ' + s.text}
							value="Ремонт и обслуживание"
						/>
						<Button
							type="button"
							style={s.btn + ' ' + s.white + ' ' + s.text}
							value="Прокат оборудования"
						/>
					</div>
					<nav className={s.nav + ' ' + s.text + ' ' + s.grey}>
						<Link to="#">
							<String value="О нас" />
						</Link>
						<Link to="#">
							<String value="Доставка" />
						</Link>
						<Link to="#">
							<String value="Оплата" />
						</Link>
						<Link to="#">
							<String value="Вакансии" />
						</Link>
						<Link to="#">
							<String value="Помощь" />
						</Link>
						<Link to="#">
							<String value="Контакты" />
						</Link>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Header;
