import Img from '../../UI/Img';
import s from './Search.module.scss';
function Search() {
	return (
		<>
			<div className={s.search}>
				<input
					className={s.input}
					type="text"
					name="search"
					placeholder="Поиск на сайте"
				/>
				<div className={s.container}>
					<Img style={s.icon} url="Search_icon" alt="search" />
				</div>
			</div>
		</>
	);
}

export default Search;
