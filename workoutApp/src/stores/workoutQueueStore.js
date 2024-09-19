import { writable} from 'svelte/store';

// Initial empty array of workouts
/**
 * @type {any[] | undefined}
 */
const WORKOUTS = [];

const { subscribe, set, update } = writable(WORKOUTS);


const addWorkout = (/** @type {{ name: any; musclesUsed: any; workoutDescription: any; imgSrc: any;}} */ workout) =>
  update((workouts) => {
    if (!workouts.find(existingWorkout => existingWorkout.name === workout.name)) {
      return [...workouts, workout];
    }
    
    return workouts; 
  });

// Function to remove a workout by name
const removeWorkout = (/** @type {string} */ workoutName) =>
  update((workouts) => workouts.filter(workout => workout.name !== workoutName));



const reset = () => {
  set(WORKOUTS);
};


export default {
  subscribe,
  addWorkout,
  removeWorkout,
  reset,
};
