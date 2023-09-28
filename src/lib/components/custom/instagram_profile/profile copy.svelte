<script>
	export let username = '';
	let url = `https://www.instagram.com/${username}/?__a=1&__d=1`;
	async function getProfile(url = '') {
		const response = await fetch(url);
		const profile = await response.json();
		console.log({ profile });
		let imageUrl = profile.graphql.user.profile_pic_url_hd;
		if (profile?.graphql?.user?.profile_pic_url_hd) {
			let imageRes = await fetch(url);
			console.log({ imageRes });
		}
	}
	getProfile(url);
</script>

<p>The answer is {username}</p>
