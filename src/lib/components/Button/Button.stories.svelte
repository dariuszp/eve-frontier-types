<script module>
    import {defineMeta} from "@storybook/addon-svelte-csf";
    import Button from "$lib/components/Button/Button.svelte";
    const { Story } = defineMeta({
        title: "Inputs/Button",
        component: Button,
        tags: ['autodocs'],
        render: (args) => ({
            Component: Button,
            props: args,
            slots: {
                default: () => args.label || "Default Text", // Dynamically inject the label
            },
        }),
        args: {
            children: "Test", // Default button text
        },
        argTypes: {
            children: {
                control: "text",
                description: "Button text",
            },
        },
    });
</script>

<Story name="Default">
    {#snippet children(args)}
        <Button {...args}>{args.children}</Button>
    {/snippet}
</Story>
