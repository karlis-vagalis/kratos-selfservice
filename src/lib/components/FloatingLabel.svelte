<script>
    export let required = false;
    export let target = "";
    export let text = "";
</script>

<label
	class="
			absolute
			text-sm text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-900
			transition-[color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter] duration-300 transform
			-translate-y-4 scale-75 top-1
			z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-aerospace-600
			peer-focus:dark:text-aerospace-600
			peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
			peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4
			rtl:peer-focus:left-auto start-1
		"
	for={target}
>
	{required == true ? `${text} *` : `${text}`}
</label>
