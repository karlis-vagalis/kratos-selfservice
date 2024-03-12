<script>
	import { env } from '$env/dynamic/public';
</script>

<svelte:head>
	<title>Recovery | {env.PUBLIC_ORGANIZATION}</title>
</svelte:head>

<div class="w-10/12 mt-10 flex flex-col gap-2">
	<span>No account? <a href="/registration" class="font-medium text-aerospace-500 hover:text-aerospace-700">Sign up</a></span>
	<span>Already have an account? <a href="/login" class="font-medium text-aerospace-500 hover:text-aerospace-700">Log in</a></span>
</div>