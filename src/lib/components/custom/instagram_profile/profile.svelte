<script>
	export let username="" ; 

    let url = `https://www.instagram.com/${username}/?__a=1&__d=1`

	const fetchImage = (async () => {
		const response = await fetch(url,{ mode: 'no-cors',  headers: {
      'Content-Type': 'application/json',
    //   "Access-Control-Allow-Origin": "*"
     },})
     const profile = await response.json()
     console.log({profile})
     return profile
	})()
</script>

{#await fetchImage}
	<p>...waiting</p>
{:then data}
	<img src={data.graphql.user.profile_pic_url_hd} alt="Dog image" />
{:catch error}
	<p>An error occurred!</p>
{/await}