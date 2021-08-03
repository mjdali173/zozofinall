
let hol = document.getElementById("hol");
let en = document.getElementById("en");
let we = document.getElementById("we");
let INFORMATIE = document.getElementById("INFORMATIE");
let general = document.getElementById("general");
let what = document.getElementById("what");

let HuisReiniging = document.getElementById("HuisReiniging");
let HuisReinigingp = document.getElementById("HuisReinigingp");

let Meditatie = document.getElementById("Meditatie");
let Meditatiep = document.getElementById("Meditatiep");


let Spirituele = document.getElementById("Spirituele");
let Spirituelep = document.getElementById("Spirituelep");

let ourwork = document.getElementById("ourwork");
let park = document.getElementById("park");

let Rozenkwarts = document.getElementById("Rozenkwarts");
let Rozenkwartsp = document.getElementById("Rozenkwartsp");

let Pyriet = document.getElementById("Pyriet");
let Pyrietp = document.getElementById("Pyrietp");

let Bergkristal = document.getElementById("Bergkristal");
let Bergkristalp = document.getElementById("Bergkristalp");

let Wereldbollen = document.getElementById("Wereldbollen");
let Wereldbollenp = document.getElementById("Wereldbollenp");

hol.onclick = ()=>{
    setLanugage("hol");
    localStorage.setItem("Lang","hol");
};

en.onclick = ()=>{
    setLanugage("en");
    localStorage.setItem("Lang","en");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
	
};
function setLanugage(getLanuage){
if(getLanuage === "hol"){
    we.innerHTML = "WIJ VERKOPEN GEEN PRODUCTEN WIJ VERKOPEN GELUK & POSITIEVE ENERGIE ";
    INFORMATIE.innerHTML = " ALGEMENE INFORMATIE ";
    general.innerHTML = " Het gedeelte van de Aarde waarop wij leven noemt men de Aardkorst. Deze heeft een dikte tussen 7 en 70 km. De Aardkorst bestaat uit gesteenten. Al deze gesteenten bevatten mineralen. Zo zijn er momenteel meer dan 4200 verschillende gesteenten gekend. ";
    what.innerHTML = "WAT WE DOEN";
    HuisReiniging.innerHTML = "Huis Reiniging";
	    HuisReinigingp.innerHTML = "Voel je jezelf niet comfortabel in je woning betekent dit dat er negatieve energieën of entiteiten  zijn in je omgeving. Om deze te verwijderen is het belangrijk dat je huis gereinigd wordt";
    Meditatie.innerHTML = "Meditatie";
    Meditatiep.innerHTML = "Verhoogt je concentratie, vergroot je zelfbewustzijn, stelt je in staat om stress te bestrijden en te verminderen op dagelijkse basis, maakt je weerbaar, leert je jezelf te ontspannen ,en, dit alles door je innerlijke harmonie te bereiken.";
    Spirituele.innerHTML = "Spirituele begeleiding";
    Spirituelep.innerHTML = "Soms wordt je geconfronteerd met belevingen die je niet kan plaatsen zoals: levendige dromen, visioenen, schimmen zien, stemmen horen en andere onverklaarbare dingen. Dit zijn spirituele ervaringen.";
    ourwork.innerHTML = "ONZE LATSTE WERKEN";
    test.innerHTML = "WAT ONZE KLANTEN ZEGGEN";
    park.innerHTML = "ER IS EEN GROTE PARKING NAAST DE WINKEL OP 50m VAN GASTHUISVEST </br> +32-(0)486-83 54 69";

Rozenkwarts.innerHTML = "Rozenkwarts";
    Rozenkwartsp.innerHTML = "de steen van onvoorwaardelijke liefde en levenslange vriendschap.Geeft eigenliefde en zelfacceptatie.";

Pyriet.innerHTML = "Pyriet";
    Pyrietp.innerHTML = " de steen zorgt voor zuurstof in het bloed en ruimt blokkades op.Geeft mannelijke kracht op alle niveaus zowel aan mannen als aan vrouwen.";

Bergkristal.innerHTML = "Bergkristal Geode";
    Bergkristalp.innerHTML = "de meest krachtige steen op Aarde die alle chakra’s opent en energie stimuleert.Stimuleert ook je zenuwstelsel en bevordert haargroei";

Wereldbollen.innerHTML = "Wereldbollen";
    Wereldbollenp.innerHTML = "Volledig met de hand gemaakt. Iedere bol is een kunstwerk en uniek. Gemaakt met meer dan 35 edelsteensoorten. De meridianen zijn in puur zilver of goud van 14 karaat afgewerkt met een coating ter bescherming. Er zitten meer dan 300 werkuren in het maken van één bol. Ze zijn een “meesterwerk” en zeer zeldzaam.";


}
else if(getLanuage ==="en"){
    we.innerHTML = "WE DO NOT SELL PRODUCTS WE SELL HAPPINESS & POSITIVE ENERGY";
   INFORMATIE.innerHTML = " GENERAL INFORMATION ";
    general.innerHTML = " The part of the world in which we live is called The Earth’s Crest and is after more than 3 billion years only 7 to 70 KM thick. This Crest is consist of rocks. All these rocks contains Minerals. Until today more than 4.200 different types of rocks are discovered and there are still found new types of stones every year somewhere in the world ";
    what.innerHTML = " WHAT WE DO ";
    HuisReiniging.innerHTML = "Home Purification";
    HuisReinigingp.innerHTML = "If you do not feel comfortable in your own home, it means that there are negative energies or entities in your spaces. To remove these, it is necessary to purify your home ";
  Meditatie.innerHTML = "Meditation";
    Meditatiep.innerHTML = "Meditation increases your concentration, increases your self-awareness, enables you to combat stress and reduce it on a daily basis, makes you resilient, teaches you to relax, and all this by achieving your inner harmony";
   Spirituele.innerHTML = "Spiritual accompaniment";
    Spirituelep.innerHTML = "Sometimes you are confronted with experiences you cannot place such as : vivid dreams, visions, seeing things and shadows, hearing voices and other unexplained things. These are spiritual experiences. ";
    ourwork.innerHTML = "OUR LATEST WORKS";
    test.innerHTML = "WHAT OUR CUSTOMERS SAY";
     park.innerHTML = "THER IS A BIG PARKING NEXT TO THE SHOP AT 50m ON GASTHUISVEST </br>+32-(0)486-83 54 69";


Rozenkwarts.innerHTML = "Rose Quartz";
    Rozenkwartsp.innerHTML = "is the stone of unconditional love and creates long friendships.It also brings selflove and self-acceptation.";

Pyriet.innerHTML = "Pyrite";
    Pyrietp.innerHTML = " Pyrite is the stone that provides more oxygen in the blood and clears blockages It creates masculine power at all levels to both men and women.";

Bergkristal.innerHTML = "Rock Crystal Geode";
    Bergkristalp.innerHTML = "are among the most powerful rocks on Earth.They boost your energy and stimulate and open all your chakras , they stimulate as well your nervous system and your hair growth.";

Wereldbollen.innerHTML = "Globes";
    Wereldbollenp.innerHTML = "They are all handmade. Each sphere is a work of art and one of a kind. Made with more than 35 gemstone species. The meridians are in pure silver or 14 carat gold and the sphere is coated for protection. There are more than 300 working hours to create one globe. They are one by one “Masterpieces” and very rare.";


}


}




