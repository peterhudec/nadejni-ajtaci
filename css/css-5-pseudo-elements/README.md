# Pseudo elementy

Okrem pseudo tried existujú v CSS aj pseudo elementy.

Pomocou pseudo tried nám dáva CSS možnosť selektovať elementy podľa stavu v
ktorom sa nachádzajú tým, že danému elementu prehliadač pridá nejakú pseudo
triedu ak je v nejakom stave. Napríklad ak sa kurzor myši akurát nachádza nad
nejakým elementom, tak mu prehliadač pridá pseudo triedu `:hover` pomocou ktorej
môžme potom v CSS selektovať elementy nad ktorými sa akurát vznáša myš.
Ináč by sme nemali možnosť zachytiť tieto stavy iba
pomocou CSS a museli by sme to robiť oveľa komplikovanejšie pomocou JavaScriptu.

Podobne nám pomocou pseudo elementov dáva prehliadač možnosť selektovať elementy
ktoré sme nevytvorili my v našom HTML, ale vytvoril ich prehliadač.

Pseudo elementy na rozdiel od pseudo tried začínajú dvoma dvojbodkami `::`.

## Prvé písmeno

Čo ak by sme napríklad mali vlastný blog a chceli by sme aby každý článok
začínal písmenom ktoré by bolo veľké cez 4 riadky. Mohli by sme zabaliť prvé
písmeno do elementu `<span>` alebo `<div>`:

```html
<p>
  <span>L</span>orem ipsum dolor sit amet...
</p>

<p>
  <span class="prve-pismeno">L</span>orem ipsum dolor sit amet...
</p>
```

A potom ho selektovať v CSS a zväčšiť ho.

```css
p > span:first-child,
/* alebo */
.prve-pismeno {
  font-size: 83px;
  float: left;
}
```

Problém je v tom, že sme museli do nášho HTML pridať element len kvôli tomu ako
to má vyzerať. Našťastie nám prehliadač dáva možnosť dosiahnuť ten istý výsledok
bez zásahu do HTML, pomocou pseudo elementu `::first-letter`, ktorý selektuje
prvé písmeno v elemente.

```html
<p>
  Lorem ipsum dolor sit amet...
</p>
```

```css
p::first-letter {
  font-size: 83px;
  float: left;
}
```

Okrem `::first-letter` je tu ešťe pseudo element `::first-line`, ktorý selektuje
celý prvý riadok.

## 0drážky zoznamov

Čo ak by sme chceli v článkoch v našom blogu používať zoznamy, ale nepáčia sa
nám tie guličky a čísla, ktoré nám od výroby dáva prehliadač? Tu ani niet čo
zabaliť do elementu `<span>`.


```html
<ul>
  <!-- Gulička tu nie je, dodá ju až prehliadač -->
  <li>Foo</li>
  <li>Bar</li>
  <li>Baz</li>
</ul>
<ol>
  <!-- Číslo tu nie je, dodá ho až prehliadač -->
  <li>Foo</li>
  <li>Bar</li>
  <li>Baz</li>
</ol>
```

Našťastie existuje pseudo element `::marker` ktorý selektuje odrážku položky
zoznamu.

```css
::marker {
  font-family: cursive;
}

ol li::marker {
  color: green;
}

ul li::marker {
  content: '🤖';
}
```

## Prázdny input (placeholder)

Čo ak by sme v našom blogu chceli umožniť čitateľom aby mohli pridať komentár
pod článkom a chceli by sme mať nejaký špeciálny dizajn pre placeholder inputu
kde môžu čitatelia komentár napísať?

```html
<article>
  <h1>Toto je môj prvý článok</h1>
  <p>
    Bla bla bla
  </p>
</article>
<form>
  <textarea placeholder="Ak máš dáky komentár, napíš to sem"></textarea>
  <button>Pridaj komentár</button>
</form>
```

Môžme to dosiahnuť pomocou pseudo elementu `::placeholder`, ktorý selektuje
placeholder inputu.

```css
input::placeholder {
  color: orange;
}
```

## Označený text

Čo ak by sme chceli aby text ktorý na našom blogu čitatelia označia mal nejakú
inú farbu a iné pozadie, ako má od výroby?

Pomocou pseudo elementu `::selection` môžme naštýlovať označený text.

```css
::selection {
  color: gold;
  background: brown;
}
```

Čo ak by sme chceli aby komentáre mali iný štýl označeného textu ako samotný
článok?

```html
<article>
  <h1>Toto je môj prvý článok</h1>
  <p>
    Bla bla bla
  </p>
</article>
<h2>Komentáre</h2>
<ul class="komentare">
  <li>Super článok</li>
  <li>Chujovina</li>
  <li>Sám by som to lepšie nenapísal</li>
</ul>
<form>
  <textarea placeholder="Ak máš dáky komentár, napíš to sem"></textarea>
  <button>Pridaj komentár</button>
</form>
```

Pseudo elementy sa dajú použiť v kombinácií s inými selektormi a tak môžme
použiť iný štýl pre označený text pre rôzne časti dokumentu.

```css
::selection {
  color: gold;
}

article ::selection {
  background: green;
}

.komentare ::selection {
  background: red;
}
```

## `::before` a `::after`

Čo ak by sme chceli aby všetky externé odkazy v našom blogu mali na konci
špeciálnu ikonu, aby bolo čitateľom jasné, že ich to naviguje na nejakú inú
stránku:

```html
<article>
  <h1>Môj prvý článok</h1>
  <p>
    Toto je odpoveď na
    <a href="http://iny-blog.sk" target="_blank">
      jeden článok na jednom inom blogu
    </a>,
    ktorý ma riadne nasral.
  </p>
<article>
```

Externé odkazy môžeme selektovať selektorom `a[target="_blank"]` ale ako im
pridáme ikonu?

Môžme to dosiahnuť pomocou pseudo elementu `::after`, ktorý vytvorí element
vnútri selektrora s ktorým je skombinovaný, ale až za všetkými jeho deťmi.
Tomuto elementu môžme potom pomocou CSS dať okrem štýlu aj obsah:

```css
article a[target="_blank"]::after {
  content: '➹';
}
```

Ale čo ak by sme chceli aby zároveň odkazy na stránky ktoré odkazujú na PDF
súbory mali na začiatku ikonu PDF aby to bolo čitaťeľom jasné?

Môžme to dosiahnuť kombináciou selektora `a[href$=".pdf"]` a pseudo elementu
`::before`, ktorý funguje rovnako ako after, ale elemet ktorý pridá bude prvým
dieťaťom.

```css
article a[href$=".pdf"]::before {
  background: lightblue;
  content: 'PDF';
  border: 1px solid;
  font-size: 0.25em;
  padding: 1em 0.5em;
  margin-right: 0.2em;
}
```

### Citáty

Čo ak by sme chceli aby citáty v našom blogu mali nejaké vymakané úvodzovky a
nie tie čo nám od výroby ponúka prehliadač?

```html
<article>
  <h1>Môj prvý článok</h1>
  <p>
    Sokrates povedal
    <q>Viem, že nič neviem</q>
    a potom sa strhla bitka.
  </p>
<article>
```

Môžme to tiež dosiahnuť pomocou pseudo elementov `::before` a `::after`, ktoré
sa v kombinácií s elementom `<q>` (quote - citát) správajú tak, že nepridajú
nové elementy vo vnútri `<q>` ale selektujú otváracie a zatváracie úvodzovky:

```css
q::before {
  content: '👉'
}

q::after {
  content: '👈'
}
```

Elementy pridané pomocou `::before` a `::after` sa nerátajú keď používame pseudo
triedy `:first-child`, `:last-child`, `:nth-child()` atď.

## Užitočné odkazy

* https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

