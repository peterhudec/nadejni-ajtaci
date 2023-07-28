# JavaScript 3 — Funkcie

Funkcie sú jednými z najdôležitejších stavebných kameňov v programovaní.
Funkciu si môžme predstaviť ako krabičku, ktorej môžme (ale nemusíme) dať nejaký
názov do ktorej zabalím nejaký kus kódu, ktorý môžme spustiť keď sa nám to hodí.
Môžme ho spustiť hneď, alebo neskôr, napríklad v reakcii na nejakú udalosť
(event) a môžme ho spustiť opakovane, koľko krát chceme.

## Syntax

Pre vytvorenie (deklaráciu) funkcie existujú dva spôsoby zápisu (syntaxy),
šípkový (arrow functions) a klasický. Rozdiel nie je iba syntaktický, ale
funkcie definované klasickým syntaxom sa v istých situáciách správajú trochu
ináč ako funkcie definované šípkovým syntaxom. Rozdiely si však vysvetlíme až
neskôr, keď budeme preberať _objektovo orientované programovanie_.

## Klasický syntax

Klasický syntax definície funkcie začína kľúčovým slovom `function`, za ktorým
môže (ale nemusí) nasledovať názov funkcie, za ktorým nasledujú guľaté zátvorky
`()`, za ktorými nasledujú zložené zátvorky `{}`, v ktorých je _telo funkcie_,
teda kód, ktorý chceme do funkcie zabaliť.

```js
function pozdravSlnku () {
  console.log('Sevas slnko,')
  console.log('Ako sa máš?')
}
```

Kód hore nám vytvoril funkciu, ktorú  uložil do premennej `pozdravSlnku`.

Kód zabalený vo funkcií sa spustí iba ak tú funkciu _zavoláme_, teda spustíme.
Funkciu zavoláme (spustíme) tak, že za ňu pridáme guľaté zátvory
`pozdravSlknu()`. Tomu sa hovorí syntax volania funkcie.

```js
console.log('Pred definíciou funkcie')

function pozdravSlnku () {
  console.log('Sevas slnko,')
  console.log('ako sa máš?')
}

console.log('Po definícii funkcie')

// Toto nerobí nič, lebo funkciu sme iba spomenuli premennú v ktorej je,
// ale sme ju nezavolali. Ak chceme funkciu zavolať, musíme za názov premennej
// v ktorej je funkcia uložená napísať guľaté zátvorky
pozdravSlnku

// Tu sme pridali za názov premennej v ktorej je uložená funkcia guľaté zátvorky
// a teda sme funkciu zavolali, čo znamená, že akonáhle JavaScript natrafí na
// tento výraz, tak spustí kôd ktorý je do funkcie zabalený.
pozdravSlnku()

// Funkciu môžme zavolať koľkokrát chceme
pozdravSlnku()
```

Ak spustíme tent kód, tak sa nám do konzoly vypíše toto:

```
Pred definíciou funkcie
Po definícii funkcie
Sevas slnko,
ako sa máš?
Sevas slnko,
ako sa máš?
```

## Funkcie sú hodnoty

JavaScript považuje funkcie za hodnoty, tak ako čísla (`123`, `0.7`),
text (`"nazdar"`, `"slnko"`), zoznamy (`[1, "nazdar", 0.7]`),
čiže ich môžme napríklad uložiť do premenných, alebo zaradiť do zoznamov.

Každá hodnota v JavaScripte má svoj _typ_ a funkcie majú typ `"function"`.

```js
console.log(typeof pozdravSlnku) // "function"

// V premennej s názvom pozdravSlnku je uložená hodnota typu funkcia a tak ju
// môžme uložiť do nejakej inej premennej
const greetTheSun = pozdravSlnku

console.log(typeof greetTheSun) // "function"

greetTheSun()
// Sevas slnko,
// ako sa máš?

pozdravSlnku()
// Sevas slnko,
// ako sa máš?

// Funkcie môžme porovnávať (rovnajú sa iba ak majú rovnakú identitu)
console.log(greetTheSun === pozdravSlnku) // true

// Keďže funkcie sú hodnoty, tak ich môžeme napríklad zaradiť do zoznamu
const mojZoznam = [123, pozdravSlnku, 'bla bla']

// Hodnoty môžeme zo zoznamu vytiahnuť na základe poradového čísla (rátajú od nuly)

console.log(typeof mojZoznam[1]) // "function"

console.log(mojZoznam[1] === greetTheSun) // true

mojZoznam[1]()
// Sevas slnko,
// ako sa máš?
```

## Anonymné funkcie

Ak v definícii funkcie vynecháme jej meno, tak sa vytvorí takzvaná _anonymná
funkcia_.

```js
function () {
  console.log('Čau vole')
}

// A ako ju teraz zavoláme, keď nemá meno?
```

Ak chceme takúto funkciu zavolať, tak ju musíme uložiť do niečoho, čo sa dá
uchopiť, čiže napríklad do nejakej premennej.

Aj keď definícia funkcie má veľmi podobný syntax ako `if`` statement, na rozdiel
od neho je to výraz (expression) a nie vyjadrenie (statement).
Čiže výraz definície funkcie môžme použiť všade tam, kde sa očakáva nejaká
hodnota. Teda napríklad na pravo od `=` keď priraďujeme nejakú hodnotu do premennej.

```js
const mojaFunkcia = function () {
  console.log('Čau vole')
}

// Teraz už ju vieme zavolať, lebo je uložená do premennej,
// pomocou ktorej ju vieme uchopiť
mojaFunkcia()
// Čau vole

// Výraz definície funkcie môžme použiť všade tam, kde sa očakáva nejaká hodnota
// teda napríklad v položkách zoznamu
const pozdravy = [
  function () {console.log('Nazdar')},
  function () {console.log('Sevas')},
  function () {console.log('Čau')},
]

pozdravy[0]() // Nazdar
pozdravy[1]() // Sevas
pozdravy[2]() // Čau

// My už sme pár krát použili anonymné funkcie, ktoré sme priradili do
// vlastností HTML elementov, aby nám ich JavaScript zavolal
// keď nastane nejaká udalosť
const gombik = document.getElementById('gombik')
// Napríklad, keď sa klikne na gombík s id="gombík"
// Funkcii, ktorá sa spustí keď nastane nejaká udalosť sa hovorí
// event handler, alebo callback
gombik.onclick = function () {
  console.log('Niekto klikol na gombík')
}
```

## Šípkový syntax (arrow functions)

Anonymné funkcie sme si museli vysvetliť na to, aby sme pochopili šípkový syntax,
ktorý nemá možnosť zadať meno funkcie a takto definované funkcie sú vždy anonymné,
a teda ich musíme vždy priradiť do nejakej premennej.

V šípkovom syntaxe sa definícia funkcie začína guľatými zátvorkami `()`,
za ktorými nasleduje šípka `=>`, za ktorou nasleduje blok kódu v zložených
zátvorkách `{}`, podobne ako v `if`` statemente. A Rovnako ako v `if`` statemente,
ak v bloku kódu máme iba jeden výraz, tak môžme zložené zátvorky vynechať.

```js
const mojaFunkcia = () => {
  console.log('Nazdar,')
  console.log('ja som šípková funkcia,')
  console.log('skoro ako v rozprávke.')
}

// Ak má telo funkcia iba jeden výraz, tak môžeme zložené zátvokry vynechať
const funkciaSJedinymVyrazom = () => console.log('Nazdar')

// Kvôli čitateľnosti sa telo funkcie zvykne zapisovať do nového riadku
const funkciaSJedinymVyrazom = () =>
  console.log('Nazdar')

// Šípkový syntax je oveľa čitatelnejší než klasický syntax, obzvlášť v event handleroch
gombik.onclick = () => console.log('Niekto klikol na gombík')

const pozdravy = [
  () => console.log('Nazdar'),
  () => console.log('Sevas'),
  () => console.log('Čau'),
]
```

## Argumenty/Parametre

Funkcie sú výborným riešením, ak potrebujeme mať rovnaký kód na viacerych
miestach nášho programu. Ale čo ak kód nie je úplne rovnaký, ale v niektorých
hodnotách sa líši?

```js
playerXButton.onclick = () => {
  console.log('Na ťahu je hráč X')
}

playerYButton.onclick = () => {
  // Ups, toto je skoro to isté ako hore, ale ako to dať do funkcie,
  // keď meno hráča je iné? 🤔
  console.log('Na ťahu je hráč Y')
}
```

Presne na toto nám slúžia parametre. Parametre sú hodnoty ktoré môžme do funkcie
vložiť keď funkciu voláme. Tieto parametre môžme potom použiť v tele funkcie
prostredníctvom premenných ktoré sa nazývajú argumenty. Argumenty definujeme
v guľatých zátvorkách definície funkcie ako mená oddelené čiarkamy.
Argumenty sú premenné, ktoré sú viditeľné iba vo vnútri tela funkcie.

Hovoríme, že funkcia _akceptuje_ argumenty. To, koľko a aké presne argumenty
funkcia akceptuje sa nazýva _podpis funkcie_ (_function signature_).

```js
const naTahuJeHrac = (menoHraca) => {
  // menoHraca je jediný argument tejto funkcie
  // Argumenty nie sú nič iné než premenné
  console.log('Na ťahu je hráč' + menoHraca)
}

// Argumenty sú k dispozícií iba vo vnútri funkcie
console.log(menoHraca) // ReferenceError: menoHraca is not defined

// 'X', 'Y', 'Z' sú parametre ktoré budú priradené do argumentu menoHraca
naTahuJeHrac('X') // Na ťahu je hráč X
naTahuJeHrac('Y') // Na ťahu je hráč Y
naTahuJeHrac('Z') // Na ťahu je hráč Z

// Táto funkcia očakáva tri argumenty
function objemHranola (vyska, sirka, hlbka) {
  const objem = vyska * sirka * hlbka
  console.log(
    `Objem hranola s hranamy ${vyska}, ${sirka} a ${hlbka} je ${objem}`
  )
}

// Funkcu voláme s parametramy 2, 3 a 4,
// ktoré budú priradené do argumentov vyska, sirka a hlbka
objemHranola(2, 3, 4) // Objem hranola so stranamy 2, 3 a 4 je 24

// Funkcu voláme s parametramy 5, 6 a 7,
objemHranola(5, 6, 7) // Objem hranola so stranamy 5, 6 a 7 je 210
```

### Menej parametrov než argumentov

JavaScriptu vôbec nevadí, ak funkciu voláme s menším počtom parametrov, než
očakáva argumentov, čo vedie často k rôznym chybám. Iné jazyky, ako napríklad
Python to nedovoľujú.

Ak funkciu voláme s menším počtov parametrov, než očakáva, tak zvyšné argumenty
budú mať hodnotu `undefined`.

```js
objemHranola(2, 3, 4) // Objem hranola so stranamy 2, 3 a 4 je 24
objemHranola(2, 3) // Objem hranola so stranamy 2, 3 a undefined je NaN
objemHranola(2) // Objem hranola so stranamy 2, undefined a undefined je NaN
objemHranola() // Objem hranola so stranamy undefined, undefined a undefined je NaN

// Je to to isté ako keby sme funkciu volali s undefined namiesto čísel
objemHranola(2, 3, undefined)
objemHranola(2, undefined, undefined)
objemHranola(undefined, undefined, undefined)
```

Táto vlastnosť sa ale dá využiť na definovanie funkcií, ktoré _akceptujú_
nepovinné (optional) argumenty. Pri definovaní argumentov im môžme priradiť
základnú (default) hodnotu, ktorú bude argument obsahovať, ak prislúchajúci
parameter bude mať hodnotu `undefined`.

```js
const kolkoSaZmesti = (vyska, sirka, hlbka) => {
  if (vyska !== undefined && sirka !== undefined && hlbka !== undefined) {
    const objem = vyska * sirka * hlbka
    console.log(
      `Objem hranola s hranamy ${vyska}, ${sirka} a ${hlbka} je ${objem}`
    )
  } else if (vyska !== undefined && sirka !== undefined && hlbka === undefined) {
    const obsah = vyska * sirka
    console.log(
      `Obsah plochy s hranamy ${vyska} a ${sirka} je ${obsah}`
    )
  } else if (vyska !== undefined && sirka === undefined && hlbka === undefined) {
    const obsah = vyska * sirka
    console.log(`Dĺžka hrany je ${vyska}`)
  } else {
    console.log('Do nulového bodu sa nič nezmestí')
  }
}

kolkoSaZmesti(2, 3, 4) // Objem hranola s hranamy 2, 3 a 4 je 24
kolkoSaZmesti(2, 3) // Obsah plochy s hranamy 2 a 3 je 6
kolkoSaZmesti(2) // Dĺžka hrany je 2
kolkoSaZmesti() // Do nulového bodu sa nič nezmestí
```

Pred pár rokmi bol JavaScriptu pridaný syntax pomocou ktorého môžeme jednoducho
nastaviť základné hodnoty (default values) argumentom ak bude funkcia volaná s
prislúchajúcim parametrom s hodnotou `undefined`.

```js
// Tu hovoríme, že ak má byť honota argumentov undefined, tak nech je radšej 0,
function objemHranola (vyska = 0, sirka = 0, hlbka = 0) {
  const objem = vyska * sirka * hlbka
  console.log(
    `Objem hranola s hranamy ${vyska}, ${sirka} a ${hlbka} je ${objem}`
  )
}

// Výsledok síce nie je praktický, ale objem aspoň nie je NaN
objemHranola(2, 3, 4) // Objem hranola s hranamy 2, 3 a 4 je 24
objemHranola(2, 3) // Objem hranola s hranamy 2, 3 a 0 je 0
objemHranola(2) // Objem hranola s hranamy 2, 0 a 0 je 0
objemHranola() // Objem hranola s hranamy 0, 0 a 0 je 0
```

### Viac parametrov než argumentov

JavaScript sa tiež nesťažuje ak funkciu voláme s viacerými argumentmi, než
funkcia definuje. Prebytočné argumenty budú jednoducho ignorované. Čo ak by
sme ale chceli definovať funkciu, ktorá akceptuje akékoľvek množstvo argumentov
a chceli by sme ich všetky použiť v tele funkcie, tak ako to napríklad robia
funkcie `console.log`, `Math.min`, `Math.max` a iné?

```js
console.log('Nazdar') // Nazdar
console.log('Nazdar', 'Jožko') // Nazdar Jožko
console.log('Nazdar', 'Jožko', 'tak ako?') // Nazdar Jožko tak ako?

Math.min(9) // 9
Math.min(9, 7) // 7
Math.min(9, 7, 3, 11, 2, 5, 29) // 2

Math.max(3) // 3
Math.max(3, 5) // 5
Math.max(3, 7, 4, 9, 8, 1, -5) // 9
```

Pre tento účel má JavaScript špeciálny syntax, takzvaný spread operator.
Ak pred posledný argument v definícii funkcie dáme tri bodky
`...poslednyArgument`, tak JavaScript nám do ňho uloží zoznam všetkých
parametrov, ktoré sa nezmestili do predošlých argumentov.

```js
const f = (a, b, c, ...zvysok) => {
  console.log('a:', a)
  console.log('b:', b)
  console.log('c:', c)
  console.log('zvysok:', zvysok)
}

f(11, 22, 33, 44, 55, 66)
// a: 11
// b: 22
// c: 33
// zvysok: [44, 55, 66]
```

Pomocou _spread_ operátora môžme funkciu `kolkoSaZmesti` výrazne zjednodušiť:

```js
const kolkoSaZmesti = (...rozmery) => {
  const vysledok = rozmery.reduce((a, rozmer) => a * (rozmer || 1), 1)

  switch (rozmery.length) {
    case 0:
      console.log('Do nulového bodu sa nič nezmestí')
      break
    case 1:
      console.log(`Dĺžka hrany je ${rozmery[0]}`)
      break
    case 2:
      console.log(`Obsah plochy s hranamy ${rozmery[0]} a ${rozmery[1]} je ${vysledok}`)
      break
    case 3:
      console.log(`Objem hranola s hranamy ${rozmery[0]}, ${rozmery[1]} a ${rozmery[2]} je ${vysledok}`)
      break
    default:
      console.log(`Objem ${rozmery.length}-rozmerného hranola s rozmermy ${rozmery} je ${vysledok}`)
  }
}

kolkoSaZmesti() // Do nulového bodu sa nič nezmestí
kolkoSaZmesti(2) // Dĺžka hrany je 2
kolkoSaZmesti(2, 3) // Obsah plochy s hranamy 2 a 3 je 6
kolkoSaZmesti(2, 3, 4) // Objem hranola s hranamy 2, 3 a 4 je 24
kolkoSaZmesti(2, 3, 4, 5) // Objem 4-rozmerného hranola s rozmermy 2,3,4,5 je 120
```

Ak používame šípkový syntax a funkcia má presne jeden argument, tak môžme guľaté
zátvorky vynechať a kód bude trochu čistejší.

```js
// Funkcia má presne jeden argument tak guľaté zátvorky okolo neho môžme odstrániť
const pozdrav = (meno) => {
  console.log(`Nazdar ${meno}`)
}

// V tomto prípade rozdiel v čitateľnosti nie je až taký veľký...
const pozdrav = meno => {
  console.log(`Nazdar ${meno}`)
}

// ...ale pomôže to čitateľnosti hlavne pri malých anonymných funkciách,
// ktoré používame ako event listenery...
input.addEventListener(event => alert(event.target.value))

// ...alebo callbacky
[2, 5, 4, 3].map(x => x + 100)

fetch('https://v2.jokeapi.dev/joke/Any?type=single')
  .then(response => response.json())
  .then(data => alert(data.joke))
```


## Funkcie vedia aj vyprodukovať hodnotu

Definícia funkcie je výraz, ktorý môžme použiť kdekoľvek sa očakáva nejaká hodnota.
Volanie funkcie je tiež výraz, ktorého výsledkom je nejaká hodnota.
Hovoríme, že funkcia _vrátila_ hodnotu.

Všetky funkcie, ktoré sme doteraz napísali nevracajú žiadnu hodnotu, teda
presnejšie vracajú hodnotu `undefined`.

```js
const vratenaHodnota = pozdravSlnku()
// Sevas slnko,
// ako sa máš?
console.log(vratenaHodnota) // undefined
```

Ak chceme aby funkcia vrátila nejakú hodnotu, teda aby výsledok výrazu jej
volania bola nejaká iná hodnota ako `undefined`, musíme v jej tele použiť
kľúčové slovo `return` nasledované výrazom, ktoého hodnotu funkcia vráti.

```js
const objem = (x, y, z) => {
  return x * y * z
}

const vratenaHodnota = objem(2, 3, 4)
console.log(vratenaHodnota) // 24

objem(2, 3, 4) + objem(4, 5, 6) // 144
```

Akonáhle JavaScript natrafí na kľúčové slovo `return`, tak okamžite vráti hodnotu
výrazu za ním. Nič z toho čo nasleduje za kľúčovým slovom `return` a jeho výrazom
sa nevykoná.

```js
const f = () => {
  console.log('Toto sa vykoná')
  return 123
  // Nič z tohto sa nevykoná, lebo returnom sa ukončilo vykonávanie funkcie
  console.log('Toto sa nevykoná')
  console.log('Ani toto sa nevykoná')
}

f() // výsledkom tohto výrazu bude hodnota 123
// Toto sa vykoná
```

Tento fakt sa často využíva v kombinácií s `if` statementmy na takzvané
skratovanie (short circuiting) funkcie, ktoré môžme použiť namiesto `if else`.

```js
const mozemSiNiecoDovolitKupit = (mojeUspory, cena) => {
  if (mojeUspory > cena) {
    // Ak JavaScript príde to tejto vetvy programu, tak tu sa vykonávanie
    // funkcie skončí ani nič čo nasleduje sa nevykoná
    return 'Môžeš si to kúpiť a ešte ti dačo zostane'
  }

  if (mojeUspory < cena) {
    // To isté tu. Ak JavaScript príde až sem, tak tu funkcia skončí
    return "Smola, na toto nemáš dosť lóve"
  }

  // Ak sa JavaScript dostal až sem, tak to znamená,
  // že ani jedna z podmienok v predošlých if statementoch sa nenaplnila
  return 'Môžeš si to kúpiť, ale už ti nič nezostane'
}
```

Ak používame šípkový syntax bez zložených zátvoriek, tak funkcia vždy vráti
hodnotu výrazu ktorý má v tele:

```js
const f = () => 123

f() // 123


const g = (x, y) => x + y

g(2, 5) // 7
```

Ak ale ponecháme zložené zátvorky, tak musíme vždy použiť kľúčové slovo `return`
ak chceme aby funkcia vrátila nejakú hodnotu, aj keď má iba jeden výraz
Toto je častým zdrojom chýb.

```js
const h = (x, y) => {
  // Ups, táto funkcia vráti undefined,
  // lebo jej telo je zabalené v zložených zátvorkách a nepoužili sme return
  x + y
}

h(3, 5) // undefined


const hh = (x, y) => {
  // Môžme to napraviť buď pridaním kľúčového slova return...
  return x + y
}

hh(3, 5) // 8


// ...alebo ešte lepšie, odstránením zložených zátvoriek
const hhh = (x, y) => x + y

hhh(3, 5) // 8
```

## Funkcie ako mlynčeky na mäso

V matematike majú funkcie trochu iný význam ako v programovaní. V (imperatívnom)
programovaní si môžme predstaviť ako krabičky v ktorých sú uložené nejaké inštrukcie,
ktoré môžme spustiť keď potrebujeme.

V matematike funkcie transformujú dáta. Môžme si ich predstaviť tiež ako krabičky
ktoré majú vstup (argumenty) a výstup (vrátenú hodnotu). Keď do tej krabičky
niečo vložíme, tak ona nám niečo vypľuje. Často sa používa prirovnanie k
mlynčeku na mäso (alebo na hocijakú inú surovinu). Dnu dáme mäso a von nám víde
pomleté mäso. V matematike funkcie nemajú žiadne vedľajšie efetky, teda jediné
čo robia je že vypľujú (vrátia) nejakú hodnotu ktorá závisí iba na tom čo sa do
funkcie vložilo cez jej argumenty. Takýmto funkciám hovoríme _čisté_ funkcie,
alebo _referenčne transparentné_ funkcie.

Tento spôsob uvažovania o funkciách nám pomôže, ak máme problém pochopiť koncept,
že funkcia niečo vráti.

```js
//                      👇 Toto vojde dnu...
function mlyncekNaMaso (maso) {
  //     👇 ...a tu to výde von transformované
  return `pomleté ${maso}`
}

mlyncekNaMaso('bravčové') // 'pomleté bravčové'
mlyncekNaMaso('hovädzie') // 'pomleté hovädzie'

// JavaScript obsahuje veľa čistých funkcií,
// ktoré len vracajú transformované hodnoty, ktoré do nich vložíme

// Keď do funkcie Boolean dáme hocijakú hodnotu, vráti nám ju premenenú na true, alebo false
Boolean(123) // true
Boolean(0) // false

// Keď do funkcie Math.sin dáme nejaké číslo (uhol), vráti nám sínus toho uhla
Math.sin(0) // 0
Math.sin(4) // -0.7568024953079282
Math.sin(Math.PI / 2) // 1

// Keď do funkcie Math.round dáme nejaké číslo, vráti nám ho zaokrúhlené
Math.round(4.5) // 5
Math.round(3.14) // 3
```

## Užitočné odkazy

* https://www.w3schools.com/js/js_functions.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
* https://www.freecodecamp.org/news/understanding-functions-in-javascript/
* https://www.programiz.com/javascript/function
* https://javascript.info/function-basics
