LIVE-SITE -> [https://moggstephen.github.io/swiperGridDemo/]

This is a showcase of a fluid responsive swiper grid layout.

- This utilizes both custom pagination and custom navigation.
- Alot of !important properties to overwrite inline styles applied to the swiper elements
- Overflow hidden is neccessary to stop the peaking of other slide elements
- Swiper wrapper has a set width calculated that is way above the screen-width. This is done to horizontally display all the sliders. OverFlow hidden fixes this creating a scroll bar but you cannot set a width on this element as it causes the functionality to break.
- Bootstrap interacts with the wrapper somehow to stop it from pushing to the left and the right of the screen. Havent figured out how yet.
- In order to stop the last page from not being done properly you have to fill up empty sliders so that the functionality works.
- Lazy loading of elements using swiper-lazy-preloader to display a progress circle on the element that is being loaded.
- Breakpoints within js to change layout on different screen sizes! Changing the screen of the page doesnt seem to be change the layout sometimes. Reloading the swiper using a reload function on event listener window screen size change might help! Sometimes pagination can be destroyed from setting it false on smallest screen size so this might be neccessary. Might also need to make sure the empty swiper slides dont cause issues on smaller screens!