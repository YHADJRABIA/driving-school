import React, { createContext } from "react";

/*To be imported by components that want to access the data.
The components need to also import { useContext} from react to consume the data.*/
export const DataContext = createContext();

// Contient les données. Doit être importé par App.js.
export const DataProvider = ({ children }) => {
  const content = {
    company: {
      name: "Europ' auto-école",
      logo: "fab fa-react",
    },

    contact: [
      {
        name: "4 Rue de la Gare — 42490 Fraisses",
        cName: "fas fa-map-marker-alt",
        href: "https://www.google.com/search?q=4+Rue+de+la+Gare+%E2%80%94+42490+Fraisses&oq=4+Rue+de+la+Gare+%E2%80%94+42490+Fraisses&aqs=chrome..69i57.417j0j7&sourceid=chrome&ie=UTF-8#",
      },
      {
        name: "0123456789",
        cName: "fas fa-phone",
        href: "tel:0123456789",
      },
      {
        name: "E-mail@mail.fr",
        cName: "fas fa-at",
        href: "mailto:someone@example.com",
      },
    ],

    /* Nav */
    navItems: [
      {
        title: "Code de la route",
        url: "/",
        cName: "nav-links",
      },
      {
        title: "Permis de conduire",
        url: "#",
        cName: "nav-links",
      },
      {
        title: "Nos offres",
        url: "#",
        cName: "nav-links",
      },
      {
        title: "À propos",
        url: "#",
        cName: "nav-links",
      },
    ],

    /* Cards */

    cards: [],
    services: [
      {
        title: "Auto-école agréée",
      },
      {
        title: "Faîtes des économies.",
      },
      {
        title: "S'adapte à votre rythme.",
      },
    ],

    /* Footer */
    footerItems: [
      {
        title: "À propos",
        content: [
          {
            subtitle: "Sous-titre 1",
            url: "#",
          },
          {
            subtitle: "Sous-titre 2",
            url: "#",
          },
          {
            subtitle: "Sous-titre 3",
            url: "#",
          },
        ],
      },
      {
        title: "Nos services",
        content: [
          {
            subtitle: "Sous-titre 1",
            url: "#",
          },
          {
            subtitle: "Sous-titre 2",
            url: "#",
          },
          {
            subtitle: "Sous-titre 3",
            url: "#",
          },
        ],
      },
      {
        title: "Partenariats",
        content: [
          {
            subtitle: "Sous-titre 1",
            url: "#",
          },
          {
            subtitle: "Sous-titre 2",
            url: "#",
          },
          {
            subtitle: "Sous-titre 3",
            url: "#",
          },
        ],
      },
      {
        title: "Section 4",
        content: [
          {
            subtitle: "Sous-titre 1",
            url: "#",
          },
          {
            subtitle: "Sous-titre 2",
            url: "#",
          },
          {
            subtitle: "Sous-titre 3",
            url: "#",
          },
        ],
      },
    ],
    socialMedia: [
      {
        title: "Facebook",
        path: "",
        cName: "fab fa-facebook",
      },
      {
        title: "Twitter",
        path: "",
        cName: "fab fa-twitter",
      },
      {
        title: "Youtube",
        path: "",
        cName: "fab fa-youtube",
      },
    ],
  };
  return (
    <DataContext.Provider value={content}>{children}</DataContext.Provider>
  );
};
