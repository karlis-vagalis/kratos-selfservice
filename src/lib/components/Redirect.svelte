<script>
	export let node;
</script>

<a
	class="text-center
			w-full py-2 px-2 rounded-lg font-bold mt-6
			bg-aerospace-600 text-white hover:bg-aerospace-700
		"
	href={node.attributes.href}
>
	{node.attributes.title.text}
</a>
