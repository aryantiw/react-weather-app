import React from 'react';
import Weather from './components/weather';

function App() {
  return (
    <html lang="en">

<body>
    <header>
        
        <nav>
            <h1>Weather App</h1>
            <ul>
               
                 
                <li class="inline"><a href="https://aryantiwari.netlify.app/blogs.html">Blog</a></li>
                <li class="inline"><a href="https://aryantiwari.netlify.app">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <input type="text" class="search-bar" placeholder="Search">
          </input>
        <button class="btn-go">Go!</button>
        
        <h2 class="city">Weather in Delhi</h2>
        
        <br>

        <div class="temp">Temp:40°C</div>
        

        <p class="description"> Description: Cloudy</p>
        <p class="humidity">Humidity:  No chance of Rain</p>
        
      
        <div class="wind">Wind Speed: Very Windy</div>
  </br>
    </section>
    

    <footer>
        <p>
            A Weather App gives you details of the weather of city entered. Enjoy:)
        </p>
    </footer>

    <script src="/app.js"></script>
</body>
</html>


  );
}

export default App;
