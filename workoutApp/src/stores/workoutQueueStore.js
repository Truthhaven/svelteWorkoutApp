import { writable, derived} from 'svelte/store';

// Initial empty array of workouts
/**
 * @type {any[] | undefined}
 */

const WORKOUTS = [];

const { subscribe, update } = writable(WORKOUTS);


const addWorkout = (/** @type {{ id: number; musclesUsed: any; workoutDescription: any; imgSrc: any; name: string}} */ workout) =>
  update((workouts) => {
    if (!workouts.find(existingWorkout => existingWorkout.id === workout.id)) {
      return [...workouts, workout];
    }
    
    return workouts; 
  });

const removeWorkout = (/** @type {number} */ workoutid) =>
  update((workouts) => [...(workouts.filter(workout => workout.id !== workoutid))]);

  
//export const workoutExists = (/** @type {any} */ workoutName) => derived(
 //WORKOUTS, 

  //($workouts) => $workouts.some(workout => workout.name === workoutName) 
 //);


export default {
  subscribe,
  addWorkout,
  removeWorkout,
};