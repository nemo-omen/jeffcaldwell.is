<script>
  import { onMount } from 'svelte';
  import MentionsCount from './MentionsCount.svelte';

  export let target;

  let page = 0;
  let counts;
  const countUrl = `https://webmention.io/api/count.json?target=${target}/`;
  const wmUrl = `https://webmention.io/api/mentions?page=${page}&per-page=50&target=${target}/`;

  let mentions = [];
  let fetchState = 'fetching';

  onMount(() => {
    counts = fetch(countUrl)
      .then((res) => res.json())
      .then((x) => x.type);

    getMentions().then((x) => {
      console.log(x);
      mentions = x;
      fetchState = 'done';
    });
  });

  function getMentions() {
    return fetch(wmUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data.links.filter((mention) => mention.activity.type !== 'like');
      });
  }

  const fetchMore = () => {
    page += 1;

    getMentions().then((data) => {
      console.log(data);
      if (data.length) {
        mentions = [...mentions, ...data];
      } else {
        fetchState = 'nomore';
      }
    });
  };
</script>

<section class="mentions-container flow" id="web-mentions">
  <h2>WebMentions</h2>

  <MentionsCount />

  <div class="mentions flow">
    {#if mentions.length === 0}
      <div>
        <p>No mentions yet</p>
        <a href="https://twitter.com/intent/tweet/?text=Check%20out%20{target}"> Say something about it! </a>
      </div>
    {:else}
      <ul>
        {#each mentions as mention}
          <li>
            <div class="mention-data">
              <a href={mention.data.url} target="_blank">
                {mention.data.author.name}
              </a>
              <time>- {mention.data.published}</time>
              <p>{@html mention.activity.sentence_html}</p>
            </div>
          </li>
        {/each}
      </ul>
    {/if}
    {#if fetchState !== 'nomore'}
      <button class="fetch-more" on:click={fetchMore}>Load More Mentions</button>
    {/if}
  </div>
</section>

<style>
  .mentions-container {
    --flow-space: var(--space-2xs-xs);
  }
  li {
    list-style-type: none;
  }
  button {
    padding: 0.125em 0.25em;
  }
</style>
