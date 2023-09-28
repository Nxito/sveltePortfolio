export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-gh-pages/_app",
	assets: new Set(["assets/bg-pattern-card.svg","assets/images/anxo-diffused.png","assets/images/anxo-transparent.png","assets/images/anxo-transparent1.png","assets/images/anxo-transparente.png","assets/images/anxo-transparente2.png","assets/images/anxo.jpeg","favicon.png","icons/discord.svg","icons/github.svg","icons/gmail.svg","icons/instagram.svg","icons/tabler/3d-cube-sphere.svg","icons/tabler/api.svg","icons/tabler/apps-filled.svg","icons/tabler/brand-css3.svg","icons/tabler/brand-debian.svg","icons/tabler/brand-discord.svg","icons/tabler/brand-docker.svg","icons/tabler/brand-git.svg","icons/tabler/brand-github.svg","icons/tabler/brand-gitlab.svg","icons/tabler/brand-golang.svg","icons/tabler/brand-html5.svg","icons/tabler/brand-instagram.svg","icons/tabler/brand-javascript.svg","icons/tabler/brand-linkedin.svg","icons/tabler/brand-nodejs.svg","icons/tabler/brand-notion.svg","icons/tabler/brand-svelte.svg","icons/tabler/brand-tailwind.svg","icons/tabler/brand-threejs.svg","icons/tabler/brand-vite.svg","icons/tabler/brand-vscode.svg","icons/tabler/brand-whatsapp.svg","icons/tabler/copyright.svg","icons/tabler/csv.svg","icons/tabler/json.svg","icons/tabler/keyboard.svg","icons/tabler/mail.svg","icons/tabler/markdown.svg","icons/tabler/music.svg","icons/tabler/pencil.svg","icons/tabler/send.svg","icons/tabler/sql.svg","icons/tabler/user.svg","icons/telegram.svg","icons/whatsapp.svg","icons/youtube.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.3940c1d3.js","app":"_app/immutable/entry/app.e1cd722c.js","imports":["_app/immutable/entry/start.3940c1d3.js","_app/immutable/chunks/scheduler.6f9dceae.js","_app/immutable/chunks/singletons.c2001495.js","_app/immutable/chunks/paths.8d3c87f7.js","_app/immutable/entry/app.e1cd722c.js","_app/immutable/chunks/scheduler.6f9dceae.js","_app/immutable/chunks/index.6032d4f1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
