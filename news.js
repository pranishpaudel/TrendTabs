document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('newsData') && new Date(localStorage.getItem('newsExpire')) > new Date()) {
        displayNews(JSON.parse(localStorage.getItem('newsData')));
    } else {
        fetchNews();
    }
  });
  
  function fetchNews() {
    const apiKey = 'pub_43918e3769a26bf9c650d2a53ac84fb49fe98';
    const url = `https://newsdata.io/api/1/news?country=np&apikey=${apiKey}`;
    showLoader(true);
  
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.results) {
                localStorage.setItem('newsData', JSON.stringify(data.results));
                localStorage.setItem('newsExpire', new Date(new Date().getTime() + 30 * 60 * 1000)); // cache expires in 30 minutes
                displayNews(data.results);
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        })
        .finally(() => {
            showLoader(false);
        });
  }
  
  function displayNews(newsItems) {
    const container = document.getElementById('newsContainer');
    container.innerHTML = '';
  
    newsItems.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        
        const newsImg = document.createElement('img');
        newsImg.src = item.image_url; 
        newsImg.onload = () => newsImg.style.background = 'none';
        newsImg.className = 'news-img';
        newsImg.onerror= ()=>{
          newsImg.src = 'elementor-placeholder-image.webp'
        };
        newsItem.appendChild(newsImg);
  
// DATE
const newsDate = document.createElement('p');
newsDate.className = 'news-date';

// Options for formatting the date
const options = { month: 'long', day: 'numeric' };

// Format the date as "Month Day"
newsDate.textContent = new Date(item.pubDate).toLocaleDateString('en-US', options);

newsItem.appendChild(newsDate);


        const textContainer = document.createElement('div');
        textContainer.className = 'news-text';
  
        const title = document.createElement('h3');
        title.className = 'news-title';
        title.textContent = item.title;
        textContainer.appendChild(title);
  
        const description = document.createElement('p');
        description.className = 'news-desc';
        description.textContent = truncateDescription(item.description || 'No description available.');
        textContainer.appendChild(description);
  
        // DATE
       

        
  
        const link = document.createElement('a');
        link.href = item.link;
        link.className = 'news-link';
        link.textContent = 'Read more';
        link.target = '_blank';
        textContainer.appendChild(link);
  
        newsItem.appendChild(textContainer);
        container.appendChild(newsItem);
    });
  
  function imageFound() {
      alert('That image is found and loaded');
  }
  
  function imageNotFound() {
      alert('That image was not found.');
  }
  }
  
  function truncateDescription(description) {
    const maxLength = 50; // Maximum length of description
    if (description.length > maxLength) {
        return description.substring(0, maxLength - 3) + '...'; // Truncate and add ellipsis
    }
    return description;
  }
  
  
  function showLoader(display) {
    const loader = document.getElementById('loader');
    if (display) {
        loader.style.display = 'block';
    } else {
        loader.style.display = 'none';
    }
  }
  