// stores.js
import { writable } from 'svelte/store';

// Initial empty array of workouts
/**
 * @type {any[] | undefined}
 */
const WORKOUTS = [];

const { subscribe, set, update } = writable(WORKOUTS);


const addWorkout = async (/** @type {{ name: any; }} */ workout) =>
  update((workouts) => {
    /*
    let foundWorkouts = workouts.find(existingWorkout => {
      console.log("existing name:", existingWorkout.name, "workout name", workout.name);
      return existingWorkout.name === workout.name;
    })
    console.log(foundWorkouts, !foundWorkouts)
    if (!foundWorkouts) {
      return [...workouts, workout];
    } */
    
    return [...workouts, workout]; 
  });


const reset = () => {
  set(WORKOUTS);
};


export default {
  subscribe,
  addWorkout,
  reset,
};