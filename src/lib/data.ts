// PLACEHOLDER DATA — replace with real school content before launch.

export const SCHOOL_NAME = "SKS World School";
export const SCHOOL_LOCATION = "Greater Noida West";
export const SESSION = "2026-27";

// PLACEHOLDER: replace with the real admissions office number.
export const PHONE_DISPLAY = "+91 98765 43210";
export const PHONE_TEL = "+919876543210";

// PLACEHOLDER: replace with the real WhatsApp business number.
export const WHATSAPP_NUMBER = "919876543210";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  `Hi SKS World School, I would like to enquire about admissions for session ${SESSION} (Playschool to Class 5). Please share more details.`
);
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// PLACEHOLDER: replace with real address / email.
export const SCHOOL_ADDRESS =
  "Plot No. 00, Sector-00, Greater Noida West, Uttar Pradesh 201306";
export const SCHOOL_EMAIL = "admissions@skseworldschool-placeholder.com";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export type UspItem = {
  title: string;
  text: string;
};

export const USP_ITEMS: UspItem[] = [
  {
    title: "Experienced Faculty",
    text: "Warm, trained educators who specialize in early childhood and primary learning.",
  },
  {
    title: "Safe & Secure Campus",
    text: "CCTV-monitored premises, trained staff, and secure pick-up/drop-off protocols.",
  },
  {
    title: "Activity-Based Learning",
    text: "Hands-on, play-based methods that make learning joyful and memorable.",
  },
  {
    title: "Modern Infrastructure",
    text: "Bright classrooms, smart boards, and child-friendly spaces.",
  },
  {
    title: "Sports & Arts",
    text: "Dedicated time for sports, music, dance, and art.",
  },
  {
    title: "Individual Attention",
    text: "Small batch sizes so every child is seen and heard.",
  },
];

export type HighlightItem = {
  title: string;
  body: string;
};

export const HIGHLIGHT_ITEMS: HighlightItem[] = [
  {
    title: "Holistic Curriculum",
    body: "An age-appropriate, activity-led curriculum from Playschool to Class 5 that builds strong foundations.",
  },
  {
    title: "Our Campus & Infrastructure",
    body: "Thoughtfully designed classrooms and safe play areas that celebrate childhood and holistic development.",
  },
  {
    title: "Partnering With Parents",
    body: "Regular parent engagement and guidance so families stay involved in every step of the learning journey.",
  },
];

export const WHY_CHOOSE_POINTS = [
  "Low student-to-teacher ratio",
  "Holistic development (academics, sports, arts, values)",
  "Modern certified curriculum",
  "Regular parent-teacher interaction",
  "Nutritious meals & hygienic campus",
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
      "Digital & smart-class integration",
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
  "LKG",
  "UKG",
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

export const GALLERY_IMAGES = Array.from({ length: 8 }).map((_, i) => ({
  src: `https://placehold.co/600x450/${
    ["FF7A33", "FFC93C", "1FB6A6", "3D7EFF", "FF5C8D", "8B5CF6"][i % 6]
  }/FFFFFF?text=Gallery+Photo+${i + 1}`,
  alt: `Placeholder gallery photo ${i + 1} of SKS World School campus life`,
}));

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Gallery", href: "#gallery" },
  { label: "Enquire Now", href: "#contact" },
];
