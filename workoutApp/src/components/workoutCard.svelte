<script>
  import { workoutStore } from "../stores/workoutStore";
  import workoutQueueStore from "../stores/workoutQueueStore";
  /**
   * @type {any}
   */
  export let workoutId
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

  /**
   * @type {any}
   */
   export let musclesUsed;



  import { goto } from "$app/navigation";
  import { onDestroy } from "svelte";

  function goToWorkoutPage() {
    workoutStore.set({
      workoutName,
      imgSrc,
      workoutDescription,
      compound,
      isolation,
      musclesUsed
    });
    goto("/workoutInfoPage");
  }

  /**
   * @type {any[]}
   */
  let workouts = [];

  // Track whether the workout is added or not
  let isAdded = false;

  /**
   * @param {any} id
   */
  function submitWorkout(id) {
    workoutQueueStore.addWorkout({ id, musclesUsed, workoutDescription, imgSrc, name:workoutName });
  }
  /**
   * @param {any} id
   */
  function removeWorkout(id) {
    workoutQueueStore.removeWorkout(id);
  }

  export const minimal = true;

  const unsubscribe = workoutQueueStore.subscribe(isInQueue);


   /**
   * @param {any[]} queue
   */
   function isInQueue(queue) {
    const temp = queue.find(existingWorkout => existingWorkout.id === workoutId);
   isAdded = !!queue.find(existingWorkout => existingWorkout.id === workoutId);
}
onDestroy(() => unsubscribe());

</script>

<div class="workoutCard">
  <div class="workoutHeader">
    <h1 class="workoutName">{workoutName}</h1>
    {#if isAdded}
      <button class="removeWorkout" on:click={() => removeWorkout(workoutId)}>-</button>
    {:else}
      <button class="addWorkout" on:click={() => submitWorkout(workoutId)}>+</button>
    {/if}
  </div>

  <img class="workoutImg" src={imgSrc} alt={workoutName} />
  {#if isolation}
    <h2 style="display: none;">Isolation Workout</h2>
  {:else}
    <h2 style="display: none;">Compound Workout</h2>
  {/if}

  {#if minimal}
    <button class="view-workout-btn" on:click={goToWorkoutPage}
      >View Workout</button
    >
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
  border: 0.0625rem solid #ccc; 
  padding: 0.625rem; 
  border-radius: 0.3125rem; 
  text-align: center;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1); 
  width: 7.875rem; 
  height: 17.3125rem; 
}

.workoutCard:hover {
  transform: scale(1.1);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5); 
}

.workoutCard img {
  width: 6.25rem; 
  height: 6.25rem;
}

.workoutName {
  margin-top: 0.625rem; 
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.view-workout-btn {
  width: 100%;
  padding: 0.625rem;
  background-color: #636363; 
  color: #EEEEEE;  
  text-align: center;
  font-size: 0.875rem; 
  text-decoration: none;
  border-radius: 0 0 0.5rem 0.5rem;
  transform: translateY(50%);
  transition: transform 0.3s ease-in-out, 0.3s ease;
  opacity: 0;
}

.view-workout-btn:hover {
  background-color: #555555; 
}
.workoutCard:hover .view-workout-btn {
  transform: translateY(0);
  opacity: 1;
}

.addWorkout {
  background-color: #636363;  
  color: #EEEEEE;  
  border: none;
  border-radius: 50%;
  width: 1.875rem; 
  height: 1.875rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem; 
  cursor: pointer;
  text-decoration: none;
  transition:  0.3s ease-in-out;
  opacity: 0;
}

.addWorkout:hover {
  background-color: #555555; 
}

.removeWorkout {
  background-color: #636363;  
  color: #EEEEEE;  
  border: none;
  border-radius: 50%;
  width: 1.875rem; 
  height: 1.875rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem; 
  cursor: pointer;
  text-decoration: none;
  transition:  0.3s ease-in-out;
  opacity: 0;
}

.removeWorkout:hover {
  background-color: #555555;
}


.workoutCard:hover .addWorkout {
  transform: translateY(0);
  opacity: 1;
}

.workoutCard:hover .removeWorkout {
  transform: translateY(0);
  opacity: 1;
}

</style>