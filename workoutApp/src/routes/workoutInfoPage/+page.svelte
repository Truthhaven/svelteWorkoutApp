<script>
  

    import { workoutStore } from '../../stores/workoutStore';
  let workout = { workoutName: '', imgSrc: '', workoutDescription: '' };

  workoutStore.subscribe((/** @type {{ workoutName: string; imgSrc: string; workoutDescription: string; }} */ value) => {
    workout = value;
    console.log('Workout data:', workout); 
  });
    
</script>


<header class = "header"> 
    <h1 style="font-weight: bold; text-align: center;"> Exercise App</h1>
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

  <style> body {
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
   
a {
    position: absolute;
    top: 10px; 
    left: 10px; 
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 40px;
}


a.active {
    background-color: grey;
    color: white;
}


  
button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: auto;
    height: 50px;
    border-radius: 50%;
    background-color: #4CAF50; 
    color: white;
    font-size: 24px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049; 
}

.flex-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center; 
    padding: 20px;
}

.workoutVideo{
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    margin: 10px;
    text-align: center;
    font-size: 18px;
    border-radius: 8px;
    flex: 2;
}

.description {
    text-align: center; 
    font-size: 3em;
    font-weight: bold; 
    margin-bottom: 1px;
}

.instructions{
    text-align: center; 
    font-size: 3em;
    font-weight: bold; 
}

#workoutImg {
    width: 500px;
    height: 500px;
  }
</style>
