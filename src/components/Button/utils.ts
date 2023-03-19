import { TButtonType } from './types';

export const getTypeClasses: Record<TButtonType, string> = {
	primary: 'bg-blue-500 hover:bg-blue-700 text-white',
	common: 'bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500',
	ghost: 'bg-blue-500 hover:bg-blue-700 text-white',
};
