import { EmptyView, Header } from '@/components';

import styles from './App.module.scss';
import Step2_1 from './components/Survey/Step2_1/Step2_1';
import Step3 from './components/Survey/Step3/Step3';

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<main className={styles.main}>
				<EmptyView />
			</main>
		</div>
	);
}

export default App;
