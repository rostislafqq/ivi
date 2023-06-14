import { useState, useEffect } from 'react';

export function useSort<T>(items: T[], compareFn: (a: T, b: T) => number) {
	const [sortedItems, setSortedItems] = useState<T[]>([]);

	useEffect(() => {
		const newItems = [...items];
		newItems.sort(compareFn);
		setSortedItems(newItems);
	}, [items, compareFn]);

	return sortedItems;
}
