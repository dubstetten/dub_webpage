<script>
  import OpenMap from "../map/open-map.svelte";
  import Picture from "../elements/picture.svelte";
  import eichhorn from "$lib/assets/img/eichhorn_icon.png?width=320;480;640;768&format=webp;avif;jpg";
  import danubian from "$lib/assets/img/danubian_icon.jpeg?width=320;480;640;768&format=webp;avif;jpg";
  import head from "$lib/assets/img/kontakt.jpg?width=320;480;640;768&format=webp;avif;jpg";
</script>

<section class="bg-lila">
  <h1 class="title">Contact</h1>
  <h2>Verein BELE</h2>
  <p>
    <b>
      Verein zur Förderung und Bewusstseinsbildung für ein glückliches Leben
    </b>
  </p>
  <p>
    Wimbergeramt 22
    <br />
    4392 Dorfstetten
  </p>
  <div class="logos">
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
  </p>

  <a class="logos" href="https://eichhornhof.at/index.html">
    <Picture src={eichhorn} alt="Eichhornhof" />
  </a>
</section>
<section class="bg-lila">
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
  <a
    class="logos"
    href="https://instagram.com/danubian_dub_soundsystem?igshid=YmMyMTA2M2Y="
  >
    <Picture src={danubian} alt="Danubian Dub" />
  </a>
</section>

<style>
  p {
    text-align: center;
  }

  .logos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    border-radius: 50%;
    overflow: hidden;
    max-width: 400px;
  }
</style>
