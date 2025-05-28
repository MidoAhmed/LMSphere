# LMSphere

Le LMS est l’outil sur lequel l’entreprise ou l’organisme de formation va mettre l’ensemble de son contenu digital pour la formation en ligne.
Tous les contenus hébergés vont permettre aux collaborateurs ou à l’apprenant d’un organisme de formation, d’aller suivre sa formation où et quand il le souhaite, sur son téléphone, sa tablette ou son ordinateur.
Le salarié ou le stagiaire va également pouvoir retrouver son historique de formation ainsi que les formations qui lui ont été assignées et qu’il va devoir suivre dans les prochaines semaines ou prochains mois.

Table des matières :

- [LMSphere](#lmsphere)
  - [Roadmap de développement LMS](#roadmap-de-développement-lms)
    - [Phase 1 – Cadrage fonctionnel](#phase-1--cadrage-fonctionnel)
    - [Phase 2 – Conception technique](#phase-2--conception-technique)
    - [Phase 3 – Développement & itérations](#phase-3--développement--itérations)
  - [MVP](#mvp)
    - [Diagramme de flux utilisateur](#diagramme-de-flux-utilisateur)

## Roadmap de développement LMS

### Phase 1 – Cadrage fonctionnel

📋 Fonctionnalités minimales "enterprise-ready" (MVP)

- Authentification: Authentification sécurisée, mot de passe oublié, SSO (option)
- Gestion des utilisateurs : Création de comptes, rôles (admin, formateur, apprenant)
- Catalogue de formations: Lister, filtrer, rechercher des formations
- Contenus compatibles: Support des formats : PDF, vidéo, SCORM/xAPI, quiz simples
- Affectation des cours: Assigner des modules à un ou plusieurs utilisateurs
- Suivi des progrès: Historique des formations, suivi de complétion, reporting

### Phase 2 – Conception technique

Objectifs: Architecture modulaire, Séparation du frontend et backend

- Frontend React (ou Next.js)
- Supabase: backend as a services

### Phase 3 – Développement & itérations

- I1 : Authentification + gestion des rôles utilisateurs
- I2 : Création de catalogue + upload de contenu (PDF, vidéo)
- I3 : Module d’affectation + suivi des cours
- I4 : Dashboard utilisateur (historique, cours à venir)
- I5 : Reporting admin (cours complétés, stats utilisateurs)
- I6 : Tests QA, correction des bugs, déploiement initial

## MVP

- Diagramme de flux utilisateur

```mermaid
    A[Connexion] --> B[Tableau de bord]
    B --> C[Catalogue de cours]
    B --> D[Mes formations assignées]
    D --> E[Suivre une formation]
    E --> F[Progression enregistrée]
    F --> G[Quiz final]
    G --> H[Calcul de note]
    H --> I[Certification]
```
