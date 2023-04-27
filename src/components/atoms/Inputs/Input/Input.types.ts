export interface InputProps {
	className?: string;
	type: string;
	onChange: React.Dispatch<React.SetStateAction<any>>;
	value: string | number;
}
