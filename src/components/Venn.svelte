<script context="module" lang="ts">
  export type Venn = {
    name: string;
    subsets: VennSet;
  };

  export type VennSet = {
    name: string;
    values: Set<any>;
  };
</script>

<script>
  export let sets;
</script>
