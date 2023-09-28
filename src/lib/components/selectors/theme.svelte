<script>
	let themeName = `skeleton`;

</script>
 
<main>
	<h1>Select a theme:</h1>
 
	<select class="bg-error-800" bind:value={themeName} on:change={() => document.body.dataset.theme=themeName}>
		<option value="skeleton">skeleton</option>
 		<option value="nxito_theme">nxito_theme</option>
	</select>
	
</main>
<style>

</style>