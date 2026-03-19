<template>
  <div class="home">
    <Summary id="summary" />
    <About id="about" />
    <Skills id="practicle_skills" />
    <Project id="projects" :limit="4" />
    <div class="container text-center mt-4 mb-5 pb-5">
      <router-link to="/projects" class="btn btn-custom-green px-4 rounded-pill shadow-sm">
        View All Projects <i class="fa-solid fa-arrow-right ms-2"></i>
      </router-link>
    </div>
    <Journey id="journey" />
    <WriteMe id="write_me" />
    <Contact id="contact" />
  </div>
</template>

<script>
import Summary from "../components/summary.vue";
import About from "../components/about.vue";
import Skills from "../components/skills.vue";
import Project from "../components/project.vue";
import Journey from "../components/journey.vue";
import Contact from "../components/contact.vue";
import WriteMe from "../components/writeMe.vue";

export default {
  name: "Home",
  components: {
    Summary,
    About,
    Skills,
    Project,
    Journey,
    Contact,
    WriteMe,
  },
};
</script>

<style scoped>
.btn-custom-green {
  color: #47BA87;
  border: 1px solid #47BA87;
  background-color: transparent;
  transition: all 0.3s ease;
}
.btn-custom-green:hover {
  background-color: #47BA87;
  color: white;
}
</style>
