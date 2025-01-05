<template>
  <section>
    <Heading :title="'My Projects'" :subtitle="'Have a look at'" />
    
    <div class="container">
      <VueSlickCarousel
        :arrows="true" 
        :dots="true"
        :infinite = "true"
        :slidesToShow= "3" 
        :slidesToScroll="2"
        :autoplay= "true"
        :speed="2000"
        :autoplaySpeed="2000"
      >
        <div class="project-image">
          <div>
            <img src="../assets/blood_project.png"/>
          </div>
          <button class="btn mr-2" @click="viewUrl('https://dreamy-banoffee-b9dd62.netlify.app/')">
            View
          </button>
          <button class="btn" @click="viewUrl('https://github.com/arjad/Blood-web')">
            Code
          </button>
        </div>
        <div class="project-image">
          <div>
            <img src="../assets/amazon_project.png"/>
          </div>
          <button class="btn mr-2" @click="viewUrl('https://optimistic-shockley-06ae03.netlify.app/')">
            View
          </button>
          <button class="btn" @click="viewUrl('https://github.com/arjad/Amazon-Clone')">
            Code
          </button>
        </div>
        <div class="project-image">
          <div>
            <img src="../assets/forest_project.png"/>
          </div>
          <button class="btn mr-2" @click="viewUrl('https://ecstatic-noether-654f18.netlify.app/')">
            View
          </button>
          <button class="btn" @click="viewUrl('https://github.com/arjad/Forest-Project')">
            Code
          </button>
        </div>
        <div class="project-image">
          <div>
            <img src="../assets/restaurant_project.png"/>
          </div>
          <button class="btn mr-2" @click="viewUrl('https://kaleidoscopic-cat-37f8fc.netlify.app/')">
            View
          </button>
          <button class="btn" @click="viewUrl('https://github.com/arjad/food-menu')">
            Code
          </button>
        </div>
        <div class="project-image">
          <div>
            <img src="../assets/uic_project.png"/>
          </div>
          <button class="btn" @click="viewUrl('https://mystifying-shaw-f4dc85.netlify.app/')">
            View
          </button>
        </div>
        <div class="project-image">
          <div>
            <img src="../assets/neoreach_project.png"/>
          </div>
          <button class="btn mr-2" @click="viewUrl('https://affectionate-lovelace-1649f4.netlify.app/')">
            View
          </button>
          <button class="btn" @click="viewUrl('https://github.com/arjad/NeoReach')">
            Code
          </button>
        </div>

        <div class="project-image">
          <div>
            Other Projects
          </div>
          <ul class="ml-3">
            <li @click="viewUrl('https://modest-poitras-90dacd.netlify.app/')">
              3d Video
            </li>
            <li @click="viewUrl('https://prismatic-lollipop-56a386.netlify.app/#')">
              WebWrite
            </li>
            <li @click="viewUrl('https://naughty-lichterman-847fbd.netlify.app/')">
              E-commers 
            </li>
            <li @click="viewUrl('https://blissful-euler-4f35c7.netlify.app/')">
              Capture
            </li>
          </ul>
          
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import Heading from "./common/heading.vue";
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel, Heading },
    methods: {
      viewUrl(url) {
        window.location.href = url;
      }
    }
  }
</script>

<style scoped lang="scss">
.project-image {
  width:5vh;
  margin:10px;

  div {
    padding: 1rem;
    position: relative;
    
    img { 
      height: 100%;
      width: 100%;
    }
  }
  li:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  button:hover {
    text-decoration: underline;
  }
}
</style>