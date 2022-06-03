<script>
  import Icon from './Icon.svelte';
  export let target;
  const wmCountUrl = `https://webmention.io/api/count.json?target=${target}`;

  const counts = fetch(wmCountUrl)
    .then((response) => response.json())
    .then((x) => x.type);
</script>

<div class="mentions-count">
  {#await counts}
    <p>Loading Counts</p>
  {:then data}
    {#if data === undefined}
      <p>Failed to Load Counts</p>
    {:else}
      <div class="count">
        <Icon pathName="love" />{data.like + data.repost || 0}
      </div>
      <div class="count">
        <Icon pathName="comment" />{data.mention + data.reply || 0}
      </div>
    {/if}
  {/await}
</div>

<style>
  .mentions-count {
    display: flex;
    gap: 1em;
  }
  .count {
    display: flex;
    gap: 0.25em;
  }
</style>
