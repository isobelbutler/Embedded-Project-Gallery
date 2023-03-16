
# Project Gallery

## Table of Contents
1. [Planning](#Planning) 
2. [Building](#Building)  
3. [Debugging](#Debugging)

## Planning

I wanted the project gallery to tie in with the main website but be a separate page. I started by using the same colour palette and navbar as the application website and created a Figma design that used a lot of the strong red as the website, as shown below:

### Original Figma Design:

![Original Website design](images/figma_design.png)

### Reworked Design (not on Figma):
After building the site, I decided to move away from the same style as the main website as it felt like an opportunity to play with different colour so I made a new design:  

![Next Website design](images/old_design.png)

After these redesigns I ended up deciding that I wanted the gallery to be part of the main application website as it felt like it made sense there, so I moved over the files and merged the styling.

## Building

1. Replicate the Figma design using HTML and CSS.
2. Create a JavaScript object containing all the data for the project gallery: image, project, link, and caption.
3. Create a loop to render the object onto the page, in a flexbox layout.
4. Create captions that show/hide upon clicking the plus symbol.
5. Redo the design.
6. Merge into the main application website.

## Debugging

### Issue: Getting the dropdown button to loop through all the individual cards.
This was my first real experience of using JavaScript and I got really stuck trying to figure out how to access each of the captions individually, and how to link them to their respective dropdown button. I found out how to access the first caption and its dropdown but couldn't work out how to access any of the others. I hadn't clocked that my captions couldn't be an id (as multiple of them), and that I needed to use a loop.

**Original code:**
```javascript
function myFunction() {
    var x = document.getElementById("captionHide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
```

**Solution:**  
I learnt about loops, query selectors, and how to access items within an object. This took me a little while as I wasn't familiar with any of these concepts before starting the project.

After lots of research online I managed to create the solution below. Here, a loop runs 8 times *(8 = gallery.length)*, the first symbol gets an 'click' event handler attached to it, which runs an anonymous function. In this function *var x* is the individual captions. Because I used *i* again, the index of both the plus-symbol and the caption are the same, meaning clicking the first plus symbol displays the first caption etc.

The if clause from my original code is then applied, and voila, it works! I was really pleased when I got this to work as I spent a long time staring at my code and scratching my head!

```javascript
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
    
```


