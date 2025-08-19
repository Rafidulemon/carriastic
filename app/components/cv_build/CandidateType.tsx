"use client";

import React from "react";
import Button from "../button/Button";

type CandidateTypeProps = {
  onSelect: (type: "fresher" | "experienced") => void;
};

const CandidateType = ({ onSelect }: CandidateTypeProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold mb-4">Select Candidate Type</h2>
      <p className="text-gray-600 mb-6">
        Are you a fresher or do you have work experience?
      </p>

      <div className="flex flex-col gap-4">
        <Button onClick={() => onSelect("fresher")} className="w-full">
          Fresher
        </Button>
        <Button onClick={() => onSelect("experienced")} className="w-full">
          Experienced
        </Button>
      </div>
    </div>
  );
};

export default CandidateType;
