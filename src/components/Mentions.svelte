<script>
  import { onMount } from 'svelte';

  export let target;
  export let key;

  const countUrl = `https://webmention.io/api/count?target=${target}`;
  const wmUrl = `https://webmention.io/api/mentions.jf2?target=${target}&token=${key}/`;
  // const allSiteUrl = `https://webmention.io/api/mentions.jf2?domain=jeffcaldwell.is&token=${key}&per-page=100`;
  let mentions = [];
  $: counts = {};

  function getMentions() {
    console.log(target);
    fetch(wmUrl)
      .then((response) => response.json())
      .then((mentionsData) => {
        // console.log({ mentionsData });
        mentions = [...mentionsData.children];
        console.log({ mentions });
      })
      .catch((error) => console.error(error));
  }

  function getCounts() {
    fetch(countUrl)
      .then((response) => response.json())
      .then((countData) => {
        // console.log({ countData });
        counts = { ...countData };
      })
      .catch((error) => console.error(error));
  }

  // function getAllMentions() {
  //   fetch(allSiteUrl)
  //     .then((response) => response.json())
  //     .then((allMentionsData) => console.log({ allMentionsData }))
  //     .catch((error) => console.error(error));
  // }

  onMount(() => {
    getMentions();
    getCounts();
    // getAllMentions();
  });
</script>

<section class="mentions-container flow" id="web-mentions">
  <h2>WebMentions</h2>

  <div class="mentions">
    {#if mentions.length === 0}
      <div>
        <p>No mentions yet</p>
        <a href="https://twitter.com/intent/tweet/?text=Check%20out%20{target}"> Say something about it! </a>
      </div>
    {:else}
      <ul class="flow">
        {#each mentions as mention}
          <li>
            <article class="mention">
              <a href={mention.author.url} target="_blank">
                <img
                  src={mention.author.photo}
                  class="mention-avatar"
                  width="48"
                  height="48"
                  alt={mention.author.name}
                />
              </a>
              <div class="mention-meta">
                {mention.author.name}
                <a href={mention.url} target="_blank">
                  {#if mention['wm-property'] === 'like-of'}
                    liked this
                  {:else if mention['wm-property'] === 'repost-of'}
                    shared this
                  {:else if mention['wm-property'] === 'mention-of'}
                    mentioned this
                  {:else}
                    replied
                  {/if}
                </a>
                on
                <time
                  >- {new Date(mention['wm-received']).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}</time
                >
              </div>
              {#if mention['wm-property'] === 'in-reply-to'}
                <blockquote>{@html mention.content.html}</blockquote>
              {:else if mention['wm-property'] === 'mention-of'}
                <p>{@html mention.content.html}</p>
              {/if}
            </article>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</section>

<style>
  .mentions-container {
    --flow-space: var(--space-2xs-xs);
  }

  .mentions {
    --flow-space: var(--space-xs-s);
  }

  .mention {
    display: flex;
    flex-direction: column;
    gap: var(--space-2xs-xs);
    border: 2px solid var(--foreground);
    padding: var(--space-2xs-xs);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  .mention-avatar {
    border-radius: 50%;
  }
</style>
