import { useParams } from "@tanstack/react-router";
import { createContext, useContext, useMemo, type ReactNode } from "react";

export type Lang = "en" | "el" | "ru";

export const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "el", label: "ΕΛ" },
  { code: "ru", label: "РУ" },
];

type Testimonial = { quote: string; name: string; role: string };

export type Dict = {
  nav: { home: string; services: string; payment: string; contact: string; enquire: string };
  hero: { eyebrow: string; title: string; subtitle: string; cta: string };
  home: {
    servicesEyebrow: string;
    servicesTitle: string;
    servicesIntro: string;
    allServices: string;
    testimonialsEyebrow: string;
    contactEyebrow: string;
    contactTitle: string;
    contactText: string;
    enquiriesLabel: string;
    mobileLabel: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    intro: string;
    closingText: string;
  };
  paymentsPage: {
    eyebrow: string;
    title: string;
    intro: string;
    payTitle: string;
    payText: string;
    payButton: string;
    payNote: string;
  };
  projectsSection: { eyebrow: string; title: string; intro: string; viewAll: string; before: string; after: string };
  projectsPage: { eyebrow: string; title: string; intro: string };
  projects: { title: string; description: string }[];
  contactPage: {
    eyebrow: string;
    title: string;
    intro: string;
    inquiriesTitle: string;
    inquiriesText: string;
    getInTouch: string;
    telephone: string;
    emergency: string;
    emailLabel: string;
    detailsTitle: string;
    headOffice: string;
    officeHours: string;
    hours: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    formSend: string;
    formNote: string;
  };
  common: {
    enquiriesLabel: string;
    startConversation: string;
  };
  services: { title: string; description: string }[];
  serviceDetails: Record<string, { title: string; intro: string; items: string[]; closing: string }>;
  serviceDetailPage: { includesLabel: string; backToServices: string; ctaTitle: string };
  testimonials: Testimonial[];
  footer: { tagline: string; logoAlt: string; contactTitle: string; address: string; hours: string };
};

const en: Dict = {
  nav: { home: "Home", services: "Services", payment: "Payment", contact: "Contact", enquire: "Enquire" },
  hero: {
    eyebrow: "Property management in Cyprus",
    title: "Your property, managed quietly and well.",
    subtitle: "From key holding and inspections to pool care, cleaning, gardening and repairs. Personal care for your Cyprus property, all year round.",
    cta: "See what we handle",
  },
  home: {
    servicesEyebrow: "What we do",
    servicesTitle: "Every detail, taken care of.",
    servicesIntro: "Considered property care for villas, apartments, holiday homes and residential complexes across Cyprus.",
    allServices: "All services",
    testimonialsEyebrow: "Words from our owners",
    contactEyebrow: "Get in touch",
    contactTitle: "Tell us about your property.",
    contactText: "Whether you live here or abroad, we can help keep your Cyprus property secure, maintained and ready to use.",
    enquiriesLabel: "Enquiries & instant quotes",
    mobileLabel: "Mobile:",
  },
  servicesPage: {
    eyebrow: "What we do",
    title: "Every detail, taken care of.",
    intro: "Considered property care for villas, apartments, holiday homes and residential complexes across Cyprus — from the everyday to the exceptional.",
    closingText: "Not sure which service fits your property? Get in touch and we will put together the right arrangement for you.",
  },
  paymentsPage: {
    eyebrow: "Payments",
    title: "Pay your account securely online.",
    intro: "Make a secure payment via PayPal. If you have any questions about your account or payment, please contact us during office hours, Monday–Friday, 8am–6pm.",
    payTitle: "Pay your account securely online",
    payText: "Pay your account quickly and securely online using PayPal.",
    payButton: "Pay with PayPal",
    payNote: "Pay securely using your PayPal account or available debit and credit card options.",
  },
  projectsSection: {
    eyebrow: "Our projects",
    title: "Real results, real properties.",
    intro: "A look at what our team delivers across Cyprus — from full renovations to everyday upkeep.",
    viewAll: "View all projects",
    before: "Before",
    after: "After",
  },
  projectsPage: {
    eyebrow: "Our projects",
    title: "Our projects.",
    intro: "A selection of before and after examples of our work on properties across Cyprus — renovations, pool care and ongoing maintenance.",
  },
  projects: [
    { title: "Full villa makeover, Larnaca district", description: "Exterior repaint, restored shutters, a new pergola and a complete garden restoration." },
    { title: "Pool recovery, hillside villa", description: "Drained, re-tiled and rebalanced the pool, and tidied the whole terrace around it." },
    { title: "Bathroom renovation, apartment", description: "Stripped back to the walls and rebuilt with modern tiling, a walk-in shower and new fittings." },
    { title: "Kitchen renovation, villa", description: "Replaced dated units with bright modern cabinetry, stone worktops and new integrated appliances." },
    { title: "Bedroom refresh, holiday home", description: "New flooring, soft neutral tones and light furniture for a calm, airy space." },
    { title: "Living room renovation, apartment", description: "Opened up the space with fresh paint, pale flooring and comfortable contemporary furniture." },
    { title: "Garden restoration, villa", description: "Cleared the overgrowth, re-turfed the lawn and replanted with easy Mediterranean greenery." },
  ],
  contactPage: {
    eyebrow: "Contact",
    title: "Contact Bespoke Property Management Cyprus",
    intro: "Contact us for property management, maintenance, repairs and property care services. Our office is located in Oroklini, Larnaca, Cyprus.",
    inquiriesTitle: "Inquiries & quotes",
    inquiriesText: "Need help with your property in Cyprus? Send us a message using the form below or contact our team directly. We'll be happy to discuss your property management, maintenance or renovation requirements.",
    getInTouch: "Get in touch",
    telephone: "Telephone",
    emergency: "Emergency / Out of Hours",
    emailLabel: "Email",
    detailsTitle: "Contact details",
    headOffice: "Head Office",
    officeHours: "Office Hours",
    hours: "Monday–Friday, 8:00am–6:00pm",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Phone (optional)",
    formMessage: "Message",
    formSend: "Send message",
    formNote: "This opens your email app with the message ready to send.",
  },
  common: {
    enquiriesLabel: "Enquiries & instant quotes",
    startConversation: "Start a conversation",
  },
  services: [
    { title: "Key holding", description: "A trusted local point of contact for your property, whether you live in Cyprus or abroad." },
    { title: "Property inspections", description: "Regular visits to keep an eye on your home and identify maintenance needs early." },
    { title: "Pool maintenance", description: "Care and upkeep to keep your swimming pool clean, maintained and ready to enjoy." },
    { title: "Cleaning", description: "Reliable cleaning to keep your villa, apartment or holiday home fresh and welcoming." },
    { title: "Gardening", description: "Practical care for your outdoor spaces so they stay tidy throughout the year." },
    { title: "Repairs & maintenance", description: "Help with repairs and ongoing upkeep, from small jobs to larger property projects." },
    { title: "Communal & complex management", description: "Complete administration of residential complexes — communal accounts, fee collection, credit control and support for owners' committees." },
    { title: "Property management & care", description: "Professional management and ongoing care for villas, apartments and holiday homes, tailored to owners living in Cyprus or abroad." },
    { title: "Renovation & construction", description: "From individual improvements to larger refurbishment projects — kitchens, bathrooms, tiling, painting, roofing and more." },
    { title: "Rental & guest services", description: "Guest check-in and check-out, welcome packs, bookings, tenant screening and rent collection for holiday homes and rentals." },
    { title: "Additional property services", description: "Alarm and security systems, solar energy solutions, furniture packages, insurance assistance and committee management." },
  ],
  serviceDetailPage: { includesLabel: "What's included", backToServices: "All services", ctaTitle: "Tell us about your property." },
  serviceDetails: {
    "communal-complex-management": {
      title: "Communal & complex management",
      intro: "Complete administration of residential complexes across Cyprus — so owners' committees and residents can rely on well-run, well-maintained shared spaces.",
      items: [
        "Communal accounts and transparent financial reporting",
        "Fee collection and credit control",
        "Support and secretarial services for owners' committees",
        "Maintenance of communal areas, pools and gardens",
        "Contractor coordination and planned maintenance schedules",
      ],
      closing: "We work closely with committees and owners to keep every complex running smoothly, with clear communication and dependable follow-through.",
    },
    "property-management-care": {
      title: "Property management & care",
      intro: "Professional management and ongoing care for villas, apartments and holiday homes — tailored to owners living in Cyprus or abroad.",
      items: [
        "Key holding and a trusted local point of contact",
        "Regular property inspections with photo reports",
        "Cleaning, laundry and preparation between stays",
        "Gardening and outdoor upkeep",
        "Utility bills, payments and administration handled for you",
      ],
      closing: "Whether you visit often or rarely, your property stays secure, maintained and ready to use whenever you arrive.",
    },
    "renovation-construction": {
      title: "Renovation & construction",
      intro: "From individual improvements to larger refurbishment projects, our team delivers quality workmanship with guarantees on all works carried out.",
      items: [
        "Kitchen and bathroom renovations",
        "Tiling, painting and decorating",
        "Roofing, waterproofing and structural repairs",
        "Pergolas, terraces and outdoor living spaces",
        "Full property refurbishments, managed end to end",
      ],
      closing: "We plan, coordinate and oversee every project, keeping you informed at each stage — wherever in the world you are.",
    },
    "pool-maintenance": {
      title: "Pool maintenance",
      intro: "Regular care and upkeep to keep your swimming pool clean, balanced and ready to enjoy all year round.",
      items: [
        "Scheduled cleaning and vacuuming",
        "Water testing and chemical balancing",
        "Pump, filter and equipment checks",
        "Green pool recovery and deep cleans",
        "Repairs, re-tiling and pool renovations",
      ],
      closing: "A well-kept pool is the heart of a Cyprus home — we make sure yours is always at its best.",
    },
    "key-holding": {
      title: "Key holding",
      intro: "A trusted local point of contact for your property, whether you live in Cyprus or abroad — your keys held securely and used only with your instruction.",
      items: [
        "Secure key storage with a signed register",
        "Access for guests, tenants and contractors",
        "Emergency access when it matters most",
        "Alarm response and lock-out assistance",
        "Key handover for arrivals and departures",
      ],
      closing: "With your keys in safe local hands, you never have to worry about access to your property again.",
    },
    "property-inspections": {
      title: "Property inspections",
      intro: "Regular visits to keep an eye on your home and identify maintenance needs early — before small issues become expensive problems.",
      items: [
        "Scheduled interior and exterior checks",
        "Photo reports after every visit",
        "Water, electricity and appliance checks",
        "Post-storm and seasonal inspections",
        "Early reporting of damp, leaks and damage",
      ],
      closing: "You receive a clear report after every visit, so you always know exactly how your property is doing.",
    },
    cleaning: {
      title: "Cleaning",
      intro: "Reliable cleaning to keep your villa, apartment or holiday home fresh and welcoming — for you, your family and your guests.",
      items: [
        "Regular weekly or fortnightly cleans",
        "Deep cleans and spring cleaning",
        "Changeover cleans between guests",
        "Laundry and linen service",
        "Pre-arrival preparation and airing",
      ],
      closing: "We treat every home as if it were our own, so it is always ready the moment you open the door.",
    },
    gardening: {
      title: "Gardening",
      intro: "Practical care for your outdoor spaces so they stay tidy and healthy throughout the year — whatever the Cypriot seasons bring.",
      items: [
        "Lawn mowing, weeding and edging",
        "Pruning of trees, shrubs and hedges",
        "Irrigation system checks and repairs",
        "Seasonal planting and tidy-ups",
        "Pest and disease monitoring",
      ],
      closing: "From a small terrace garden to a full villa plot, we keep your outdoor space looking its best in every season.",
    },
    "repairs-maintenance": {
      title: "Repairs & maintenance",
      intro: "Help with repairs and ongoing upkeep, from small jobs to larger property projects — one call, and it is taken care of.",
      items: [
        "Plumbing and electrical repairs",
        "Painting, tiling and decorating",
        "Air-conditioning servicing",
        "Appliance repairs and replacements",
        "Trusted local contractors for larger works",
      ],
      closing: "No job is too small — we handle the everyday fixes and coordinate the bigger ones, keeping you informed throughout.",
    },
    "rental-guest-services": {
      title: "Rental & guest services",
      intro: "Complete support for holiday homes and rentals — so your guests are well looked after and your property earns without the stress.",
      items: [
        "Guest check-in and check-out",
        "Welcome packs and guest support",
        "Booking and calendar management",
        "Tenant screening and references",
        "Rent collection and deposit handling",
      ],
      closing: "Whether you rent occasionally or all season, we make sure every stay runs smoothly for you and your guests.",
    },
    "additional-property-services": {
      title: "Additional property services",
      intro: "The extras that complete the picture — practical services that protect, improve and simplify ownership of your Cyprus property.",
      items: [
        "Alarm and security system installation",
        "Solar energy solutions",
        "Furniture packages and sourcing",
        "Insurance assistance and claims support",
        "Committee management and administration",
      ],
      closing: "Tell us what your property needs — if it matters to your home, we can almost certainly help.",
    },
  },
  testimonials: [
    {
      quote: "Bespoke Property Management have completed several jobs for us at our villa in Cyprus. The quality of workmanship has always been exceptional with guarantees provided on all works carried out. Just as important is their reliability and trustworthiness — a requirement for the key holding service we utilise — providing us with peace of mind as foreign owners. The attention to detail in all aspects of their work and customer service is exemplary and without doubt we would recommend to all other property owners.",
      name: "Nicola Jordan",
      role: "Owner at Paramount Gardens, Tersefanou",
    },
    {
      quote: "Simon and his team understand what service really means. I have entrusted Simon for a few years now with the overall management of our complex which comprises of 8 luxury townhouses and he has never let us down. BPM are the only company that we use for all of our maintenance needs as you always receive a quality service at a great price. With my friends and I all living outside of Cyprus we really appreciate the fact that BPM look after our investment with such pride, which in turn gives us a real sense of security and peace of mind.",
      name: "Amir Fatemi",
      role: "Owner, Carisa Saba Complex",
    },
    {
      quote: "Simon has an aptitude for aesthetics and an understanding of client needs that makes him stand out from other organizations in Cyprus. He pays close attention to what you say during consultation sessions and tries to capture the essence of your requests in his management, designs and handiwork. Simon doesn't just create something visually pleasing but also makes sure that it reflects the value of your property. A versatile manager with a vast amount of experience in high-level service and standards. Bespoke Property Management would be my first choice property maintenance and management company to hire on the island.",
      name: "Peter W Rushton and Julia Rushton",
      role: "Home owners in Cyprus",
    },
  ],
  footer: { tagline: "Villas · Apartments · Holiday homes · Residential complexes", logoAlt: "Bespoke Property Management", contactTitle: "Contact", address: "Griva Digeni Ave 24, A.K Building Shop 6, Oroklini 7040, Larnaca, Cyprus", hours: "Mon–Fri: 8am–6pm" },
};

const el: Dict = {
  nav: { home: "Αρχική", services: "Υπηρεσίες", payment: "Πληρωμές", contact: "Επικοινωνία", enquire: "Αίτημα" },
  hero: {
    eyebrow: "Διαχείριση ακινήτων στην Κύπρο",
    title: "Το ακίνητό σας, με διακριτική και σωστή διαχείριση.",
    subtitle: "Από τη φύλαξη κλειδιών και τις επιθεωρήσεις έως τη συντήρηση πισίνας, τον καθαρισμό, την κηπουρική και τις επισκευές. Προσωπική φροντίδα για το ακίνητό σας στην Κύπρο, όλο τον χρόνο.",
    cta: "Δείτε τι αναλαμβάνουμε",
  },
  home: {
    servicesEyebrow: "Τι κάνουμε",
    servicesTitle: "Κάθε λεπτομέρεια, υπό τη φροντίδα μας.",
    servicesIntro: "Στοχευμένη φροντίδα ακινήτων για εξοχικές κατοικίες, διαμερίσματα, εξοχικά και οικιστικά συγκροτήματα σε όλη την Κύπρο.",
    allServices: "Όλες οι υπηρεσίες",
    testimonialsEyebrow: "Λόγια από τους ιδιοκτήτες μας",
    contactEyebrow: "Επικοινωνήστε",
    contactTitle: "Πείτε μας για το ακίνητό σας.",
    contactText: "Είτε ζείτε εδώ είτε στο εξωτερικό, μπορούμε να βοηθήσουμε ώστε το ακίνητό σας στην Κύπρο να παραμένει ασφαλές, συντηρημένο και έτοιμο για χρήση.",
    enquiriesLabel: "Ερωτήσεις & άμεσες προσφορές",
    mobileLabel: "Κινητό:",
  },
  servicesPage: {
    eyebrow: "Τι κάνουμε",
    title: "Κάθε λεπτομέρεια, υπό τη φροντίδα μας.",
    intro: "Στοχευμένη φροντίδα ακινήτων για εξοχικές κατοικίες, διαμερίσματα, εξοχικά και οικιστικά συγκροτήματα σε όλη την Κύπρο — από το καθημερινό έως το απαιτητικό.",
    closingText: "Δεν είστε σίγουροι ποια υπηρεσία ταιριάζει στο ακίνητό σας; Επικοινωνήστε μαζί μας και θα ετοιμάσουμε τη σωστή λύση για εσάς.",
  },
  paymentsPage: {
    eyebrow: "Πληρωμές",
    title: "Εξοφλήστε τον λογαριασμό σας με ασφάλεια online.",
    intro: "Κάντε μια ασφαλή πληρωμή μέσω PayPal. Αν έχετε ερωτήσεις για τον λογαριασμό ή την πληρωμή σας, επικοινωνήστε μαζί μας εντός ωραρίου, Δευτέρα–Παρασκευή, 8πμ–6μμ.",
    payTitle: "Εξοφλήστε τον λογαριασμό σας με ασφάλεια online",
    payText: "Εξοφλήστε τον λογαριασμό σας γρήγορα και με ασφάλεια online μέσω PayPal.",
    payButton: "Πληρωμή μέσω PayPal",
    payNote: "Πληρώστε με ασφάλεια χρησιμοποιώντας τον λογαριασμό PayPal σας ή τις διαθέσιμες επιλογές χρεωστικής και πιστωτικής κάρτας.",
  },
  projectsSection: {
    eyebrow: "Τα έργα μας",
    title: "Πραγματικά αποτελέσματα, πραγματικά ακίνητα.",
    intro: "Μια ματιά σε αυτό που παραδίδει η ομάδα μας σε όλη την Κύπρο — από πλήρεις ανακαινίσεις έως την καθημερινή φροντίδα.",
    viewAll: "Όλα τα έργα",
    before: "Πριν",
    after: "Μετά",
  },
  projectsPage: {
    eyebrow: "Τα έργα μας",
    title: "Τα έργα μας.",
    intro: "Μια επιλογή παραδειγμάτων πριν και μετά από τις εργασίες μας σε ακίνητα σε όλη την Κύπρο — ανακαινίσεις, φροντίδα πισίνας και συνεχής συντήρηση.",
  },
  projects: [
    { title: "Πλήρης ανακαίνιση villa, επαρχία Λάρνακας", description: "Εξωτερικό βάψιμο, αποκατεστημένα παντζούρια, νέα πέργκολα και πλήρης αποκατάσταση κήπου." },
    { title: "Αποκατάσταση πισίνας, villa σε λόφο", description: "Άντληση, νέα πλακάκια και εξισορρόπηση της πισίνας, και τακτοποίηση ολόκληρης της βεράντας γύρω της." },
    { title: "Ανακαίνιση μπάνιου, διαμέρισμα", description: "Απεγκατάσταση έως τα τοιχώματα και πλήρης ανακατασκευή με μοντέρνα πλακάκια, ντουζιέρα και νέα εξαρτήματα." },
    { title: "Ανακαίνιση κουζίνας, villa", description: "Αντικατάσταση των παλιών ντουλαπιών με φωτεινά μοντέρνα έπιπλα, μαρμάρινους πάγκους και νέες ενσωματωμένες συσκευές." },
    { title: "Ανανέωση υπνοδωματίου, εξοχική κατοικία", description: "Νέο δάπεδο, απαλές ουδέτερες αποχρώσεις και φωτεινά έπιπλα για έναν ήρεμο, φωτεινό χώρο." },
    { title: "Ανακαίνιση σαλονιού, διαμέρισμα", description: "Αναδιαμόρφωση του χώρου με φρέσκο χρώμα, ανοιχτό δάπεδο και άνετα μοντέρνα έπιπλα." },
    { title: "Αποκατάσταση κήπου, villa", description: "Καθάρισμα της υπερβολικής βλάστησης, νέο γρασίδι και φύτευση με εύκολα μεσογειακά φυτά." },
  ],
  contactPage: {
    eyebrow: "Επικοινωνία",
    title: "Επικοινωνήστε με την Bespoke Property Management Κύπρος",
    intro: "Επικοινωνήστε μαζί μας για διαχείριση ακινήτων, συντήρηση, επισκευές και φροντίδα ακινήτων. Το γραφείο μας βρίσκεται στο Ωροκλίνη, Λάρνακα, Κύπρος.",
    inquiriesTitle: "Ερωτήσεις & προσφορές",
    inquiriesText: "Χρειάζεστε βοήθεια με το ακίνητό σας στην Κύπρο; Στείλτε μας μήνυμα μέσω της φόρμας ή επικοινωνήστε απευθείας με την ομάδα μας. Θα χαρούμε να συζητήσουμε τις ανάγκες σας για διαχείριση, συντήρηση ή ανακαίνιση.",
    getInTouch: "Στοιχεία επικοινωνίας",
    telephone: "Τηλέφωνο",
    emergency: "Επείγοντα / Εκτός ωραρίου",
    emailLabel: "Email",
    detailsTitle: "Στοιχεία γραφείου",
    headOffice: "Κεντρικό Γραφείο",
    officeHours: "Ώρες Γραφείου",
    hours: "Δευτέρα–Παρασκευή, 8:00πμ–6:00μμ",
    formName: "Όνομα",
    formEmail: "Email",
    formPhone: "Τηλέφωνο (προαιρετικό)",
    formMessage: "Μήνυμα",
    formSend: "Αποστολή μηνύματος",
    formNote: "Η αποστολή ανοίγει την εφαρμογή email σας με έτοιμο το μήνυμα.",
  },
  common: {
    enquiriesLabel: "Ερωτήσεις & άμεσες προσφορές",
    startConversation: "Ξεκινήστε μια συζήτηση",
  },
  services: [
    { title: "Φύλαξη κλειδιών", description: "Αξιόπιστη τοπική επαφή για το ακίνητό σας, είτε ζείτε στην Κύπρο είτε στο εξωτερικό." },
    { title: "Επιθεωρήσεις ακινήτων", description: "Τακτικές επισκέψεις για την επιτήρηση του σπιτιού σας και τον έγκαιρο εντοπισμό αναγκών συντήρησης." },
    { title: "Συντήρηση πισίνας", description: "Φροντίδα και συντήρηση για να παραμένει η πισίνα σας καθαρή και έτοιμη για χρήση." },
    { title: "Καθαρισμός", description: "Αξιόπιστος καθαρισμός για να παραμένει η villa, το διαμέρισμα ή το εξοχικό σας φρέσκο και φιλόξενο." },
    { title: "Κηπουρική", description: "Πρακτική φροντίδα για τους εξωτερικούς σας χώρους ώστε να παραμένουν περιποιημένοι όλο τον χρόνο." },
    { title: "Επισκευές & συντήρηση", description: "Βοήθεια με επισκευές και συνεχή συντήρηση, από μικρές εργασίες έως μεγαλύτερα έργα." },
    { title: "Διαχείριση κοινόχρηστων & συγκροτημάτων", description: "Πλήρης διαχείριση οικιστικών συγκροτημάτων — κοινοτικοί λογαριασμοί, είσπραξη τελών, αντιμετώπιση οφειλών και υποστήριξη επιτροπών ιδιοκτητών." },
    { title: "Διαχείριση & φροντίδα ακινήτων", description: "Επαγγελματική διαχείριση και συνεχής φροντίδα για villas, διαμερίσματα και εξοχικά, προσαρμοσμένη σε ιδιοκτήτες που ζουν στην Κύπρο ή στο εξωτερικό." },
    { title: "Ανακαίνιση & κατασκευές", description: "Από μεμονωμένες βελτιώσεις έως μεγαλύτερα έργα ανακαίνισης — κουζίνες, μπάνια, πλακάκια, βάψιμο, στέγες και άλλα." },
    { title: "Υπηρεσίες ενοικίασης & φιλοξενίας", description: "Check-in και check-out επισκεπτών, πακέτα υποδοχής, κρατήσεις, επιλογή ενοικιαστών και είσπραξη ενοικίων για εξοχικά και μισθωμένα ακίνητα." },
    { title: "Επιπλέον υπηρεσίες ακινήτων", description: "Συναγερμοί και συστήματα ασφαλείας, ηλιακές λύσεις, πακέτα επίπλωσης, βοήθεια με ασφάλειες και διαχείριση επιτροπών." },
  ],
  serviceDetailPage: { includesLabel: "Τι περιλαμβάνει", backToServices: "Όλες οι υπηρεσίες", ctaTitle: "Πείτε μας για το ακίνητό σας." },
  serviceDetails: {
    "communal-complex-management": {
      title: "Διαχείριση κοινόχρηστων & συγκροτημάτων",
      intro: "Πλήρης διαχείριση οικιστικών συγκροτημάτων σε όλη την Κύπρο — ώστε οι επιτροπές ιδιοκτητών και οι κάτοικοι να βασίζονται σε καλά οργανωμένους και συντηρημένους κοινόχρηστους χώρους.",
      items: [
        "Κοινοτικοί λογαριασμοί και διαφανής οικονομική αναφορά",
        "Είσπραξη τελών και αντιμετώπιση οφειλών",
        "Υποστήριξη και γραμματειακή κάλυψη επιτροπών ιδιοκτητών",
        "Συντήρηση κοινόχρηστων χώρων, πισινών και κήπων",
        "Συντονισμός συνεργείων και προγραμματισμένη συντήρηση",
      ],
      closing: "Συνεργαζόμαστε στενά με επιτροπές και ιδιοκτήτες ώστε κάθε συγκρότημα να λειτουργεί απρόσκοπτα, με ξεκάθαρη επικοινωνία και αξιόπιστη εκτέλεση.",
    },
    "property-management-care": {
      title: "Διαχείριση & φροντίδα ακινήτων",
      intro: "Επαγγελματική διαχείριση και συνεχής φροντίδα για villas, διαμερίσματα και εξοχικά — προσαρμοσμένη σε ιδιοκτήτες που ζουν στην Κύπρο ή στο εξωτερικό.",
      items: [
        "Φύλαξη κλειδιών και αξιόπιστη τοπική επαφή",
        "Τακτικές επιθεωρήσεις ακινήτου με φωτογραφικές αναφορές",
        "Καθαρισμός, πλυντήρια και προετοιμασία μεταξύ διαμονών",
        "Κηπουρική και φροντίδα εξωτερικών χώρων",
        "Λογαριασμοί κοινής ωφέλειας, πληρωμές και διαχείριση για εσάς",
      ],
      closing: "Είτε έρχεστε συχνά είτε σπάνια, το ακίνητό σας παραμένει ασφαλές, συντηρημένο και έτοιμο για χρήση κάθε φορά που φτάνετε.",
    },
    "renovation-construction": {
      title: "Ανακαίνιση & κατασκευές",
      intro: "Από μεμονωμένες βελτιώσεις έως μεγαλύτερα έργα ανακαίνισης, η ομάδα μας παραδίδει ποιοτική εργασία με εγγυήσεις για όλες τις εργασίες.",
      items: [
        "Ανακαινίσεις κουζίνας και μπάνιου",
        "Πλακάκια, βάψιμο και διακόσμηση",
        "Στέγες, στεγανοποιήσεις και δομικές επισκευές",
        "Πέργκολες, βεράντες και εξωτερικοί χώροι διαβίωσης",
        "Πλήρεις ανακαινίσεις ακινήτων, με ολοκληρωμένη διαχείριση",
      ],
      closing: "Σχεδιάζουμε, συντονίζουμε και επιβλέπουμε κάθε έργο, κρατώντας σας ενήμερους σε κάθε στάδιο — όπου κι αν βρίσκεστε.",
    },
    "pool-maintenance": {
      title: "Συντήρηση πισίνας",
      intro: "Τακτική φροντίδα και συντήρηση ώστε η πισίνα σας να παραμένει καθαρή, ισορροπημένη και έτοιμη για απόλαυση όλο τον χρόνο.",
      items: [
        "Προγραμματισμένος καθαρισμός και σκούπα πισίνας",
        "Έλεγχος νερού και χημική ισορροπία",
        "Έλεγχοι αντλίας, φίλτρου και εξοπλισμού",
        "Αποκατάσταση «πράσινων» πισινών και βαθύς καθαρισμός",
        "Επισκευές, νέα πλακάκια και ανακαινίσεις πισίνας",
      ],
      closing: "Μια καλοσυντηρημένη πισίνα είναι η καρδιά ενός σπιτιού στην Κύπρο — φροντίζουμε η δική σας να είναι πάντα στην καλύτερή της κατάσταση.",
    },
    "key-holding": {
      title: "Φύλαξη κλειδιών",
      intro: "Αξιόπιστη τοπική επαφή για το ακίνητό σας, είτε ζείτε στην Κύπρο είτε στο εξωτερικό — τα κλειδιά σας φυλάσσονται με ασφάλεια και χρησιμοποιούνται μόνο κατόπιν δικής σας οδηγίας.",
      items: [
        "Ασφαλής αποθήκευση κλειδιών με καταγραφή",
        "Πρόσβαση για επισκέπτες, ενοικιαστές και συνεργεία",
        "Πρόσβαση σε περιπτώσεις έκτακτης ανάγκης",
        "Ανταπόκριση σε συναγερμούς και βοήθεια σε κλείδωμα",
        "Παραλαβή και παράδοση κλειδιών για αφίξεις και αναχωρήσεις",
      ],
      closing: "Με τα κλειδιά σας σε ασφαλή τοπικά χέρια, δεν χρειάζεται ποτέ ξανά να ανησυχείτε για την πρόσβαση στο ακίνητό σας.",
    },
    "property-inspections": {
      title: "Επιθεωρήσεις ακινήτων",
      intro: "Τακτικές επισκέψεις για την επιτήρηση του σπιτιού σας και τον έγκαιρο εντοπισμό αναγκών συντήρησης — πριν τα μικρά προβλήματα γίνουν δαπανηρά.",
      items: [
        "Προγραμματισμένοι εσωτερικοί και εξωτερικοί έλεγχοι",
        "Φωτογραφικές αναφορές μετά από κάθε επίσκεψη",
        "Έλεγχοι νερού, ηλεκτρικού και συσκευών",
        "Επιθεωρήσεις μετά από κακοκαιρία και εποχιακά",
        "Έγκαιρη αναφορά υγρασίας, διαρροών και ζημιών",
      ],
      closing: "Λαμβάνετε ξεκάθαρη αναφορά μετά από κάθε επίσκεψη, ώστε να γνωρίζετε πάντα ακριβώς πώς είναι το ακίνητό σας.",
    },
    cleaning: {
      title: "Καθαρισμός",
      intro: "Αξιόπιστος καθαρισμός για να παραμένει η villa, το διαμέρισμα ή το εξοχικό σας φρέσκο και φιλόξενο — για εσάς, την οικογένειά σας και τους επισκέπτες σας.",
      items: [
        "Τακτικός εβδομαδιαίος ή δεκαπενθήμερος καθαρισμός",
        "Βαθύς καθαρισμός και γενικός καθαρισμός",
        "Καθαρισμός μεταξύ επισκεπτών",
        "Πλυντήρια και υπηρεσία λευκών ειδών",
        "Προετοιμασία και αερισμός πριν την άφιξη",
      ],
      closing: "Φροντίζουμε κάθε σπίτι σαν να ήταν δικό μας, ώστε να είναι πάντα έτοιμο τη στιγμή που ανοίγετε την πόρτα.",
    },
    gardening: {
      title: "Κηπουρική",
      intro: "Πρακτική φροντίδα για τους εξωτερικούς σας χώρους ώστε να παραμένουν περιποιημένοι και υγιείς όλο τον χρόνο — ό,τι κι αν φέρνουν οι κυπριακές εποχές.",
      items: [
        "Κούρεμα γκαζόν, ζιζανιοκτονία και περιποίηση",
        "Κλάδεμα δέντρων, θάμνων και φρακτών",
        "Έλεγχοι και επισκευές συστήματος άρδευσης",
        "Εποχιακές φυτεύσεις και τακτοποιήσεις",
        "Παρακολούθηση για παράσιτα και ασθένειες",
      ],
      closing: "Από μια μικρή βεράντα έως ολόκληρη έκταση villa, κρατάμε τον εξωτερικό σας χώρο στην καλύτερή του κατάσταση σε κάθε εποχή.",
    },
    "repairs-maintenance": {
      title: "Επισκευές & συντήρηση",
      intro: "Βοήθεια με επισκευές και συνεχή συντήρηση, από μικρές εργασίες έως μεγαλύτερα έργα — ένα τηλεφώνημα και όλα διεκπεραιώνονται.",
      items: [
        "Υδραυλικές και ηλεκτρικές επισκευές",
        "Βάψιμο, πλακάκια και διακόσμηση",
        "Συντήρηση κλιματιστικών",
        "Επισκευές και αντικαταστάσεις συσκευών",
        "Αξιόπιστα τοπικά συνεργεία για μεγαλύτερες εργασίες",
      ],
      closing: "Καμία εργασία δεν είναι πολύ μικρή — αναλαμβάνουμε τις καθημερινές επισκευές και συντονίζουμε τις μεγαλύτερες, κρατώντας σας ενήμερους.",
    },
    "rental-guest-services": {
      title: "Υπηρεσίες ενοικίασης & φιλοξενίας",
      intro: "Πλήρης υποστήριξη για εξοχικά και μισθωμένα ακίνητα — ώστε οι επισκέπτες σας να φροντίζονται σωστά και το ακίνητό σας να αποδίδει χωρίς άγχος.",
      items: [
        "Check-in και check-out επισκεπτών",
        "Πακέτα υποδοχής και υποστήριξη επισκεπτών",
        "Διαχείριση κρατήσεων και ημερολογίου",
        "Επιλογή ενοικιαστών και συστάσεις",
        "Είσπραξη ενοικίων και διαχείριση εγγυήσεων",
      ],
      closing: "Είτε νοικιάζετε περιστασιακά είτε όλη τη σεζόν, φροντίζουμε κάθε διαμονή να κυλά ομαλά για εσάς και τους επισκέπτες σας.",
    },
    "additional-property-services": {
      title: "Επιπλέον υπηρεσίες ακινήτων",
      intro: "Τα έξτρα που ολοκληρώνουν την εικόνα — πρακτικές υπηρεσίες που προστατεύουν, βελτιώνουν και απλοποιούν την ιδιοκτησία του ακινήτου σας στην Κύπρο.",
      items: [
        "Εγκατάσταση συναγερμών και συστημάτων ασφαλείας",
        "Ηλιακές ενεργειακές λύσεις",
        "Πακέτα επίπλωσης και προμήθεια επίπλων",
        "Βοήθεια με ασφάλειες και αποζημιώσεις",
        "Διαχείριση και διοίκηση επιτροπών",
      ],
      closing: "Πείτε μας τι χρειάζεται το ακίνητό σας — αν αφορά το σπίτι σας, σχεδόν σίγουρα μπορούμε να βοηθήσουμε.",
    },
  },
  testimonials: [
    {
      quote: "Η Bespoke Property Management έχει ολοκληρώσει πολλές εργασίες για εμάς στη villa μας στην Κύπρο. Η ποιότητα της εργασίας ήταν πάντα εξαιρετική, με εγγυήσεις για όλες τις εργασίες που εκτελέστηκαν. Εξίσου σημαντική είναι η αξιοπιστία και η εμπιστοσύνη — απαραίτητη για την υπηρεσία φύλαξης κλειδιών που χρησιμοποιούμε — προσφέροντάς μας ηρεμία ως ξένοι ιδιοκτήτες. Η προσοχή στη λεπτομέρεια σε όλες τις πτυχές της εργασίας και της εξυπηρέτησης είναι υποδειγματική και χωρίς αμφιβολία θα τους συστήναμε σε όλους τους ιδιοκτήτες ακινήτων.",
      name: "Nicola Jordan",
      role: "Ιδιοκτήτρια στο Paramount Gardens, Τερσεφάνου",
    },
    {
      quote: "Ο Simon και η ομάδα του καταλαβαίνουν πραγματικά τι σημαίνει εξυπηρέτηση. Εμπιστεύομαι τον Simon εδώ και λίγα χρόνια τη συνολική διαχείριση του συγκροτήματός μας, που αποτελείται από 8 πολυτελείς κατοικίες, και δεν μας έχει απογοητεύσει ποτέ. Το BPM είναι η μόνη εταιρεία που χρησιμοποιούμε για όλες μας τις ανάγκες συντήρησης, καθώς πάντα λαμβάνετε ποιοτική εξυπηρέτηση σε πολύ καλή τιμή. Επειδή εγώ και οι φίλοι μου ζούμε εκτός Κύπρου, εκτιμούμε πολύ το γεγονός ότι το BPM φροντίζει την επένδυσή μας με τέτοια υπερηφάνεια, κάτι που μάς δίνει πραγματική αίσθηση ασφάλειας και ηρεμίας.",
      name: "Amir Fatemi",
      role: "Ιδιοκτήτης, συγκρότημα Carisa Saba",
    },
    {
      quote: "Ο Simon έχει ταλέντο στην αισθητική και μια κατανόηση των αναγκών των πελατών που τον ξεχωρίζει από άλλους οργανισμούς στην Κύπρο. Ακούει προσεκτικά τι λέτε κατά τις συναντήσεις και προσπαθεί να αποτυπώσει την ουσία των αιτημάτων σας στη διαχείριση, τα σχέδια και την εργασία του. Ο Simon δεν δημιουργεί απλώς κάτι αισθητικά όμορφο, αλλά φροντίζει να αντανακλά την αξία του ακινήτου σας. Ένας ευέλικτος επαγγελματίας με τεράστια εμπειρία σε υπηρεσίες υψηλού επιπέδου. Η Bespoke Property Management θα είναι η πρώτη μου επιλογή για συντήρηση και διαχείριση ακινήτων στο νησί.",
      name: "Peter W Rushton and Julia Rushton",
      role: "Ιδιοκτήτες κατοικιών στην Κύπρο",
    },
  ],
  footer: { tagline: "Εξοχικές κατοικίες · Διαμερίσματα · Εξοχικά · Οικιστικά συγκροτήματα", logoAlt: "Bespoke Property Management", contactTitle: "Επικοινωνία", address: "Griva Digeni Ave 24, A.K Building Shop 6, Oroklini 7040, Larnaca, Cyprus", hours: "Δευ–Παρ: 8:00–18:00" },
};

const ru: Dict = {
  nav: { home: "Главная", services: "Услуги", payment: "Оплата", contact: "Контакты", enquire: "Запрос" },
  hero: {
    eyebrow: "Управление недвижимостью на Кипре",
    title: "Ваша недвижимость — под спокойным и надёжным управлением.",
    subtitle: "От хранения ключей и осмотров до ухода за бассейном, уборки, сада и ремонта. Личная забота о вашей собственности на Кипре круглый год.",
    cta: "Посмотрите, чем мы занимаемся",
  },
  home: {
    servicesEyebrow: "Чем мы занимаемся",
    servicesTitle: "Каждая деталь — под контролем.",
    servicesIntro: "Внимательная забота о виллах, апартаментах, загородных домах и жилых комплексах по всему Кипру.",
    allServices: "Все услуги",
    testimonialsEyebrow: "Слова наших владельцев",
    contactEyebrow: "Свяжитесь с нами",
    contactTitle: "Расскажите о вашей недвижимости.",
    contactText: "Живёте ли вы здесь или за границей, мы поможем сохранить вашу кипрскую недвижимость в безопасности, в порядке и готовой к использованию.",
    enquiriesLabel: "Запросы и быстрый расчёт",
    mobileLabel: "Мобильный:",
  },
  servicesPage: {
    eyebrow: "Чем мы занимаемся",
    title: "Каждая деталь — под контролем.",
    intro: "Внимательная забота о виллах, апартаментах, загородных домах и жилых комплексах по всему Кипру — от повседневного до самого сложного.",
    closingText: "Не уверены, какая услуга подходит вашей недвижимости? Свяжитесь с нами, и мы подберём правильное решение для вас.",
  },
  paymentsPage: {
    eyebrow: "Оплата",
    title: "Оплатите счёт безопасно онлайн.",
    intro: "Совершите безопасный платёж через PayPal. Если у вас есть вопросы по счёту или оплате, свяжитесь с нами в рабочее время, понедельник–пятница, 8:00–18:00.",
    payTitle: "Оплатите счёт безопасно онлайн",
    payText: "Оплатите счёт быстро и безопасно онлайн через PayPal.",
    payButton: "Оплатить через PayPal",
    payNote: "Оплатите безопасно со своего аккаунта PayPal или доступной дебетовой или кредитной картой.",
  },
  projectsSection: {
    eyebrow: "Наши проекты",
    title: "Реальные результаты, реальная недвижимость.",
    intro: "Взгляд на то, что делает наша команда по всему Кипру — от полных реконструкций до повседневного ухода.",
    viewAll: "Все проекты",
    before: "До",
    after: "После",
  },
  projectsPage: {
    eyebrow: "Наши проекты",
    title: "Наши проекты.",
    intro: "Подборка примеров «до и после» нашей работы с недвижимостью по всему Кипру — реконструкции, уход за бассейнами и постоянное обслуживание.",
  },
  projects: [
    { title: "Полное преображение виллы, район Ларнаки", description: "Внешняя покраска, восстановленные ставни, новая пергола и полное восстановление сада." },
    { title: "Восстановление бассейна, вилла на холме", description: "Слив воды, новая плитка и балансировка бассейна, а также приведение в порядок всей террасы вокруг." },
    { title: "Реконструкция ванной, апартаменты", description: "Демонтаж до стен и полная переделка: современная плитка, душевая кабина и новая сантехника." },
    { title: "Реконструкция кухни, вилла", description: "Старые шкафы заменены на светлые современные гарнитуры, каменные столешницы и новую встроенную технику." },
    { title: "Обновление спальни, загородный дом", description: "Новое покрытие пола, мягкие нейтральные тона и светлая мебель для спокойного, воздушного пространства." },
    { title: "Реконструкция гостиной, апартаменты", description: "Открыли пространство: свежая покраска, светлое напольное покрытие и удобная современная мебель." },
    { title: "Восстановление сада, вилла", description: "Расчистили заросли, уложили новый газон и высадили неприхотливые средиземноморские растения." },
  ],
  contactPage: {
    eyebrow: "Контакты",
    title: "Свяжитесь с Bespoke Property Management Кипр",
    intro: "Свяжитесь с нами по вопросам управления недвижимостью, обслуживания, ремонта и ухода. Наш офис находится в Ороклини, Ларнака, Кипр.",
    inquiriesTitle: "Запросы и расчёты",
    inquiriesText: "Нужна помощь с вашей недвижимостью на Кипре? Отправьте нам сообщение через форму или свяжитесь с нашей командой напрямую. Будем рады обсудить управление, обслуживание или ремонт.",
    getInTouch: "Как с нами связаться",
    telephone: "Телефон",
    emergency: "Экстренная связь / Вне часов работы",
    emailLabel: "Email",
    detailsTitle: "Контакты офиса",
    headOffice: "Главный офис",
    officeHours: "Часы работы",
    hours: "Понедельник–пятница, 8:00–18:00",
    formName: "Имя",
    formEmail: "Email",
    formPhone: "Телефон (необязательно)",
    formMessage: "Сообщение",
    formSend: "Отправить сообщение",
    formNote: "Отправка откроет ваше почтовое приложение с готовым сообщением.",
  },
  common: {
    enquiriesLabel: "Запросы и быстрый расчёт",
    startConversation: "Начать разговор",
  },
  services: [
    { title: "Хранение ключей", description: "Надёжный местный контакт для вашей недвижимости, живёте ли вы на Кипре или за границей." },
    { title: "Осмотры недвижимости", description: "Регулярные визиты, чтобы следить за домом и заранее выявлять потребности в обслуживании." },
    { title: "Обслуживание бассейна", description: "Уход и обслуживание, чтобы ваш бассейн оставался чистым и готовым к использованию." },
    { title: "Уборка", description: "Надёжная уборка, чтобы ваша вилла, апартаменты или загородный дом оставались свежими и гостеприимными." },
    { title: "Сад и озеленение", description: "Практический уход за вашими внешними пространствами, чтобы они оставались аккуратными круглый год." },
    { title: "Ремонт и обслуживание", description: "Помощь с ремонтом и постоянным обслуживанием — от небольших работ до крупных проектов." },
    { title: "Управление коммуникациями и комплексами", description: "Полное управление жилыми комплексами — коммунальные счета, сбор взносов, контроль задолженностей и поддержка комитетов владельцев." },
    { title: "Управление и уход за недвижимостью", description: "Профессиональное управление и постоянный уход за виллами, апартаментами и загородными домами — для владельцев на Кипре и за границей." },
    { title: "Ремонт и строительство", description: "От отдельных улучшений до крупных проектов реконструкции — кухни, ванные, плитка, покраска, крыши и многое другое." },
    { title: "Услуги аренды и гостей", description: "Заселение и выселение гостей, приветственные наборы, бронирование, проверка арендаторов и сбор арендной платы для загородных домов и сдающихся объектов." },
    { title: "Дополнительные услуги", description: "Сигнализация и системы безопасности, солнечные решения, мебельные пакеты, помощь со страхованием и управление комитетами." },
  ],
  serviceDetailPage: { includesLabel: "Что входит", backToServices: "Все услуги", ctaTitle: "Расскажите о вашей недвижимости." },
  serviceDetails: {
    "communal-complex-management": {
      title: "Управление коммуникациями и комплексами",
      intro: "Полное управление жилыми комплексами по всему Кипру — чтобы комитеты владельцев и жильцы могли полагаться на ухоженные и хорошо организованные общие пространства.",
      items: [
        "Коммунальные счета и прозрачная финансовая отчётность",
        "Сбор взносов и контроль задолженностей",
        "Поддержка и секретарское сопровождение комитетов владельцев",
        "Обслуживание общих зон, бассейнов и садов",
        "Координация подрядчиков и плановое обслуживание",
      ],
      closing: "Мы тесно работаем с комитетами и владельцами, чтобы каждый комплекс работал слаженно — с ясной коммуникацией и надёжным исполнением.",
    },
    "property-management-care": {
      title: "Управление и уход за недвижимостью",
      intro: "Профессиональное управление и постоянный уход за виллами, апартаментами и загородными домами — для владельцев, живущих на Кипре или за границей.",
      items: [
        "Хранение ключей и надёжный местный контакт",
        "Регулярные осмотры недвижимости с фотоотчётами",
        "Уборка, стирка и подготовка между проживаниями",
        "Уход за садом и внешними территориями",
        "Коммунальные платежи и администрирование за вас",
      ],
      closing: "Приезжаете ли вы часто или редко, ваша недвижимость остаётся в безопасности, ухоженной и готовой к использованию в любой момент.",
    },
    "renovation-construction": {
      title: "Ремонт и строительство",
      intro: "От отдельных улучшений до крупных проектов реконструкции — наша команда выполняет качественную работу с гарантией на все виды работ.",
      items: [
        "Реконструкция кухонь и ванных комнат",
        "Плитка, покраска и отделка",
        "Крыши, гидроизоляция и строительный ремонт",
        "Перголы, террасы и зоны отдыха на улице",
        "Полная реконструкция недвижимости под ключ",
      ],
      closing: "Мы планируем, координируем и контролируем каждый проект, держа вас в курсе на каждом этапе — где бы вы ни находились.",
    },
    "pool-maintenance": {
      title: "Обслуживание бассейна",
      intro: "Регулярный уход и обслуживание, чтобы ваш бассейн оставался чистым, сбалансированным и готовым к использованию круглый год.",
      items: [
        "Плановая чистка и вакуумная уборка",
        "Анализ воды и химическая балансировка",
        "Проверка насоса, фильтра и оборудования",
        "Восстановление «зелёных» бассейнов и глубокая чистка",
        "Ремонт, замена плитки и реконструкция бассейнов",
      ],
      closing: "Ухоженный бассейн — сердце дома на Кипре. Мы заботимся, чтобы ваш всегда был в лучшем виде.",
    },
    "key-holding": {
      title: "Хранение ключей",
      intro: "Надёжный местный контакт для вашей недвижимости, живёте ли вы на Кипре или за границей — ключи хранятся в безопасности и используются только по вашему указанию.",
      items: [
        "Безопасное хранение ключей с учётным журналом",
        "Доступ для гостей, арендаторов и подрядчиков",
        "Экстренный доступ, когда это действительно важно",
        "Реагирование на сигнализацию и помощь при блокировке двери",
        "Передача ключей при заезде и выезде",
      ],
      closing: "С ключами в надёжных местных руках вам больше никогда не придётся беспокоиться о доступе к вашей недвижимости.",
    },
    "property-inspections": {
      title: "Осмотры недвижимости",
      intro: "Регулярные визиты, чтобы следить за домом и заранее выявлять потребности в обслуживании — прежде чем мелкие проблемы станут дорогими.",
      items: [
        "Плановые внутренние и внешние проверки",
        "Фотоотчёты после каждого визита",
        "Проверка воды, электричества и техники",
        "Осмотры после непогоды и сезонные проверки",
        "Раннее выявление сырости, протечек и повреждений",
      ],
      closing: "После каждого визита вы получаете понятный отчёт, поэтому всегда точно знаете, в каком состоянии ваша недвижимость.",
    },
    cleaning: {
      title: "Уборка",
      intro: "Надёжная уборка, чтобы ваша вилла, апартаменты или загородный дом оставались свежими и гостеприимными — для вас, вашей семьи и ваших гостей.",
      items: [
        "Регулярная еженедельная или разовая уборка",
        "Генеральная и глубокая уборка",
        "Уборка между заездами гостей",
        "Стирка и смена постельного белья",
        "Подготовка и проветривание перед приездом",
      ],
      closing: "Мы относимся к каждому дому как к своему, поэтому он всегда готов в тот момент, когда вы открываете дверь.",
    },
    gardening: {
      title: "Сад и озеленение",
      intro: "Практический уход за вашими внешними пространствами, чтобы они оставались аккуратными и здоровыми круглый год — что бы ни приносили кипрские сезоны.",
      items: [
        "Стрижка газона, прополка и окантовка",
        "Обрезка деревьев, кустарников и живых изгородей",
        "Проверка и ремонт систем полива",
        "Сезонные посадки и уборка территории",
        "Контроль вредителей и болезней растений",
      ],
      closing: "От небольшого сада на террасе до полноценного участка виллы — мы поддерживаем вашу территорию в лучшем виде в любое время года.",
    },
    "repairs-maintenance": {
      title: "Ремонт и обслуживание",
      intro: "Помощь с ремонтом и постоянным обслуживанием — от небольших работ до крупных проектов. Один звонок, и всё будет сделано.",
      items: [
        "Сантехнический и электрический ремонт",
        "Покраска, плитка и отделочные работы",
        "Обслуживание кондиционеров",
        "Ремонт и замена бытовой техники",
        "Проверенные местные подрядчики для крупных работ",
      ],
      closing: "Нет слишком мелких задач — мы берём на себя повседневный ремонт и координируем крупные работы, держа вас в курсе.",
    },
    "rental-guest-services": {
      title: "Услуги аренды и гостей",
      intro: "Полная поддержка загородных домов и арендуемых объектов — чтобы ваши гости были довольны, а недвижимость приносила доход без стресса.",
      items: [
        "Заселение и выселение гостей",
        "Приветственные наборы и поддержка гостей",
        "Управление бронированиями и календарём",
        "Проверка арендаторов и рекомендаций",
        "Сбор арендной платы и работа с депозитами",
      ],
      closing: "Сдаёте ли вы время от времени или весь сезон — мы следим, чтобы каждое проживание проходило гладко для вас и ваших гостей.",
    },
    "additional-property-services": {
      title: "Дополнительные услуги",
      intro: "Дополнения, которые завершают картину — практичные услуги, которые защищают, улучшают и упрощают владение недвижимостью на Кипре.",
      items: [
        "Установка сигнализации и систем безопасности",
        "Солнечные энергетические решения",
        "Мебельные пакеты и подбор мебели",
        "Помощь со страхованием и страховыми случаями",
        "Управление и администрирование комитетов",
      ],
      closing: "Расскажите, что нужно вашей недвижимости — если это касается вашего дома, мы почти наверняка сможем помочь.",
    },
  },
  testimonials: [
    {
      quote: "Bespoke Property Management выполнили для нас несколько работ на нашей вилле на Кипре. Качество работ всегда было безупречным, с гарантиями на все выполненные работы. Не менее важны их надёжность и порядочность — необходимое условие для услуги хранения ключей, которой мы пользуемся, — это даёт нам спокойствие как иностранных владельцев. Внимание к деталям во всех аспектах работы и обслуживания образцовое, и мы без сомнений рекомендуем их всем владельцам недвижимости.",
      name: "Nicola Jordan",
      role: "Владелец Paramount Gardens, Терсефану",
    },
    {
      quote: "Саймон и его команда понимают, что такое настоящий сервис. Уже несколько лет я доверяю Саймону полное управление нашим комплексом из 8 роскошных таунхаусов, и он ни разу нас не подвёл. BPM — единственная компания, которой мы поручаем все работы по обслуживанию: всегда качественный сервис по отличной цене. Мы с друзьями живём за пределами Кипра, и нам очень важно, что BPM заботится о наших инвестициях с такой гордостью — это даёт настоящее чувство защищённости и спокойствия.",
      name: "Amir Fatemi",
      role: "Владелец комплекса Carisa Saba",
    },
    {
      quote: "У Саймона есть чувство эстетики и понимание потребностей клиентов, что выделяет его среди других компаний на Кипре. Он внимательно слушает вас на консультациях и стремится уловить суть ваших пожеланий в управлении, дизайне и работе. Саймон не просто создаёт нечто красивое — он следит, чтобы результат отражал ценность вашей недвижимости. Разносторонний специалист с огромным опытом сервиса высокого уровня. Bespoke Property Management — мой первый выбор для обслуживания и управления недвижимостью на острове.",
      name: "Peter W Rushton and Julia Rushton",
      role: "Владельцы домов на Кипре",
    },
  ],
  footer: { tagline: "Виллы · Апартаменты · Загородные дома · Жилые комплексы", logoAlt: "Bespoke Property Management", contactTitle: "Контакты", address: "Griva Digeni Ave 24, A.K Building Shop 6, Oroklini 7040, Larnaca, Cyprus", hours: "Пн–Пт: 8:00–18:00" },
};

const dictionaries: Record<Lang, Dict> = { en, el, ru };

// English is served without a prefix (/services); other languages get one (/ru/services).
export type LangParam = Exclude<Lang, "en"> | undefined;

export function toLangParam(lang: Lang): LangParam {
  return lang === "en" ? undefined : lang;
}

export function langFromParam(param: string | undefined): Lang {
  return param === "el" || param === "ru" ? param : "en";
}

/** Removes the language prefix and any trailing slash: "/ru/services/" → "/services". */
export function stripLangPrefix(pathname: string): string {
  const rest = pathname.replace(/^\/(en|el|ru)(?=\/|$)/, "").replace(/\/+$/, "");
  return rest === "" ? "/" : rest;
}

/** Builds the URL of an unprefixed path in the given language: ("/services", "ru") → "/ru/services". */
export function localizePath(path: string, lang: Lang): string {
  if (lang === "en") return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

type LanguageContextValue = { lang: Lang; langParam: LangParam; t: Dict };

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  langParam: undefined,
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const param = useParams({ strict: false, select: (p) => p.lang });
  const lang = langFromParam(param);
  const value = useMemo(() => ({ lang, langParam: toLangParam(lang), t: dictionaries[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}
