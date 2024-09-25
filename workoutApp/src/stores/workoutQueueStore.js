import { writable} from 'svelte/store';


/**
 * Workouts array
 * @type {any[] | undefined}
 */

const WORKOUTS = [];

const { subscribe, update } = writable(WORKOUTS);

// Adds a new workout to the workouts array if it hasnt been included yet
const addWorkout = (/** @type {{ id: number; musclesUsed: any; workoutDescription: any; imgSrc: any; name: string}} */ workout) =>
  update((workouts) => {
    if (!workouts.find(existingWorkout => existingWorkout.id === workout.id)) {
      return [...workouts, workout];
    }
    
    return workouts; 
  });

// Removes a workout from the workout array
const removeWorkout = (/** @type {number} */ workoutid) =>
  update((workouts) => [...(workouts.filter(workout => workout.id !== workoutid))]);



export default {
  subscribe,
  addWorkout,
  removeWorkout,
};