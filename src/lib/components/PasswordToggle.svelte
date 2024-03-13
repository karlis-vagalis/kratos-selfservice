<script>
	import { createToggle, melt } from '@melt-ui/svelte';
	import { Eye, EyeOff } from 'lucide-svelte';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	export let visible;

	const {
		elements: { root }
	} = createToggle({
		pressed: visible
	});

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});
</script>

<button
	use:melt={$root}
	aria-label="Show/hide password"
	class="absolute end-2 top-1/2 -translate-y-1/2
        bg-white dark:bg-neutral-900 rounded-md
        flex gap-1 
    "
>
	<div
		class="toggle relative"
	>
        
		{#if $visible === true}
			<div
				in:send={{ key: 'toggle' }}
				out:receive={{ key: 'toggle' }}
				class="under"
			/>
		{/if}
        <Eye class="size-4 relative 
            {$visible == true ? 'text-black dark:text-white' : 'text-neutral-400'}
        " />
	</div>
	<div
		class="toggle relative"
	>
		{#if $visible === false}
			<div
				in:send={{ key: 'toggle' }}
				out:receive={{ key: 'toggle' }}
				class="under"
			/>
		{/if}
        <EyeOff class="size-4 relative
            {$visible == false ? 'text-black dark:text-white' : 'text-neutral-400'}
        " />
	</div>
</button>

<style lang="postcss">
	.toggle {
		@apply p-1;
	}

    .under {
        @apply absolute
        rounded-md border
        -translate-x-1 -translate-y-1
        h-full w-full

    }
</style>
