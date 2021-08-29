// TO run this script you have to be inside yuma_webiste_assets folder

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
	await imagemin(['./Icons2/*.{jpg,png}'], {
		destination: './Icons2_converted',
		plugins: [
			imageminWebp({ lossless: true })
		]
	});

	console.log('Icons converted');
})();

(async () => {
	await imagemin(['./ASSETS/*.{jpg,png}'], {
		destination: './ASSETS_converted',
		plugins: [
			imageminWebp({ lossless: true })
		]
	});

	console.log('ASSETS converted');
})();

(async () => {
	await imagemin(['./og/*.{jpg,png}'], {
		destination: './og_converted',
		plugins: [
			imageminWebp({ lossless: true })
		]
	});

	console.log('og converted');
})();