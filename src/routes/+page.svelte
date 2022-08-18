<script lang="ts">
	import show from '$lib';
	let display = true;
	$: text = display ? 'Hide' : 'Show';
</script>

<button on:click={() => (display = !display)}>
	{text}
</button>
<div use:show={display}>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
	labore et dolore magna aliqua.
</div>
