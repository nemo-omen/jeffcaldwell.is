<script>
  import { onMount } from 'svelte';
  import Icon from './Icon.svelte';

  export let counts;
  $: data = {};

  $: mentions = 0;
  $: likes = 0;
  $: reposts = 0;
  $: replies = 0;

  onMount(() => {
    // data = { ...counts };
    mentions = counts.mention || 0;
    likes = counts.like || 0;
    reposts = counts.repost || 0;
    replies = counts.reply || 0;
  });
</script>

{#if counts}
  <div class="mentions-count">
    <div class="count">
      <Icon pathName="love" label="Likes" />{likes}
      <span class="icon-title">Likes</span>
    </div>
    <div class="count">
      <Icon pathName="repeat" label="Reposts" />{reposts}
      <span class="icon-title">Reposts</span>
    </div>
    <div class="count">
      <Icon pathName="comment" label="Mentions" />{mentions}
      <span class="icon-title">Mentions</span>
    </div>
    <div class="count">
      <Icon pathName="reply" label="Replies" />{replies}
      <span class="icon-title">Replies</span>
    </div>
  </div>
{/if}

<style>
  .mentions-count {
    display: flex;
    gap: 1em;
  }
  .count {
    display: flex;
    align-items: center;
    gap: 0.25em;
  }
  .icon-title {
    font-size: var(--font-size--100);
  }
</style>
