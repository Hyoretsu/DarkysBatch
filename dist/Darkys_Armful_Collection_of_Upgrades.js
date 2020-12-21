(()=>{"use strict";const e=[()=>{Game.Objects.Grandma.amount>=500&&Game.Unlock("Granny talk")},()=>{Game.Objects.Farm.amount>=500&&Game.Unlock("Chocolate chip seeds")},()=>{Game.Objects.Mine.amount>=500&&Game.Unlock("Omegadrill")},()=>{Game.Objects.Factory.amount>=500&&Game.Unlock("Pumping out new workers")},()=>{Game.Objects.Bank.amount>=500&&Game.Unlock("Baking the dough")},()=>{Game.Objects.Temple.amount>=500&&Game.Unlock("Cookie cults")},()=>{Game.Objects["Wizard tower"].amount>=500&&Game.Unlock("Trix™️")},()=>{Game.Objects.Shipment.amount>=500&&Game.Unlock("Hyperspeed")},()=>{Game.Objects["Alchemy lab"].amount>=500&&Game.Unlock("The way we make golden cookies")},()=>{Game.Objects.Portal.amount>=500&&Game.Unlock("Portal to nowhere")},()=>{Game.Objects["Time machine"].amount>=500&&Game.Unlock("Year of the weekly months without the days")},()=>{Game.Objects["Antimatter condenser"].amount>=500&&Game.Unlock("Bake matter")},()=>{Game.Objects.Prism.amount>=500&&Game.Unlock("Shiny!!")},()=>{Game.Objects.Chancemaker.amount>=500&&Game.Unlock("Casino fever")},()=>{Game.Objects["Fractal engine"].amount>=500&&Game.Unlock("Big brain time")},()=>{Game.Objects["Javascript console"].amount>=500&&Game.Unlock("Darky can't actually code")}],a={},t=(e,a,t,n,r)=>{const o=new Game.Upgrade(e,a,t,n,r);return o.darky=1,o},n=(e,a,t,n)=>{const r=new Game.TieredUpgrade(e,a,t,n);return r.darky=1,r},r=()=>{a(),t("Loyalystic mouse","Clicking gains <b>+1% of your CpS</b>.<q>A true, true mouse.</q>",5e28,[11,31]),Game.last.order=163,Game.MakeTiered(Game.last,13,11),n("Granny talk","Grandmas are <b>twice</b> as efficient.<q>Only a few have survived.</q>","Grandma",13),Game.last.order=201,n("Chocolate chip seeds","Farms are <b>twice</b> as efficient.<q>Makes sense, right?</q>","Farm",13),Game.last.order=301,n("Omegadrill","Mines are <b>twice</b> as efficient.<q>It's coming in late but we go it.</q>","Mine",13),Game.last.order=401,n("Pumping out new workers","Factories are <b>twice</b> as efficient.<q>Yes, we no longer need the birds and the bees, we can just create life itself!</q>","Factory",13),Game.last.order=501,n("Baking the dough","Banks are <b>twice</b> as efficient.<q>Instead of making the bucks.</q>","Bank",13),Game.last.order=526,n("Cookie cults","Temples are <b>twice</b> as efficient.<q>Every sunday they meet to bake in secret.</q>","Temple",13),Game.last.order=551,n("Trix™️","Wizard towers are <b>twice</b> as efficient.<q>Brand cookies which taste pretty bad but not taken off the market for some reason. These darn wizards and their silly magic, keeping their brand cookies alive with their magic!</q>","Wizard tower",13),Game.last.order=576,n("Hyperspeed","Shipments are <b>twice</b> as efficient.<q>HYPE, HYPE, HYPE, HYPE!</q>","Shipment",13),Game.last.order=601,n("The way we make golden cookies","Alchemy labs are <b>twice</b> as efficient.<q>[REDACTED]</q>","Alchemy lab",13),Game.last.order=701,n("Portal to nowhere","Portals are <b>twice</b> as efficient.<q>A quiet place to store the cookies. I don't know why you would want to do that though.</q>","Portal",13),Game.last.order=801,n("Year of the weekly months without the days","Time machines are <b>twice</b> as efficient.<q>Counting the hourly seconds by minutes.</q>","Time machine",13),Game.last.order=901,n("Bake matter","Antimatter condensers are <b>twice</b> as efficient.<q>Just a bunch of tiny balls during scientific baking.</q>","Antimatter condenser",13),Game.last.order=1001,n("Shiny!!","Prisms are <b>twice</b> as efficient.<q>Let's baking!</q>","Prism",13),Game.last.order=1101,n("Casino fever","Chancemakers are <b>twice</b> as efficient.<q>A dangerous place for your wallet has become heaven on earth for it.</q>","Chancemaker",13),Game.last.order=1201,n("Big brain time","Fractal engines are <b>twice</b> as efficient.<q>Think thonk.</q>","Fractal engine",13),Game.last.order=1301,n("Darky can't actually code","Javascript consoles are <b>twice</b> as efficient.<q>He just happened to be smart enough to make both an achievement and upgrade mod for Cookie Clicker.</q>","Javascript console",13),Game.last.order=1401},o={init:()=>{(()=>{const e=document.createElement("style");e.textContent=".darky:before{background:url(https://i.imgur.com/q8nNdkI.png);background-position:120px 0px;}",document.head.appendChild(e),Game.crate=new Function(`return ${Game.crate.toString().split("classes+=' upgrade';").join("classes+=' upgrade';\nif (me.darky === 1) classes+=' darky';//Darky's upgrade package injection")}`)()})(),Game.registerHook("check",e),r()},save:()=>{const e={boughtUpgrades:[],unlockedUpgrades:[]};return Game.UpgradesById.forEach((a=>{a.darky&&(a.unlocked&&e.unlockedUpgrades.push(a.name),a.bought&&e.boughtUpgrades.push(a.name))})),JSON.stringify(e)},load:e=>{const a=JSON.parse(e);a.unlockedUpgrades.forEach((e=>{Game.Achievements[e].unlocked=1})),a.boughtUpgrades.forEach((e=>{Game.Achievements[e].bought=1}))},Upgrade:t,TieredUpgrade:n};Game.registerMod("Darkys Upgrade Collection",o),Game.Notify("Darky's Armful Collection of Upgrades 1.1"," <b>16</b> new Upgrades have been added, enjoy and thank you for using my mod!",[19,26,"https://i.imgur.com/3jNJJNw.png"]),PlaySound("https://freesound.org/data/previews/172/172589_71257-lq.mp3")})();
//# sourceMappingURL=Darkys_Armful_Collection_of_Upgrades.js.map