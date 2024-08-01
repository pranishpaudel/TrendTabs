<?php
session_start();
if(isset($_SESSION['user_name'])) {
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="carousel.css" />
    <title>TrendTabs</title>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="default-style.css" />
    <link rel="stylesheet" href="news.css" />
    <link rel="stylesheet" href="/weather/style.css" />
    <link rel="stylesheet" href="responsive.css" />
  </head>

  <body>
    <div class="page">
      <div class="header">
        <h1>
          <img src="img/logo-1.png" alt="" />
        </h1>
        <span>
          <a href=""><img src="img/gmail.png" alt="" /></a>
          <a href=""><img src="img/google.png" alt="" /></a>
          <a href=""><img src="img/user.png" alt="" /></a>
        </span>
      </div>

      <div class="hero">
        <div class="left">
          <h1>What are you looking for, <?php
          echo $_SESSION['name'];
          ?></h1>
          <form
            action="https://google.com/search"
            target="_parent"
            type="GET"
            class="search"
          >
            <input type="search" name="q" placeholder="Search Here" />
            <input type="submit" value="" />
          </form>
        </div>

        <!-- WEATHER -->
        <div class="right">
          <div class="weathercontainer">
            <div id="city"></div>
            &nbsp;
            <p class="weatherMain" id="weatherMain">,</p>
            <h2 id="temp"><span class="temp"> </span></h2>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="news">
          <h2>RECOMMENDED FOR YOU</h2>
          <div class="newscontainer">
            <div class="relative wrapper overflow-hidden md:h-96">
              <div class="carousel">
                <div class="carousel-images">
                  <img src="./img/news-img/RLNEWS.png" alt="Image 1" />
                  <img src="./img/news-img/KPOLINEWS.png" alt="Image 2" />
                  <img src="./img/news-img/UNNEWS.png" alt="Image 3" />
                </div>
                <button class="prev" onclick="prevSlide()">&#10094;</button>
                <button class="next" onclick="nextSlide()">&#10095;</button>
              </div>
            </div>

            <div class="newsbox">
              <a href=""><img src="./img/news-img/KPOLINEWS.png" alt="" /></a>
              <a href=""><img src="./img/news-img/GCESNEWS.png" alt="" /></a>
            </div>
          </div>
        </div>
        <div class="nepse">
          <h2>NEPSE - IPO Alert</h2>
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Units</th>
                <th>Opening Date</th>
                <th>Closing Date</th>
                <th>Issue Manager</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="nepse-table-body"><tr><td>RELIANCE</td><td>115596</td><td>2024-07-11</td><td>2024-07-25</td><td>Global IME Capital Ltd</td><td>Closed</td><td></td></tr><tr><td>SARBOTTAM(PUBLIC)</td><td>2776076</td><td>2024-02-25</td><td>2024-02-28</td><td>Global IME Capital Ltd.</td><td>Closed</td><td></td></tr><tr><td>SARBOTTAM(Nepalese Working Abroad)</td><td>267000</td><td>2024-01-10</td><td>2024-01-24</td><td>Global IME Capital Ltd</td><td>Closed</td><td></td></tr></tbody>
          </table>
          <div id="loading" class="loader" style="display: none">
            Loading...
          </div>
        </div>
      </div>
    </div>

    <!-- NEWS AREA-->
    <main>
      <div id="newsContainer">
        <div id="loader" class="loader"></div>
      </div>
    </main>

    <script src="news.js"></script>
    <script src="carousel.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
    <script src="./weather/script.js"></script>
    <!-- <script src="script.js"></script> -->
    <script>
      var form = document.querySelector("form");

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var search = form.querySelector("input[type=search]");
        search.value = search.value;
        form.submit();
      });
    </script>
  </body>
</html>

<?php
}else{
  header("Location: /webtech/CRUD/main.php");
}
?>
