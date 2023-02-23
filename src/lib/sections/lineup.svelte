<script>
  import Picture from "../elements/picture.svelte";
  import fun from "$lib/assets/img/lineup.jpg?width=320;480;640;768&format=webp;avif;jpg";
</script>

<section id="lineup">
  <h1 class="title">Line-Up</h1>
  <p>
    Wir haben für euch ein spannendes Programm mit internationalen und
    regionalen Künstlern zusammengestellt. Auf der Dub Stage werdet ihr den
    besten Sound erleben, der euch tief in die Welt des Dubs eintauchen lässt.
    Also lasst euch von den Klängen mitreißen und tanzt bis zum Morgengrauen.
  </p>
  <div class="pic">
    <Picture src={fun} alt="Background Image" />
  </div>
  <p>
    Auf der Hofbühne gibt es einiges zu entdecken. Hier habt ihr die Chance,
    lokale Artists zu entdecken, von denen ihr vielleicht noch nie gehört habt,
    aber unbedingt hören solltet.
  </p>
  <p>
    Untertags werden verschiedenen Workshops und Aktivitäten angeboten, diese
    bieten für Groß- und Klein Unterhaltung. Hier habt ihr die Möglichkeit eurer
    Kreativität freien Lauf zu lassen, Neues auszuprobieren oder euer Wissen zu
    erweitern.
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
