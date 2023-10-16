export const load = ({ url, data }) => {
	const { pageViews } = data;
	const { pathname } = url;

	return { pageViews, pathname };
};
