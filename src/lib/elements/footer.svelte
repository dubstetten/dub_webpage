<script>
  import comeon from "$lib/assets/img/come_on.webp";
</script>

<footer>
  <ul>
    <li><a href="impressum"> Impressum</a></li>
    <li><a href="datenschutz"> Datenschutz</a></li>
  </ul>
  <a href="https://www.come-on.at/"
    ><img src={comeon} alt="dubstetten home" id="logo" /></a
  >
</footer>

<style>
  img {
    width: 13rem;
    height: auto;
    border-radius: 0.2rem;
  }
  footer {
    display: flex;

    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #0f4c5c;
    padding: 0rem 1rem;
    z-index: 100;
  }

  ul {
    display: flex;
  }
  li {
    list-style-type: none;
    margin: 0.4rem 0.5rem;
  }
  a {
    color: rgb(255, 255, 255);
    text-decoration: none;

    text-align: center;
  }
</style>
