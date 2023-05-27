export interface RatingProps {
	size: 'small' | 'large';
	rating: number;
	assessment?: number;
	className?: string;
	extra?: string;
}
