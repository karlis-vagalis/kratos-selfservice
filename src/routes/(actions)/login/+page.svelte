<script>
	import { env } from '$env/dynamic/public';
	export let data;
</script>

<svelte:head>
	<title>Login | {env.PUBLIC_ORGANIZATION}</title>
</svelte:head>

<div class="w-full mt-10 flex flex-col gap-1">
	{#if data.flows['registration'] == true}
		<span>No account? <a href="/registration" class="font-medium text-aerospace-500 hover:text-aerospace-700">Sign up</a></span>
	{/if}
	<span>Locked out? <a href="/recovery" class="font-medium text-aerospace-500 hover:text-aerospace-700">Recover account</a></span>
</div>
