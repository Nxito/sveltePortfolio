<script>
	import Icon from '$lib/components/custom/icon.svelte';
	import Skills from '$lib/components/custom/skills.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<article class="card card-hover main container mx-auto w-[98%]">
	<h1 class="h1 uppercase">Sobre mí</h1>
	<Accordion autocollapse>
		<div class="card">
			<AccordionItem open>
				<svelte:fragment slot="lead"><Icon src="/icons/tabler/music.svg " w="10" /></svelte:fragment
				>
				<svelte:fragment slot="summary"><span class="h3 uppercase">music</span></svelte:fragment>
				<svelte:fragment slot="content">
					<p>
						Rock, electronic, house, y mas... Mis playlist son bastante variadas, y a veces dejo que
						se mezcle de todo.
					</p></svelte:fragment
				>
			</AccordionItem>
		</div>
		<div class="card">
			<AccordionItem>
				<svelte:fragment slot="lead"
					><Icon src="/icons/tabler/apps-filled.svg" w="10" /></svelte:fragment
				>
				<svelte:fragment slot="summary"><span class="h3 uppercase">Skills</span></svelte:fragment>
				<svelte:fragment slot="content"><Skills /></svelte:fragment>
			</AccordionItem>
		</div>
		<div class="card">
			<AccordionItem>
				<svelte:fragment slot="lead"><Icon src="/icons/tabler/pencil.svg" w="10" /></svelte:fragment
				>
				<svelte:fragment slot="summary"><span class="h3 uppercase">Hobbies</span></svelte:fragment>
				<svelte:fragment slot="content">
					Videojuegos, series, quedar con amigos y escuchar música
				</svelte:fragment>
			</AccordionItem>
		</div>

		<div class="card">
			<AccordionItem>
				<svelte:fragment slot="lead"><Icon src="/icons/tabler/user.svg" w="10" /></svelte:fragment>
				<svelte:fragment slot="summary"><span class="h3 uppercase">Personal</span></svelte:fragment>
				<svelte:fragment slot="content">
					De Teo, Galicia, España. Me encanta tener perspectiva de muchos ámbitos para buscar las
					mejores soluciones.</svelte:fragment
				>
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
