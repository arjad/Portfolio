<template>
  <div class="projects-page min-vh-100 pb-5">
    <div class="container mb-3">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div class="mb-3 mb-md-0 text-center text-md-start">
          <h2 class="font-weight-bold mb-0">My Projects</h2>
        </div>
        <div style="min-width: 250px;">
          <select id="project-filter" v-model="selectedCategory" @change="updateUrl" class="form-select form-control shadow-sm cursor-pointer">
            <option v-for="cat in availableCategories" :key="cat" :value="cat">
              {{ cat === 'All' ? 'All Categories' : cat }}
            </option>
          </select>
        </div>
      </div>
    </div>
    
    <div v-if="filteredProjectsLen === 0" class="container text-center mt-5">
      <h3 class="text-muted">No projects found for "{{ selectedCategory }}".</h3>
      <button class="btn btn-outline-primary mt-3" @click="resetFilter">Clear Filter</button>
    </div>
    <Project v-else :categoryFilter="selectedCategory" :showHeading="false" />
  </div>
</template>

<script>
import Project from "../components/project.vue";
import projectsData from "../data/projects.json";

const CATEGORIES = ["All", "Front End", "Backend", "Full Stack", "Extensions", "Gems"];

export default {
  name: "ProjectsList",
  components: {
    Project
  },
  data() {
    return {
      availableCategories: CATEGORIES,
      selectedCategory: 'All'
    }
  },
  created() {
    this.selectedCategory = this.parseUrl(this.$route.params.category);
  },
  computed: {
    filteredProjectsLen() {
      if (this.selectedCategory === 'All') return projectsData.length;
      return projectsData.filter(p => p.category === this.selectedCategory).length;
    }
  },
  watch: {
    '$route.params.category'(newVal) {
      this.selectedCategory = this.parseUrl(newVal);
    }
  },
  methods: {
    urlFormat(str) {
      if (!str || str === 'All') return '';
      return str.toLowerCase().replace(/ /g, '_');
    },
    parseUrl(str) {
      if (!str) return 'All';
      const found = CATEGORIES.find(c => this.urlFormat(c) === str);
      return found || 'All';
    },
    updateUrl() {
      const slug = this.urlFormat(this.selectedCategory);
      const path = slug ? `/projects/${slug}` : '/projects';
      this.$router.push({ path }).catch(()=>{});
    },
    resetFilter() {
      this.selectedCategory = 'All';
      this.updateUrl();
    }
  }
};
</script>

<style scoped>
.projects-page {
  padding-top: 100px !important;
}
.dark-mode .projects-page select {
  background-color: #333;
  color: white;
  border-color: #444;
}
</style>
