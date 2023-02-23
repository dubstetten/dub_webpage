<script>
  import Picture from "../elements/picture.svelte";
  import p1 from "$lib/assets/img/gallery/1.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p2 from "$lib/assets/img/gallery/2.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p3 from "$lib/assets/img/gallery/3.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p4 from "$lib/assets/img/gallery/4.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p5 from "$lib/assets/img/gallery/5.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p6 from "$lib/assets/img/gallery/6.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p7 from "$lib/assets/img/gallery/7.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p8 from "$lib/assets/img/gallery/8.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p9 from "$lib/assets/img/gallery/9.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p10 from "$lib/assets/img/gallery/10.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p11 from "$lib/assets/img/gallery/11.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p12 from "$lib/assets/img/gallery/12.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p13 from "$lib/assets/img/gallery/13.jpg?width=320;480;640;768&format=webp;avif;jpg";
  import p14 from "$lib/assets/img/gallery/14.jpg?width=320;480;640;768&format=webp;avif;jpg";
</script>

<section class="bg-orange">
  <h1>Gallery</h1>
  <h2>Dubstetten 2022</h2>
  <div class="grid">
    <div class="pic">
      <Picture src={p1} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p2} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p3} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p4} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p5} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p6} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p7} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p8} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p9} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p10} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p11} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p12} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p13} alt="wegweiser" />
    </div>
    <div class="pic">
      <Picture src={p14} alt="wegweiser" />
    </div>
  </div>
</section>

<style>
  * {
    padding: 1rem;
  }

  .grid {
    max-width: 1200px;
    display: grid;
  }

  @media (min-width: 760px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .grid .pic {
    margin: 0;
    width: 100%;
  }
</style>
