<script lang="ts">
    import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
    import { format } from 'date-fns';

	let year = format(new Date(), 'yyyy');
</script>

<div
    class="
        w-full grid grid-cols-3 mb-2
    "
>
    <div></div>
    <div
        class="flex flex-rows items-center justify-center font-mono font-bold"
    >
       
    </div>
    <div
        class="flex flex-row items-center justify-end"
    >
        <DarkModeToggle />
    </div>
</div>