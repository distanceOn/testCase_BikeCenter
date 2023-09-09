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
		</>
	);
}

export default MenuCategory;
