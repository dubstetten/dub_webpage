<script>
  import Picture from "../elements/picture.svelte";
  import flyer from "$lib/assets/img/flyer.jpg?width=320;480;640;768&format=webp;avif;jpg";
</script>

<section id="tickets">
  <h1 class="title">Tickets</h1>
  <p>
    <b>Early-Bird Wochenendpass:</b> 40€<br /><br />
    Tagestickets sind nur an der Abendkassa erhältlich<br />
    <b>Tagesticket:</b> 25€<br />
    <b>Familienticket Samstag:</b> 10€ (13.00-20.00)
  </p>
  <a
    href="https://www.eventbrite.com/e/dubstetten-tickets-509314502387"
    class="btn">Sicher dir ein Ticket</a
  >
  <p>
    Am Wochenende 21. 7. - 22. 7. 2023 wird Dorfstetten, ein kleines Dorf in
    Niederösterreich, wieder zu Dubstetten transformiert. Ein familiäres und
    gemütliches Festival für alle jene, die das Gute im Leben schätzen und
    genießen.
  </p>
  <div class="pic">
    <Picture src={flyer} alt="flyer" />
  </div>
  <h3>
    Wir beachten und befolgen das niederösterreichische Jugendschutzgesetz.
  </h3>
  <p>
    <b>Darüber hinaus haben wir uns auf folgende eigene Regelung geeinigt:</b> Bis
    zum vollendeten 16. Lebensjahr ist der Besuch des Festivals nur mit einer erziehungsberechtigten
    Person erlaubt. Bis zum vollendeten 18. Lebensjahr ist der Besuch des Festivals
    nur mit einer Begleitperson erlaubt.
  </p>
</section>

<style>
  .pic {
    margin: 0;
  }
  @media screen and (min-width: 480px) {
    .pic {
      margin: 0 0 3rem 0;
      display: flex;
      border-radius: 1.5rem;
      overflow: hidden;
      box-shadow: rgb(0, 0, 0, 0.2) 0.5rem 0.5rem 1rem;
    }
  }
  .btn {
    font-weight: bold;
    font-size: 2rem;
    margin: 3rem 0 3rem 0;
    cursor: pointer;
    padding: 0.1em 0.3em;
  }

  /* CSS */
  .btn {
    background: #ff754b;
    border: 1px solid #ff754b;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 2px 4px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 25px;
    font-weight: 800;
    line-height: 16px;
    min-height: 40px;
    outline: 0;
    padding: 12px 14px;
    text-align: center;
    text-rendering: geometricprecision;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
  }

  .btn:hover,
  .btn:active {
    background-color: initial;
    background-position: 0 0;
    color: #ff4742;
  }

  .btn:active {
    opacity: 0.5;
  }
</style>
