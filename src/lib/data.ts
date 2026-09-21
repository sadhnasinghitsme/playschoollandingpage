// PLACEHOLDER DATA — replace with real school content before launch.

export const SCHOOL_NAME = "SKS World School";
export const SCHOOL_LOCATION = "Greater Noida West";
export const SESSION = "2026-27";

export const PHONE_DISPLAY = "+91-9891081270";
export const PHONE_TEL = "+919891081270";

export const WHATSAPP_NUMBER = "919891081270";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  `Hi, I want to know about admission ${SESSION} at SKS World School.`
);
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const SCHOOL_ADDRESS = "HS-04, Sector-16, Greater Noida West, (U.P)";
export const SCHOOL_EMAIL = "contact@skswsgnw.ac.in";

export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Curriculum", href: "/#curriculum" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export type UspItem = {
  title: string;
  text: string;
  image: { src: string; alt: string };
};

export const USP_ITEMS: UspItem[] = [
  {
    title: "Experienced Faculty",
    text: "Trained educators for early years and primary classes, following CBSE-aligned lesson plans.",
    image: { src: "/C0318T01.JPG", alt: "A teacher with young students lined up in the indoor activity area" },
  },
  {
    // Unchanged on purpose: the school has not yet confirmed CCTV, trained staff and pick-up/drop-off protocols.
    title: "Safe & Secure Campus",
    text: "CCTV-monitored premises, trained staff, and secure pick-up/drop-off protocols.",
    image: { src: "/school-gate.jpeg", alt: "The SKS World School main gate and entrance building" },
  },
  {
    title: "Play-Based Early Years",
    text: "Our play school and nursery programme builds language, numeracy and motor skills through stories, phonics and hands-on play.",
    image: { src: "/C0326T01.JPG", alt: "Young children playing together at the ball pit" },
  },
  {
    title: "Indoor Play Area & Classrooms",
    text: "A dedicated indoor play area and child-friendly classrooms for young learners.",
    image: { src: "/C0355T01.JPG", alt: "Children riding toy cars in the spacious indoor play hall with teachers nearby" },
  },
  {
    title: "Large Sports Grounds",
    text: "A 150-metre playground with basketball, lawn tennis, cricket nets, badminton and a skating rink, plus music, dance and art.",
    image: { src: "/gallery-basketball-court.jpeg", alt: "Students playing basketball on the school's outdoor sports court" },
  },
  {
    title: "CBSE-Affiliated Curriculum",
    text: "A CBSE-aligned programme from Class 1, built on an activity-led foundation in Playschool, Nursery and KG.",
    image: { src: "/gallery-classroom-black-white.jpeg", alt: "Students with their teacher in front of the classroom board" },
  },
];

export type HighlightItem = {
  title: string;
  body: string;
  image: { src: string; alt: string; fit?: "cover" | "contain" };
};

export const HIGHLIGHT_ITEMS: HighlightItem[] = [
  {
    title: "Holistic CBSE Curriculum",
    body: "An age-appropriate, activity-led programme from Playschool to Class 5 that builds strong foundations in language, maths and values.",
    image: { src: "/download.jpg.jpeg", alt: "Central Board of Secondary Education (CBSE) logo", fit: "contain" },
  },
  {
    title: "Our Campus in Sector 16",
    body: "A campus with a 150-metre playground, sports courts, a skating rink and a dedicated indoor play area.",
    image: { src: "/school-gate.jpeg", alt: "The SKS World School campus building behind the main gate" },
  },
  {
    title: "Partnering With Parents",
    body: "Regular parent engagement and guidance so families stay involved in every step.",
    image: { src: "/C0365T01.JPG", alt: "Teachers and students together at morning assembly" },
  },
];

export const WHY_CHOOSE_POINTS = [
  // Unchanged on purpose: needs a real class size / ratio from the school.
  "Low student-to-teacher ratio",
  "Holistic development (academics, sports, arts, values)",
  "CBSE-affiliated, activity-led curriculum",
  "Regular parent-teacher interaction",
  // Neutral wording until the school confirms whether meals are provided.
  "Clean, well-maintained campus",
];

export type CurriculumGroup = {
  title: string;
  subtitle: string;
  items: string[];
};

export const PRE_PRIMARY_CURRICULUM: CurriculumGroup[] = [
  {
    title: "Cognitive Development",
    subtitle: "Playschool & Pre-Primary",
    items: [
      "Shape, colour & pattern recognition",
      "Early numeracy through play",
      "Puzzle-solving & memory games",
    ],
  },
  {
    title: "Language Development",
    subtitle: "Playschool & Pre-Primary",
    items: [
      "Story-telling & phonics",
      "Vocabulary building activities",
      "Show-and-tell confidence building",
    ],
  },
  {
    title: "Motor Skills",
    subtitle: "Playschool & Pre-Primary",
    items: [
      "Fine motor: tracing, threading, clay work",
      "Gross motor: obstacle courses & free play",
      "Yoga & movement sessions",
    ],
  },
  {
    title: "Social-Emotional Growth",
    subtitle: "Playschool & Pre-Primary",
    items: [
      "Sharing, turn-taking & empathy building",
      "Circle time & group activities",
      "Emotional expression through play",
    ],
  },
  {
    title: "Creative Development",
    subtitle: "Playschool & Pre-Primary",
    items: [
      "Art, craft & colouring",
      "Music, rhythm & dance",
      "Imaginative & dramatic play",
    ],
  },
];

export const PRIMARY_CURRICULUM: CurriculumGroup[] = [
  {
    title: "Academics",
    subtitle: "Classes 1 - 5",
    items: [
      "Structured curriculum in Maths, EVS, Language & Science",
      "Concept-based learning with regular assessments",
      "CBSE-aligned syllabus with regular assessments",
    ],
  },
  {
    title: "Activity-Based Learning",
    subtitle: "Classes 1 - 5",
    items: [
      "Project work & experiential learning",
      "Science & maths lab activities",
      "Field trips and outdoor learning",
    ],
  },
  {
    title: "Sports",
    subtitle: "Classes 1 - 5",
    items: [
      "Daily physical education periods",
      "Athletics, football, basketball & more",
      "Annual sports day",
    ],
  },
  {
    title: "Arts",
    subtitle: "Classes 1 - 5",
    items: [
      "Visual arts & craft workshops",
      "Music and dance electives",
      "Annual cultural showcase",
    ],
  },
  {
    title: "Values",
    subtitle: "Classes 1 - 5",
    items: [
      "Life-skills & moral education",
      "Community service initiatives",
      "Respect, discipline & responsibility",
    ],
  },
];

export const DAILY_ROUTINE = [
  { time: "8:00 AM", activity: "Warm Welcome & Assembly" },
  { time: "8:30 AM", activity: "Circle Time / Morning Talk" },
  { time: "9:00 AM", activity: "Academic Sessions" },
  { time: "10:30 AM", activity: "Nutritious Snack Break" },
  { time: "11:00 AM", activity: "Activity-Based Learning" },
  { time: "12:00 PM", activity: "Outdoor Play / Sports" },
  { time: "12:45 PM", activity: "Lunch Break" },
  { time: "1:30 PM", activity: "Arts, Music & Story Time" },
  { time: "2:15 PM", activity: "Wind-down & Dismissal Prep" },
];

export const GRADE_OPTIONS = [
  "Playschool",
  "Nursery",
  "KG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
];

export type Testimonial = {
  quote: string;
  name: string;
  relation: string;
};

// PLACEHOLDER: these are not real parent reviews. Replace with genuine,
// consented reviews before running ads (see the content guide, section 3.12).
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "SKS World School has been wonderful for our daughter. The teachers are patient, caring, and truly invested in her growth.",
    name: "Priya Sharma",
    relation: "Parent of Nursery student",
  },
  {
    quote:
      "The activity-based approach makes my son excited to go to school every single day. We love the individual attention he gets.",
    name: "Rohit Verma",
    relation: "Parent of Class 2 student",
  },
  {
    quote:
      "A safe, nurturing campus with a great balance of academics, sports, and arts. Highly recommend for young learners.",
    name: "Anjali Gupta",
    relation: "Parent of UKG student",
  },
];

// Ordered so neighbouring tiles show different places (play area, stage,
// sports, classroom, assembly) instead of clustering.
export const GALLERY_IMAGES = [
  { src: "/C0334T01.JPG", alt: "A student sliding into the ball pit at SKS World School" },
  { src: "/gallery-stage-animals.jpeg", alt: "Young children in animal costumes on stage during a school performance" },
  { src: "/C0326T01.JPG", alt: "Young children at the ball pit in the indoor play area" },
  { src: "/C0365T01.JPG", alt: "Students and teachers at morning assembly, SKS World School, Sector 16" },
  { src: "/gallery-classroom-purple.jpeg", alt: "Students in purple costumes posing with their teacher in the classroom" },
  { src: "/C0328T01.JPG", alt: "Ball pit in the indoor play area, SKS World School" },
  { src: "/gallery-stage-dance-blue.jpeg", alt: "Girls in blue dresses dancing on stage during a school performance" },
  { src: "/C0338T01.png", alt: "Smiling SKS World School children clapping together in the play hall" },
  { src: "/C0367T01.JPG", alt: "Class lined up for morning assembly at SKS World School, Sector 16" },
  { src: "/gallery-classroom-orange.jpeg", alt: "Students in orange and gold costumes with their teacher in a decorated classroom" },
  { src: "/C0329T01.JPG", alt: "A child on the indoor slide at SKS World School Greater Noida West" },
  { src: "/gallery-stage-show-wide.jpeg", alt: "Students performing on a large stage during a school event" },
  { src: "/C0355T01.JPG", alt: "Young children riding toy cars in the indoor play area, SKS World School" },
  { src: "/gallery-classroom-red.jpeg", alt: "Students in red and gold costumes with their teacher in the classroom" },
  { src: "/C0318T01.JPG", alt: "Children and a teacher in the indoor activity area at SKS World School Greater Noida West" },
  { src: "/gallery-classroom-purple-white.jpeg", alt: "Students in purple and white costumes with their teacher in a decorated classroom" },
  { src: "/C0364T01.JPG", alt: "Students with folded hands during assembly at SKS World School, Sector 16" },
  { src: "/gallery-classroom-sequin.jpeg", alt: "Students in sparkling costumes with their teacher in a decorated classroom" },
  { src: "/C0322T01.JPG", alt: "Students playing basketball in the indoor play area at SKS World School" },
  { src: "/gallery-classroom-black-white.jpeg", alt: "Students in black and white outfits with their teacher in the classroom" },
  { src: "/C0333T01.JPG", alt: "Students on the indoor slide with a teacher nearby, SKS World School" },
  { src: "/gallery-classroom-green.jpeg", alt: "Students in green jackets with their teacher in the classroom" },
];

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Curriculum", href: "/#curriculum" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Enquire Now", href: "/#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
