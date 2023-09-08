import Header from '../../components/Header/Header';
import HelpHeader from './HelpHeader/HelpHeader';
import s from './Help.module.scss';
import HelpCards from './HelpCards/HelpCards';
function Help() {
	return (
		<>
			<div className={s.help}>
				<Header />
				<HelpHeader />
				<HelpCards />
			</div>
		</>
	);
}

export default Help;
