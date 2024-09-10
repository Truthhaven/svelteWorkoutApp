import { writable } from 'svelte/store';

// Initial empty array of workouts
/**
 * @type {any[] | undefined}
 */
const WORKOUTS = [];

const { subscribe, set, update } = writable(WORKOUTS);


const addWorkout = (/** @type {{ name: any; }} */ workout) =>
  update((workouts) => {
    if (!workouts.find(existingWorkout => existingWorkout.name === workout.name)) {
      return [...workouts, workout];
    }
    return workouts; 
  });


const reset = () => {
  set(WORKOUTS);
};

export default {
  subscribe,
  addWorkout,
  reset,
};
