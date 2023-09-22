import cn from 'classnames';

import { Typography } from '@goorm-dev/gds-challenge';

import styles from './Card.module.scss';

/**
 * @typedef CardProps
 * @property {'content'} [type]
 * @property {'top' | 'bottom' | 'both'} [flat]
 * @property {'none' | 'md'} [padding]
 * @property {boolean} [pointer=false]
 * @property {boolean} [center=false]
 * @property {string} [title]
 * @property {boolean} [between=false]
 */

/**
 * @param {import('react').ComponentProps<'div'> & CardProps} props
 * @returns
 */
const Card = ({
	type,
	flat = type === 'content' && 'both',
	padding = 'md',
	pointer = type === 'toggle',
	center = false,
	title,
	between = false,
	className,
	children,
	...props
}) => {
	const commonClassName = cn(styles.card, between && styles.between, {
		[styles[`flat_${flat}`]]: !!flat,
		[styles[`padding_${padding}`]]: !!padding && padding !== 'none',
		[styles.pointer]: !!pointer,
		[styles.center]: !!center,
	});

	switch (type) {
		case 'content':
			return (
				<div
					className={cn(
						styles.card_content,
						styles['backgroundColor_gray-50'],
						commonClassName,
						className,
					)}
					{...props}
				>
					<Typography color="hint" className={styles.title}>
						{title}
					</Typography>
					<div className={styles.content}>{children}</div>
				</div>
			);
		default:
			return (
				<div
					className={cn(
						styles.backgroundColor_white,
						commonClassName,
						className,
					)}
					{...props}
				>
					{children}
				</div>
			);
	}
};

export default Card;
