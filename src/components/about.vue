<template>
  <section id="about" class="container">
    <Heading :title="'About Me'" :subtitle="'Want to know me'" />

    <div class="position-relative">
      <div class="verticle-line position-absolute"></div>
      <div data-aos="fade-left" data-aos-duration="1000" class="mt-4 ml-5">
        <h2 class='mb-4'> <i class="fa-solid fa-briefcase"></i> Experience - {{calculatedExperience}}+ year(s)</h2>
        <div class='w-100 text-green'>
          <h4 class='d-inline'> Software Engineer - 2022-present</h4>
        </div>
        <h6> <a class='text-blue' href= 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://codingcops.com/&ved=2ahUKEwj45KjR6OGKAxWXF2IAHS9oO-MQFnoECDcQAQ&usg=AOvVaw0qDV81i0KjT34kPmA7ojBM'> Coding Cops, Lahore. </a></h6>
        <ul>
          <li> Developed key features and resolved bugs for web applications using React, Vue.js, and Ruby on Rails. </li>
          <li> Continuously enhancing skills by pursuing certifications in AWS, DevOps & python. </li>
        </ul>
        <div class="skills mb-5">
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Vue JS</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">React JS</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Ruby on Rails</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Python </span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">AWS services</span>
        </div>

        <h4 class='text-green'> Front End Developer - 2021-2022 </h4>
        <h6> <a class='text-blue'href= 'https://theunitedsoftware.com/'>United Insurance, Lahore. </a> </h6>
        <ul>
          <li> Created visually appealing, user-friendly interfaces, using CSS grid and flexbox layouts for responsive design. </li>
          <li> Utilized react components & npm modules to develop modular, reusable UI elements for efficient front-end development. </li>
        </ul>
        <div class="skills mb-5">
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">HTML</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">CSS</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">SCSS</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">JavaScript</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Bootstrap</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Tailwind CSS</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">React JS</span>
        </div>

        <h4 class='text-green'> Freelancer - 2019-2021 </h4>
        <h6> <a class='text-blue'href= 'https://www.upwork.com/freelancers/~01a73a1abd70f9f27f'>Upwork </a> </h6>
        <ul>
          <li> Developed key features and resolved bugs for web applications using React, Vue.js, and Ruby on Rails. </li>
          <li>Continuously enhancing skills by pursuing certifications in AWS, DevOps & Python. </li>
        </ul>
        <div class="skills mb-5">
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Front End Optimization</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">AWS Deployment</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Backend Optimization</span>
        </div>
      </div>
    </div>
    <br/>

    <div class="position-relative mt-5">
      <div class="verticle-line position-absolute"></div>

      <div data-aos="fade-left" data-aos-duration="1000" class="mt-4 ml-5">
        <h2 class='mb-4'><i class="fa-solid fa-user-graduate"></i> Education </h2>
        
        <h4 class='text-green'> Bachelor in Information Technology (BIT) - 2022-present </h4>
        <h6><a class='text-blue' href='https://pucit.edu.pk/'> Punjab University (PUCIT) Lahore, Pakistan. </a></h6>
        <p> Obtained comprehensive knowledge in computer science and information technology, enhancing skills in software development, and passed it with 3.06 CGPA. </p>

        <h4 class='text-green'> Mern Stack Certification - 2022</h4>
        <h6><a class='text-blue' href='https://nextbridge.com/'>Next Bridge, Lahore, Pakistan.</a>  </h6>
        <p>Acquired advanced mern-stack, leveraging industry best practices to create dynamic and interactive web applications.</p>
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
      startDate: "2019-01-01"
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

.verticle-line{
  width: 15px;
  height: 100%;
  background: linear-gradient(to right, #47BA87 50%, #34495E 50%);
}
.verticle-line-right{
  right:0;
}

.text-green{
  color: #47BA87;
}
.text-blue{
  color: #34495E;
  text-decoration: underline;
}

@media screen and (max-width: 375px) {
  .details-container h3 {
    font-size: 14px;
  }
}
</style>
