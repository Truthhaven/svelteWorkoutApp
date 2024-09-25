
import { writable } from 'svelte/store';


/**
 * Holds array of muscle data
 *
 * @type {import("../lib/index.ts").MusclesStore} 
 */
export const musclesStore = writable([]);


/**
 * Shallow copy of muscles array
 * @type {any}
 */
let musclesCopy = [];


// Updates muscle store using shallow copy 
export function copyMuscles() {
    musclesStore.subscribe((/** @type {any} */ muscles) => {
        musclesCopy = [...muscles];
    });
    musclesStore.set(musclesCopy);
}


