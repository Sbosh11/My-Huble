/*const Images = {
  AccordOne: require("./Lender-Accordion-eVault.webp"),
  AccordTwo: require("./Title-Escrow.webp"),
  AccordThree: require("./Notary-signing-Agents.webp"),
  AccordFour: require("./Scheduling.webp"),
};

export default Images;*/

const Images = {
  AccordOne: {
    src: require("./Lender-Accordion-eVault.webp"),
    alt: "holding phone on eClose platform eVault",
    /* description: "Lender Accordion eVault",*/
    width: "547px", // Set the width
    height: "525px", // Set the height
  },
  AccordTwo: {
    src: require("./Title-Escrow.webp"),
    alt: "Man looking at the laptop",
    /*description: "Description for AccordTwo Image",*/
    width: "539px", // Set the width
    height: "514px", // Set the height
  },
  AccordThree: {
    src: require("./Scheduling.webp"),
    alt: "Woman looking at laptop notary agents",
    /*description: "Description for AccordFour Image",*/
    width: "574px", // Set the width
    height: "545px", // Set the height
  },
  AccordFour: {
    src: require("./Notary-signing-Agents.webp"),
    alt: "Two ladies looking at the laptop Notary",
    /*description: "Description for AccordThree Image",*/
    width: "553px", // Set the width
    height: "529px", // Set the height
  },
};

export default Images;
