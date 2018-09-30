<template>
  <header id="header" class="hero is-medium">
    <!--<span id="test">{{ scrollY }}</span>-->
    <a href="#" id="return-top" v-scroll-to="'#header'"><i class="fa fa-chevron-circle-up fa-2x"></i></a>
    <div class="hero-head">
      <nav id="navbar" class="navbar has-shadow is-spaced is-transparent">
        <div class="container">
          <div class="navbar-brand">
            <h1 class="title">Portfolio</h1>
            <span class="navbar-burger burger" :class="{ 'is-active': menuActive }"
                  @click="menuToggle()" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id="navbarMenuHeroA" class="navbar-menu" :class="{ 'is-active': menuActive }">
            <div class="navbar-end">
              <nuxt-link to="/" class="navbar-item"><span>Home</span></nuxt-link>
              <nuxt-link to="/works" class="navbar-item"><span>Works</span></nuxt-link>
              <nuxt-link to="/contact" class="navbar-item"><span>Contact</span></nuxt-link>
              <a href="pdf/resume.pdf" download="20180921職務経歴書.pdf" class="button is-primary">
                <span class="icon">
                  <i class="fas fa-download"></i>
                </span>
                <span>resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "HeaderNav",
    data() {
      return {
        menuActive: false,
        scrollY: 0
      }
    },
    mounted: function(){
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      menuToggle() {
        this.menuActive = !this.menuActive;
      },
      handleScroll() {
        this.scrollY = window.scrollY
      }
    }
  }
</script>

<style>
  .navbar {
    argin-bottom: 20px;
  }

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
    opacity: 0.1;
    z-index: 1000;
  }

  #return-top:hover {
    opacity: 1 !important;
    transition: 0.3s ease;
  }

  #return-top i:hover  {
    transform:translateY(-5px);
    transition: 0.3s ease;
    -webkit-transform:translateY(-5px);
    -webkit-transition: 0.3s ease;
  }

  #return-top .fa-2x {
    line-height: 1em;
    vertical-align: -0.18em;
  }

  /*#test{*/
    /*position: fixed;*/
    /*width: 100%;*/
    /*color: red;*/
    /*border-top: solid 1px red;*/
    /*top: 0px;*/
    /*z-index: 2000;*/
  /*}*/

</style>
