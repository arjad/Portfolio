<template>
    <footer class="text-center mt-5 text-lg-start" id="contact">
        <section class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact Details</h6>
              <p>
                <a href="https://www.linkedin.com/in/arjad/" target="_blank">
                  <i class="fab fa-linkedin"></i> LinkedIn
                </a>
              </p>
              <p>
                <a href="https://github.com/arjad" target="_blank">
                  <i class="fab fa-github"></i> GitHub
                </a>
              </p>
              <p>
                <a href="mailto:arjadgohar14@gmail.com">
                  <i class="fas fa-envelope"></i> arjadgohar14@gmail.com
                </a>
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> Chauburji Park, Lahore, Pakistan
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Services</h6>
              <p>Website Development</p>
              <p>App Development</p>
              <p>Others</p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Links</h6>
              <p class="scroll-to" @click="scrollToSection('summary')">Summary</p>
              <p class="scroll-to" @click="scrollToSection('about')">About</p>
              <p class="scroll-to" @click="scrollToSection('practicle_skills')">Skills</p>
              <p class="scroll-to" @click="scrollToSection('projects')">Projects</p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>
              <a class="btn btn-primary btn-floating m-1" href="https://www.linkedin.com/in/arjad/" role="button">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="btn btn-primary btn-floating m-1" href="https://github.com/arjad" role="button">
                <i class="fab fa-github"></i>
              </a>
              <a class="btn btn-primary btn-floating m-1" href="https://medium.com/@arjadgohar14" role="button">
                <i class="fa-solid fa-m"></i>
              </a>
              <a class="btn btn-primary btn-floating m-1" href="https://dev.to/arjad_gohar_f6d9b8938c997" role="button">
                <i class="fa-brands fa-dev"></i>
              </a>
              <a class="btn btn-primary btn-floating m-1" href="https://dev.to/arjad_gohar_f6d9b8938c997" role="button">
                <i class="fa-brands fa-discord"></i>
              </a>
            </div>
        </section>
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2025 Made with 
        <a class="text-white" href="https://github.com/arjad/Portfolio">Vue.js</a>
      </div>
    </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  methods: {
     scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.scroll-to {
  cursor: pointer;
}
</style>
