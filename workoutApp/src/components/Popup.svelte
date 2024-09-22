<script>
  export let visible = false;
  export let onClose = () => {};
</script>
  
  {#if visible}
    <div class="pop-up-message">
      <div class="pop-up-content">
        <button id="closePopUpBtn" on:click={onClose}>&times;</button>
        <h2>Welcome to My Fitness Site!</h2>
        <p>This site helps you find workouts based on muscle groups. Select a muscle group from the body map, and corresponding workouts will appear in the grid below. Start by selecting a muscle group to explore the available workouts!</p>
      </div>
    </div>
  {/if}

  <style>
  .pop-up-message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }
  
  .pop-up-content {
    background-color: #fff;
    padding: 1.25rem; 
    border-radius: 0.625rem;
    text-align: center;
    max-width: 37.5rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2); 
    position: relative;
  }
  
  #closePopUpBtn {
    background-color: #f39c12;
    color: #fff;
    border: none;
    padding: 0.625rem 1.25rem;
    border-radius: 0.3125rem;
    cursor: pointer;
    position: absolute;
    top: 0.625rem; 
    right: 0.625rem; 
  }
  
  #closePopUpBtn:hover {
    background-color: #e67e22;
  }
  
  .pop-up-content h2 {
    margin-top: 0;
  }
  
  .pop-up-content p {
    font-size: 1.2rem;
    margin-bottom: 1.25rem; 
  }
</style>