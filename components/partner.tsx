import { fjalla } from "@/app/font";
import { partnerImages } from "@/constant";
import Image from "next/image";
import React from "react";

const Partner = () => {
  const repeatFactor = 7;
  const repeatImages = Array.from({ length: repeatFactor }, () => partnerImages).flat();

  return (
      <section
          className="py-10 px-10 md:px-40 flex flex-col items-center justify-center gap-10 bg-gray-100 scroll-mt-20 dark:bg-gray-300"
          id="partner"
      >
        <h2 className={`${fjalla.className} text-3xl md:text-5xl font-semibold text-[#95A5A6]`}>
          Our Partners
        </h2>
        <div className="overflow-hidden h-[92px] w-full relative">
          <div className="w-[4000px] absolute top-0 left-0 bottom-0 flex items-center justify-between flex-nowrap translate- gap-10 marquee-partner">
            {repeatImages.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col h-[200px] items-center justify-center">
                  <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={item.imgUrl}
                        alt={item.alt}
                        width={200}
                        height={200}
                        className="w-auto h-auto object-contain"
                    />
                  </a></div>
                </React.Fragment>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Partner;


// import { fjalla } from "@/app/font";
// import { partnerImages } from "@/constant";
// import Image from "next/image";
// import React from "react";
//
// const Partner = () => {
//   const repeatFactor = 7;
//   const repeatImages = Array.from(
//     { length: repeatFactor },
//     () => partnerImages
//   ).flat();
//
//   return (
//     <section
//       className="py-10 px-10 md:px-40 flex flex-col items-center justify-center gap-10 bg-gray-100 scroll-mt-20 dark:bg-gray-700"
//       id="partner"
//     >
//       <h2
//         className={`${fjalla.className} text-3xl md:text-5xl font-semibold text-[#95A5A6]`}
//       >
//         Our Partners
//       </h2>
//       <div className="overflow-hidden h-[92px] w-full relative">
//         <div className="w-[4000px] absolute top-0 left-0 bottom-0 flex items-center justify-between flex-nowrap translate- gap-10 marquee-partner">
//           {repeatImages.map((item, index) => (
//             <React.Fragment key={index}>
//               <Image
//                 src={item.imgUrl}
//                 alt={item.alt}
//                 width={100}
//                 height={100}
//                 className="w-auto h-auto object-contain"
//               />
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Partner;
