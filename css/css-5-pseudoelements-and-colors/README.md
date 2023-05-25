# CSS 5 — Pseudo elements, colors and units

## Pseudo elements

Okrem pseudo tried existujú v CSS aj pseudo elementy.

Pomocou pseudo tried nám dáva CSS možnosť selektovať elementy podľa stavu v
ktorom sa nachádzajú tým, že danému elementu prehliadač pridá nejakú pseudo
triedu ak je v nejakom stave. Napríklad ak sa kurzor myši akurát nachádza nad
nejakým elementom, tak mu prehliadač pridá pseudo triedu `:hover` pomocou ktorej
môžme potom v CSS selektovať elementy nad ktorými sa akurát vznáša myš.
Ináč by sme nemali možnosť zachytiť tieto stavy iba
pomocou CSS.

Podobne nám pomocou pseudo elementov dáva prehliadač možnosť selektovať elementy
ktoré sa nenachádzajú v HTML dokumente, ale sú