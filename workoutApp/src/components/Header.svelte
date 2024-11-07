<header >
  <h1 class="headerTitle" >Exercise App</h1>
  <a href="/" style="text-decoration: none;">
    <button class="button-home">Home</button>
  </a>
</header>


<style> 
header {
  position: relative;
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

.button-home {
  position: absolute; 
  top: 50%; 
  left: 2vw; 
  transform: translateY(-50%); 
  background-color: #b0b0b0;
  color: #EEEEEE;
  border: none;
  border-radius: 8px;
  padding: 0.8vw 1.6vw;
  font-size: 1.2vw;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.3s;
}

.button-home:hover {
  background-color: #A0A0A0;
}

.button-home:active {
  background-color: #909090;
}
</style>