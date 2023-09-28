<script>
	let themeName = `skeleton`;

</script>
 
<main>
	<h1>Selecciona un tema:</h1>
 
	<select class="bg-error-800" bind:value={themeName} on:change={() => document.body.dataset.theme=themeName}>
		<option value="skeleton">Predeterminado</option>
 		<option value="nxito_theme">@Nxito</option>
	</select>
	
</main>
<style>

</style>