import Button from "../button/Button";
import TraineeReviews from "../cards/TraineeReviews";
import { useRouter } from "next/navigation";

const Trainees = () => {
  const router = useRouter();
  const trainees = [
    {
      name: "Sara Khan",
      comment:
        "Carriastic’s training programs helped me gain the skills I needed to land my dream job. Highly recommended!",
      avatar: "/avatars/alice.jpeg",
    },
    {
      name: "Raza Ahmed",
      comment:
        "The career development sessions and skill-building workshops were truly valuable. Thanks to Carriastic, I secured an amazing opportunity.",
      avatar: "/avatars/jessica.jpg",
    },
    {
      name: "Maya Sultana",
      comment:
        "With Carriastic's training, I was able to enhance my technical skills and improve my interview techniques. Grateful for the guidance!",
      avatar: "/avatars/john.jpeg",
    },
    {
      name: "Tanvir Rahman",
      comment:
        "Carriastic’s mentorship program provided me with the knowledge and confidence to pursue my career goals. It was a game changer for me.",
      avatar: "/avatars/linda.jpeg",
    },
    {
      name: "Tanvir Rahman",
      comment:
        "Carriastic’s mentorship program provided me with the knowledge and confidence to pursue my career goals. It was a game changer for me.",
      avatar: "/avatars/michael.jpg",
    },
  ];
  return (
    <section className="px-8 flex flex-col items-center gap-6">
      <TraineeReviews trainees={trainees} />
      <div className="w-full flex flex-col gap-1 justify-center items-center">
        <Button onClick={() => router.push("/career")} className="px-8">Join Carriastic Now</Button>
      </div>
      <div
        onClick={() => router.push("/services")}
        className="text-primary hover:font-[600] hover:underline text-[18px] cursor-pointer"
      >
        See All
      </div>
    </section>
  );
};

export default Trainees;
