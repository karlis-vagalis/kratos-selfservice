<script>
	export let node;
	export let visible;
</script>

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
	type={$visible ? 'text' : 'password'}
	name={node.attributes.name}
	value={node.attributes.value || ''}
	id={node.attributes.name}
	pattern={node.attributes.pattern}
	disabled={node.attributes.disabled}
	autocomplete={node.attributes.autocomplete}
	required={node.attributes.required && node.attributes.name != 'csrf_token'}
/>
