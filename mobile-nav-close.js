// HTML

/*
<nav class="nav">
  <input type="checkbox" class="nav__mobile-checkbox" id="nav-toggle">
  <label for="nav-toggle" class="nav__mobile-label">Menu</label>
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#headlines" class="nav__link">Item 1</a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">Item 2</a>
    </li>
    <li class="nav__item">
      <a href="#" class="nav__link">Item 3</a>
    </li>
  </ul>
</nav>
*/

// JQUERY

$(document).ready(function() {
  // Close mobile nav on click anywhere outside it
  $(document).mouseup(e => {
    e.stopPropagation();
    closeOnClickOutside(e, '.nav__list');
  });

  // Close mobile nav on escape key
  $(document).keyup(e => closeOnEsc(e, '.nav__list'));

  // Close mobile nav on link click
  $('.nav__link').on('click', () => $('#nav-toggle').prop('checked', false));
});

function closeOnClickOutside(e, target) {
  var container = $('.nav__list');
  if (
    parseInt(container.css('opacity')) === 1 &&
    $('#nav-toggle').prop('checked') &&
    // if the target of the click isn't the container or a descendant of the container
    !container.is(e.target) &&
    container.has(e.target).length === 0
  ) {
    $('#nav-toggle').prop('checked', false);
  }
}

function closeOnEsc(e, target) {
  if (
    parseInt($(target).css('opacity')) === 1 &&
    $('#nav-toggle').prop('checked') &&
    e.keyCode === 27
  ) {
    $('.nav__mobile-checkbox').prop('checked', false);
  }
}