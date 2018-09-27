<template>
  <section class="container">
    <div id="main">
      <!--<fade-in v-for="(item, index) in list" :key="item.id"></fade-in>-->
        <my-profile/>
        <my-skills/>
        <my-works/>
        <my-contact/>
      <a href="#" id="return-top" v-scroll-to="'#main'">Top</a>
    </div>
  </section>
</template>

<script>
  import MyProfile from '~/components/MyProfile.vue'
  import MySkills from '~/components/MySkills.vue'
  import MyWorks from '~/components/MyWorks.vue'
  import MyContact from "~/components/MyContact";
  import FadeIn from "~/components/FadeIn";

  export default {
    components: {
      MyContact,
      MyProfile,
      MySkills,
      MyWorks,
      FadeIn,
    },
    data: function () {
      return {
        list: [
          {id: 1, name: 'Java'}, {id: 2, name: 'Spring Boot'}, {id: 3, name: 'Kotlin'}, {id: 4, name: 'JavaScript'},
          {id: 5, name: 'Vue.js'}, {id: 6, name: 'HTML5/CSS3'}, {id: 7, name: 'SQL'}, {id: 8, name: 'AWS'},
          {id: 10, name: 'Git'}, {id: 11, name: 'Photo'}, {id: 12, name: 'Video'}, {id: 13, name: 'Editing'},
        ]
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: bold;
    font-size: 40px;
    color: #35495e;
    letter-spacing: 1px;
    margin-bottom: 0 !important;
  }

  .subtitle {
    font-weight: bold;
    font-size: 32px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  #profile img {
    width: 250px;
    height: 250px;
  }

  /*.fade-enter-active, .fade-leave-active {*/
    /*transition: opacity 2s*/
  /*}*/

  /*.fade-enter, .fade-leave-to {*/
    /*opacity: 0*/
  /*}*/

  #return-top {
    background-color: #000;
    border-radius: 50%;
    bottom: 50px;
    color: #fff;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    outline: 0;
    position: fixed;
    right: 50px;
    text-align: center;
    width: 50px;
  }
</style>

