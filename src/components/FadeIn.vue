<template>
  <div class="icon-area">
    <transition name="icon">
      <div v-show="isVisible" class="icon">🍣</div>
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
  .icon-area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px dashed #ddd;
    background: #eee;
  }
  .icon {
    font-size: 60px;
  }
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
