<script>
    import { createPinInput, melt } from '@melt-ui/svelte';

    export let node;

    const {
		elements: { root, input, hiddenInput }
	} = createPinInput({
		name: node.attributes.name
	});
</script>

<fieldset class="flex flex-col gap-4">
    <div class="text-sm">
        {node.attributes.required == true ? `${node.meta.label?.text} *` : `${node.meta.label?.text}`}
    </div>
    <div use:melt={$root} class="self-center flex items-center gap-2 flex-wrap">
        {#each Array.from({ length: 6 }) as _}
        <input
            class="
                dark:bg-neutral-900
                focus:outline-none focus:ring-0 focus:border-2 focus:border-aerospace-600
                text-center border
                size-10
                sm:size-12 rounded-md"
            use:melt={$input()}
        />
        {/each}
    </div>
    <input use:melt={$hiddenInput} />
</fieldset>