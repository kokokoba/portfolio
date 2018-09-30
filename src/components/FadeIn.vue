<template>
  <div style="position: relative; display: flex; width: 100px; height: 100px; left: 50%; transform: translateX(-50%);">
    <transition name="icon">
      <div v-show="isVisible" style="font-size: 60px;">☺️</div>
    </transition>
  </div>
</template>

<script>
    export default {
      name: "FadeIn",
      data() {
        return {
          isVisible: false,
        }
      },
      mounted() {
        this.observer = new IntersectionObserver(entries => {
          if (entries[0].intersectionRatio >= 1) {
            this.isVisible = true
          }
        }, {
          // rootはルート（交差判定のベース）となる要素を指定 デフォルトではviewport
          // rootからのマージンを指定。 マージンを指定することで、rootと交差する前に発火
          rootMargin: '0px 0px -20px 0px',
          // コールバック関数が呼ばれるタイミングを指定するオプション
          // 0はrootに「入ってきたとき」、1はrootに「完全に入ったとき」を示す
          threshold: 1
        })
        this.observer.observe(this.$el)
      },
      destroyed() {
        this.observer.disconnect()
      }
    }
</script>

<style scoped>
  .icon-enter-active,
  .icon-leave-active {
    transition: all 2s;
  }
  .icon-enter,
  .icon-leave-to {
    opacity: 0;
    transform: scale(2);
  }

</style>
