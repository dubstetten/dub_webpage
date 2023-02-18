<script>
  import Picture from "../elements/picture.svelte";
  import flyer from "$lib/assets/img/flyer.jpg?width=320;480;640;768&format=webp;avif;jpg";
</script>

<section id="tickets">
  <h1 class="title">Tickets</h1>
  <a
    href="https://www.eventbrite.com/e/dubstetten-tickets-509314502387"
    class="btn">Sicher dir ein Ticket</a
  >
  <h2>Bald ist es soweit!</h2>
  <p>
    Am Wochenende 21.7.-22.7.2023 wird Dorfstetten, ein kleines Dorf in
    Niederösterreich, wieder zu Dubstetten transformiert! Ein wichtiges Festival
    für alle jene, die das Gute im Leben schätzen und genießen.
  </p>
  <div class="pic">
    <Picture src={flyer} alt="flyer" />
  </div>
</section>

<style>
  .pic {
    margin: 0 0 3rem 0;
  }

  .btn {
    font: 28px own;
    background-color: rgb(255, 128, 69);
    color: black;
    border-radius: 10rem;
    padding: 20px;
    margin: 2rem;
  }
  .btn:hover {
    background-color: rgb(248, 193, 10);
  }
</style>
