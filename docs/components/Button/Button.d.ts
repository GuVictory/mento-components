import { TButtonType, TButtonSize } from './types';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    view?: TButtonType;
    size?: TButtonSize;
    rounded?: boolean;
    noXPadding?: boolean;
};
export declare const Button: ({ view, size, rounded, noXPadding, children, ...rest }: ButtonProps) => JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map