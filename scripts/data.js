var title = "Noccy's Favorite Albums of 2015";

var opener = "At the start of 2015, one of the resolutions I had set myself was to better educate myself on modern music and what it had to offer, both to broaden my own appreciation of a craft I love and to better be able to discuss and share my findings with my friends. As such, by the end of this expedition over a 120 albums had passed through my tired old headphones, and even though I still missed a handful of the bigger releases of the year I found myself enjoying (or at least appreciating) the vast majority of the records I checked out. Of course though, a handful of albums stood out above the rest and lured me back to indulge in them over and over again, so in commemoration of this crazy ride: here are my 25 favorite albums I listened to in 2015!";

var closer = "And there you have it! My personal favorites of 2015, from it's most engaging pop records all the way down to the most challenging and ear grabbing rap and indie albums I managed to pick up. At least in the scope of albums I listened to, I honestly do think 2015 was a pretty great year in music, pushing boundaries in how music could be constructed, what it could say, and how it could say it, and even only a few weeks in 2016 is shaping up to be just as riveting. I'm hoping to pick up and listen to even more albums this year with a better ear for the standouts (I missed a handful of bigger releases in 2015 such as Bjork's new record, Deafheaven's album, so on), and most of all: I'm hoping to finally set up and get a blog for my music up and running. That'll all come in time though: for now, I gotta listen to 'The Knock' one more time~";

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
		description: "Easily my favorite ambient record of the year, Haiku Salut's mid-year release stood out from most of the other ambient releases this year due to it's use of live, organic samples alongside synthesized sounds. This produces a broad emotional pallete that they use to paint an astonishing spread of emotions, from the bright hopeful opening to the uplifting, yet oddly despondent ending notes.",
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
		description: "In the world of music these days, the term 'emo' often isn't associated with high quality records, but the Connecticut-based band came through with an album that could show how tastefully and artfully the aesthetic can be done, supported with powerful, lofty lyrics and complemented by a poise and grace characteristic of much quieter listens.",
		sample: {title: "January 10th, 2014", url: "https://www.youtube.com/watch?v=mVg0lBtzgQQ"}
	},
	{
		title: "Revisionist",
		artist: "Sannhet",
		ranking: 9,
		cover: "https://f1.bcbits.com/img/a1977073613_10.jpg",
		description: "Although one of the lesser-known releases in the metal genre this year, this album stuck with me as one of the most blistering, unrelenting, and exhilarating albums I caught since it's springtime release. Even so, there is also method in its madness: as loud and pummelling as its sounds are, they are put together in a way that generates a send of vastness and atmosphere unlike any other.",
		sample: {title: "Revisionist", url: "https://www.youtube.com/watch?v=zwyyE2D0Zvc"}
	},
	{
		title: "Algiers",
		artist: "Algiers",
		ranking: 8,
		cover: "http://store.matadorrecords.com/media/catalog/product/cache/4/image/360x/85e4522595efc69f496374d01ef2bf13/o/l/ole-1067_algiers.jpg",
		description: "The self-titled debut from the Atlanta-based band more than caught me off-guard with potent, heavy sound that showcased lead singer Franklin James Fischer's soulful, blues-inspired vocals. His singing is truly something to behold, especially when matched up to industrial rock instrumentation that gets beneath one's skin.",
		sample: {title: "Blood", url: "https://www.youtube.com/watch?v=g3L0NI8vcMg"}
	},
	{
		title: "Autumn Eternal",
		artist: "Panopticon",
		ranking: 7,
		cover: "https://ia801504.us.archive.org/7/items/mbid-a5d62b8d-cf06-4b4a-bebb-47fd72c22ae1/mbid-a5d62b8d-cf06-4b4a-bebb-47fd72c22ae1-12454974558.jpg",
		description: "Carrying nods to American folk traditions, the last in a trilogy of albums released by the band carries a weight and poeticism that few black metal albums truly capture. While it carries the speed and ferocity that fans of the genre know and love, they are framed and balanced by quieter moments and melodies that deftly evoke the feelings of the season they aimed to encapsulate.",
		sample: {title: "Sleep to the Sound of Waves Crashing", url: "https://www.youtube.com/watch?v=GOwXjGjSVU8"}
	},
	{
		title: "The Things We Do To Find People Who Feel Like Us",
		artist: "Beach Slang",
		ranking: 6,
		cover: "https://f1.bcbits.com/img/a2813479087_10.jpg",
		description: "Clocking in at a lean 26 minutes and with only one of its ten songs breaking the three-minute mark, the short but sweet ride of Beach Slang's debut is breezy, cathartic indie rock bliss. Everything from the gritty vocals to the punky guitars are carried with confidence, yet perfectly evoke the often impulsive but honest things we do to cope with or escape the loniless of day-to-day life.",
		sample: {title: "Bad Art and Wierdo Ideas", url: "https://www.youtube.com/watch?v=i7nXvOTqyCY"}
	},
	{
		title: "Purple",
		artist: "Baroness",
		ranking: 5,
		cover: "https://ia801509.us.archive.org/5/items/mbid-9959a5d7-76c2-4cc0-8178-30453a225d78/mbid-9959a5d7-76c2-4cc0-8178-30453a225d78-12288745526.jpg",
		description: "One of the last albums released in 2015 also ultimately turned out to be one of it's best. After a controversial stylistic change with their previous double album Yellow & Green, Baroness continued to push forward yet brought back sounds evocative of some of their earlier work, the end result being easily the best metal album to come out that year.",
		sample: {title: "Shock Me", url: "https://www.youtube.com/watch?v=hS5osAdTnm0"}
	},
	{
		title: "Art Angels",
		artist: "Grimes",
		ranking: 4,
		cover: "http://www.grimesmusic.com/wp-content/themes/grimes/images/packshot.jpg",
		description: "Claire Boucher's follow-up to her 2012 hit 'Visions' was one of the most anticipated albums of the year, following the scrapping of an entire album's worth of material in the meantime because 'it sucked'. Even so, Boucher's third release exceeded expectations with it's blend of devil-may-care pop, bright evocative elements borrowed from genres such as trance and world music, and just the right amount of off-kilter weirdness to make it one of the most engaging yet universably accessible albums of the 2010s so far.",
		sample: {title: "Realiti", url: "https://www.youtube.com/watch?v=Lveqodcepjs"}
	},
	{
		title: "To Pimp A Butterfly",
		artist: "Kendrick Lamar",
		ranking: 3,
		cover: "https://ia600504.us.archive.org/0/items/mbid-b4d6e526-4195-49bc-b660-b6df4c27686e/mbid-b4d6e526-4195-49bc-b660-b6df4c27686e-9896943304.jpg",
		description: "In many ways, this is the album that defined 2015 both in the music world and in the world beyond. Easily the best-received album of the year, Lamar's second album already stands out from other hip hop releases this year for it's vibrant old-school production and the rapper's talents as a lyricist. However, it's even more admirable as a time capsule for the era, encompassing modern race issues in entertainment and day-to-day life with depth and understanding of all sides of the arguments, yet with a clear point to make in favor of progress.",
		sample: {title: "u", url: "https://www.youtube.com/watch?v=e5Ri76UodWM"}
	},
	{
		title: "Have You In My Wilderness",
		artist: "Julia Holter",
		ranking: 2,
		cover: "https://ia801308.us.archive.org/28/items/mbid-5a2306a4-d0b9-4d65-8e81-07d10fdd39e9/mbid-5a2306a4-d0b9-4d65-8e81-07d10fdd39e9-11644390969.jpg",
		description: "Following one of 2013's best releases with the ambient, atmospheric 'Loud City Song', Holter made a noticeable stylistc jump with her newest album, yet once again pulled off one of the best records of its respective year. Though many of the aforementioned ambient qualities have been set aside somewhat, her personality and talents as a producer come much more to the forefront this time around, and though it's still spacey and atmospheric it instead achieves this with a dreamy vibrancy and charisma that solidifies it as an experiment that paid off in dividends.",
		sample: {title: "Feel You", url: "https://www.youtube.com/watch?v=X2JgMniIpRM"}
	},
	{
		title: "Painted Shut",
		artist: "Hop Along",
		ranking: 1,
		cover: "https://ia800505.us.archive.org/27/items/mbid-8114b878-c9ff-4c4f-bc19-5baabc10f32c/mbid-8114b878-c9ff-4c4f-bc19-5baabc10f32c-10513425245.jpg",
		description: "There is only one way I can describe this album: indie rock perfection. This album stuck with me nearly every day since I first picked it up back in May, and I could go on and on about how much I adore it's tasteful, unpretentious indie rock catchiness and charm, it's quirky off-beat lyrics that tell unusual stories yet still frame complex problems and issues about growth and emotional baggage from the past, and so on. Lead singer Frances Quinlan's voice once again steals the show here though, her evocative singing and the incredible grit and rasp in her voice making her one of the greatest voices in rock still working today.",
		sample: {title: "Sister Cities", url: "https://www.youtube.com/watch?v=SHs_5z9ikiw"}
	}
];