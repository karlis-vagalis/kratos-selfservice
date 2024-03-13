<script>
	import { ClipboardCopy, ClipboardCheck } from 'lucide-svelte';

    export let value;

    let copied;

    async function copyToClipboard() {

        copied = true;

        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText($value);
        } else {
            // Use the 'out of viewport hidden text area' trick
            const textArea = document.createElement("textarea");
            textArea.value = $value;
                
            // Move textarea out of the viewport so it's not visible
            textArea.style.position = "absolute";
            textArea.style.left = "-999999px";
                
            document.body.prepend(textArea);
            textArea.select();

            try {
                document.execCommand('copy');
            } catch (error) {
                console.error(error);
            } finally {
                textArea.remove();
            }
        }

		setTimeout(() => {
			copied = false;
		}, 3000);
    }
</script>

<button
	type="button"
	class="group absolute end-2 top-1/2 -translate-y-1/2 border bg-white dark:bg-neutral-950 rounded-lg p-1 inline-flex items-center justify-center"
    on:click={copyToClipboard}
>   
    {#if copied != true}
        <ClipboardCopy
            class="min-h-4 min-w-4 h-4 w-4 max-h-4 max-w-4 group-hover:scale-110 transition-all"
        />
    {:else}
        <ClipboardCheck
            class="min-h-4 min-w-4 h-4 w-4 max-h-4 max-w-4 group-hover:scale-110 transition-all text-emerald-600"
        />
    {/if}
</button>
