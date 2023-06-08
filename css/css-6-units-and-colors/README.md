# CSS 6 — Jednotky a farby

## Jednotky

### Absolútne

* `cm` centimeter
* `mm` milimeter
* `Q` štvrtina milimetra
* `in` Palec (inch) `1in = 2.54cm = 96px`
* `pc` Picas `1pc = 1/6in`
* `pt` Points	`1pt = 1/72in`
* `px` pixel obrazovky `1px = 1/96in`

Z týchto všetkých sa prakticky používajú iba pixle `px`.

### Relatívne

Relatívne jednotky určujú rozmer vždy vzhľadom na niečo.

#### Percentá

Pomocou percent môžme nastaviť rozmer nejakej vlastnosti vzhľadom na rozmer
tej istej vlastnosti rodičovského elementu.

```html
<div class="rodic">
  Bla bla bla
  <div class="dieta">
    he he he
  </div>
</div>
```

```css
.rodic {
  height: 100px;
  width: 400px;
  font-size: 20px;
}

.dieta {
  height: 50%; /* 50% zo 100px = 50px */
  width: 25%; /* 25% zo 400px = 100px */
  font-size: 200%; /* 200% z 20px = 40px */
}
```

#### Viewport

Pomocou jednotiek `vh` (viewport height) a `vw` (viewport width) môžeme nastaviť
rozmery nejakej vlastnosti vzhľadom na vnútornú šírku alebo výšku okna
prehliadača (viewportu). `100vh` je 100% výšky viewportu, `50vw` je 50% šírky
viewportu.

```html
<h1>Text na polku výšky viewportu</h1>
```

```css
h1 {
  font-size: 50vh;
}
```

Potom ešte existujú `vmin` a `vmax`. `vmin` je menší z rozmerov `vh` a `vm`,
`vmax` je väčší z nich. Napríklad ak si pozeráme stránku na počítači, tak je
pravdepodobné, že šírka okna bude väčšia ako výška a vtedy bude `vmin` to isté
ako `vh` a `vmax` bude to isté ako `vw`:

```
<----------------------------- vw ------------------------------->
+----------------------------------------------------------------+ ^
|                                                                | |
|                          vmin = vh                             | |
|                          vmax = vw                             | vh
|                                                                | |
|                                                                | |
+----------------------------------------------------------------+ V
```

Ak si však stránku budeme pozerať na mobile (a nebudeme ho mať otočený na šírku),
tak bude `vmin` to isté ako `vw` a `vmax` to isté ako `vh`:

```
<------ vw ------>
+----------------+ ^
|                | |
|                | |
|                | |
|    vmin = vh   | |
|    vmax = vw   | vh
|                | |
|                | |
|                | |
+----------------+ V
```

Praktické použitie ma nenapadá `¯\_(ツ)_/¯`.

#### Písmo

Jednotky `em`, `rem`, `lh`, `rlh`, `ex`, `ch` fungujú všetky vzhľadom na nejaké vlastnosti písma.

* `em` výška písma (`font-size`) rodičovského elementu
* `rem` výška písma _root_ elementu
* `lh` výška riadku (`line-height`) rodičovského elementu
* `lh` výška riadku root elementu
* `ex` výška znaku "x" písma použitého v rodičovskom elemente
* `ch` šírka znaku "0" písma použitého v rodičovskom elemente

Čo ak by sme napríklad chceli aby všetky úrovne podnadpisov mali nejaké vnútorné
odsadenie a zaoblenie rohov.

```html
<h1>Lorem ipsum dolor sit amet</h1>
<h2>Lorem ipsum dolor sit amet</h2>
<h3>Lorem ipsum dolor sit amet</h3>
<h4>Lorem ipsum dolor sit amet</h4>
<h5>Lorem ipsum dolor sit amet</h5>
<h6>Lorem ipsum dolor sit amet</h6>
```

Ak by sme to spravili pomocou absolútnych jednotiek, tak `h1` by malo príliš
malé odsadenie a zaoblenie, a `h6` zase príliš veľké vzhľadom na veľkosť svojho
písma:

```css
h1, h2, h3, h4, h5, h6 {
  background: gold;
  border-radius: 10px;
  padding: 10px;
}
```

Ak ale namiesto pixelov použijeme `em`, tak bude odsadenie a zaoblenie vždy v
tom istom pomere k veľkosti písma:

```css
h1, h2, h3, h4, h5, h6 {
  background: gold;
  border-radius: 0.5em;
  padding: 0.5em;
}
```

### Užitočné odkazy

* https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
* https://www.w3schools.com/cssref/css_units.php
* https://www.freecodecamp.org/news/css-unit-guide/
* https://www.digitalocean.com/community/tutorials/css-css-units-explained

V češtine:

* https://www.jakpsatweb.cz/css/css-jednotky.html
* https://www.vzhurudolu.cz/prirucka/jednotky
* https://www.itnetwork.cz/html-css/css3/zaklady/jednotky-em-rem-px/

## Farby

Farby v CSS môžme špecifikovať rôznymi spôsobmi.

### Nazvané farby

Vo všetkých doterajších príkladoch sme zatiaľ používali iba farby podľa ich
názvov. CSS má zhruba
[170 nazvaných farieb](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color#standard_colors).

```css
p {
  color: red;
  background: yellow;
}
```

Táto paleta je ale dosť obmedzená a je málo pravdepodobné, že korporátna
identita našej webstránky bude mať akurát farby z tejto palety. CSS preto
samozrejme ponúka možnosť namiešať si akúkoľvek farbu.

### RGB

Počítač zvyčajne zobrazuje farby na monitore a každý pixel monitora sa skladá z
červeného, zeleného a modrého svetielka, a kombináciou týchto troch farebných
svetielok sa dá namiešať akákoľvek farba svetla. Toto miešanie sa nazíva RGB
(Red, Green, Blue) alebo aj aditívne miešanie.

V CSS si môžme namiešať akúkoľvek farbu pomocou CSS funkcie `rgb(red green blue)`
ktorej musíme dať tri parametre — množstvo červenej, zelenej a modrej farby z
ktorých chceme namiešať výslednú farbu. Hodnota každej farby je buď číslo od
0 do 255, alebo percento. Tu je príklad ako sú namiešané niektoré nazvané farby:

* `red` = `rbb(255 0 0)` alebo `rgb(100% 0% 0%)`
* `lime` = `rbb(0 255 0)` alebo `rgb(0% 100% 0%)`
* `blue` = `rbb(0 0 255)` alebo `rgb(0% 0% 100%)`
* `yellow` = `rbb(0 255 255)` alebo `rgb(0% 100% 100%)`
* `fuchsia` = `rbb(255 0 255)` alebo `rgb(100% 0% 100%)`
* `aqua` = `rbb(255 255 0)` alebo `rgb(100% 100% 0%)`
* `white` = `rbb(255 255 255)` alebo `rgb(100% 100% 100%)`
* `grey` = `rbb(128 128 128)` alebo `rgb(50% 50% 50%)`
* `black` = `rbb(0 0 0)` alebo `rgb(0% 0% 0%)`

Oveľa bežnejší spôsob ako vyjadriť RGB farbu je však pomocou hexadecimálnych
čísel, teda čísel v šestnástkovej sústave 😱

Nie je to také strašné ako to znie. My používame desiatkovú sústavu, ktorá sa
skladá z 10 číslic od 0 po 9, lebo máme 10 prstov. Šestnástková sústava má 16
číslic, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f. No a v tejto sústave
nám na vyjadrenie čísiel od 0 po 255 stačia iba dve číslice, lebo 255 je FF.

A tak môžme vyjadriť RGB farbu pomocou kombinácie hexadecimálneho syntaxu, ktorý
sa začína mriežkou `#`, za ktorou nasledujú za sebou tri hexadecimálne čísla
reprezentujúce zložky RGB, napríklad farba `darkolivegreen`, ktorá sa skladá
z `rgb(85 107 47)` sa hexadecimálnym syntaxom vyjadrí ako `#556b2f`.
Tu je zopár základných farieb v hexadecimálnom syntaxe:

* `red` = `#ff0000`
* `lime` = `#00ff00`
* `blue` = `#0000ff`
* `yellow` = `#00ffff`
* `fuchsia` = `#ff00ff`
* `aqua` = `#ffff00`
* `white` = `#ffffff`
* `gray` = `#808080`
* `black` = `#000000`

### HSL

Farby sa dajú špecifikovať aj iným spôsobom. Jedno z veľmi praktických spôsobov
je špecifikácia farby podľa odtieňa (hue), nasýtenia (saturation) a jasu (lightness)
v skatke HSL. V CSS môžme použiť funkciu `hsl(hue saturation lightness)`, kde
*saturation* a *lighness* sú vyjadrené ako percento a *hue* je vyjadrené ako
uhol 😲. Preto uhol, lebo odtieň si môžme predstaviť ako kruh kde farby prechádzajú
od červenej 0° cez, žltú 60°, zelenú 120°, azúrovú 180°, modrú 240°, fialovú 300° a
naspäť k červenej. Nasýtenie si môžme zase predstaviť ako vzdialenosť od stredu
tohto kruhu (kde je nulová sýtosť) po jeho okraj (kde je 100%) sýtosť.

![Kruh odtieňa a nasýtenia](https://thenewcode.com/assets/images/hsl-color-wheel.png)

Ak k tomu ešte pridáme *lightness* tak z toho vznikne valec, kde na spodku valca
sú farby najtmavšie a na vrchu najsvetlejšie.

![HSL valec](https://upload.wikimedia.org/wikipedia/commons/6/6b/HSL_color_solid_cylinder_saturation_gray.png)

Tu je zopár základných farieb vyjadrených v HSL:

* `red` = `hsl(0deg 100% 50%)`
* `lime` = `hsl(120deg 100% 50%)`
* `blue` = `hsl(240deg 100% 50%)`
* `yellow` = `hsl(60deg 100% 50%)`
* `fuchsia` = `hsl(300deg 100% 50%)`
* `aqua` = `hsl(180deg 100% 50%)`
* `white` = `hsl(0deg 0% 100%)` odtieň a nasýtenie môžu mať akúkoľvek hodnotu
* `gray` = `hsl(0deg 0% 50.2%)` odtieň môže mať akúkoľvek hodnotu, nasýtenie určuje stupeň šedi
* `black` = `hsl(0deg 0% 0%)` odtieň a nasýtenie môžu mať akúkoľvek hodnotu

Prečo je to také praktické? Lebo môžme veľmi jednoducho odvodiť:

* rôzne odtiene nejakej konkrétnej farby iba zmenou nasýtenia, alebo jasu
* komplementárne farby k nejakej konkrétnej farbe zmenou uhlu nasýtenia

### HWB

Podobne ako HSL funguje HWB (hue, whiteness, blackness), kde sa farba namieša
z odtieňa, bielosti a čiernosti. Keďže sa to moc nepoužíva, nebudem to tu
detailne rozoberať.

## Farebný priestor (Color space)

RGB, HSL a HWB slúžia na definovanie farieb v takzvanom sRGB farebnom priestore,
čo je medzinárodný štandard vytvorený na to, aby monitory a tlačiarne zobrazovali
farby pokiaľ možno rovnako. Na monitore, alebo tlačiarni sa ale nedajú zobraziť
všetky reálne farby.

Pre to existujú ešte všelijaké iné farebné priestory (Lab, Oklab) ktoré obsahujú všetky
reálne farby, a v CSS sa dajú definovať farby aj v týchto priestoroch.
Pre nás to však nemá nijaké praktické použitie, tak to tu uvádzam len pre zaujímavosť.

### Priesvitnosť (alpha channel)

Ak stie si všimli, všetky spôsoby miešania farieb majú tri rozmery, teda tri
hodnoty z ktorých je farba namiešaná (RGB, HSL, HWB). Existuje však ešte jeden
rozmer ktorý môžme použiť a to je priesvitnosť. Priesvitnosť farby môžme špecifikovať
pre každý spôsob miešania pridaním percenta priesvitnosti za lomítkom.
Tu môžme percento vyjadriť aj desatinným číslom. V hexadecimálnom syntaxe
môžme priesvitnosť špecifikovať ako štvrtý pár číslic.

* `rbb(255 255 0 / 50%)`
* `hsl(180deg 100% 50% / 0.5)`
* `#ffff0080` v hexadecimálnej sústave je 80 to isté ako 128 v desiatkovej sústave,
  čo je hodnota presne v strede medzi 0 a 255 (0 a FF v hexadecimálnej sústave)

### Užitočné odkazy

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
* https://www.w3schools.com/cssref/css_colors_legal.php
* https://www.rapidtables.com/web/css/css-color.html
* https://www.quackit.com/css/css_color_codes.cfm

### Užitočné nástroje

* https://bottosson.github.io/misc/colorpicker/
* https://www.canva.com/colors/color-wheel/
* https://color.adobe.com/create/color-wheel
* https://paletton.com/
* https://fffuel.co/cccolor/
