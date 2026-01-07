type TechGroupConfig = {
  id: string;
  labelKey:
    | "frontend"
    | "backend"
    | "databases"
    | "cms"
    | "cloudTesting"
    | "devops";
  logos: { src: string; name: string }[];
};

export const techGroupConfigs: TechGroupConfig[] = [
  {
    id: "frontend",
    labelKey: "frontend",
    logos: [
      { src: "/technologies/javascript.png", name: "JavaScript" },
      { src: "/technologies/react.png", name: "React" },
      { src: "/technologies/next.png", name: "Next.js" },
      { src: "/technologies/vue.png", name: "Vue" },
      { src: "/technologies/angular.png", name: "Angular" },
      { src: "/technologies/css.png", name: "CSS" },
      { src: "/technologies/tailwind.png", name: "Tailwind CSS" },
      { src: "/technologies/html.png", name: "HTML" },
      { src: "/technologies/rn.png", name: "React Native" },
      { src: "/technologies/flutter.png", name: "Flutter" },
      { src: "/technologies/android.png", name: "Android" },
      { src: "/technologies/dart.png", name: "Dart" },
    ],
  },
  {
    id: "backend",
    labelKey: "backend",
    logos: [
      { src: "/technologies/java.png", name: "Java" },
      { src: "/technologies/python.png", name: "Python" },
      { src: "/technologies/node.png", name: "Node.js" },
      { src: "/technologies/django.png", name: "Django" },
      { src: "/technologies/fast.png", name: "FastAPI" },
      { src: "/technologies/spring.png", name: "Spring" },
      { src: "/technologies/trpc.png", name: "tRPC" },
      { src: "/technologies/jwt.png", name: "JWT" },
      { src: "/technologies/stripe.png", name: "Stripe" },
      { src: "/technologies/langChain.png", name: "LangChain" },
      { src: "/technologies/openAI.png", name: "OpenAI" },
    ],
  },
  {
    id: "databases",
    labelKey: "databases",
    logos: [
      { src: "/technologies/mysql.png", name: "MySQL" },
      { src: "/technologies/pg.png", name: "PostgreSQL" },
      { src: "/technologies/sql.png", name: "SQL" },
      { src: "/technologies/prisma.png", name: "Prisma" },
      { src: "/technologies/redis.png", name: "Redis" },
      { src: "/technologies/vector_db.svg", name: "Vector DB" },
    ],
  },
  {
    id: "cms",
    labelKey: "cms",
    logos: [
      { src: "/technologies/wp.png", name: "WordPress" },
      { src: "/technologies/joomla.png", name: "Joomla" },
    ],
  },
  {
    id: "cloud-testing",
    labelKey: "cloudTesting",
    logos: [
      { src: "/technologies/cy.png", name: "Cypress" },
      { src: "/technologies/se.png", name: "Selenium" },
    ],
  },
  {
    id: "devops",
    labelKey: "devops",
    logos: [
      { src: "/technologies/aws.png", name: "AWS" },
      { src: "/technologies/Docker.png", name: "Docker" },
      { src: "/technologies/firebase.png", name: "Firebase" },
      { src: "/technologies/vercel.png", name: "Vercel" },
      { src: "/technologies/hn.png", name: "Honeycomb" },
      { src: "/technologies/google_analytics.png", name: "Google Analytics" },
    ],
  },
];