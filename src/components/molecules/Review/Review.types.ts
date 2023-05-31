export interface ReviewProps {
	className?: string;
	userName: string;
	likes: number;
	comment: string;
	photo?: string;
	type: 'card' | 'row';
	date?: string;
	commentid?: string;
	onLike: () => void;
	onDisike: () => void;
}
