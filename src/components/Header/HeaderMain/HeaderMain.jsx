import { Link } from 'react-router-dom';
import Button from '../../../UI/Button';
import Img from '../../../UI/Img';
import Search from '../../Search/Search';
import String from '../../../UI/String';
import s from './HeaderMain.module.scss';
function HeaderMain() {
	const navList = [
		{ value: 'Заказы', url: 'Box', alt: 'orders' },
		{ value: 'Сравнение', url: 'Diagram', alt: 'compare' },
		{ value: 'Избранное', url: 'Heart', alt: 'favourites' },
		{ value: 'Корзина', url: 'Cart', alt: 'cart', notification: 1 },
	];

	const linksListLeft = [
		{ value: 'Горные Велосипеды', url: '#' },
		{ value: 'Детские Велосипеды', url: '#' },
		{ value: 'Детские Самокаты', url: '#' },
		{ value: 'Электросамокаты', url: '#' },
	];

	const linksListRight = [
		{ value: 'Распродажа', url: '#', color: '#FF6666' },
		{ value: 'Бренды', url: '#' },
	];
	return (
		<>
			<div className={s.container}>
				<div className={s.content}>
					<div className={s.content__1}>
						<Link to="/">
							<Img style={s.logo} url="Logo" alt="logo" />
						</Link>
						<div className={s.content__search}>
							<Link to="/menu">
								<Button
									style={s.kataBtn}
									value="Каталог"
									type="button"
									content={
										<div className={s.lines}>
											<Img style={s.lines__line} url="Line" alt="line" />
											<Img style={s.lines__line} url="Line" alt="line" />
										</div>
									}
									contentStyle={s.lines__btn}
								/>
							</Link>
							<Search />
						</div>
					</div>
					<div className={s.content__2}>
						<Button
							style={s.entryBtn}
							value="Вход"
							type="button"
							content={
								<div className={s.user}>
									<Img style={s.user__img} url="User" alt="user" />
								</div>
							}
							contentStyle={s.user__btn}
						/>
						<div className={s.nav}>
							{navList.map(({ value, url, notification }, index) => {
								return (
									<Button
										key={index}
										style={s.navBtn}
										value={value}
										type="button"
										content={
											notification ? (
												<>
													<Img style={s.func__img} url={url} alt="orders" />
													<div className={s.func__notification}>
														{notification}
													</div>
												</>
											) : (
												<Img style={s.func__img} url={url} alt="orders" />
											)
										}
										contentStyle={s.func__btn}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className={s.links}>
					<div className={s.links__1}>
						{linksListLeft.map(({ value, url }, index) => {
							return (
								<Link to={url} key={index}>
									<String style={s.links__string} value={value} />
								</Link>
							);
						})}
					</div>
					<div className={s.links__2}>
						{linksListRight.map(({ value, url, color }, index) => {
							return (
								<Link style={{ color: color }} to={url} key={index}>
									<String style={s.links__string} value={value} />
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default HeaderMain;
