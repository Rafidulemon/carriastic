import Image from "next/image";

const techStack = [
  "/technologies/java.png",
  "/technologies/javascript.png",
  "/technologies/python.png",
  "/technologies/node.png",
  "/technologies/trpc.png",
  "/technologies/django.png",
  "/technologies/fast.png",
  "/technologies/mysql.png",
  "/technologies/pg.png",
  "/technologies/react.png",
  "/technologies/next.png",
  "/technologies/vue.png",
  "/technologies/angular.png",
  "/technologies/android.png",
  "/technologies/prisma.png",
  "/technologies/hn.png",
  "/technologies/aws.png",
  "/technologies/css.png",
  "/technologies/html.png",
  "/technologies/firebase.png",
  "/technologies/flutter.png",
  "/technologies/jwt.png",
  "/technologies/wp.png",
  "/technologies/sql.png",
  "/technologies/spring.png",
  "/technologies/rn.png",
  "/technologies/dart.png",
  "/technologies/cy.png",
  "/technologies/se.png",
  "/technologies/joomla.png",
];

const TechStackSection = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-14 md:px-10">
      <div className="flex flex-col gap-4 text-center">
        <span className="home-eyebrow mx-auto">Technology stack</span>
        <h2 className="home-title home-title-center text-[26px] font-semibold md:text-[34px] font-spaceGrotesk">
          Modern tools, reliable infrastructure
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {techStack.map((logo) => (
          <div key={logo} className="home-logo-card flex items-center justify-center p-4">
            <Image src={logo} alt="Technology logo" width={80} height={60} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
