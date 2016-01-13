(function() {
	var app = angular.module('top25', []);

	app.controller('ListController', function () {
		this.entries = albums;
	});
})();

var albums = [
	{
		title: "VEGA INTL. Night School",
		artist: "Neon Indian",
		ranking: 25,
		cover: "https://ia801500.us.archive.org/19/items/mbid-9ec19a79-e604-4714-8157-151efc30aa06/mbid-9ec19a79-e604-4714-8157-151efc30aa06-12510956740.jpg",
		description: "This album is fun! And you can dance to it! But in a more artsy, stylized way!"
	},
	{
		title: "Viet Cong",
		artist: "Viet Cong",
		ranking: 24,
		cover: "https://ia801507.us.archive.org/21/items/mbid-e800985b-a5bc-46f3-812b-4ffaf7e17ddd/mbid-e800985b-a5bc-46f3-812b-4ffaf7e17ddd-12496586401.jpg",
		description: "A bit loud and one-note at times, but otherwise a riveting and visceral listen."
	},
	{
		title: "E-MO-TION",
		artist: "Carly Rae Jepsen",
		ranking: 23,
		cover: "https://ia801505.us.archive.org/33/items/mbid-3e07339c-5b5b-4f1e-bf81-0fcc607b9324/mbid-3e07339c-5b5b-4f1e-bf81-0fcc607b9324-12267772019.jpg",
		description: "One of the purest, most blissful and well thought-out pop records of the year, complete with charming retro elements."
	},
	{
		title: "Natalie Prass",
		artist: "Natalie Prass",
		ranking: 22,
		cover: "https://ia802709.us.archive.org/32/items/mbid-d07f6a9a-a289-44ca-9130-491b707484f2/mbid-d07f6a9a-a289-44ca-9130-491b707484f2-9445081375.jpg",
		description: "Endlessly charming and sweet soul record that captures the sound of the era that inspired it to a T."
	},
	{
		title: "B4.DA.$$",
		artist: "Joey Bada$$",
		ranking: 21,
		cover: "https://ia801002.us.archive.org/24/items/mbid-4a8103f7-5d99-4695-bfbb-30bab686a3a7/mbid-4a8103f7-5d99-4695-bfbb-30bab686a3a7-10164959787.jpg",
		description: "Classy production melded with clever, yet introspective rhymes raise this rap record above many others this year."
	},
	{
		title: "My Love Is Cool",
		artist: "Wolf Alice",
		ranking: 20,
		cover: "https://ia801005.us.archive.org/4/items/mbid-49936617-caeb-432f-b426-e8f3ce15043f/mbid-49936617-caeb-432f-b426-e8f3ce15043f-10694506467.jpg",
		description: "An accessible indie-rock record carried far by its confidence and varried instrumentation."
	},
	{
		title: "Abyss",
		artist: "Chelsea Wolfe",
		ranking: 19,
		cover: "https://ia801301.us.archive.org/24/items/mbid-a7db3594-febf-4f13-91d3-cdb280240a01/mbid-a7db3594-febf-4f13-91d3-cdb280240a01-11126318309.jpg",
		description: "Brooding and bleak, this record is engagingly dark and potent from beginning to end."
	},
	{
		title: "How Big, How Blue, How Beautiful",
		artist: "Florence + The Machine",
		ranking: 18,
		cover: "https://ia800506.us.archive.org/3/items/mbid-a1b34e9d-aac2-43b4-af53-068f5339bf97/mbid-a1b34e9d-aac2-43b4-af53-068f5339bf97-10530057197.jpg",
		description: "A stylistic change for the band that pays off, mixing engaging instrumentation with soaring emotional highs."
	},
	{
		title: "Supersonic Home",
		artist: "Adventures",
		ranking: 17,
		cover: "https://f1.bcbits.com/img/a3020625291_10.jpg",
		description: "Indie rock infused with catchy, ear-grabbing hooks and songwriting. Mired only by slightly-off vocal mixing."
	},
	{
		title: "Mounth the Air",
		artist: "The Unthanks",
		ranking: 16,
		cover: "https://ia902600.us.archive.org/29/items/mbid-772d1d67-51f9-4995-9901-a9b619dc9a53/mbid-772d1d67-51f9-4995-9901-a9b619dc9a53-9665163841.jpg",
		description: "Moving and heartfelt, with folk instrumentation evocative of long-standing traditions in the genre."
	},
	{
		title: "Sound & Color",
		artist: "Alabama Shakes",
		ranking: 15,
		cover: "https://ia800501.us.archive.org/8/items/mbid-3442e568-3b06-4c18-adbd-a09e52c55600/mbid-3442e568-3b06-4c18-adbd-a09e52c55600-10201207104.jpg",
		description: "Drawing from older soul roots but unmistakably modern, another stylistic shift that paid dividends."
	},
	{
		title: "The Scene Between",
		artist: "The Go! Team",
		ranking: 14,
		cover: "https://ia800301.us.archive.org/29/items/mbid-d571c823-b4e0-4868-8e1c-ee148811173e/mbid-d571c823-b4e0-4868-8e1c-ee148811173e-9984401187.jpg",
		description: "Though polarizing, this record is the closest the band has come to recapturing the blissful, ear-grabbing chaos of their debut."
	},
	{
		title: "I Love You, Honeybear",
		artist: "Father John Misty",
		ranking: 13,
		cover: "https://ia802601.us.archive.org/35/items/mbid-5bad490b-2939-4955-955b-9280cf616473/mbid-5bad490b-2939-4955-955b-9280cf616473-9591833765.jpg",
		description: "Funny, searing and heartfelt all at once, easily the best singer-songwriter album of the year."
	},
	{
		title: "Etch and Etch Deep",
		artist: "Haiku Salut",
		ranking: 12,
		cover: "https://ia801303.us.archive.org/31/items/mbid-a8f1385e-26cf-4408-b833-d2072cd8d049/mbid-a8f1385e-26cf-4408-b833-d2072cd8d049-11050688036.jpg",
		description: "Through it's use of live samples, it became the most evocative and diverse ambient record of the year."
	},
	{
		title: "No Cities To Love",
		artist: "Sleater-Kinney",
		ranking: 11,
		cover: "https://ia802605.us.archive.org/16/items/mbid-1d49f64c-ac5a-4d94-8486-6aceaba59046/mbid-1d49f64c-ac5a-4d94-8486-6aceaba59046-8701541128.jpg",
		description: "One of this year's best comeback records, delivering half an hour of scorching, no-nonsense punk perfection."
	},
	{
		title: "Harmlessness",
		artist: "The World Is A Beautiful Place And I Am No Longer Afraid To Die",
		ranking: 10,
		cover: "https://ia801308.us.archive.org/33/items/mbid-2fa9636e-8dfd-404f-9dc2-5fc7729a789d/mbid-2fa9636e-8dfd-404f-9dc2-5fc7729a789d-11526310831.jpg",
		description: "An emo record rooted by powerful songwriting and held up by varried, equally evocative instrumentation."
	},
	{
		title: "Revisionist",
		artist: "Sannhet",
		ranking: 9,
		cover: "https://f1.bcbits.com/img/a1977073613_10.jpg",
		description: "Blistering metal record that creates a sense of vastness achieved by few others in the genre."
	},
	{
		title: "Algiers",
		artist: "Algiers",
		ranking: 8,
		cover: "http://store.matadorrecords.com/media/catalog/product/cache/4/image/360x/85e4522595efc69f496374d01ef2bf13/o/l/ole-1067_algiers.jpg",
		description: "Charged with political energy and fusing elements of industrial rock and soul, powerful from beginning to end."
	},
	{
		title: "Autumn Eternal",
		artist: "Panopticon",
		ranking: 7,
		cover: "https://ia801504.us.archive.org/7/items/mbid-a5d62b8d-cf06-4b4a-bebb-47fd72c22ae1/mbid-a5d62b8d-cf06-4b4a-bebb-47fd72c22ae1-12454974558.jpg",
		description: "Carrying nods to American folk traditions, creating an emotional depth that sets it apart from other black metal records this year."
	},
	{
		title: "The Things We Do To Find People Who Feel Like Us",
		artist: "Beach Slang",
		ranking: 6,
		cover: "https://f1.bcbits.com/img/a2813479087_10.jpg",
		description: "Short but sweet indie rock record that breezes by on powerful performances and an immediate presence."
	},
	{
		title: "Purple",
		artist: "Baroness",
		ranking: 5,
		cover: "https://ia801509.us.archive.org/5/items/mbid-9959a5d7-76c2-4cc0-8178-30453a225d78/mbid-9959a5d7-76c2-4cc0-8178-30453a225d78-12288745526.jpg",
		description: "The best metal record of the year, blending complex instrumentation with absolutely engaging songwriting."
	},
	{
		title: "Art Angels",
		artist: "Grimes",
		ranking: 4,
		cover: "https://ia801505.us.archive.org/3/items/mbid-24357951-752d-47ff-a732-3fb0f684f29b/mbid-24357951-752d-47ff-a732-3fb0f684f29b-12121420063.jpg",
		description: "Equal parts experimental, accessible, sweet and devilish, making for a truly engaging and artful pop record."
	},
	{
		title: "To Pimp A Butterfly",
		artist: "Kendrick Lamar",
		ranking: 3,
		cover: "https://ia600504.us.archive.org/0/items/mbid-b4d6e526-4195-49bc-b660-b6df4c27686e/mbid-b4d6e526-4195-49bc-b660-b6df4c27686e-9896943304.jpg",
		description: "The record that made 2015, with it's charged yet socially conscious lyrics perfectly encapsulating the troubles of black America today."
	},
	{
		title: "Have You In My Wilderness",
		artist: "Julia Holter",
		ranking: 2,
		cover: "https://ia801308.us.archive.org/28/items/mbid-5a2306a4-d0b9-4d65-8e81-07d10fdd39e9/mbid-5a2306a4-d0b9-4d65-8e81-07d10fdd39e9-11644390969.jpg",
		description: "At once experimental yet inviting, a dreamy record that gets beneath your skin no matter what emotion it's evoking."
	},
	{
		title: "Painted Shut",
		artist: "Hop Along",
		ranking: 1,
		cover: "https://ia800505.us.archive.org/27/items/mbid-8114b878-c9ff-4c4f-bc19-5baabc10f32c/mbid-8114b878-c9ff-4c4f-bc19-5baabc10f32c-10513425245.jpg",
		description: "Indie rock perfection, a blend of immediately catchy instrumentation, quirky yet emotional songwriting, and one of the best rock-voices in the scene today."
	}
];