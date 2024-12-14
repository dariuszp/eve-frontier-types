<script lang="ts">
    import type {Category} from "$lib/typesSearch/extractFilters";
    import Button from "$lib/components/Button/Button.svelte";

    const {
        availableCategories,
        selectedCategories,
        toggle
    } = $props<{
        availableCategories: Category[];
        selectedCategories: number[];
        toggle: (id: number) => void;
    }>();
</script>

{#each availableCategories as category}
    <Button data-id={category.id} active={selectedCategories.includes(category.id)} onclick={() => {
        toggle(category.id);
    }}>{category.name}</Button>
{/each}