<script>
    import OpenMap from "../map/open-map.svelte";
    import Picture from "../elements/picture.svelte";
    import schild from "$lib/assets/img/schild.jpg?width=320;480;640;768&format=webp;avif;jpg";
    import img2 from "$lib/assets/img/dub_2.jpg?width=320;480;640;768&format=webp;avif;jpg";
    import pizza from "$lib/assets/img/pizza.jpg?width=320;480;640;768&format=webp;avif;jpg";
    import nature from "$lib/assets/img/nature.jpg?width=320;480;640;768&format=webp;avif;jpg";
    import dog from "$lib/assets/img/dog.jpg?width=320;480;640;768&format=webp;avif;jpg";
    import flyer from "$lib/assets/img/flyer.jpg?width=320;480;640;768&format=webp;avif;jpg";
</script>

<section class="bg-gelb">
    <h1 class="title">Info</h1>
    <h2>Das erwartet dich</h2>
    <h3>Open Air Soundsystem Stage</h3>
    <p>
        Auf der Dub Stage erwartet euch der beste Sound vom Danubian Dub
        Soundsystem mit internationalen und regionalen Künstlern.
    </p>
    <h3>Open Air Hof und Jam Bühne</h3>
    <p>
        Auf der Hof Bühne werden Lokale Künstler auftreten mit anschlißender Jam
        möglichkeit.
    </p>
    <div class="pic">
        <Picture src={schild} alt="wegweiser" />
    </div>
    <h3>Workshops</h3>
    <p>
        Das Programm untertags ist mit Workshops durchwachsen, diese sind für
        Groß und Klein.
    </p>
    <h3>Kleidertausch</h3>
    <p>Nimm deine Kleidung mit und Tausch sie gegen andere Klamotten ein.</p>
    <h3>Kinderprogramm</h3>
    <p>????</p>
    <h3>Soul Food</h3>
    <p>
        Es gibt eine Küche mit Vegetarischen und Veganen Speisen, und auch heuer
        gibt es wieder die legendäre Dub-licious Pizza aus dem Holzofen.
    </p>
    <div class="pic">
        <Picture src={pizza} alt="holzofen pizza" />
    </div>
</section>
<section class="bg-orange">
    <h2>Entspanne</h2>
    <ul>
        <li>
            Erlebe eine erfrischende Dusche auf unserem Festival und kühlt euch
            für weitere Abenteuer ab.
        </li>
        <li>
            Bitte erkundige dich beim Check-in, welches Campinggebiet zu deinen
            Bedürfnissen passt.
        </li>
        <li>Es gibt einen Teich im Ort, den man zu Fuß erreichen kann.</li>
        <li>
            Sowohl Lagerfeuer als auch das Rauchen ist in Waldrandnähe ist
            untersagt!
        </li>
        <li>
            Denk daran, dass es in der Region, wo das Event stattfindet, nur
            Empfang für A1 Kunden gibt. Also lass den Stress zu Hause, erlaube
            deiner Seele zu baumeln und gönn dir eine Auszeit vom Alltag.
        </li>
    </ul>
    <div class="pic">
        <Picture src={img2} alt="natur" />
    </div>
    <h2>Respektiere die Natur</h2>
    <ul>
        <li>Bitte trenne deinen Müll bei der Müllinsel.</li>

        <li>Zigaretten gehören in die (T)Aschenbecher.</li>
        <li>
            Sowohl Lagerfeuer als auch das Rauchen ist in Waldrandnähe ist
            untersagt!
        </li>
    </ul>
    <div class="pic">
        <Picture src={nature} alt="respekt schild" />
    </div>
    <h2>Konsens</h2>
    <ul>
        <li>
            Bedenke, dass am Festivalgelände ein landwirtschaftlicher Betrieb
            ansässig ist, darum bitten wir dich, abgesperrte private Flächen zu
            respektieren.
        </li>
        <li>
            Jeder ist willkommen! Lade deine liebsten Freunde ein, um mit uns
            ein bezauberndes Wochenende gefüllt mit Musik, Spiel und Genuss zu
            verbringen.
        </li>
        <li>
            Das Aufstellen von eigenen Musikanlagen am Campingplatz ist leider
            nicht erlaubt.
        </li>
        <li>
            <b>Verzichte auf Fotos am Festivalgelände!</b>
            <br />
            Fotos sind immer eine schöne Erinnerung, aber bedenke bitte, dass es
            Menschen gibt, die sich nicht gerne in öffentlichen Netzwerken wiederfinden
            wollen. Wir bitten dich daher, Rücksicht darauf zu nehmen und die Zeit
            am Festival bestenfalls ohne Handy zu genießen.
        </li>
        <li>
            Denk daran, dass Kinder schlafen könnten, also verhalte dich nachts
            möglichst ruhig am Campingplatz.
        </li>
        <li>
            Sowohl Lagerfeuer als auch das Rauchen ist in Waldrandnähe ist
            untersagt!
        </li>
        <li>
            <b>Hunde bitte an die Leine!</b>
            <br />
            Bitte beachte, dass sich andere Menschen durch freilaufende Hunde gestört
            oder bedroht fühlen können, daher den Hund bitte am Festivalgelände an
            der Leine halten.
        </li>
    </ul>
    <div class="pic">
        <Picture src={dog} alt="hunde" />
    </div>
</section>

<section class="bg-blau">
    <h2>Organisation</h2>
    <p>
        Das Dubstetten Festival wird von dem gemeinnützigen Verein Bele
        organisiert, der Verein dient der Förderung und Bewusstseinsbildung für
        ein glückliches Leben. Wir freuen uns auf ein schönes Festival mit euch.
    </p>

    <h3>
        Du bist interessiert? Dann sicher dir ein <a
            href="https://www.eventbrite.com/e/dubstetten-tickets-509314502387"
            >Ticket</a
        > für das Dubstetten Festival am 21. & 22. Juli 2023.
    </h3>
    <OpenMap />
</section>

<style>
    .pic {
        margin: 0 0 3rem 0;
    }
    a {
        text-decoration-line: underline;
        padding: 0.1rem;
        border-radius: 0.5rem;
    }
    a:hover {
        background-color: rgb(248, 193, 10);
    }
    ul,
    li {
        margin-bottom: 2rem;
        padding: 0 20px;
        text-align: justify;
    }
</style>
