// Project Gallery Text
let html = '';

// Project Gallery Section Card Data
let gallery = [
{
  image: 'images/website.png',
  project: 'Main Website',
  link: '#',
  caption: 'You\'re currently here! My main application website which answers who I am, why I want to be a developer, and what I\'ve learned so far.',
},
{
  image: 'images/hobby.png',
  project: 'Hobby Page',
  link: 'https://isobelbutler.github.io/Hobby-Page/',
  caption: 'Focusing on one my favourite hobbies, this website is all about cycling! It\'s a guide to the Coast to Coast challenge which includes a three day route, and a kit list.',
},
{
  image: 'images/movie.png',
  project: 'Movie Data',
  link: 'https://isobelbutler.github.io/Movie-Data/',
  caption: 'A grid layout website that is populated with the data from the Movie Data object. Users can add their own film to the object and toggle the displayed information.',
},
{
  image: 'images/gallery.png',
  project: 'Project Gallery',
  link: '#project-gallery',
  caption: 'You\'re looking at this! A flex-box layout gallery of the completed application projects, and a couple of other side bits.',
},
{
  image: 'images/game.png',
  project: 'Feature',
  link: 'https://isobelbutler.github.io/Game/',
  caption: 'A farming game called \'Farmer Froggy\'s Harvest Game\'. Players are given order requests, and must sow and harvest crops in order to earn coins, and complete the game.',
},
{
  image: 'images/oldwebsite.png',
  project: 'Portfolio',
  link: 'https://isobelbutler.co.uk/',
  caption: 'I originally built this site back in 2018 whilst first learning CSS and HTML and it became a kind of online CV for my TV work. Throughout the years it\'s had many redesigns, and is due another one. A couple of years ago I converted it to WordPress. I\'d like to move away from WordPress again and want to completely rebuild it now that my coding knowledge has improved.',
},
{
  image: 'images/soak.png',
  project: 'Soak Services',
  link: 'https://www.soak.services/',
  caption: 'Whilst building my Founders and Coders application I built a onepage, static website for a small drainage company using HTML and CSS. The company wanted a simple website to give them a better online presence that clearly explained their business. I wrote the copy, and designed and built the site.',
},
{
  image: 'images/wealden.png',
  project: 'Wealden Green Party',
  link: 'https://wealden.greenparty.org.uk/',
  caption: 'Whilst working in TV I offered to redesign my hometown\'s Green Party constituency\'s website. Their existing site was a crowded, static site which was difficult to navigate. The wider Green Party was using WordPress and wanted to move all local constituency websites to WordPress. I worked with existing templates created by the Green Party, added my own, and created their new design which allows them to easily add articles and news to the site.',
}

];

// Loops
    // Creates the Project Gallery Repeated Cards from the Data Object
    for (let i = 0; i < gallery.length; i++) {
        let card = gallery[i];
        html +=
          `<div class="flex-item">             
            <figure>
            <a href="${card.link}" target="_blank"><img src="${card.image}" alt="filler" class="flex-image"></a>
                <figcaption>
                    <div><a href="${card.link}" target="_blank">${card.project}</a></div>
    
                    <button class="plus-symbol">&plus;</button>
                </figcaption>
            </figure>
            
            <div class="captionHide" style="display:none">
              ${card.caption}
            </div>
          </div>`;  
    }
    
    document.querySelector('.gallery-container').insertAdjacentHTML('beforeend', html); 
    
        // Adds the show/hide caption to each Project Gallery Card
    for (let i = 0; i < gallery.length; i++) {
    
    document.querySelectorAll(".plus-symbol")[i].addEventListener("click", function() {
    
      var x = document.querySelectorAll(".captionHide")[i]; // By using querySelectorAll and captionHide as a class, you can select which index number to affect.
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      
    });
    }
    