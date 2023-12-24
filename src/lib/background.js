import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

export const createScene = (el) => {
	const w = window.innerWidth;
	const h = window.innerHeight;

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
	camera.position.y = 2;
	camera.position.z = 5;

	const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
	renderer.setSize(w, h);
	// document.body.appendChild(renderer.domElement);

	const renderScene = new RenderPass(scene, camera);

	const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 100);
	// strength,  kernel size,  sigma, blur render target resolution
	bloomPass.threshold = 0;
	bloomPass.strength = 2.0;
	bloomPass.radius = 1;

	const composer = new EffectComposer(renderer);
	composer.addPass(renderScene);
	composer.addPass(bloomPass);

	scene.fog = new THREE.FogExp2(0x000000, 0.04);
	const basicSquare = new THREE.PlaneGeometry();
	const colorPallete = [
    0x4fb9f0,
    0x882121,
    0x92505c,
    0x11046c,
    0x4f0505];
	const limit = 80;
	const speed = 0.005;
	const rotateSpeed = 0.0002;

	function getSquare() {
		const x = Math.round(Math.random() * 30) - 15.5;
		const y = Math.round(Math.random()) * 4;
		const z = Math.round(Math.random() * -80) - 0.5;

		const basicMat = new THREE.MeshBasicMaterial({
			color: colorPallete[Math.floor(Math.random() * colorPallete.length)],
			side: THREE.DoubleSide
		});
		const geo = new THREE.Mesh(basicSquare, basicMat);
		geo.position.set(x, y, z);
		geo.rotation.x = (-90 * Math.PI) / 180;

		return {
			geo,
			update() {
				geo.position.z += speed;
				if (geo.position.z > 4) {
					geo.position.z = -limit;
				}
			}
		};
	}

	const boxes = Array(800).fill().map(getSquare);
	boxes.forEach((b) => scene.add(b.geo));

	camera.position.y = 2;
	camera.position.z = 5;

	let paused = false;
	function animate() {
		requestAnimationFrame(animate);
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		if (!paused) {
			boxes.forEach((b) => b.update());
			camera.rotation.z += rotateSpeed;
			composer.render(scene, camera);
		}
	}

	animate();
};
