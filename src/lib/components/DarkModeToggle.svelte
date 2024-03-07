<script>
	import { Sun, Moon } from 'lucide-svelte';
	import { onMount } from 'svelte';

	var theme = 'light';

	function toggleDarkMode() {
		const html = document.documentElement;
		if (html.classList.contains('dark')) {
			html.classList.remove('dark');
			theme = 'light';
		} else {
			html.classList.add('dark');
			theme = 'dark';
		}
		localStorage.theme = theme;
	}

	onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			theme = 'light';
		}
	});
</script>

<button
	aria-label="Toggle dark mode"
	on:click={toggleDarkMode}
	class="
	p-2 rounded-full
	"
>
	{#if theme == 'dark'}
		<Moon class="hover:text-aerospace-600 transition-all hover:scale-110" />
	{:else}
		<Sun class="hover:text-aerospace-600 transition-all hover:scale-110" />
	{/if}
</button>
