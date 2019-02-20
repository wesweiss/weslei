const container = document.body.querySelectorAll('.container')[0].style;

const bg1 = new Image(),
      bg2 = new Image();
bg1.src = '/assets/img/avi-richards-183715-unsplash-BG.png';
bg2.src = '/assets/img/emile-perron-190221-unsplash-BG.png';

// var bgImageArray = ["avi-richards-183715-unsplash-BG.png", "emile-perron-190221-unsplash-BG.png"],
//     base = "/assets/img/";
//     bgImageArray.forEach(function(img){
//         new Image().src = base + img; 
//         // caches images, avoiding white flash between background replacements
//     });


setTimeout(() => {
    //   function move() {
    //     var width = 0;
    //     var id = setInterval(frame, 20);
    //     function frame() {
    //       if (width == -50) {
    //         clearInterval(id);
    //       } else {
    //         width --; 
    //         container.backgroundPositionX = width + 'vw'; 
    //       }
    //     }
    // }
    // move();
    container.backgroundImage = 'url(' + bg2.src + ')';

}, 3000);