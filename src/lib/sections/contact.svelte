<script>
  import OpenMap from "../map/open-map.svelte";
  import Picture from "../elements/picture.svelte";
  import eichhorn from "$lib/assets/img/eichhorn.png?width=320;480;640;768&format=webp;avif;jpg";
  import danubian from "$lib/assets/img/danubian_icon.jpeg?width=320;480;640;768&format=webp;avif;jpg";
  import head from "$lib/assets/img/kontakt.jpg?width=320;480;640;768&format=webp;avif;jpg";
</script>

<section class="bg-lila">
  <h1 class="title">Contact</h1>
  <h2>Organisation</h2>
  <p>
    Das Dubstetten Festival ist ein Cooperatives Festival des Verein BELE's,
    welcher erfolgreich mit dem Eichhornhof und dem Danubian Dub Soundsystem
    zusammenarbeitet.
  </p>
  <p>
    Falls du etwas zum Festival beitragen möchtest, kontaktiere den Verein BELE,
    falls du dich als Dub-Artist einbringen möchtest, wende dich an das Danubian
    Dub Soundsystem.
  </p>
  <h2>Verein BELE</h2>
  <p>
    <b>
      Verein zur Förderung und Bewusstseinsbildung für ein glückliches Leben
    </b><br />
    Unsere Initiative zur Förderung von emotionaler Gesundheit soll dazu beitragen,
    das Bewusstsein für die Bedeutung von mentaler und emotionaler Gesundheit zu
    erhöhen. Wir möchten Menschen dabei unterstützen, ihre inneren Ressourcen zu
    entdecken und ihre emotionale Gesundheit zu stärken, um ein erfülltes und glückliches
    Leben führen zu können.
  </p>
  <p>
    Wimbergeramt 22
    <br />
    4392 Dorfstetten
    <br />
    <a href="mailto:verein-bele@posteo.net">verein-bele@posteo.net</a>
  </p>
  <div class="pic">
    <Picture src={head} alt="Eichhornhof" />
  </div>
</section>
<section class="bg-gelb">
  <h2>Eichhornhof</h2>
  <h3>Gemüse mit Herz</h3>

  <p>
    <b> Gemüsehandwerk aus dem Waldviertel </b>
    <br />
    Wir vom Eichhornhof haben uns vor 2 Jahren der Landwirtschaft zugewandt, mit
    dem Wunsch sinnvolle Arbeit zu tun und gut mit der Erde umzugehen.
  </p>
  <p>
    Wimbergeramt 22
    <br />
    4392 Dorfstetten
    <br />
    <a href="https://eichhornhof.at/index.html"> Besuche unsere Hompage </a>
  </p>

  <div class="pic">
    <Picture src={eichhorn} alt="Eichhornhof" />
  </div>
</section>
<section class="bg-orange">
  <h2>Danubian Dub <br />Soundsystem</h2>
  <p>
    DANUBIAN DUB SOUNDSYSTEM ist ein aufstrebendes Sound System aus Wien,
    Österreich.
  </p>
  <p>
    Das Danubian Dub Soundsystem selbst ist ein handgefertigtes Soundsystem, das
    maßgeschneidert wurde, um mit klanglicher Perfektion eine solide und massive
    Bassleistung zu erreichen. Wir sind der Meinung, dass Lautsprecher auf eine
    bestimmte Art und Weise gebaut werden können, die zu einem völlig neuen
    Level an Klangqualität führen.
  </p>
  <a href="https://instagram.com/danubian_dub_soundsystem?igshid=YmMyMTA2M2Y=">
    Folge uns auf Instagram
  </a>
  <br />
  <div class="pic">
    <Picture src={danubian} alt="Danubian Dub" />
  </div>
</section>

<style>
  p {
    text-align: center;
  }
  .pic {
    margin: 0;
  }
  a {
    text-decoration: underline;
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
</style>
