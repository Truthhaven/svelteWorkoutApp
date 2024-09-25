
import { writable } from 'svelte/store';


/**
 * Array of workouts
 * @type {any[] | undefined}
 */
const WORKOUTS = [];


const { subscribe, set, update } = writable(WORKOUTS);


// Adds a new workout to the workout array
const addWorkout = async (/** @type {{ name: any; }} */ workout) =>
  update((workouts) => { 
    return [...workouts, workout]; 
  });


// Resets workouts
const reset = () => {
  set(WORKOUTS);
};


export default {
  subscribe,
  addWorkout,
  reset,
};