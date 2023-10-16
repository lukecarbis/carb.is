import { NAMESPACE_ID, API_KEY, ACCOUNT_ID } from '$env/static/private';

const API_BASE_URL = 'https://api.cloudflare.com/client/v4';
const KV_KEY = 'PAGE_VIEWS';

export const load = async ({ fetch, cookies, url }) => {
	let pageViews = parseInt(cookies.get('pageViews'));

	if (!pageViews) {
		pageViews = await getPageViews(fetch);

		if (url.pathname === '/') {
			pageViews = await updatePageViews(pageViews, fetch);
		}

		cookies.set('pageViews', pageViews, { path: '/' });
	}

	return { pageViews };
};

const getPageViews = async (fetch) => {
	const defaultPageViews = 1;
	try {
		const response = await fetch(
			`${API_BASE_URL}/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}/values/${KV_KEY}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${API_KEY}`,
					'Content-Type': 'application/json'
				}
			}
		);

		if (response.ok) {
			const data = await response.text();
			return parseInt(data) || defaultPageViews;
		} else {
			console.error('Failed to fetch KV value:', response.statusText);
		}
	} catch (error) {
		console.error(error);
	}

	return defaultPageViews;
};

const updatePageViews = async (pageViews, fetch) => {
	try {
		const response = await fetch(
			`${API_BASE_URL}/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}/values/${KV_KEY}`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${API_KEY}`,
					'Content-Type': 'application/json'
				},
				body: pageViews + 1
			}
		);

		if (response.ok) {
			return pageViews + 1;
		} else {
			console.error('Failed to update KV value:', response.statusText);
		}
	} catch (error) {
		console.error(error);
	}

	return pageViews;
};
