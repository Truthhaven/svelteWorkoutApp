import type { Writable } from "svelte/store";

interface Workout {
    name: string;
    musclesUsed: string[];
    workoutDescription: string;
    imgSrc: string;
  }
export type WORKOUTS = Writable <Workout[]>