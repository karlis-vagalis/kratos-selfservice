<script>
	import "../app.css";
	import Logo from '$lib/Logo.svelte';
	import Footer from '$lib/components/Footer.svelte'
	import { fade } from 'svelte/transition';
	import Toaster from "$lib/components/Toaster.svelte";
	import Notice from "$lib/components/Notice.svelte";
</script>

<main
	class="
	bg-white dark:bg-neutral-900
    flex flex-col items-center gap-6
	w-full sm:max-w-[600px]
    shadow-outer rounded-xl
	pt-12 pb-6
	px-8 xs:px-14 sm:px-20 
	"
	in:fade={{ duration: 150 }}
>
	<Logo class="w-10 h-10 md:w-12 md:h-12" />
	<slot />
	<Footer />
</main>
<Notice />
<Toaster />
