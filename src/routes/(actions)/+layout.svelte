<script lang="ts">
	import { enhance } from '$app/forms';
	import Field from '$lib/components/Field.svelte';
	import { onMount } from 'svelte';
	import { addToast } from '$lib/components/Toaster.svelte';

	import { createTabs, melt } from '@melt-ui/svelte';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import type { UiNode } from '@ory/client';

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});

	function mapMessage(type: String) {

		let r = {
			title: '',
			color: ''
		}

		if (type == 'success') {
			r.title = 'Success';
			r.color = 'bg-emerald-500'
		}
		if (type == 'info') {
			r.title = 'Info';
			r.color = 'bg-sky-500'
		}
		if (type == 'error') {
			r.title = 'Error';
			r.color = 'bg-red-500'
		}

		return r;
	}

	function mapGroup(g: String) {
		let r: String;

		if (g == 'profile') {
			r = 'Profile';
		}
		if (g == 'webauthn') {
			r = 'Passwordless';
		}
		if (g == 'totp') {
			r = 'TOTP';
		}
		if (g == 'password') {
			r = 'Password';
		}
		if (g == 'code') {
			r = 'Via code';
		}

		return r;
	}

	export let data;

	// Sort nodes
	const order = [
		'identifier',
		'traits.username',
		'traits.email',
		'password',
		'traits.name.first',
		'traits.name.last',
		'method'
	];
	data.kratos.ui.nodes.sort(function (a, b) {
		let oa = order.indexOf(a.attributes.name);
		let ob = order.indexOf(b.attributes.name);

		return oa < ob ? -1 : oa > ob ? 1 : 0;
	});

	// Group nodes
	let groups: [{ name: String; nodes: [UiNode] }] = [];
	data.kratos.ui.nodes.forEach((n) => {
		var g = n.group;

		let j = -1;
		for (let i = 0; i < groups.length; i++) {
			if (groups[i].name == g) {
				j = i;
				groups[i].nodes.push(n);
			}
		}

		if (j == -1) {
			groups.push({
				name: g,
				nodes: [n]
			});
		}
	});

	// Sort groups

	const groupOrder = ['profile', 'password', 'totp', 'webauthn', 'code'];

	groups.sort(function (a, b) {
		let oa = groupOrder.indexOf(a.name);
		let ob = groupOrder.indexOf(b.name);

		return oa < ob ? -1 : oa > ob ? 1 : 0;
	});

	const {
		elements: { root, list, content, trigger },
		states: { value }
	} = createTabs({
		loop: false

	});
	$value = `tab-${groups[1].name}`
	

	onMount(() => {
		
		if (data.kratos.ui.messages?.length > 0) {
			data.kratos.ui.messages.forEach(e => {
				//console.log(e)
				var r = mapMessage(e.type);
				addToast({
					data: {
						title: r.title,
						description: e.text,
						color: r.color
					}
				});
			});
		}

		data.kratos.ui.nodes.forEach((e: UiNode) => {
			if (e.messages.length > 0) {
				e.messages.forEach((m) => {
					//console.log(m)
					var r = mapMessage(m.type)
					addToast({
						data: {
							title: r.title,
							description: m.text,
							color: r.color
						}
					});
				});
			}
		});
	});
</script>

<h1 class="font-semibold text-xl text-center">{data.message}</h1>
<div use:melt={$root} class="w-full flex flex-col items-center">
	<div use:melt={$list} class="flex flex-row flex-wrap justify-center mb-4">
		{#each groups as gr}
			{#if gr.name != 'default'}
				<button
					use:melt={$trigger(`tab-${gr.name}`)}
					class="relative px-6 py-3 font-medium
				"
				>
					{mapGroup(gr.name)}
					{#if $value === `tab-${gr.name}`}
						<div
							in:send={{ key: 'trigger' }}
							out:receive={{ key: 'trigger' }}
							class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-aerospace-600"
						/>
					{/if}
				</button>
			{/if}
		{/each}
	</div>
	{#each groups as group}
		{#if group.name != 'default'}
			<div use:melt={$content(`tab-${group.name}`)} class="w-10/12">
				<form
					method={data.kratos.ui.method}
					action={data.kratos.ui.action}
					class="
						flex flex-col mt-4 gap-6 min-w-0
					"
				>
					{#if groups[0].name == 'default'}
						{#each groups[0].nodes as node}
							<Field {node} />
						{/each}
					{/if}
					{#each group.nodes as node}
						<Field {node} />
					{/each}
				</form>
			</div>
		{/if}
	{/each}
	<slot />
</div>
