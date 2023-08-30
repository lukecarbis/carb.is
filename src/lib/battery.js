import { writable } from 'svelte/store';

export const batteryPercentage = writable(42);

if (!import.meta.env.SSR && 'getBattery' in navigator) {
	navigator.getBattery().then((battery) => {
		batteryPercentage.set(battery.level * 100);

		battery.addEventListener('levelchange', () => {
			batteryPercentage.set(battery.level * 100);
		});
	});
}
