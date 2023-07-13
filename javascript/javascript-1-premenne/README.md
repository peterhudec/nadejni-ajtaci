# JavaScript 1 — Premenné (Variables)

Premenné si môžme predstavovať všelijako:

Ako krabičky, ktoré majú meno do ktorých dávame veci (hodnoty), aby sme s tými
vecami mohli potom pracovať.

Ako mená ktoré dávame hodnotám aby sme tieto hodnoty mohli opakovane použiť.

### Premenné

Premenné slúžia na uchovávanie stavu, ktorý sa mení. Premennú definujeme
kľúčovým slovom let za ktorým nasleduje názov premennej. Názov premennej
môže okrem písmen obsahovať číslice a znaky `_` a `$`, ale názov premennej sa
nesmie začínať číslicou. V JavaScripte je rozšírená konvencia, že ak sa premenná
skladá z viacerych slov, tak sú slová oddelené veľkými písmenami, tzv. camelCase,
napríklad `mojaSuperPremenna`.


Takto definujeme premennú s názvom `mojaPremenna`:

```js
let mojaPremenna
```

Do tejto premennej sme zatiaľ nič nevložili a keby sme sa pozreli čo je v nej,
tak by sme videli, že je v nej uložená hodnota `undefined`.

Hodnoty do premenných vkladáme (priraďujeme) pomocou operátora `=`.
Na pravo od `=` je výraz, ktorého hodnotu chceme uložiť (alebo pomenovať)
a na pravo je názov premennej do ktorej to chceme uložiť.

```js
               //👇 Výraz ktorého hodnotu chceme uložiť
mojaPremenna = 5 + 8
//👆Názov premennej do ktorej hodnotu chceme uložiť
```

Ak chceme potom použiť hodnotu uloženú v dákej premennej, tak stačí spomenúť
(referovať) názov tej premennej:

```js
// Premenné môžeme použiť (referovať) hocikde vo výrazoch
mojaPremenna * 2 + mojaPremenna // 13 * 2 + 13

// Takto môžme vypísať hodnotu premennej do konzoly
console.log(mojaPremenna) // console.log(13)
```

Hodnotu v premennej môžme kedykoľvek prepísať, preto sa to aj volá premenná:

```js
console.log(mojaPremenna) // 13
mojaPremenna = 5
console.log(mojaPremenna) // 5
```

Veci môžme ukladať iba do premenných ktoré sú definované, inak JavaScript vyhodí
chybu (ale iba ak sme pred tým použili direktívu `"use strict"`):

```js
"use strict"
neexistujucaPremenna = 123 // Uncaught ReferenceError: x is not defined
```

Premennú môžme definovať a priradiť do nej hodnotu v jednom kroku. Hovoríme, že
inicializujeme premennú:

```js
// Definujeme premennú mojaPremenna a inicializujeme ju na hodnotu 123
let mojaPremenna = 123
```

Môžme definovať aj viacero premenných naraz:

```js
let premennaJedna, premennaDva, premennaTri

// To isté ako
let premennaJedna
let premennaDva
let premennaTri
```

A môžme do nich naraz priradiť tú istú hodnotu:

```js
premennaJedna = premennaDva = premennaTri = 123
```

### Konštanty

Konštanty sú ako premenné, s tým rozdielom, že ich vždy musíme inicializovať,
a ich hodnotu už nemôžme zmeniť.

```js
const mojaKonštanta = 123

const neinicializovanaKonstanta // SyntaxError: Missing initializer in const declaration

mojaKonstanta = 456 // TypeError: Assignment to constant variable.
```

### Kedu použiť konštantu a kedy premennú?

`let` by sme mali použiť iba ak budeme hodnotu niekedy meniť pomocou `=`.
Ak nie, tak by sme mali vždy použiť `const`.

Premenné (`let`) sú na uchovávanie meniaceho sa stavu.

Konštanty (`const`) používame buď na priradenie výstižných názvov zložitým výrazom...

```js
// Toto sa ťažko číta
if (user.loggedIn && (user.role === 'admin' || user.role = 'manager')) {
  // Urob niečo nebezpečné
}


// Výrazu v podmienke môžme dať nejaký výstižný názov
const userHasAccess = user.loggedIn && (user.role === 'admin' || user.role = 'manager')

// A kód bude potom oveľa čitatenejší
if (userHasAccess) {
  // Urob niečo nebezpečné
}
```

...alebo veciam ktoré budeme používať viac krát

```js
let objemKocky = (4 + 5) * (4 + 5) * (4 + 5)

const hrana = 4 + 5
let objemKocky = hrana * hrana * hrana
```

Často môžme program zrýchliť tým, že výsledok nejakého _drahého_ výrazu ktorý
potrebujeme použiť viac krát uložíme do konštanty:

```js
// Prehliadač musí vynaložiť námahu aby našiel element podľa jeho ID
document.getElementById('gombik').innerText = 'Klikni na mna'
// A znova musí vynaložiť námahu
document.getElementById('gombik').style = 'background: green'
// A znova
document.getElementById('gombik').onclick = () => alert('Nazdar')

// Prehliadač musí vynaložiť námahu iba raz, lebo my si výsledok
// (odkaz na HTML element) uložíme do konštanty...
const gombik = document.getElementById('gombik')

// ...ktorý potom môžme použiť, bez toho aby ho prehliadač musel znova a znova hľadať
gombik.innerText = 'Klikni na mna'
gombik.style = 'background: green'
gombik.onclick = () => alert('Nazdar')
```

Konštanty sa ešte používajú v rovnakom zmysle ako v matematike, pre takzvané
na tvrdo definované (hardcoded) hodnoty. Vo väčšine jazykov sa názvy takýchto
konštánt píšu veľkými písmenami a slová sa oddeľujú podčiarkovníkom:

```js
const PI = 3.14

const MIN_PASSWORD_LENGTH = 8

const MAX_LOGIN_ATTEMPTS = 3
```
