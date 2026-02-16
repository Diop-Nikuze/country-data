# 🌍 Rest Countries API – Angular Challenge

Solution du challenge Frontend Mentor pour explorer les pays du monde avec recherche et filtrage dynamique.

---

## Fonctionnalités

- Liste des pays depuis une API externe
- Recherche en temps réel
- Filtrage par région
- Navigation vers une page détail (routing dynamique)

---

## Ce que j’ai appris (Débutant Angular)

### 🔹 Services & HttpClient

- Centraliser les appels API dans un **service**
- Utiliser **HttpClient**
- Retourner des **Observable**
- Séparer la logique métier du composant (**bonne pratique Angular**)

---

### 🔹 Observable & pipe

- Transformer les données avec `pipe()`
- Utiliser `| async` dans le template
- Éviter `subscribe()` manuel (prévention des memory leaks)

---

### 🔹 Signals & combineLatest

- Gérer l’état local avec `signal()`
- Réagir automatiquement aux changements
- Combiner plusieurs sources de données avec `combineLatest`

---

### 🔹 Routing

- Créer des routes dynamiques : `country/:name`
- Utiliser `RouterLink`
- Récupérer les paramètres avec `input.required()`

---

### 🔹 Template moderne

- Utiliser `@if` et `@for`
- Optimiser le rendu avec `track`

---

## ⚠️ Difficultés rencontrées

- Récupérer des valeurs lorsque je ne connaissais pas les noms des propriétés à l’avance
- ✅ Problème résolu grâce à la méthode `Object.values()`

---

## Conclusion

Ce projet m’a permis de comprendre :

- La structure d’une application Angular
- La programmation réactive avec Observable
- La gestion d’état moderne avec Signal
- Les bonnes pratiques Angular
