import Vue from 'vue'

Vue.directive('clipscroll', {
  // 紐づいている要素がDOMに挿入されるとき
  inserted: function(el, binding) {

    if(binding.value.start === binding.value.end) {
      TweenMax.to(el, 1, {
        y: 0,
        opacity: 1
      });
      return
    }

    let f = function(evt) {
      var hasRun = false;
      if (!hasRun && window.scrollY > binding.value.start) {
        hasRun = true;
        TweenMax.to(el, 1, {
          y: 0,
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



