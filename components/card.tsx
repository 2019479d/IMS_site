import { urlForImage } from "@/lib/sanity.client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  image: SanityImageSource;
};

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="w-[20rem] h-[30rem] custom-shadow rounded-2xl flex flex-col gap-5 items-center justify-between py-5 bg-[#355fc18f]">
      <div className="w-[90%] h-[15rem] px-1 bg-white rounded-tl-2xl rounded-br-2xl mx-auto">
        <Image
          src={urlForImage(image).url()}
          alt={title}
          width={300}
          height={300}
          className="w-full h-[15rem] object-contain rounded-t-xl"
        />
      </div>
      <h4 className="font-semibold bg-[#f39d1290] w-full px-4 py-3 text-white text-center">
        {title}
      </h4>
      <div className=" flex-1 mt-5 px-4 flex flex-col items-start justify-start gap-4 bg-transparent">
        <p className="line-clamp-5 text-xs font-medium text-[#1f1f1f] text-justify dark:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
