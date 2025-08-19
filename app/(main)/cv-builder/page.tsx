"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Button from "../../components/button/Button";
import { FaDownload, FaEnvelope, FaLink, FaLinkedin, FaTrophy, FaTwitter } from "react-icons/fa";
import { FiUsers, FiPackage, FiSmile, FiHeart } from "react-icons/fi";
import PersonalInformation from "@/app/components/cv_build/PersonalInformation";
import EducationalInformation from "@/app/components/cv_build/EducationalInformation";
import ProfessionalInformation from "@/app/components/cv_build/ProfessionalInformation";
import CandidateType from "@/app/components/cv_build/CandidateType";
import CVPreview from "@/app/components/cv_build/CVPreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type PersonalData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  portfolio?: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  otherProfile?: string;
  address?: string;
  summary: string;
  profileImage?: File;
};

type EducationData = {
  education: {
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    description?: string;
  }[];
};

type ProfessionalData = {
  experiences: {
    company: string;
    jobTitle: string;
    startDate: string;
    endDate?: string;
    responsibilities?: string;
  }[];
  currentCompany?: string;
  skills?: string;
};


// Merge all into CVData
type CVData = {
  personal?: PersonalData;
  education?: EducationData;
  professional?: ProfessionalData;
};

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Card = ({ icon, title, description }: CardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CVBuilderPage = () => {
  const [startBuilding, setStartBuilding] = useState(false);
  const [step, setStep] = useState(0);
  const [candidateType, setCandidateType] = useState<"fresher" | "experienced" | null>(null);
  const [cvData, setCvData] = useState<CVData>({});
  const cvRef = useRef<HTMLDivElement>(null);

  const handleNext = (data: PersonalData | EducationData | ProfessionalData) => {
    if (step === 1) setCvData((prev) => ({ ...prev, personal: data as PersonalData }));
    else if (step === 2) setCvData((prev) => ({ ...prev, education: data as EducationData }));
    else if (step === 3 && candidateType === "experienced")
      setCvData((prev) => ({ ...prev, professional: data as ProfessionalData }));

    console.log("👉 Merged Data:", {
      ...cvData,
      ...(step === 1
        ? { personal: data }
        : step === 2
        ? { education: data }
        : step === 3
        ? { professional: data }
        : {}),
    });

    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Download CV as PDF
  const handleDownloadPDF = async () => {
    if (!cvRef.current) return;

    const canvas = await html2canvas(cvRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("My_CV.pdf");
  };

  // ✅ Share CV
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = "Check out my CV!";

    if (platform === "linkedin")
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    else if (platform === "twitter")
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${title}`, "_blank");
    else if (platform === "email")
      window.location.href = `mailto:?subject=${title}&body=${url}`;
    else if (platform === "copy")
      navigator.clipboard.writeText(url).then(() => alert("✅ Link copied to clipboard"));
  };

  return (
    <div className="w-full p-8">
      {!startBuilding ? (
        <>
          <section className="text-primaryx">
            <div className="mx-auto flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">Build Your CV</h1>
                <p className="text-lg mb-6">
                  Create a professional CV that stands out to employers.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <Image
                  src="/gifs/cv_builder.gif"
                  alt="CV Builder"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </section>

          {/* WHY USE SECTION */}
          <section className="py-16 bg-gray-100">
            <div className="mx-auto flex flex-col items-center">
              <h2 className="text-3xl font-bold text-center mb-8">
                Why Use Our CV Builder?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  icon={<FiUsers className="text-primary w-16 h-16 mb-4" />}
                  title="User-Friendly"
                  description="Easy to use interface for quick CV creation."
                />
                <Card
                  icon={<FiPackage className="text-primary w-16 h-16 mb-4" />}
                  title="Customizable Templates"
                  description="Choose from a variety of professional templates."
                />
                <Card
                  icon={<FiSmile className="text-primary w-16 h-16 mb-4" />}
                  title="Satisfaction Guaranteed"
                  description="Create a CV that you will be proud to share."
                />
                <Card
                  icon={<FiHeart className="text-primary w-16 h-16 mb-4" />}
                  title="Free to Use"
                  description="Build your CV without any cost."
                />
                <Card
                  icon={<FaTrophy className="text-primary w-16 h-16 mb-4" />}
                  title="Stand Out"
                  description="Make your CV stand out to potential employers."
                />
              </div>
              <div className="mt-6">
                <Button
                  onClick={() => {
                    setStartBuilding(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <span className="px-6">Start Building</span>
                </Button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="max-w-3xl mx-auto">
          {step === 0 && (
            <CandidateType
              onSelect={(type) => {
                setCandidateType(type);
                setStep(1);
              }}
            />
          )}
          {step === 1 && (
            <PersonalInformation onNext={(data) => handleNext(data)} />
          )}
          {step === 2 && (
            <EducationalInformation onNext={(data) => handleNext(data)} />
          )}
          {step === 3 && (
            <ProfessionalInformation onNext={(data) => handleNext(data)} />
          )}
          {step === 4 && (
            <div className="p-4 bg-green-100 rounded-lg">
              <h2 className="text-xl font-bold mb-2">🎉 Your CV Preview</h2>

              {/* ✅ CV Preview wrapped in ref */}
              <div ref={cvRef}>
                <CVPreview cvData={cvData} />
              </div>

              {/* ✅ Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button onClick={handleDownloadPDF} className="flex flew-row items-center gap-2">
                  <FaDownload /> Download PDF
                </Button>

                <div className="flex gap-3">
                  <button onClick={() => handleShare("linkedin")} className="text-blue-600">
                    <FaLinkedin size={24} />
                  </button>
                  <button onClick={() => handleShare("twitter")} className="text-sky-500">
                    <FaTwitter size={24} />
                  </button>
                  <button onClick={() => handleShare("email")} className="text-red-500">
                    <FaEnvelope size={24} />
                  </button>
                  <button onClick={() => handleShare("copy")} className="text-gray-600">
                    <FaLink size={24} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CVBuilderPage;
