import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import GradientBorder from 'components/shared/gradient-border';

const Card = ({
  size,
  textPosition = 'bottom',
  title,
  description,
  image,
  className,
  borderGradient,
}) => {
  const sizeClasses =
    size === 'big'
      ? 'h-[480px] xl:h-[406px] md:h-[320px] sm:h-[298px] xs:h-[356px] xs:w-full'
      : 'h-[260px] xl:h-[216px] md:h-[194px] sm:h-[224px] xs:w-full';

  const justifyClass = size === 'big' && textPosition === 'top' ? 'justify-start' : 'justify-end';

  return (
    <li
      className={clsx(
        'relative overflow-hidden rounded-[13px] xl:rounded-[10px] md:rounded-lg',
        sizeClasses,
        className
      )}
    >
      <div
        className={clsx(
          'relative z-20 flex h-full w-full flex-col p-6 xl:p-5 md:p-3.5',
          justifyClass
        )}
      >
        <div>
          <h3 className="text-[18px] font-medium leading-denser tracking-snug text-white md:text-[16px]">
            {title}
          </h3>
          <p
            className="mt-2 text-[15px] font-light leading-snug tracking-snug text-gray-8 lg:mt-1.5 md:mt-1.5 md:text-sm"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
      {image}
      <GradientBorder className={borderGradient} />
    </li>
  );
};

const Bento = ({ title, description }) => (
  <div className="bento mt-[274px] lg:mt-[218px] md:mt-[181px] sm:mt-[174px]">
    <div className="container-md flex flex-col items-center">
      <h2 className="text-center text-[48px] font-medium leading-denser tracking-snug lg:text-5xl md:text-[32px] sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-[600px] text-center text-lg leading-normal tracking-snug text-gray-8 lg:mt-2.5 md:max-w-[500px] md:text-[16px] sm:max-w-none">
          {description}
        </p>
      )}
    </div>
    <div className="relative mx-auto mt-12 grid max-w-[1216px] grid-cols-3 gap-8 xl:max-w-[960px] xl:gap-6 md:mt-11 md:max-w-[736px] md:gap-4 md:px-4 sm:px-5 xs:max-w-[360px] xs:grid-cols-1">
      <ul className="grid gap-8 xl:gap-6 md:gap-4">
        <Card
          size="big"
          textPosition="top"
          title="User Preferences"
          className="bg-pink-home-bento"
          borderGradient="border-image-[radial-gradient(34.26%_73.65%_at_62.43%_-12.44%,_#27222F_0%,_#27222F_100%)]"
          description="Allow users to customize their preferences using the built-in <Preferences /> component."
          image={
            <StaticImage
              className="!absolute inset-0 z-10 rounded-[13px] xl:rounded-[10px] xl:[mask-image:linear-gradient(180deg,transparent_20%,white_30%)] md:rounded-lg xs:[mask-image:none] [&_img]:!object-contain [&_img]:object-bottom xs:[&_img]:!object-cover xs:[&_img]:object-top"
              src="./images/card-1.png"
              alt=""
              width={384}
              height={480}
              quality={100}
              aria-hidden
            />
          }
        />
        <Card
          size="small"
          title="Snooze"
          description="Let users Snooze a message to when they will need it most."
          className="bg-[#08070E] bg-blue-home-bento sm:[background-image:none]"
          borderGradient="border-image-[radial-gradient(67.76%_87.87%_at_97.19%_-1.15%,_#344E8D_14.12%,_#1E2334_38.93%)]"
          image={
            <StaticImage
              className="!absolute inset-0 z-10 rounded-[13px] xl:rounded-[10px] xl:[mask-image:linear-gradient(0deg,transparent_35%,white_45%)] md:rounded-lg xs:[mask-image:none] [&_img]:!object-contain [&_img]:object-top xs:[&_img]:!object-cover"
              src="./images/card-4.png"
              alt=""
              width={384}
              height={260}
              quality={100}
              aria-hidden
            />
          }
        />
      </ul>
      <ul className="grid gap-8 xl:gap-6 md:gap-4">
        <Card
          size="small"
          title="Real-time"
          description="Enable real-time notification delivery in your dashboard with zero setup."
          className="bg-[#08070E] bg-blue-home-bento xs:order-2"
          borderGradient="border-image-[radial-gradient(68.42%_54.05%_at_0%_35.69%,_#243349_9.84%,_#1E2334_22.52%)]"
          image={
            <StaticImage
              className="!absolute inset-0 z-10 rounded-[13px] xl:rounded-[10px] xl:[mask-image:linear-gradient(0deg,transparent_30%,white_50%)] md:rounded-lg xs:[mask-image:none] [&_img]:!object-contain [&_img]:object-top xs:[&_img]:!object-cover"
              src="./images/card-2.png"
              alt=""
              width={384}
              height={260}
              quality={100}
              aria-hidden
            />
          }
        />
        <Card
          size="big"
          textPosition="top"
          title="Workflow Orchestration"
          description="Unified API for multi-channel notification workflows."
          className="bg-[#08070E] bg-green-home-bento xs:order-1"
          borderGradient="border-image-[radial-gradient(171.34%_72.8%_at_50%_0%,_#1E2334_0%,_#1E2334_22.52%)]"
          image={
            <StaticImage
              className="!absolute inset-0 z-10 rounded-[13px] xl:rounded-[10px] xl:[mask-image:linear-gradient(180deg,transparent_20%,white_30%)] md:rounded-lg xs:[mask-image:none] [&_img]:!object-contain [&_img]:object-bottom xs:[&_img]:!object-cover xs:[&_img]:object-top"
              src="./images/card-5.png"
              alt=""
              width={384}
              height={480}
              quality={100}
              aria-hidden
            />
          }
        />
      </ul>
      <ul className="grid gap-8 xl:gap-6 md:gap-4">
        <Card
          size="big"
          title="Digest Engine"
          description="Combine multiple notifications in to a single Email or SMS message."
          className="bg-[#08070E] bg-green-home-bento"
          borderGradient="border-image-[radial-gradient(77.03%_100%_at_6.77%_0%,_#326167_14.12%,_#1E2334_38.93%)]"
          image={
            <StaticImage
              className="!absolute inset-0 z-10 rounded-[13px] xl:rounded-[10px] xl:[mask-image:linear-gradient(0deg,transparent_20%,white_30%)] md:rounded-lg xs:[mask-image:none] [&_img]:!object-contain [&_img]:object-top xs:[&_img]:!object-cover xs:[&_img]:object-bottom"
              src="./images/card-3.png"
              alt=""
              width={384}
              height={480}
              quality={100}
              aria-hidden
            />
          }
        />
        <Card
          size="small"
          title="Block Based Email Editor"
          description="Create beautiful customizable emails with our block based editor."
          className="bg-pink-home-bento"
          borderGradient="border-image-[radial-gradient(34.62%_102.89%_at_21.26%_-2.89%,_#352131_0%,_#27222F_37.85%)]"
          image={
            <StaticImage
              className="!absolute inset-0 z-10 rounded-[13px] xl:rounded-[10px] xl:[mask-image:linear-gradient(0deg,transparent_35%,white_45%)] md:rounded-lg xs:[mask-image:none] [&_img]:!object-contain [&_img]:object-top xs:[&_img]:!object-cover"
              src="./images/card-6.png"
              alt=""
              width={384}
              height={260}
              quality={100}
              aria-hidden
            />
          }
        />
      </ul>
      <div className="absolute -right-[134px] -top-[78px] z-0 h-[394px] w-[400px] rounded-[50%] bg-[radial-gradient(92.52%_89.86%_at_62.86%_11.06%,_#3BDCFF_27.2%,_#69B7FF_80.5%,_#4759FF_100%)] opacity-[0.06] blur-3xl lg:-right-[112px] lg:-top-[80px] lg:h-[277px] lg:w-[282px] md:-right-[66px] md:-top-[56px] md:h-[203px] md:w-[206px] sm:hidden" />
      <div className="absolute -bottom-[92px] -left-[114px] z-0 h-[420px] w-[564px] rounded-[50%] bg-[radial-gradient(92.52%_89.86%_at_62.86%_11.06%,_#6789FF_27.2%,_#69B7FF_80.5%,_#4786FF_100%)] opacity-[0.06] blur-3xl lg:-bottom-[74px] lg:-left-[118px] lg:h-[304px] lg:w-[408px] md:-bottom-[79px] md:-left-[101px] md:h-[222px] md:w-[298px] sm:hidden" />
    </div>
  </div>
);

export default Bento;
