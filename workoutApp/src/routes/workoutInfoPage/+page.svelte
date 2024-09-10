<script>
  

    import { workoutStore } from '../../stores/workoutStore';
    import WorkoutQueueIcon from '../../components/workoutQueueIcon.svelte';
  let workout = { workoutName: '', imgSrc: '', workoutDescription: '' };

  workoutStore.subscribe((/** @type {{ workoutName: string; imgSrc: string; workoutDescription: string; }} */ value) => {
    workout = value;
    console.log('Workout data:', workout); 
  });
    
</script>


<header class = "header"> 
    <h1 style="font-weight: bold; text-align: center;"> Exercise App</h1>
    <WorkoutQueueIcon></WorkoutQueueIcon>
</header>

  <div class ="contentContainter"> </div>
  <div class ="workoutHeader"> 
      <h1 style="font-weight: bold; text-align: center; font-size: 7em" id= "workoutName"> {workout.workoutName}</h1>
     
     
  </div>
  <div class="flex-container">
      <div class = "workoutImg"> <img id = "workoutImg" src={workout.imgSrc} alt={workout.workoutName}>   
      </div>
      <div class = "description"> Workout Description</div>
      <p id = "workoutDescription"> {@html workout.workoutDescription}</p>
   </div>

  <style> 
  body {
    font-family: Arial, sans-serif;
    background-color: white;
    margin: 0;
    padding: 0;
  }
  p {
    font-size: 50px;
    margin-top: 3px;
    text-align: start;
    margin-bottom: 2px;
  }
  header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    margin:0px;
  }
   
.flex-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    padding: 20px;
}

.description {
    text-align: center; 
    font-size: 3em;
    font-weight: bold; 
    margin-bottom: 1px;
}

#workoutImg {
    width: 500px;
    height: 500px;
  }
</style>
