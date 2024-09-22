
import { writable } from 'svelte/store';


/**
 * Description placeholder
 *
 * @type {import("../lib/index.ts").MusclesStore} 
 */
export const musclesStore = writable([]);


/**
 * @type {any}
 */
let musclesCopy = [];



export function copyMuscles() {
    musclesStore.subscribe((/** @type {any} */ muscles) => {
        musclesCopy = [...muscles];
    });
    musclesStore.set(musclesCopy);
}


