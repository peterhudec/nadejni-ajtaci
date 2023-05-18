# Pseudo elementy, farby a jednotky

## Pseudo elementy

...

Pseudo elementy na rozdiel od pseudo tried začínajú dvoma dvojbodkami `::`.

* `::first-line` Selektuje prvý riadok textu v odstavci
* `::first-letter` Selektuje prvé písmeno v odstavci
* `::marker` Selektuje odrážku v položke zoznamu
* `::placeholder` Selektuje _placeholder_ `<input>` elementov
* `::selection` Selektuje označený text
::before ::after

## `::first-line` a `::first-letter`

Pseudo element `::first-line` selektuje prvý riadok textu v odstavci a
`::first-letter` prvé písmeno v odstavci.

```html
<p>
  Lorem ipsum dolor sit amet...
</p>
<p>
  Ut aliquam nulla id commodo cursus...
</p>
```

```css
p {
  max-width: 300px;
  text-align: justify;
}
p::first-line {
  color: green;
}

p::first-letter {
  font-size: 83px;
  vertical-align: top;
  float: left;
  line-height: 72px;
  padding-right: 10px;
}
```

## `::marker`

Pseudo element `::marker` selektuje odrážky v zoznamoch.

```html
<ul>
  <!-- Tieto položky budú mať červené guličky -->
  <li>Foo</li>
  <li>Bar</li>
  <li>Baz</li>
</ul>
<ol>
  <!-- Tieto položky budú mať zelené číslovanie -->
  <li>Foo</li>
  <li>Bar</li>
  <li>Baz</li>
</ol>
```

```css
::marker {
  font-family: cursive;
}

ul li::marker {
  color: red
}

ol li::marker {
  color: green;
}
```

## `::placeholder`

Pomocou pseudo elementu `::placeholder` môžme naštýlovať _placeholder_ input
elementov ktoré ak ho majú nastavený.

```html
<input placeholder="Niečo sem napíš"/>
<textarea placeholder="Niečo sem napíš"></textarea>
<input/>
```

```css
::placeholder {
  background: lightgray;
}

input::placeholder {
  color: green;
}

textarea::placeholder {
  color: red;
}
```

## `::selection`

Pomocou pseudo elementu `::selection` môžme naštýlovať označený text.

```html
<p class="cervena">
  Lorem ipsum dolor sit amet...
</p>
<p class="zelena">
  Lorem ipsum dolor sit amet...
</p>
```

```css
::selection {
  color: gold;
}

.cervena ::selection {
  background: red;
}

.zelena ::selection {
  background: green;
}
```

## `::before` a `::after`

Pseudo selektor `selektor::before` vytrvorí nový element, ktorý bude prvým
dieťaťom selektovaného elementu.

```css
p::before {
  content: 'na začiatku';
}

p::after {
  content: 'na konci';
}
```

```html
<p>
  <!-- na začiatku -->
  Bla bla bla
  <!-- na konci -->
</p>
```

Tieto pridané elmenty sa nerátajú keď používame pseudo triedy `:first-child`,
`:last-child`, `:nth-child()` atď.

```css
ul::before {
  content: 'na začiatku';
}

ul::after {
  content: 'na konci';
}

ul > :first-child {
  color: red;
}

ul > :last-child {
  color: green;
}
```

```html
<ul>
  <!-- na začiatku -->
  <li>položka</li> <!-- red --> 
  <li>položka</li>
  <li>položka</li> <!-- green --> 
  <!-- na konci -->
</ul>
```

`::before` a `::after` sa správajú špeciálne ak ich uplatníme na element `<q>`,
čiže citát (quotation). Vtedy `::before` a `::after` selektujú otváracie a
zatváracie úvodzovky.

```html
<p>
  Jožko povedal
  <q>
    <!-- tu je od výroby symbol “ -->
    ic do rici!
    <!-- tu je od výroby symbol ” -->
  </q> 
</p>
```

```css
/* Týmto môžme zmeniť farbu úvodzovky */
q::before {
  color: red;
}

/* Týmto môžeme nahradiť úvodzovku */
q::after {
  content: '<<<';
}
```


## Užitočné odkazy

* https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

