<script lang="ts">
	import type { UiNode } from '@ory/client';
	import Field from './Field.svelte';
	export let node: UiNode;
</script>

{#if node.attributes.type == 'hidden' || node.attributes.type == 'submit' || node.attributes.type == 'button' || node.type == 'script' }
	<Field {node} />
{:else}
	<fieldset class="flex flex-col items-center min-w-0">
		<label class="mb-2 text-sm w-full" for={node.attributes.name}>
			{node.attributes.required == true ? `${node.meta.label?.text} *`: `${node.meta.label?.text}`}
		</label>
		<Field {node} />
	</fieldset>
{/if}
