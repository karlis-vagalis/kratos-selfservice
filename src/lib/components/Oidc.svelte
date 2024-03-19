<script>
	import { Notebook } from "lucide-svelte";

	export let node;
	export let action;

	const providers = {
		authelia: {
			name: 'Authelia',
			logo: 'https://www.authelia.com/images/branding/logo-cropped.png'
		},
		github: {
			name: 'Github',
			logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
		},
		facebook: {
			name: 'Facebook',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png'
		}
	};

	async function oidcFlow() {
		const response = await fetch(action, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			body: JSON.stringify({
				method: 'oidc',
				provider: node.attributes.value
			})
		});

		const res = await response.json();

		window.location.href = res.redirect_browser_to;
	}
</script>

<button
	class="flex flex-row items-center justify-center gap-2
    py-3 px-4 h-full w-full
    border rounded-md dark:border-neutral-700
	transition-all duration-500
	overflow-hidden
	group
	"
	type={node.attributes.type}
	on:click={oidcFlow}
>
	{#if providers[node.attributes.value] != undefined}
	<img
		src={providers[node.attributes.value].logo}
		class="h-full group-hover:scale-110 duration-300"
	/>
	{/if}
	<!-- <span
		class="font-medium text-sm truncate"
	>{node.meta.label.text}</span> -->
</button>
