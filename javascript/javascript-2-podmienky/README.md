# JavaScript 2 — Podmienky (Conditionals)

V každom programovacom jazyku existuje mechanizmus na to aby
sa niečo (nejaká časť kódu) vykonalo iba za istých podmienok.
JavaScript má niekoľko takýchto mechanizmov.

## If — else

Najzákladnejší podmieňovací mechanizmus je takzvaný _if statement_.
Jeho najjednoduchšia verzia sa začína kĺúčovým slovom `if` za ktorým
nasledujú guľaté zátvorky `()` v ktorých podmienka a za nimi nasledujú
zložené zátvorky `{}`, v ktorých je blok kódu, ktorý sa vykoná ak je podmienka
pravdivá.

```js
if (x > y) {
  // Všetko čo je medzi týmito zloženými zátvorkami sa vykoná
  // ak sa výraz v guľatých zátvorkách, teda podmienka, vyhodnotí
  // ako pravdivý. V tomto prípade iba ak x je väčšie ako y
  alert('x je väčšie ako y')
}
```

Takýto základý _if statement_ môžme rozšíriť o klauzulu `else if`, za ktorou
takisto nasleduje podmienka v guľatých zátvorkách a blok kódu. Takýchto
`else if` blokov môžeme použiť aj viacero za sebou. Ako poslednú môžme použiť
klauzulu `else`, ktorá zachití všetky ostatné prípady.

```js
if (x === 3) {
  alert('x je presne 3')
} else if (x > y) {
  alert('x je väčšie ako y')
} else if (y < x) {
  alert('x je menšie ako y')
} else {
  alert('x sa rovná y')
}
```

Ak je if statement vyskladaný z viacerých `if else` alebo `else` klauzúl, tak
sa vždy vykoná iba jeden z týchto blokov. Teda akonáhle JavaScript natrafí na
podmienku, ktorá je pravdivá, tak vykoná blok kódu ktorý k nej patrí, a zvyšné
`else if` a `else` klauzuly preskočí a ani sa len nepokúsi vyodnotiť výrazy
v nasledujúcich podmienkach. Hovoríme, že klauzuly sa vzájomne vylučujú
(mutually exclusive).

```js
let x = 3

// JavaScript vyhodnotí výraz v prvej podmienke a výsledok bude false...
if (x === 1) {
  // ...takže toto sa nevykoná
  alert('x je presne 1')

  // JavaScript sa teda pozrie na ďalšiu výraz v nasledujúcej podmienke
  // ktorý sa vyhodnotí ako true...
} else if (x === 3) {
  // ...a tak JavaScript vykoná tento blok kódu
  alert('x je presne 3')

  // Keďže jedna podmienka z tohoto if statementu už bola splnená,
  // JavaScript odignoruje celý zvyšok tohoto if statementu a ani sa len
  // nepokúsi vyhodnotiť výrazy v nasledujúcich podmienkach.
} else if (x > 2) {
  alert('x je väčšie ako 2')
} else if (x < 5) {
  alert('x je menšie ako 5')
}
```

Ak sú ale podmienky rozdelené do samostatných if statementov, teda ak namiesto
`else if` použijeme iba `if`, tak sa klauzuly vzájomne nevylučujú a vykonajú sa
všetky podmienky ktoré sú pravdivé:

```js
let x = 3

if (x === 1) {
  // Toto sa nevykoná, lebo x sa nerovná 1
  alert('x je presne 1')
}

if (x === 3) {
  // Toto sa vykoná, lebo x sa rovná 3
  alert('x je presne 3')
}

if (x > 2) {
  // Toto sa tiež vykoná, lebo x je väčšie ako 2 a toto je samostatný
  // if statement, nezávislý od toho predošlého, lebo sme nepoužili else if,
  // ale iba if
  alert('x je väčšie ako 2')
}

if (x < 5) {
  // Aj toto sa vykoná, lebo x je menšie ako 5 a toto je nezávislý if statement
  alert('x je menšie ako 5')
}
```

## Switch statement

Sú situácie, keď máme veľmi veľa podmienok a vtedy je if statement s veľmi veľa
`else if` klauzulami veľmi neprehľadný. Vtedy môžeme použiť _switch statement_:

```js
/*
JavaScript zoberie výraz v guľatých zátvorkách a postupne ho porovná svýrazmy v
case klauzulách. Tam kde sa výrazy budú zhodovať bude JavaScript pokračovať s
vykonávaním kódu.
*/
let x = 5

switch (x) {
  // 3 sa nezhoduje s 5, tak JavaScript preskočí na nasledujúci case
  case 3:
    console.log('toto sa nevykoná')

  // 8 sa nezhoduje s 5, tak JavaScript preskočí na nasledujúci case
  case 8:
    console.log('toto sa nevykoná')

  // 5 sa zhoduje s 5 a JavaScript vykoná všetko čo nasleduje až kým nenarazí na
  // kľúčové slovo break
  case 5:
    console.log('toto sa vykoná')

  // Keďže JavaScript už našiel zhodu v predošlom case, tak sa ani neunúva
  // porovnať 9 s 5 a vykonáva všetko na čo narazí
  case 9:
    console.log('toto sa vykoná')

    // My ale môžme povedať JavaScriptu, aby vystúpil z tohto switchu pomocou
    // kľúčového slova break
    break

  // Toto sa nevykoná, lebo JavaScript narazil na kľúčové slovo break
  case 7:
    console.log('toto sa nevykoná')

  // Ak by sa nenašla zhoda v ani jednom prípade (case), tak javascript vykoná
  // to čo nájde v klauzule default
  default:
    console.log('toto sa nevykoná')
}
```

Switch statement je trochu záľudný, pretože ak náhodou zabudneme použiť
kľúčové slovo `break` tak sa môže switch správať inak ako očakávame a môže to
byť zdrojom ťažko rozlúštiteľných _bugov_.

Je ešte jeden typ podmieného operátora ale aby sme pochopili jeho užitočnosť,
musíme si vysvetliť rozdiel medzi expression a statement.

## Expression vs Statement

Rozdiel medzi expression a statement je ten, že výraz (expression) je niečo,
čo sa dá vyhodnotiť a výsledkom čoho je nejaká hodnota, ktorú môžme niekde použiť.
Napríklad `123`, `3 + 5`, `'Nazdar'`, `x > y`, `x > y && y > z`. Výraz môžme
použiť všade tam, kde sa očakáva nejaká hodnota, napríklad v inom výraze:

```js
3 // Toto je výraz, ktorého hodnota je 3
5 // Toto je výraz, ktorého hodnota je 5

// Toto je výraz, ktorý sa skladá z dvoch výrazov 5 a 3 a jeho hodnota bude 8
3 + 5

// Toto je výraz, ktorý sa skladá z výrazov 3 + 5 a 2 + 4
// a jeho hodnota bude false
3 + 5 < 2 + 4

// Toto (volanie funkcie) je tiež výraz,
// ktorý v sebe obsahuje výrazy 3 + 5 a x > y a jeho hodnota bude undefined
console.log(3 + 5, x > y)

// Toto (vytvorenie a inicializovanie premennej) je tiež výraz ktorý sa skladá
// z výrazov let x a 3 + 5 a jeho hodnota bude 8
let x = 3 + 5
```

Vyjadrenie (statement) sa na rozdiel od výrazov nevyhodnotí ako hodnota, ale sa
vykoná a nemôžme ho použiť ako hodnotu v iných výrazoch:

```js
// SyntaxError: Unexpected token 'if'
let x = if (3 > 2) {
  '3 je väčšie ako 2'
} else {
  '3 je menšie ako 2'
}

// SyntaxError: Unexpected token 'if'
console.log(if (3 > 2) {'3 je väčšie ako 2'})
```

Príklady vyššie nie sú platný JavaScript. Ak chceme aby to fungovalo, musíme to
napísať takto:

```js
let x
if (3 > 2) {
  x = '3 je väčšie ako 2'
} else {
  x = '3 je menšie ako 2'
}

if (3 > 2) {
  console.log('3 je väčšie ako 2')
}
```

## Ternary operator

Ternary operator funguje ako if statement, s tým rozdielom, že je to výraz,
ktorý sa vyhodnotí na nejakú hodnotu a teda sa dá použiť všade tam, kde sa očakáva
nejaká hodnota. Do ternárneho operátora idú 3 parametre, preto sa volá ternárny.
`podmienka ? výrazA : výrazB`. Prvý parameter je podmienka, teda výraz ktorý sa
vyhodnotí ako pravdivý alebo nepravdivý, tak isto ako v ife. Za ním nasleduje
otáznik `?` za ktorým nasleduje výraz ktorý sa vyhodnotí iba ak je podmienka
pred otáznikom pravdivá, za ktorým nasleduje dvojbodka `:` a za ňou výraz, ktorý
sa vyhodnotí iba ak je podmienka nepravdivá. Výsledkom ternárneho výrazu bude
výsledok výrazu na ľavo alebo na pravo od dvojbodky, podľa toho či bola podmienka
pravdivá alebo nepravdivá:

```js
x = 3 > 2 ? '3 je väčšie ako 2' : '3 je menšie ako 2'
// hodnota x bude text (string) '3 je väčšie ako 2', lebo podmienka bola pravdivá

// Ternary operator môžme použiť všade tam kde sa očakáva nejaká hodnota
console.log(3 > 2 ? '3 je väčšie ako 2' : '3 je menšie ako 2')
```

Na ternary operator sa zvyklo frflať, lebo niektorý ho považujú za nečitateľný,
ale to je väčšinou iba ak je celý na jednom riadku. Ak ho rozdelíme na tri riadky
a odsadíme, tak je oveľa čitatelnejší:

```js
x = 3 > 2 // Ak platí toto,
  ? '3 je väčšie ako 2' // tak výsledok výrazu bude toto.
  : '3 je menšie ako 2' // V opačnom prípade bude výsledkom výrazu toto

console.log(
  3 > 2
    ? '3 je väčšie ako 2'
    : '3 je menšie ako 2'
)
```

## Pravdivosť a nepravdivosť

JavaScript má okrem hodnôt `true` (pravda) a `false` (nepravda) ešte aj koncept
_pravdivosti_ a _nepravdivosti_, teda _truthiness_ a _falsiness_. Tento koncept je
dôležitý pre pochopenie podmienok, ktoré sa vyhodnocujú ako _pravdivé_ alebo
_nepravdivé_.

JavaScript vyhodnocuje nasledujúce hodnoty za _nepravdivé_:
`false`, `null`, `undefined`, `0`, `-0` (áno, JavaScript pozná aj negatívnu
nulu), `NaN` (špeciálna hodnota pre číslo, ktoré nie je číslo - Not a Number) a
`""` (prázdny text).

Všetky ostatné hodnoty sa vyhodnocujú ako _pravdivé_. Napríklad:

* Všetky čísla okrem nuly sú pravdivé
* Všetky texty (strings) okrem prázdneho textu `''` sú pravdivé
* Všetko ostatné čo si len vieme predstaviť je pravdivé

Ak sa chceme presvedčiť, či je nejaký výraz pravdivý, môžme ho skonvertovať do
`true` alebo `false` (takzvané Booleovské hodnoty), pomocou funkcie
`Boolean(výraz)`, alebo pomocou dvojitej negácie `!!výraz`:

```js
Boolean(false) // false
!!false // false

Boolean(null) // false
!!null // false

Boolean(undefined) // false
!!undefined // false

Boolean(0) // false
!!0 // false

Boolean(-0) // false
!!-0 // false

Boolean(NaN) // false
!!NaN // false

Boolean('') // false
!!'' // false

Boolean(1) // true
!!1 // true

Boolean(2) // true
!!2 // true

Boolean(Infinity) // true
!!Infinity // true

Boolean('Nazdar') // true
!!'Nazdar' // true

// Plný zoznam
Boolean([1, 2, 3]) // true
!![1, 2, 3] // true

// Prázdy zoznam
Boolean([]) // true
!![] // true

// true ak HTML obsahuje element s id="gombik", false ak nie
Boolean(document.getElementById('gombik'))
!!document.getElementById('gombik')
```

V podmienkach teda môžme použiť akékoľvek výrazy, nie len tie ktorých výsledkom
bude `true` alebo `false` ako napríklad `x > y` alebo `y === y`:

```js
// Namiesto tejto podmienky...
if (x !== undefined) {}
// ...stačí použiť
if (x) {}

// Namiesto tejto podmienky...
if (x !== 0) {}
// ...stačí použiť
if (x) {}

// Namiesto tejto podmienky...
if (x !== '') {}
// ...stačí použiť
if (x) {}

// Namiesto tejto podmienky...
if (nejakyText.length !== 0) {}
// ...stačí použiť
if (nejakyText) {}
```
