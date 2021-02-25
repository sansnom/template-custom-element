<svelte:options tag="my-app" />

<script>
	import Box from "./Box.svelte";
	import Counter from "./Counter.svelte";

	let count = 42;

	export let name;
</script>

<h1>Hello {name}!</h1>

<div class="block">
	<p>
		<code>Box</code> and <code>Counter</code> components are not converted anymore
		to custom elements. :(
	</p>

	<!-- slot for Box is not working -->
	<Box>
		<p>The button has been {count} clicked times</p>
	</Box>

	<Counter bind:count />
</div>

<div class="block">
	<p>
		But we can use custom elements directly (for instance <code>my-box</code>
		and <code>my-counter</code>) but can't do bind anymore.
	</p>

	<my-box>
		<p>The button has been {count} clicked times</p>
	</my-box>

	<!-- Can't do bind anymore -->
	<my-counter {count} on:click={() => count++} />
</div>

<style>
	h1 {
		color: purple;
	}

	code {
		font-family: Menlo, Inconsolata, monospace;
		font-size: 14px;
		background-color: #f0f0f0;
		border-radius: 2px;
		padding: 2px 5px;
	}

	.block {
		border: black 1px solid;
		margin-bottom: 20px;
	}
</style>
