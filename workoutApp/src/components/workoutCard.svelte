<script>
export let workoutName;
export let imgSrc;
export let workoutDescription;
</script>


<div class = "workoutCard"> 
    <h1 class = "workoutName">{workoutName}</h1>
    <img class = "workoutImg" src = {imgSrc} alt = {workoutName}>
    <p class = "workoutDescription"> {workoutDescription}</p>
</div>


<style>
.workoutCard .workoutImg {
  max-width:60%;
  border-radius: 50%;
  margin-bottom: 10px;
}

.workoutCard .workoutName{
  font-family: Arial, sans-serif ;
  margin: 0px;
  color: hsl(0, 0%, 20%);
}

.workoutCard .workoutDescription{
  font-family: Arial, sans-serif ;
  color: hsl(0, 0%, 30%);
}

.workoutCard{
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 10px;
  box-shadow: 5px 5px 5px hsl(0, 0%, 0.1);
  padding: 20px;
  margin: 10px;
  text-align: center;
  max-width: 250px;
  display: inline-block;
  flex: 1 1 250px; 
  cursor: pointer
}

</style>