<script>
	import { browser } from '$app/environment';

	/** @type {import('@ory/client').UiNode} */
	export let node;

	import Password from './Password.svelte';
	import Code from './Code.svelte';
	import Text from './Text.svelte';

</script>

{#if node.attributes.type == 'submit'}
	<button
		class="
			w-full py-2 px-2 rounded-lg font-bold mt-4
			focus:outline-none focus:ring-0 focus:bg-aerospace-700
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
			src={node.attributes.src}
			async={node.attributes.async}
			referrerpolicy={node.attributes.referrerpolicy}
			crossorigin={node.attributes.crossorigin}
			integrity={node.attributes.integrity}
			type={node.attributes.type}
			id={node.attributes.id}
			nonce={node.attributes.nonce}
		></script>
	{/if}
{/if}

{#if node.type == 'img'}
<fieldset class="flex flex-col min-w-0">
	<div class="text-sm">
		{node.attributes.required == true ? `${node.meta.label?.text} *` : `${node.meta.label?.text}`}
	</div>
	<img
		src={node.attributes.src}
		alt={node.meta.label?.text}
		width={node.attributes.width}
		height={node.attributes.height}
		class="my-3 self-center"
	/>
</fieldset>
{/if}

{#if node.type == 'text'}
	<Text node={node} />
{/if}

{#if node.attributes.type == 'hidden'}
	<input
		type={node.attributes.type}
		name={node.attributes.name}
		value={node.attributes.value || ''}
		id={node.attributes.name}
	/>
{/if}

{#if node.attributes.name == 'code' || node.attributes.name == 'totp_code'}
	<Code node={node}/>
{/if}

{#if node.attributes.type == 'password' }
	<Password node={node} />
{/if}

{#if node.attributes.type != 'submit' && node.attributes.type != 'password' && node.attributes.type != 'button' && node.type != 'script' && node.type != 'img' && node.type != 'text' && node.attributes.type != 'hidden' && node.attributes.name != 'code' && node.attributes.name != 'totp_code'}
	<fieldset class="relative">
		<input
			class="
				block peer
				dark:bg-neutral-900
				border rounded-lg
				transition-[border-color] duration-500
				focus:outline-none focus:ring-0 focus:border-2 focus:border-aerospace-600
				p-2
				leading-none
				w-full
			"
			placeholder=" "
			type={node.attributes.type}
			name={node.attributes.name}
			value={node.attributes.value || ''}
			id={node.attributes.name}
			pattern={node.attributes.pattern}
			disabled={node.attributes.disabled}
			autocomplete={node.attributes.autocomplete}
			required={node.attributes.required && node.attributes.name != 'csrf_token'}
		/>
		<label
			class="
			absolute
			text-sm text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900
			transition-[color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter] duration-300 transform
			-translate-y-4 scale-75 top-1
			z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-aerospace-600
			peer-focus:dark:text-aerospace-600
			peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
			peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4
			rtl:peer-focus:left-auto start-1
		"
			for={node.attributes.name}
		>
			{node.attributes.required == true ? `${node.meta.label?.text} *` : `${node.meta.label?.text}`}
		</label>
	</fieldset>
{/if}
