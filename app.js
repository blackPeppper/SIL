const Navbar = () =>  {
  const navbar = document.querySelector(".navbar");
  document.querySelector(".toggle").addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
};

document.querySelector("html head").innerHTML = `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./css/main.min.css">
  <meta name="description" content="It is a set of conditions and rules to maintain the correct use of the product, divided into basic rules and
  sub-rules that inherit their provisions from the basic rules, and there are divisions for each particular
  category. These rules are based on Islamic Sharia.">
  <link rel="shortcut icon" href="./SILd.png" type="image/png">
  <meta property="og:image"  content="./SIL.png">
  <title>Spices Islamic License</title>
`;

document.getElementById("hero").innerHTML = `
<nav class="navbar success">
  <div class="brand">Spices Islamic License</div>
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
    <div class="flex items-center justify-center mt-12"><img src="./sil-icon.png" alt="" srcset="" loading="lazy"></div>
    <h1 class="h3 text-center text-gray-800">Spices Islamic License</h1>
  </div>
</div>
`;

Navbar();