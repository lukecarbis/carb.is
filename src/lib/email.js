let encodedEmail = 'bHVrZUBjYXJiLmlz'; // Replace this with your encoded email

export const email = () => (window.location.href = `mailto:${atob(encodedEmail)}?subject=Hi Luke!`);
