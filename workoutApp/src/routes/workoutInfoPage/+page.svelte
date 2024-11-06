<script>
  

    import { workoutStore } from '../../stores/workoutStore';
    import WorkoutQueueIcon from '../../components/workoutQueueIcon.svelte';
    import SearchBar from '../../components/SearchBar.svelte';

  
  // Stores the current workout details  
  let workout = { workoutName: '', imgSrc: '', workoutDescription: '' };

  // Update workout 
  workoutStore.subscribe((/** @type {{ workoutName: string; imgSrc: string; workoutDescription: string; }} */ value) => {
    workout = value;
    console.log('Workout data:', workout); 
  });
    
</script>

<header >
  <h1 class="headerTitle" >Exercise App</h1>
</header>

<WorkoutQueueIcon></WorkoutQueueIcon>
<SearchBar></SearchBar>

  <div class ="contentContainter"> </div>
  <div class ="workoutHeader"> 
      <h1 style="font-weight: bold; text-align: center; font-size: 1.75vw" id= "workoutName"> {workout.workoutName}</h1>
     
     
  </div>
  <div class="flex-container">
      <div class = "workoutImg"> <img id = "workoutImg" src={workout.imgSrc} alt={workout.workoutName}>   
      </div>
      <div class = "description"> Workout Description</div>
      <p id = "workoutDescription"> {@html workout.workoutDescription}</p>
   </div>

  <style> 
  p {
    font-size: 1.5vw;
    margin-top: 3px;
    text-align: start;
    margin-bottom: 2px;
  }
  header {
    background-color: #333;
    color: white;
    height: 10vh;
    width:100vw;
}

.headerTitle{
  font-weight: bold; 
  text-align: center;
  font-size: 2.57vw;
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
    font-size: 1.5vw;
    font-weight: bold; 
    margin-bottom: 1px;
}

#workoutImg {
    width: 34vw;
    height: 34vh;
  }
</style>
