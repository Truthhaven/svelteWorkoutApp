
<script>
  import { workoutStore } from '../stores/workoutStore';
  import workoutQueueStore from '../stores/workoutQueueStore';
  import { efficientWorkoutStore } from '../stores/efficientWorkoutStore'; 

  /**
   * @type {any}
   */
   export let workoutName;
  /**
   * @type {any}
   */
   export let imgSrc;
  /**
   * @type {any}
   */
   export let workoutDescription;


  /**
   * @type {any}
   */
   export let compound = false;

  /**
   * @type {any}
   */
   export let isolation = false;

  import { goto } from '$app/navigation';


  function goToWorkoutPage() {
    workoutStore.set({ workoutName, imgSrc, workoutDescription, compound, isolation});
    goto('/workoutInfoPage');
  }

  /**
   * @type {any[]}
   */
  let workouts = [];

 
  /**
   * @param {any} name
   */
  function submitWorkout(name) {
    workoutQueueStore.addWorkout({ name });
    console.log('Current workouts:', workouts); 
  }

 export const minimal = true;

 import workoutInfo from '../englishWorkouts.json';

 import { onMount } from 'svelte';


    /**
   * @type {string | any[] | undefined} 
   */
   export let muscles;

 onMount(() => {matchedWorkouts(workoutName)})
 

  /**
   * @type {string[]}
   */
   let efficientWorkouts = [];

/**
  * @param {string} [workoutName]
  */
function matchedWorkouts(workoutName) {
 
 let matchWorkout = workoutInfo.find((workout) => workout.name === workoutName);


 if (Array.isArray(muscles)) {
   
   let selectedMuscles = muscles.filter(muscle => muscle.isSelected);

   
   let selectedMuscleCount = 0;

   
   if (matchWorkout) {
     
     selectedMuscles.forEach(selectedMuscle => {
       
       if (matchWorkout.muscles.some(muscle => muscle.name_en === selectedMuscle.id)) {
         selectedMuscleCount++;
       }
     });

    
     if (selectedMuscleCount >= 2) {
      efficientWorkouts.push(matchWorkout.name);
     }
   } else {
     console.log(`No workout found with the name "${workoutName}".`);
   }
 } else {
   console.error('Muscles data is not defined or is not an array');
 }
 console.log(efficientWorkouts);
 return efficientWorkouts;
}



  

 
</script>


<div class = "workoutCard"> 
  <div class = "workoutHeader">
    <h1 class = "workoutName">{workoutName}</h1>
    {#if minimal}
    <button class = "addWorkout" on:click={() => submitWorkout(workoutName)}>+</button>
    {/if}
  </div>
    
    <img class = "workoutImg" src = {imgSrc} alt = {workoutName}>
    {#if isolation}
    <h2 style="display: none;">Isolation Workout</h2>
  {:else}
    <h2 style="display: none;"> Compound Workout</h2>
  {/if}

    {#if minimal}
    <button class = "view-workout-btn" on:click={goToWorkoutPage}>View Workout</button>
    {/if}
</div>


<style>
  .workoutHeader {
    display: flex;
    align-items: center;
    justify-content: space-between; 
  }
.workoutCard {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 126px;
  height: 277px;
}

.workoutCard:hover {
  transform: scale(1.1); 
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5); 
}

.workoutCard img {
  width: 100px;
  height: 100px;
}

.workoutName {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

.view-workout-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff; 
  color: #fff;
  text-align: center;
  font-size: 14px;
  text-decoration: none;
  border-radius: 0 0 8px 8px; 
  transform: translateY(50%); 
  transition: transform 0.3s ease-in-out;
  opacity: 0;
}

.workoutCard:hover .view-workout-btn {
  transform: translateY(0); 
  opacity: 1; 
}

.addWorkout {
  background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
  text-decoration: none;
  border-radius: 0 0 8px 8px; 
  transform: translateY(-50%); 
  transition: 0.3s ease-in-out;
  opacity: 0;
}

.workoutCard:hover .addWorkout {
  transform: translateY(0); 
  opacity: 1; 
}


  

</style>