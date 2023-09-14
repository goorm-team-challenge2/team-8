import cn from 'classnames';

import { Card } from '@/components';

import { Typography } from '@goorm-dev/gds-challenge';

import styles from './EmptyView.module.scss';

const EmptyView = () => {
	return (
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
	);
};

export default EmptyView;
