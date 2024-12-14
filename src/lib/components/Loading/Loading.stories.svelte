<script module>
    import Loading from "$lib/components/Loading/Loading.svelte";
    import {defineMeta} from "@storybook/addon-svelte-csf";
    const { Story } = defineMeta({
        title: 'Feedback/Loading',
        component: Loading,
        tags: ['autodocs'],
        parameters: {
            layout: 'fullscreen',
        }
    });
</script>

<Story name="Default" />