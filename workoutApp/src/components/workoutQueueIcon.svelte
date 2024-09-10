
<script>
    import { onDestroy } from 'svelte';
    import workoutQueueStore from '../stores/workoutQueueStore';
  
    let workoutCount = 0;
  
    
    const unsubscribe = workoutQueueStore.subscribe(value => {
      workoutCount = value.length;
    });
  
    onDestroy(() => {
      unsubscribe(); 
    });
  </script>
  
  <div class="queueContainer">
    <img class="workoutQueueImg" src="../src/queueImage.png" alt="dumbbell">
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
    top: 110px;
    right: 20px;
    max-width: 100px; 
    height: auto;
    margin: 10px;
    
    }
  
    .notificationDot {
    position: fixed;
    top: 140px;
    right: 20px;
    width: 20px; 
    height: 20px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px; 
    transform: translate(50%, -50%);  
    }
  </style>
  