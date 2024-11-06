
<script>
  

    import { workoutStore } from '../../stores/workoutStore';
    import WorkoutQueueIcon from '../../components/workoutQueueIcon.svelte';
    import SearchBar from '../../components/SearchBar.svelte';
    import Header from '../../components/Header.svelte';
  
  // Stores the current workout details  
  let workout = { workoutName: '', imgSrc: '', workoutDescription: '' };

  // Update workout 
  workoutStore.subscribe((/** @type {{ workoutName: string; imgSrc: string; workoutDescription: string; }} */ value) => {
    workout = value;
    console.log('Workout data:', workout); 
  });
    
    
</script>

<Header></Header>

<WorkoutQueueIcon></WorkoutQueueIcon>
<SearchBar></SearchBar>

  <div class ="contentContainer"> </div>
  <div class="flex-container">
    <h1 style="font-weight: bold; text-align: center; font-size: 1.75vw" id= "workoutName"> {workout.workoutName}</h1>
      <div class = "workoutImg"> <img id = "workoutImg" src={workout.imgSrc} alt={workout.workoutName}>   
      </div>
      <div class = "description"> Workout Description</div>
      <p id = "workoutDescription"> {@html workout.workoutDescription}</p>
   </div>

  <style> 
  .contentContainer{
  }
  p {
    font-size: 1.5vw;
    margin-top: 3px;
    text-align: start;
    margin-bottom: 2px;
  }
   
.flex-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    padding: 10px;
    margin-top:2vh;
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


  #workoutName {
  font-weight: bold;
  font-size: 2vw;
  max-width: 90%; /* Set a max width for responsiveness */
  white-space: normal; /* Allows text to wrap to the next line */
  word-wrap: break-word; /* Breaks long words to fit within container */
  overflow: visible; /* Ensures full visibility */
}
</style>
