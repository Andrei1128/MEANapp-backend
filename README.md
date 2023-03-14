# MyTrips-backend
## Aditional fata de proiectul anterior:
Aplicatia acum este un API(returneaza raspunsuri, nu mai randeaza)

Aplicatia dispune de un sistem de login/register in care parola conturilor este criptata utilizand `bcrypt` iar accesul catre aplicatia in sine este dat de catre un token generat utilizand `jsonwebtoken` ce codeaza userul impreuna cu o data de expirare a tokenului

Tokenul generat este salvat in baza de date, la logout sau la expirare acesta este sters deoarece devine inutil

Pentru a ne asigura ca aplicatia primeste requesturi autorizate am creat un middleware ce primeste tokenul prin header verifica daca se afla in baza de date si daca nu este expirat, mai departe tokenul va fi decodat si utilizat in controller daca este necesar 
## Proiect anterior: 
https://github.com/Andrei1128/express-MVC-LinkedCRUD
