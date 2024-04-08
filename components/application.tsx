import { fjalla } from "@/app/font";
import { applicationImages } from "@/constant";
import Image from "next/image";
import React from "react";

const Application = () => {
  const repeatFactor = 7;
  const repeatImages = Array.from({ length: repeatFactor }, () => applicationImages).flat();

  return (
      <section
          className="py-10 px-10 md:px-40 flex flex-col items-center justify-center gap-10 bg-gray-100 scroll-mt-20 dark:bg-gray-700"
          id="application"
      >
        <h2 className={`${fjalla.className} text-3xl md:text-5xl font-semibold text-[#95A5A6]`}>
          Our Applications
        </h2>
        <div className="overflow-hidden h-[92px] w-full relative">
          <div className="w-[4000px] absolute top-0 left-0 bottom-0 flex items-center justify-between flex-nowrap translate- gap-10 marquee-Application">
            {repeatImages.map((item, index) => (
                <React.Fragment key={index}>
                  {/* Wrap each Image with an anchor tag */}
                  {/* <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer"> */}
                    <Image
                        src={item.imgUrl}
                        alt={item.alt}
                        width={100}
                        height={100}
                        className="w-auto h-auto object-contain"
                    />
                    <p className="text-xs">{item.name}</p> {/* Add name below the image */}
                  {/* </a> */}
                </React.Fragment>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Application;