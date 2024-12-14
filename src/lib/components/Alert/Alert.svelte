<script lang="ts">
    import Loading from "$lib/components/Loading/Loading.svelte";
    import Button from "$lib/components/Button/Button.svelte";

    const { children, type, onClose } = $props<{
        children?: any,
        type?: 'success' | 'info' | 'error' | 'warning',
        onClose?: (() => any | Promise<any>)
    }>();

    let errorMessage = $state('');
    let isLoading = $state(false);

    async function close() {
        if (onClose) {
            errorMessage = '';
            const response = onClose();
            if (response instanceof Promise) {
                isLoading = true;
                try {
                    await response;
                } catch (error) {
                    errorMessage = (error as Error)?.message ?? 'Unknown error';
                } finally {
                    isLoading = false;
                }
            }
        }
    }
</script>

<div class="alert {type || 'info'}">
    {#if errorMessage}<p class="closeError">{errorMessage}</p>{/if}
    <p class="message">
        {#if type === 'success'}
            ✅
        {:else if type === 'error'}
            ❌
        {:else if type === 'warning'}
            ⚠️
        {:else}
            ℹ️
        {/if}
        {@render children?.()}
    </p>
    {#if onClose}
        {#if isLoading}
            <Loading />
        {:else}
            <Button onclick={close}>OK</Button>
        {/if}
    {/if}
</div>

<style>
    .closeError {
        color: red;
        font-weight: bold;
    }

    .alert {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        margin: 1rem auto;
        font-size: 1rem;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        max-width: max-content;
    }

    .info {
        background-color: #e6f4fa;
        border: 1px solid #bde2f5;
        color: #31708f;
    }

    .success {
        background-color: #e6f7e6;
        color: #2f8f2f;
        border: 1px solid #d4f2d4;
    }

    .error {
        background-color: #fbeaea;
        border: 1px solid #f5c2c7;
        color: #a42828;
    }

    .warning {
        background-color: #fff4e5;
        border: 1px solid #ffd7a5;
        color: #a97117;
    }

    .message {
        margin: 0;
        font-size: 1rem;
        text-align: center;
    }
</style>