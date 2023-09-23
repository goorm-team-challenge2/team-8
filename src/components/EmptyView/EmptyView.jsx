import cn from 'classnames';
import { useState, useEffect } from 'react';
import { Card } from '@/components';

import { Typography } from '@goorm-dev/gds-challenge';

import styles from './EmptyView.module.scss';

const EmptyView = () => {
	const [localStorageData, setLocalStorageData] = useState({});

	useEffect(() => {
		const localStorageKeys = Object.keys(localStorage);
		const data = {};

		for (const key of localStorageKeys) {
			const value = localStorage.getItem(key);
			data[key] = value;
		}

		setLocalStorageData(data);
	}, []);

	return (
		<>
			<Card center padding="none" className={cn(styles.emptyView)}>
				<img
					width={112}
					src="https://statics.goorm.io/images/gds/empty_task.svg"
					alt="empty view"
				/>
				<Typography color="hint" token="paragraph-sm">
					응답한 참여자가 없습니다.
				</Typography>
			</Card>
		</>
	);
};

export default EmptyView;
