
<script>
  import { workoutStore } from '../stores/workoutStore';
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
  import { goto } from '$app/navigation';

  function goToWorkoutPage() {
    workoutStore.set({ workoutName, imgSrc, workoutDescription });
    goto('/workoutInfoPage');
  }
</script>


<div class = "workoutCard"> 
    <h1 class = "workoutName">{workoutName}</h1>
    <img class = "workoutImg" src = {imgSrc} alt = {workoutName}>
    <button class = "view-workout-btn" on:click={goToWorkoutPage}>View Workout</button>
</div>


<style>
.workoutCard {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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


</style>