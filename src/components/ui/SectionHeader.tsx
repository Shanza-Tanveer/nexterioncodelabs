"use client";

interface SectionHeaderProps {
  primaryTitle: string;
  secondaryTitle: string;
  description: string;
}

const SectionHeader = ({
  primaryTitle,
  secondaryTitle,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="w-full font-degular text-2xl font-bold leading-8 md:text-4xl md:leading-none 2xl:text-[2.4rem]">
        <span className="text-primary">{primaryTitle}</span>
        <span className="text-secondary">{secondaryTitle}</span>
      </h2>
      <p className="pt-3 font-mona font-medium text-sm leading-6 text-primary 2xl:text-lg w-[94%] sm:w-[50%] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
