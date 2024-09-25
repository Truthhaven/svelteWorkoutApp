import { writable } from 'svelte/store';

// Holds workout info
export const workoutStore = writable({
  workoutName: '',
  imgSrc: '',
  workoutDescription: '',
  isolation: '',
  compound: '',
  musclesUsed: ''
});

