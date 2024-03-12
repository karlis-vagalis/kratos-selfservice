<script lang="ts">
    import { page } from '$app/stores';
    import { env } from '$env/dynamic/public';
</script>

{#if $page.url.pathname == '/registration'}
<div class="mt-6 mb-2">
    By signing up, you agree to our 
    <a href={env.PUBLIC_TERMS_OF_SERVICE}>Terms of Service</a> and <a href={env.PUBLIC_PRIVACY_POLICY}>Privacy Policy</a>
</div>
{/if}

<style lang="postcss">
    div {
        @apply text-neutral-500 px-3 text-center
    }
    a {
        @apply underline hover:text-neutral-600;
    }
</style>