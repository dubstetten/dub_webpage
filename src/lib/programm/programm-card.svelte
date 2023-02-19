<script lang="ts">
  import ProgramCardContent from "./programm-card-content.svelte";
  import type { ProgrammItem } from "$lib/programm/programm";
  export let programItem: ProgrammItem;
</script>

<div class="programm-item-wrapper">
  {#if programItem.startsAt}
    <div class="startsAt">{programItem.startsAt}</div>
  {/if}
  {#if programItem.title || programItem.description || programItem.thumbnail}
    <ProgramCardContent {programItem} />
  {/if}
</div>

<style>
  .programm-item-wrapper {
    position: relative;
    width: 100%;
    max-width: 450px;
    min-height: 150px;
    padding: 0 0.8rem 5rem 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .programm-item-wrapper::before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 1rem;
    bottom: 0;
    background: #8f2d56;
  }
  .programm-item-wrapper:last-child::before {
    display: none;
  }
  .startsAt {
    font-size: 1.5rem;
    font-family: "own";
    color: white;
    background: linear-gradient(-25deg, #0f4c5c 0%, #0f4c5c 100%);
    border: solid 4px #b6c9cd;
    border-top: none;
    padding: 1rem 2rem;
    max-width: 75%;
    margin-bottom: -3.5rem;
    z-index: 2;
    border-radius: 1.2rem;
  }
</style>
