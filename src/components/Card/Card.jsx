import cn from 'classnames';

import styles from './Card.module.scss';

/**
 * @typedef CardProps
 * @property {'white' | 'gray-50'} [backgroundColor]
 * @property {'top' | 'bottom' | 'both'} [flat]
 * @property {'none' | 'md'} [padding]
 * @property {boolean} [pointer=false]
 * @property {boolean} [center=false]
 */

/**
 * @param {import('react').ComponentProps<'div'> & CardProps} props
 * @returns
 */
const Card = ({
	backgroundColor = 'white',
	flat,
	padding = 'md',
	pointer = false,
	center = false,
	className,
	...props
}) => {
	return (
		<div
			className={cn(
				styles.card,
				{
					[styles[`backgroundColor_${backgroundColor}`]]:
						!!backgroundColor,
					[styles[`flat_${flat}`]]: !!flat,
					[styles[`padding_${padding}`]]:
						!!padding && padding !== 'none',
					[styles.pointer]: !!pointer,
					[styles.center]: !!center,
				},
				className,
			)}
			{...props}
		></div>
	);
};

export default Card;
