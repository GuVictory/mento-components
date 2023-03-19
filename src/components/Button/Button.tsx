import './Button.css';
import { TButtonType, TButtonSize } from './types';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	view?: TButtonType;
	size?: TButtonSize;
	rounded?: boolean;
	noXPadding?: boolean;
};

export const Button = ({
	view = 'common',
	size = 'm',
	rounded = false,
	noXPadding = false,
	children,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={`button button_${view} button_${size} ${
				rounded && 'button_rounded'
			} ${noXPadding && 'button_noXPadding'}`}
			{...rest}
		>
			{children}
		</button>
	);
};
