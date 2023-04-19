# Základné CSS Selektory

Každý CSS rule má selektor ktorým špecifikujeme na ktoré HTML elementy sa má
daný CSS rule uplatniť.

## * (hviezdička) Selektor

Selektor `*` selektuje úplne všetky elementy v html aj vrátane elementov
`html` a `body`.

```css
/* Všetko bude v červenom rámiku */
* {
  border: 1px solid red;
  padding: 20px;
}
```

## Element type selector

Elementy môžme selektovať na základe ich typu (názvu tagu), t.j. `div`, `h2`
`p`, `a`, atď. Toto je asi najjednoduchší selektor. Je to vlastne len názov
tagu.

```css
/* Selektuje všetky h1 elementy */
h1 {
  color: tomato;
}

/* Selektuje všetky paragrafy */
p {
  color: green;
}

ul {
  background: grey;
}

li {
  color: white;
}

a {
  color: gold;
}
```

```html
<h1>Nadpis</h1>
<p>odstavec</p>
<p>odstavec</p>
<ul>
  <li>položka <a>odkaz</a></li>
  <li>položka <a>odkaz</a></li>
  <li>položka <a>odkaz</a></li>
</ul>
```

## ID selector

Ako sme is už vysvetľovali keď sme preberali odkazy, každému html elementu
môžme priradiť jedinečný identifikátor pomocou atribútu `id`.
Každý identifikátor musí byť jedinečný pre celý dokument, v celom HTML dokumente
by nemali byť dva rovnaké identifikátory.

Elementy potom môžme selektovať v CSS podľa ich identifikátorov.
ID selektor sa začína mriežkou `#`, za ktorou nasleduje identifikátor:
`#hodnota-id`.

```css
/* Selektuje element s atribútom id="identifikator-1" */
#identifikator-1 {
  color: red;
}

/* Selektuje element s atribútom id="identifikator-2" */
#identifikator-2 {
  color: green;
}
```

```html
<h1>Nadpis</h1>
<p id="identifikator-1">odstavec</p>
<p>odstavec</p>
<ul>
  <li>položka <a>odkaz</a></li>
  <li>položka <a id="identifikator-2">odkaz</a></li>
  <li>položka <a>odkaz</a></li>
</ul>
```

## Class selector

Každý HTML element môže mať atribút `class` (od slova klasifikácia),
pomocou ktorého ho môžme zaradiť do jednej alebo viacerých kategórií (tried).
Kategôrie (triedy) môžeme nazvať ľubovolne. Jednotlivé triedy sú oddelené
medzerou, z čoho vyplíva, že názov triedy nemôže obsahovať medzeru.

Elementy môžme v CSS selektovať podľa ich tried. Takýto selektor sa začína
bodkou `.`, za ktorou nasleduje názov triedy: `.nazov-triedy`.

```css
.cerveny-text {
  color: red;
}

.zlte-pozadie {
  background: yellow;
}
```

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Fusce <span class="zlte-pozadie">posuere erat</span>
  non sem egestas porttitor.
  Ut <span class="cerveny-text">dignissim pellentesque</span> iaculis.
  Nullam vel neque non augue varius lacinia in id urna.
  In <span class="cerveny-text zlte-pozadie">hac habitasse</span> platea dictumst.
  Vestibulum condimentum libero sem.
</p>
```

## Attribute selector

Elementy môžme selektovať aj podľa akýchkoľvek ich atribútov. Attribute selektor
je zabalený v hranatých zátvorkách a má rôzne možnosti:

```css
/* Selektuje všetky elementy ktoré majú atribút style s akoukoľvek hodnotou */
[style] {
  color: lime;
}

/* Selektuje všetky elementy ktoré majú atribúť target s hodnotou _blank */
[target="_blank"] {
  color: red;
}

/*
Selektuje všetky elementy, ktoré majú atribút title a ktorý obsahuje slovo nazdar
*/
[title~="nazdar"] {
  color: pink;
}

/*
Selektuje všetky elementy, ktoré majú atribút href, ktorý sa začína textom https
*/
[href^="https"] {
  color: grey;
}

/*
Selektuje všetky elementy, ktoré majú atribút href, ktorý sa končí textom .pdf
*/
[href$=".pdf"] {
  color: orange;
}

/*
Selektuje všetky elementy, ktoré majú atribút href, ktorý obsahuje text google
*/
[href*="google"] {
  color: orange;
}
```

## Kombinácie

Všetky tieto selektory môžme spolu kombinovať:

```css
/* Selektuje všetky paragrafy, ktoré majú class="foo" */
p.foo {}

/*
Selektuje všetky paragrafy, ktoré majú class="foo bar",
alebo class="bar foo"
*/
p.foo.bar {}

/* Selektuje všetky <h3 id="dajaky-identifikator"> */
h3#dajaky-identifikator {}

/* Selektuje všetky obrázky, ktoré majú v URL text "dog" */
img[src*="dog"] {}

/* Selektuje všetky odkazy na PDF súbory, ktoré sa otvoria na novej karte */
a[href$=".pdf"][target="_blank"] {}

/* Všetky tieto typy selektorov môžme skombinovať v ľubovoľnom poradí */
div#nejaky-identifikator[title="blah"].foo.bar {}
div[title="blah"]#nejaky-identifikator.foo.bar {}
div#nejaky-identifikator.foo[title="blah"].bar {}
/*
Tieto tri selektory sú ekvivalentné a selektujú takýto element:

<div title="blah" id="nejaky-identifikator" class="foo bar">
  Bla bla bla
</div>
*/
```

## Nabudúce

Nabudúce sa naučíme ako sa dajú selektory kombinovať pomocou kombinátorov.

## Užitočné odkazy

* https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
* https://www.w3schools.com/cssref/trysel.php?selector=[title~=beautiful]
* https://www.w3schools.com/cssref/css_selectors.php
* https://web.dev/learn/css/selectors/



