<script lang="ts">
    import Button from "$lib/components/Button/Button.svelte";
    import type {Group} from "$lib/typesSearch/extractFilters";

    const {
        availableGroups,
        selectedGroups,
        selectedCategories,
        toggle
    } = $props<{
        selectedCategories: number[];
        availableGroups: Group[];
        selectedGroups: number[];
        toggle: (id: number) => void;
    }>();
</script>

{#each availableGroups as group}
    {#if selectedCategories.length === 0 || selectedCategories.includes(group.categoryId)}
        <Button class="box" data-id={group.id} active={selectedGroups.includes(group.id)} onclick={() => {
            toggle(group.id);
        }}>{group.name}</Button>
    {/if}
{/each}