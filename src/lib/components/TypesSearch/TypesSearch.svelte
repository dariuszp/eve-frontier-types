<script lang="ts">
    import { onMount } from 'svelte';
    import BlockchainApiClient from "$lib/api/blockchainApiClient";
    import Blockchain from "$lib/types/blockchain";
    import * as m from '$lib/paraglide/messages'
    import Alert from "$lib/components/Alert/Alert.svelte";
    import Loading from "$lib/components/Loading/Loading.svelte";
    import {
        extractSearchData,
        type ExtractSearchResult
    } from "$lib/typesSearch/extractFilters";
    import CategoryFilter from "$lib/components/TypesSearch/components/CategoryFilter.svelte";
    import GroupFilter from "$lib/components/TypesSearch/components/GroupFilter.svelte";

    const CACHE_KEY = 'blockchain_types';
    let data = $state<Blockchain.Types.Response>({});
    let loading = $state<boolean>(true);
    let error = $state<boolean>(false);

    let filters: ExtractSearchResult = $state<ExtractSearchResult>({
        categories: [],
        groups: [],
        items: []
    });

    let selectedCategories: number[] = $state([]);
    let selectedGroups: number[] = $state([]);

    async function getTypes() {
        const client = new BlockchainApiClient();

        loading = true;
        error = false;

        data = await client.getTypes();
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    }

    async function getCachedTypes() {
        try {
            data = JSON.parse(localStorage.getItem(CACHE_KEY) ?? '');
        } catch (error) {
            await getTypes();
        }
    }

    function toggleCategory(id: number) {
        const index = selectedCategories.indexOf(id);
        if (index === -1) {
            selectedCategories.push(id);
        } else {
            delete selectedCategories[index];
        }
    }

    function toggleGroup(id: number) {
        const index = selectedGroups.indexOf(id);
        if (index === -1) {
            selectedGroups.push(id);
        } else {
            delete selectedGroups[index];
        }
    }

    onMount(async () => {
        try {
            await getCachedTypes();
            filters = extractSearchData(data);
        } catch (error) {
            error = true;
        } finally {
            loading = false;
        }
    });
</script>

{#if error}
    <Alert onClose={getTypes}>{m.blockchain_api_types_error()}</Alert>
{/if}

{#if loading}
    <Loading />
{/if}

{#if Object.keys(data).length > 0}
    <div class="grid-container">
        <div class="header"><CategoryFilter availableCategories={filters.categories} selectedCategories={selectedCategories} toggle={toggleCategory} /></div>
        <div class="left-column"><GroupFilter selectedCategories={selectedCategories} availableGroups={filters.groups} selectedGroups={selectedGroups} toggle={toggleGroup} /></div>
        <div class="right-column">Right</div>
    </div>
{/if}

<style>
    .grid-container {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: max-content 1fr;
        min-height: 100%;
        gap: 8px;
    }

    .header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        grid-column: span 2;
        background-color: rgba(197, 43, 239, 0.2);
        padding: 1rem;
        gap: 8px;
    }

    .left-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: min-content;
        gap: 8px;
        background-color: rgba(0, 119, 255, 0.2);
        padding: 1rem;
        justify-items: stretch;
        align-items: start;
    }

    .right-column {
        padding: 1rem;
    }
</style>