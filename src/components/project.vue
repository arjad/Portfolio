<template>
  <section id="projects">
    <Heading v-if="showHeading" :title="'My Projects'" :subtitle="'Have a look at'" />

    <section class="project-container container-fluid">
      <div v-for="(project, index) in displayedProjects" :key="index" class="card px-0" @click="goToProject(project.id)" style="cursor: pointer;">
        <img :src="project.image" class="card-img-top" :alt="project.title"/>

        <div class="card-body shadow">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="mb-3">
              <span v-for="(tech, i) in project.technologies" :key="i" class="badge rounded-pill px-3 py-2 mx-2 border border-dark">
                {{ tech }}
              </span>
            </div>
            <div class="d-flex flex-wrap mt-2">
                <a :href="project.github" target="_blank" class="btn me-2 mb-2" @click.stop>
                  <i class="fa-brands fa-github mr-2"></i>GitHub
                </a>
                <a :href="project.live" target="_blank" class="btn me-2 mb-2" @click.stop>
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>  Live Demo
                </a>
            </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import Heading from "./common/heading.vue";
  import projectsData from "../data/projects.json";
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel, Heading },
    props: {
      limit: {
        type: Number,
        default: 0
      },
      categoryFilter: {
        type: String,
        default: 'All'
      },
      showHeading: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      viewUrl(url) {
        window.location.href = url;
      },
      goToProject(id) {
        this.$router.push(`/project/${id}`);
      }
    },
    data() {
      return {
        projects: projectsData
      };
    },
    computed: {
      displayedProjects() {
        let filtered = this.projects;
        if (this.categoryFilter && this.categoryFilter !== 'All') {
          filtered = filtered.filter(p => p.category === this.categoryFilter);
        }
        if (this.limit > 0) {
          return filtered.slice(0, this.limit);
        }
        return filtered;
      }
    }
  }
</script>

<style scoped lang="scss">
.project-container {
  gap:20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    width:30rem;
    transition: transform 0.3s ease-in-out;
    background: transparent;

    &:hover{
      transform: scale(1.02);
      z-index:2;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
</style>