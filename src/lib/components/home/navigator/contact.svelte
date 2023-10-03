<div
	class="card card-hover main container mx-auto w-[98%] p-3 w-full mb-4"
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
					placeholder="me@example.com"
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
					placeholder="Escríbeme!"
				/>
			</label>
			<button class=" btn bg-primary-800 card-hover" type="submit"> <span>Enviar</span></button>
		</div>
	</form>
</div>
