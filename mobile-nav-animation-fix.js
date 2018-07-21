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

// SASS

/*
&__list {
  // mobile nav
  @include respond(big-desk) {
    // mobile nav styles

    // initial state hidden
    opacity: 0;
    transform-origin: top;
    transform: scaleY(0);

    // move transition to new class so not triggered by media query
    &--activated {
      transition: transform 0.25s ease-out, opacity 0.3s;
    }
  }
}
// show mobile nav when checked
&__mobile-checkbox:checked ~ &__list {
  opacity: 1;
  transform: scaleY(1);
}
*/

// JQUERY

$(document).ready(function() {
  // prevent mobile nav transition on screen resize
  $('.nav__mobile-checkbox').on('change', toggleMobileNav);
  // remove activated class on window resize
  $(window).on('resize', removeMobileNavTransition);
});

function toggleMobileNav() {
  // add transition class so animation occurs
  $('.nav__list').addClass('nav__list--activated');
}

function removeMobileNavTransition() {
  // remove transition class to prevent animation trigger on window resize
  var width = getWindowWidth();
  if (width <= 1200) $('.nav__list').removeClass('nav__list--activated');
}