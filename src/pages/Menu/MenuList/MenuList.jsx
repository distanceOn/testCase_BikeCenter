import String from '../../../UI/String';
import s from './MenuList.module.scss';

function MenuList() {
	const listItems = [
		{
			title: 'Амортизаторы и вилки',
			items: [
				'Амортизаторы',
				'Вилки',
				'Запчасти для вилок',
				'Запчасти для амортизаторов',
			],
		},
		{
			title: 'Колёса и комплектующие',
			items: [
				'Покрышки',
				'Камеры',
				'Обода',
				'Колеса в сборе',
				'Втулки',
				'Запчасти для втулок',
				'Герметики',
				'Наппеля',
				'Спицы',
				'Флипперы',
			],
		},
		{
			title: 'Трансмиссия',
			items: ['Манетки', 'Переключатели задние', 'Переключатели передние'],
		},
		{
			title: 'Привод',
			items: [
				'Кассеты и трещотки',
				'Звёзды и рокринги',
				'Системы (шатуны)',
				'Педали',
				'Каретки',
				'Цепи',
				'Натяжители и успокоители',
			],
		},
		{
			title: 'Рамы и комплектующие',
			items: ['Рамы', 'Петухи', 'Защита пера', 'Пеги'],
		},
		{
			title: 'Рулевое управление',
			items: [
				'Рули',
				'Рога',
				'Грипсы и обмотки руля',
				'Выносы',
				'Рулевые колонки',
				'Якоря и проставочные кольца',
			],
		},
		{
			title: 'Седла и подседельные штыри',
			items: ['Сёдла', 'Штири', 'Подседельные зажимы'],
		},
		{
			title: 'Тормозные системы',
			items: [
				'Тормоза дисковые гидравлические',
				'Тормоза дисковые механические',
				'Роторы',
				'Адаптеры',
				'Колодки',
				'Тормоза V-Brake',
				'Тормоза клещевые',
				'Тормоза кантиливерные',
				'Тормозные ручки',
				'Запчасти для тормозных систем',
			],
		},
		{
			title: 'Инструменты',
			items: [
				'Мультитулы',
				'Ключи специальные',
				'Съемники',
				'Выжимники цепи',
				'Ремнаборы для камер и покрышек',
				'Наборы инструментов',
				'Монтажки',
			],
		},
	];

	const showList = (number) => {
		const { title, items } = listItems[number];
		return (
			<div className={s.item}>
				<div className={s.container}>
					<String style={s.title} value={title} />
					<div className={s.block}></div>
				</div>
				<ul className={s.ul}>
					{items.map((item) => {
						return (
							<li key={item} className={s.text}>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		);
	};

	const showImg = () => {
		return <div className={s.img}></div>;
	};

	return (
		<>
			<div className={s.list}>
				<div className={s.list__block}>
					{showList(0)}
					{showList(1)}
					{showList(2)}
				</div>
				<div className={s.list__block}>
					{showList(3)}
					{showList(4)}
					{showList(5)}
				</div>
				<div className={s.list__block}>
					{showList(6)}
					{showList(7)}
					{showList(8)}
				</div>
				<div className={s.list__imgs}>
					{[1, 2, 3, 4, 5].map(() => {
						return showImg();
					})}
				</div>
			</div>
		</>
	);
}

export default MenuList;
