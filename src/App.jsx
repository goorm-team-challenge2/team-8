import { Card } from '@/components';

import './App.css';

function App() {
	return (
		<div className="App">
			<Card center>
				<img
					width={112}
					src="https://statics.goorm.io/images/gds/empty_task.svg"
					alt="hi"
				/>
				응답한 참여자가 없습니다.
			</Card>
		</div>
	);
}

export default App;
