<script>
  import logo from "$lib/assets/img/logo_baumkreis.svg";
  import hero2 from "$lib/assets/img/hero2.webp";
</script>

<section id="hero">
  <img src={hero2} alt="background" class="background-image" />
  <div class="background-color" />

  <div class="wrapper">
    <img src={logo} alt="logo baumkreis" />

    <h2>nature - music -family</h2>
    <h3>21. &amp; 22. July 2023</h3>
  </div>
</section>

<style>
  h2,
  h3 {
    color: white;
  }
  #hero {
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 2rem;
    position: relative;
  }

  .background-color,
  .background-image {
    position: absolute;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .background-color {
    z-index: 1;
    background-image: radial-gradient(#000000, #fedcbc, #010101);
    opacity: 0.5;
  }

  .wrapper {
    align-items: center;
    justify-content: center;
    z-index: 1;
    color: #ffffff;
    max-width: 80%;
  }
  img {
    width: auto;
    height: auto;
  }
  h2 {
    text-align: center;
    font: 30px own;
  }
  h3 {
    text-align: center;
    font: 25px own;
  }
</style>
