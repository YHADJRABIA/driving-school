import React, { createContext } from "react";

/*To be imported by components that want to access the data.
The components need to also import { useContext} from react to consume the data.*/
export const DataContext = createContext();

// Contient les données. Doit être importé par App.js.
export const DataProvider = ({ children }) => {
  const content = {
    company: {
      name: "Europ' auto-école",
    },

    contact: [
      {
        name: "4 Rue de la Gare — 42490 Fraisses",
        cName: "fas fa-map-marker-alt",
        href: "https://www.google.com/search?q=4+Rue+de+la+Gare+%E2%80%94+42490+Fraisses&oq=4+Rue+de+la+Gare+%E2%80%94+42490+Fraisses&aqs=chrome..69i57.417j0j7&sourceid=chrome&ie=UTF-8#",
      },
      {
        name: "06 74 44 74 87",
        cName: "fas fa-phone",
        href: "tel:0674447487",
      },
      {
        name: "europautoecole@bbox.fr",
        cName: "fas fa-at",
        href: "mailto:europautoecole@bbox.fr",
      },
    ],

    /* Nav */
    navItems: [
      {
        title: "Code de la route",
        url: "#code-section",
        cName: "nav-links",
      },
      {
        title: "Permis de conduire",
        url: "#driving-section",
        cName: "nav-links",
      },
      {
        title: "Nos offres",
        url: "#our-services",
        cName: "nav-links",
      },
      {
        title: "À propos",
        url: "#about-section",
        cName: "nav-links",
      },
    ],

    /* Cards */

    cards: [
      {
        title: "Code de la route",
        price: "100",
        cName: "fas fa-traffic-light",
        content: "Lorem ipsum dolor sit amet",
        arg1: "argument 1",
        arg2: "argument 2",
        arg3: "argument 3",
      },
      {
        title: "Pack complet",
        price: "####",
        cName: "fas fa-car",
        content: "Lorem ipsum dolor sit amet",
        arg1: "argument 1",
        arg2: "argument 2",
        arg3: "argument 3",
      },
      {
        title: "Permis de conduire",
        price: "####",
        cName: "fas fa-id-card",
        content: "Lorem ipsum dolor sit amet",
        arg1: "argument 1",
        arg2: "argument 2",
        arg3: "argument 3",
      },
    ],
    services: [
      {
        title: "Auto-école agréée.",
      },
      {
        title: "Faites des économies.",
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
    ],
    socialMedia: [
      {
        title: "Facebook",
        path: "https://www.facebook.com/europautoecole/?referrer=services_landing_page",
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
