<script lang="ts">
	import { PUBLIC_ORGANIZATION } from '$env/static/public';
</script>

<svelte:head>
	<title>Login | {PUBLIC_ORGANIZATION}</title>
</svelte:head>

<div class="w-10/12 mt-10 flex flex-col gap-2">
	<span>No account? <a href="/registration" class="font-medium text-aerospace-500 hover:text-aerospace-700">Sign up</a></span>
	<span>Forgot password? <a href="/recovery" class="font-medium text-aerospace-500 hover:text-aerospace-700">Recover your account</a></span>
</div>
