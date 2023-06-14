import { COLLECTIONS } from '@/app/data/collections';

import type { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
	switch (req.method) {
		case 'GET': {
			const { slug } = req.query;

			const collection = COLLECTIONS.find((item) => item.slug === slug);
			if (collection) {
				res.status(200).json(collection);
			} else {
				res.status(404).send('Collection is not found');
			}
			break;
		}
		default:
			res.status(405).end();
	}
};

export default handler;
