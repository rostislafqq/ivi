export const generateId = (): string => {
	const simbols = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
	let id = '';

	while (id.length < 6) {
		id += simbols[Math.floor(Math.random() * simbols.length)];
	}

	return id;
};
