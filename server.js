'use strict';
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, 'public')));

// ─── Songs Database ────────────────────────────────────────────────────────

const SONGS = [
  // ── Tier 1: Iconic (0-99 trophies) ───────────────────────────────────────
  { title: 'Hey Jude',                              query: 'Hey Jude Beatles',                              tier: 1 },
  { title: 'Let It Be',                         query: 'Let It Be Beatles',                          tier: 1 },
  { title: 'Come Together',                     query: 'Come Together Beatles',                      tier: 1 },
  { title: 'Yesterday',                         query: 'Yesterday Beatles',                          tier: 1 },
  { title: 'Help!',                             query: 'Help Beatles 1965',                          tier: 1 },
  { title: 'Twist and Shout',                   query: 'Twist and Shout Beatles',                    tier: 1 },
  { title: 'Love Me Do',                        query: 'Love Me Do Beatles',                         tier: 1 },
  { title: "A Hard Day's Night",                query: "A Hard Day's Night Beatles",                 tier: 1 },
  { title: 'Eleanor Rigby',                     query: 'Eleanor Rigby Beatles',                      tier: 1 },
  { title: 'Yellow Submarine',                  query: 'Yellow Submarine Beatles',                   tier: 1 },
  { title: 'She Loves You',                     query: 'She Loves You Beatles',                      tier: 1 },
  { title: 'I Want to Hold Your Hand',          query: 'I Want to Hold Your Hand Beatles',           tier: 1 },
  { title: "Can't Buy Me Love",                 query: "Can't Buy Me Love Beatles",                  tier: 1 },
  { title: 'Something',                         query: 'Something Beatles Abbey Road',               tier: 1 },
  { title: 'Here Comes the Sun',                query: 'Here Comes the Sun Beatles',                 tier: 1 },
  { title: 'Blackbird',                         query: 'Blackbird Beatles White Album',              tier: 1 },
  { title: 'Get Back',                          query: 'Get Back Beatles 1969',                      tier: 1 },
  { title: 'Let It Be',                         query: 'Let It Be Beatles single',                   tier: 1 },
  { title: 'In My Life',                        query: 'In My Life Beatles',                         tier: 1 },

  // ── Tier 2: Well Known (100-299 trophies) ────────────────────────────────
  { title: 'Norwegian Wood',                    query: 'Norwegian Wood Beatles',                     tier: 2 },
  { title: 'Michelle',                          query: 'Michelle Beatles',                           tier: 2 },
  { title: 'Penny Lane',                        query: 'Penny Lane Beatles',                         tier: 2 },
  { title: 'Strawberry Fields Forever',         query: 'Strawberry Fields Forever Beatles',          tier: 2 },
  { title: 'I Am the Walrus',                   query: 'I Am the Walrus Beatles',                    tier: 2 },
  { title: 'Lucy in the Sky with Diamonds',     query: 'Lucy in the Sky with Diamonds Beatles',      tier: 2 },
  { title: 'Back in the U.S.S.R.',              query: 'Back in the USSR Beatles',                   tier: 2 },
  { title: 'While My Guitar Gently Weeps',      query: 'While My Guitar Gently Weeps Beatles',       tier: 2 },
  { title: "Don't Let Me Down",                 query: "Don't Let Me Down Beatles",                  tier: 2 },
  { title: 'The Long and Winding Road',         query: 'The Long and Winding Road Beatles',          tier: 2 },
  { title: 'Ob-La-Di, Ob-La-Da',               query: 'Ob-La-Di Ob-La-Da Beatles',                  tier: 2 },
  { title: 'With a Little Help from My Friends',query: 'With a Little Help from My Friends Beatles', tier: 2 },
  { title: 'All You Need Is Love',              query: 'All You Need Is Love Beatles',               tier: 2 },
  { title: 'Hello, Goodbye',                    query: 'Hello Goodbye Beatles',                      tier: 2 },
  { title: 'Paperback Writer',                  query: 'Paperback Writer Beatles',                   tier: 2 },
  { title: 'Lady Madonna',                      query: 'Lady Madonna Beatles',                       tier: 2 },
  { title: 'Got to Get You into My Life',       query: 'Got to Get You into My Life Beatles',        tier: 2 },
  { title: 'Good Day Sunshine',                 query: 'Good Day Sunshine Beatles',                  tier: 2 },
  { title: 'Ticket to Ride',                    query: 'Ticket to Ride Beatles',                     tier: 2 },
  { title: 'Nowhere Man',                       query: 'Nowhere Man Beatles',                        tier: 2 },
  { title: 'Eight Days a Week',                 query: 'Eight Days a Week Beatles',                  tier: 2 },
  { title: 'Across the Universe',               query: 'Across the Universe Beatles',                tier: 2 },
  { title: 'Octopus\'s Garden',                 query: "Octopus's Garden Beatles",                   tier: 2 },
  { title: 'Oh! Darling',                       query: 'Oh Darling Beatles Abbey Road',              tier: 2 },
  { title: 'Drive My Car',                      query: 'Drive My Car Beatles Rubber Soul',           tier: 2 },
  { title: 'The Ballad of John and Yoko',       query: 'The Ballad of John and Yoko Beatles',        tier: 2 },
  { title: 'I Feel Fine',                       query: 'I Feel Fine Beatles',                        tier: 2 },
  { title: 'We Can Work It Out',                query: 'We Can Work It Out Beatles',                 tier: 2 },
  { title: 'Day Tripper',                       query: 'Day Tripper Beatles',                        tier: 2 },
  { title: 'Revolution',                        query: 'Revolution Beatles 1968',                    tier: 2 },
  { title: 'Let It Be',                         query: 'Let It Be Beatles film',                     tier: 2 },
  { title: 'The Fool on the Hill',              query: 'The Fool on the Hill Beatles',               tier: 2 },
  { title: 'Hey Bulldog',                       query: 'Hey Bulldog Beatles',                        tier: 2 },
  { title: 'Two of Us',                         query: 'Two of Us Beatles Let It Be',                tier: 2 },
  { title: 'Don\'t Bother Me',                  query: "Don't Bother Me Beatles",                    tier: 2 },
  { title: 'From Me to You',                    query: 'From Me to You Beatles',                     tier: 2 },
  { title: 'Please Please Me',                  query: 'Please Please Me Beatles',                   tier: 2 },

  // ── Tier 3: Deep Cuts (300+ trophies) ────────────────────────────────────
  { title: 'Taxman',                            query: 'Taxman Beatles Revolver',                    tier: 3 },
  { title: 'Happiness Is a Warm Gun',           query: 'Happiness Is a Warm Gun Beatles',            tier: 3 },
  { title: 'Rocky Raccoon',                     query: 'Rocky Raccoon Beatles White Album',          tier: 3 },
  { title: 'Martha My Dear',                    query: 'Martha My Dear Beatles',                     tier: 3 },
  { title: 'Julia',                             query: 'Julia Beatles White Album',                  tier: 3 },
  { title: 'Helter Skelter',                    query: 'Helter Skelter Beatles White Album',         tier: 3 },
  { title: 'Yer Blues',                         query: 'Yer Blues Beatles White Album',              tier: 3 },
  { title: "I'm So Tired",                      query: "I'm So Tired Beatles White Album",           tier: 3 },
  { title: 'Piggies',                           query: 'Piggies Beatles White Album',                tier: 3 },
  { title: 'Honey Pie',                         query: 'Honey Pie Beatles White Album',              tier: 3 },
  { title: 'Sexy Sadie',                        query: 'Sexy Sadie Beatles White Album',             tier: 3 },
  { title: 'Savoy Truffle',                     query: 'Savoy Truffle Beatles White Album',          tier: 3 },
  { title: 'Birthday',                          query: 'Birthday Beatles White Album',               tier: 3 },
  { title: 'Glass Onion',                       query: 'Glass Onion Beatles White Album',            tier: 3 },
  { title: 'Cry Baby Cry',                      query: 'Cry Baby Cry Beatles White Album',           tier: 3 },
  { title: "Mother Nature's Son",               query: "Mother Nature's Son Beatles",                tier: 3 },
  { title: 'Think for Yourself',                query: 'Think for Yourself Beatles Rubber Soul',     tier: 3 },
  { title: 'I Saw Her Standing There',          query: 'I Saw Her Standing There Beatles',           tier: 3 },
  { title: 'For No One',                        query: 'For No One Beatles Revolver',                tier: 3 },
  { title: "I'm Only Sleeping",                 query: "I'm Only Sleeping Beatles Revolver",         tier: 3 },
  { title: 'Long, Long, Long',                  query: 'Long Long Long Beatles White Album',         tier: 3 },
  { title: 'Because',                           query: 'Because Beatles Abbey Road',                 tier: 3 },
  { title: 'You Never Give Me Your Money',      query: 'You Never Give Me Your Money Beatles',       tier: 3 },
  { title: 'Sun King',                          query: 'Sun King Beatles Abbey Road',                tier: 3 },
  { title: 'Golden Slumbers',                   query: 'Golden Slumbers Beatles Abbey Road',         tier: 3 },
  { title: 'Carry That Weight',                 query: 'Carry That Weight Beatles Abbey Road',       tier: 3 },
  { title: 'The End',                           query: 'The End Beatles Abbey Road',                 tier: 3 },
  { title: 'Her Majesty',                       query: 'Her Majesty Beatles Abbey Road',             tier: 3 },
  { title: 'Maxwell\'s Silver Hammer',          query: "Maxwell's Silver Hammer Beatles",            tier: 3 },
  { title: 'Mean Mr. Mustard',                  query: 'Mean Mr Mustard Beatles Abbey Road',         tier: 3 },
  { title: 'Polythene Pam',                     query: 'Polythene Pam Beatles Abbey Road',           tier: 3 },
  { title: 'She Came In Through the Bathroom Window', query: 'She Came In Through the Bathroom Window Beatles', tier: 3 },
  { title: 'I Want You (She\'s So Heavy)',      query: "I Want You She's So Heavy Beatles",          tier: 3 },
  { title: 'Dig a Pony',                        query: 'Dig a Pony Beatles Let It Be',               tier: 3 },
  { title: 'Across the Universe',               query: 'Across the Universe Beatles Rooftop',        tier: 3 },
  { title: 'For You Blue',                      query: 'For You Blue Beatles Let It Be',             tier: 3 },
  { title: 'Maggie Mae',                        query: 'Maggie Mae Beatles Let It Be',               tier: 3 },
  { title: 'I Me Mine',                         query: 'I Me Mine Beatles',                          tier: 3 },
  { title: 'The Continuing Story of Bungalow Bill', query: 'Bungalow Bill Beatles White Album',     tier: 3 },
  { title: 'Wild Honey Pie',                    query: 'Wild Honey Pie Beatles White Album',         tier: 3 },
  { title: 'Everybody\'s Got Something to Hide', query: "Everybody's Got Something to Hide Beatles", tier: 3 },
  { title: 'Back in the USSR',                  query: 'Back in the USSR Beatles White Album',       tier: 3 },
  { title: 'Ob-La-Di, Ob-La-Da',               query: 'Ob La Di Ob La Da Beatles',                  tier: 3 },
  { title: 'Goodnight',                            query: 'Goodnight Beatles White Album',                  tier: 3 },

  // ── 100 additional songs ──────────────────────────────────────────────────
  // Tier 1 additions
  { title: 'Now and Then',                         query: 'Now and Then Beatles 2023',                     tier: 1 },
  // Tier 2 additions
  { title: 'Dear Prudence',                        query: 'Dear Prudence Beatles',                         tier: 2 },
  { title: 'A Day in the Life',                    query: 'A Day in the Life Beatles',                     tier: 2 },
  { title: 'When I\'m Sixty-Four',                 query: "When I'm Sixty-Four Beatles",                   tier: 2 },
  { title: 'If I Fell',                            query: 'If I Fell Beatles',                             tier: 2 },
  { title: 'I Should Have Known Better',           query: 'I Should Have Known Better Beatles',            tier: 2 },
  { title: 'And I Love Her',                       query: 'And I Love Her Beatles',                        tier: 2 },
  { title: 'I\'ll Follow the Sun',                 query: "I'll Follow the Sun Beatles",                   tier: 2 },
  { title: 'You\'ve Got to Hide Your Love Away',   query: "You've Got to Hide Your Love Away Beatles",     tier: 2 },
  { title: 'Here There and Everywhere',            query: 'Here There and Everywhere Beatles',             tier: 2 },
  { title: 'Magical Mystery Tour',                 query: 'Magical Mystery Tour Beatles',                  tier: 2 },
  { title: 'All My Loving',                        query: 'All My Loving Beatles',                         tier: 2 },
  { title: 'Please Mister Postman',                query: 'Please Mister Postman Beatles',                 tier: 2 },
  { title: 'Roll Over Beethoven',                  query: 'Roll Over Beethoven Beatles',                   tier: 2 },
  { title: 'Money (That\'s What I Want)',          query: "Money That's What I Want Beatles",              tier: 2 },
  { title: 'Do You Want to Know a Secret',         query: 'Do You Want to Know a Secret Beatles',         tier: 2 },
  { title: 'Rock and Roll Music',                  query: 'Rock and Roll Music Beatles',                   tier: 2 },
  { title: 'Free as a Bird',                       query: 'Free as a Bird Beatles',                        tier: 2 },
  { title: 'Real Love',                            query: 'Real Love Beatles',                             tier: 2 },
  { title: 'Long Tall Sally',                      query: 'Long Tall Sally Beatles',                       tier: 2 },
  { title: 'She\'s a Woman',                       query: "She's a Woman Beatles",                         tier: 2 },
  // Tier 3 additions
  { title: 'Being for the Benefit of Mr. Kite!',  query: 'Being for the Benefit of Mr Kite Beatles',     tier: 3 },
  { title: 'Getting Better',                       query: 'Getting Better Beatles Sgt Peppers',            tier: 3 },
  { title: 'Fixing a Hole',                        query: 'Fixing a Hole Beatles Sgt Peppers',             tier: 3 },
  { title: 'She\'s Leaving Home',                  query: "She's Leaving Home Beatles",                    tier: 3 },
  { title: 'Lovely Rita',                          query: 'Lovely Rita Beatles Sgt Peppers',               tier: 3 },
  { title: 'Good Morning Good Morning',            query: 'Good Morning Good Morning Beatles',             tier: 3 },
  { title: 'Within You Without You',               query: 'Within You Without You Beatles',                tier: 3 },
  { title: 'Any Time at All',                      query: 'Any Time at All Beatles',                       tier: 3 },
  { title: 'I\'ll Cry Instead',                    query: "I'll Cry Instead Beatles",                      tier: 3 },
  { title: 'Things We Said Today',                 query: 'Things We Said Today Beatles',                  tier: 3 },
  { title: 'When I Get Home',                      query: 'When I Get Home Beatles',                       tier: 3 },
  { title: 'You Can\'t Do That',                   query: "You Can't Do That Beatles",                     tier: 3 },
  { title: 'I\'ll Be Back',                        query: "I'll Be Back Beatles",                          tier: 3 },
  { title: 'Tell Me Why',                          query: 'Tell Me Why Beatles',                           tier: 3 },
  { title: 'I\'m Happy Just to Dance with You',   query: "I'm Happy Just to Dance with You Beatles",     tier: 3 },
  { title: 'No Reply',                             query: 'No Reply Beatles Beatles for Sale',             tier: 3 },
  { title: 'Baby\'s in Black',                     query: "Baby's in Black Beatles",                       tier: 3 },
  { title: 'Every Little Thing',                   query: 'Every Little Thing Beatles',                    tier: 3 },
  { title: 'I Don\'t Want to Spoil the Party',    query: "I Don't Want to Spoil the Party Beatles",      tier: 3 },
  { title: 'What You\'re Doing',                   query: "What You're Doing Beatles",                     tier: 3 },
  { title: 'The Night Before',                     query: 'The Night Before Beatles Help',                 tier: 3 },
  { title: 'I Need You',                           query: 'I Need You Beatles Help',                       tier: 3 },
  { title: 'Another Girl',                         query: 'Another Girl Beatles Help',                     tier: 3 },
  { title: 'You\'re Going to Lose That Girl',      query: "You're Going to Lose That Girl Beatles",        tier: 3 },
  { title: 'It\'s Only Love',                      query: "It's Only Love Beatles Help",                   tier: 3 },
  { title: 'I\'ve Just Seen a Face',               query: "I've Just Seen a Face Beatles",                 tier: 3 },
  { title: 'Dizzy Miss Lizzy',                     query: 'Dizzy Miss Lizzy Beatles',                      tier: 3 },
  { title: 'The Word',                             query: 'The Word Beatles Rubber Soul',                  tier: 3 },
  { title: 'You Won\'t See Me',                    query: "You Won't See Me Beatles",                      tier: 3 },
  { title: 'Run for Your Life',                    query: 'Run for Your Life Beatles Rubber Soul',         tier: 3 },
  { title: 'I\'m Looking Through You',             query: "I'm Looking Through You Beatles",               tier: 3 },
  { title: 'Wait',                                 query: 'Wait Beatles Rubber Soul',                      tier: 3 },
  { title: 'And Your Bird Can Sing',               query: 'And Your Bird Can Sing Beatles',                tier: 3 },
  { title: 'She Said She Said',                    query: 'She Said She Said Beatles',                     tier: 3 },
  { title: 'Love to You',                          query: 'Love to You Beatles Revolver',                  tier: 3 },
  { title: 'Dr. Robert',                           query: 'Dr Robert Beatles Revolver',                    tier: 3 },
  { title: 'Blue Jay Way',                         query: 'Blue Jay Way Beatles',                          tier: 3 },
  { title: 'Flying',                               query: 'Flying Beatles Magical Mystery Tour',           tier: 3 },
  { title: 'Your Mother Should Know',              query: 'Your Mother Should Know Beatles',               tier: 3 },
  { title: 'Baby You\'re a Rich Man',              query: "Baby You're a Rich Man Beatles",                tier: 3 },
  { title: 'It Won\'t Be Long',                    query: "It Won't Be Long Beatles",                      tier: 3 },
  { title: 'All I\'ve Got to Do',                  query: "All I've Got to Do Beatles",                    tier: 3 },
  { title: 'Little Child',                         query: 'Little Child Beatles',                          tier: 3 },
  { title: 'Hold Me Tight',                        query: 'Hold Me Tight Beatles',                         tier: 3 },
  { title: 'You\'ve Really Got a Hold on Me',      query: "You've Really Got a Hold on Me Beatles",        tier: 3 },
  { title: 'I Wanna Be Your Man',                  query: 'I Wanna Be Your Man Beatles',                   tier: 3 },
  { title: 'Not a Second Time',                    query: 'Not a Second Time Beatles',                     tier: 3 },
  { title: 'Anna (Go to Him)',                     query: 'Anna Go to Him Beatles',                        tier: 3 },
  { title: 'Boys',                                 query: 'Boys Beatles Please Please Me',                 tier: 3 },
  { title: 'P.S. I Love You',                      query: 'PS I Love You Beatles',                         tier: 3 },
  { title: 'A Taste of Honey',                     query: 'A Taste of Honey Beatles',                      tier: 3 },
  { title: 'There\'s a Place',                     query: "There's a Place Beatles",                       tier: 3 },
  { title: 'Misery',                               query: 'Misery Beatles Please Please Me',               tier: 3 },
  { title: 'I\'ve Got a Feeling',                  query: "I've Got a Feeling Beatles Let It Be",           tier: 3 },
  { title: 'One After 909',                        query: 'One After 909 Beatles',                         tier: 3 },
  { title: 'Don\'t Pass Me By',                    query: "Don't Pass Me By Beatles White Album",          tier: 3 },
  { title: 'I Will',                               query: 'I Will Beatles White Album',                    tier: 3 },
  { title: 'Why Don\'t We Do It in the Road?',     query: "Why Don't We Do It in the Road Beatles",        tier: 3 },
  { title: 'Revolution 1',                         query: 'Revolution 1 Beatles White Album',              tier: 3 },
  { title: 'Kansas City',                          query: 'Kansas City Beatles Hey Hey Hey Hey',           tier: 3 },
  { title: 'Mr. Moonlight',                        query: 'Mr Moonlight Beatles',                          tier: 3 },
  { title: 'Words of Love',                        query: 'Words of Love Beatles',                         tier: 3 },
  { title: 'Honey Don\'t',                         query: "Honey Don't Beatles",                           tier: 3 },
  { title: 'Everybody\'s Trying to Be My Baby',    query: "Everybody's Trying to Be My Baby Beatles",      tier: 3 },
  { title: 'Tell Me What You See',                 query: 'Tell Me What You See Beatles',                  tier: 3 },
  { title: 'You Like Me Too Much',                 query: 'You Like Me Too Much Beatles',                  tier: 3 },
  { title: 'Act Naturally',                        query: 'Act Naturally Beatles',                         tier: 3 },
  { title: 'Yes It Is',                            query: 'Yes It Is Beatles',                             tier: 3 },
  { title: 'Bad Boy',                              query: 'Bad Boy Beatles',                               tier: 3 },
  { title: 'Matchbox',                             query: 'Matchbox Beatles',                              tier: 3 },
  { title: 'Slow Down',                            query: 'Slow Down Beatles',                             tier: 3 },
  { title: 'I Call Your Name',                     query: 'I Call Your Name Beatles',                      tier: 3 },
  { title: 'Leave My Kitten Alone',                query: 'Leave My Kitten Alone Beatles',                 tier: 3 },
  { title: 'Chains',                               query: 'Chains Beatles Please Please Me',               tier: 3 },
  { title: 'Ask Me Why',                           query: 'Ask Me Why Beatles',                            tier: 3 },
  { title: 'Besame Mucho',                         query: 'Besame Mucho Beatles',                          tier: 3 },
  { title: 'Like Dreamers Do',                     query: 'Like Dreamers Do Beatles',                      tier: 3 },
  { title: 'That Means a Lot',                     query: 'That Means a Lot Beatles',                      tier: 3 },
  { title: 'If You\'ve Got Trouble',               query: "If You've Got Trouble Beatles",                 tier: 3 },

  // ── New: missed classics ─────────────────────────────────────────────────
  { title: 'Girl',                                       query: 'Girl Beatles Rubber Soul',                        tier: 1 },
  { title: "I'm a Loser",                                query: "I'm a Loser Beatles for Sale",                    tier: 1 },
  { title: 'Tomorrow Never Knows',                       query: 'Tomorrow Never Knows Beatles Revolver',           tier: 1 },
  { title: "Sgt. Pepper's Lonely Hearts Club Band",      query: "Sgt Peppers Lonely Hearts Club Band Beatles",     tier: 1 },
  { title: 'All Together Now',                           query: 'All Together Now Beatles Yellow Submarine',       tier: 1 },
  // ── Missed tier 2 ────────────────────────────────────────────────────────
  { title: 'Till There Was You',                         query: 'Till There Was You Beatles',                      tier: 2 },
  { title: 'What Goes On',                               query: 'What Goes On Beatles Rubber Soul',                tier: 2 },
  { title: 'If I Needed Someone',                        query: 'If I Needed Someone Beatles Rubber Soul',         tier: 2 },
  { title: 'I Want to Tell You',                         query: 'I Want to Tell You Beatles Revolver',             tier: 2 },
  { title: 'Devil in Her Heart',                         query: 'Devil in Her Heart Beatles',                      tier: 2 },
  { title: "It's All Too Much",                          query: "It's All Too Much Beatles Yellow Submarine",      tier: 2 },
  { title: 'Only a Northern Song',                       query: 'Only a Northern Song Beatles Yellow Submarine',   tier: 2 },
  { title: 'Hallelujah, I Love Her So',                  query: 'Hallelujah I Love Her So Beatles BBC',            tier: 2 },
  { title: 'Twenty Flight Rock',                         query: 'Twenty Flight Rock Beatles BBC',                  tier: 2 },
  { title: 'Be-Bop-A-Lula',                              query: 'Be-Bop-A-Lula Beatles BBC',                       tier: 2 },
  { title: "Don't Ever Change",                          query: "Don't Ever Change Beatles BBC",                   tier: 2 },
  { title: "I Want You (She's So Heavy)",                query: "I Want You She's So Heavy Beatles Abbey Road",    tier: 2 },
  { title: 'Her Majesty',                                query: 'Her Majesty Beatles Abbey Road',                  tier: 2 },
  { title: "Everybody's Got Something to Hide",          query: "Everybody's Got Something to Hide Beatles",       tier: 2 },
  { title: 'Rain',                                       query: 'Rain Beatles 1966 B-side',                        tier: 2 },
  { title: 'This Boy',                                   query: 'This Boy Beatles 1963',                           tier: 2 },
  { title: "I'm Down",                                   query: "I'm Down Beatles 1965 B-side",                    tier: 2 },
  { title: "Baby It's You",                              query: "Baby It's You Beatles Please Please Me",          tier: 2 },
  // ── BBC Sessions ─────────────────────────────────────────────────────────
  { title: 'Clarabella',                                 query: 'Clarabella Beatles BBC',                          tier: 3 },
  { title: "I'm Gonna Sit Right Down and Cry Over You",  query: "I'm Gonna Sit Right Down and Cry Beatles BBC",   tier: 3 },
  { title: 'The Sheik of Araby',                         query: 'Sheik of Araby Beatles Decca Anthology',          tier: 3 },
  { title: 'Sweet Little Sixteen',                       query: 'Sweet Little Sixteen Beatles BBC',                tier: 3 },
  { title: 'Lonesome Tears in My Eyes',                  query: 'Lonesome Tears in My Eyes Beatles BBC',           tier: 3 },
  { title: 'Little Queenie',                             query: 'Little Queenie Beatles BBC Hamburg',              tier: 3 },
  { title: "What'd I Say",                               query: "What'd I Say Beatles BBC",                        tier: 3 },
  { title: 'Youngblood',                                 query: 'Youngblood Beatles BBC Coasters',                 tier: 3 },
  { title: 'I Got a Woman',                              query: 'I Got a Woman Beatles BBC',                       tier: 3 },
  { title: 'I Remember You',                             query: 'I Remember You Beatles BBC',                      tier: 3 },
  { title: 'Side by Side',                               query: 'Side by Side Beatles BBC',                        tier: 3 },
  { title: 'Johnny B. Goode',                            query: 'Johnny B Goode Beatles BBC',                      tier: 3 },
  { title: "Talkin' 'Bout You",                          query: "Talkin Bout You Beatles BBC",                     tier: 3 },
  { title: "I'm Talking About You",                      query: "I'm Talking About You Beatles BBC",               tier: 3 },
  { title: 'From Us to You',                             query: 'From Us to You Beatles BBC',                      tier: 3 },
  { title: 'Soldier of Love',                            query: 'Soldier of Love Beatles BBC',                     tier: 3 },
  { title: 'Too Much Monkey Business',                   query: 'Too Much Monkey Business Beatles BBC',            tier: 3 },
  { title: 'I Forgot to Remember to Forget',             query: 'I Forgot to Remember to Forget Beatles BBC',      tier: 3 },
  { title: "Nothin' Shakin'",                            query: "Nothin Shakin Beatles BBC",                       tier: 3 },
  { title: 'Memphis, Tennessee',                         query: 'Memphis Tennessee Beatles BBC',                   tier: 3 },
  { title: 'Sheila',                                     query: 'Sheila Beatles BBC Tommy Roe',                    tier: 3 },
  { title: 'Carol',                                      query: 'Carol Beatles BBC Chuck Berry',                   tier: 3 },
  { title: 'Lend Me Your Comb',                          query: 'Lend Me Your Comb Beatles BBC',                   tier: 3 },
  { title: 'Keep Your Hands Off My Baby',                query: 'Keep Your Hands Off My Baby Beatles BBC',         tier: 3 },
  { title: 'Glad All Over',                              query: 'Glad All Over Beatles BBC Dave Clark',            tier: 3 },
  { title: "I Just Don't Understand",                    query: "I Just Don't Understand Beatles BBC",             tier: 3 },
  { title: 'So How Come (No One Loves Me)',              query: 'So How Come No One Loves Me Beatles BBC',         tier: 3 },
  { title: 'Crying, Waiting, Hoping',                    query: 'Crying Waiting Hoping Beatles BBC Anthology',     tier: 3 },
  { title: 'Beautiful Dreamer',                          query: 'Beautiful Dreamer Beatles BBC',                   tier: 3 },
  { title: 'Where Have You Been All My Life',            query: 'Where Have You Been All My Life Beatles BBC',     tier: 3 },
  { title: "Ooh! My Soul",                               query: "Ooh My Soul Beatles BBC Little Richard",          tier: 3 },
  { title: 'A Shot of Rhythm and Blues',                 query: 'A Shot of Rhythm and Blues Beatles BBC',          tier: 3 },
  { title: 'Your True Love',                             query: 'Your True Love Beatles BBC Carl Perkins',         tier: 3 },
  { title: "I Got to Find My Baby",                      query: "I Got to Find My Baby Beatles BBC",               tier: 3 },
  { title: 'Hippy Hippy Shake',                          query: 'Hippy Hippy Shake Beatles BBC',                   tier: 3 },
  { title: 'Lucille',                                    query: 'Lucille Beatles BBC Little Richard',              tier: 3 },
  { title: "Searchin'",                                  query: "Searchin Beatles Anthology Decca",                tier: 3 },
  { title: 'The Honeymoon Song',                         query: 'The Honeymoon Song Beatles BBC',                  tier: 3 },
  { title: "I'll Be on My Way",                          query: "I'll Be on My Way Beatles BBC",                   tier: 3 },
  { title: 'Shake, Rattle and Roll',                     query: 'Shake Rattle and Roll Beatles BBC',               tier: 3 },
  { title: "I Got to Find My Baby",                      query: "I Got to Find My Baby Beatles BBC",               tier: 3 },
  // ── Anthology & rarities ─────────────────────────────────────────────────
  { title: 'In Spite of All the Danger',                 query: 'In Spite of All the Danger Beatles Anthology',   tier: 3 },
  { title: "That'll Be the Day",                         query: "That'll Be the Day Quarrymen Beatles Anthology",  tier: 3 },
  { title: 'My Bonnie',                                  query: 'My Bonnie Tony Sheridan Beatles 1961',            tier: 3 },
  { title: "Ain't She Sweet",                            query: "Ain't She Sweet Beatles Tony Sheridan Anthology", tier: 3 },
  { title: 'Cry for a Shadow',                           query: 'Cry for a Shadow Beatles Anthology 1961',         tier: 3 },
  { title: 'How Do You Do It',                           query: 'How Do You Do It Beatles Anthology 1962',         tier: 3 },
  { title: 'Not Guilty',                                 query: 'Not Guilty George Harrison Beatles Anthology',    tier: 3 },
  { title: "What's the New Mary Jane",                   query: "What's the New Mary Jane Beatles Anthology",      tier: 3 },
  { title: 'Teddy Boy',                                  query: 'Teddy Boy Beatles Anthology Let It Be Naked',     tier: 3 },
  { title: 'Junk',                                       query: 'Junk Paul McCartney Let It Be demo',              tier: 3 },
  { title: 'All Things Must Pass',                       query: 'All Things Must Pass George Harrison Beatles demo',tier: 3 },
  { title: 'Come and Get It',                            query: 'Come and Get It Paul McCartney demo Badfinger',   tier: 3 },
  { title: "You'll Be Mine",                             query: "You'll Be Mine Beatles home recording 1960",      tier: 3 },
  // ── German & Hamburg ─────────────────────────────────────────────────────
  { title: 'Komm, Gib Mir Deine Hand',                   query: 'Komm Gib Mir Deine Hand Beatles German',          tier: 3 },
  { title: 'Sie Liebt Dich',                             query: 'Sie Liebt Dich Beatles German',                   tier: 3 },
  { title: 'Falling in Love Again',                      query: 'Falling in Love Again Beatles Hamburg 1962',      tier: 3 },
  { title: 'Red Sails in the Sunset',                    query: 'Red Sails in the Sunset Beatles Hamburg 1962',    tier: 3 },
  { title: 'Reminiscing',                                query: 'Reminiscing Beatles Hamburg Bobby Charles',        tier: 3 },
  { title: 'September in the Rain',                      query: 'September in the Rain Beatles Decca 1962',        tier: 3 },
  // ── More deep cuts ───────────────────────────────────────────────────────
  { title: "Sgt. Pepper's (Reprise)",                    query: "Sgt Peppers Reprise Beatles",                     tier: 3 },
  { title: 'Revolution 9',                               query: 'Revolution 9 Beatles White Album',                tier: 3 },
  { title: 'Step Inside Love',                           query: 'Step Inside Love Paul McCartney',                 tier: 3 },
  { title: 'Thank You Girl',                             query: 'Thank You Girl Beatles 1963 B-side',              tier: 3 },
  { title: "I'll Get You",                               query: "I'll Get You Beatles 1963 B-side She Loves You",  tier: 3 },
  { title: 'The Inner Light',                            query: 'The Inner Light Beatles 1968 B-side',             tier: 3 },
  { title: 'Old Brown Shoe',                             query: 'Old Brown Shoe Beatles B-side 1969',              tier: 3 },
  { title: 'You Know My Name (Look Up the Number)',      query: 'You Know My Name Look Up the Number Beatles',     tier: 3 },
  { title: 'The Continuing Story of Bungalow Bill',      query: 'Bungalow Bill Beatles White Album',               tier: 3 },
  { title: 'Dig It',                                     query: 'Dig It Beatles Let It Be',                        tier: 3 },
  { title: "Don't Bother Me",                            query: "Don't Bother Me Beatles George Harrison",         tier: 3 },
  { title: 'Wild Honey Pie',                             query: 'Wild Honey Pie Beatles White Album',              tier: 3 },
  { title: 'Maggie Mae',                                 query: 'Maggie Mae Beatles Let It Be traditional',        tier: 3 },
  { title: 'Love of the Loved',                          query: 'Love of the Loved Beatles Anthology Decca',       tier: 3 },
  { title: 'Hello Little Girl',                          query: 'Hello Little Girl Beatles Anthology Decca',       tier: 3 },
  { title: 'Three Cool Cats',                            query: 'Three Cool Cats Beatles Anthology Decca',         tier: 3 },
  { title: 'To Know Her Is to Love Her',                 query: 'To Know Her Is to Love Her Beatles BBC',          tier: 3 },
  { title: 'Sure to Fall',                               query: 'Sure to Fall in Love with You Beatles BBC',       tier: 3 },
  { title: 'Some Other Guy',                             query: 'Some Other Guy Beatles BBC',                      tier: 3 },
  { title: 'Like Dreamers Do',                           query: 'Like Dreamers Do Beatles Anthology Decca',        tier: 3 },
  { title: 'That Means a Lot',                           query: 'That Means a Lot Beatles Anthology',              tier: 3 },
  { title: "If You've Got Trouble",                      query: "If You've Got Trouble Beatles Anthology",         tier: 3 },
  { title: 'Cayenne',                                    query: 'Cayenne Paul McCartney instrumental',             tier: 3 },
  { title: "Pop Go the Beatles",                         query: "Pop Go the Beatles BBC theme",                    tier: 3 },
];

const previewCache = new Map();

async function getPreviewUrl(song) {
  if (previewCache.has(song.query)) return previewCache.get(song.query);
  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(song.query)}&entity=song&limit=8&country=US`;
    const res = await fetch(url, { timeout: 5000 });
    const data = await res.json();
    const track = data.results?.find(r =>
      r.previewUrl && r.artistName?.toLowerCase().includes('beatles')
    );
    const preview = track?.previewUrl || null;
    previewCache.set(song.query, preview);
    return preview;
  } catch {
    previewCache.set(song.query, null);
    return null;
  }
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function genPin() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function getTier(trophies) {
  if (trophies < 100) return 1;
  if (trophies < 300) return 2;
  return 3;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0)
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

function isCorrectGuess(guess, title) {
  const normalize = s => s.toLowerCase().trim().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ');
  const g = normalize(guess);
  const t = normalize(title);
  if (g.length < 2) return false;
  if (t === g) return true;
  if (t.includes(g) && g.length >= 4) return true;
  if (levenshtein(g, t) <= Math.max(1, Math.floor(t.length * 0.15))) return true;
  // Match on key words (ignore articles)
  const stopWords = new Set(['the', 'a', 'an', 'in', 'on', 'at', 'and', 'or', 'of']);
  const tWords = t.split(' ').filter(w => w.length > 2 && !stopWords.has(w));
  const gWords = g.split(' ').filter(w => w.length > 2 && !stopWords.has(w));
  if (tWords.length > 0 && gWords.length > 0) {
    const matched = tWords.filter(tw => gWords.some(gw => levenshtein(tw, gw) <= 1));
    if (matched.length >= Math.ceil(tWords.length * 0.65)) return true;
  }
  return false;
}

async function selectSongs(avgTrophies, count = 10) {
  const tier = getTier(avgTrophies);
  const eligible = SONGS.filter(s => s.tier <= tier);
  const shuffled = shuffle(eligible);
  const candidates = shuffled.slice(0, Math.min(count * 3, shuffled.length));
  const withPreviews = await Promise.all(
    candidates.map(async s => ({ ...s, previewUrl: await getPreviewUrl(s) }))
  );
  return withPreviews.filter(s => s.previewUrl).slice(0, count);
}

// ─── Game State ────────────────────────────────────────────────────────────

const rooms = {};    // pin → room
const players = {};  // socketId → playerData
const queue = [];    // matchmaking queue [{socketId, trophies, ts}]

// ─── Socket.io ─────────────────────────────────────────────────────────────

io.on('connection', socket => {
  players[socket.id] = {
    id: socket.id, username: 'Anonymous',
    trophies: 0, coins: 0, profilePic: 'default', pin: null
  };

  socket.on('register', data => {
    Object.assign(players[socket.id], data);
  });

  // ── Create Game (PIN) ──────────────────────────────────────────────────
  socket.on('createGame', data => {
    const p = players[socket.id];
    Object.assign(p, data);
    const pin = genPin();
    p.pin = pin;
    rooms[pin] = {
      pin, hostId: socket.id, guestId: null,
      state: 'waiting', songs: [], round: -1,
      scores: {}, skipVotes: new Set(), guessed: false, roundTimer: null
    };
    socket.join(pin);
    socket.emit('gameCreated', { pin });
  });

  // ── Join Game (PIN) ────────────────────────────────────────────────────
  socket.on('joinGame', async data => {
    const { pin } = data;
    const room = rooms[pin];
    if (!room) return socket.emit('joinError', { msg: 'Game not found. Check your PIN!' });
    if (room.guestId) return socket.emit('joinError', { msg: 'Game is already full.' });
    if (room.state !== 'waiting') return socket.emit('joinError', { msg: 'Game already started.' });

    const p = players[socket.id];
    Object.assign(p, data);
    p.pin = pin;
    room.guestId = socket.id;
    room.scores[room.hostId] = 0;
    room.scores[socket.id] = 0;
    socket.join(pin);

    const host = players[room.hostId];
    const guest = players[socket.id];
    io.to(pin).emit('bothConnected', {
      host: { id: host.id, username: host.username, trophies: host.trophies, profilePic: host.profilePic },
      guest: { id: guest.id, username: guest.username, trophies: guest.trophies, profilePic: guest.profilePic },
    });

    room.state = 'loading';
    const avgTrophies = ((host.trophies || 0) + (guest.trophies || 0)) / 2;
    const songs = await selectSongs(avgTrophies, 10);
    if (!rooms[pin]) return; // room cancelled during fetch
    room.songs = songs;
    io.to(pin).emit('gameCountdown', { seconds: 3, songCount: songs.length });
    setTimeout(() => startRound(pin), 3200);
  });

  // ── Find Match (Matchmaking) ───────────────────────────────────────────
  socket.on('findMatch', data => {
    const p = players[socket.id];
    Object.assign(p, data);
    // Remove if already in queue
    const idx = queue.findIndex(q => q.socketId === socket.id);
    if (idx !== -1) queue.splice(idx, 1);
    queue.push({ socketId: socket.id, trophies: p.trophies || 0, ts: Date.now() });
    socket.emit('queueJoined', { position: queue.length });
    tryMatchmaking();
  });

  socket.on('leaveQueue', () => {
    removeFromQueue(socket.id);
  });

  // ── Guess ─────────────────────────────────────────────────────────────
  socket.on('guess', ({ pin, guess }) => {
    const room = rooms[pin];
    if (!room || room.state !== 'playing' || room.guessed) return;
    const song = room.songs[room.round];
    if (!song) return;

    if (isCorrectGuess(guess, song.title)) {
      room.guessed = true;
      clearTimeout(room.roundTimer);
      room.scores[socket.id] = (room.scores[socket.id] || 0) + 1;
      io.to(pin).emit('roundWon', {
        winnerId: socket.id,
        winnerName: players[socket.id]?.username,
        songTitle: song.title,
        scores: { ...room.scores }
      });
      setTimeout(() => advanceRound(pin), 3500);
    } else {
      socket.emit('wrongGuess', { guess });
    }
  });

  // ── Skip Vote ─────────────────────────────────────────────────────────
  socket.on('skipVote', ({ pin }) => {
    const room = rooms[pin];
    if (!room || room.state !== 'playing' || room.guessed) return;
    room.skipVotes.add(socket.id);
    const needed = room.guestId ? 2 : 1;
    io.to(pin).emit('skipVoteUpdate', { votes: room.skipVotes.size, needed });
    if (room.skipVotes.size >= needed) {
      clearTimeout(room.roundTimer);
      const song = room.songs[room.round];
      io.to(pin).emit('roundSkipped', { songTitle: song.title });
      setTimeout(() => advanceRound(pin), 2500);
    }
  });

  socket.on('disconnect', () => {
    removeFromQueue(socket.id);
    const p = players[socket.id];
    if (p?.pin && rooms[p.pin]) {
      const room = rooms[p.pin];
      if (room.state !== 'finished') {
        clearTimeout(room.roundTimer);
        io.to(p.pin).emit('opponentLeft', { username: p.username });
        room.state = 'finished';
        delete rooms[p.pin];
      }
    }
    delete players[socket.id];
  });
});

// ─── Matchmaking ───────────────────────────────────────────────────────────

function removeFromQueue(socketId) {
  const idx = queue.findIndex(q => q.socketId === socketId);
  if (idx !== -1) queue.splice(idx, 1);
}

function tryMatchmaking() {
  if (queue.length < 2) return;
  const now = Date.now();

  for (let i = 0; i < queue.length; i++) {
    for (let j = i + 1; j < queue.length; j++) {
      const a = queue[i], b = queue[j];
      const diff = Math.abs(a.trophies - b.trophies);
      const waiting = Math.max(now - a.ts, now - b.ts);
      // Match if close trophies OR both waited >15s
      if (diff <= 150 || waiting > 15000) {
        queue.splice(j, 1); queue.splice(i, 1);
        createMatchedGame(a.socketId, b.socketId);
        return;
      }
    }
  }
  setTimeout(tryMatchmaking, 3000);
}

async function createMatchedGame(hostId, guestId) {
  const pin = genPin();
  const host = players[hostId];
  const guest = players[guestId];
  if (!host || !guest) return;

  host.pin = pin; guest.pin = pin;
  rooms[pin] = {
    pin, hostId, guestId: guestId,
    state: 'loading', songs: [], round: -1,
    scores: { [hostId]: 0, [guestId]: 0 },
    skipVotes: new Set(), guessed: false, roundTimer: null
  };

  const hostSocket = io.sockets.sockets.get(hostId);
  const guestSocket = io.sockets.sockets.get(guestId);
  if (!hostSocket || !guestSocket) return;

  hostSocket.join(pin); guestSocket.join(pin);

  io.to(pin).emit('matchFound', {
    host: { id: host.id, username: host.username, trophies: host.trophies, profilePic: host.profilePic },
    guest: { id: guest.id, username: guest.username, trophies: guest.trophies, profilePic: guest.profilePic },
  });

  const avgTrophies = ((host.trophies || 0) + (guest.trophies || 0)) / 2;
  const songs = await selectSongs(avgTrophies, 10);
  if (!rooms[pin]) return;
  rooms[pin].songs = songs;
  io.to(pin).emit('gameCountdown', { seconds: 3, songCount: songs.length });
  setTimeout(() => startRound(pin), 3200);
}

// ─── Round Logic ───────────────────────────────────────────────────────────

function startRound(pin) {
  const room = rooms[pin];
  if (!room) return;
  room.round++;
  if (room.round >= room.songs.length) return endGame(pin);

  room.state = 'playing';
  room.guessed = false;
  room.skipVotes = new Set();

  const song = room.songs[room.round];
  io.to(pin).emit('newRound', {
    round: room.round + 1,
    total: room.songs.length,
    previewUrl: song.previewUrl,
    scores: { ...room.scores }
  });

  room.roundTimer = setTimeout(() => {
    if (rooms[pin] && !rooms[pin].guessed) {
      io.to(pin).emit('timeUp', { songTitle: song.title });
      setTimeout(() => advanceRound(pin), 3000);
    }
  }, 30000);
}

function advanceRound(pin) {
  const room = rooms[pin];
  if (!room) return;
  if (room.round + 1 >= room.songs.length) endGame(pin);
  else startRound(pin);
}

function endGame(pin) {
  const room = rooms[pin];
  if (!room) return;
  room.state = 'finished';

  const ids = [room.hostId, room.guestId].filter(Boolean);
  const scores = room.scores;
  let winnerId = null, maxScore = -1;
  ids.forEach(id => {
    if ((scores[id] ?? 0) > maxScore) { maxScore = scores[id] ?? 0; winnerId = id; }
  });
  const isTie = ids.length === 2 && scores[ids[0]] === scores[ids[1]];
  if (isTie) winnerId = null;

  const breakdown = {};
  ids.forEach(id => {
    const won = !isTie && id === winnerId;
    breakdown[id] = {
      score: scores[id] ?? 0, won, tie: isTie,
      trophyDelta: won ? 30 : isTie ? 5 : -20,
      coinsEarned: won ? 75 : isTie ? 15 : 0
    };
  });

  io.to(pin).emit('gameOver', {
    winnerId, isTie, scores, breakdown,
    winnerName: winnerId ? players[winnerId]?.username : null
  });

  setTimeout(() => { delete rooms[pin]; }, 60000);
}

// ─── Start ─────────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`\n🎵  Beatles Quiz running at http://localhost:${PORT}\n`);
});
