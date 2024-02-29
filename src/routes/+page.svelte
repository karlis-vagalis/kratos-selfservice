<script>
	import { LogOut, Settings, ShieldCheck } from 'lucide-svelte';
	import { formatDistanceToNow } from 'date-fns';
	import { PUBLIC_ORGANIZATION } from '$env/static/public';

	export let data;

	let name =
		data.session.identity.traits.name.first != undefined
			? data.session.identity.traits.name.first
			: data.session.identity.traits.username;

	//console.log(data);
    //console.log(data.session.devices);
</script>

<svelte:head>
	<title>Session | {PUBLIC_ORGANIZATION}</title>
</svelte:head>

<div class="w-full flex flex-col gap-3 sm:w-10/12">
	<h1 class="self-center mb-4 text-center font-bold text-lg sm:text-xl">
		Welcome, {name}!
	</h1>

	<div>
		<span class="font-medium">
			Authenticated: 
		</span>
		{formatDistanceToNow(data.session.authenticated_at, { addSuffix: true })}
	</div>
	
	<span class="font-medium">Active sessions:</span>
	<nav>
		<ul class="pl-6">
			{#each data.session.devices as device}
			<li class="">
				<span class="underline">{device.ip_address}</span> - <span>{device.user_agent}</span>
			</li>
			{/each}
		</ul>
	</nav>
	

	<nav class="mt-4">
		<ul class="flex flex-col gap-2">
			<li class="flex flex-row items-center gap-2">
				<Settings class="min-h-4 min-w-4 h-4 w-4 max-h-4 max-w-4" />
				<a href="/settings">Settings</a>
			</li>
			<li class="flex flex-row items-center gap-2">
				<ShieldCheck class="min-h-4 min-w-4 h-4 w-4 max-h-4 max-w-4" />
				<a href="/verification">Verification</a>
			</li>
			<li class="flex flex-row items-center gap-2">
				<LogOut class="min-h-4 min-w-4 h-4 w-4 max-h-4 max-w-4" />
				<a href="/logout">Log out</a>
			</li>
		</ul>
	</nav>
</div>