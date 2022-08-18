# svelte-show

Svelte `svelte-show-action` is the equivalent of `v-show` in `vuejs`, or `ng-show` in `angularjs`. `svelte-show-action` will hide the element without adding any div block or destroying the component.
## Usage

```svelte
<script>
  import show from "svelte-show-action";
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

```