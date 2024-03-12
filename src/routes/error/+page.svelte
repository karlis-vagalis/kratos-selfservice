<script>
    import { env } from '$env/dynamic/public';
    export let data;
</script>

<svelte:head>
    <title>Error | { env.PUBLIC_ORGANIZATION }</title>
</svelte:head>

<pre class="w-full h-full overflow-scroll">
<code class="
    
">
{JSON.stringify(data, null, 4)}
</code>
</pre>