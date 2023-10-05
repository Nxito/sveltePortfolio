<script>
	export let showModal; // boolean
    export let dialogId; // string
    export let activeModal; // string
	let dialog; // HTMLDialogElement
    console.log({dialogId,id:dialog?.id})

	$: if (dialog && dialogId == activeModal && showModal) {
        dialog.showModal();  
        console.log(dialog.id)
        }else{
            console.log({dialogId,activeModal}) 
        };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog  class="text-surface-200"
    id={dialogId}
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr class="m-2"/>
		<slot />
		<hr class="m-2" />
		<!-- svelte-ignore a11y-autofocus -->
		<button autofocus on:click={() => dialog.close()}  class="p-2 bg-surface-700 btn">close modal</button>
	</div>
</dialog>

<style>
	dialog {
		width: 60%;
        min-width: 300px;
		border-radius: 10px;
		border: none;
		padding: 0;
        background: rgba(9, 9, 9, 0.3);
	}
	dialog::backdrop {
		background: rgba(9, 9, 9, 0.3);
        backdrop-filter: blur(10px);
	}
	dialog > div {
		padding: 1em;
	}

</style>
