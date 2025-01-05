<template>
  <section id="about" class="container">
    <Heading :title="'About Me'" :subtitle="'Want to know me'" />

    <div class="section-container row">
      <div data-aos="fade-right" data-aos-duration="1000" class="section__pic-container col-sm-12 col-lg-4">
        <img
          src="../assets/me2.jpeg"
          alt="my_image"
          class="rounded-circle"
          zoomtastic
        />
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" class="mt-4 col-lg-7 col-sm-12">
        <div class="about-containers d-flex">
          <div class="details-container" @mouseover="setActiveSection('experience')">
            <i class="fa-solid fa-award"></i>
            <h3>Experience</h3>
            <p>{{ calculatedExperience }}+ year(s)</p>
          </div>
          <div class="details-container" @mouseover="setActiveSection('education')">
            <i class="fa-solid fa-school"></i>
            <h3>Education</h3>
            <p>BS.IT from PUCIT</p>
          </div>
        </div>
        <div class="text-container mt-4 pl-3">
          <ul v-if="activeSection === 'experience'">
            <li> Software Engineer at <b>Coding Cops</b> - July 2021 - Present</li>
            <li> React Developer at <b>United Insurance</b> Nov, 2021 to April, 2022</li>
          </ul>
          <ul v-else-if="activeSection == 'education'">
            <li> Bachelor in Information Technology from <b>PUCIT</b> 2018 - 2022</li>
            <li> Bechlors from <b>Punjab University</b> 2016 - 2018</li>
            <li> Matric from <b>Central Modal School</b> 2016 - 2018</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "./common/heading.vue";
export default {
  components: {
    Heading,
  },
  data() {
    return {
      activeSection: 'experience',
      startDate: "2022-07-01"
    };
  },
  computed: {
    calculatedExperience() {
      const startDate = new Date(this.startDate);
      const currentDate = new Date();
      const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
      const isFullYear = currentDate.getMonth() >= startDate.getMonth() && currentDate.getDate() >= startDate.getDate();

      return isFullYear ? yearsDifference : yearsDifference - 1;
    },
  },
  methods: {
    setActiveSection(section) {
      this.activeSection = section;
    },
  },
};
</script>

<style scoped>
.about-containers {
  gap: 2rem;
}
.details-container {
  padding: 1.5rem;
  flex: 1;
  width: 15vw;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
}
.details-container:hover {
  cursor: pointer;
  background: lightgrey;
}

ul {
  line-height: 30px;
  font-size: 1.2rem;
}
.section-container {
  gap: 4rem;
  height: 80%;
  position: relative
}

.section__pic-container {
  height: 350px;
  width: 350px;
  position: relative
  
}
.section__pic-container img {
  height: 100%;
  width: 100%;
  object-fit: cover; /* Optional: This ensures the image covers the entire container */
  position: absolute; /* Position the image absolutely within its parent */
  top: 0;
  left: 0;
}

@media screen and (max-width: 375px) {
  .details-container h3 {
    font-size: 14px;
  }
}
</style>
