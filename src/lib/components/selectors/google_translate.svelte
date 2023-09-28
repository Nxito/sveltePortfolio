<script>
	import { GoogleTranslate } from '@candidosales/svelte-google-translate';
</script>

<GoogleTranslate
	elementId={'google-translate-element'}
	options={{ pageLanguage: 'es', includedLanguages: 'es,en,ca,eu,gl,fr,it,pt,de' }}
/>
<div id="google-translate-element" class="text-black">
	<p>Traduce esta página!</p>
</div>
