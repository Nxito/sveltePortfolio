<script>
	import { Avatar } from '@skeletonlabs/skeleton';
</script>
<style>
	article.main {
		display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
	}
</style>
<article class="main container mx-auto p-8">
	<h1 class="h1 uppercase">Sobre mí</h1>


	<section>
		<div class="grayscale hover:grayscale-0 ">
        	<Avatar class=" w-64 -z-10  absolute shadow-2xl  " src="/assets/images/anxo-transparent.png" />
		</div>
		<div class="ml-40 pt-30 pl-6  relative card-hover ">
			<img  class="pt-20  "
				alt="stats"
				src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nxito&show_icons=true&count_private=true&theme=svelte&hide_border=true&bg_color=0D1117&layout=compact"
			/>
		</div>
	</section>
	<section>
		<article>
			<h3 class="uppercase">music</h3>
			<p>
				Rock, electronic, house, y mas... Mis playlist son bastante variadas, y a veces dejo que se
				mezcle de todo.
			</p>
		</article>
		<article>
			<h3 class="uppercase">hobbies</h3>
			<p>Videojuegos, series, quedar con amigos y escuchar música</p>
		</article>
		<article>
			<h3 class="uppercase">skills</h3>
			<p>
				Programacion y edicion de imagen/video/3D Siempre estoy a la busca de soluciones para los
				problemas que me llegan.
			</p>
		</article>
		<article>
			<h3 class="uppercase">personal</h3>
			<p>
				De Teo, Galicia, España. Me encanta tener perspectiva de muchos ámbitos para buscar las
				mejores soluciones.
			</p>
		</article>
 
	</section>


</article>
