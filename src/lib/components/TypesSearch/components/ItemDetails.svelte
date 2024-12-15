<script lang="ts">
    import type {Item} from "$lib/typesSearch/extractFilters";
    import IdInput from "$lib/components/TypesSearch/components/IdInput.svelte";
    import Blockchain from "$lib/types/blockchain";

    const { item }: { item: Item } = $props();
</script>

<div class="item" data-id={item.smartItemId}>
    <h4>{item.name}</h4>
    <div>
        {#if item.description}
            <p>{item.description}</p>
        {/if}
    </div>
    <table>
        <tbody>
            <tr>
                <td>MASS:</td><td>{item[Blockchain.Types.TraitTypeEnum.MASS]}</td>
                <td>VOLUME:</td><td>{item[Blockchain.Types.TraitTypeEnum.VOLUME]}</td>
                <td>RADIUS:</td><td>{item[Blockchain.Types.TraitTypeEnum.RADIUS]}</td>
            </tr>
            <tr>
                <td>CATEGORY:</td><td>{item[Blockchain.Types.TraitTypeEnum.CATEGORY_NAME]} ({item[Blockchain.Types.TraitTypeEnum.CATEGORY_ID]})</td>
                <td>GROUP:</td><td>{item[Blockchain.Types.TraitTypeEnum.GROUP_NAME]} ({item[Blockchain.Types.TraitTypeEnum.GROUP_ID]})</td>
                <td>PORTION SIZE:</td><td>{item[Blockchain.Types.TraitTypeEnum.PORTION_SIZE]}</td>
            </tr>
        </tbody>
    </table>
    <IdInput value={item.smartItemId} />
</div>

<style>
    h4 {
        margin: 0 0 8px 0;
    }

    p {
        margin: 0;
        text-align: justify;
    }

    .item {
        display: grid;
        grid-template-rows: max-content 1fr 1fr max-content;
        background: #efefef;
        border: 1px solid #b1b1b1;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
        padding: 8px;
    }

    .item:hover {
        background: #d8d8d8;
        border: 1px solid #9a9a9a;
    }

    table {
        border-collapse: collapse;
        font-size: small;
        font-family: Arial, sans-serif;
        border: 1px solid #ccc;
        margin: 0; /* Remove extra margin */
    }

    tr {
        border-bottom: 1px solid #ddd;
    }

    td {
        padding: 4px 8px; /* Compact padding */
        text-align: left;
    }

    /* Odd cells (labels) in each row */
    td:nth-child(6n+1),
    td:nth-child(6n+3),
    td:nth-child(6n+5) {
        font-weight: bold;
        background: #f0f0f0; /* Light gray for labels */
        color: #333;
    }

    /* Even cells (values) in each row */
    td:nth-child(6n+2),
    td:nth-child(6n+4),
    td:nth-child(6n+6) {
        color: #444; /* Slightly darker gray for values */
        background: #fff;
    }

    /* Hover effect for better readability */
    tr:hover td {
        background: #eaeaea; /* Highlight row on hover */
    }
</style>