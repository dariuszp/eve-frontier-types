<script module>
    import {defineMeta} from "@storybook/addon-svelte-csf";
    import Alert from "$lib/components/Alert/Alert.svelte";
    const { Story } = defineMeta({
        title: 'Feedback/Alert',
        component: Alert,
        tags: ['autodocs'],
        render: (args) => ({
            Component: Alert,
            props: args,
            slots: {
                default: () => args.children || "Default Text", // Dynamically inject the label
            },
        }),
        args: {
            children: 'This is default alert',
        },
        argTypes: {
            children: {
                control: "text",
                description: "Button text",
            },
        },
    });
</script>

<Story name="Default" let:args args={{ onClose: undefined }}>
    {#snippet children(args)}
        <Alert {...args}>{args.children}</Alert>
    {/snippet}
</Story>

<Story name="Closable" let:args args={{ onClose: () => { return new Promise((resolve) => { setTimeout(() => { resolve(null); }, 3000); }) } }}>
    {#snippet children(args)}
        <Alert {...args}>{args.children}</Alert>
    {/snippet}
</Story>

<Story name="Reject closing" let:args args={{ onClose: () => { return new Promise((resolve, reject) => { setTimeout(() => { reject(null); }, 3000); }) } }}>
    {#snippet children(args)}
        <Alert {...args}>{args.children}</Alert>
    {/snippet}
</Story>

<Story name="Info" let:args args={{ type: 'info' }}>
    {#snippet children(args)}
        <Alert {...args}>{args.children}</Alert>
    {/snippet}
</Story>

<Story name="Success" let:args args={{ type: 'success' }}>
    {#snippet children(args)}
        <Alert {...args}>{args.children}</Alert>
    {/snippet}
</Story>

<Story name="Warning" let:args args={{ type: 'warning' }}>
    {#snippet children(args)}
        <Alert {...args}>{args.children}</Alert>
    {/snippet}
</Story>

<Story name="Error" let:args args={{ type: 'error' }}>
    {#snippet children(args)}
        <Alert {...args}>{args.children}</Alert>
    {/snippet}
</Story>