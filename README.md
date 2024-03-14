Uppgiften
I denna kurs ska ni bygga ett spel inspirerat av det populära spelet “Wordle”. Det första steget är att skriva den algoritm som utgör de centrala spelreglerna i spelet. Reglerna kan sammanfattas såhär:

Spelet väljer ut ett ord med (vanligtvis) fem bokstäver. Spelaren ska gissa vilket ord det är genom att mata in något ord. Om ordet är korrekt har spelaren vunnit. Om det är fel ord ger spelet feedback som indikerar huruvida några bokstäver i det gissade ordet finns med i det hemliga ordet, och huruvida spelaren placerat dem på rätt plats. Spelaren gissar sedan på nytt.

Den här uppgiften handlar inte om att bygga hela spelet, utan den centrala algoritm som kontrollerar om användaren placerat rätt bokstäver på rätt plats.

Moment
Utforma en lösning på algoritm A nedan
Tänk igenom och utforma en teststrategi för algoritmen
Implementera algoritmen i form av en funktion
Skriv minst två tester, troligtvis fler, som verifierar att funktionen fungerar som den ska
Dokumentera er teststrategi med kommentarer i testkoden
Om du vill, upprepa allt för algoritm B (valfritt, men fungerar som underlag för bedömning av kursens helhet)

Algoritm A – feedback
Denna funktion definierar reglerna för den feedback spelet ger när spelaren gissar ett ord. Den ska uppfylla följande kriterier:

Inputs: Två ord (två textsträngar)
Ett ord som är gissningen
Ett ord som är det korrekta ordet
Funktionalitet: Kontrollera vilka bokstäver från det ena ordet som förekommer i det andra och i så fall var
Output: En array med objekt, ett för varje bokstav i samma ordning som de förekommer i det gissade ordet, med följande attribut:
letter (bokstaven)
result (ett av följande värden)
‘incorrect’: Finns inte med i det andra ordet
‘misplaced’: Finns med i det andra ordet, men på annan plats
‘correct’: Korrekt plats i det andra ordet 
Exempel:

Orden “CYKLA” (utvalt) och “HALLÅ” (gissning) skulle ge följande tillbaka:

H / incorrect
A / misplaced
L / incorrect (eftersom det redan finns ett korrekt L)
L / correct
Å / incorrect
Algoritm B – val av ord (frivillig, krävs ej för godkänt)
Denna funktion är spelets sätt att välja ut ett ord att spela med. Den ska uppfylla följande kriterier:

Inputs:
En lista med ord
En siffra som anger önskad längd
En indikation på huruvida samma bokstav får förekomma mer än en gång i ordet, eller om alla bokstäver måste vara unika
Funktionalitet:
Välj slumpmässigt ut ett ord ur listan som uppfyller kriterierna i de övriga parametrarna
Hantera på något väldefinierat sätt situationen som uppstår när inget passande ord finns
Output: Det slumpmässigt utvalda ordet
