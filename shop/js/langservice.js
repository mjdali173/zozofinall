let hol = document.getElementById("hol");
let en = document.getElementById("en");

let we = document.getElementById("serv");
let dose = document.getElementById("dose");
let servv = document.getElementById("servv");
let hea = document.getElementById("hea");


let chakra = document.getElementById("chakra");
let chakrap = document.getElementById("chakrap");


let reiki = document.getElementById("reiki");
let reikip = document.getElementById("reikip");

let Deeksha = document.getElementById("Deeksha");
let Deekshap = document.getElementById("Deekshap");

let Bachbloesemremedie = document.getElementById("Bachbloesemremedie");
let Bachbloesemremediep = document.getElementById("Bachbloesemremediep");


let Meditatie = document.getElementById("Meditatie");
let Meditatiep = document.getElementById("Meditatiep");


let Spirituele = document.getElementById("Spirituele");
let Spirituelep = document.getElementById("Spirituelep");



let Huis = document.getElementById("Huis");
let Huisp = document.getElementById("Huisp");

let Hotstone = document.getElementById("Hotstone");
let Hotstonep = document.getElementById("Hotstonep");

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
    serv.innerHTML = "ONZE DIENSTEN";
    dose.innerHTML = "Overkomt het je wel eens dat";
    servv.innerHTML = "  </br>  •	Je niet goed weet hoe je naar een situatie moet kijken</br> •	Je het gevoel hebt dat fysieke en emotionele pijnen je verhinderen om ten volle te leven</br>•	Je de druk, de stress, en de eisen die jouw omgeving je oplegt niet meer aankunt</br>•	Je het moeilijk hebt het verleden los te laten</br>•	Je op zoek bent naar een signaal dat jou de weg wijst</br>•	Jij kinderen of jongeren niet meer begrijpt</br>Dit overkomt de meesten van ons, maar wij zijn op weg naar een nieuwe tijd, en velen onder ons voelen dit aan en zijn op zoek naar vernieuwing van het mensbeeld waarin herkenning en erkenning van de innerlijke wereld centraal staat. W e worden uitgenodigd het oude te helen om vanuit nieuwe inzichten en mogelijkheden nieuw leven te creëren.</br>";
    hea.innerHTML = "DAT IS WAAROM IK U ENKELE ALTERNATIEVE HELINGSMETHODES VOORSTEL DIE NATUURLIJKE HELING ACTIVEREN EN UW BALANS HERSTELLEN TUSSEN LICHAAM EN GEEST";

    chakra.innerHTML = "Chakra Heling";
    chakrap.innerHTML = "Het vermogen van edelstenen om de innerlijke krachten en talenten van de mens te wekken en te doen ontplooien vertelt iets over de bijzondere waarde van mineralen en edelstenen. Zich beter voelen door het gebruik van mineralen en edelstenen in zijn natuurlijke vormen hierbij genezing op gang brengen klinkt bijna te simplistisch om geaccepteerd te worden in deze tijd. Toch weten we dat reeds eeuwen geleden in alle culturen gebruik werd gemaakt van edelstenen en mineralen ter ondersteuning van ziekten en emoties. Dat is dan ook de reden waarom ze gebruikt worden bij de behandeling van de Chakra heling om de Chakra’s te reinigen, te deblokkeren en terug in balans te brengen. Meer informatie over zo een behandeling kan je uitgebreid krijgen in de winkel.";
	
    reiki.innerHTML = "Reiki";
    reikip.innerHTML = "Dit is een helingsmethode die gebruik maakt van gestuurde levenskracht energie uit de kosmos. Het is een therapie gebaseerd op handoplegging. Een zachte aanraking die helpt om de natuurlijke kracht van het lichaam tot zelfgenezing aan te zetten. Zij brengt dat wat uit evenwicht is zo goed mogelijk terug in balans en helpt fysieke en emotionele symptomen te verlichten. Reiki is een Japans woord dat gesplitst wordt in 2 delen: REI betekent Universeel en KI betekent Levenskracht. Alles in en om ons ontstaat uit deze energie. Reiki kan dan ook doorgegeven worden aan elk levend organisme.";
	
	
    Deeksha.innerHTML = "Deeksha";
    Deekshap.innerHTML = "Is Sanskriet en betekent initiatie of overdracht van eenheidsenergie. Deze eenheidsenergie bewerkstelligt een neurobiologische verandering in de hersenen die, wanneer afgerond, de zintuigen in staat stelt om vrij te zijn van de tussenkomst en hinder van het denken. De energie komt in de hersenen waar ze de delen activeert die angsten en verslavingen veroorzaken en brengt ze onder controle. Wanneer we nog veel blokkades hebben in de Chakra’s zal Deeksha de aangewezen methode zijn om schoonmaak te houden in bepaalde delen van het lichaam. Dit is een uniek proces dat je het gevoel geeft van ‘thuiskomen in jezelf’ via overbrenging van energie in je hersenen.";
	
    Bachbloesemremedie.innerHTML = "Bachbloesemremedie";
    Bachbloesemremediep.innerHTML = "Genoemd naar zijn ontdekker Dr. Edward Bach die Engelse Arts, Bacterioloog en homeopaat was. Hij heeft na jarenlang onderzoek een geneesmethode gevonden gebaseerd op 38 tincturen  uit bloesems van planten, struiken en bomen. Hij ontdekte dat ze een vibratie afgaven die aansloot bij de archetypische gemoedstoestand van mensen en emoties gunstig beïnvloedden. Hij verdeelde ze in 7 groepen: angst, onzekerheid, desinteresse voor het hier en nu, eenzaamheid, overgevoeligheid, moedeloosheid en wanhoop, en, over bezorgdheid voor het welzijn van anderen. Het uitgangspunt van deze therapie is dat de werkelijke oorzaak ligt in het gevoelsleven van de mens. Voor iedere ‘negatieve’  stemming of gemoedstoestand bestaat er een passende remedie om deze te helpen transformeren naar een ‘positieve’ gemoedstoestand.";

    Meditatie.innerHTML = "Meditatie";
    Meditatiep.innerHTML = "Verhoogt je concentratie, vergroot je zelfbewustzijn, stelt je in staat om stress te bestrijden en te verminderen op dagelijkse basis, maakt je weerbaar, leert je jezelf te ontspannen ,en, dit alles door je innerlijke harmonie te bereiken. Velen onder ons ervaren dat hun lichamelijke en geestelijke welzijn alsook hun omgang met anderen er spectaculair op vooruitgaan. Mediteren is eenvoudig aan te leren via begeleiding en om te zetten in de praktijk.";

Spirituele.innerHTML = "Spirituele begeleiding";
    Spirituelep.innerHTML = "Soms wordt je geconfronteerd met belevingen die je niet kan plaatsen zoals: levendige dromen, visioenen, schimmen zien, stemmen horen en andere onverklaarbare dingen. Dit zijn spirituele ervaringen. Indien je hiermee niet overweg kan of er gewoon meer wil over weten, kan je jezelf hier in laten begeleiden";


    Huis.innerHTML = "Huis Reiniging";
    Huisp.innerHTML = "Voel je jezelf niet comfortabel in je woning betekent dit dat er negatieve energieën of entiteiten  zijn in je omgeving. Om deze te verwijderen is het belangrijk dat je huis gereinigd wordt. Er zijn meerdere opties, ofwel probeer je het zelf met Witte Salie, Palo Santo of Mirre, of laat je dit gebeuren op een professionele manier waarbij alle ruimten in je huis uitgependeld worde om de energieën op te sporen, nadien wordt met een tensor opgespoord of er gaan Aardstraling ergens in je huis binnenkomt en of er geen Leylijn door je huis loopt. Vraag advies over dit in onze winkel. Wij geven je alle nodige informatie.";


    Hotstone.innerHTML = "Hotstone massage";
    Hotstonep.innerHTML = "Wat is hotstone massage en hoe werkt het?</br>Een hotstone massage is een vorm van massage waarbij gladde, platte verwarmde (45°) basalt stenen geplaatst worden op de sleutelposities van het lichaam. Dit wordt dan gemasseerd en geeft een diepe, ontspannende en helende werking. De belangrijkste toepassingsgebieden zijn als volgt:</br>•	Verbetert de bloedsomloop</br>•	Versterkt de lymfestroom</br>•	Verbetert de stofwisseling van de weke delen</br>•	Verwijdert gifstoffen</br>•	Verlicht spierspanning</br>•	Kan worden gebruikt voor gewrichtsproblemen, rugpijn en pijnlijke spieren</br>•	Heeft een kalmerend effect</br>•	Verlicht spanningen veroorzaakt door stress en heeft effect bij hoofdpijn, slapeloosheid, spijsverteringsproblemen</br>•	Versterkt het immuunsysteem.</br>";


    park.innerHTML = "ER IS EEN GROTE PARKING NAAST DE WINKEL OP 50m VAN GASTHUISVEST </br> +32-(0)486-83 54 69";

}
else if(getLanuage ==="en"){
    serv.innerHTML = "OUR SERVICES";
    dose.innerHTML = " Do you feel sometimes that :";
    servv.innerHTML = " </br>•	You don’t know how to look at a situation</br>•	You feel that physical and emotional pain prevents you from living to the fullest</br>•	You can no longer cope with the pressure, stress and demands that your environment imposes to you</br>•	You have a hard time letting go of the past</br>•	You are looking for a signal to show you the way</br>•	You no longer understand children or the youth</br>";
    hea.innerHTML = "That is why I propose you some alternative healing methods that activate natural healing and restore the balance between body and soul/spirit";
    
	chakra.innerHTML = "Chakra healing.";
    chakrap.innerHTML = "The ability of gemstones to unleash and balance the inner strengths and talents of man tells something about the special value of gemstones and minerals using it to initiate healing, sounds almost too simplistic today. Yet we know that for many centuries all cultures have used minerals and gemstones  to support diseases and emotions. That is why they are also used in the treatment of the Chakra healing to cleanse , unblock and balance the Chakras. You can find out how such a healing works by visiting the shop where we give you all information.";
	
    reiki.innerHTML = "Reiki";
    reikip.innerHTML = "This is a healing method that uses directed life force energy from the cosmos. It is a therapy based on the laying of the hands. A gentle touch that helps trigger the body’s natural power to self-heal. It brings back into balance that which is out of balance as best. It can helps relieve physical and emotional symptoms. Reiki is a Japanese word that is split into 2 parts: REI means Universal and KI means life force. Everything around and in us rises from this energy. Reiki can therefore be passed on to any living organism.";
	
	
    Deeksha.innerHTML = "Deeksha";
    Deekshap.innerHTML = "Is Sanskrit and means initiation or transfer of unity energy. It effect neurobiological change in the brain that when completed, allows the senses to be free from the thinking pattern. The energy enters the brain where it activates the parts that cause your fears and bring them under control. When we have blockages in our Chakras, Deeksha  will be the preferred method of cleaning parts of the body. This is a unique process that gives you the feeling of ‘coming home to yourself’ by bridging energy in your brain.";
	
	
    Bachbloesemremedie.innerHTML = "Bach Blossom Remedy";
    Bachbloesemremediep.innerHTML = "Named after the discoverer Dr. Edward Bach English Physician, bacteriologist and Homeopath. After years of research he has found a cure  based on 38 tinctures from blossoms of plants, shrubs and trees. He found that they emitted a vibration that matched the archetypical mood of people and favourably influenced emotions, which he divided  in 7 groups: Fear, Insecurity, Disinterest in the where and how, Loneliness, Hypersensitivity, Despair and Overconfidence fort he wellbeing of others. The starting point of this therapy is that the real cause of illness lies in the emotional life of the human being. For every ‘negative’ mood or state of mind there is an appropriate remedy to transform it into positivity. ";
	
	
    Meditatie.innerHTML = "Meditation";
    Meditatiep.innerHTML = "Meditation increases your concentration, increases your self-awareness, enables you to combat stress and reduce it on a daily basis, makes you resilient, teaches you to relax, and all this by achieving your inner harmony. Many of us experience a spectacular improvement in their physical and  mental well-being as well as their interactions with others. Meditation is easy to learn trough guidance and to put it into practice.";
	
	 Spirituele.innerHTML = "Spiritual accompaniment";
    Spirituelep.innerHTML = "Sometimes you are confronted with experiences you cannot place such as : vivid dreams, visions, seeing things and shadows, hearing voices and other unexplained things. These are spiritual experiences. If you can’t handle this or just want to know more about it, you can always let yourself be guided in this.";
	
	
	 Huis.innerHTML = "Home Purification";
    Huisp.innerHTML = "If you do not feel comfortable in your own home, it means that there are negative energies or entities in your spaces. To remove these, it is necessary to purify your home ; There are several options for this, either you do this yourself with white sage, Palo Santo or Myrrh, or you have this done professionally. Your home will be shuttled room by room with a tensor and a pendulum to detect if there is Earth radiation and/or maybe a Leyline through your house runs. Ask for advice about this in our store, we will give full support.";
	
	 Hotstone.innerHTML = "Hotstone Massage.";
    Hotstonep.innerHTML = "What is hotstone massage and how does it work?</br>A hotsone massage is a form of massage in witch smooth, flat warm (45°) basalt stones are placed on the key positions of the body. This is then massaged and this gives a deep relaxing healing effect. The most important application areas are as follow: </br>•	Improves circulation</br>•	Strengthens lymph flow</br>•	Improves soft tissue metabolism</br>•	Removes toxins</br>•	Alleviates muscle tension</br>•	Can be used for joint problems, back pain, and sore muscles</br>•	Has a calming effect</br>•	Alleviates tension caused by stress and it effects headaches, insomnia, digestive problems.</br>•	Strengthens the immune system</br>";


	     park.innerHTML = "THER IS A BIG PARKING NEXT TO THE SHOP AT 50m ON GASTHUISVEST </br>+32-(0)486-83 54 69";


}


}
