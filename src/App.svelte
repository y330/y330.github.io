<script>
	import Lorem from "./components/Lorem.svelte"
	let title = ["high-scool student", "coding tutor", "computer programmer"]
		.join(" | ")
		.toUpperCase()
</script>

<svelte:head>
	<link rel="stylesheet" href="src\theme\_smui-theme.scsssrc\theme\_smui-theme.scss" />
</svelte:head>
<main>
	<h1>Yonah Aviv</h1>
	<h6>{title}</h6>
	<Lorem />
	Hello
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
	}
</style>
