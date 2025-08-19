"use client";
import React from "react";

type CVPreviewProps = {
  cvData: {
    personal?: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      address?: string;
      summary: string;
      profileImage?: File;
      portfolio?: string;
      github?: string;
      linkedin?: string;
    };
    education?: {
      education: {
        school: string;
        degree: string;
        field: string;
        startDate: string;
        endDate: string;
        description?: string;
      }[];
    };
    professional?: {
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
  };
};

const CVPreview: React.FC<CVPreviewProps> = ({ cvData }) => {
  const { personal, education, professional } = cvData;

  return (
    <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl mx-auto space-y-8 border border-gray-200">
      {/* HEADER */}
      {personal && (
        <header className="flex items-center space-x-6 border-b pb-6">
          {/* Profile Image */}
          {personal.profileImage && (
            <img
              src={URL.createObjectURL(personal.profileImage)}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
            />
          )}

          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {personal.firstName} {personal.lastName}
            </h1>
            <p className="text-gray-600">{personal.summary}</p>

            <div className="mt-2 text-sm text-gray-500 space-y-1">
              <p>📍 {personal.address}</p>
              <p>📧 {personal.email}</p>
              <p>📞 {personal.phone}</p>
              {personal.portfolio && <p>🌐 {personal.portfolio}</p>}
              {personal.github && <p>💻 {personal.github}</p>}
              {personal.linkedin && <p>🔗 {personal.linkedin}</p>}
            </div>
          </div>
        </header>
      )}

      {/* EDUCATION */}
      {education?.education?.length ? (
        <section>
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            🎓 Education
          </h2>
          <div className="space-y-4">
            {education.education.map((edu, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <h3 className="font-bold text-gray-900">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-gray-700">{edu.school}</p>
                <p className="text-sm text-gray-500">
                  {edu.startDate} - {edu.endDate}
                </p>
                {edu.description && (
                  <p className="text-gray-600 mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* EXPERIENCE */}
      {professional?.experiences?.length ? (
        <section>
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            💼 Professional Experience
          </h2>
          <div className="space-y-4">
            {professional.experiences.map((exp, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                <p className="text-gray-700">{exp.company}</p>
                <p className="text-sm text-gray-500">
                  {exp.startDate} - {exp.endDate || "Present"}
                </p>
                {exp.responsibilities && (
                  <p className="text-gray-600 mt-1">{exp.responsibilities}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* SKILLS */}
      {professional?.skills && (
        <section>
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            🛠 Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {professional.skills.split(",").map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm shadow-sm"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CVPreview;
