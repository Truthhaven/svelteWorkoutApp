
<script>
     import { onDestroy } from 'svelte';
    import efficientWorkoutStore  from '../stores/efficientWorkoutStore'; 

    let workoutCount = 0;
  
    
    const unsubscribe = efficientWorkoutStore.subscribe(value => {
      workoutCount = value.length;
      console.log(value);
    });

    onDestroy(() => {
      unsubscribe(); 
    });

</script>


<div class="queueContainer">
    <button> Suggested Workouts</button>
    {#if workoutCount > 0}
      <div class="notificationDot">
        {workoutCount}
      </div>
    {/if}
  </div>