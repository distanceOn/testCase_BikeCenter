import { useState } from 'react';
import Button from '../../../UI/Button';
import Img from '../../../UI/Img';
import String from '../../../UI/String';
import s from './MenuCategory.module.scss';

function MenuCategory() {
	const mokCategory = [
		{ name: 'Велосипеды', url: 'Bike_icon', alt: 'icon' },
		{ name: 'Электросамокаты', url: 'ElectricScooter', alt: 'icon' },
		{ name: 'Самокаты', url: 'Scooter', alt: 'icon' },
		{ name: 'Скейтборды', url: 'Skateboard', alt: 'icon' },
		{ name: 'Роликовые коньки', url: 'RollerSkates', alt: 'icon' },
		{ name: 'Велоаксессуары', url: 'Acsessories', alt: 'icon' },
		{ name: 'SUP и каяки', url: 'SUP', alt: 'icon' },
		{ name: 'Туризм', url: 'Tourism', alt: 'icon' },
		{ name: 'Тренажеры', url: 'Simulators', alt: 'icon' },
		{ name: 'Запчасти для самокатов', url: 'ForScooters', alt: 'icon' },
		{
			name: 'Запчасти для электросамоктов',
			url: 'ForElectroScooters',
			alt: 'icon',
		},
		{ name: 'Горные лыжи', url: 'Skiing', alt: 'icon' },
		{ name: 'Сноуборды', url: 'Snowboards', alt: 'icon' },
		{ name: 'Рюкзаки и сумки', url: 'Bags', alt: 'icon' },
		{ name: 'Другое', url: 'Other', alt: 'icon' },
	];

	const mokBold = ['Ремонт и обсуживание', 'Прокат оборудования'];

	const mokMobileCategory = [
		{ name: 'Велосипеды', url: 'Bike_icon', alt: 'icon' },
		{ name: 'Электросамокаты', url: 'ElectricScooter', alt: 'icon' },
		{ name: 'Самокаты', url: 'Scooter', alt: 'icon' },
		{ name: 'Скейтборды', url: 'Skateboard_1', alt: 'icon' },
		{ name: 'Роликовые коньки', url: 'Roller_1', alt: 'icon' },
		{ name: 'Велоаксессуары', url: 'Acsessories_1', alt: 'icon' },
		{ name: 'Велозапчасти', url: 'ByParts', alt: 'icon' },
		{ name: 'Запчасти для самокатов', url: 'ScParts', alt: 'icon' },
		{ name: 'Лыжи', url: 'Ski', alt: 'icon' },
		{ name: 'Сноуборды', url: 'Snowboards_1', alt: 'icon' },
		{ name: 'Сапборды', url: 'Sapboards', alt: 'icon' },
		{ name: 'Туризм', url: 'Tourism_1', alt: 'icon' },
		{ name: 'Тренажеры', url: 'Simulators_1', alt: 'icon' },
		{
			name: 'Запчасти для электросамоктов',
			url: 'ElScParts',
			alt: 'icon',
		},
		{ name: 'Рюкзаки и велосумки', url: 'Bags_1', alt: 'icon' },
		{ name: 'Другое', url: 'Other_1', alt: 'icon' },
		{ name: 'Распродажа', url: 'Sale', alt: 'icon' },
	];

	const [isKata, setIsKata] = useState(true);
	return (
		<>
			<div className={s.category}>
				{mokCategory.map((item, index) => {
					return (
						<div key={index} className={s.item}>
							<div className={s.img__container}>
								<Img url={item.url} style={s.img} alt={item.alt} />
							</div>
							<String style={s.title} value={item.name} />
							<Img style={s.arrow} url="Arrow_right" alt="arrow" />
						</div>
					);
				})}

				{mokBold.map((item, index) => {
					return (
						<div key={index} className={s.item}>
							<div className={s.img__container}></div>
							<String style={s.title + ' ' + s.title_bold} value={item} />
							<Img style={s.arrow} url="Arrow_right" alt="arrow" />
						</div>
					);
				})}
			</div>
			<div className={s.category_mobile}>
				<div className={s.checkout}>
					<Button
						onClick={() => {
							setIsKata(true);
						}}
						style={isKata === true ? s.btn_active : s.btn}
						value="Каталог"
						type="button"
					/>
					<Button
						onClick={() => {
							setIsKata(false);
						}}
						style={isKata === true ? s.btn : s.btn_active}
						value="Бренды"
						type="button"
					/>
				</div>
				<div className={s.list}>
					{mokMobileCategory.map((item, index) => {
						return (
							<div key={index} className={s.list__item}>
								<div className={s.list__img__container}>
									<Img url={item.url} style={s.list__img} alt={item.alt} />
								</div>
								<String style={s.list__title} value={item.name} />
								<Img style={s.list__arrow} url="Arrow_right" alt="arrow" />
							</div>
						);
					})}
					<div className={s.list__item}>
						<div className={s.list__img__container}>
							<div className={s.list__img__absolute}>
								<String style={s.list__img__text} value="NEW" />
								<Img url="New" style={s.list__img} alt="icon" />
							</div>
						</div>
						<String style={s.list__title} value="Новинки" />
						<Img style={s.list__arrow} url="Arrow_right" alt="arrow" />
					</div>
					<div className={s.list__item}>
						<div className={s.list__img__container}></div>
						<String style={s.list__title_bold} value="Прокат оборудования" />
						<Img style={s.list__arrow} url="Arrow_right" alt="arrow" />
					</div>
					<div className={s.list__item}>
						<div className={s.list__img__container}></div>
						<String style={s.list__title_bold} value="Ремонт и Облуживание" />
						<Img style={s.list__arrow} url="Arrow_right" alt="arrow" />
					</div>
				</div>
			</div>
		</>
	);
}

export default MenuCategory;
