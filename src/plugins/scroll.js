import Vue from 'vue'

Vue.directive('clipscroll', {
  // 紐づいている要素がDOMに挿入されるとき
  inserted: function(el, binding) {

    if(binding.value.start === binding.value.end) {
      TweenMax.to(el, 1, {
        y: -50,
        opacity: 1
      });
      return
    }

    let f = function(evt) {
      var hasRun = false;
      if (!hasRun && window.scrollY > binding.value.start) {
        hasRun = true;
        TweenMax.to(el, 1, {
          y: -50,
          opacity: 1
        })
      }
      if (window.scrollY > binding.value.end) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  }
});

// Vue.directive('drawscroll', {
//   inserted: function(el, binding) {
//     let f = function(evt) {
//       var hasDrawn = false;
//       if (!hasDrawn && window.scrollY > binding.value.start) {
//         hasDrawn = true;
//         TweenMax.set(el, {
//           opacity: 1
//         })
//
//         TweenMax.staggerFromTo(el.childNodes, 5, {
//           drawSVG: false
//         }, {
//           drawSVG: true,
//           y: -10,
//           opacity: 1,
//           ease: Sine.easeOut
//         }, -0.1)
//       }
//       if (window.scrollY > binding.value.end) {
//         window.removeEventListener('scroll', f)
//       }
//     }
//     window.addEventListener('scroll', f)
//   }
// });



