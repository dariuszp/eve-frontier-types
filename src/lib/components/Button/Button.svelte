<script lang="ts">
    import type {HTMLButtonAttributes} from "svelte/elements";

    interface PropsInterface extends HTMLButtonAttributes {
       active?: boolean;
    }
    const { children, active, ...props }: PropsInterface = $props();
</script>
<button {...props} class:active={active}>{@render children?.()}</button>

<style>
    button {
        padding: 0.5rem 1rem;
        background-color: transparent;
        border: 1px solid currentColor;
        border-radius: 4px;
        color: inherit;
        cursor: pointer;
        font-size: 0.9rem;
    }

    button:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .active {
        background-color: rgba(0, 0, 0, 0.75);
        color: rgba(255, 255, 255, 0.85);
    }

    .active:hover {
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 0.85);
    }
</style>