<script lang="ts">
  import Picture from "$lib/elements/picture.svelte";
  import type { ProgrammItem } from "$lib/programm/programm";
  export let programItem: ProgrammItem;
</script>

<div class="programm-item">
  {#if programItem.thumbnail}
    <div class="thumb">
      {#if programItem.slug}
        <a href={`lineup/${programItem.slug}`}>
          <Picture src={programItem.thumbnail} alt={programItem.title} />
        </a>
      {:else}
        <Picture src={programItem.thumbnail} alt={programItem.title} />
      {/if}
    </div>
  {/if}
  <div class="content">
    {#if programItem.title}
      <h2>{programItem.title}</h2>
    {/if}
    {#if programItem.description}
      <p>{programItem.description}</p>
    {/if}
  </div>
</div>

<style>
  .programm-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fb8b24;
    background-image: linear-gradient(132deg, #fb8b24 0%, #fb8b24 100%);

    margin: 1rem 1rem;
    overflow: hidden;
    box-shadow: rgb(0, 0, 0, 0.2) 0.5rem 0.5rem 1rem;
    width: 100%;
    border-radius: 1.2rem;
    position: relative;
  }
  .content {
    padding: 2rem;
  }
  .content:first-child {
    padding-top: 3rem;
  }
  .thumb {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 1.75rem;
    font-family: "own";
    font-size: 3rem;
    color: #222;
  }
  .programm-item:has(.thumb) .content h2 {
    margin-top: 0;
  }
  p {
    text-align: center;
    font-size: 1.25rem;
    color: #222;
  }
</style>
