# Rest Countries API - Challenge

Solution du challenge Frontend Mentor pour explorer les pays du monde avec recherche et filtrage dynamique.

## Fonctionnalités

- Liste complète des pays triée par ordre alphabétique.
- Recherche textuelle instantanée.
- Filtrage par région.
- Navigation détaillée via le routage Angular.

## Acquis techniques du challenge

### Angular Signals

- **Gestion d'état** : Utilisation de `signal()` pour piloter la recherche et les filtres.
- **Inputs** : Utilisation de `input.required()` pour récupérer dynamiquement les paramètres d'URL.

### RxJS et Programmation Réactive

- **toObservable** : Transformation des Signals en flux pour les coupler aux données API.
- **combineLatest** : Synchronisation de plusieurs sources (API + Recherche + Filtre région) pour un affichage cohérent.
- **pipe et map** : Transformation des données (filtrage et tri immuable avec `[...countries]`).
- **localeCompare** : Tri alphabétique précis gérant les caractères spéciaux.

### HttpClient et Services

- **Centralisation** : Gestion des appels API dans un `CountryService`.
- **Consommation** : Utilisation du pipe `| async` pour une gestion propre des souscriptions et éviter les fuites de mémoire.

### Routing

- **Routes dynamiques** : Mise en place de routes paramétrées (`country/:name`).
- **Navigation** : Utilisation de `RouterLink` pour une expérience fluide sans rechargement de page.
