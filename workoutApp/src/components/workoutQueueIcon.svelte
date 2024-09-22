
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
    top: 6.875rem; 
    right: 1.25rem;
    max-width: 6.25rem;
    height: auto;
    margin: 0.625rem; 
  }
  
  .notificationDot {
    position: fixed;
    top: 8.75rem; 
    right: 1.25rem; 
    width: 1.25rem; 
    height: 1.25rem; 
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem; 
    transform: translate(50%, -50%);
  }
</style>