"use client";
import { useEffect, useState } from 'react';

interface Props {
  label: string;
  level: number;
  color?: string;
}

const Bar = ({ label, level, color }: Props) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const animationTime = 7000;
    const maxWidth = level;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const increment = (progress / animationTime) * maxWidth;

      if (increment < maxWidth) {
        setWidth(increment);
        requestAnimationFrame(animate);
      } else {
        setWidth(maxWidth);
      }
    };

    requestAnimationFrame(animate);
  }, [level]);

  return (
    <div className="mb-4">
      <p className="mb-2 text-primary text-[16px] md:text-[20px] w-full flex flex-row">{label}</p>
      <div className={`bg-cyan-100 h-2 md:h-3 lg:h-4 w-full rounded-full`}>
        <div
          className={`h-3 md:h-4 lg:h-5  rounded-full ${color ? color : ""}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;
