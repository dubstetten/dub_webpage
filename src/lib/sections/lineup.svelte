<script>
  import Picture from "../elements/picture.svelte";
  import fun from "$lib/assets/img/lineup.jpg?width=320;480;640;768&format=webp;avif;jpg";
</script>

<section id="lineup">
  <h1 class="title">Line-Up</h1>
  <p>
    Auf der Dub Stage erwartet euch der beste Sound mit internationalen und
    regionalen Künstlern. Bei der Hofbühne erwarten euch lokale Bands, die du
    vielleicht jetzt noch nicht kennst, aber kennen solltest.
  </p>
  <div class="pic">
    <Picture src={fun} alt="Background Image" />
  </div>
  <p>
    Das Programm untertags ist mit Workshops durchwachsen, diese sind für Groß
    und Klein. Auch heuer gibt es wieder die legendäre Dub-licious Pizza und
    Verköstigung im Hof.
  </p>
</section>

<style>
  .pic {
    margin: 0 0 3rem 0;
  }
  @media screen and (min-width: 480px) {
    .pic {
      display: flex;
      border-radius: 1.5rem;
      overflow: hidden;
      box-shadow: rgb(0, 0, 0, 0.2) 0.5rem 0.5rem 1rem;
    }
  }
</style>
