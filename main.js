document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  const slider = new Slider({
    width: 400,
    arrow: true,
    slidesInView: 1,
    data: [
      {
        id: 1,
        title: 'Slide 1!',
        imgUrl: 'https://dummyimage.com/400x400/d65ad6/000000.jpg'
      },
      {
        id: 2,
        title: 'Slide 2!',
        imgUrl: 'https://dummyimage.com/400x400/faf73a/000000.jpg'
      },
      {
        id: 3,
        title: 'Slide 3!',
        imgUrl: 'https://dummyimage.com/400x400/5aeffa/000000.jpg'
      },
    ]
  });

  slider.init();

});