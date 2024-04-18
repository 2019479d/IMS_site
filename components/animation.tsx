import Image from "next/image";
import React from "react";

const Animation = () => {
  return (
    <div className="hidden md:block absolute right-0 w-[80%] h-[100%]">
      <div className="relative bg-blue w-full h-full">
        <div
          id="id01"
          className="z-10 absolute bottom-[20%] left-3 h-fit w-fit flex flex-col items-center justify-center"
        >
          <Image
            src="/measuring.png"
            alt="Measuring"
            width={50}
            height={50}
            className="opacity-50 w-auto h-auto bg-gray-100 py-3 px-3 rounded-full"
            style={{ opacity: 0.42 }} // Adjust the opacity value as needed (from 0 to 1)

          />
          <span className="font-semibold text-white">Measuring</span>
        </div>

        <div className="z-10 group absolute top-[44%] left-[20%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/airplane.png"
            alt="Plane"
            width={50}
            height={50}
            className="w-auto group h-auto bg-gray-100 py-3 px-3 rounded-full"
            style={{ opacity: 0.42 }} // Adjust the opacity value as needed (from 0 to 1)

          />
          <Image
            src="/planeReal.jpg"
            alt="Plane"
            width={130}
            height={130}
            className="hidden group-hover:block absolute -bottom-[8rem] left-0 rounded-lg"
          />
          <span className="font-semibold text-white">Aerospace</span>

        </div>

        <div className="z-10 group absolute bottom-[5%] left-[20%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/ship.png"
            alt="Plane"
            width={50}
            height={50}
            className="w-auto group h-auto bg-gray-100 py-3 px-3 rounded-full"
            style={{ opacity: 0.42 }} // Adjust the opacity value as needed (from 0 to 1)

          />
          <Image
            src="/shipReal.jpg"
            alt="Plane"
            width={130}
            height={130}
            className="hidden group-hover:block absolute -top-[9rem] left-0 rounded-lg"

          />
          <span className="font-semibold text-white">Maritime</span>
        </div>

        <div className="z-10 group absolute bottom-[5%] left-[55%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/train.png"
            alt="Plane"
            width={50}
            height={50}
            className="w-auto group h-auto bg-gray-100 py-3 px-3 rounded-full"
            style={{ opacity: 0.42 }} // Adjust the opacity value as needed (from 0 to 1)

          />
          <Image
            src="/trainReal.jpg"
            alt="Plane"
            width={130}
            height={130}
            className="hidden group-hover:block absolute -top-[9rem] left-0 rounded-lg"

          />
          <span className="font-semibold text-white">Railway</span>  
        </div>

        <div className="z-10 group absolute bottom-[5%] right-[8%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/electric-car.png"
            alt="Plane"
            width={50}
            height={50}
            className="w-auto group h-auto bg-gray-100 py-3 px-3 rounded-full"
            style={{ opacity: 0.42 }} // Adjust the opacity value as needed (from 0 to 1)

          />
          <Image
            src="/carReal.jpg"
            alt="Plane"
            width={130}
            height={130}
            className="hidden group-hover:block absolute -top-[9rem] left-0 rounded-lg"
            
          />
          <span className="font-semibold text-white">Automobile</span>
        </div>

        <div className="z-10 absolute top-[15%] right-[10%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/motion-sensor.png"
            alt="Measuring"
            width={50}
            height={50}
            className="w-auto h-auto bg-contain px-2 py-2 bg-gray-100 !object-contain rounded-full"
            style={{ opacity: 0.42 }} // Adjust the opacity value as needed (from 0 to 1)

          />
          <span className="font-semibold text-white">Smart in Motion</span>
        </div>

        <div className="z-10 absolute top-[40%] right-[35%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/analyse.png"
            alt="Analysing"
            width={50}
            height={50}
            className="w-auto h-auto bg-contain px-2 py-2 bg-gray-100 !object-contain rounded-full"
            style={{ opacity: 0.42 }} // Adjust the opacity value as needed (from 0 to 1)

          />
          <span className="font-semibold text-white text-base">Analysing</span>
        </div>

        <div className="z-10 absolute bottom-[35%] right-[2%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/monitoring.png"
            alt="Monitoring"
            width={50}
            height={50}
            className="w-auto h-auto bg-contain px-2 py-2 m-2 bg-gray-100 !object-contain rounded-full"
            style={{ opacity: 0.42 }} // Adjust the opacity value as needed (from 0 to 1)

          />
          <span className="font-semibold text-white text-sm">Monitoring</span>
        </div>`

        <div className="z-10 absolute bottom-[25%] left-[40%] h-fit w-fit flex flex-col items-center justify-center">
          <Image
            src="/testing.png"
            alt="Testing"
            width={50}
            height={50}
            className="w-auto h-auto bg-contain px-2 py-2 m-2 bg-gray-100 !object-contain rounded-full"
            style={{ opacity: 0.42 }} // Adjust the opacity value as needed (from 0 to 1)

          />
          <span className="font-semibold text-white">Testing</span>
        </div>
        <div className="-z-1 absolute bottom-[45%] left-[20%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px] plane-anim-1"></div>
        <div className="-z-1 absolute bottom-[42%] left-[23.5%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px] plane-anim-2"></div>
        <div className="-z-1 absolute bottom-[45%] left-[27%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px] plane-anim-3"></div>
        <div className="-z-1 absolute top-[48%] left-[28%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[55%] h-[5px] plane-anim-4"></div>
        <div className="-z-1 absolute bottom-[31%] left-[9%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[30%] h-[5px] measuring-anim-1"></div>
        <div className="-z-1 absolute bottom-[25%] left-[8%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px]  measuring-anim-2"></div>
        <div className="-z-1 absolute bottom-[10%] left-[27.5%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[27%] h-[5px] ship-anim-1"></div>
        <div className="-z-1 absolute bottom-[10%] left-[63%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[20%] h-[5px] train-anim-1"></div>
        <div className="-z-1 absolute bottom-[37%] left-[46.5%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px] testing-anim-1"></div>
        <div className="-z-1 absolute bottom-[29%] left-[46%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px] rotate-[37deg] testing-anim-2"></div>
        <div className="-z-1 absolute top-[40%] right-[16%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[18%] h-[5px] testing-analyzing-1"></div>
        <div className="-z-1 absolute top-[49%] right-[10%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[25%] h-[5px] testing-analyzing-2"></div>
        <div className="-z-1 absolute top-[51%] right-[11%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[25%] h-[5px] testing-analyzing-3"></div>
        <div className="-z-1 absolute bottom-[20%] right-[1%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[10%] h-[5px] testing-car-1"></div>
        <div className="-z-1 absolute bottom-[49%] -right-[7%] rounded-md bg-gradient-to-r from-orange-500 to-black/10 w-[14%] h-[5px] testing-monitoring-1"></div>
      </div>
    </div>
  );
};

export default Animation;
