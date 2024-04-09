import { fjalla } from "@/app/font";
import { applicationImages } from "@/constant";
import Image from "next/image";
import React from "react";

const Application = () => {
  const repeatFactor = 16;
  const repeatImages = Array.from({ length: repeatFactor }, () => applicationImages).flat();

  return (
    <section
      className="py-10 px-10 md:px-40 flex flex-col items-center justify-center gap-10 bg-gray-100 scroll-mt-20 dark:bg-gray-300"
      id="application"
    >
      <h2 className={`${fjalla.className} text-3xl md:text-5xl font-semibold text-[#95A5A6]`}>
        Our Applications
      </h2>
      <div className="overflow-hidden h-[200px] w-full relative">
        <div className="w-[4000px] absolute top-0 left-0 bottom-0 flex items-center justify-between flex-nowrap translate- gap-10 marquee-application">
          {repeatImages.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col h-[200px] w-[200px] items-center justify-center">
                <Image
                  src={item.imgUrl}
                  alt={item.alt}
                  width={100}
                  height={100}
                  className="w-auto h-auto object-fill"
                />
                <p className="text-xs text-center">{item.alt}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Application;
