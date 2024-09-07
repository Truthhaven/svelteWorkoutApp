<script>
export let workoutName;
export let imgSrc;
</script>


<div class = "workoutCard"> 
    <h1 class = "workoutName">{workoutName}</h1>
    <img class = "workoutImg" src = {imgSrc} alt = {workoutName}>
   
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


</style>