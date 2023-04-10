# HTML 2 - odkazy

> **Note**
> Všetky príklady k tejto lekcii sú v zložke [../priklady](`html/html-2-odkazy/priklady`).

HTML je HyperText Markup Language, a HyperText znamená, že HTML dokumenty
môžue odkazovať na iné (nielen) HTML dokumenty. Hlavný mechanizmus odkazovania
na iné dokumenty je tag `<a>` -- [A]nchor, s ktorým sa vytvárajú odkazy tiež
nazývané linky.

## URL adresy

Na to aby sme vedeli robiť linky, je dobré vedieť z čoho sa skladá URL adresa.

### Čo je to URL?

URL je skratka pre Unified Resource Locator. URL je jedinečná adresa zdroja
(informácií) na internete. Napríklad:

* Iný HTML dokument
* CSS súbor
* JavaScript súbor
* Obrázok
* Video, audio alebo hocijaký iný súbor (informácií)

### Z čoho sa skladá URL

URL vyzerá asi takto:

```
schéma://hostiteľ:port/cesta?parametre#fragment

Napríklad:
http://www.daka-domena.sk:80/cesta/k/suboru.html?hladaj=kozky+perie&zoradit-podla=najnovsieho#nadpis
https//daka-domena.sk:443/cesta/k/suboru.html?hladaj=kozky+perie&zoradit-podla=najnovsieho#nadpis
```

URL sa skladá z týchto častí v poradí z ľava do prava:

1. Schéma (scheme) - Protokol, ktorým chceme komunikovať na internete
  * `http`
  * `https`
  * `ssh`
  * `ftp`
  * `file`
2. Hostiteľ (host) - IP adresa, alebo doména servera
  * `92.40.170.45`
  * `google.com`
  * `www.bazos.sk`
3. Port - Nepovinný a pre nás zatiaľ neni dôležitý
  * `80` - HTTP
  * `443` - HTTPS
  * `21` - FTP
4. Cesta (path) - Cesta k súboru na serveri
  * `/cesta/k/suboru.html`
  * `/marketplace/item/133359959686645/`
  * `/html/html_urlencode.asp`
5. Parametre (querystring parameters) -
  * `?nazov=hodnota&iny-nazov=hodnota`
  * `?search=cute+animal+videos&sort=most-liked`
6. Fragment - (fragment, hash)
  * `#id-html-elementu`

Tu je zopár konkrétnych príkladov zo života:
```
https://www.youtube.com/results?search_query=dennik+n
https://www.facebook.com/hudecpeter/friends
https://deti.bazos.sk/inzerat/149382487/kocik-junama-diamon-s-line-3-kombinacia-50-zlava.php
https://www.bazos.sk/search.php?hledat=ko%C5%BEky+perie&rubriky=www&hlokalita=&humkreis=25&cenaod=&cenado=&Submit=H%C4%BEada%C5%A5&kitx=ano
```

Nás zatiaľ bude zaujímať iba _schéma_, _cesta_ a _fragment_.

## HTML odkazy

Na odkazovanie na iné dokumenty v HTML slúži tag `<a>` -- Anchor. Funguje takto:

```html
<p>
  Klikni
  <a href="prekvapenie.html">sem</a>
  a uvidíš prekvapenie
</p>
```

Všetko čo je vnútri tagu `a` bude fungovať ako odkaz, teda keď na to klikneme,
tak nás prehliadač presmeruje na adresu v atribúte `href`.

```html
<a href="prekvapenie.html">
  <h1>Celý tento nadpis je odkaz</h1>
</a>

<a href="prekvapenie.html">
  <div style="width: 300px; height: 300px; background: lightgreen">
    Toto je kockatý odkaz
  </div>
</a>
```

### Atribút href

Atribútom `href` -- [h]yperlink [ref]erence povieme prehliadaču kam má presmerovať
uživateľa keď klikne na daný link (`<a>` tag).

Ak ho úplne vynecháme tak tag `<a>` nebude fungovať, a ani vyzerať ako link.

```html
<a>
  Ja nie som link, lebo nemám href
</a>
```

Ak je `href` prázdny, tak odkaz bude smerovať na ten istý dokument, v ktorom sa
odkaz nachádza.

```html
<a href="">
  Keď na mňa klikneš, táto stránka sa znova načíta
</a>
```

#### URL adresa ako hodnota atribútu `href`

Hodnota `href` môže byť hocijaká URL adresa. Musí sa však začínať schémou.

```html
<a href="https://www.facebook.com/me">
  Choď na môj Facebookový profil
</a>

<a href="facebook.com">
  Toto ťa na Facebook nedostane, pretože adresa nemá schému
</a>
```

#### Relatívna cesta ako hodnota atribútu `href`

Hodnota `href` môže byť _relatívna_ cesta k inému dokumentu. _Relatívna_
vzhľadom na cestu k dokumentu v ktorom sa odkaz nachádza.

Pod pojmom _cesta_ myslíme cestu k súboru alebo priečinku v nejakom systéme
súborov, napríklad na vašom počítači. Každý operačný systém (Windows, Linux,
MacOS) obsahuje hierarchický systém súborov a priečinkov (File System), v ktorom sa každý súbor
alebo priečinok dá identifikovať pomocou _cesty_ k nemu. Keď vymysleli HyperText
tak bolo logické, že tento koncept by mal byť jeho základnou súčasťou.

Predstavte si, že máme na počítači priečinok s názvom `x` ktorý obsahuje dva súbory
`a.html` a `b.html`:

```
📁 x
├─ a.htm
└─ b.html
```

Keďže sa dokumenty `a.html` a `b.html` nachádzajú v tom istom priečinku a dalo
by sa povedať, že sú vedľa seba, tak na seba môžu odkazovať iba názvami súborov:

```html
<!-- x/a.html -->
<h1>Ja som A</h1>
<a href="b.html">choď na B<a>
```

```html
<!-- x/b.html -->
<h1>Ja som B</h1>
<a href="a.html">choď na A<a>
```

#### Priečinky v priečinkoch

Dokumenty sa môžu nachádzať aj v hlbšej hierarchii priečinkov a aj vtedy na
seba môžu navzájom odkazovať relatívnimy cestami.

Predstavme si, že máme priečinok `x` ktorý obsahuje súbor `a.html` a priečinok
`y` v ktorom sa nachádza súbor `b.html`.

```
📁 x
├─ a.html
└─ 📁 y
   └─ b.html
```

Súbor `a.html` môže odkazovať na súbor `b.html` relatívnou cestou `y/b.html`.
Súbor `b.html` zasa môže odkazovať na súbor `a.html` relatívnou cestou `../a.html`.
Tie dve bodky `..` znamenajú "choď o priečinok vyššie".

```html
<!-- obsah súboru x/a.html -->
<h1>Ja som A v priečinku X</h1>
<a href="x/b.html">choď na B v priečinku Y</a>
```

```html
<!-- obsah súboru x/y/b.html -->
<h1>Ja som B v priečinku Y</h1>
<a href="../a.html">choď na A o úroveň vyššie (teda do priečinku X)</a>
```

Toto funguje do akejkoľvek hĺbky hierarchie priečinkov. Predstavme si, že máme
takúto štruktúru priečinkov:

```
📁 x
├─ a.html
└─ 📁 y
   ├─ b.html
   └─ 📁 z
      ├─ c.html
      └─ 📁 u
         └─ d.html
```

Súbor `a.html` môže odkazovať na súbor `d.html` relatívnou cestou `x/y/z/u/d.html`.
Súbor `d.html` zasa môže odkazovať na súbor `a.html` relatívnou cestou `../../../a.html`.

```html
<!-- obsah súboru x/a.html -->
<h1>Ja som A v priečinku X</h1>
<a href="x/y/z/u/d.html">choď na D v priečinku U</a>
```

```html
<!-- obsah súboru x/y/z/u/d.html -->
<h1>Ja som D v priečinku U</h1>
<a href="../../../a.html">choď na A o 3 úrovne vyššie (teda do priečinku X)</a>
```

#### Fragment a atribút `id`

Každý HTML tag môže mať atribút `id`. Jedno z využití atribútu `id` je
odkazovanie na konkrétne miesta v HTML dokumentoch.

Ak máme napríklad HTML dokument, ktorý predstavuje nejaký dlhý článok, tak môžme
dať podnadpisu prideliť `id` (ktoré musí byť jedinečné pre celý HTML dokument)
a potom môžte vytvoriť obsah (table of contents) na začiatku článku s odkazmi
na jednotlivé sekcie, aby čitaťeľ mohol preskočiť priamo na sekciu, ktorá ho
zaujíma, kliknutím na odkaz v obsahu:

```html
<h1 id="nadpis">Toto je veľmi dlhý článok</h1>

<h2>Obsah</h2>
<ol>
  <li><a href="#podnadpis-1">Prvá časť</a></li>
  <li><a href="#podnadpis-2">Druhá časť</a></li>
  <li><a href="#podnadpis-3">Tretia časť</a></li>
</ol>

<h2 id="podnadpis-1">Prvá časť</h2>
<p>Strašne dlhý text</p>

<h2 id="podnadpis-2">Druhá časť</h2>
<p>Strašne dlhý text</p>

<h2 id="podnadpis-3">Tretia časť</h2>
<p>Strašne dlhý text</p>

<a href="#nadpis">Na začiatok</a>
```

Anchor môžme použiť aj keď odkazujeme na iné HTML dokumenty:

```html
<a href="https://en.wikipedia.org/wiki/HTML#History">
  Prečítaj si dačo o HTML a začni rovno históriou
</a>
```

### Atribút `target`

Ak chceme aby sa dokument na ktorý odkazujeme otvoril v novej záložke prehliadača,
tak na to slúži atribút `target`, konkrétne `target="_blank"`.

```html
<a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
  Prečítaj si dačo o HTML, ale nechaj mi toto otvorené
</a>
```

## Užitočné odkazy

* https://www.w3schools.com/tags/att_a_href.asp
* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href
* https://en.wikipedia.org/wiki/URI_fragment


