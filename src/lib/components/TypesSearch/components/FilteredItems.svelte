<script lang="ts">
    import type {Item} from "$lib/typesSearch/extractFilters";
    import Blockchain from "$lib/types/blockchain";
    import IdInput from "$lib/components/TypesSearch/components/IdInput.svelte";
    import Button from "$lib/components/Button/Button.svelte";

    const {
        selectedGroups,
        selectedCategories,
        items,
    } = $props<{
        selectedCategories: number[];
        selectedGroups: number[];
        items: Item[];
    }>();

    let textFilter = $state('');

    function shouldDisplay(item: Item) {
        const categoryId = item[Blockchain.Types.TraitTypeEnum.CATEGORY_ID] as number;
        const groupId = item[Blockchain.Types.TraitTypeEnum.GROUP_ID] as number;
        const name = (item.name).trim().toLowerCase();
        const description = (item.description ?? '').trim().toLowerCase();
        const smartItemId = item.smartItemId.trim().toLowerCase();
        const normalizedTextFilter = textFilter.trim().toLowerCase();
        return (
            (selectedCategories.length === 0 || selectedCategories.includes(categoryId)) &&
            (selectedGroups.length === 0 || selectedGroups.includes(groupId)) &&
            (normalizedTextFilter.length === 0 || (name.includes(normalizedTextFilter) || description.includes(normalizedTextFilter) || smartItemId.includes(normalizedTextFilter)))
        )
    }

    function clearTextFilter() {
        textFilter = '';
    }
</script>

<div>
    <div class="search">
        Search:
        <input type="search" bind:value={textFilter}>
        <Button active={textFilter.trim().length > 0} onclick={clearTextFilter}>&times;</Button>
    </div>

    <div class="items">
        {#each items as item}
            {#if shouldDisplay(item)}
                <div class="item" data-id={item.smartItemId}>
                    <h4>{item.name}</h4>
                    <div>
                        {#if item.description}
                            <p>{item.description}</p>
                        {/if}
                    </div>
                    <IdInput value={item.smartItemId} />
                </div>
            {/if}
        {/each}
    </div>
</div>

<style>
    .search {
        font-size: 1.5rem;
        display: grid;
        grid-template-columns: max-content 1fr max-content;
        gap: 16px;
        padding-bottom: 8px;
        padding-right: 8px;
    }

    .items {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: max-content;
        gap: 8px;
    }

    h4 {
        margin: 0 0 8px 0;
    }

    .item {
        display: grid;
        grid-template-rows: max-content 1fr max-content;
        background: #efefef;
        border: 1px #222;
        padding: 8px;
    }
</style>