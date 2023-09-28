<div
	class="container card rounded-2xl grow basis-1/3 ease-in m-3 relative min-w-[550px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 card-hover p-3"
>
	<h1 class="h1">CONTACTO</h1>

	<form
		method="post"
		action="https://forms.un-static.com/forms/b950bea6ccc150dfe2f8c24e54cc64ca5ea7e61d"
	>
		<div class="form-group row">
			<label class="label" for="InputEmail">
				<span>Tu Email</span>
				<input
					id="InputEmail"
					name="Email"
					class="input"
					x-model="content"
					title="Input (email)"
					type="email"
					placeholder="john@example.com"
					autocomplete="email"
					required
				/>
			</label>
			<label class="label" for="InputContent">
				<span>Mensaje</span>
				<textarea
					id="InputContent"
					name="Mensaje"
					class="textarea"
					rows="4"
					placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>
			</label>
			<button class=" btn bg-primary-800 card-hover" type="submit"> <span>Enviar</span></button>
		</div>
	</form>
</div>
