import { ReviewType } from '@/app/types/ReviewType';

export interface ReviewProps extends ReviewType {
	type: 'card' | 'row';
	className?: string;
	onLike?: () => void;
	onDislike?: () => void;
}
