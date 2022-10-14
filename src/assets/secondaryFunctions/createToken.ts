export const createToken = () => {
	const rand = () => {
		return Math.random().toString(36).substr(2);
	};
	return rand() + rand();
};