# JavaScript 4 — Zoznamy (Arrays)

Jedným zo základných stavebných kameňov každého programovacieho jazyka sú
zoznamy. V JavaScripte a v mnohých iných jazykoch sa im hovorí _arrays_, alebo
po Slovensky _polia_.

## Na čo sú dobré?

Zoznamy slúžia na to, aby sme si do nich mohli
ukladať hodnoty v nejakom konkrétnom poradí. Napríklad mená zoradené podľa
abecedy, čísla zoradené od najväčšieho po najmenšie (alebo naopak), uživateľské
statusy zoradené podľa času vytvorenia, objednávky zoradené podľa dátumu alebo
podľa ceny, aťď.

## Ako ich vytvoríme?

## _Doslovný_ (_literal_) syntax

Keďže zoznamy vytvárame v JavaScripte veľmi často, tak v JavaScripte existuje
na ich definovanie špeciálny syntax, v ktorom zoznam definujeme pomocou hranatých
zátvoriek `[` a `]` (square brackets). Medzi tieto zátvorky idú výrazy oddelené
čiarkamy, ktorých hodnoty sa stanú položkami zoznamu. Všetko čo je medzi
týmito hranatými zátvorkami, vrátane zátvoriek samotných je výraz, ktorý môžeme
použiť kdekoľvek sa očakáva nejaká hodnota. Výsledkom tohoto výrazu je samotný
zoznam, s ktorým môžme rôznym spôsobom zaobchádzať.

```js
const x = 8
const y = 5

// Tu sme vytvorili zoznam a uložili sme ho do premennej
const mojZoznam = [123, 'Hehe', [x, y], true, 5 + 8]

const prazdnyZoznam = []

// Tu sme vytvorili zoznam priamo na mieste, kde sa očakáva nejaká hodnota
console.log([123, 'Hehe', [x, y], true, 5 + 8])

// Syntax môže byť aj cez viac riadkov, čo je často oveľa čitateľnejšie,
// obzvlášť ak je zoznam dlhý
const inyZoznam = [
  123,
  'Hehe',
  [x, y],
  true,
  5 + 8,
]

console.log([
  123,
  'Hehe',
  [x, y],
  true,
  5 + 8,
])
```

[Tu si môžte o tomto syntaxe prečítať viac](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals).

## `Array` konštruktor

Zoznam môžeme vytvoriť aj pomocou takzvaného konštruktora `Array`, ktorý môžeme
použiť viacerými spôsobmi.

```js
// Ak voláme konštruktor Array iba s jedným argumentom, ktorý je číslo,
// tak vytvoríme zoznam s daným počtom prázdnych položiek
const zoznam1 = new Array(5) // [empty, empty, empty, empty]

// Vo všetkých ostatných prípadoch sa nám vytvorí zoznam,
// kde argumenty konštruktora budú položkami zoznamu
const zoznam2 = new Array('x', 'y', 'z') // ['x', 'y', 'z']

// Kľúčové slovo new môžme vynechať
const zoznam3 = Array('x', 'y', 'z') // ['x', 'y', 'z']

// A voláme konštruktor bez akýchkoľvek argumentov, vytvoríme prázdny zoznam
const prazdnyZoznam = Array() // []
```

## Čo môžme robiť so zoznamami?

### Zistiť aký je zoznam dlhý

Zoznamu sa môžme napríklad opýtať aký je dlhý, teda koľko má položiek, pomocou
jeho vlastnosti `length`.

```js
const zoznamA = new Array(5)
const zoznamB =  ['a', 'b', 'c']

zoznamA.length // 5
zoznamB.length // 3

console.log(zoznamA.length + zoznamB.length) // 8
```

### Čítať, zapisovať a mazať položky

Hodnoty uložené v zozname môžme čítať na základe ich poradového čísla (indexu)
pomocou hranatých zátvoriek

Na čítanie hodnôt uložených v zoznamoch má JavaScript špeciálny syntax, kde za
výraz, ktorého hodnota je zoznam dáme poradové číslo v hranatých zátvorkách a
výsledkom bude hodnota uložená v zozname pod daným poradovým číslom.

Poradové čísla sa rátajú od nuly, teda prvá položka zoznamu má poradové číslo `0`.

```js
const zoznam = ['a', 'b', 'c', 'd', 'e']

const prvaPolozka = zoznam[0] // 'a'
const druhaPolozka = zoznam[1] // 'b'
const tretiaPolozka = zoznam[2] // 'c'
const stvrtaPolozka = zoznam[3] // 'd'
const piataPolozka = zoznam[4] // 'e'

// Do hranatých zátvoriek môže ísť akýkoľvek výraz
const poslednaPolozka = zoznam[zoznam.length - 1]
```

Ak je zoznam kratší, než je požadované poradové číslo, tak výsledok bude `undefined`.

```js
const siestaPolozka = zoznam[5] // undefined
const wtf = zoznam[true] // undefined
```

Ak je hodnota v zátvorkách typu string (teda text), tak sa JavaScript pokúsi ho
skonvertovať na číslo.

```js
zoznam[2] // 'c'
zoznam['2'] // 'c'
// JavaScript sa snaží skonvertovať na číslo prvé znaky textu a ak sa mu to podarí,
// tak všetko ostatné ignoruje
zoznam['2 bla bla bla'] // 'c'
```

Rovnaký syntax slúži aj na zapisovanie hodnôt do zoznamu.

```js
zoznam[2] = 'X'

console.log(zoznam) // ['a', 'b', 'X', 'd', 'e']
```

Hodnoty môžme zo zoznamu pomocou tohto syntaxu aj vymazať. Dĺžka zoznamu však
ostane nezmenená.

```js
delete zoznam[2]
// Empty je špeciálna hodnota
console.log(zoznam) // ['a', 'b', empty, 'd', 'e']
console.log(zoznam.length) // 5
console.log(zoznam[2]) // undefined
```

### Porovnávať ich (na základe identity)

Dva zoznamy môžme porovnať pomocou operátorov `===` a `==` ale JavaScript ich
porovná iba na základe identity, teda výsledkom porovnania bude `true` iba ak
sa jedná o ten istý zoznam (na tom istom mieste v pamäti počítača).

```js
const zoznamA = ['a', 'b', 'c']
const zoznamB = ['a', 'b', 'c']
const zoznamC = zoznamA

// Obidva zoznamy síce majú rovnaké položky, ale sú to dva nezávislé objekty a
// každý z nich je uložený na inom mieste v pamäti počítača
zoznamA === zoznamB // false

// V premenných zoznamA a zoznamC je uložený iba odkaz na objekt jedného a toho
// istého zoznamu na jednom mieste v pamäti počítača
zoznamA === zoznamC // true
```

Toto pravidlo neplatí iba pre zoznamy, ale pre všetky typy hodnôt,
ktoré nie sú [primitívne](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

## Metódy zoznamu

Všetky vlastnosti zoznamu okrem vlastnosti `length` sú funkcie, ktoré menia jeho
stav, alebo vracajú modifikované kópie zoznamu.
Takéto vlastnosti sa nazývajú _metódy_.

### `at` a `with`

### `push` a `unshift`

Metóda `push` pridá položku na koniec zoznamu a vráti poradové číslo (index)
na ktoré bola hodnota pridaná.

```js
const zoznam = [11, 22, 33]

zoznam.push(40 + 4) // 3 (poradové číslo na ktoré bola hodnota pridaná)

console.log(zoznam) // [11, 22, 33, 44]
```

Metóda `unshift` funguje rovnako ako `push`, ale pridá prvú položku zoznamu a
posunie všetky ostatné položky o jedno poradové číslo (index) ďalej.

### `pop` a `shift`

Metóda `pop` odstráni poslednú položku zo zoznamu a vráti jej hodnotu.

```js
const zoznam = [11, 22, 33]

zoznam.pop() // 33

console.log(zoznam) // [11, 22]

// Ak je pole prázdne, pop vráti hodnotu undefined
[].pop() // undefined
```

Metóda `shift` funguje rovnako ako `pop`, ale odstráni prvú položku zoznamu.

### `slice`

### `splice`

### `flat`

### `join`

### `concat`

### `every` a `some`

### `fill`

### `reverse` a `toReversed`

### `indexOf`

### `includes`

### `sort` a `toSorted`

Metóda `sort` zoradí zoznam podľa abecedy. Ak položky nie sú typu string (text),
tak si ich pod kapotou na string skonvertuje a potom ich zoradí.
Táto metóda, zoznam modifikuje (mutuje) a zároveň ho vráti.

```js
const zoznam = [8, 3, 7, 2, 9, 1]
const zoradenyZoznam = zoznam.sort()

console.log(zoradenyZoznam) // [1, 2, 3, 7, 8, 9]
console.log(zoznam) // [1, 2, 3, 7, 8, 9]

// Premenné zoznam a zoradenyZoznam odkazuju na jeden a ten istý zoznam v pamäti
console.log(zoradenyZoznam === zoznam) // true
```

Metóda `toSorted` (ktorá bola do JavaScriptu pridaná len pred pár mesiacmi)
funguje rovnako, s tým rozdielom, že vráti zoradenú kópiu zoznamu, ale samotný
zoznam nezoradí (nemutuje).

```js
const zoznam = [8, 3, 7, 2, 9, 1]
const zoradenyZoznam = zoznam.toSorted()

console.log(zoradenyZoznam) // [1, 2, 3, 7, 8, 9]
// Zoznam ostal nezmenený
console.log(zoznam) // [8, 3, 7, 2, 9, 1]

// Premenné zoznam a zoradenyZoznam odkazuju na dva rôzne zoznamy v pamäti
console.log(zoradenyZoznam === zoznam) // false
```

Pri používaní týchto dvoch metód je dôležité mať vždy na pamäti to, že zoraďujú
položky lexikologicky, teda abecedne skonvertované na text a toto správanie nás
môže prekvapiť (a viesť k bugom) ak zoraďujeme čísla.

```js
// Hopala, čakali sme, že to bude  [1, 2, 10, 20, 100, 200] a výsledok je...
[200, 100, 20, 10, 2, 1].sort() // [1, 10, 100, 2, 20, 200]
```

V predošlom príklade sa všetky čísla začínajúce číslicou `1` zoradili
lexikograficky pred číslami začínajúcimi číslicou `2`, tak ako sa v slovníku
radia všetky slová začínajúce písmenom `a` za slovami začínajúcimi písmenom `b`.
JavaScript pri zoraďovaní proste vidí číslice ako písmená.

Obidve metódy nám však umožňujú použiť naše vlastné pravidlá pre zoraďovanie.
Stačí ak im ako argument dáme _porovnávaciu_ funkciu, ktorá akceptuje dva argumenty
_a_ a _b_, teda dvojicu položiek zoznamu ktoré sa majú porovnať. Ak chceme, aby
sa položka _a_ zaradila za položku _b_, tak funkcia musí vrátiť hodnotu väčšiu
ako `0` a ak chceme aby sa položka _a_ zaradila pred položku _b_, tak funkcia
musí vrátiť hodnotu menšiu ako `0`. Ak chceme aby poradie položiek zostalo
nezmenené, tak funkcia musí vrátiť hodnotu `0`.

Teda ak chceme zoradiť čísla aritmeticky a nie lexikograficky, tak stačí aby sme
zoraďovacie metódy volali s porovnávacou funkciou `(a, b) => a - b`.

```js
[100, 1, 20, 200, 2, 10].sort((a, b) => a - b) // [1, 2, 10, 20, 100, 200]

[100, 1, 20, 200, 2, 10].sort((a, b) => {
  const retVal = a - b
  console.log('a:', a, 'b:', b, 'a - b:', retVal)
  return retVal
})
// a: 1    b: 100  a - b: -99
// a: 20   b: 1    a - b: 19
// a: 20   b: 100  a - b: -80
// a: 20   b: 1    a - b: 19
// a: 200  b: 20   a - b: 180
// a: 200  b: 100  a - b: 100
// a: 2    b: 100  a - b: -98
// a: 2    b: 20   a - b: -18
// a: 2    b: 1    a - b: 1
// a: 10   b: 20   a - b: -10
// a: 10   b: 2    a - b: 8
```

### `forEach`

### `map`

### `reduce`

### `filter`

### `find`, `findIndex`, `findLast` a `findLastIndex`

