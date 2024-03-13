<script>
	import { writable } from "svelte/store";
    import PasswordToggle from "./PasswordToggle.svelte";
    import FloatingLabel from "./FloatingLabel.svelte";
	import PasswordInput from "./PasswordInput.svelte";

    export let node;

    const visible = writable(false)
</script>

<fieldset class="relative">
    <PasswordInput node={node} visible={visible} />
    <PasswordToggle visible={visible} />
    <FloatingLabel required={node.attributes.required} target={node.attributes.name} text={node.meta.label?.text} />
</fieldset>

