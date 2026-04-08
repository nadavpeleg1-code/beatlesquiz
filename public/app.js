'use strict';

// ─── Beatles jokes ─────────────────────────────────────────────────────────
const JOKES = [
  "Why did Paul McCartney go to art school? He wanted to draw a Blackbird.",
  "What's John Lennon's favorite dessert? Imagine all the people eating ice cream.",
  "Why don't the Beatles play poker? They always have Yesterday in their hand.",
  "What did George Harrison say to the traffic jam? Here comes the sun — I said it's alright.",
  "Why did Ringo become a drummer? He couldn't find any free chairs.",
  "What do you call a Beatles song about farming? Let It Beet.",
  "Why is Eleanor Rigby so sad? She keeps all her music in a jar by the door.",
  "What's a Beatle's favorite subject? The Long and Winding Road to graduation.",
  "Why did John cross the road? He imagined there was no road.",
  "What do you call a sleeping Beatle? Ringo Starr-zzz.",
  "What did the Beatle say to the dentist? I've got a filling — and I feel fine.",
  "Why did Ringo get lost? He was following the Yellow Submarine's GPS.",
  "What's a Beatles fan's favorite cheese? Yeah yeah yeah... Edam.",
  "Why did Paul bring a ladder to the concert? He heard the notes were very high.",
  "Why is Help! the most relatable Beatles song? Because it's what I say when this round starts.",
  "How many Beatles does it take to change a lightbulb? Four — John imagines it changed, Paul writes a song about it, George meditates on it, and Ringo knocks it over.",
  "What did the octopus say after the concert? I had a garden of hands for applause.",
  "Why did the Beatles never get lost? Because they always came together.",
  "What do you call a Beatle who oversleeps? Late It Be.",
  "What's George Harrison's least favorite season? Fall — everything comes together and then leaves.",
];

function randomJoke() {
  return JOKES[Math.floor(Math.random() * JOKES.length)];
}

// ─── Shop catalogue ────────────────────────────────────────────────────────
const SHOP_ITEMS = [
  { id:'default',    name:'Classic Fan',        desc:'Your default look',             price:0,    rarity:'c', seed:'beatlesfan',        style:'pixel-art',  bg:'12121f' },
  { id:'john',       name:'The Lennon',          desc:'Imagine all the people...',     price:100,  rarity:'c', seed:'JohnLennon1940',    style:'pixel-art',  bg:'1e3a5f' },
  { id:'paul',       name:'The McCartney',       desc:'Yesterday, all my troubles...', price:100,  rarity:'c', seed:'PaulMcCartney42',   style:'pixel-art',  bg:'3d1a2e' },
  { id:'george',     name:'The Harrison',        desc:'Here comes the sun...',         price:100,  rarity:'c', seed:'GeorgeHarrison43',  style:'pixel-art',  bg:'1a3d1a' },
  { id:'ringo',      name:'The Starr',           desc:'With a little help...',         price:100,  rarity:'c', seed:'RingoStarr1940',    style:'pixel-art',  bg:'3d3a1a' },
  { id:'abbey',      name:'Abbey Road',          desc:'The iconic crosswalk',          price:500,  rarity:'r', seed:'abbeyroad1969',     style:'bottts',     bg:'2d2d2d' },
  { id:'pepper',     name:"Sgt. Pepper's",       desc:'Band uniform ready',            price:500,  rarity:'r', seed:'sgtpepper1967',     style:'bottts',     bg:'3d1a5e' },
  { id:'submarine',  name:'Yellow Submarine',    desc:'We all live in a...',           price:750,  rarity:'r', seed:'yellowsub1966',     style:'bottts',     bg:'6a5200' },
  { id:'strawberry', name:'Strawberry Fields',   desc:'Nothing is real',               price:750,  rarity:'r', seed:'strawfields1967',   style:'adventurer', bg:'5e1a3d' },
  { id:'revolver',   name:'Revolver Era',        desc:'Studio magicians',              price:1000, rarity:'e', seed:'revolver1966',      style:'lorelei',    bg:'1a1a1a' },
  { id:'psychedelic',name:'Psychedelic Period',  desc:'All you need is love',          price:1500, rarity:'e', seed:'psychedelic1967',   style:'adventurer', bg:'3d0a5e' },
  { id:'hamburg',    name:'Hamburg Days',        desc:'Before the fame',               price:1500, rarity:'e', seed:'hamburg1962',       style:'pixel-art',  bg:'0d0d0d' },
  { id:'sullivan',   name:'Ed Sullivan Show',    desc:'The night that changed music',  price:2000, rarity:'e', seed:'edsullivan1964',    style:'lorelei',    bg:'1a0d0d' },
  { id:'rooftop',    name:'Rooftop Concert',     desc:'Their last public performance', price:3000, rarity:'l', seed:'rooftop1969',       style:'adventurer', bg:'5e0a0a' },
  { id:'hardday',    name:"Hard Day's Night",    desc:'Black & white film noir',       price:3500, rarity:'l', seed:'hardday1964',       style:'pixel-art',  bg:'0a0a0a' },
  { id:'golden',     name:'Golden Beatles',      desc:'The ultimate fan badge',        price:5000, rarity:'l', seed:'goldenbeatles',     style:'bottts',     bg:'6a4a00' },
  // Real photo avatars
  { id:'photo-ringo',    name:'Ringo Starr',          desc:'With his newborn son, 1967',     price:2500, rarity:'e', photo:'images/ringo-starr.jpg' },
  { id:'photo-john',     name:'John Lennon',         desc:'Hamburg era, 1962',              price:2500, rarity:'e', photo:'images/john-lennon.jpg' },
  { id:'photo-paul',     name:'Paul McCartney',       desc:'Hamburg era, 1962',              price:2500, rarity:'e', photo:'images/paul-mccartney.jpg' },
  { id:'photo-george',   name:'George Harrison',      desc:'Hamburg era, 1962',              price:2500, rarity:'e', photo:'images/george-harrison.jpg' },
  { id:'photo-pepper',   name:"Sgt. Pepper's Squad",  desc:'All four, 1967 — legendary',    price:3500, rarity:'l', photo:'images/sgt-pepper.jpg' },
  { id:'photo-rooftop',  name:'Last Concert Ever',    desc:'Savile Row rooftop, Jan 1969',   price:4000, rarity:'l', photo:'images/rooftop.jpg' },
  { id:'photo-george67', name:'George 1967',          desc:'Psychedelic era portrait',       price:3000, rarity:'e', photo:'images/george-1967.jpg' },
  { id:'photo-football', name:'Kick About',           desc:'A day off in London, 1967',      price:3000, rarity:'e', photo:'images/football.jpg' },
];
const RARITY_MAP = { c:'bc', r:'br', e:'be', l:'bl' };
const RARITY_NAME = { c:'Common', r:'Rare', e:'Epic', l:'Legendary' };

function avatarUrl(id) {
  const item = SHOP_ITEMS.find(i => i.id === id) || SHOP_ITEMS[0];
  if (item.photo) return item.photo;
  return `https://api.dicebear.com/7.x/${item.style}/svg?seed=${item.seed}&backgroundColor=${item.bg}`;
}

const BEATLE_PHOTOS = ['images/john-lennon.jpg','images/paul-mccartney.jpg','images/george-harrison.jpg','images/ringo-starr.jpg','images/sgt-pepper.jpg','images/rooftop.jpg','images/george-1967.jpg','images/football.jpg'];
function setGoBg() {
  const el = document.getElementById('go-photo-bg');
  if (el) el.style.backgroundImage = `url('${BEATLE_PHOTOS[Math.floor(Math.random()*3)]}')`;
}

// ─── Song list (client-side, mirrors server) ───────────────────────────────
const ALL_SONGS = [
  // Tier 1
  { title:'Hey Jude',                          query:'Hey Jude Beatles',                          tier:1 },
  { title:'Let It Be',                          query:'Let It Be Beatles',                          tier:1 },
  { title:'Come Together',                      query:'Come Together Beatles',                      tier:1 },
  { title:'Yesterday',                          query:'Yesterday Beatles',                          tier:1 },
  { title:'Help!',                              query:'Help Beatles 1965',                          tier:1 },
  { title:'Twist and Shout',                    query:'Twist and Shout Beatles',                    tier:1 },
  { title:'Love Me Do',                         query:'Love Me Do Beatles',                         tier:1 },
  { title:"A Hard Day's Night",                 query:"A Hard Day's Night Beatles",                 tier:1 },
  { title:'Eleanor Rigby',                      query:'Eleanor Rigby Beatles',                      tier:1 },
  { title:'Yellow Submarine',                   query:'Yellow Submarine Beatles',                   tier:1 },
  { title:'She Loves You',                      query:'She Loves You Beatles',                      tier:1 },
  { title:'I Want to Hold Your Hand',           query:'I Want to Hold Your Hand Beatles',           tier:1 },
  { title:"Can't Buy Me Love",                  query:"Can't Buy Me Love Beatles",                  tier:1 },
  { title:'Something',                          query:'Something Beatles Abbey Road',               tier:1 },
  { title:'Here Comes the Sun',                 query:'Here Comes the Sun Beatles',                 tier:1 },
  { title:'Blackbird',                          query:'Blackbird Beatles White Album',              tier:1 },
  { title:'Get Back',                           query:'Get Back Beatles 1969',                      tier:1 },
  { title:'In My Life',                         query:'In My Life Beatles',                         tier:1 },
  // Tier 2
  { title:'Norwegian Wood',                     query:'Norwegian Wood Beatles',                     tier:2 },
  { title:'Michelle',                           query:'Michelle Beatles',                           tier:2 },
  { title:'Penny Lane',                         query:'Penny Lane Beatles',                         tier:2 },
  { title:'Strawberry Fields Forever',          query:'Strawberry Fields Forever Beatles',          tier:2 },
  { title:'I Am the Walrus',                    query:'I Am the Walrus Beatles',                    tier:2 },
  { title:'Lucy in the Sky with Diamonds',      query:'Lucy in the Sky with Diamonds Beatles',      tier:2 },
  { title:'Back in the U.S.S.R.',               query:'Back in the USSR Beatles',                   tier:2 },
  { title:'While My Guitar Gently Weeps',       query:'While My Guitar Gently Weeps Beatles',       tier:2 },
  { title:"Don't Let Me Down",                  query:"Don't Let Me Down Beatles",                  tier:2 },
  { title:'The Long and Winding Road',          query:'The Long and Winding Road Beatles',          tier:2 },
  { title:'Ob-La-Di, Ob-La-Da',                query:'Ob-La-Di Ob-La-Da Beatles',                  tier:2 },
  { title:'With a Little Help from My Friends', query:'With a Little Help from My Friends Beatles', tier:2 },
  { title:'All You Need Is Love',               query:'All You Need Is Love Beatles',               tier:2 },
  { title:'Hello, Goodbye',                     query:'Hello Goodbye Beatles',                      tier:2 },
  { title:'Paperback Writer',                   query:'Paperback Writer Beatles',                   tier:2 },
  { title:'Lady Madonna',                       query:'Lady Madonna Beatles',                       tier:2 },
  { title:'Got to Get You into My Life',        query:'Got to Get You into My Life Beatles',        tier:2 },
  { title:'Good Day Sunshine',                  query:'Good Day Sunshine Beatles',                  tier:2 },
  { title:'Ticket to Ride',                     query:'Ticket to Ride Beatles',                     tier:2 },
  { title:'Nowhere Man',                        query:'Nowhere Man Beatles',                        tier:2 },
  { title:'Eight Days a Week',                  query:'Eight Days a Week Beatles',                  tier:2 },
  { title:'Across the Universe',                query:'Across the Universe Beatles',                tier:2 },
  { title:"Octopus's Garden",                   query:"Octopus's Garden Beatles",                   tier:2 },
  { title:'Oh! Darling',                        query:'Oh Darling Beatles Abbey Road',              tier:2 },
  { title:'Drive My Car',                       query:'Drive My Car Beatles Rubber Soul',           tier:2 },
  { title:'The Ballad of John and Yoko',        query:'The Ballad of John and Yoko Beatles',        tier:2 },
  { title:'I Feel Fine',                        query:'I Feel Fine Beatles',                        tier:2 },
  { title:'We Can Work It Out',                 query:'We Can Work It Out Beatles',                 tier:2 },
  { title:'Day Tripper',                        query:'Day Tripper Beatles',                        tier:2 },
  { title:'Revolution',                         query:'Revolution Beatles 1968',                    tier:2 },
  { title:'The Fool on the Hill',               query:'The Fool on the Hill Beatles',               tier:2 },
  { title:'Hey Bulldog',                        query:'Hey Bulldog Beatles',                        tier:2 },
  { title:'Two of Us',                          query:'Two of Us Beatles Let It Be',                tier:2 },
  { title:'From Me to You',                     query:'From Me to You Beatles',                     tier:2 },
  { title:'Please Please Me',                   query:'Please Please Me Beatles',                   tier:2 },
  // Tier 3
  { title:'Taxman',                             query:'Taxman Beatles Revolver',                    tier:3 },
  { title:'Happiness Is a Warm Gun',            query:'Happiness Is a Warm Gun Beatles',            tier:3 },
  { title:'Rocky Raccoon',                      query:'Rocky Raccoon Beatles White Album',          tier:3 },
  { title:'Martha My Dear',                     query:'Martha My Dear Beatles',                     tier:3 },
  { title:'Julia',                              query:'Julia Beatles White Album',                  tier:3 },
  { title:'Helter Skelter',                     query:'Helter Skelter Beatles White Album',         tier:3 },
  { title:'Yer Blues',                          query:'Yer Blues Beatles White Album',              tier:3 },
  { title:"I'm So Tired",                       query:"I'm So Tired Beatles White Album",           tier:3 },
  { title:'Piggies',                            query:'Piggies Beatles White Album',                tier:3 },
  { title:'Honey Pie',                          query:'Honey Pie Beatles White Album',              tier:3 },
  { title:'Sexy Sadie',                         query:'Sexy Sadie Beatles White Album',             tier:3 },
  { title:'Savoy Truffle',                      query:'Savoy Truffle Beatles White Album',          tier:3 },
  { title:'Birthday',                           query:'Birthday Beatles White Album',               tier:3 },
  { title:'Glass Onion',                        query:'Glass Onion Beatles White Album',            tier:3 },
  { title:'Cry Baby Cry',                       query:'Cry Baby Cry Beatles White Album',           tier:3 },
  { title:"Mother Nature's Son",                query:"Mother Nature's Son Beatles",                tier:3 },
  { title:'Think for Yourself',                 query:'Think for Yourself Beatles Rubber Soul',     tier:3 },
  { title:'I Saw Her Standing There',           query:'I Saw Her Standing There Beatles',           tier:3 },
  { title:'For No One',                         query:'For No One Beatles Revolver',                tier:3 },
  { title:"I'm Only Sleeping",                  query:"I'm Only Sleeping Beatles Revolver",         tier:3 },
  { title:'Long, Long, Long',                   query:'Long Long Long Beatles White Album',         tier:3 },
  { title:'Because',                            query:'Because Beatles Abbey Road',                 tier:3 },
  { title:'You Never Give Me Your Money',       query:'You Never Give Me Your Money Beatles',       tier:3 },
  { title:'Sun King',                           query:'Sun King Beatles Abbey Road',                tier:3 },
  { title:'Golden Slumbers',                    query:'Golden Slumbers Beatles Abbey Road',         tier:3 },
  { title:'Carry That Weight',                  query:'Carry That Weight Beatles Abbey Road',       tier:3 },
  { title:'The End',                            query:'The End Beatles Abbey Road',                 tier:3 },
  { title:"Maxwell's Silver Hammer",            query:"Maxwell's Silver Hammer Beatles",            tier:3 },
  { title:'Mean Mr. Mustard',                   query:'Mean Mr Mustard Beatles Abbey Road',         tier:3 },
  { title:'Polythene Pam',                      query:'Polythene Pam Beatles Abbey Road',           tier:3 },
  { title:'She Came In Through the Bathroom Window', query:'She Came In Through the Bathroom Window Beatles', tier:3 },
  { title:'For You Blue',                       query:'For You Blue Beatles Let It Be',             tier:3 },
  { title:'I Me Mine',                          query:'I Me Mine Beatles',                          tier:3 },
  { title:'Dig a Pony',                         query:'Dig a Pony Beatles Let It Be',               tier:3 },
  { title:'Wild Honey Pie',                     query:'Wild Honey Pie Beatles White Album',         tier:3 },
  { title:'Goodnight',                                  query:'Goodnight Beatles White Album',                  tier:3 },
  // 100 additional songs
  { title:'Now and Then',                               query:'Now and Then Beatles 2023',                      tier:1 },
  { title:'Dear Prudence',                              query:'Dear Prudence Beatles',                          tier:2 },
  { title:'A Day in the Life',                          query:'A Day in the Life Beatles',                      tier:2 },
  { title:"When I'm Sixty-Four",                        query:"When I'm Sixty-Four Beatles",                    tier:2 },
  { title:'If I Fell',                                  query:'If I Fell Beatles',                              tier:2 },
  { title:'I Should Have Known Better',                 query:'I Should Have Known Better Beatles',             tier:2 },
  { title:'And I Love Her',                             query:'And I Love Her Beatles',                         tier:2 },
  { title:"I'll Follow the Sun",                        query:"I'll Follow the Sun Beatles",                    tier:2 },
  { title:"You've Got to Hide Your Love Away",          query:"You've Got to Hide Your Love Away Beatles",      tier:2 },
  { title:'Here There and Everywhere',                  query:'Here There and Everywhere Beatles',              tier:2 },
  { title:'Magical Mystery Tour',                       query:'Magical Mystery Tour Beatles',                   tier:2 },
  { title:'All My Loving',                              query:'All My Loving Beatles',                          tier:2 },
  { title:'Please Mister Postman',                      query:'Please Mister Postman Beatles',                  tier:2 },
  { title:'Roll Over Beethoven',                        query:'Roll Over Beethoven Beatles',                    tier:2 },
  { title:"Money (That's What I Want)",                 query:"Money That's What I Want Beatles",               tier:2 },
  { title:'Do You Want to Know a Secret',               query:'Do You Want to Know a Secret Beatles',          tier:2 },
  { title:'Rock and Roll Music',                        query:'Rock and Roll Music Beatles',                    tier:2 },
  { title:'Free as a Bird',                             query:'Free as a Bird Beatles',                         tier:2 },
  { title:'Real Love',                                  query:'Real Love Beatles',                              tier:2 },
  { title:'Long Tall Sally',                            query:'Long Tall Sally Beatles',                        tier:2 },
  { title:"She's a Woman",                              query:"She's a Woman Beatles",                          tier:2 },
  { title:'Being for the Benefit of Mr. Kite!',        query:'Being for the Benefit of Mr Kite Beatles',      tier:3 },
  { title:'Getting Better',                             query:'Getting Better Beatles Sgt Peppers',             tier:3 },
  { title:'Fixing a Hole',                              query:'Fixing a Hole Beatles Sgt Peppers',              tier:3 },
  { title:"She's Leaving Home",                         query:"She's Leaving Home Beatles",                     tier:3 },
  { title:'Lovely Rita',                                query:'Lovely Rita Beatles Sgt Peppers',                tier:3 },
  { title:'Good Morning Good Morning',                  query:'Good Morning Good Morning Beatles',              tier:3 },
  { title:'Within You Without You',                     query:'Within You Without You Beatles',                 tier:3 },
  { title:'Any Time at All',                            query:'Any Time at All Beatles',                        tier:3 },
  { title:"I'll Cry Instead",                           query:"I'll Cry Instead Beatles",                       tier:3 },
  { title:'Things We Said Today',                       query:'Things We Said Today Beatles',                   tier:3 },
  { title:'When I Get Home',                            query:'When I Get Home Beatles',                        tier:3 },
  { title:"You Can't Do That",                          query:"You Can't Do That Beatles",                      tier:3 },
  { title:"I'll Be Back",                               query:"I'll Be Back Beatles",                           tier:3 },
  { title:'Tell Me Why',                                query:'Tell Me Why Beatles',                            tier:3 },
  { title:"I'm Happy Just to Dance with You",           query:"I'm Happy Just to Dance with You Beatles",      tier:3 },
  { title:'No Reply',                                   query:'No Reply Beatles Beatles for Sale',              tier:3 },
  { title:"Baby's in Black",                            query:"Baby's in Black Beatles",                        tier:3 },
  { title:'Every Little Thing',                         query:'Every Little Thing Beatles',                     tier:3 },
  { title:"I Don't Want to Spoil the Party",            query:"I Don't Want to Spoil the Party Beatles",       tier:3 },
  { title:"What You're Doing",                          query:"What You're Doing Beatles",                      tier:3 },
  { title:'The Night Before',                           query:'The Night Before Beatles Help',                  tier:3 },
  { title:'I Need You',                                 query:'I Need You Beatles Help',                        tier:3 },
  { title:'Another Girl',                               query:'Another Girl Beatles Help',                      tier:3 },
  { title:"You're Going to Lose That Girl",             query:"You're Going to Lose That Girl Beatles",         tier:3 },
  { title:"It's Only Love",                             query:"It's Only Love Beatles Help",                    tier:3 },
  { title:"I've Just Seen a Face",                      query:"I've Just Seen a Face Beatles",                  tier:3 },
  { title:'Dizzy Miss Lizzy',                           query:'Dizzy Miss Lizzy Beatles',                       tier:3 },
  { title:'The Word',                                   query:'The Word Beatles Rubber Soul',                   tier:3 },
  { title:"You Won't See Me",                           query:"You Won't See Me Beatles",                       tier:3 },
  { title:'Run for Your Life',                          query:'Run for Your Life Beatles Rubber Soul',          tier:3 },
  { title:"I'm Looking Through You",                    query:"I'm Looking Through You Beatles",                tier:3 },
  { title:'Wait',                                       query:'Wait Beatles Rubber Soul',                       tier:3 },
  { title:'And Your Bird Can Sing',                     query:'And Your Bird Can Sing Beatles',                 tier:3 },
  { title:'She Said She Said',                          query:'She Said She Said Beatles',                      tier:3 },
  { title:'Love to You',                                query:'Love to You Beatles Revolver',                   tier:3 },
  { title:'Dr. Robert',                                 query:'Dr Robert Beatles Revolver',                     tier:3 },
  { title:'Blue Jay Way',                               query:'Blue Jay Way Beatles',                           tier:3 },
  { title:'Flying',                                     query:'Flying Beatles Magical Mystery Tour',            tier:3 },
  { title:'Your Mother Should Know',                    query:'Your Mother Should Know Beatles',                tier:3 },
  { title:"Baby You're a Rich Man",                     query:"Baby You're a Rich Man Beatles",                 tier:3 },
  { title:"It Won't Be Long",                           query:"It Won't Be Long Beatles",                       tier:3 },
  { title:"All I've Got to Do",                         query:"All I've Got to Do Beatles",                     tier:3 },
  { title:'Little Child',                               query:'Little Child Beatles',                           tier:3 },
  { title:'Hold Me Tight',                              query:'Hold Me Tight Beatles',                          tier:3 },
  { title:"You've Really Got a Hold on Me",             query:"You've Really Got a Hold on Me Beatles",         tier:3 },
  { title:'I Wanna Be Your Man',                        query:'I Wanna Be Your Man Beatles',                    tier:3 },
  { title:'Not a Second Time',                          query:'Not a Second Time Beatles',                      tier:3 },
  { title:'Anna (Go to Him)',                           query:'Anna Go to Him Beatles',                         tier:3 },
  { title:'Boys',                                       query:'Boys Beatles Please Please Me',                  tier:3 },
  { title:'P.S. I Love You',                            query:'PS I Love You Beatles',                          tier:3 },
  { title:'A Taste of Honey',                           query:'A Taste of Honey Beatles',                       tier:3 },
  { title:"There's a Place",                            query:"There's a Place Beatles",                        tier:3 },
  { title:'Misery',                                     query:'Misery Beatles Please Please Me',                tier:3 },
  { title:"I've Got a Feeling",                         query:"I've Got a Feeling Beatles Let It Be",            tier:3 },
  { title:'One After 909',                              query:'One After 909 Beatles',                          tier:3 },
  { title:"Don't Pass Me By",                           query:"Don't Pass Me By Beatles White Album",           tier:3 },
  { title:'I Will',                                     query:'I Will Beatles White Album',                     tier:3 },
  { title:"Why Don't We Do It in the Road?",            query:"Why Don't We Do It in the Road Beatles",         tier:3 },
  { title:'Revolution 1',                               query:'Revolution 1 Beatles White Album',               tier:3 },
  { title:'Kansas City',                                query:'Kansas City Beatles Hey Hey Hey Hey',            tier:3 },
  { title:'Mr. Moonlight',                              query:'Mr Moonlight Beatles',                           tier:3 },
  { title:'Words of Love',                              query:'Words of Love Beatles',                          tier:3 },
  { title:"Honey Don't",                                query:"Honey Don't Beatles",                            tier:3 },
  { title:"Everybody's Trying to Be My Baby",           query:"Everybody's Trying to Be My Baby Beatles",       tier:3 },
  { title:'Tell Me What You See',                       query:'Tell Me What You See Beatles',                   tier:3 },
  { title:'You Like Me Too Much',                       query:'You Like Me Too Much Beatles',                   tier:3 },
  { title:'Act Naturally',                              query:'Act Naturally Beatles',                          tier:3 },
  { title:'Yes It Is',                                  query:'Yes It Is Beatles',                              tier:3 },
  { title:'Bad Boy',                                    query:'Bad Boy Beatles',                                tier:3 },
  { title:'Matchbox',                                   query:'Matchbox Beatles',                               tier:3 },
  { title:'Slow Down',                                  query:'Slow Down Beatles',                              tier:3 },
  { title:'I Call Your Name',                           query:'I Call Your Name Beatles',                       tier:3 },
  { title:'Leave My Kitten Alone',                      query:'Leave My Kitten Alone Beatles',                  tier:3 },
  { title:'Chains',                                     query:'Chains Beatles Please Please Me',                tier:3 },
  { title:'Ask Me Why',                                 query:'Ask Me Why Beatles',                             tier:3 },
  { title:'Besame Mucho',                               query:'Besame Mucho Beatles',                           tier:3 },
  { title:'Like Dreamers Do',                           query:'Like Dreamers Do Beatles',                       tier:3 },
  { title:'That Means a Lot',                           query:'That Means a Lot Beatles',                       tier:3 },
  { title:"If You've Got Trouble",                      query:"If You've Got Trouble Beatles",                  tier:3 },
  // Additional songs
  { title:'Rain',                                       query:'Rain Beatles 1966 single',                       tier:2 },
  { title:'This Boy',                                   query:'This Boy Beatles 1963',                          tier:2 },
  { title:'Thank You Girl',                             query:'Thank You Girl Beatles',                         tier:2 },
  { title:"I'll Get You",                               query:"I'll Get You Beatles",                           tier:2 },
  { title:"Baby It's You",                              query:"Baby It's You Beatles",                          tier:2 },
  { title:'The Inner Light',                            query:'The Inner Light Beatles 1968',                   tier:2 },
  { title:"I'm Down",                                   query:"I'm Down Beatles 1965",                          tier:2 },
  { title:'Old Brown Shoe',                             query:'Old Brown Shoe Beatles',                         tier:3 },
  { title:'You Know My Name (Look Up the Number)',      query:'You Know My Name Look Up the Number Beatles',    tier:3 },
  { title:'The Continuing Story of Bungalow Bill',      query:'The Continuing Story of Bungalow Bill Beatles',  tier:3 },
  { title:'Maggie Mae',                                 query:'Maggie Mae Beatles Let It Be',                   tier:3 },
  { title:'Dig It',                                     query:'Dig It Beatles Let It Be',                       tier:3 },
  { title:"Don't Bother Me",                            query:"Don't Bother Me Beatles",                        tier:3 },
  { title:'Hello Little Girl',                          query:'Hello Little Girl Beatles Anthology',            tier:3 },
  { title:'Love of the Loved',                          query:'Love of the Loved Beatles Anthology',            tier:3 },
  { title:"Three Cool Cats",                            query:"Three Cool Cats Beatles Anthology",              tier:3 },
  { title:'To Know Her Is to Love Her',                 query:'To Know Her Is to Love Her Beatles',             tier:3 },
  { title:'Sure to Fall',                               query:'Sure to Fall in Love with You Beatles',          tier:3 },
  { title:'Some Other Guy',                             query:'Some Other Guy Beatles',                         tier:3 },
  { title:'Soldier of Love',                            query:'Soldier of Love Beatles BBC',                    tier:3 },
  { title:'Too Much Monkey Business',                   query:'Too Much Monkey Business Beatles BBC',           tier:3 },
  { title:"I Forgot to Remember to Forget",             query:"I Forgot to Remember to Forget Beatles",         tier:3 },
  { title:"Nothin' Shakin'",                            query:"Nothin Shakin Beatles BBC",                      tier:3 },
  { title:'Memphis, Tennessee',                         query:'Memphis Tennessee Beatles BBC',                  tier:3 },
  { title:'Sheila',                                     query:'Sheila Beatles BBC',                             tier:3 },
  { title:'Carol',                                      query:'Carol Beatles BBC',                              tier:3 },
  { title:'Lend Me Your Comb',                          query:'Lend Me Your Comb Beatles',                      tier:3 },
  { title:'Keep Your Hands Off My Baby',                query:'Keep Your Hands Off My Baby Beatles',            tier:3 },
  { title:"Glad All Over",                              query:"Glad All Over Beatles BBC",                      tier:3 },
  { title:"I Just Don't Understand",                    query:"I Just Don't Understand Beatles BBC",            tier:3 },
  { title:'So How Come (No One Loves Me)',              query:'So How Come No One Loves Me Beatles',            tier:3 },
  { title:"Crying, Waiting, Hoping",                    query:"Crying Waiting Hoping Beatles Anthology",        tier:3 },
  { title:'Beautiful Dreamer',                          query:'Beautiful Dreamer Beatles BBC',                  tier:3 },
  { title:"Where Have You Been All My Life",            query:"Where Have You Been All My Life Beatles BBC",    tier:3 },
  { title:'Ooh! My Soul',                               query:'Ooh My Soul Beatles BBC',                        tier:3 },
  { title:"A Shot of Rhythm and Blues",                 query:"A Shot of Rhythm and Blues Beatles BBC",         tier:3 },
  { title:'A Taste of Honey',                           query:'A Taste of Honey Beatles Please Please Me',      tier:3 },
  { title:'Your True Love',                             query:'Your True Love Beatles BBC',                     tier:3 },
  { title:"I Got to Find My Baby",                      query:'I Got to Find My Baby Beatles BBC',              tier:3 },
  { title:'Searchin',                                   query:'Searchin Beatles Anthology Decca',               tier:3 },
  { title:'The Honeymoon Song',                         query:'The Honeymoon Song Beatles BBC',                 tier:3 },
  { title:'Pop Go the Beatles',                         query:'Pop Go the Beatles BBC intro',                   tier:3 },
  { title:"Hippy Hippy Shake",                          query:"Hippy Hippy Shake Beatles BBC",                  tier:3 },
  { title:'Lucille',                                    query:'Lucille Beatles BBC',                            tier:3 },

  // ── New: missed classics ─────────────────────────────────────────────────
  { title:'Girl',                                        query:'Girl Beatles Rubber Soul',                        tier:1 },
  { title:"I'm a Loser",                                 query:"I'm a Loser Beatles for Sale",                    tier:1 },
  { title:'Tomorrow Never Knows',                        query:'Tomorrow Never Knows Beatles Revolver',           tier:1 },
  { title:"Sgt. Pepper's Lonely Hearts Club Band",       query:"Sgt Peppers Lonely Hearts Club Band Beatles",     tier:1 },
  { title:'All Together Now',                            query:'All Together Now Beatles Yellow Submarine',       tier:1 },
  // ── Missed tier 2 ────────────────────────────────────────────────────────
  { title:'Till There Was You',                          query:'Till There Was You Beatles',                      tier:2 },
  { title:'What Goes On',                                query:'What Goes On Beatles Rubber Soul',                tier:2 },
  { title:'If I Needed Someone',                         query:'If I Needed Someone Beatles Rubber Soul',         tier:2 },
  { title:'I Want to Tell You',                          query:'I Want to Tell You Beatles Revolver',             tier:2 },
  { title:'Devil in Her Heart',                          query:'Devil in Her Heart Beatles',                      tier:2 },
  { title:"It's All Too Much",                           query:"It's All Too Much Beatles Yellow Submarine",      tier:2 },
  { title:'Only a Northern Song',                        query:'Only a Northern Song Beatles Yellow Submarine',   tier:2 },
  { title:'Hallelujah, I Love Her So',                   query:'Hallelujah I Love Her So Beatles BBC',            tier:2 },
  { title:'Twenty Flight Rock',                          query:'Twenty Flight Rock Beatles BBC',                  tier:2 },
  { title:'Be-Bop-A-Lula',                               query:'Be-Bop-A-Lula Beatles BBC',                       tier:2 },
  { title:"Don't Ever Change",                           query:"Don't Ever Change Beatles BBC",                   tier:2 },
  { title:"I Want You (She's So Heavy)",                 query:"I Want You She's So Heavy Beatles Abbey Road",    tier:2 },
  { title:'Her Majesty',                                 query:'Her Majesty Beatles Abbey Road',                  tier:2 },
  { title:"Everybody's Got Something to Hide",           query:"Everybody's Got Something to Hide Beatles",       tier:2 },
  // ── BBC Sessions ─────────────────────────────────────────────────────────
  { title:'Clarabella',                                  query:'Clarabella Beatles BBC',                          tier:3 },
  { title:"I'm Gonna Sit Right Down and Cry Over You",   query:"I'm Gonna Sit Right Down and Cry Beatles BBC",   tier:3 },
  { title:'The Sheik of Araby',                          query:'Sheik of Araby Beatles Decca Anthology',          tier:3 },
  { title:'Sweet Little Sixteen',                        query:'Sweet Little Sixteen Beatles BBC',                tier:3 },
  { title:'Lonesome Tears in My Eyes',                   query:'Lonesome Tears in My Eyes Beatles BBC',           tier:3 },
  { title:'Little Queenie',                              query:'Little Queenie Beatles BBC Hamburg',              tier:3 },
  { title:"What'd I Say",                                query:"What'd I Say Beatles BBC",                        tier:3 },
  { title:'Youngblood',                                  query:'Youngblood Beatles BBC Coasters',                 tier:3 },
  { title:'I Got a Woman',                               query:'I Got a Woman Beatles BBC',                       tier:3 },
  { title:'I Remember You',                              query:'I Remember You Beatles BBC',                      tier:3 },
  { title:'Side by Side',                                query:'Side by Side Beatles BBC',                        tier:3 },
  { title:'Johnny B. Goode',                             query:'Johnny B Goode Beatles BBC',                      tier:3 },
  { title:"Talkin' 'Bout You",                           query:"Talkin Bout You Beatles BBC",                     tier:3 },
  { title:"I'm Talking About You",                       query:"I'm Talking About You Beatles BBC",               tier:3 },
  { title:'From Us to You',                              query:'From Us to You Beatles BBC',                      tier:3 },
  { title:'Soldier of Love',                             query:'Soldier of Love Beatles BBC',                     tier:3 },
  { title:'Too Much Monkey Business',                    query:'Too Much Monkey Business Beatles BBC',            tier:3 },
  { title:'I Forgot to Remember to Forget',              query:'I Forgot to Remember to Forget Beatles BBC',      tier:3 },
  { title:"Nothin' Shakin'",                             query:"Nothin Shakin Beatles BBC",                       tier:3 },
  { title:'Memphis, Tennessee',                          query:'Memphis Tennessee Beatles BBC',                   tier:3 },
  { title:'Sheila',                                      query:'Sheila Beatles BBC Tommy Roe',                    tier:3 },
  { title:'Carol',                                       query:'Carol Beatles BBC Chuck Berry',                   tier:3 },
  { title:'Lend Me Your Comb',                           query:'Lend Me Your Comb Beatles BBC',                   tier:3 },
  { title:'Keep Your Hands Off My Baby',                 query:'Keep Your Hands Off My Baby Beatles BBC',         tier:3 },
  { title:'Glad All Over',                               query:'Glad All Over Beatles BBC',                       tier:3 },
  { title:"I Just Don't Understand",                     query:"I Just Don't Understand Beatles BBC",             tier:3 },
  { title:'So How Come (No One Loves Me)',               query:'So How Come No One Loves Me Beatles BBC',         tier:3 },
  { title:'Crying, Waiting, Hoping',                     query:'Crying Waiting Hoping Beatles BBC Anthology',     tier:3 },
  { title:'Beautiful Dreamer',                           query:'Beautiful Dreamer Beatles BBC',                   tier:3 },
  { title:'Where Have You Been All My Life',             query:'Where Have You Been All My Life Beatles BBC',     tier:3 },
  { title:"Ooh! My Soul",                                query:"Ooh My Soul Beatles BBC Little Richard",          tier:3 },
  { title:'A Shot of Rhythm and Blues',                  query:'A Shot of Rhythm and Blues Beatles BBC',          tier:3 },
  { title:'Your True Love',                              query:'Your True Love Beatles BBC Carl Perkins',         tier:3 },
  { title:"I Got to Find My Baby",                       query:"I Got to Find My Baby Beatles BBC",               tier:3 },
  { title:'Hippy Hippy Shake',                           query:'Hippy Hippy Shake Beatles BBC',                   tier:3 },
  { title:'Lucille',                                     query:'Lucille Beatles BBC Little Richard',              tier:3 },
  { title:"Searchin'",                                   query:"Searchin Beatles Anthology Decca",                tier:3 },
  { title:'The Honeymoon Song',                          query:'The Honeymoon Song Beatles BBC',                  tier:3 },
  { title:"I'll Be on My Way",                           query:"I'll Be on My Way Beatles BBC",                   tier:3 },
  { title:'Shake, Rattle and Roll',                      query:'Shake Rattle and Roll Beatles BBC',               tier:3 },
  { title:"I Got to Find My Baby",                       query:"I Got to Find My Baby Beatles BBC",               tier:3 },
  // ── Anthology & rarities ─────────────────────────────────────────────────
  { title:'In Spite of All the Danger',                  query:'In Spite of All the Danger Beatles Anthology',   tier:3 },
  { title:"That'll Be the Day",                          query:"That'll Be the Day Quarrymen Beatles Anthology",  tier:3 },
  { title:'My Bonnie',                                   query:'My Bonnie Tony Sheridan Beatles 1961',            tier:3 },
  { title:"Ain't She Sweet",                             query:"Ain't She Sweet Beatles Tony Sheridan Anthology", tier:3 },
  { title:'Cry for a Shadow',                            query:'Cry for a Shadow Beatles Anthology 1961',         tier:3 },
  { title:'How Do You Do It',                            query:'How Do You Do It Beatles Anthology 1962',         tier:3 },
  { title:'Not Guilty',                                  query:'Not Guilty George Harrison Beatles Anthology',    tier:3 },
  { title:"What's the New Mary Jane",                    query:"What's the New Mary Jane Beatles Anthology",      tier:3 },
  { title:'Teddy Boy',                                   query:'Teddy Boy Beatles Anthology Let It Be Naked',     tier:3 },
  { title:'Junk',                                        query:'Junk Paul McCartney Let It Be demo',              tier:3 },
  { title:'All Things Must Pass',                        query:'All Things Must Pass George Harrison Beatles',    tier:3 },
  { title:'Come and Get It',                             query:'Come and Get It Paul McCartney demo Badfinger',   tier:3 },
  { title:"You'll Be Mine",                              query:"You'll Be Mine Beatles home recording 1960",      tier:3 },
  // ── German & Hamburg ─────────────────────────────────────────────────────
  { title:'Komm, Gib Mir Deine Hand',                    query:'Komm Gib Mir Deine Hand Beatles German',          tier:3 },
  { title:'Sie Liebt Dich',                              query:'Sie Liebt Dich Beatles German',                   tier:3 },
  { title:'Falling in Love Again',                       query:'Falling in Love Again Beatles Hamburg 1962',      tier:3 },
  { title:'Red Sails in the Sunset',                     query:'Red Sails in the Sunset Beatles Hamburg 1962',    tier:3 },
  { title:'Reminiscing',                                 query:'Reminiscing Beatles Hamburg Bobby Charles',        tier:3 },
  { title:'September in the Rain',                       query:'September in the Rain Beatles Decca 1962',        tier:3 },
  // ── More obscure deep cuts ───────────────────────────────────────────────
  { title:"Sgt. Pepper's (Reprise)",                     query:"Sgt Peppers Reprise Beatles",                     tier:3 },
  { title:'Revolution 9',                                query:'Revolution 9 Beatles White Album',                tier:3 },
  { title:'Step Inside Love',                            query:'Step Inside Love Paul McCartney',                 tier:3 },
  { title:'Thank You Girl',                              query:'Thank You Girl Beatles 1963 B-side',              tier:3 },
  { title:"I'll Get You",                                query:"I'll Get You Beatles 1963 B-side",                tier:3 },
  { title:'The Inner Light',                             query:'The Inner Light Beatles 1968 B-side',             tier:3 },
  { title:"I'm Down",                                    query:"I'm Down Beatles 1965 B-side",                    tier:3 },
  { title:'Rain',                                        query:'Rain Beatles 1966 B-side',                        tier:3 },
  { title:'This Boy',                                    query:'This Boy Beatles 1963 B-side',                    tier:3 },
  { title:'Old Brown Shoe',                              query:'Old Brown Shoe Beatles B-side 1969',              tier:3 },
  { title:'You Know My Name (Look Up the Number)',       query:'You Know My Name Look Up the Number Beatles',     tier:3 },
  { title:'The Continuing Story of Bungalow Bill',       query:'Bungalow Bill Beatles White Album',               tier:3 },
  { title:'Dig It',                                      query:'Dig It Beatles Let It Be',                        tier:3 },
  { title:"Don't Bother Me",                             query:"Don't Bother Me Beatles George Harrison",         tier:3 },
  { title:'Wild Honey Pie',                              query:'Wild Honey Pie Beatles White Album',              tier:3 },
  { title:'Maggie Mae',                                  query:'Maggie Mae Beatles Let It Be traditional',        tier:3 },
  { title:'Love of the Loved',                           query:'Love of the Loved Beatles Anthology Decca',       tier:3 },
  { title:'Hello Little Girl',                           query:'Hello Little Girl Beatles Anthology Decca',       tier:3 },
  { title:'Three Cool Cats',                             query:'Three Cool Cats Beatles Anthology Decca',         tier:3 },
  { title:'To Know Her Is to Love Her',                  query:'To Know Her Is to Love Her Beatles BBC',          tier:3 },
  { title:'Sure to Fall',                                query:'Sure to Fall in Love with You Beatles BBC',       tier:3 },
  { title:'Some Other Guy',                              query:'Some Other Guy Beatles BBC',                      tier:3 },
  { title:'Like Dreamers Do',                            query:'Like Dreamers Do Beatles Anthology Decca',        tier:3 },
  { title:'That Means a Lot',                            query:'That Means a Lot Beatles Anthology',              tier:3 },
  { title:"If You've Got Trouble",                       query:"If You've Got Trouble Beatles Anthology",         tier:3 },
  { title:'Cayenne',                                     query:'Cayenne Paul McCartney instrumental',             tier:3 },
  { title:"Baby It's You",                               query:"Baby It's You Beatles Please Please Me",          tier:3 },
  { title:"Pop Go the Beatles",                          query:"Pop Go the Beatles BBC theme",                    tier:3 },

  // ── 300 NEW ADDITIONS ──────────────────────────────────────────────────────
  // Tier promotions (dedup logic keeps lowest tier — these promote famous songs)
  { title:'Norwegian Wood (This Bird Has Flown)',  query:'Norwegian Wood Beatles Rubber Soul',           tier:1 },
  { title:'Strawberry Fields Forever',             query:'Strawberry Fields Forever Beatles',            tier:1 },
  { title:'Penny Lane',                            query:'Penny Lane Beatles',                           tier:1 },
  { title:'Michelle',                              query:'Michelle Beatles Rubber Soul',                 tier:1 },
  { title:'Back in the U.S.S.R.',                  query:'Back in the USSR Beatles White Album',         tier:1 },
  { title:'While My Guitar Gently Weeps',          query:'While My Guitar Gently Weeps Beatles',        tier:1 },
  { title:'Ob-La-Di, Ob-La-Da',                   query:'Ob La Di Ob La Da Beatles White Album',       tier:1 },
  { title:'All You Need Is Love',                  query:'All You Need Is Love Beatles',                tier:1 },
  { title:"Don't Let Me Down",                     query:"Don't Let Me Down Beatles single 1969",       tier:1 },
  { title:'A Day in the Life',                     query:'A Day in the Life Beatles Sgt Pepper',        tier:1 },
  { title:'Eight Days a Week',                     query:'Eight Days a Week Beatles Beatles for Sale',  tier:1 },
  { title:'I Feel Fine',                           query:'I Feel Fine Beatles single 1964',             tier:1 },
  { title:'Day Tripper',                           query:'Day Tripper Beatles double A-side 1965',      tier:1 },
  { title:'We Can Work It Out',                    query:'We Can Work It Out Beatles 1965',             tier:1 },
  { title:'Paperback Writer',                      query:'Paperback Writer Beatles single 1966',        tier:1 },
  { title:'Lady Madonna',                          query:'Lady Madonna Beatles single 1968',            tier:1 },
  { title:'The Long and Winding Road',             query:'The Long and Winding Road Beatles Let It Be', tier:1 },
  { title:'Revolution',                            query:'Revolution Beatles White Album 1968',         tier:1 },
  { title:'Ticket to Ride',                        query:'Ticket to Ride Beatles 1965 single',         tier:1 },
  { title:'Please Please Me',                      query:'Please Please Me Beatles 1963',               tier:1 },
  { title:'Across the Universe',                   query:'Across the Universe Beatles Let It Be',       tier:1 },
  { title:'From Me to You',                        query:'From Me to You Beatles 1963 single',         tier:1 },
  { title:'The Ballad of John and Yoko',           query:'The Ballad of John and Yoko Beatles 1969',   tier:1 },
  { title:"Octopus's Garden",                      query:"Octopus's Garden Beatles Abbey Road",        tier:1 },
  { title:'Oh! Darling',                           query:'Oh Darling Beatles Abbey Road 1969',         tier:1 },
  { title:'Drive My Car',                          query:'Drive My Car Beatles Rubber Soul 1965',      tier:1 },
  { title:'Dear Prudence',                         query:'Dear Prudence Beatles White Album 1968',     tier:1 },
  { title:'I Am the Walrus',                       query:'I Am the Walrus Beatles Magical Mystery',    tier:1 },
  { title:'Got to Get You into My Life',           query:'Got to Get You into My Life Beatles Revolver', tier:1 },
  { title:'Good Day Sunshine',                     query:'Good Day Sunshine Beatles Revolver',         tier:1 },
  // Tier 2 promotions
  { title:'Julia',                                 query:'Julia Beatles White Album John Lennon',       tier:2 },
  { title:"Mother Nature's Son",                   query:"Mother Nature's Son Beatles White Album",     tier:2 },
  { title:'Rocky Raccoon',                         query:'Rocky Raccoon Beatles White Album',          tier:2 },
  { title:'Martha My Dear',                        query:'Martha My Dear Beatles White Album',         tier:2 },
  { title:'Birthday',                              query:'Birthday Beatles White Album',               tier:2 },
  { title:'Yer Blues',                             query:'Yer Blues Beatles White Album',              tier:2 },
  { title:'Honey Pie',                             query:'Honey Pie Beatles White Album',              tier:2 },
  { title:'Helter Skelter',                        query:'Helter Skelter Beatles White Album',         tier:2 },
  { title:'Glass Onion',                           query:'Glass Onion Beatles White Album',            tier:2 },
  { title:'Sexy Sadie',                            query:'Sexy Sadie Beatles White Album',             tier:2 },
  { title:'Savoy Truffle',                         query:'Savoy Truffle Beatles White Album George',   tier:2 },
  { title:'Happiness Is a Warm Gun',               query:'Happiness Is a Warm Gun Beatles White Album', tier:2 },
  { title:'Piggies',                               query:'Piggies Beatles White Album George Harrison', tier:2 },
  { title:"I'm So Tired",                          query:"I'm So Tired Beatles White Album Lennon",   tier:2 },
  { title:'I Will',                                query:'I Will Beatles White Album Paul McCartney',  tier:2 },
  { title:'Cry Baby Cry',                          query:'Cry Baby Cry Beatles White Album',           tier:2 },
  { title:'Long, Long, Long',                      query:'Long Long Long Beatles White Album George',  tier:2 },
  { title:'Goodnight',                             query:'Goodnight Beatles White Album Ringo',        tier:2 },
  { title:"Why Don't We Do It in the Road?",       query:"Why Don't We Do It in the Road Beatles",    tier:2 },
  { title:"Everybody's Got Something to Hide Except Me and My Monkey", query:"Everybody's Got Something to Hide Beatles White Album", tier:2 },
  { title:"Being for the Benefit of Mr. Kite!",   query:"Being for the Benefit of Mr Kite Beatles Sgt Pepper", tier:2 },
  { title:"When I'm Sixty-Four",                   query:"When I'm Sixty-Four Beatles Sgt Pepper",    tier:2 },
  { title:"She's Leaving Home",                    query:"She's Leaving Home Beatles Sgt Pepper",     tier:2 },
  { title:'Within You Without You',                query:'Within You Without You Beatles Sgt Pepper George', tier:2 },
  { title:'Lovely Rita',                           query:'Lovely Rita Beatles Sgt Pepper',            tier:2 },
  { title:'Good Morning Good Morning',             query:'Good Morning Good Morning Beatles Sgt Pepper', tier:2 },
  { title:'Getting Better',                        query:'Getting Better Beatles Sgt Pepper',         tier:2 },
  { title:'Fixing a Hole',                         query:'Fixing a Hole Beatles Sgt Pepper',          tier:2 },
  { title:'Lucy in the Sky with Diamonds',         query:'Lucy in the Sky with Diamonds Beatles',     tier:2 },
  { title:'Taxman',                                query:'Taxman Beatles Revolver George Harrison',    tier:2 },
  { title:'Here Comes the Sun',                    query:'Here Comes the Sun Beatles Abbey Road',     tier:2 },
  { title:'Something',                             query:'Something Beatles Abbey Road George',       tier:2 },
  { title:'Because',                               query:'Because Beatles Abbey Road',                tier:2 },
  { title:"Maxwell's Silver Hammer",               query:"Maxwell's Silver Hammer Beatles Abbey Road", tier:2 },
  { title:"I Want You (She's So Heavy)",           query:"I Want You She's So Heavy Beatles Abbey Road", tier:2 },
  { title:'Sun King',                              query:'Sun King Beatles Abbey Road medley',        tier:2 },
  { title:'Mean Mr. Mustard',                      query:'Mean Mr Mustard Beatles Abbey Road medley', tier:2 },
  { title:'Polythene Pam',                         query:'Polythene Pam Beatles Abbey Road medley',   tier:2 },
  { title:'She Came In Through the Bathroom Window', query:'She Came In Through the Bathroom Window Beatles', tier:2 },
  { title:'Golden Slumbers',                       query:'Golden Slumbers Beatles Abbey Road',        tier:2 },
  { title:'Carry That Weight',                     query:'Carry That Weight Beatles Abbey Road',      tier:2 },
  { title:'The End',                               query:'The End Beatles Abbey Road',                tier:2 },
  { title:'Her Majesty',                           query:'Her Majesty Beatles Abbey Road hidden track', tier:2 },
  { title:'Two of Us',                             query:'Two of Us Beatles Let It Be',               tier:2 },
  { title:'Dig a Pony',                            query:'Dig a Pony Beatles Let It Be',              tier:2 },
  { title:'I Me Mine',                             query:'I Me Mine Beatles Let It Be',               tier:2 },
  { title:"I've Got a Feeling",                    query:"I've Got a Feeling Beatles Let It Be",      tier:2 },
  { title:'One After 909',                         query:'One After 909 Beatles Let It Be rooftop',   tier:2 },
  { title:'For You Blue',                          query:'For You Blue Beatles Let It Be George',     tier:2 },
  { title:"You Won't See Me",                      query:"You Won't See Me Beatles Rubber Soul",      tier:2 },
  { title:"I'm Looking Through You",               query:"I'm Looking Through You Beatles Rubber Soul", tier:2 },
  { title:'Think for Yourself',                    query:'Think for Yourself Beatles Rubber Soul George', tier:2 },
  { title:'The Word',                              query:'The Word Beatles Rubber Soul',              tier:2 },
  { title:'Run for Your Life',                     query:'Run for Your Life Beatles Rubber Soul',     tier:2 },
  { title:'If I Needed Someone',                   query:'If I Needed Someone Beatles Rubber Soul George', tier:2 },
  { title:'What Goes On',                          query:'What Goes On Beatles Rubber Soul Ringo',    tier:2 },
  { title:'Dr. Robert',                            query:'Dr Robert Beatles Revolver',                tier:2 },
  { title:'I Want to Tell You',                    query:'I Want to Tell You Beatles Revolver George', tier:2 },
  { title:'Love to You',                           query:'Love to You Beatles Revolver George',       tier:2 },
  { title:'And Your Bird Can Sing',                query:'And Your Bird Can Sing Beatles Revolver',   tier:2 },
  { title:'She Said She Said',                     query:'She Said She Said Beatles Revolver',        tier:2 },
  { title:'For No One',                            query:'For No One Beatles Revolver Paul',          tier:2 },
  { title:"I'm Only Sleeping",                     query:"I'm Only Sleeping Beatles Revolver Lennon", tier:2 },
  { title:'Tomorrow Never Knows',                  query:'Tomorrow Never Knows Beatles Revolver',     tier:2 },
  { title:'The Fool on the Hill',                  query:'The Fool on the Hill Beatles Magical Mystery', tier:2 },
  { title:'Blue Jay Way',                          query:'Blue Jay Way Beatles Magical Mystery Tour George', tier:2 },
  { title:'Flying',                                query:'Flying Beatles Magical Mystery Tour instrumental', tier:2 },
  { title:'Your Mother Should Know',               query:'Your Mother Should Know Beatles Magical Mystery', tier:2 },
  { title:"Baby You're a Rich Man",                query:"Baby You're a Rich Man Beatles 1967 single", tier:2 },
  { title:'Hello, Goodbye',                        query:'Hello Goodbye Beatles single 1967',         tier:2 },
  { title:'Magical Mystery Tour',                  query:'Magical Mystery Tour Beatles EP 1967',      tier:2 },
  { title:'Eleanor Rigby',                         query:'Eleanor Rigby Beatles Revolver 1966',      tier:2 },
  { title:'Yellow Submarine',                      query:'Yellow Submarine Beatles Revolver 1966',   tier:2 },
  { title:'Here There and Everywhere',             query:'Here There and Everywhere Beatles Revolver', tier:2 },
  // Tier 3 genuine new songs
  { title:'When the Saints Go Marching In',        query:'When the Saints Go Marching In Tony Sheridan Beatles 1961', tier:3 },
  { title:"Why (Can't You Love Me Again)",         query:"Why Can't You Love Me Again Tony Sheridan Beatles Anthology", tier:3 },
  { title:"Nobody's Child",                        query:"Nobody's Child Tony Sheridan Beatles Hamburg 1961", tier:3 },
  { title:'Take Out Some Insurance on Me, Baby',   query:'Take Out Some Insurance on Me Baby Beatles Tony Sheridan', tier:3 },
  { title:'Sweet Georgia Brown',                   query:'Sweet Georgia Brown Tony Sheridan Beatles Hamburg', tier:3 },
  { title:'Skinny Minnie',                         query:'Skinny Minnie Tony Sheridan Beatles Hamburg 1961', tier:3 },
  { title:"That's All Right (Mama)",               query:"That's All Right Mama Beatles BBC Saturday Club 1963", tier:3 },
  { title:'Take Good Care of My Baby',             query:'Take Good Care of My Baby Beatles Decca audition 1962', tier:3 },
  { title:'Child of Nature',                       query:'Child of Nature John Lennon Beatles Anthology demo 1968', tier:3 },
  { title:'Circles',                               query:'Circles George Harrison Beatles Anthology demo 1968', tier:3 },
  { title:'Sour Milk Sea',                         query:'Sour Milk Sea George Harrison Beatles Apple 1968', tier:3 },
  { title:'Christmas Time (Is Here Again)',        query:'Christmas Time Is Here Again Beatles fan club 1967', tier:3 },
  { title:'Etcetera',                              query:'Etcetera Paul McCartney Beatles White Album demo', tier:3 },
  { title:"That's My Woman",                       query:"That's My Woman Beatles early home recording 1960", tier:3 },
  { title:'Los Paranoias',                         query:'Los Paranoias Beatles White Album outtake', tier:3 },
  { title:"What'd I Say",                          query:"What'd I Say Beatles BBC Ray Charles cover", tier:3 },
  { title:"I'm Talkin' About You",                 query:"I'm Talking About You Beatles BBC Chuck Berry", tier:3 },
  { title:"Talkin' 'Bout You",                     query:"Talkin' Bout You Beatles BBC early recording", tier:3 },
  { title:'I Was Made to Love Her',                query:'I Was Made to Love Her Beatles BBC Stevie Wonder cover 1967', tier:3 },
  { title:"That'll Be the Day",                    query:"That'll Be the Day Quarrymen Beatles Anthology 1958", tier:3 },
  { title:"Ain't She Sweet",                       query:"Ain't She Sweet Beatles Tony Sheridan Anthology Hamburg", tier:3 },
  { title:"You'll Be Mine",                        query:"You'll Be Mine Beatles home recording 1960", tier:3 },
  { title:'My Bonnie',                             query:'My Bonnie Tony Sheridan Beatles 1961 Polydor', tier:3 },
  { title:'Cry for a Shadow',                      query:'Cry for a Shadow Beatles Anthology 1961 Hamburg', tier:3 },
  { title:'How Do You Do It',                      query:'How Do You Do It Beatles Anthology 1962 demo', tier:3 },
  { title:'Not Guilty',                            query:'Not Guilty George Harrison Beatles Anthology 1968', tier:3 },
  { title:"What's the New Mary Jane",              query:"What's the New Mary Jane Beatles White Album outtake", tier:3 },
  { title:'Teddy Boy',                             query:'Teddy Boy Beatles Anthology Let It Be Paul McCartney', tier:3 },
  { title:'Junk',                                  query:'Junk Paul McCartney Beatles Let It Be demo Anthology', tier:3 },
  { title:'All Things Must Pass',                  query:'All Things Must Pass George Harrison Beatles Anthology demo', tier:3 },
  { title:'Come and Get It',                       query:'Come and Get It Paul McCartney demo Badfinger Beatles', tier:3 },
  { title:'In Spite of All the Danger',            query:'In Spite of All the Danger Beatles 1958 Quarrymen Anthology', tier:3 },
  { title:'Free as a Bird',                        query:'Free as a Bird Beatles Anthology 1995',    tier:3 },
  { title:'Real Love',                             query:'Real Love Beatles Anthology 1996',          tier:3 },
  { title:'Now and Then',                          query:'Now and Then Beatles 2023',                 tier:3 },
  { title:'Komm, Gib Mir Deine Hand',              query:'Komm Gib Mir Deine Hand Beatles German version 1964', tier:3 },
  { title:'Sie Liebt Dich',                        query:'Sie Liebt Dich Beatles German version She Loves You', tier:3 },
  { title:"Sgt. Pepper's (Reprise)",               query:"Sgt Peppers Lonely Hearts Club Band Reprise Beatles", tier:3 },
  { title:'Revolution 9',                          query:'Revolution 9 Beatles White Album experimental', tier:3 },
  { title:"Everybody's Trying to Be My Baby",      query:"Everybody's Trying to Be My Baby Beatles BBC Carl Perkins", tier:3 },
  { title:"Honey Don't",                           query:"Honey Don't Beatles Beatles for Sale Ringo Carl Perkins", tier:3 },
  { title:"I Don't Want to Spoil the Party",       query:"I Don't Want to Spoil the Party Beatles for Sale Lennon", tier:3 },
  { title:"What You're Doing",                     query:"What You're Doing Beatles for Sale",        tier:3 },
  { title:'No Reply',                              query:'No Reply Beatles for Sale John Lennon',     tier:3 },
  { title:"Baby's in Black",                       query:"Baby's in Black Beatles for Sale",          tier:3 },
  { title:'Every Little Thing',                    query:'Every Little Thing Beatles for Sale Paul McCartney', tier:3 },
  { title:'Words of Love',                         query:'Words of Love Beatles for Sale Buddy Holly cover', tier:3 },
  { title:'Mr. Moonlight',                         query:'Mr Moonlight Beatles for Sale Dr Feelgood cover', tier:3 },
  { title:'Kansas City',                           query:'Kansas City Beatles for Sale Hey Hey Hey Hey', tier:3 },
  { title:'Rock and Roll Music',                   query:'Rock and Roll Music Beatles for Sale Chuck Berry', tier:3 },
  { title:"I'll Follow the Sun",                   query:"I'll Follow the Sun Beatles for Sale Paul McCartney", tier:3 },
  { title:"Baby It's You",                         query:"Baby It's You Beatles Please Please Me Shirelles", tier:3 },
  { title:"There's a Place",                       query:"There's a Place Beatles Please Please Me 1963", tier:3 },
  { title:'Misery',                                query:'Misery Beatles Please Please Me 1963',       tier:3 },
  { title:'Anna (Go to Him)',                      query:'Anna Go to Him Beatles Please Please Me Arthur Alexander', tier:3 },
  { title:'Chains',                                query:'Chains Beatles Please Please Me Cookies cover', tier:3 },
  { title:'Boys',                                  query:'Boys Beatles Please Please Me Shirelles Ringo', tier:3 },
  { title:'Ask Me Why',                            query:'Ask Me Why Beatles Please Please Me 1963',  tier:3 },
  { title:'P.S. I Love You',                       query:'PS I Love You Beatles Love Me Do B-side 1962', tier:3 },
  { title:'A Taste of Honey',                      query:'A Taste of Honey Beatles Please Please Me 1963', tier:3 },
  { title:"It Won't Be Long",                      query:"It Won't Be Long Beatles With the Beatles 1963", tier:3 },
  { title:"All I've Got to Do",                    query:"All I've Got to Do Beatles With the Beatles Lennon", tier:3 },
  { title:'Little Child',                          query:'Little Child Beatles With the Beatles',      tier:3 },
  { title:'Hold Me Tight',                         query:'Hold Me Tight Beatles With the Beatles McCartney', tier:3 },
  { title:"You've Really Got a Hold on Me",        query:"You've Really Got a Hold on Me Beatles With the Beatles Miracles", tier:3 },
  { title:'I Wanna Be Your Man',                   query:'I Wanna Be Your Man Beatles With the Beatles Lennon McCartney', tier:3 },
  { title:'Devil in Her Heart',                    query:'Devil in Her Heart Beatles With the Beatles George Harrison', tier:3 },
  { title:'Not a Second Time',                     query:'Not a Second Time Beatles With the Beatles Lennon', tier:3 },
  { title:"Money (That's What I Want)",            query:"Money That's What I Want Beatles With the Beatles Berry Gordy", tier:3 },
  { title:"Don't Bother Me",                       query:"Don't Bother Me Beatles With the Beatles George Harrison", tier:3 },
  { title:"I'll Be Back",                          query:"I'll Be Back Beatles Hard Day's Night album John Lennon", tier:3 },
  { title:"I'll Cry Instead",                      query:"I'll Cry Instead Beatles Hard Day's Night album", tier:3 },
  { title:'Things We Said Today',                  query:"Things We Said Today Beatles Hard Day's Night Paul McCartney", tier:3 },
  { title:'When I Get Home',                       query:"When I Get Home Beatles Hard Day's Night Lennon", tier:3 },
  { title:"You Can't Do That",                     query:"You Can't Do That Beatles Hard Day's Night single B-side", tier:3 },
  { title:'Any Time at All',                       query:"Any Time at All Beatles Hard Day's Night Lennon", tier:3 },
  { title:"I'm Happy Just to Dance with You",      query:"I'm Happy Just to Dance with You Beatles Hard Day's Night George", tier:3 },
  { title:'And I Love Her',                        query:"And I Love Her Beatles Hard Day's Night McCartney", tier:3 },
  { title:'Tell Me Why',                           query:"Tell Me Why Beatles Hard Day's Night Lennon", tier:3 },
  { title:'The Night Before',                      query:'The Night Before Beatles Help! album McCartney', tier:3 },
  { title:'I Need You',                            query:'I Need You Beatles Help! album George Harrison', tier:3 },
  { title:'Another Girl',                          query:'Another Girl Beatles Help! album McCartney',  tier:3 },
  { title:"You're Going to Lose That Girl",        query:"You're Going to Lose That Girl Beatles Help Lennon", tier:3 },
  { title:"It's Only Love",                        query:"It's Only Love Beatles Help album Lennon",   tier:3 },
  { title:"I've Just Seen a Face",                 query:"I've Just Seen a Face Beatles Help McCartney", tier:3 },
  { title:'Dizzy Miss Lizzy',                      query:'Dizzy Miss Lizzy Beatles Help album Larry Williams cover', tier:3 },
  { title:'Act Naturally',                         query:'Act Naturally Beatles Help album Ringo Buck Owens', tier:3 },
  { title:'Yes It Is',                             query:'Yes It Is Beatles Ticket to Ride B-side Lennon', tier:3 },
  { title:'Bad Boy',                               query:'Bad Boy Beatles Larry Williams cover 1965',  tier:3 },
  { title:'Matchbox',                              query:'Matchbox Beatles EP Carl Perkins Ringo 1964', tier:3 },
  { title:'Slow Down',                             query:'Slow Down Beatles EP Larry Williams cover 1964', tier:3 },
  { title:'I Call Your Name',                      query:'I Call Your Name Beatles EP Lennon McCartney 1964', tier:3 },
  { title:'Leave My Kitten Alone',                 query:'Leave My Kitten Alone Beatles outtake 1964 Anthology', tier:3 },
  { title:'Besame Mucho',                          query:'Besame Mucho Beatles Decca audition 1962 McCartney', tier:3 },
  { title:'Like Dreamers Do',                      query:'Like Dreamers Do Beatles Decca audition 1962 McCartney', tier:3 },
  { title:'That Means a Lot',                      query:'That Means a Lot Beatles outtake Help 1965 Anthology', tier:3 },
  { title:"If You've Got Trouble",                 query:"If You've Got Trouble Beatles Help outtake 1965 Ringo", tier:3 },
  { title:'Cayenne',                               query:'Cayenne Paul McCartney early instrumental Beatles 1960', tier:3 },
  { title:'Three Cool Cats',                       query:'Three Cool Cats Beatles Decca audition 1962 Leiber Stoller', tier:3 },
  { title:'To Know Her Is to Love Her',            query:'To Know Her Is to Love Her Beatles BBC Decca Phil Spector', tier:3 },
  { title:'Sure to Fall',                          query:'Sure to Fall in Love with You Beatles BBC Carl Perkins', tier:3 },
  { title:'Some Other Guy',                        query:'Some Other Guy Beatles BBC 1963 Richie Barrett', tier:3 },
  { title:"I'm Gonna Sit Right Down and Cry (Over You)", query:"I'm Gonna Sit Right Down and Cry Beatles BBC Roy Hamilton", tier:3 },
  { title:'The Sheik of Araby',                    query:'Sheik of Araby Beatles Decca audition 1962',  tier:3 },
  { title:'September in the Rain',                 query:'September in the Rain Beatles Decca audition 1962', tier:3 },
  { title:'Beautiful Dreamer',                     query:'Beautiful Dreamer Beatles BBC Stephen Foster', tier:3 },
  { title:'Clarabella',                            query:'Clarabella Beatles BBC Jodimars',              tier:3 },
  { title:'Crying, Waiting, Hoping',               query:'Crying Waiting Hoping Beatles BBC Buddy Holly cover', tier:3 },
  { title:'Love of the Loved',                     query:'Love of the Loved Beatles Decca audition McCartney', tier:3 },
  { title:'Hello Little Girl',                     query:'Hello Little Girl Beatles Decca Anthology Lennon', tier:3 },
  { title:'Hallelujah, I Love Her So',             query:'Hallelujah I Love Her So Beatles Hamburg Ray Charles', tier:3 },
  { title:'Red Sails in the Sunset',               query:'Red Sails in the Sunset Beatles Hamburg 1962 Mack Gordon', tier:3 },
  { title:'Reminiscing',                           query:'Reminiscing Beatles Hamburg Star Club 1962 King Curtis', tier:3 },
  { title:'Falling in Love Again',                 query:'Falling in Love Again Beatles Hamburg Marlene Dietrich cover', tier:3 },
  { title:"Searchin'",                             query:'Searchin Beatles Decca audition Coasters 1962', tier:3 },
  { title:'Sweet Little Sixteen',                  query:'Sweet Little Sixteen Beatles BBC Chuck Berry 1963', tier:3 },
  { title:'Lonesome Tears in My Eyes',             query:'Lonesome Tears in My Eyes Beatles BBC Johnny Burnette', tier:3 },
  { title:'Little Queenie',                        query:'Little Queenie Beatles BBC Hamburg Chuck Berry', tier:3 },
  { title:"Nothin' Shakin'",                       query:"Nothin' Shakin' Beatles BBC Eddie Fontaine cover", tier:3 },
  { title:'Memphis, Tennessee',                    query:'Memphis Tennessee Beatles BBC Chuck Berry',   tier:3 },
  { title:'Sheila',                                query:'Sheila Beatles BBC Tommy Roe cover 1963',     tier:3 },
  { title:'Carol',                                 query:'Carol Beatles BBC Chuck Berry cover',         tier:3 },
  { title:'Lend Me Your Comb',                     query:'Lend Me Your Comb Beatles BBC Carl Perkins', tier:3 },
  { title:'Keep Your Hands Off My Baby',           query:'Keep Your Hands Off My Baby Beatles BBC Little Eva', tier:3 },
  { title:'Glad All Over',                         query:'Glad All Over Beatles BBC Carl Perkins',      tier:3 },
  { title:"I Just Don't Understand",               query:"I Just Don't Understand Beatles BBC Ann-Margret", tier:3 },
  { title:'So How Come (No One Loves Me)',         query:'So How Come No One Loves Me Beatles BBC Everly Brothers', tier:3 },
  { title:'Youngblood',                            query:'Youngblood Beatles BBC Coasters cover',       tier:3 },
  { title:'I Got a Woman',                         query:'I Got a Woman Beatles BBC Ray Charles cover', tier:3 },
  { title:'I Remember You',                        query:'I Remember You Beatles BBC Frank Ifield cover', tier:3 },
  { title:'Side by Side',                          query:'Side by Side Beatles BBC Harry MacGregor Woods', tier:3 },
  { title:'Johnny B. Goode',                       query:'Johnny B Goode Beatles BBC Chuck Berry cover', tier:3 },
  { title:"I'm Talking About You",                 query:"I'm Talking About You Beatles BBC Chuck Berry", tier:3 },
  { title:'From Us to You',                        query:'From Us to You Beatles BBC Radio programme theme', tier:3 },
  { title:'Hippy Hippy Shake',                     query:'Hippy Hippy Shake Beatles BBC Chan Romero cover', tier:3 },
  { title:'Lucille',                               query:'Lucille Beatles BBC Little Richard cover 1963', tier:3 },
  { title:'The Honeymoon Song',                    query:'The Honeymoon Song Beatles BBC Mikis Theodorakis', tier:3 },
  { title:'A Shot of Rhythm and Blues',            query:'A Shot of Rhythm and Blues Beatles BBC Arthur Alexander', tier:3 },
  { title:'Your True Love',                        query:'Your True Love Beatles BBC Carl Perkins cover', tier:3 },
  { title:'I Got to Find My Baby',                 query:'I Got to Find My Baby Beatles BBC Bo Diddley cover', tier:3 },
  { title:'Pop Go the Beatles',                    query:'Pop Go the Beatles BBC radio show theme 1963', tier:3 },
  { title:"Ooh! My Soul",                          query:'Ooh My Soul Beatles BBC Little Richard cover', tier:3 },
  { title:'Where Have You Been All My Life',       query:'Where Have You Been All My Life Beatles BBC Berns Ragovoy', tier:3 },
  { title:'Twenty Flight Rock',                    query:'Twenty Flight Rock Beatles BBC Eddie Cochran Paul McCartney', tier:3 },
  { title:'Be-Bop-A-Lula',                         query:'Be-Bop-A-Lula Beatles BBC Gene Vincent cover', tier:3 },
  { title:"Don't Ever Change",                     query:"Don't Ever Change Beatles BBC Crickets Goffin King", tier:3 },
  { title:"I'll Be on My Way",                     query:"I'll Be on My Way Beatles BBC Billy J Kramer Lennon McCartney", tier:3 },
  { title:'Shake, Rattle and Roll',                query:'Shake Rattle and Roll Beatles BBC Big Joe Turner', tier:3 },
  { title:'Soldier of Love',                       query:'Soldier of Love Beatles BBC Arthur Alexander cover', tier:3 },
  { title:'Too Much Monkey Business',              query:'Too Much Monkey Business Beatles BBC Chuck Berry cover', tier:3 },
  { title:'I Forgot to Remember to Forget',        query:'I Forgot to Remember to Forget Beatles BBC Elvis Presley', tier:3 },
  { title:'Step Inside Love',                      query:'Step Inside Love Paul McCartney Beatles written for Cilla Black', tier:3 },
  { title:'Old Brown Shoe',                        query:'Old Brown Shoe Beatles Ballad of John and Yoko B-side George', tier:3 },
  { title:'You Know My Name (Look Up the Number)', query:'You Know My Name Look Up the Number Beatles Let It Be B-side', tier:3 },
  { title:'The Continuing Story of Bungalow Bill', query:'The Continuing Story of Bungalow Bill Beatles White Album', tier:3 },
  { title:'Maggie Mae',                            query:'Maggie Mae Beatles Let It Be traditional Liverpool folk', tier:3 },
  { title:'Dig It',                                query:'Dig It Beatles Let It Be jamming session',    tier:3 },
  { title:"I'll Get You",                          query:"I'll Get You Beatles She Loves You B-side 1963", tier:3 },
  { title:'Thank You Girl',                        query:'Thank You Girl Beatles From Me to You B-side 1963', tier:3 },
  { title:'This Boy',                              query:'This Boy Beatles I Want to Hold Your Hand B-side', tier:3 },
  { title:'Rain',                                  query:'Rain Beatles Paperback Writer B-side 1966',   tier:3 },
  { title:'The Inner Light',                       query:'The Inner Light Beatles Lady Madonna B-side George Harrison', tier:3 },
  { title:"I'm Down",                              query:"I'm Down Beatles Help B-side Paul McCartney 1965", tier:3 },
  { title:'Revolution 1',                          query:'Revolution 1 Beatles White Album slower version', tier:3 },
  { title:"Don't Pass Me By",                      query:"Don't Pass Me By Beatles White Album Ringo Starr first song", tier:3 },
  { title:"Sgt. Pepper's Lonely Hearts Club Band", query:"Sgt Peppers Lonely Hearts Club Band Beatles opening track", tier:3 },
  { title:"It's All Too Much",                     query:"It's All Too Much Beatles Yellow Submarine George Harrison", tier:3 },
  { title:'Only a Northern Song',                  query:'Only a Northern Song Beatles Yellow Submarine George Harrison', tier:3 },
  { title:'All Together Now',                      query:'All Together Now Beatles Yellow Submarine',   tier:3 },
  { title:'Hey Bulldog',                           query:'Hey Bulldog Beatles Yellow Submarine Lennon McCartney', tier:3 },
];

// Deduplicate ALL_SONGS: for songs listed more than once, keep the lowest-tier (most recognizable) version
const SONGS = (() => {
  const seen = {};
  ALL_SONGS.forEach(s => {
    if (!seen[s.title] || s.tier < seen[s.title].tier) seen[s.title] = s;
  });
  return Object.values(seen);
})();

// ─── User persistence ──────────────────────────────────────────────────────
const DEFAULT_USER = { username:'BeatlesFan', trophies:0, coins:150, profilePic:'default', wins:0, losses:0, songsGuessed:0, owned:['default'] };
function loadUser() {
  try { return { ...DEFAULT_USER, ...JSON.parse(localStorage.getItem('bq_user') || '{}') }; }
  catch { return { ...DEFAULT_USER }; }
}
function saveUser(u) { localStorage.setItem('bq_user', JSON.stringify(u)); }
let user = loadUser();

// ─── Difficulty config ─────────────────────────────────────────────────────
const DIFF = {
  easy:   { label:'Easy',   tier:1, time:30, songs:18  },
  medium: { label:'Medium', tier:2, time:20, songs:55  },
  hard:   { label:'Hard',   tier:3, time:15, songs:999 },
  random: { label:'Random', tier:3, time:0,  songs:999 },
};
function diffTime(d) {
  if (d === 'random') return [15,20,30][Math.floor(Math.random()*3)];
  return DIFF[d]?.time || 30;
}
function diffPillClass(d) { return `diff-pill-${d||'easy'}`; }
let currentDiff = 'easy';

// ─── Navigation ────────────────────────────────────────────────────────────
let history = ['screen-home'];
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (history[history.length-1] !== id) history.push(id);
  if (id === 'screen-home')          refreshHome();
  if (id === 'screen-profile')       refreshProfile();
  if (id === 'screen-shop')          refreshShop();
  if (id === 'screen-difficulty-sp') refreshDiffScreen('sp');
  if (id === 'screen-difficulty-mp') refreshDiffScreen('mp');
  if (id === 'screen-howtoplay')     setJoke('howto-joke');
}
function goBack() {
  history.pop();
  showScreen(history[history.length-1] || 'screen-home');
}
function goHome() { history = ['screen-home']; showScreen('screen-home'); }

function refreshDiffScreen(mode) {
  const id = mode === 'sp' ? 'diff-sp-joke' : 'diff-mp-joke';
  setJoke(id);
}
function setJoke(id) {
  const el = document.getElementById(id);
  if (el) el.textContent = randomJoke();
}

// ─── Home ──────────────────────────────────────────────────────────────────
function refreshHome() {
  user = loadUser();
  document.getElementById('home-avatar').src           = avatarUrl(user.profilePic);
  document.getElementById('home-username').textContent = user.username;
  document.getElementById('home-trophies').textContent = user.trophies;
  document.getElementById('home-coins').textContent    = user.coins;
  setJoke('home-joke');
}

// ─── Profile ───────────────────────────────────────────────────────────────
function refreshProfile() {
  user = loadUser();
  document.getElementById('profile-avatar-img').src  = avatarUrl(user.profilePic);
  document.getElementById('profile-username').value  = user.username;
  document.getElementById('profile-trophies').textContent = user.trophies;
  document.getElementById('profile-coins').textContent    = user.coins;
  document.getElementById('profile-wins').textContent     = user.wins || 0;
  document.getElementById('profile-guessed').textContent  = user.songsGuessed || 0;
  const rank = getRank(user.trophies);
  document.getElementById('profile-rank').innerHTML =
    `<span style="font-size:1.8rem">${rank.icon}</span><div><b>${rank.name}</b><br><small>${rank.desc}</small></div>`;
}
function saveProfile() {
  const v = document.getElementById('profile-username').value.trim();
  if (!v) return toast('Enter a username!');
  user.username = v; saveUser(user);
  if (socket.connected) socket.emit('register', { username:v, trophies:user.trophies, coins:user.coins, profilePic:user.profilePic });
  toast('Profile saved!'); refreshHome();
}
function getRank(t) {
  if (t >= 1000) return { icon:'I', name:'Fab Four Legend',  desc:'Deep cuts master' };
  if (t >= 500)  return { icon:'II', name:'Guitar God',        desc:'Knows them all' };
  if (t >= 300)  return { icon:'III', name:'Studio Maestro',    desc:'Knows all albums' };
  if (t >= 100)  return { icon:'IV', name:'Beatlemaniac',      desc:'Big fan' };
  if (t >= 50)   return { icon:'V', name:'Cavern Club',       desc:'Still learning' };
  return                { icon:'VI', name:'New Fan',            desc:'Just getting started' };
}

// ─── Shop ──────────────────────────────────────────────────────────────────
function refreshShop() {
  user = loadUser();
  document.getElementById('shop-coins').textContent = user.coins;
  const grid = document.getElementById('shop-grid');
  grid.innerHTML = '';
  SHOP_ITEMS.forEach(item => {
    const owned = (user.owned || []).includes(item.id);
    const eq    = user.profilePic === item.id;
    const can   = user.coins >= item.price;
    let action;
    if (eq)         action = `<button class="si-action sa-equipped">Equipped ✓</button>`;
    else if (owned) action = `<button class="si-action sa-equip" onclick="equipItem('${item.id}')">Equip</button>`;
    else if (can)   action = `<button class="si-action sa-buy" onclick="buyItem('${item.id}')">Buy · 🪙${item.price}</button>`;
    else            action = `<button class="si-action sa-locked" disabled>🪙 ${item.price}</button>`;
    const div = document.createElement('div');
    div.className = 'shop-item' + (eq?' equipped':owned?' owned':'');
    div.innerHTML = `
      <span class="si-badge ${RARITY_MAP[item.rarity]}">${RARITY_NAME[item.rarity]}</span>
      <img class="si-av" src="${avatarUrl(item.id)}" loading="lazy" alt="${item.name}">
      <div class="si-name">${item.name}</div>
      <div class="si-desc">${item.desc}</div>
      ${item.price ? `<div class="si-price">🪙 ${item.price}</div>` : '<div class="si-price" style="color:var(--green)">Free</div>'}
      ${action}
    `;
    grid.appendChild(div);
  });
}
function buyItem(id) {
  user = loadUser();
  const item = SHOP_ITEMS.find(i => i.id === id);
  if (!item || user.coins < item.price) return toast('Not enough coins!');
  user.coins -= item.price;
  user.owned  = [...(user.owned || ['default']), id];
  saveUser(user); toast(`Bought ${item.name}!`); refreshShop(); refreshHome();
}
function equipItem(id) {
  user = loadUser();
  if (!(user.owned || []).includes(id)) return toast("You don't own that!");
  user.profilePic = id; saveUser(user);
  if (socket.connected) socket.emit('register', { profilePic: id });
  toast('Avatar equipped!'); refreshShop(); refreshHome();
}

// ─── Socket.io ─────────────────────────────────────────────────────────────
const socket = io();
let myId = null;
let currentPin = null;
let isHost = false;
let gState = {};  // { host, guest, isSinglePlayer }

socket.on('connect', () => {
  myId = socket.id;
  user = loadUser();
  socket.emit('register', { username:user.username, trophies:user.trophies, coins:user.coins, profilePic:user.profilePic });
});

// ─── Create / Join (multiplayer) ───────────────────────────────────────────
function startCreateGame(diff) {
  unlockAudio(); // iOS fix
  currentDiff = diff || 'easy';
  user = loadUser();
  socket.emit('createGame', { username:user.username, trophies:user.trophies, coins:user.coins, profilePic:user.profilePic, diff:currentDiff });
}
socket.on('gameCreated', ({ pin }) => {
  currentPin = pin; isHost = true;
  document.getElementById('pin-display').textContent = pin;
  const badge = document.getElementById('host-diff-badge');
  if (badge) { badge.textContent = DIFF[currentDiff]?.label || ''; badge.className = `topbar-right diff-badge diff-pill-${currentDiff}`; }
  setJoke('lobby-joke');
  showScreen('screen-host');
});
function copyPin() {
  navigator.clipboard.writeText(currentPin).catch(()=>{}).then(() => toast('PIN copied!'));
}
function cancelGame() { currentPin = null; goBack(); }

function joinGame() {
  unlockAudio(); // iOS fix
  const pin = document.getElementById('pin-input').value.trim();
  const err = document.getElementById('join-error');
  if (pin.length !== 6 || !/^\d+$/.test(pin)) { err.textContent = 'Please enter a valid 6-digit PIN.'; return; }
  err.textContent = '';
  user = loadUser(); currentPin = pin; isHost = false;
  socket.emit('joinGame', { pin, username:user.username, trophies:user.trophies, coins:user.coins, profilePic:user.profilePic });
}
socket.on('joinError', ({ msg }) => {
  document.getElementById('join-error').textContent = msg;
  currentPin = null;
});

// ─── Matchmaking ───────────────────────────────────────────────────────────
function startMatchmaking() {
  currentDiff = 'random'; // matchmaking always random
  user = loadUser();
  document.getElementById('mm-trophies').textContent = user.trophies;
  socket.emit('findMatch', { username:user.username, trophies:user.trophies, coins:user.coins, profilePic:user.profilePic, diff:currentDiff });
  setJoke('mm-joke');
  showScreen('screen-matchmaking');
}
function cancelMatchmaking() { socket.emit('leaveQueue'); goBack(); }

// ─── Both Connected ────────────────────────────────────────────────────────
socket.on('bothConnected', data => setupPregame(data));
socket.on('matchFound',    data => setupPregame(data));

function setupPregame({ host, guest, diff }) {
  if (diff) currentDiff = diff;
  gState = { host, guest, isSinglePlayer: false };
  currentPin  = host.pin || currentPin;
  isHost      = host.id === myId;
  setPregameUI(host, guest);
  showScreen('screen-pregame');
}
function setPregameUI(host, guest) {
  document.getElementById('pg-host-av').src         = avatarUrl(host.profilePic);
  document.getElementById('pg-host-name').textContent  = host.username;
  document.getElementById('pg-host-t').textContent     = host.trophies;
  document.getElementById('pg-guest-av').src        = avatarUrl(guest.profilePic);
  document.getElementById('pg-guest-name').textContent = guest.username;
  document.getElementById('pg-guest-t').textContent    = guest.trophies;
  // Difficulty banner
  const banner = document.getElementById('pregame-diff-banner');
  const d = DIFF[currentDiff] || DIFF.easy;
  if (banner) {
    banner.textContent = `${d.label} — ${d.time || '?'}s per song`;
    banner.className = `pregame-diff-banner ${currentDiff}`;
    banner.style.display = 'inline-block';
  }
  // Game pill
  const pill = document.getElementById('game-diff-pill');
  if (pill) { pill.textContent = d.label; pill.className = `game-diff-pill ${diffPillClass(currentDiff)}`; }
}

socket.on('gameCountdown', ({ seconds }) => {
  let c = seconds;
  const circle = document.getElementById('cd-circle');
  const msg    = document.getElementById('pregame-msg');
  function tick() {
    circle.textContent = c > 0 ? c : 'GO';
    circle.style.animation = 'none'; void circle.offsetHeight; circle.style.animation = 'popscale .4s cubic-bezier(.34,1.56,.64,1)';
    if (c <= 0) { msg.textContent = "Name that tune!"; return; }
    c--; setTimeout(tick, 1000);
  }
  tick();
});

// ─── Single Player ─────────────────────────────────────────────────────────
let spSongs    = [];
let spRound    = 0;
let spScore    = 0;
let spTotal    = 10;
let spAnswered = false;
let spTimerId  = null;

function startSinglePlayer(diff) {
  unlockAudio(); // Must be called synchronously during user tap (iOS fix)
  currentDiff = diff || 'easy';
  user = loadUser();
  const tier = currentDiff === 'easy' ? 1 : currentDiff === 'medium' ? 2 : 3;
  const pool  = currentDiff === 'random' ? SONGS : SONGS.filter(s => s.tier <= tier);
  spSongs     = shuffle(pool).slice(0, spTotal);
  spRound     = 0; spScore = 0;
  gState = {
    isSinglePlayer: true,
    host:  { id:'sp_you', username:user.username, trophies:user.trophies, profilePic:user.profilePic },
    guest: { id:'sp_bot', username:'Solo Mode',   trophies:0,             profilePic:'default' }
  };

  // Setup pregame screen
  setPregameUI(gState.host, gState.guest);
  document.getElementById('pregame-msg').textContent = 'Get ready!';
  showScreen('screen-pregame');

  let c = 3;
  const circle = document.getElementById('cd-circle');
  const msg    = document.getElementById('pregame-msg');
  const interval = setInterval(() => {
    circle.textContent = c > 0 ? c : 'GO';
    circle.style.animation = 'none'; void circle.offsetHeight; circle.style.animation = 'popscale .4s cubic-bezier(.34,1.56,.64,1)';
    if (c <= 0) {
      clearInterval(interval);
      msg.textContent = 'Name that tune!';
      setTimeout(() => spStartRound(), 500);
    }
    c--;
  }, 1000);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function spStartRound() {
  if (spRound >= spSongs.length) return spEndGame();
  const song = spSongs[spRound];
  spAnswered  = false;

  // Fetch preview from iTunes
  showScreen('screen-game');
  setupGameScoreboard();
  document.getElementById('round-n').textContent     = spRound + 1;
  document.getElementById('round-t').textContent     = spTotal;
  document.getElementById('guess-input').value       = '';
  document.getElementById('guess-input').disabled    = false;
  document.getElementById('guess-btn').disabled      = false;
  document.getElementById('guess-fb').textContent    = '';
  document.getElementById('guess-fb').className      = 'guess-fb';
  document.getElementById('skip-votes').textContent  = '(0/1)';
  document.getElementById('skip-btn').disabled       = false;
  document.getElementById('round-overlay').classList.remove('show');
  document.getElementById('visualizer').classList.remove('paused');
  updateSpScores();
  const spTime = diffTime(currentDiff);
  startTimer(spTime);

  const previewUrl = await fetchPreview(song.query);
  if (previewUrl) {
    playPreview(previewUrl);
  } else {
    toast('No preview available - auto-skipping');
    setTimeout(() => spRevealAndAdvance('skip'), 1500);
    return;
  }

  spTimerId = setTimeout(() => {
    if (!spAnswered) spRevealAndAdvance('timeout');
  }, spTime * 1000);
}

async function fetchPreview(query) {
  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=8&country=US`;
    const res  = await fetch(url);
    const data = await res.json();
    const track = data.results?.find(r => r.previewUrl && r.artistName?.toLowerCase().includes('beatles'));
    return track?.previewUrl || null;
  } catch { return null; }
}

function spGuess(guess) {
  if (spAnswered) return;
  const song = spSongs[spRound];
  if (isCorrect(guess, song.title)) {
    spAnswered = true;
    clearTimeout(spTimerId); stopTimer(); stopAudio();
    spScore++;
    user.songsGuessed = (user.songsGuessed || 0) + 1; saveUser(user);
    updateSpScores();
    showRoundPopup('[win]', 'Correct!', song.title, 'var(--green)', '+1 point!');
    setTimeout(() => { spRound++; spStartRound(); }, 3000);
  } else {
    const inp = document.getElementById('guess-input');
    inp.classList.add('wrong'); setTimeout(() => inp.classList.remove('wrong'), 400);
    const fb = document.getElementById('guess-fb');
    fb.textContent = `"${guess}" – not quite!`; fb.className = 'guess-fb fb-wrong';
    playSound('wrong');
  }
}

function spSkip() {
  if (spAnswered) return;
  spAnswered = true;
  clearTimeout(spTimerId); stopTimer(); stopAudio();
  spRevealAndAdvance('skip');
}

function spRevealAndAdvance(reason) {
  const song = spSongs[spRound];
  const icon = reason === 'skip' ? '[skipped]' : '[time up]';
  const title = reason === 'skip' ? 'Skipped!' : "Time's Up!";
  showRoundPopup(icon, title, song.title, 'var(--gold)', '');
  setTimeout(() => { spRound++; spStartRound(); }, 3000);
}

function spEndGame() {
  stopAudio(); stopTimer();
  const isGood = spScore >= spTotal * 0.7;
  const tDelta = isGood ? 30 : spScore >= spTotal * 0.4 ? 5 : -10;
  const coins  = spScore * 8;
  user = loadUser();
  user.trophies = Math.max(0, user.trophies + tDelta);
  user.coins    = (user.coins || 0) + coins;
  if (isGood) user.wins = (user.wins || 0) + 1;
  else user.losses = (user.losses || 0) + 1;
  saveUser(user);

  showScreen('screen-gameover');
  setGoBg();
  document.getElementById('go-headline').innerHTML = isGood
    ? `<span style="color:var(--gold)">🎉 Great Round!</span>`
    : `<span style="color:var(--muted)">🎵 Round Over</span>`;

  document.getElementById('go-players').innerHTML = `
    <div class="go-pcard ${isGood ? 'winner' : ''}">
      ${isGood ? '<div class="go-crown">&#9812;</div>' : ''}
      <img class="av av-lg" src="${avatarUrl(user.profilePic)}" alt="">
      <div class="go-pname">${user.username}</div>
      <div class="go-pscore">${spScore}</div>
      <div class="go-plabel">out of ${spTotal}</div>
    </div>
  `;
  document.getElementById('go-rewards').innerHTML = `
    <div class="rew-pill ${tDelta >= 0 ? 'rew-pos' : 'rew-neg'}">🏆 ${tDelta >= 0 ? '+' : ''}${tDelta} trophies</div>
    ${coins > 0 ? `<div class="rew-pill rew-pos">🪙 +${coins} coins</div>` : ''}
    <div class="rew-pill">🏆 ${user.trophies} total</div>
  `;
  if (isGood) startConfetti();
  refreshHome();
}

function updateSpScores() {
  const scoreEl = gState.host?.id === 'sp_you'
    ? document.getElementById('gs-l-score')
    : document.getElementById('gs-r-score');
  scoreEl.textContent = spScore;
}

// ─── Multiplayer Round ─────────────────────────────────────────────────────
let hasVotedSkip = false;

socket.on('newRound', ({ round, total, previewUrl, scores }) => {
  hasVotedSkip = false;
  showScreen('screen-game');
  setupGameScoreboard();
  document.getElementById('round-n').textContent     = round;
  document.getElementById('round-t').textContent     = total;
  document.getElementById('guess-input').value       = '';
  document.getElementById('guess-input').disabled    = false;
  document.getElementById('guess-btn').disabled      = false;
  document.getElementById('guess-fb').textContent    = '';
  document.getElementById('guess-fb').className      = 'guess-fb';
  document.getElementById('skip-votes').textContent  = '(0/2)';
  document.getElementById('skip-btn').disabled       = false;
  document.getElementById('round-overlay').classList.remove('show');
  document.getElementById('visualizer').classList.remove('paused');
  updateMpScores(scores);
  startTimer(30);
  playPreview(previewUrl);
});

function setupGameScoreboard() {
  const h = gState.host || {}, g = gState.guest || {};
  document.getElementById('gs-l-av').src        = avatarUrl(h.profilePic);
  document.getElementById('gs-l-name').textContent  = h.username || 'P1';
  document.getElementById('gs-r-av').src        = avatarUrl(g.profilePic);
  document.getElementById('gs-r-name').textContent  = g.username || 'P2';
}
function updateMpScores(scores) {
  const h = gState.host || {}, g = gState.guest || {};
  document.getElementById('gs-l-score').textContent = scores[h.id] ?? 0;
  document.getElementById('gs-r-score').textContent = scores[g.id] ?? 0;
}

socket.on('wrongGuess', ({ guess }) => {
  const inp = document.getElementById('guess-input');
  inp.classList.add('wrong'); setTimeout(() => inp.classList.remove('wrong'), 400);
  const fb = document.getElementById('guess-fb');
  fb.textContent = `"${guess}" – not quite!`; fb.className = 'guess-fb fb-wrong';
  playSound('wrong');
});
socket.on('roundWon', ({ winnerId, winnerName, songTitle, scores }) => {
  stopTimer(); stopAudio(); updateMpScores(scores);
  const isMe = winnerId === myId;
  if (isMe) { playSound('correct'); user = loadUser(); user.songsGuessed = (user.songsGuessed||0)+1; saveUser(user); }
  showRoundPopup(isMe ? '🎉' : '😅', isMe ? 'You got it!' : `${winnerName} got it!`, songTitle, isMe ? 'var(--green)' : 'var(--red)', isMe ? 'Nice one!' : 'Better luck next round!');
});
socket.on('timeUp', ({ songTitle }) => {
  stopTimer(); stopAudio();
  showRoundPopup('[time]', "Time's Up!", songTitle, 'var(--gold)', 'Nobody got this one!');
});
socket.on('skipVoteUpdate', ({ votes, needed }) => {
  document.getElementById('skip-votes').textContent = `(${votes}/${needed})`;
});
socket.on('roundSkipped', ({ songTitle }) => {
  stopTimer(); stopAudio();
  showRoundPopup('[skip]', 'Skipped!', songTitle, 'var(--purple)', 'Both players voted skip.');
});

// ─── Guess submission ──────────────────────────────────────────────────────
function submitGuess() {
  const g = document.getElementById('guess-input').value.trim();
  if (!g) return;
  if (gState.isSinglePlayer) { spGuess(g); }
  else if (currentPin) { socket.emit('guess', { pin: currentPin, guess: g }); }
}
function voteSkip() {
  if (gState.isSinglePlayer) { spSkip(); return; }
  if (hasVotedSkip || !currentPin) return;
  hasVotedSkip = true;
  socket.emit('skipVote', { pin: currentPin });
  document.getElementById('skip-btn').style.opacity = '.5';
}
function isCorrect(guess, title) {
  const n = s => s.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ');
  const g = n(guess), t = n(title);
  if (g.length < 2) return false;
  if (t === g || (t.includes(g) && g.length >= 4)) return true;
  if (lev(g, t) <= Math.max(1, Math.floor(t.length * 0.18))) return true;
  const stop = new Set(['the','a','an','in','on','at','and','or','of']);
  const tw = t.split(' ').filter(w => w.length > 2 && !stop.has(w));
  const gw = g.split(' ').filter(w => w.length > 2 && !stop.has(w));
  if (tw.length > 0 && gw.length > 0) {
    const m = tw.filter(a => gw.some(b => lev(a,b) <= 1));
    if (m.length >= Math.ceil(tw.length * 0.6)) return true;
  }
  return false;
}
function lev(a, b) {
  const dp = Array.from({length:a.length+1}, (_,i) => Array.from({length:b.length+1}, (_,j) => i===0?j:j===0?i:0));
  for (let i=1;i<=a.length;i++) for (let j=1;j<=b.length;j++) dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[a.length][b.length];
}

// ─── Game Over (multiplayer) ───────────────────────────────────────────────
socket.on('gameOver', ({ winnerId, isTie, scores, breakdown }) => {
  stopTimer(); stopAudio();
  showScreen('screen-gameover');
  setGoBg();
  const me = breakdown[myId] || {};
  user = loadUser();
  user.trophies = Math.max(0, (user.trophies||0) + (me.trophyDelta||0));
  user.coins    = (user.coins||0) + (me.coinsEarned||0);
  if (me.won)            user.wins   = (user.wins||0)+1;
  if (!me.won && !me.tie) user.losses = (user.losses||0)+1;
  saveUser(user);

  const h = gState.host || {}, g = gState.guest || {};
  document.getElementById('go-headline').innerHTML = isTie
    ? `<span style="color:var(--gold)">🤝 It's a Tie!</span>`
    : winnerId === myId
      ? `<span style="color:var(--cyan)">🎉 You Win!</span>`
      : `<span style="color:var(--red)">💔 You Lose</span>`;

  const pCard = (p, bd) => {
    const win = !isTie && p.id === winnerId;
    return `<div class="go-pcard ${win?'winner':'loser'}">
      ${win ? '<div class="go-crown">&#9812;</div>' : ''}
      <img class="av av-lg" src="${avatarUrl(p.profilePic)}" alt="">
      <div class="go-pname">${p.username}</div>
      <div class="go-pscore">${bd?.score ?? scores[p.id] ?? 0}</div>
      <div class="go-plabel">songs guessed</div>
    </div>`;
  };
  document.getElementById('go-players').innerHTML = pCard(h, breakdown[h.id]) + pCard(g, breakdown[g.id]);

  const td = me.trophyDelta || 0, coins = me.coinsEarned || 0;
  document.getElementById('go-rewards').innerHTML = `
    <div class="rew-pill ${td>=0?'rew-pos':'rew-neg'}">🏆 ${td>=0?'+':''}${td} trophies</div>
    ${coins > 0 ? `<div class="rew-pill rew-pos">🪙 +${coins} coins</div>` : ''}
    <div class="rew-pill">🏆 ${user.trophies} total</div>
  `;
  if (!isTie && winnerId === myId) startConfetti();
  refreshHome();
});
socket.on('opponentLeft', ({ username }) => {
  toast(`${username} disconnected.`);
  stopTimer(); stopAudio();
  setTimeout(goHome, 2500);
});

// ─── Timer ─────────────────────────────────────────────────────────────────
let timerInterval = null;
function startTimer(s) {
  clearInterval(timerInterval);
  let t = s;
  const fill = document.getElementById('timer-fill');
  const num  = document.getElementById('timer-num');
  fill.style.transition = 'none';
  fill.style.width = '100%';
  fill.style.background = 'linear-gradient(90deg, var(--cyan), var(--green))';
  num.textContent = s;
  timerInterval = setInterval(() => {
    t--;
    num.textContent = Math.max(0, t);
    fill.style.transition = 'width 1s linear, background .5s';
    fill.style.width = Math.max(0, (t/s)*100) + '%';
    if (t <= 10) { fill.style.background = 'linear-gradient(90deg,var(--red),#ff6b6b)'; playSound('tick'); }
    else if (t <= 20) fill.style.background = 'linear-gradient(90deg,var(--gold),var(--gold2))';
    if (t <= 0) clearInterval(timerInterval);
  }, 1000);
}
function stopTimer() { clearInterval(timerInterval); }

// ─── Audio ─────────────────────────────────────────────────────────────────
let audioCtx = null, analyser = null, vizRaf = null, muted = false;
// Unlock audio on first user gesture (iOS mobile fix)
let audioUnlocked = false;
function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  const a = document.getElementById('game-audio');
  // Play a tiny silent data URL to satisfy mobile browser gesture requirement
  a.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
  a.volume = 0;
  a.play().catch(() => {});
  // Also unlock AudioContext
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playPreview(url) {
  const a = document.getElementById('game-audio');
  a.src = url; a.muted = muted; a.volume = 0.85;
  a.play().catch(() => toast('Tap anywhere to play audio 🔊'));
  setupViz(a);
}
function stopAudio() {
  const a = document.getElementById('game-audio');
  a.pause(); a.src = '';
  if (vizRaf) { cancelAnimationFrame(vizRaf); vizRaf = null; }
  document.getElementById('visualizer').classList.add('paused');
}
function toggleMute() {
  muted = !muted;
  document.getElementById('game-audio').muted = muted;
  document.getElementById('mute-btn').textContent = muted ? '🔇' : '🔊';
}
function setupViz(el) {
  if (vizRaf) { cancelAnimationFrame(vizRaf); vizRaf = null; }
  document.getElementById('visualizer').classList.remove('paused');
  try {
    if (!audioCtx) { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    if (!analyser) {
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      audioCtx.createMediaElementSource(el).connect(analyser);
      analyser.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const bars = document.querySelectorAll('.vbar');
    const data = new Uint8Array(analyser.frequencyBinCount);
    function frame() {
      analyser.getByteFrequencyData(data);
      bars.forEach((b,i) => {
        const v = (data[i]||0)/255;
        b.style.height = Math.max(4, v*40) + 'px';
        b.style.opacity = Math.max(.3, v);
        b.style.animationName = 'none';
      });
      vizRaf = requestAnimationFrame(frame);
    }
    frame();
  } catch { /* CORS or browser limitation – CSS animation handles it */ }
}
document.addEventListener('click', () => { if (audioCtx?.state==='suspended') audioCtx.resume(); });

// ─── Round popup ────────────────────────────────────────────────────────────
function showRoundPopup(icon, result, song, color, sub) {
  document.getElementById('rp-icon').textContent   = icon;
  document.getElementById('rp-result').textContent = result;
  document.getElementById('rp-result').style.color = color;
  document.getElementById('rp-song').textContent   = song;
  document.getElementById('rp-by').textContent     = sub;
  document.getElementById('round-overlay').classList.add('show');
  document.getElementById('guess-input').disabled  = true;
  document.getElementById('guess-btn').disabled    = true;
  document.getElementById('skip-btn').disabled     = true;
}

// ─── Sounds ─────────────────────────────────────────────────────────────────
function playSound(type) {
  try {
    const c = new (window.AudioContext||window.webkitAudioContext)();
    const o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    if (type==='correct') {
      o.type='sine'; o.frequency.setValueAtTime(523,c.currentTime); o.frequency.setValueAtTime(659,c.currentTime+.1); o.frequency.setValueAtTime(784,c.currentTime+.2);
      g.gain.setValueAtTime(.22,c.currentTime); g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.55);
      o.start(c.currentTime); o.stop(c.currentTime+.55);
    } else if (type==='wrong') {
      o.type='sawtooth'; o.frequency.setValueAtTime(200,c.currentTime); o.frequency.linearRampToValueAtTime(100,c.currentTime+.18);
      g.gain.setValueAtTime(.12,c.currentTime); g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.2);
      o.start(c.currentTime); o.stop(c.currentTime+.2);
    } else if (type==='tick') {
      o.frequency.setValueAtTime(1000,c.currentTime); g.gain.setValueAtTime(.06,c.currentTime); g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.04);
      o.start(c.currentTime); o.stop(c.currentTime+.04);
    }
  } catch {}
}

// ─── Confetti ──────────────────────────────────────────────────────────────
function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = innerWidth; canvas.height = innerHeight;
  const colors = ['#ffd700','#ff3b55','#00e5ff','#a855f7','#fff','#f8961e'];
  const p = Array.from({length:100}, () => ({
    x: Math.random()*canvas.width, y: -20,
    vx: (Math.random()-.5)*4, vy: Math.random()*3+2,
    color: colors[Math.floor(Math.random()*colors.length)],
    w: Math.random()*10+4, h: Math.random()*5+3,
    r: Math.random()*360, rs: (Math.random()-.5)*8
  }));
  let t = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    p.forEach(q => {
      q.x+=q.vx; q.y+=q.vy; q.vy+=.06; q.r+=q.rs;
      if (q.y>canvas.height) { q.y=-20; q.x=Math.random()*canvas.width; }
      ctx.save(); ctx.translate(q.x,q.y); ctx.rotate(q.r*Math.PI/180);
      ctx.fillStyle=q.color; ctx.fillRect(-q.w/2,-q.h/2,q.w,q.h); ctx.restore();
    });
    if (++t < 300) requestAnimationFrame(draw);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  draw();
}

// ─── Toast ─────────────────────────────────────────────────────────────────
let toastT = null;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2600);
}

// ─── Keyboard ──────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  if (document.getElementById('screen-game').classList.contains('active'))  submitGuess();
  if (document.getElementById('screen-join').classList.contains('active'))  joinGame();
});

// ─── Init ──────────────────────────────────────────────────────────────────
refreshHome();
