import { writable } from 'svelte/store';

export const workoutStore = writable({
  workoutName: '',
  imgSrc: '',
  workoutDescription: ''
});