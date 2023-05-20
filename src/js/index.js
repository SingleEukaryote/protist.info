anime({
    targets: '.button',
    translateX: function() { return anime.random(-100, 100); },
    translateY: function() { return anime.random(-100, 100); },
    duration: 800,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });
  

// update positions in the anime.js animation update callback
anime({
    targets: '.button',
    translateX: function() { return anime.random(-100, 100); },
    translateY: function() { return anime.random(-100, 100); },
    duration: 800,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
    update: function() {
      // adjust your line positions based on button locations
      document.getElementById('line1').setAttribute('x2', /*button1 x position*/);
      document.getElementById('line1').setAttribute('y2', /*button1 y position*/);
      // ...do this for each line
    }
  });
  