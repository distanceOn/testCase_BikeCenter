import Header from '../../components/Header/Header';
import HelpHeader from './HelpHeader/HelpHeader';
import s from './Help.module.scss';
import HelpCards from './HelpCards/HelpCards';
import HelpInfo from './HelpInfo/HelpInfo';
import HelpFooter from './HelpFooter/HelpFooter';
function Help() {
	return (
		<>
			<div className={s.help}>
				<Header />
				<HelpHeader />
				<HelpCards />
				<HelpInfo />
				<HelpFooter />
			</div>
			<div className={s.help_mobile}>
				<Header />
				<HelpHeader />
				<HelpCards />
				<HelpInfo />
			</div>
		</>
	);
}

export default Help;
