<template>
  <section id="skills">
      <h2 class="subtitle">Skills</h2>
      <transition-group name="skills" tag="div" @before-enter="beforeEnter" @after-enter="afterEnter" @enter-cancelled="afterEnter"
                        class="columns is-multiline is-mobile wrap" >
          <div v-for="(skill,index) in skills" :key="skill.id" :data-index="index" :data-test="index" class="column is-6-mobile is-4-tablet is-4-desktop">
            <div class="column">
              <p class="bd-notification is-primary">{{ skill.name }}</p>
            </div>
          </div>
        </transition-group>
  </section>
</template>

<script>
  export default {
    name: "MySkills",
    data: function () {
      return {
        skills: [
          {id: 1, name: 'Java'}, {id: 2, name: 'Spring Boot'}, {id: 3, name: 'Kotlin'}, {id: 4, name: 'JavaScript'},
          {id: 5, name: 'Vue.js'}, {id: 6, name: 'HTML5/CSS3'}, {id: 7, name: 'SQL'}, {id: 8, name: 'AWS'},
          {id: 10, name: 'Git'}, {id: 11, name: 'Photo'}, {id: 12, name: 'Video'}, {id: 13, name: 'Editing'}
        ]
      }
    },
    methods: {
      // enter の初めにインデックス×100でディレイを付ける
      beforeEnter(el) {
        el.style.transitionDelay = 100 * el.dataset.index + 'ms'
      },
      // enter が終わるか中止されたらディレイを消す
      afterEnter(el) {
        el.style.transitionDelay = ''
      }
    }
  }
</script>

<style>

  .skills-enter-active, .skills-leave-active {
    transition: transform .5s, opacity .5s;
  }
  .skills-move:not(.skills-leave-active) {
    transition: transform .5s;
  }
  .skills-enter {
    opacity: 0;
    transform: translateX(-30px);
  }
  .skills-leave-to {
    opacity: 0;
  }
</style>


