(()=>{"use strict";const e=[()=>{Game.cookieClicks>=1e3&&Game.Win("Clicker")},()=>{Game.cookieClicks>=1e4&&Game.Win("Advanced Clicker")},()=>{Game.cookieClicks>=25e3&&Game.Win("Expert Clicker")}],a=Game.ObjectsById.map((e=>e.level)),i=[()=>{a.filter((e=>e>=1)).length===Game.ObjectsById.length&&Game.Win("Level 1 complete!")},()=>{a.filter((e=>e>=5)).length===Game.ObjectsById.length&&Game.Win("Five Hive")},()=>{a.filter((e=>e>=10)).length===Game.ObjectsById.length&&Game.Win("This took forever")}],t=[()=>{Game.Objects.Cursor.amount>=900&&Game.Win("Squeak goes the mouse")},()=>{Game.Objects.Grandma.amount>=650&&Game.Win("I'm too old for this")},()=>{Game.Objects.Farm.amount>=650&&Game.Win("Gorden garden")},()=>{Game.Objects.Mine.amount>=650&&Game.Win("A fine mine you got there")},()=>{Game.Objects.Factory.amount>=650&&Game.Win("Working 24/7")},()=>{Game.Objects.Bank.amount>=650&&Game.Win("Bank on it")},()=>{Game.Objects.Temple.amount>=650&&Game.Win("Temple pun")},()=>{Game.Objects["Wizard tower"].amount>=650&&Game.Win("It's magic, Joel!")},()=>{Game.Objects.Shipment.amount>=650&&Game.Win("My shipment arrives in the morning")},()=>{Game.Objects["Alchemy lab"].amount>=650&&Game.Win("Turning cookies into gold since 2013")},()=>{Game.Objects.Portal.amount>=650&&Game.Win("A portal inside of a portal")},()=>{Game.Objects["Time machine"].amount>=650&&Game.Win("It all began on the 8th of August, 2013")},()=>{Game.Objects["Antimatter condenser"].amount>=650&&Game.Win("AntimatterCon")},()=>{Game.Objects.Prism.amount>=650&&Game.Win("Stop being a prissm")},()=>{Game.Objects.Chancemaker.amount>=650&&Game.Win("And yet you probably never got a blab")},()=>{Game.Objects["Fractal engine"].amount>=650&&Game.Win("Gouchnox")},()=>{Game.Objects["Javascript console"].amount>=650&&Game.Win("Follow the javascript")},()=>{Game.Objects.Idleverse.amount>=650&&Game.Win("Don't call them fanverses, you fool")}],o=[()=>{Game.handmadeCookies>=1e29&&Game.Win("Stop it, it clickles")},()=>{Game.handmadeCookies>=1e31&&Game.Win("Keep up the click")},()=>{Game.handmadeCookies>=1e33&&Game.Win("Clicking is the new booping")},()=>{Game.handmadeCookies>=1e35&&Game.Win("The final click")},()=>{Game.handmadeCookies>=1e37&&Game.Win("Sike, thats the wrong achievement")},()=>{Game.handmadeCookies>=1e39&&Game.Win("How about we tap the cookie now")},()=>{Game.handmadeCookies>=1e41&&Game.Win("Cookie Destroyer")},()=>{Game.handmadeCookies>=1e43&&Game.Win("Give it a click")},()=>{Game.handmadeCookies>=1e45&&Game.Win("Clicking Frenzy: Our Lord and Saviour")},()=>{Game.handmadeCookies>=1e47&&Game.Win("Hand-made cookies are still the best")},()=>{Game.handmadeCookies>=1e49&&Game.Win("My strange clicking addiction")}];let r=0;Game.ObjectsById.forEach((e=>{r=Math.min(e.amount,1e5)}));const n=[()=>{r>=650&&Game.Win("Sexcentennial and a half")}],s=[()=>{Game.prestige>=100&&Game.Win("Heavenly")},()=>{Game.prestige>=1e4&&Game.Win("Transcendent")},()=>{Game.prestige>=1e6&&Game.Win("Higher energy state")},()=>{Game.prestige>=1e8&&Game.Win("Omniverse")},()=>{Game.prestige>=1e10&&Game.Win("The Ascendant")}];let m=0;Game.PrestigeUpgrades.forEach((e=>{e.bought&&m++}));const c=e=>{try{return e.forEach((e=>{if(!Game.Has(e))throw Error})),!0}catch{return!1}},l=[...e,...i,...t,...o,...n,...s,()=>{Game.Has("Lucky digit")&&Game.Has("Lucky number")&&Game.Has("Lucky payout")&&Game.Win("Secret fortune")},()=>{m>=15&&Game.Win("Pretty prestige")},()=>{m>=30&&Game.Win("Live and learn")},()=>{m>=60&&Game.Win("We will stay with you forever")},()=>{"Darky"===Game.bakeryName&&Game.Win("Mod-God complex")},()=>{Game.goldenClicks>=77777&&Game.Win("Golden Jackpot")},()=>{c(["British tea biscuits","Chocolate british tea biscuits","Round british tea biscuits","Round chocolate british tea biscuits","Round british tea biscuits with heart motif","Round chocolate british tea biscuits with heart motif"])&&Game.Win("Getting fancy")},()=>{c(["Caramoas","Sagalongs","Shortfoils","Win mints","Fig gluttons","Loreols","Jaffa cakes","Grease's cups","Digits","Lombardia cookies","Bastenaken cookies","Festivity loops","Havabreaks","Zilla wafers","Dim Dams","Pokey"])&&Game.Win("You wanna be popular?")},()=>{c(["Rose macarons","Lemon macarons","Chocolate macarons","Pistachio macarons","Hazelnut macarons","Violet macarons","Caramel macarons","Licorice macarons","Earl Grey macarons"])&&Game.Win("Emmanuel Macaron")},()=>{c(["Butter horseshoes","Butter pucks","Butter knots","Butter slabs","Butter swirls"])&&Game.Win("Rich butterfingers")},()=>{c(["Cookie dough","Burnt cookie","A chocolate chip cookie but with the chips picked off for some reason","Flavor text cookie","High-definition cookie","Crackers"])&&Game.Win("Bake me, maybe?")},()=>{c(["Toast","Peanut butter & jelly","Wookies","Cheeseburger","One lone chocolate chip","Pizza","Candy"])&&Game.Win("Burger Clicker")},()=>{c(["Profiteroles","Jelly donut","Glazed donut","Chocolate cake","Strawberry cake","Apple pie","Lemon meringue pie","Butter croissant"])&&Game.Win("Pastries from the past")},()=>{c(["Kitten helpers","Kitten workers","Kitten engineers","Kitten overseers","Kitten managers","Kitten accountants","Kitten specialists","Kitten experts","Kitten consultants","Kitten assistants to the regional manager","Kitten marketeers","Kitten analysts","Kitten executives","Kitten angels","Fortune #103"])&&Game.Win("Purrfect Perfection")},()=>{c(["Future almanacs","Seismic magic","Quantum electronics","Contracts from beyond","Paganism","Arcane knowledge","Fossil fuels","Primordial ores","Infernal crops","Relativistic parsec-skipping","Extra physics funding","Light magic","Gemmed talismans","Recursive mirrors","Script grannies","Perforated mille-feuille cosmos"])&&Game.Win("It's sweet, sweet, sweet Synergy")},()=>{c(["Rain prayer","Asteroid mining","Temporal overclocking","Printing presses","God particle","Magical botany","Shipyards","Gold fund","Abysmal glimmer","Primeval glow","Chemical proficiency","Mystical energies","Charm quarks","Mice clicking mice","Tombola computing","Infraverses and superverses"])&&Game.Win("Out of Energy? Get Synergy!")},()=>{c(["Dragon scale","Dragon claw","Dragon fang","Dragon teddy bear"])&&Game.Win("Spike the dragon")},()=>{c(["Elderwort biscuits","Bakeberry cookies","Duketater cookies","Green yeast digestives","Fern tea","Ichor syrup","Wheat slims"])&&Game.Win("Collecting these is like growing plants")},()=>{Game.BuildingsOwned>=3e3&&Game.Win("Owner of Buildings")},()=>{Game.BuildingsOwned>=5e3&&Game.Win("World-dominating company")},()=>{Game.BuildingsOwned>=6e3&&Game.Win("Creator of the Cookieverse")},()=>{Game.BuildingsOwned>=7e3&&Game.Win("Build until you can't build anymore")},()=>{Game.BuildingsOwned>=9e3&&Game.Win("Overlord")},()=>{Game.BuildingsOwned>=1e4&&Game.Win("That's enough, boss")},()=>{Game.UpgradesOwned>=500&&Game.Win("Earth-shattering association")},()=>{Game.UpgradesOwned>=600&&Game.Win("Maker of the Idleverse")}],d=(e,a,i)=>{const t=new Game.Achievement(e,a,i);return t.darky=1,t},u=()=>{d("Clicker","Click on the big cookie <b>1,000</b> times.",[11,22]),Game.last.order=1020,d("Advanced Clicker","Click on the big cookie <b>10,000</b> times.",[11,23]),Game.last.order=1021,d("Expert Clicker","Click on the big cookie <b>25,000</b> times.",[11,24]),Game.last.order=1022,d("Level 1 complete!","Reach level <b>1</b> of every building.",[0,2,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=5017,d("Five Hive","Reach level <b>5</b> of every building.",[1,2,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=5018,d("This took forever","Reach level <b>10</b> of every building.",[2,2,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=5019,d("Squeak goes the mouse","Have <b>900</b> cursors.",[0,19]),Game.last.order=1060,d("I'm too old for this","Have <b>650</b> grandmas.",[1,21]),Game.last.order=1110,d("Gorden garden","Have <b>650</b> farms.",[2,21]),Game.last.order=1210,d("A fine mine you got there","Have <b>650</b> mines.",[3,21]),Game.last.order=1310,d("Working 24/7","Have <b>650</b> factories.",[4,21]),Game.last.order=1410,d("Bank on it","Have <b>650</b> banks.",[15,21]),Game.last.order=1430,d("Temple pun","Have <b>650</b> temples.",[16,21]),Game.last.order=1460,d("It's magic, Joel!","Have <b>650</b> wizard towers.",[17,21]),Game.last.order=1480,d("My shipment arrives in the morning","Have <b>650</b> shipments.",[5,21]),Game.last.order=1510,d("Turning cookies into gold since 2013","Have <b>650</b> alchemy labs.",[6,21]),Game.last.order=1610,d("A portal inside of a portal","Have <b>650</b> portals.",[7,21]),Game.last.order=1710,d("It all began on the 8th of August, 2013","Have <b>650</b> time machines.",[8,21]),Game.last.order=1810,d("AntimatterCon","Have <b>650</b> antimatter condensers.",[13,21]),Game.last.order=1910,d("Stop being a prissm","Have <b>650</b> prisms.",[14,21]),Game.last.order=2010,d("And yet you probably never got a blab","Have <b>650</b> chancemakers.",[19,21]),Game.last.order=2110,d("Gouchnox","Have <b>650</b> fractal engines.<q>69</q>",[20,21]),Game.last.order=2210,d("Follow the javascript","Have <b>650</b> javascript consoles.",[32,21]),Game.last.order=2310,d("Don't call them fanverses, you fool","Have <b>650</b> idleverses.",[33,21]),Game.last.order=2410,d("Stop it, it clickles","Make <b>100 octillion</b> cookies from clicking.",[11,21]),Game.last.order=1010,d("Keep up the click","Make <b>10 nonillion</b> cookies from clicking.",[0,69,"https://i.imgur.com/3jNJJNw.png"]),Game.last.order=1011,d("Clicking is the new booping","Make <b>1 decillion</b> cookies from clicking.",[0,34,"https://i.imgur.com/3jNJJNw.png"]),Game.last.order=1012,d("The final click","Make <b>100 decillion</b> cookies from clicking.<q>But its never over.</q>",[0,46,"https://i.imgur.com/3jNJJNw.png"]),Game.last.order=1013,d("Sike, thats the wrong achievement","Make <b>10 undecillion</b> cookies from clicking.<q>The last achievement wasn't the final one.</q>",[0,5,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=1014,d("How about we tap the cookie now","Make <b>1 duodecillion</b> cookies from clicking.<q>I heard the mobile version is out now.</q>",[1,5,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=1015,d("Cookie Destroyer","Make <b>100 duodecillion</b> cookies from clicking.<q>Agent Johnson was here</q>",[2,5,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=1016,d("Give it a click","Make <b>10 tredecillion</b> cookies from clicking.",[3,5,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=1017,d("Clicking Frenzy: Our Lord and Saviour","Make <b>1 quattuordecillion</b> cookies from clicking.",[4,5,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=1018,d("Hand-made cookies are still the best","Make <b>100 quattuordecillion</b> cookies from clicking.",[5,5,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=1019,d("My strange clicking addiction","Make <b>10 quindecillion</b> cookies from clicking.",[6,5,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=1019,d("All you had to do was ask","Click this custom achievement's slot.<q>Here you go.</q>",[2,4,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=11001,Game.last.clickFunction=()=>{Game.HasAchiev("All you had to do was ask")||(PlaySound("snd/tick.mp3"),Game.Win("All you had to do was ask"))},d("Sexcentennial and a half","Have at least <b>650 of everything</b>.<q>Yes I just did that.</q>",[1,3,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=7004,d("Heavenly","Reach prestige level <b>100</b>.",[19,7]),Game.last.order=30010,d("Transcendent","Reach prestige level <b>10,000</b>.",[18,7]),Game.last.order=30011,d("Higher energy state","Reach prestige level <b>1 million</b>.",[17,7]),Game.last.order=30012,d("Omniverse","Reach prestige level <b>100 million</b>.",[16,7]),Game.last.order=30013,d("The Ascendant","Reach prestige level <b>10 billion</b>.",[15,7]),Game.last.order=30014,d("Secret fortune","Purchase the <b>3 secret prestige upgrades</b>.<q>You got more than one ace up your sleeve, huh?",[24,15]),Game.last.order=32001,d("Pretty prestige","Purchase <b>15</b> prestige upgrades.",[19,48,"https://i.imgur.com/3jNJJNw.png"]),Game.last.order=6005,d("Live and learn","Purchase <b>30</b> prestige upgrades.<q>And never forget.",[19,47,"https://i.imgur.com/3jNJJNw.png"]),Game.last.order=6006,d("We will stay with you forever","Purchase <b>60</b> prestige upgrades.<q>Don't reset us.</q>",[19,46,"https://i.imgur.com/3jNJJNw.png"]),Game.last.order=6007,d("Mod-God complex","Name yourself <b>Darky</b>.<q>Ducky.</q>",[2,12]),Game.last.order=30201,Game.last.pool="shadow",d("Golden Jackpot","Click <b>77,777 golden cookies</b>.",[0,3,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=10001,Game.last.pool="shadow",d("Getting fancy","Purchase <b>all fancy biscuits</b>.",[21,8]),Game.last.order=21101,d("You wanna be popular?","Purchase <b>all popular biscuits</b>.",[20,9]),Game.last.order=21103,d("Emmanuel Macaron","Purchase <b>all macarons</b>.",[20,8]),Game.last.order=21102,d("Rich butterfingers","Purchase <b>all rich butter cookies</b>.",[21,9]),Game.last.order=21104,d("Bake me, maybe?","Purchase <b>all maybe cookies</b>.",[25,29]),Game.last.order=21106,d("Burger Clicker","Purchase <b>all not cookies</b>.<q>Shoutout to the old Idle Game Maker!</q>",[26,29]),Game.last.order=21107,d("Pastries from the past","Purchase <b>all pastries</b>.",[27,29]),Game.last.order=21105,d("Purrfect Perfection","Purrchase <b>every kitten upgrade</b>.<q>Are you sick of these puns yet?</q>",[26,7]),Game.last.order=10001,d("It's sweet, sweet, sweet Synergy","Purchase <b>all Synergy I upgrades</b>.<q>It's ours for the baking.</q>",[9,20]),Game.last.order=6008,d("Out of Energy? Get Synergy!","Purchase <b>all Synergy II upgrades</b>.",[9,29]),Game.last.order=6009,d("Spike the dragon","Purchase <b>all dragon upgrades</b>.<q>Keep an eye on your gems.</q>",[30,12]),Game.last.order=21109,d("Collecting these is like growing plants","Purchase <b>all plant upgrades</b>.<q>It takes a looooong time.</q>",[24,25]),Game.last.order=21108,d("Owner of Buildings","Own <b>3000</b> buildings.",[0,0,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=5010,d("World-dominating company","Own <b>5000</b> buildings.",[2,0,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=5012,d("Creator of the Cookieverse","Own <b>6000</b> buildings.",[3,0,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=5013,d("Build until you can't build anymore","Own <b>7000</b> buildings.",[4,0,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=5014,d("Overlord","Own <b>9000</b> buildings.",[4,4,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=5016,d("That's enough, boss","Own <b>10000</b> buildings.",[6,0,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=5017,d("Earth-shattering association","Purchase <b>500</b> upgrades.",[2,1,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=6003,d("Maker of the Idleverse","Purchase <b>600</b> upgrades.",[3,1,"https://i.imgur.com/AWmeHiO.png"]),Game.last.order=6004},g={init:()=>{(()=>{const e=document.createElement("style");e.textContent=".darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}",document.head.appendChild(e),Game.crate=new Function(`return ${Game.crate.toString().split("shadow';").join(" shadow';\nif (me.darky === 1) classes+=' darky'; //Darky's achievement package injection").split("mysterious?").join("mysterious? (me.darky === 1) ? 'background-image:url(\\'https://i.imgur.com/JKKvixm.png\\')'/*Darky's achievement package injection*/ : ")}`)(),Game.crateTooltip=new Function(`return ${Game.crateTooltip.toString().split("if (mysterious) icon=[0,7];").join("if (mysterious) icon=[0,7]; if (mysterious && me.darky === 1) icon = [1, 4, 'https://i.imgur.com/AWmeHiO.png']")}`)(),Game.Achievements["Grand design"].icon=[1,0,"https://i.imgur.com/AWmeHiO.png"],Game.Achievements.Ecumenopolis.icon=[5,0,"https://i.imgur.com/AWmeHiO.png"],Game.RebuildUpgrades(),Game.Achievements["Grand design"].order=5011,Game.Achievements.Ecumenopolis.order=5015,Game.Achievements.Polymath.order=6010,Game.Achievements["Renaissance baker"].order=6011,Game.Achievements["The elder scrolls"].order=6012,Game.Achievements["Tabloid addiction"].order=11003,Game.Achievements["Olden days"].order=11002,Game.Achievements.Sacrifice.order=30015,Game.Achievements.Oblivion.order=30016,Game.Achievements["From scratch"].order=30017,Game.Achievements["Four-leaf cookie"].order=10002,Game.Achievements["Seven horseshoes"].order=1e4,Game.Achievements["Third-party"].order=30202})(),Game.registerHook("check",l),u()},save:()=>{const e={unlockedAchievs:[]};return Game.AchievementsById.forEach((a=>{a.darky&&a.won&&e.unlockedAchievs.push(a.name)})),JSON.stringify(e)},load:e=>{JSON.parse(e).unlockedAchievs.forEach((e=>{Game.Achievements[e].won=1}))},Achievement:d};Game.registerMod("Darkys Achievement Package",g),Game.Notify("Darky's Achievement Package 1.7"," <b>68</b> new Achievements have been added, enjoy and thank you for using my mod!",[17,26,"https://i.imgur.com/3jNJJNw.png"]),PlaySound("https://freesound.org/data/previews/203/203121_777645-lq.mp3")})();
//# sourceMappingURL=Darkys_Achievement_Package.js.map