import React from 'react'

export default function Footer() {
  return (
    <>
        {/* <!-- Premium Portfolio Footer --> */}
        <div className='box-none' >
          
        </div>
<footer class="text-white bg-dark mt-5">
  <div class="container py-5">
    <div class="row text-center text-md-start">
      
      {/* <!-- Brand / About --> */}
      <div class="col-md-4 mb-4">
        <h3 class="fw-bold mb-3 text-gradient">@ Akshay</h3>
        <p class="small">
          A passionate Front-End Developer & Java Full Stack Developer with AI/ML expertise.  
          Building modern, scalable, and beautiful web experiences.
        </p>
      </div>

      {/* <!-- Quick Links --> */}
      <div class="col-md-4 mb-4">
        <h5 class="fw-bold mb-3">Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#about" class="footer-link">About</a></li>
          <li><a href="#projects" class="footer-link">Projects</a></li>
          <li><a href="#skills" class="footer-link">Skills</a></li>
          <li><a href="#contact" class="footer-link">Contact</a></li>
        </ul>
      </div>

      {/* <!-- Contact / Social --> */}
      <div class="col-md-4 mb-4">
        <h5 class="fw-bold mb-3">Connect</h5>
        <p class="small mb-2"><i class="bi bi-envelope me-2"></i> akshaypatil22082002@gmail.com</p>
        <div class="d-flex justify-content-center justify-content-md-start">
          <a href="#" class="social-icon"><i class="bi bi-github"></i></a>
          <a href="#" class="social-icon"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="social-icon"><i class="bi bi-twitter"></i></a>
        </div>
      </div>
    </div>

    {/* <!-- Bottom Bar --> */}
    <div class="text-center pt-4 mt-4 border-top">
      <p class="mb-0 small">&copy; 2025 Akshay Patil. Crafted with ❤️ using Bootstrap</p>
    </div>
  </div>
</footer>

    </>
  )
}
