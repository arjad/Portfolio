<template>
    <div id="write_me">
        <Heading :title="'Contact Me'" :subtitle="'Let\'s work together! Contact me directly on Upwork'" />
        <div class="container container-div" data-aos="fade-left" data-aos-duration="1000">
            <div class="picture-container">
                <div class="picture d-flex justify-content-center align-items-center">
                    <img src="/index.png" alt="Contact Me" class="img-fluid contact-illustration" />
                </div>
            </div>

            <div class="contact-cta-container text-center d-flex flex-column align-items-center justify-content-center p-4">
                <h3 class="cta-title mb-3">Hire Me on Upwork</h3>
                <p class="cta-desc mb-4">I'm available for freelance projects, full-stack web development, and AI integration services.</p>
                <a href="https://www.upwork.com/freelancers/~01a73a1abd70f9f27f" target="_blank" class="upwork-cta-btn">
                    <i class="fa-brands fa-upwork me-2"></i> Contact Me on Upwork
                </a>
            </div>
        </div>
    </div>
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

.container-div {
  border: none;
  box-shadow: none;
  width: 100%;
  max-width: 1050px;
  min-height: 480px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.picture-container {
  width: 50%;
  height: 100%;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-illustration {
  max-width: 95%;
  max-height: 380px;
  object-fit: contain;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.contact-illustration:hover {
  transform: scale(1.03);
}

.contact-cta-container {
  height: 90%;
  width: 450px;
  max-width: 90%;
}

.cta-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #1f2937;
}

.cta-desc {
  font-size: 1.05rem;
  color: #6b7280;
  line-height: 1.6;
}

.upwork-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #14a800;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(20, 168, 0, 0.3);

  i {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background: #108a00;
    color: #ffffff;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(20, 168, 0, 0.5);
    text-decoration: none;
  }
}

@media screen and (max-width: 768px) {
  .container-div {
    flex-direction: column !important;
    height: auto !important;
    min-height: auto !important;
    width: 100% !important;
    padding: 1rem 0.5rem !important;
  }

  .picture-container {
    width: 100% !important;
    height: auto !important;
    margin-bottom: 1.5rem !important;
  }

  .contact-illustration {
    max-width: 90% !important;
    max-height: 260px !important;
  }

  .contact-cta-container {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    padding: 1rem 0.5rem !important;
  }

  .cta-title {
    font-size: 1.8rem !important;
  }

  .cta-desc {
    font-size: 1rem !important;
  }

  .upwork-cta-btn {
    width: 90% !important;
    padding: 0.85rem 1.5rem !important;
    font-size: 1rem !important;
  }
}
</style>

<style lang="scss">
.dark-mode {
  .cta-title {
    color: #ffffff !important;
  }
  .cta-desc {
    color: rgba(255, 255, 255, 0.7) !important;
  }
  .container-div {
    border: none !important;
    box-shadow: none !important;
  }
}
</style>




