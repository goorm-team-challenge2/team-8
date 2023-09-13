import cn from 'classnames';

import styles from './Card.module.scss';

/**
 * @typedef CardProps
 * @property {'white' | 'gray-50'} [backgroundColor]
 * @property {'top' | 'bottom' | 'both'} [flat]
 * @property {boolean} [center=false]
 */

/**
 *
 * @param {import('react').ComponentProps<'div'> & CardProps} props
 * @returns
 */
const Card = ({
	backgroundColor = 'white',
	flat,
	center = false,
	className,
	...props
}) => (
	<div
		className={cn(
			styles.card,
			{
				[styles[`backgroundColor_${backgroundColor}`]]:
					!!backgroundColor,
				[styles[`flat_${flat}`]]: !!flat,
				[styles.center]: !!center,
			},
			className,
		)}
		{...props}
	></div>
);

export default Card;
