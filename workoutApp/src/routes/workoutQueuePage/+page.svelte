<script>
    import WorkoutQueueIcon from '../../components/workoutQueueIcon.svelte';
    import WorkoutCard from '../../components/workoutCard.svelte';
    import workoutQueueStore from '../../stores/workoutQueueStore';


    
</script>


<header class = "header"> 
    <h1 style="font-weight: bold; text-align: center;"> Exercise App</h1>
</header>
<h2> Workouts in Queue</h2>
<WorkoutQueueIcon></WorkoutQueueIcon>
{#each  $workoutQueueStore  as workout }
<WorkoutCard
minimal = {false}
workoutName={workout.name}
imgSrc={'https://via.placeholder.com/100?text=No+Image'}
workoutDescription = {workout.description}
compound = {workout.compound}
isolation = {workout.isolation}> 
</WorkoutCard>
{/each}

      

<style>
    header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    margin:10px;
  }

  h2 {
    text-align: center;
  }

</style>