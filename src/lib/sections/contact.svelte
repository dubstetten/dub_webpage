<script>
    import OpenMap from '../map/open-map.svelte';
    import Picture from '../elements/picture.svelte';
    import eichhorn from '$lib/assets/img/eichhorn_icon.png?width=320;480;640;768&format=webp;avif;jpg';
    import danubian from '$lib/assets/img/danubian_icon.jpeg?width=320;480;640;768&format=webp;avif;jpg';
</script>

<section class="bg-blau">
    <h1 class="title">Contact</h1>
    <h2>Verein BELE</h2>
    <p>
        Verein zur Förderung und Bewusstseinsbildung <br /> für ein glückliches Leben
        <br />
        Wimbergeramt 22
        <br />
        4392 Dorfstetten
    </p>
    <hr />
</section>
<section class="bg-rot">
    <h2>Eichhornhof - Gemüse mit Herz</h2>
    <p>
        Wimbergeramt 22
        <br />
        4392 Dorfstetten
        <br />
        Gemüsehandwerk aus dem Waldviertel
        <br />
        Wir vom Eichhornhof haben uns vor 2 Jahren der Landwirtschaft zugewandt, mit dem Wunsch sinnvolle Arbeit zu tun und gut mit der Erde umzugehen.
    </p>
    <a class="logos" href="https://eichhornhof.at/index.html">
        <Picture src={eichhorn} alt="Eichhornhof" />
    </a>
</section>
<section class="bg-lila">
    <h2>Danubian Dub <br />Soundsystem</h2>
    <p>
        DANUBIAN DUB SOUNDSYSTEM is an upcomming sound system, located in Vienna, Austria.
        <br />
        The Danubian Dub Soundsystem itself is a handmade, custom built speakerstack, trying to achieve sonic perfection with a solid, massive bass performance. We think that speakers can be built a certain way, leading to a whole new level of appreciation.
    </p>
    <a class="logos" href="https://instagram.com/danubian_dub_soundsystem?igshid=YmMyMTA2M2Y=">
        <Picture src={danubian} alt="Danubian Dub" />
    </a>
</section>
<section class="bg-orange">
    <OpenMap />
</section>

<style>
    section {
    }

    .logos {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3rem 0;
        border-radius: 50%;
        overflow: hidden;
        max-width: 450px;
    }
</style>
