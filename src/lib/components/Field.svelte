<script lang="ts">
	import { browser } from '$app/environment';
	import type { UiNode } from '@ory/client';
	export let node: UiNode;

	import { ClipboardCopy } from 'lucide-svelte'

	function copyToClipboard(item) {
		var e = document.getElementById('to-be-copied')
		var c = e?.innerText

	}
</script>

{#if node.attributes.type == 'submit'}
	<button
		class="
			w-full py-2 px-2 rounded-lg font-bold mt-8
			bg-aerospace-600 text-white hover:bg-aerospace-700
		"
		type="submit"
		name={node.attributes.name}
		value={node.attributes.value}
	>
		{node.meta.label?.text}
	</button>
{/if}

{#if node.attributes.type == 'button'}
	<button
		class="
			w-full py-2 px-2 rounded-lg font-bold mt-6
			bg-aerospace-600 text-white hover:bg-aerospace-700
		"
		name={node.attributes.name}
		value={node.attributes.value}
		onclick={node.attributes.onclick}
		type="button"
	>
		{node.meta.label?.text}
	</button>
{/if}

{#if node.type == 'script'}
	{#if browser}
		<script
			src={ node.attributes.src }
			async={node.attributes.async}
			referrerpolicy={node.attributes.referrerpolicy}
			crossorigin={node.attributes.crossorigin}
			integrity= {node.attributes.integrity}
			type={node.attributes.type}
			id={node.attributes.id}
			nonce={node.attributes.nonce}
		></script>
	{/if}
{/if}

{#if node.type == 'img'}
	<img
		src={node.attributes.src}
		alt={node.meta.label?.text}
		width={node.attributes.width}
		height={node.attributes.height}
		class="my-3"
	/>
{/if}

{#if node.type == 'text'}
<div class="flex flex-col relative w-full my-2">
	<code
		class="bg-neutral-50 dark:bg-neutral-950 rounded-lg p-1.5 w-full
		font-medium text-aerospace-600 dark:text-aerospace-400
		overflow-auto text-center
	"
		id="to-be-copied"
	>
		{node.attributes.text.text}
	</code>
	<button
		type="button"
		class="group absolute end-2 top-1/2 -translate-y-1/2 border bg-white dark:bg-neutral-950 rounded-lg p-1 inline-flex items-center justify-center"
		on:click={copyToClipboard}
	>
		<ClipboardCopy
			class="min-h-4 min-w-4 h-4 w-4 max-h-4 max-w-4 group-hover:scale-110 transition-all"
			/>
	</button>
</div>
{/if}

{#if node.attributes.type != 'submit' && node.attributes.type != 'button' && node.type != 'script' && node.type != 'img' && node.type != 'text'}
	<input
		class="
			dark:bg-neutral-800
			border rounded-lg 
			focus:outline-none focus:ring-1 focus:ring-aerospace-600 focus:border-aerospace-600
			p-2
			leading-none
			w-full
		"
		type={node.attributes.type}
		name={node.attributes.name}
		value={node.attributes.value || ''}
		id={node.attributes.name}
		pattern={node.attributes.pattern}
		disabled={node.attributes.disabled}
		autocomplete={node.attributes.autocomplete}
		required={node.attributes.required && node.attributes.name != 'csrf_token'}
	/>
{/if}


