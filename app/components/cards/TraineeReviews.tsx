import Image from "next/image";

interface Trainee {
  name: string;
  comment: string;
  avatar: string;
}
interface TraineeReviewsProps {
  trainees: Trainee[];
}

const TraineeReviews: React.FC<TraineeReviewsProps> = ({ trainees }) => {
  return (
    <div className="w-full flex flex-col gap-6 my-6 items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainees.map((trainee, index) => (
          <div
            key={index}
            className="cursor-pointer w-full p-4 bg-white rounded-lg shadow-lg transition hover:shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <Image
                  src={trainee.avatar}
                  alt={trainee.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{trainee.name}</h3>
              </div>
            </div>
            <p className="text-gray-700">{trainee.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TraineeReviews;
