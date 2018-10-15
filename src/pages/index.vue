<template>
  <section class="container">
    <div id="main">
      <!--<my-profile class="fade" v-clipscroll="{ start: '0', end: '0'}"/>-->
      <!--<my-skills class="fade" v-clipscroll="{ start: '550', end: '950'}"/>-->
      <!--<my-works class="fade" v-clipscroll="{ start: '1050', end: '2800'}"/>-->
      <!--<my-contact class="fade" v-clipscroll="{ start: '2880', end: '3300'}"/>-->
      <my-profile/>
      <my-skills/>
      <my-works/>
      <my-contact300/>
    </div>
  </section>
</template>

<script>
  import MyProfile from '~/components/MyProfile.vue'
  import MySkills from '~/components/MySkills.vue'
  import MyWorks from '~/components/MyWorks.vue'
  import MyContact from "~/components/MyContact"
  import FadeIn from "~/components/FadeIn"
  import {TweenMax} from 'gsap'

  export default {
    components: {
      MyContact,
      MyProfile,
      MySkills,
      MyWorks,
      FadeIn
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
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif; /* 1 */
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

  .fade {
    opacity: 0;
  }

</style>

