<script>
	import { readable, writable } from "svelte/store";
    import CopyButton from "./CopyButton.svelte";

    export let node;

    const value = readable(node.attributes.text.text)

</script>

<fieldset class="flex flex-col min-w-0">
    <div class="text-sm">
        {node.attributes.required == true ? `${node.meta.label?.text} *` : `${node.meta.label?.text}`}
    </div>
    <div class="flex flex-col relative w-full my-2">
        <code
            class="bg-neutral-50 dark:bg-neutral-950 rounded-lg p-1.5 w-full
    font-medium text-aerospace-600 dark:text-aerospace-400
    overflow-auto text-center
"
        >
            {$value}
        </code>
        <CopyButton value={value} />
    </div>
</fieldset>