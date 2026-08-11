<template>
  <div>
    <footer class="footer-compact py-4" id="contact">
      <div class="container text-center">
        <div class="copyright">
          © 2026 Arjad Gohar. Built with <a href="https://github.com/arjad/Portfolio" target="_blank" class="accent-purple">Vue.js</a> • <a href="https://www.upwork.com/freelancers/~01a73a1abd70f9f27f" target="_blank" class="accent-purple">Contact me on Upwork</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>
.footer-compact {
  background: rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  width: 100%;
  margin-top: 6rem;
}

.copyright {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
}

.accent-purple {
  color: #a855f7;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #c084fc;
    text-decoration: underline;
  }
}

.socials-footer {
  gap: 1.25rem;
}

.social-link {
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.15rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #a855f7;
    transform: translateY(-2px);
    text-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
  }
}
</style>

<style lang="scss">
.dark-mode {
  .footer-compact {
    background: rgba(18, 12, 38, 0.4) !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  }
  .copyright, .social-link {
    color: rgba(255, 255, 255, 0.6) !important;
  }
}
</style>

