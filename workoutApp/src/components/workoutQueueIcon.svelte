
<script>
    import { onDestroy } from 'svelte';
    import workoutQueueStore from '../stores/workoutQueueStore';
  
    let workoutCount = 0;
  
    
    const unsubscribe = workoutQueueStore.subscribe(value => {
      workoutCount = value.length;
      console.log(value);
    });
  
    onDestroy(() => {
      unsubscribe(); 
    });

    import { goto } from '$app/navigation';

    function goToWorkoutQueue() {
    goto('/workoutQueuePage');
  }
  </script>
  
  
  <div class="queueContainer">
    <img class="workoutQueueImg" src="../src/queueImage.png" alt="dumbbell" on:click={goToWorkoutQueue}>
    {#if workoutCount > 0}
      <div class="notificationDot">
        {workoutCount}
      </div>
    {/if}
  </div>
  <style> 


  .queueContainer {
  position: relative;
  display: inline-block;
}

.workoutQueueImg {
  position: fixed;
  top: 12.5vh;
  right: 0.87vw;
  height: 10vh;
  margin: 0.43vh;
  width: 5vw;
  min-width: 3.26vw;
  min-height: 9.11vh;
}

.notificationDot {
  position: fixed;
  top: 13.5vh;
  right: .87vw;
  width: 1vw;
  height: 1vw;
  min-width: 0.63vw;
  min-height: 1vh;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  transform: translate(50%, -50%);
}

</style>