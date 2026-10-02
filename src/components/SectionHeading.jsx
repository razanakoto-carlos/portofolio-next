import React from "react";

export default function SectionHeading({ title, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={`mb-10 sm:mb-14 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {centered && (
        <div
          className="mt-5 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="w-px h-10 bg-accent/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </div>
      )}
    </div>
  );
}
