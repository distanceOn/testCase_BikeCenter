import { useState } from 'react';
import Img from '../../UI/Img';
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

	return (
		<>
			<div className={s.search}>
				{}
				<input
					className={s.input}
					type="text"
					name="search"
					placeholder="Поиск на сайте"
					value={isValue}
					onInput={(e) => {
						setIsValue(e.target.value);
						console.log(searchResults());
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
