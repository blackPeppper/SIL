const Navbar = () =>  {
  const navbar = document.querySelector(".navbar");
  document.querySelector(".toggle").addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
};


document.getElementById("hero").innerHTML = `
<nav class="bg-green-600 navbar">
  <div class="brand"><img src="./SILd.png" alt="" srcset="" loading="lazy"></div>
  <div class="toggle">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
  <ul class="navbar-links">
    <li><a href="./index.html">English</a></li>
    <li><a href="./arabic.html">عربي</a></li>
  </ul>
</nav>
<div class="stage">
  <div class="hero">
    <div class="flex items-center justify-center mt-12"><img src="./SIL-icon.png" alt="" srcset=""></div>
    <h1 class="h3 text-center text-gray-700">spices islamic license</h1>
  </div>
</div>
`;

Navbar();