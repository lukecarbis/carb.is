import { writable } from 'svelte/store';

export const currentTime = writable(new Date());

setInterval(() => {
	currentTime.set(new Date());
}, 10000);
