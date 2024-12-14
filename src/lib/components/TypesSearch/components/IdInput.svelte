<script lang="ts">
    import type {HTMLInputAttributes} from "svelte/elements";

    const { value, ...rest }: HTMLInputAttributes = $props();
    let copied = $state<boolean>(false);

    function copyToClipboard() {
        navigator.clipboard.writeText(value).then(() => {
            copied = true;
        }).catch(err => {
            console.error("Failed to copy text: ", err);
        });
    }
</script>

<div>
    <small><strong>Smart item ID:</strong> (click to copy)</small>
    <input
        {...rest}
        class:copied={copied}
        type="text"
        value={value}
        readonly
        onclick={copyToClipboard}
    />
</div>

<style>
    input {
        cursor: pointer;
        border: 1px solid #222;
        width: 100%;
    }

    input:focus {
        outline: none;
    }

    .copied {
        background: rgba(0, 200, 0, 0.8);
        color: #fff;
    }
</style>