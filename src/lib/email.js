let encodedEmail = 'c2FhZGlhQGNhcmIuaXM';

export const email = (event) => {
	event.preventDefault();
	window.location.href = `mailto:${atob(encodedEmail)}?subject=Hello!`;
};
