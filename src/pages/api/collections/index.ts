import { COLLECTIONS } from '@/app/data/collections';

import type { CollectionType } from '@/app/types';
import type { NextApiHandler, NextApiResponse } from 'next';

const handler: NextApiHandler = (req, res: NextApiResponse<CollectionType[]>) => {
	switch (req.method) {
		case 'GET': {
			res.status(200).json(COLLECTIONS);
			break;
		}
		default:
			res.status(405).end();
	}
};

export default handler;
