<template>
  <footer id="contact" class="footer d-flex justify-content-center alig-item-center pt-4">
    <img class='footer-me' src="../assets/me-footer.png" alt="profile pic" />

    <div class="d-flex justify-content-start footer-inner">
      <ul class="ml-5">
        <li class="social-icon__item mb-4">
          <h4> Contact Details</h4>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="https://www.linkedin.com/in/arjad/" target="_blank">
            <i class="fa-brands fa-linkedin icon"></i>
            <span class="pl-2"> https://www.linkedin.com/in/arjad/ </span>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="https://github.com/arjad" target="_blank">
            <i class="icon fa-brands fa-github"></i>
            <span class="pl-2"> https://github.com/arjad </span>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="mailto:arjadgohar14@gmail.com">
            <i class="fa-solid fa-envelope"></i>
            <span class="pl-2">arjadgohar14@gmail.com </span>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="javascript:void(0)">
            <i class="fa-solid fa-location-dot"></i>
            <span class="pl-2"> Chauburji Park, Lahore, Paksitan. </span>
          </a>
        </li>
      </ul>
      
      <ul class="first_url ml-5">
        <li class="social-icon__item mb-4">
          <h4> Services</h4>
        </li>
        <li class="social-icon__item">
          Website Development
        </li>
        <li class="social-icon__item">
          App Development
        </li>
        <li class="social-icon__item">
          Others
        </li>
      </ul>
      
      <ul class="ml-5">
        <li class="social-icon__item mb-4">
          <h4> Links </h4>
        </li>
        <li class="p-2 social-icon__item scroll-to">Summary</li>
        <li class="p-2 social-icon__item scroll-to">About</li>
        <li class="p-2 social-icon__item scroll-to">Skills</li>
        <li class="p-2 social-icon__item scroll-to">Projects</li>
        <li class="p-2 social-icon__item scroll-to">Contact</li>
      </ul>
    </div>
    <hr/>
    <p class="text-center border-1 cursor"> 
      <a onclick="location.href='https://github.com/arjad/Portfolio'"> <b> Made with Vue JS </b></a>
    </p>
  </footer>
</template>

<script>
import Heading from "./common/heading.vue";
export default {
  components: {
    Heading,
  },
}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 100%;
  background: #47BA87;
  flex-direction: column;
  margin-top: 10vh;
  color: white;
}
.footer-me{
  height:100%;
  width:35rem;
  opacity:0.1;
  position: absolute;
  right: 0px;
}

.social-icon__item{
  list-style: none;
  padding-top: 15px;
  font-size: 14px;
}

.social-icon__link {
  color: #fff;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  i {
    font-size: 1.5rem;
  }
}
.social-icon__link:hover {
  transform: translateY(-10px);
}
.cursor{
  cursor: pointer;
}
</style>
