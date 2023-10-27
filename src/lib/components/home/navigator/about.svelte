<script>
	import Icon from '$lib/components/custom/icon.svelte';
	import Skills from '$lib/components/custom/skills.svelte';
	import Hobbies from '$lib/components/custom/hobbies.svelte';
	import { base } from '$app/paths';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<article class="card card-hover main container mx-auto w-[98%] w-full mb-4">
	<h1 class="h1 uppercase">Sobre mí</h1>
	<Accordion autocollapse>
		<div class="card">
			<AccordionItem open>
				<svelte:fragment slot="lead"
					><Icon src="{base}/icons/tabler/user.svg" w="10" /></svelte:fragment
				>
				<svelte:fragment slot="summary"><span class="h3 uppercase">Personal</span></svelte:fragment>
				<svelte:fragment slot="content">
					De Teo, Galicia, España. Me encanta tener perspectiva de muchos ámbitos para buscar las
					mejores soluciones.

				</svelte:fragment>
			</AccordionItem>
		</div>
		<div class="card">
			<AccordionItem>
				<svelte:fragment slot="lead"
					><Icon src="{base}/icons/tabler/apps-filled.svg" w="10" /></svelte:fragment
				>
				<svelte:fragment slot="summary"><span class="h3 uppercase">Skills</span></svelte:fragment>
				<svelte:fragment slot="content">
					<Skills />
				</svelte:fragment>
			</AccordionItem>
		</div>
		<div class="card">
			<AccordionItem>
				<svelte:fragment slot="lead"
					><Icon src="{base}/icons/tabler/pencil.svg" w="10" /></svelte:fragment
				>
				<svelte:fragment slot="summary"><span class="h3 uppercase">Hobbies</span></svelte:fragment>
				<svelte:fragment slot="content">
					<Hobbies/>
					</svelte:fragment>
			</AccordionItem>
		</div>
	</Accordion>
</article>

<style>
	article.main {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
	}
</style>
