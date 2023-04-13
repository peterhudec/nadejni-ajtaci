# Cascading Style Sheets — CSS

Je to štýlovací jazyk, pomocou ktorého môžme naformulovať ako bude prezentovaný
HTML dokument, teda ako bude vyzerať.

CSS bolo navrhnuté tak, aby umožnilo oddelenie obsahu od jeho prezentácie.

Umožňuje prezentovať ten istý dokument rôzne pre rôzne metódy zobrazenia
(rôzne veľkosti obrazovky, rôzne zariadenia, tlačenie).

CSS nie je iba o vizuále, ale môžme ním určovať rýchlosť a dôraz pre čítače
obrazovky pre zrakovo znevýhodnených.

# Základné stavebné kamene

Syntax CSS je veľmi jednoduchý. To čo pomocou CSS vytvárame sa nazýva
_stylesheet_ a ten sa skladá z viacerých _rules_. Každý _rule_ sa skladá zo
_selektora_ (_selector_) a _deklaračného bloku_ (_declaration block_),
ktorý sa zase skladá z jednotlivých _deklarácií_:

* Stylesheet
  * Rule
    * Selector
    * Declaration block
      * Declaration
      * Declaration
      * Declaration
  * Rule
    * Selector
    * Declaration block
      * Declaration
      * Declaration

Selektor slúži na označenie všetkých elementov (tagov) v HTML dokumente, na
ktoré chceme uplatniť štýl, ktorý je špecifikovaný v deklaračnom bloku k
danému selektoru.

Tak ako vo všetkých iných jazykoch, tak aj v CSS môžme používať komentáre.
Komentár sa začína lomítkom a hviezdičkou `/*` a končí sa hviezdičkou a
lomítkom `*/`, napr `/* ja som komentár */`.
Všetko medzi nimi prehliadač ignoruje.

## Príklad

Tento _rule_ zmení výzor (prezentáciu) všetkých odstavcov (elementov `<p>`)
v HTML dokumente tak, že farba písma bude zelená, veľkosť písma bude 18 pixelov
a font bude Comic-Sans.

```css
p /* selector */
{ /* tu začína declaration block */
  color: green; /* declaration */
  font-family: "Comic-Sans"; /* declaration */
  font-size: 18px; /* declaration */
} /* tu končí declaration block */
```

V tomto _rule_ je selektor `p` a všetko v zložených zátvorkách je
_declaration block_.

V zložených zátvorkách sú jednotlivé deklarácie,
ktoré sú oddelené bodkočiarkou `;`. Každá deklarácia sa skladá z názvu vlastnosti,
dvojbodky `:` a z hodnoty vlastnosti: `nazov-vlastnosti: hodnota`.
Názvy vlastností sa píšu malými písmenami a ak sa skladajú z viacerých slov, tak
tie sú oddelené pomlčkou `-`. Hodnoty môžu obsahovať veľké písmená aj medzery.

Všetko to môže byť v jednom riadku:

```css
p {color: green; font-family: "Comic-Sans"; font-size: 18px;}
```

Ale kvôli čitateľnosti sa to vždy formátuje takto:

```css
p {
  color: green;
  font-family: "Comic-Sans";
  font-size: 18px;
}
```

# Ako sa CSS pridá do HTML dokumentu?

* Pomocou atribútu `style` ktoréhokoľvek elementu
* Pomocou tagu `<style>`
* Pomocou tagu `<link rel="stylesheet" type="text/css" href="moj-styl.css"/>`

Obidva musia byť v hlavičke (`<head>`) dokumentu.

## Atribút `style`

Každému html elementu (tagu) môžme dať atribút `style`, ktorý ako hodnotu
akceptuje zoznam CSS deklaráci oddelených bodkočiarkami.

```html
<h1 style="color: yellow; font-size: 34px; line-height: 50px">
  Nadpis
</h1>

<p style="background: black; color: white">
  Odstavec
</p>
```

Štýl deklarovaný atribútom `style` má najvyššiu prioritu a _prebije_ všetky
štýly deklarované pre daný element pomocou selektorov. To je jeden z dôvodov
pre čo je lepšie vôbec nepoužívať atribút `style`.

## `<style>` element

CSS môžme deklarovať priamo v HTML dokumente pomocou elementu `<style>`,
ktorý sa musí nachádzať v hlavičke dokumentu.

```html
<html>
  <head>
    <style>

      h1, h2, h3, h4, h5, h6 {
        color: orange;
      }

      p {
        color: green;
      }

    </style>
  </head>
  <body>
    <h1>Nadpis</h1> <!-- oranžová -->
    <p>Odstavec</p> <!-- zelená -->
    <p>Odstavec</p> <!-- zelená -->
    <h2>Nadpis</h2> <!-- oranžová -->
    <p style="color: red">Odstavec</p> <!-- červená -->
    <p>Odstavec</p> <!-- zelená -->
  </body>
</html>
```

Hlavička môže obsahovať aj viacero elementov `<style>`.

## Samostatné `.css` súbory

Najlepší (najpraktickejší) spôsob je písať CSS v samostatných súboroch s
príponou `.css` a potom ich načítať do HTML dokumentu pomocou elementu
`<link>`, ktorých môže byť viacero a ktoré musia byť v hlavičke dokumentu.

```css
/* moj-styl.css */
h1, h2, h3, h4, h5, h6 {
  color: orange;
}

p {
  color: green;
}
```

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="moj-styl.css"/>
  </head>
  <body>
    <h1>Nadpis</h1>
    <p>Odstavec</p>
    <p>Odstavec</p>
    <h2>Nadpis</h2>
    <p style="color: red">Odstavec</p>
    <p>Odstavec</p>
  </body>
</html>
```

## Užitočné odkazy

* https://en.wikipedia.org/wiki/CSS
* https://www.w3schools.com/css/
* https://developer.mozilla.org/en-US/docs/Learn/CSS

### Po slovensky

* https://www.codecademy.com/learn/learn-css
* https://wpgeek.sk/css-pre-zaciatocnikov/
* https://blog.sme.sk/sutiak/veda-a-technika/tvorba-web-stranok-pre-zaciatocnikov-css
* https://www.kvizy.eu/tutorial/html/css-uvod

## Nabudúce

Nabudúce sa pozrieme bližšie na rôzne typy selektorov