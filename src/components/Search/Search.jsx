import { useState } from 'react';
import Img from '../../UI/Img';
import String from '../../UI/String';
import Button from '../../UI/Button';

import s from './Search.module.scss';
function Search() {
	const mokStringData = [
		'Электровелосипеды',
		'Складные электровелосипеды',
		'Горные электровелосипеды',
		'Электровелосипеды Scott',
		'Электровелосипеды Merida',
	];

	const mokCategoryData = [
		'Электросамокаты',
		'Запчасти для электросамокатов',
		'Электромашинки',
	];

	const mokItemData = [
		{
			name: 'Велосипед TECH TEAM Fox 20 (2021) черно-синий',
			cost: '235 265 Р',
		},
		{
			name: 'Велосипед TECH TEAM Fox 20 (2021) черно-синий',
			cost: '235 265 Р',
		},
		{
			name: 'Велосипед TECH TEAM Fox 20 (2021) черно-синий',
			cost: '235 265 Р',
		},
		{
			name: 'Велосипед TECH TEAM Fox 20 (2021) черно-синий',
			cost: '235 265 Р',
		},
		{
			name: 'Велосипед TECH TEAM Fox 20 (2021) черно-синий',
			cost: '235 265 Р',
		},
	];

	const [isValue, setIsValue] = useState('');

	const searchResults = () => {
		const stringArray = [];
		const categoryArray = [];
		const itemArray = [];
		for (const item of mokStringData) {
			if (item.toLowerCase().includes(isValue.toLowerCase())) {
				stringArray.push(item);
			}
		}
		for (const item of mokCategoryData) {
			if (item.toLowerCase().includes(isValue.toLowerCase())) {
				categoryArray.push(item);
			}
		}
		for (const item of mokItemData) {
			if (item.name.toLowerCase().includes(isValue.toLowerCase())) {
				itemArray.push(item);
			}
		}

		return { stringArray, categoryArray, itemArray };
	};

	const showSearch = () => {
		const results = searchResults();
		const { stringArray, categoryArray, itemArray } = results;
		if (isValue !== '') {
			if (
				stringArray.length === 0 &&
				categoryArray.length === 0 &&
				itemArray.length === 0
			) {
				return <div className={s.search__results_no}>Нет результатов</div>;
			} else {
				return (
					<div className={s.search__results}>
						<div className={s.search__results_scroll}>
							{stringArray.length !== 0 ? (
								<div className={s.bikes}>
									<String style={s.title} value="Велосипеды" />
									{stringArray.map((item, index) => {
										return (
											<div key={index} className={s.result}>
												<Img
													style={s.icon_small}
													url="Search__light"
													alt="search"
												/>
												<String style={s.text} value={item} />
												<Img
													style={s.icon_smallest}
													url="Arrow_right"
													alt="arrow"
												/>
											</div>
										);
									})}
								</div>
							) : (
								''
							)}
							{categoryArray.length !== 0 ? (
								<div className={s.all}>
									<String style={s.title} value="Все разделы" />
									{categoryArray.map((item, index) => {
										return (
											<div key={index} className={s.result}>
												<String style={s.text} value={item} />
												<Img
													style={s.icon_smallest}
													url="Arrow_right"
													alt="arrow"
												/>
											</div>
										);
									})}
								</div>
							) : (
								''
							)}
							{itemArray.length !== 0 ? (
								<div className={s.items}>
									{itemArray.map((item, index) => {
										return (
											<div key={index} className={s.items__item}>
												<Img
													style={s.icon__block}
													url="GreyBlock"
													alt="photo"
												/>
												<String
													style={s.text + ' ' + s.text__item}
													value={item.name}
												/>
												<String
													style={s.text + ' ' + s.text__cost}
													value={item.cost}
												/>
											</div>
										);
									})}
								</div>
							) : (
								''
							)}
						</div>

						<div className={s.btn__container}>
							<Button style={s.btn} value="Все результаты" type="button" />
						</div>
					</div>
				);
			}
		}
	};

	return (
		<>
			<div className={s.search}>
				{showSearch()}
				<input
					className={s.input}
					type="text"
					name="search"
					placeholder="Поиск на сайте"
					value={isValue}
					onInput={(e) => {
						setIsValue(e.target.value);
					}}
				/>
				<div className={s.container}>
					<Img style={s.icon} url="Search_icon" alt="search" />
				</div>
			</div>
		</>
	);
}

export default Search;
