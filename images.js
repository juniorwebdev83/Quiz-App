// images.js
// images.js

console.log('Script is running!');

window.addEventListener('scroll', function() {
  // ... (rest of the script)
});


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var threshold = 100; // Adjust the threshold as needed
  
    if (scrollPosition > threshold) {
      document.body.classList.add('transparent', 'scrolled');
    } else {
      document.body.classList.remove('transparent', 'scrolled');
    }
  });
  