import { Routes, Route } from 'react-router-dom';
import Help from './pages/Help/Help';
import Menu from './pages/Menu/Menu';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Help />} />
				<Route path="/menu" element={<Menu />} />
			</Routes>
		</>
	);
}

export default App;
