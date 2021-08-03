let hol = document.getElementById("hol");
let en = document.getElementById("en");


let asd = document.getElementById("p");

let asdd = document.getElementById("pp");
let asddd = document.getElementById("ppp");
let park = document.getElementById("park");

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
 
asd.innerHTML="Het gedeelte van de Aarde waarop wij leven noemt men de Aardkorst. Deze heeft een dikte tussen 7 en 70 km. De Aardkorst bestaat uit gesteenten. Al deze gesteenten bevatten mineralen. Zo zijn er momenteel meer dan 4200 verschillende gesteenten gekend. Deze zijn verdeeld in 3 grote groepen:";
asdd.innerHTML="1.namelijk de magmatische gesteenten ontstaan uit lava,</br>2- de metamorfe gesteenten die tijdens hun groeiproces een chemische verandering ondergaan hebben en de sedimentaire gesteenten gevormd door erosie of afzetting.";
asddd.innerHTML="Daarnaast zijn er nog enkele kleinere groepen zoals organische gesteenten bestaande uit gefossiliseerd materiaal van fauna en flora, als laatste groep hebben we nog gesteenten en materiaal van buitenaardse oorsprong zoals tektieten en meteorieten. Al deze groepen behoren tot 1 van de 7 kristalstelsels die er bestaan.Reeds duizenden jaren geleden waren de Egyptenaren, de Grieken, de Romeinen en andere bevolkingsgroepen al bezig met het bewerken en dragen van edelstenen omdat zij al wisten welke magische krachten deze mineralen in zich hadden.Wil je eens komen kijken naar de pracht van deze unieke soorten ben je altijd welkom en kan je de sfeer opsnuiven van deze natuurwonderen en genieten van de energie van de mineralen. Wij hebben een variatie van ruwe en gepolijste steensoorten zoals Geodes, Clusters, decoratie, beeldjes, Boeddha’s, juwelen zoals ringen, armbanden, colliers oorbellen en gezondheidshangers, pendels, knuffelstenen, zoutlampen en himalayazout in meer dan 300 verschillende steensoorten alsook houtsnijwerk. Indien gewenst kan je elke steensoort die we niet in voorraad hebben bestellen en deze wordt dan achteraf geleverd.Kom snel eens kennis maken in de wondere wereld van de magie van het stenen- en fossielenrijk.     Je kan alle uitleg krijgen in de winkel. Stenen worden op verzoek ook gratis uitgependeld.";
    park.innerHTML = "ER IS EEN GROTE PARKING NAAST DE WINKEL OP 50m VAN GASTHUISVEST </br> +32-(0)486-83 54 69";

}
else if(getLanuage ==="en"){

asd.innerHTML="The part of the world in which we live is called The Earth’s Crest and is after more than 3 billion years only 7 to 70 KM thick. This Crest is consist of rocks. All these rocks contains Minerals. Until today more than 4.200 different types of rocks are discovered and there are still found new types of stones every year somewhere in the world. The Stones are divided in 3 major Categories:";
asdd.innerHTML="1. The magmatic Rocks arise from Magma and Lava.    </br>                                                                              2. The Metamorphic Rocks that undercame a chemical change during their growth process.</br> 3.The Sedimentary Rocks formed by erosion.";
asddd.innerHTML="Above those Categories there are a few groups of stones such as organic material that was fossilised like fauna and flora and at last all Stones who came on Earth from outer space like Meteorites and Tektites. All those groups belong to 1 of the 7 geometrical Cristal shapes made up of atoms.Thousands of years ago, the Egyptians, the Greeks, the Romans, and other populations were already engaged in the crafting and wearing of gemstones because they already knew what powers these minerals had in them.If you want to come to the shop and see the beauty of the unique species you are always welcome and you can souk up the atmosphere of these natural wonders and enjoy the energy of these stones and minerals.We have a variety of rough and polished stones in more than 300 Types such as Geodes, Clusters, Skulls, pendants, Pendulums, Cuddle Stones, Health Pendants and Jewellery such as Rings, Earrings, Bracelets, Necklaces, furthermore Salt lamps and Himalayan salt, and decoration like sculptures in wood carving and stone carvings.Everything you are looking for and we don’t have in the shop can be ordered witch we can deliver in a short time.Come and discover the wonderful world in the realm of fossils and gemstones. You can get all the explanation in the store. Stones can be penduled out free of charge on your request.";
     park.innerHTML = "THER IS A BIG PARKING NEXT TO THE SHOP AT 50m ON GASTHUISVEST </br>+32-(0)486-83 54 69";

}


}
