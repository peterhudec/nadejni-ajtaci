# Kombinovanie CSS selektorov

CSS selektory môžme spolu kombinovať pomocou kombinátorov.

## Grouping

Jeden štýl môžeme uplatniť na viacero selektorov tak, že jednotlivé selektory
oddelíme čiarkou `,`.

```css
h1, h2, h3, h4, h5, h6 {
  color: blue;
}

span.some-class,
div[title="something"],
#some-id {
  color: red;
}
```

## Selektovanie detí (child combinator)

Pomocou child kombinátora môžme selektovať deti — teda priamich potomkov v
hierarchii elementov. Ak medzi dva selektory vložíme znamienko väčšie než
`selektor > selektor`, alebo `selektor>selektor`, tak tým hovoríme:
označ všetkých *priamych* potomkov ľavého selektora, ktorí spĺňajú podmienky
pravého selektora.

```css
/* Selektuj všetky spany, ktoré sú priamy potomkovia (deti) elementu article */
article > span {
  color: red;
}
```

```html
<article>
  <!-- Bude mať červený text, lebo je priamym potomkom article -->
  <span>ja som priamy potomok artiklu</span>
  <p>
    Bla bla
    <!-- Nebude mať červený text, lebo nie je priamym potomkom article -->
    <span>ja nie som priamy potomok artiklu</span>
    bla bla
  </p>
  <!-- Aj tento bude mať červený text, lebo je tiež priamym potomkom article -->
  <span>ja som tiež priamy potomok artiklu</span>
</article>
```

## Selektovanie potomkov (descendant combinator)

Descendant kombinátor funguje podobne ako _child_ kombinátor, ale selektuje
všetkých, nie len priamych potomkov kombinátora vľavo. Ak medzi dva selektory
vložíme jednu alebo viac medzier `selektor selektor`,
tak tým hovoríme, že označ všetkých potomkov (priamych aj nepriamych) ľavého
selektora, ktorí spĺňajú podmienky pravého selektora.

```css
/* Selektuj všetky spany, ktoré sú potomkovia elementu article */
article span {
  color: red;
}
```

```html
<!-- Všetky spany budú mať červený text lebo sú potomkovia article -->
<article>
  <span>ja som priamy potomok artiklu</span>
  <p>
    Bla bla
    <span>ja nie som priamy potomok artiklu</span>
    bla bla
  </p>
  <span>ja som tiež priamy potomok artiklu</span>
</article>
```

## Selektovanie súrodencov

### Všeobecní súrodenci (general sibling combinator)

General sibling combinator `selektor ~ selektor` selektuje všetkých súrodencov
elementov označených ľavým selektorom a ktoré spĺňajú podmienky pravého
selektora ale iba ak sa nachádzajú v poradí za elementom označeným ľavím selektorom.

```css
hr ~ p {
  color: red;
}
```

```html
<body>
  <h1>Nadpis</h1>
  <p>ja nie som červený, lebo nie som za čiarou</p>
  <p>ja nie som červený, lebo nie som za čiarou</p>
  <hr/>
  <p>
    ja som červený, lebo som za čiarou.
  </p>
  <div>
    <p>
      ja som síce za čiarou, ale nie som súrodenec čiary,
      lebo som v dive a tak nebudem červený
    </p>
  </div>
  <p>ja som červený, lebo som za čiarou</p>
  <h1>ja nie som červený, lebo nie som odstavec</h1>
  <p>ja som červený, lebo som za čiarou</p>
</body>
```

### Priľahlí súrodenci (adjacent sibling combinator)

Adjacent sibling combinator `selektor + selektor` funguje podobne ako general
sibling combinator `~`, ale selektuje takého súrodenca, ktorý sa nachádza
bezprostredne za elementom označeným ľavím selektorom.

```css
hr + p {
  color: red;
}
```

```html
<body>
  <h1>Nadpis</h1>
  <p>ja nemám žlté pozadie</p>
  <p>ja nemám žlté pozadie</p>
  <hr/>
  <!--
  <div>
    ak by mňa odkomentovali, tak tento tu by už nemal žlté pozadie
  </div>
  -->
  <p>
    Iba ja mám žlté pozadie, lebo iba ja som bezprostredne za čiarou.
    Ak by medzi mnou a čiarou bol nejaký iný element,
    tak už by som nemal žlté pozadie.
  </p>
  <p>ja nemám žlté pozadie</p>
  <p>ja nemám žlté pozadie</p>
</body>
```

## Užitočné odkazy

* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
* https://www.w3schools.com/cssref/css_selectors.php
* https://www.w3schools.com/cssref/trysel.php?selector=%5Btitle~=beautiful%5D

## Nabudúce

Pseudo triedy (pseudo-classes) 😱

