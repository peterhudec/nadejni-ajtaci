# CSS 4 — Pseudo triedy

Pseudo triedy (pseudo classes) umožňujú selektovať elementy na základe
ich rôznych stavov. Pseudo class selector sa začína dvojbodkou, za ňou
nasleduje názov pseudo triedy a v niektorých prípadoch ešte zátvorky
a v nich _argumenty_ `:pseudo-trieda` alebo `:pseudo-trieda(argument)`.

Užitočných (aj menej užitočných) pseudo tried je veľmi veľa. My sa si ukážeme
iba zopár z tých najužitočnejších.

## :hover :active :visited

Tieto pseudo triedy selektujú elementy s ktorými nejakým spôsobom interaguje
uživaťeľ. Používajú sa hlavne na odkazy a gombíky, ale môžu sa použiť na
čokoľvek, napríklad na _inputy_ formulárov.

* `:hover` selektuje element ak sa nad ním práve _vznáša_ (hovers) kurzor myši
* `:active` selektuje element ak je na ňho práve kliknuté kurzorom
* `:visited` selektuje odkaz ak adresa na ktorú odkazuje bola už navštívená

```css
a:hover, button:hover {
  color: orange;
}

a:active, button:active {
  color: green;
}

a:visited {
  color: red;
}
```

```html
<body>
  <button>Ja som gombík</button>
  <a href="#">Ja som odkaz</a>
</body>
```

## :first-child :last-child :nth-child ...

Pomocou týchto pseudo tried môžeme selektovať súrodencov ktorý sa nachádzajú
v istom poradí. Často sa používajú na pásikavé riadky tabuliek.

* `:first-child` selektuje element ak je prvým _dieťatom_ (v poradí) svojho rodiča.
* `:last-child` selektuje element ak je posledným _dieťatom_ (v poradí) svojho rodiča.
* `:nth-child(even)` selektuje každé párne dieťa
* `:nth-child(odd)` selektuje každé nepárne dieťa
* `:nth-child(5n)` selektuje každé piate dieťa
* `:nth-child(5n + 2)` selektuje každé piate dieťa začínajúc od druhého
* `:nth-child(5n + 2 of .foo)` to isté, ale ráta iba deti, ktoré majú triedu `.foo`
* `:nth-last-child` to isté ako `:nth-child` ale ráta deti od konca
* `.foo:nth-of-type` to isté ako `:nth-child` ale ráta iba elementy ktoré spĺňajú
  kritérium pred pseudoselektorom

```css
tr:nth-child(even) {
  background: lightgrey;
}
```

```html
<table>
  <tr>
    <td>bunka</td>
    <td>bunka</td>
  <tr>
  <tr>
    <td>bunka</td>
    <td>bunka</td>
  <tr>
  <tr>
    <td>bunka</td>
    <td>bunka</td>
  <tr>
</table>
```

## :checked :invalid :placeholder-shown

Tieto pseudo triedy sa používajú na element `<input/>` ktorý slúži na vstup dát
vo formulároch.

* `:checked` selektuje `<input type="checkbox"/>` a `<input type="radio"/>`
  ak sú zaškrtnuté
* `:checked` selektuje `<input/>` ak hodnota do ňho napísaná nie je platná,
  napríklad ak napíšeme "bla bla" do elementu `<input type="email"/>`
* `:placeholder-shown` selektuje `<input placeholder="sem niečo napíš"/>`
  ak do tohto elementu ešte nikto nič nenapísal

```css
input {
  background: orange;
  /* Ak chceme meniť pozadie inputu, musíme zrušiť výzor, ktorý má od výroby */
  appearance: none;
}

input:checked {
  background: green;
}

input:invalid {
  background: red;
}

input:disabled {
  background: lightgrey;
}

input:placeholder-shown {
  background: green;
}
```

```html
<form>
  <label>
    <input type="checkbox" />
    zašktrni ma
  </label>
  <label>
    <input type="radio" name="pismenko" />
    A
  </label>
  <label>
    <input type="radio" name="pismenko" />
    B
  </label>
  <label>
    <input type="radio" name="pismenko" />
    C
  </label>
  <label>
    Vyplň ma
    <input type="text" placeholder="dačo sem napíš" />
  </label>
  <label>
    Zadaj email
    <input type="email" placeholder="príklad@príklad.sk" />
  </label>
  <label>
    Ja som znefunkčnený
    <input type="text" disabled />
  </label>
</form>
```

## :not()

Pomocou pseudo triedy `:not(selektor)` môžme selektovať všetko čo **nespĺňa**
nejakú podmienku:

```css
/* Označ elementy ktoré majú triedu foo, ale nemajú triedu bar */
.foo:not(.bar) {
  color: yellow;
}

/* Iba gomíky, ktoré nie sú disabled budú zelené keď na ne pôjdeme myšou */
button:not(:disabled):hover {
  background: green;
}
```

```html
<button>ja budem reagovať keď na mňa pôjdeš myšou</button>
<button disabled>ja nebudem reagovať</button>

<div class="foo bar">ja nebudem žltý, lebo mám triedu bar</div>
<div class="foo">ja budem žltý, lebo nemám triedu bar</div>
```

## :is()

Pomocou pseudo triedy `:is(selektor-a, selektor-b, selektor-c)` môžme selektovať
jeden z viaceryých selektorov. Do ľudskej reči by sme to mohli preložiť ako _alebo_:
selektuj `selektor-a` alebo `selektor-b` alebo `selektor-c`.

```css
/* Selektuj všetky inputy typu checkbox alebo radio */
input:is([type=checkbox], [type=radio]) {
  width: 20px;
  vertical-align: middle;
  display: inline-block;
}

/* Bez pseudo triedy :is() by sme to museli urobiť takto */
input[type=checkbox], input[type=radio] {
  width: 20px;
  vertical-align: middle;
  display: inline-block;
}

/* Zjednodušený príklad o gombíkoch a odkazoch */
:hover:is(button, a) {
  color: orange;
}

:active:is(button, a) {
  color: green;
}
```

## Užitočné odkazy

* https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
* https://www.w3schools.com/css/css_pseudo_classes.asp
* https://web.dev/learn/css/pseudo-classes/
* https://css-tricks.com/pseudo-class-selectors/

### Po slovensky

* https://www.itnetwork.sk/html-css/css3/css3-selektory#_pseudo-selektory

## Na budúce

Pseudo elementy 😱





