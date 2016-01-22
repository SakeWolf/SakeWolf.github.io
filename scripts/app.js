(function() {
	var app = angular.module('top25', []);

	app.controller('ListController', function () {
		this.entries = albums;

		this.setColor = function(ranking){
			if (ranking >= 21) {
				return "2406C6";
			} else if (ranking < 21 && ranking >= 16) {
				return "6C08D0";
			} else if (ranking < 16 && ranking >= 11) {
				return "9D02B9";
			} else if (ranking < 11 && ranking >= 6) {
				return "D0088A";
			} else {
				return "C6080B";
			}
		};
	});
})();

var albums = [
	{
		title: "VEGA INTL. Night School",
		artist: "Neon Indian",
		ranking: 25,
		cover: "https://ia801500.us.archive.org/19/items/mbid-9ec19a79-e604-4714-8157-151efc30aa06/mbid-9ec19a79-e604-4714-8157-151efc30aa06-12510956740.jpg",
		description: "Following exposure by way of the latest Grand Theft Auto title, electronic musiciana Alan Palomo returned after 4 years of studio silence with a decidedly strange, electic record that manages to walk the thin line between quirkiness and accessibility, blending off-kilter synths with immediately dancable grooves.",
		sample: {title: "Annie", url: "https://www.youtube.com/watch?v=TTuT1s-YPLE"}
	},
	{
		title: "Viet Cong",
		artist: "Viet Cong",
		ranking: 24,
		cover: "https://ia801507.us.archive.org/21/items/mbid-e800985b-a5bc-46f3-812b-4ffaf7e17ddd/mbid-e800985b-a5bc-46f3-812b-4ffaf7e17ddd-12496586401.jpg",
		description: "In spite of controversy leading to the changing of the band's name earlier this year, these post-punk rockers formed from the remnants of Women crafted a loud, visceral, if not one-note ride that weaves the often soul-searching vocals into a decidedly heart-pounding ride.",
		sample: {title: "Silhouettes", url: "https://www.youtube.com/watch?v=zW1kP99mok4"}
	},
	{
		title: "E-MO-TION",
		artist: "Carly Rae Jepsen",
		ranking: 23,
		cover: "http://1.bp.blogspot.com/-J5UBTWpoVY8/Vc9SS0sYnhI/AAAAAAAAE1A/SQPnFbG-7sc/s1600/Carly-Rae-Jepsen-Emotion.jpg",
		description: "In a lot of ways, Canadian pop star Carly Rae Jepsen wrote herself into a bit of a corner with her breakout hit 'Call Me Maybe': a shame really, considering her criminally underrated release this year was one of the purest, most blissful pop records the year had to offer.",
		sample: {title: "E-MO-TION", url: "https://www.youtube.com/watch?v=kV9sNmujCPk"}
	},
	{
		title: "Natalie Prass",
		artist: "Natalie Prass",
		ranking: 22,
		cover: "https://ia802709.us.archive.org/32/items/mbid-d07f6a9a-a289-44ca-9130-491b707484f2/mbid-d07f6a9a-a289-44ca-9130-491b707484f2-9445081375.jpg",
		description: "Singer-songwriter Natalie Prass blind-sided many a critic with an endlessly charming and sweet soul record, framing her subtle, often fragile vocals with the sort of instrumentation reminiscent of 70's era legends in the genre. The result is bright and blissful, with a decidedly old-school heart behind it all.",
		sample: {title: "Bird of Prey", url: "https://www.youtube.com/watch?v=h50Q47W80ao"}
	},
	{
		title: "B4.DA.$$",
		artist: "Joey Bada$$",
		ranking: 21,
		cover: "https://ia801002.us.archive.org/24/items/mbid-4a8103f7-5d99-4695-bfbb-30bab686a3a7/mbid-4a8103f7-5d99-4695-bfbb-30bab686a3a7-10164959787.jpg",
		description: "In the face of quite a few major rap releases this year, Brooklyn rapper Joey Bada$$'s latest release ended up flying a bit under the radar. Still, those who dug into it were treated to one of the classier, yet more thought-provoking rap albums of the year, benefitting from clever lyricism and vibrant production.",
		sample: {title: "Paper Trail$", url: "https://www.youtube.com/watch?v=stoLqWXsIOY"}
	},
	{
		title: "My Love Is Cool",
		artist: "Wolf Alice",
		ranking: 20,
		cover: "https://ia801005.us.archive.org/4/items/mbid-49936617-caeb-432f-b426-e8f3ce15043f/mbid-49936617-caeb-432f-b426-e8f3ce15043f-10694506467.jpg",
		description: "Amidst the swarm of indie rock albums released this year, Wolf Alice was able to overcome an image they had defined for themselves with some of their earlier singles to produce a surprisingly diverse, yet accessible set of songs that won over a lot of hearts in the indie scene.",
		sample: {title: "Bros", url: "https://www.youtube.com/watch?v=TD_Q9CxXTo4"}
	},
	{
		title: "Abyss",
		artist: "Chelsea Wolfe",
		ranking: 19,
		cover: "https://ia801301.us.archive.org/24/items/mbid-a7db3594-febf-4f13-91d3-cdb280240a01/mbid-a7db3594-febf-4f13-91d3-cdb280240a01-11126318309.jpg",
		description: "Brooding and bleak, this record is engagingly dark and potent from beginning to end. It's decidedly uncompromising in its heaviness, often slow and pensive, yet filled with a haunting gravity framed perfectly by Wolfe's vocals. A dense listen, to be sure, but one of the most dedicated to its sound this year.",
		sample: {title: "Carrion Flowers", url: "https://www.youtube.com/watch?v=46u_Ggsub1A"}
	},
	{
		title: "How Big, How Blue, How Beautiful",
		artist: "Florence + The Machine",
		ranking: 18,
		cover: "https://ia800506.us.archive.org/3/items/mbid-a1b34e9d-aac2-43b4-af53-068f5339bf97/mbid-a1b34e9d-aac2-43b4-af53-068f5339bf97-10530057197.jpg",
		description: "This album marked a vivid stylistic change for the inde pop darlings, yet the end result very much paid off as Florence and her machine created perhaps their most intense and evocative listen to date. Though lacking some of their earlier quirkiness, this record more than makes up for it with high-soaring emotions.",
		sample: {title: "Ship To Wreck", url: "https://www.youtube.com/watch?v=B9v8jLBrvug"}
	},
	{
		title: "Supersonic Home",
		artist: "Adventures",
		ranking: 17,
		cover: "https://f1.bcbits.com/img/a3020625291_10.jpg",
		description: "Although the rough-around-the-edges vocal mixing might be a bit hard on the ears for some, this Pittsburg band released another rather-overlooked yet decidedly inviting indie rock album that plays with catchy riffs and a warm sound to carry listeners through a breezy half-hour runtime.",
		sample: {title: "Heavenly", url: "https://www.youtube.com/watch?v=mgqAc2Ux1Tw"}
	},
	{
		title: "Mount the Air",
		artist: "The Unthanks",
		ranking: 16,
		cover: "https://ia902600.us.archive.org/29/items/mbid-772d1d67-51f9-4995-9901-a9b619dc9a53/mbid-772d1d67-51f9-4995-9901-a9b619dc9a53-9665163841.jpg",
		description: "What's perhpas most striking about the Unthanks latest record is how reminiscent they are of older European folk traditions that few artists touch today. The end result is rich and heartfelt, perhaps a tad corny to some, but to those not turned away by the sound it's a somber and often sad exploration of love.",
		sample: {title: "Mount the Air", url: "https://www.youtube.com/watch?v=nYiMUUNu0QM"}
	},
	{
		title: "Sound & Color",
		artist: "Alabama Shakes",
		ranking: 15,
		cover: "https://ia800501.us.archive.org/8/items/mbid-3442e568-3b06-4c18-adbd-a09e52c55600/mbid-3442e568-3b06-4c18-adbd-a09e52c55600-10201207104.jpg",
		description: "Another band that took a large stylistic risk with their new record and reaped many a reward because of it, the Alabama Shakes managed to break away from their earlier somewhat generic sound to bring one of the year's better rock albums. Lead singer Brittany Howard's gritty vocals very much steal this show.",
		sample: {title: "Don't Wanna Fight", url: "https://www.youtube.com/watch?v=x-5OX7CO26c"}
	},
	{
		title: "The Scene Between",
		artist: "The Go! Team",
		ranking: 14,
		cover: "https://ia800301.us.archive.org/29/items/mbid-d571c823-b4e0-4868-8e1c-ee148811173e/mbid-d571c823-b4e0-4868-8e1c-ee148811173e-9984401187.jpg",
		description: "One of the year's most polarizing records, the Go! Team have always played around with noise and cacophony on their albums, often with mixed results. Although they've never quite catured the perfect storm of wonderfully egaging chaos of their debut however, this sugary blend of synth and rock is the closest they've come so far.",
		sample: {title: "Waking the Jetstream", url: "https://www.youtube.com/watch?v=yMLdvkW6NWo"}
	},
	{
		title: "I Love You, Honeybear",
		artist: "Father John Misty",
		ranking: 13,
		cover: "https://ia802601.us.archive.org/35/items/mbid-5bad490b-2939-4955-955b-9280cf616473/mbid-5bad490b-2939-4955-955b-9280cf616473-9591833765.jpg",
		description: "This album owes a lot to the story-telling talents of its singer-songwriter creator, former Fleet Foxes member Josh Tillman. This album encompasses a wider range of stories and emotions than most, from sleazier topics to more sullen aspects of modern love, all with a big dose of wit and charm.",
		sample: {title: "Bored In The USA", url: "https://www.youtube.com/watch?v=JODshFyKHuA"}
	},
	{
		title: "Etch and Etch Deep",
		artist: "Haiku Salut",
		ranking: 12,
		cover: "https://ia801303.us.archive.org/31/items/mbid-a8f1385e-26cf-4408-b833-d2072cd8d049/mbid-a8f1385e-26cf-4408-b833-d2072cd8d049-11050688036.jpg",
		description: "Easily my favorite almbient record of the year, Haiku Salut's mid-year release stood out from most of the other ambient releases this year due to it's use of live, organic samples alongside synthesized sounds. This produces a broad emotional pallete that they use to paint an astonishing spread of emotions, from the bright hopeful opening to the uplifting, yet oddly despondent ending notes.",
		sample: {title: "Bleak and Beautiful (All Things)", url: "https://www.youtube.com/watch?v=FOHvtkLEUR8"}
	},
	{
		title: "No Cities To Love",
		artist: "Sleater-Kinney",
		ranking: 11,
		cover: "https://ia802605.us.archive.org/16/items/mbid-1d49f64c-ac5a-4d94-8486-6aceaba59046/mbid-1d49f64c-ac5a-4d94-8486-6aceaba59046-8701541128.jpg",
		description: "One of this year's best comeback records, Sleater-Kinney broke 10 years of studio silence with a blistering half-hour of no-nonsense, scorching punk music. The themes they rally behind are thrilling to be pumped up for, and the fast, intricate and decidedly intense instrumentation is more than up for the challenge.",
		sample: {title: "No Anthems", url: "https://www.youtube.com/watch?v=-Ec0y7HTyQ4"}
	},
	{
		title: "Harmlessness",
		artist: "The World Is A Beautiful Place And I Am No Longer Afraid To Die",
		ranking: 10,
		cover: "https://ia801308.us.archive.org/33/items/mbid-2fa9636e-8dfd-404f-9dc2-5fc7729a789d/mbid-2fa9636e-8dfd-404f-9dc2-5fc7729a789d-11526310831.jpg",
		description: "An emo record rooted by powerful songwriting and held up by varried, equally evocative instrumentation.",
		sample: {title: "January 10th, 2014", url: "https://www.youtube.com/watch?v=mVg0lBtzgQQ"}
	},
	{
		title: "Revisionist",
		artist: "Sannhet",
		ranking: 9,
		cover: "https://f1.bcbits.com/img/a1977073613_10.jpg",
		description: "Blistering metal record that creates a sense of vastness achieved by few others in the genre.",
		sample: {title: "Revisionist", url: "https://www.youtube.com/watch?v=zwyyE2D0Zvc"}
	},
	{
		title: "Algiers",
		artist: "Algiers",
		ranking: 8,
		cover: "http://store.matadorrecords.com/media/catalog/product/cache/4/image/360x/85e4522595efc69f496374d01ef2bf13/o/l/ole-1067_algiers.jpg",
		description: "Charged with political energy and fusing elements of industrial rock and soul, powerful from beginning to end.",
		sample: {title: "Blood", url: "https://www.youtube.com/watch?v=g3L0NI8vcMg"}
	},
	{
		title: "Autumn Eternal",
		artist: "Panopticon",
		ranking: 7,
		cover: "https://ia801504.us.archive.org/7/items/mbid-a5d62b8d-cf06-4b4a-bebb-47fd72c22ae1/mbid-a5d62b8d-cf06-4b4a-bebb-47fd72c22ae1-12454974558.jpg",
		description: "Carrying nods to American folk traditions, creating an emotional depth that sets it apart from other black metal records this year.",
		sample: {title: "Sleep to the Sound of Waves Crashing", url: "https://www.youtube.com/watch?v=GOwXjGjSVU8"}
	},
	{
		title: "The Things We Do To Find People Who Feel Like Us",
		artist: "Beach Slang",
		ranking: 6,
		cover: "https://f1.bcbits.com/img/a2813479087_10.jpg",
		description: "Short but sweet indie rock record that breezes by on powerful performances and an immediate presence.",
		sample: {title: "Bad Art and Wierdo Ideas", url: "https://www.youtube.com/watch?v=i7nXvOTqyCY"}
	},
	{
		title: "Purple",
		artist: "Baroness",
		ranking: 5,
		cover: "https://ia801509.us.archive.org/5/items/mbid-9959a5d7-76c2-4cc0-8178-30453a225d78/mbid-9959a5d7-76c2-4cc0-8178-30453a225d78-12288745526.jpg",
		description: "The best metal record of the year, blending complex instrumentation with absolutely engaging songwriting.",
		sample: {title: "Shock Me", url: "https://www.youtube.com/watch?v=hS5osAdTnm0"}
	},
	{
		title: "Art Angels",
		artist: "Grimes",
		ranking: 4,
		cover: "http://www.grimesmusic.com/wp-content/themes/grimes/images/packshot.jpg",
		description: "Equal parts experimental, accessible, sweet and devilish, making for a truly engaging and artful pop record.",
		sample: {title: "Realiti", url: "https://www.youtube.com/watch?v=Lveqodcepjs"}
	},
	{
		title: "To Pimp A Butterfly",
		artist: "Kendrick Lamar",
		ranking: 3,
		cover: "https://ia600504.us.archive.org/0/items/mbid-b4d6e526-4195-49bc-b660-b6df4c27686e/mbid-b4d6e526-4195-49bc-b660-b6df4c27686e-9896943304.jpg",
		description: "The record that made 2015, with it's charged yet socially conscious lyrics perfectly encapsulating the troubles of black America today.",
		sample: {title: "u", url: "https://www.youtube.com/watch?v=e5Ri76UodWM"}
	},
	{
		title: "Have You In My Wilderness",
		artist: "Julia Holter",
		ranking: 2,
		cover: "https://ia801308.us.archive.org/28/items/mbid-5a2306a4-d0b9-4d65-8e81-07d10fdd39e9/mbid-5a2306a4-d0b9-4d65-8e81-07d10fdd39e9-11644390969.jpg",
		description: "At once experimental yet inviting, a dreamy record that gets beneath your skin no matter what emotion it's evoking.",
		sample: {title: "Feel You", url: "https://www.youtube.com/watch?v=X2JgMniIpRM"}
	},
	{
		title: "Painted Shut",
		artist: "Hop Along",
		ranking: 1,
		cover: "https://ia800505.us.archive.org/27/items/mbid-8114b878-c9ff-4c4f-bc19-5baabc10f32c/mbid-8114b878-c9ff-4c4f-bc19-5baabc10f32c-10513425245.jpg",
		description: "Indie rock perfection, a blend of immediately catchy instrumentation, quirky yet emotional songwriting, and one of the best rock-voices in the scene today.",
		sample: {title: "Sister Cities", url: "https://www.youtube.com/watch?v=SHs_5z9ikiw"}
	}
];