import Header from '../../components/Header/Header';
import HelpHeader from './HelpHeader/HelpHeader';
import s from './Help.module.scss';
function Help() {
	return (
		<>
			<div className={s.help}>
				<Header />
				<HelpHeader />
			</div>
		</>
	);
}

export default Help;
