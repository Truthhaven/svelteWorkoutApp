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
      right: 10rem;
      width: 80%; 
      max-width: 400px; 
      min-width: 200px; 
      top: 9rem;
    }
  
    .search-input {
      width: 100%;
      padding-left: 2em; 
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 8px 0 0 8px;
      box-sizing: border-box;
      height: 2.5em; 
    }
  
    .dropdown-toggle {
      padding: 0 10px;
      font-size: 1em;
      background-color: #ccc;
      border: 1px solid #ccc;
      border-left: none;
      border-radius: 0 8px 8px 0;
      cursor: pointer;
      height: 2.5em;
    }
  
    .search-input::placeholder {
      color: #999;
    }
  
    .search-container::before {
      content: '🔍';
      position: absolute;
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      color: #777;
      font-size: 1em;
      pointer-events: none;
    }
  
    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      max-height: 200px;
      overflow-y: auto;
      z-index: 1000;
    }
  
    .dropdown-item {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #f0f0f0;
      cursor: pointer;
    }
  
    .dropdown-item:hover {
      background-color: #f5f5f5;
    }
  
    .item-info {
      display: flex;
      flex-direction: row;
      margin-left: 10px;
    }
  
    .item-title {
      font-size: 1rem;
      font-weight: bold;
      color: #333;
    }
  
    .no-match, .no-results {
      padding: 10px;
      color: #666;
      font-style: italic;
    }
  
    .item-image {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 4px;
      margin-right: 0.5rem;
    }
  </style>
  