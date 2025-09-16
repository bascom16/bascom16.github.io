// docs/assets/javascript/isotope-init.js

document.addEventListener('DOMContentLoaded', function () {
  var grid = document.querySelector('.grid.cards');
  if (!grid) {
    return;
  }

  var listItems = grid.querySelectorAll('li');

  listItems.forEach(function(li) {
    li.classList.add('item');

    var link = li.querySelector('a[data-tags]');
    if (link) {
      var tags = link.getAttribute('data-tags').split(' ');
      tags.forEach(function(tag) {
        if (tag) {
          li.classList.add(tag);
        }
      });
    }
  });

  // THE FIX IS HERE: Change the layoutMode to 'masonry'
  var iso = new Isotope(grid, {
    itemSelector: '.item',
    layoutMode: 'masonry' // Changed from 'fitRows'
  });

  var buttonGroup = document.querySelector('.button-group');
  if (buttonGroup) {
    buttonGroup.addEventListener('click', function (event) {
      if (!event.target.matches('button')) {
        return;
      }
      var filterValue = event.target.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });

      var buttons = buttonGroup.querySelectorAll('button');
      buttons.forEach(function(button) {
        button.classList.remove('is-checked');
      });
      event.target.classList.add('is-checked');
    });
  }
});