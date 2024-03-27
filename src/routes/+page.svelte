<script>
	import { LogOut, Settings, ShieldCheck } from 'lucide-svelte';
	import { formatDistanceToNow } from 'date-fns';
	import { env } from '$env/dynamic/public';

	export let data;

	let name =
		data.session.identity.traits.name.first != undefined
			? data.session.identity.traits.name.first
			: data.session.identity.traits.username;

	//console.log(data);
    //console.log(data.session.devices);
	//console.log(data.session.identity.verifiable_addresses)

	let isVerified = data.session.identity.verifiable_addresses[0].verified
</script>

<svelte:head>
	<title>Session | {env.PUBLIC_ORGANIZATION}</title>
</svelte:head>

<div class="w-full flex flex-col gap-3 sm:w-full">
	<h1
		class="self-center mb-4 text-center
		font-semibold tracking-tight
		text-2xl sm:text-3xl
		my-1 sm:my-3
		">
		Welcome, {name}!
	</h1>

	<div>
		<span class="font-medium">
			Authenticated: 
		</span>
		{formatDistanceToNow(data.session.authenticated_at, { addSuffix: true })}
	</div>

	{#if isVerified}
	<div>
		<span class="font-medium">
			Verified: 
		</span>
		true
	</div>
	{/if}

	<div>
		<span class="font-medium">
			AAL: 
		</span>
		{data.session.authenticator_assurance_level == 'aal1' ? '1st Level' : '2nd Level'}
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
			<li class="flex flex-row items-center gap-2 group">
				<Settings class="min-h-4 min-w-4 h-4 w-4 max-h-4 max-w-4
				 group-hover:text-aerospace-600 duration-300
				 "/>
				<a href="/settings">Settings</a>
			</li>
			{#if data.flows['verification'] == true && isVerified == false}
			<li class="flex flex-row items-center gap-2 group">
				<ShieldCheck class="min-h-4 min-w-4 h-4 w-4 max-h-4 max-w-
				 group-hover:text-aerospace-600 duration-300
				" />
				<a href="/verification">Verification</a>
			</li>
			{/if}
			<li class="flex flex-row items-center gap-2 group">
				<LogOut class="min-h-4 min-w-4 h-4 w-4 max-h-4 max-w-4
				group-hover:text-aerospace-600 duration-300
				" />
				<a href="/logout">Log out</a>
			</li>
		</ul>
	</nav>
</div>