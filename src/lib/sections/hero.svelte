<script>
  import logo from "$lib/assets/img/logo_baumkreis.svg";
  import hero2 from "$lib/assets/img/hero2.jpg";
</script>

<section id="hero">
  <div class="background-image" />

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
    background-size: cover;
    overflow: hidden;
    background-image: url("src/lib/assets/img/hero2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    background-repeat: no-repeat;
    align-items: center;
    padding: 2rem;
    position: relative;
  }

  #hero .background-image {
    position: absolute;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background-size: cover;
    z-index: 1;
    background-image: radial-gradient(#4d493f, #958271, #0f4c5c);
    opacity: 0.5;
  }

  .wrapper {
    justify-content: center;
    z-index: 1;
    color: #ffffff;
    max-width: 80%;
  }

  img {
    width: 100%;
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
