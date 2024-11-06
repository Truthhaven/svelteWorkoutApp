<script>
    import { workoutStore } from "../stores/workoutStore";
    import { goto } from "$app/navigation";
    import workoutInfo from '../englishWorkouts.json'; 
    
    let searchQuery = '';
    let showDropdown = false; 
  
    let items = workoutInfo.map(workout => ({
      name: workout.name,
      muscles: workout.muscles,
      muscles_secondary: workout.muscles_secondary,
      description: workout.description,
      images: workout.images
    }));
  
    $: filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    $: suggestedItems = items.filter(item =>
      item.name.toLowerCase().startsWith(searchQuery.slice(0, 1).toLowerCase()) &&
      !filteredItems.includes(item)
    );
  
    function toggleDropdown() {
      showDropdown = !showDropdown;
    }
  
    /**
   * @param {{ name: any; muscles?: never[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[]; muscles_secondary?: never[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[] | { id: number; name: string; name_en: string; is_front: boolean; image_url_main: string; image_url_secondary: string; }[]; description: any; images: any; }} workout
   */
    function goToWorkoutPage(workout) {
      workoutStore.set({
        workoutName: workout.name,
        imgSrc: workout.images && workout.images.length > 0 ? workout.images[0].image : 'https://placehold.co/100X100?text=No+Workout+Image',
        workoutDescription: workout.description,
        isolation: '',
        compound: '',
        musclesUsed: ''
      });
      goto("/workoutInfoPage");
    }
  </script>
  
  <div class="search-container">
    <input 
      type="text" 
      placeholder="Search by exercise name" 
      bind:value={searchQuery} 
      class="search-input" 
      on:input={() => showDropdown = true}
    />
    <button class="dropdown-toggle" on:click={toggleDropdown}>  ⌄ 
    </button>
  
    {#if searchQuery && showDropdown}
      <div class="dropdown">
        {#if filteredItems.length > 0}
          {#each filteredItems as workout}
            <div class="dropdown-item" on:click={() => goToWorkoutPage(workout)}>
              <div class="item-info">
                <img class="item-image" src={workout.images && workout.images.length > 0 ? workout.images[0].image : 'https://placehold.co/100X100?text=No+Workout+Image'} />
                <div class="item-title">{workout.name}</div>
              </div>
            </div>
          {/each}
        {:else if suggestedItems.length > 0}
          <p class="no-match">No exact matches found. Did you mean:</p>
          {#each suggestedItems as workout}
            <div class="dropdown-item" on:click={() => goToWorkoutPage(workout)}>
              <div class="item-info">
                <div class="item-title">{workout.name}</div>
              </div>
            </div>
          {/each}
        {:else}
          <p class="no-results">No results found</p>
        {/if}
      </div>
    {/if}
  </div>
  
  <style>
  .search-container {
    position: fixed;
    display: inline-flex;
    align-items: center;
    right: 5.16vw;
    width: 30vw; 
    top: 13.5vh;
    margin-top:1vh;
    margin-bottom: 5vh;
    margin-right: 1.5vw;
  }
  
  .search-input {
    width: 100%;
    padding-left: 2.78vw;
    font-size: 1.7vw;
    border: 0.14vw solid #ccc;
    border-radius: 1.14vw 0 0 1.14vw;
    box-sizing: border-box;
    height: 5.48vh;
  }
  
  .dropdown-toggle {
    padding: 0 1.38vw;
    font-size: 1.7vw;
    background-color: #ccc;
    border: 0.14vw solid #ccc;
    border-left: none;
    border-radius: 0 1.14vw 1.14vw 0;
    cursor: pointer;
    height: 5.48vh;
  }
  
  .search-input::placeholder {
    color: #999;
  }
  
  .search-container::before {
    content: '🔍';
    position: absolute;
    left: 1.06vw;
    top: 50%;
    transform: translateY(-50%);
    color: #777;
    font-size: 1.7vw;
    pointer-events: none;
  }
  
  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border: 0.14vw solid #ccc;
    border-radius: 1.14vw;
    box-shadow: 0px 0.57vh 1.14vh rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    z-index: 1000;
  }
  
  .dropdown-item {
    display: flex;
    align-items: center;
    padding: 1.38vh;
    border-bottom: 0.14vw solid #f0f0f0;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #f5f5f5;
  }
  
  .item-info {
    display: flex;
    flex-direction: row;
    margin-left: 1.38vw;
  }
  
  .item-title {
    font-size: 1.4vw;
    font-weight: bold;
    color: #333;
  }
  
  .no-match, .no-results {
    padding: 1.38vh;
    color: #666;
    font-style: italic;
  }
  
  .item-image {
    width: 5.56vw;
    height: 8.88vh;
    object-fit: cover;
    border-radius: 0.56vw;
    margin-right: 0.7vw;
  }
</style>  