import { EmptyView } from '@/components';
import Header from '@/components/Header/Header';

import styles from './App.module.scss';

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
