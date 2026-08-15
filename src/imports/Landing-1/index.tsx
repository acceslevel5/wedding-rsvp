import { useState, useEffect, useRef, useLayoutEffect } from "react";
import svgPaths from "./svg-u7hmm6k8ko";
import imgWhiteRecyclePaperTexture1 from "./b571be2bd644fad5e661573ed90aa6140b66ff99.png";
import imgLocationAsset from "./locationasset.png";
import imgShukuraLogo from "./shukura.svg";
import imgRoomsLogo from "./roomslogo.svg";

interface BlurFadeProps {
  children: any;
  delay?: number;
  duration?: number;
  blur?: string;
  yOffset?: string;
  className?: string;
}

export function BlurFade({
  children,
  delay = 0,
  duration = 0.8,
  blur = "8px",
  yOffset = "10px",
  className = "w-full",
}: BlurFadeProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        filter: isInView ? "blur(0px)" : `blur(${blur})`,
        transform: isInView ? "translateY(0px)" : `translateY(${yOffset})`,
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: "opacity, filter, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

export function BlurFadeWords({
  text,
  duration = 0.6,
  blur = "8px",
  yOffset = "6px",
  delayOffset = 0.04,
}: {
  text: string;
  duration?: number;
  blur?: string;
  yOffset?: string;
  delayOffset?: number;
}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const words = text.split(/(\s+)/);

  return (
    <div ref={ref} className="inline-block w-full">
      {words.map((word, idx) => {
        if (word.trim() === "") {
          return <span key={idx}>{word}</span>;
        }
        return (
          <span
            key={idx}
            className="inline-block"
            style={{
              opacity: isInView ? 1 : 0,
              filter: isInView ? "blur(0px)" : `blur(${blur})`,
              transform: isInView ? "translateY(0px)" : `translateY(${yOffset})`,
              transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), filter ${duration}s cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
              transitionDelay: `${idx * delayOffset}s`,
              willChange: "opacity, filter, transform",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}

export function MaskRevealWords({
  text,
  duration = 1.2,
  yOffset = "110%",
  delayOffset = 0.15,
  easing = "cubic-bezier(0, 0.6, 0.1, 1)",
}: {
  text: string;
  duration?: number;
  yOffset?: string;
  delayOffset?: number;
  easing?: string;
}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const words = text.split(/(\s+)/);

  return (
    <div ref={ref} className="inline-block w-full text-center">
      {words.map((word, idx) => {
        if (word.trim() === "") {
          return <span key={idx}>{word}</span>;
        }
        return (
          <span
            key={idx}
            className="inline-block overflow-hidden"
            style={{ verticalAlign: "bottom" }}
          >
            <span
              className="inline-block will-change-transform"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : `translateY(${yOffset})`,
                transition: `transform ${duration}s ${easing}, opacity ${duration}s ${easing}`,
                transitionDelay: `${idx * delayOffset}s`,
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function RevealContainer({
  children,
  delay = 0,
  duration = 1.2,
  yOffset = "30px",
  easing = "cubic-bezier(0, 0.6, 0.1, 1)",
}: {
  children: any;
  delay?: number;
  duration?: number;
  yOffset?: string;
  easing?: string;
}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : `translateY(${yOffset})`,
        transition: `transform ${duration}s ${easing} ${delay}s, opacity ${duration}s ${easing} ${delay}s`,
        willChange: "transform, opacity",
      }}
      className="w-full flex justify-center"
    >
      {children}
    </div>
  );
}

export function RevealAbsolute({
  children,
  className,
  delay = 0,
  duration = 1.2,
  yOffset = "30px",
  easing = "cubic-bezier(0, 0.6, 0.1, 1)",
}: {
  children: any;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: string;
  easing?: string;
}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : `translateY(${yOffset})`,
        transition: `transform ${duration}s ${easing} ${delay}s, opacity ${duration}s ${easing} ${delay}s`,
        willChange: "transform, opacity",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

import imgPhotoboothMachine from "./photobooth_machine.png";
import imgPhotostrip from "./photostrip.png";
import imgSubtract from "./444e9235245eef74dc951c60d71a7716988d0f8f.png";
import imgHeroThumbnail from "./0bde0fb7b7298f91fba64b1eb2c05eacd15fb39f.png";
import imgUnion from "./ad38b9bb655a8094ac3dd084c0e2364783073b46.png";
import imgImage5 from "./53cfc58b69a6f626a5ab1a7f438be72ddb5386cc.png";
import imgImage6 from "./132f16979643c122ddccab209a5e5aa9833d5684.png";
import imgImage7 from "./b133bae01bcd5af90bb9d43ae535df601b7f910a.png";
import imgChatGptImageJul302026053346Pm1 from "./8ed55586378b51b60ffe40ab2a2a49c2a38cbcd5.png";
import imgImage9 from "./6c590bc9a68493798aa84d309533e423f2f3e3c8.png";
import imgImage11 from "./1613d811fda01150e34828fa74a702460eabab63.png";
import imgImage12 from "./a82a9ee50e31e80118eb5016ff78bc5d1e8f8062.png";
import imgImage10 from "./672fa1b57ac1ff3c7c0332d5f72735c8d31c49f7.png";
import imgImage8 from "./7a7a1fda92711f7908f867f3b7d1545ad7a40b15.png";
import imgHolyCeremony from "./holyceremony.png";

function Bg() {
  const tiles = Array.from({ length: 17 });
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[710px] overflow-hidden" style={{ height: "6790px" }} data-name="BG">
      {tiles.map((_, idx) => (
        <div key={idx} className="relative shrink-0 size-[402px]" data-name={`white-recycle-paper-texture ${idx + 1}`}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteRecyclePaperTexture1} />
        </div>
      ))}
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[14px] h-[60px] items-center justify-center relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] relative shrink-0 text-[36px] tracking-[-0.72px]">Save</p>
      <p className="font-['Babylonica:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[40px]">the</p>
      <p className="font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] relative shrink-0 text-[36px] tracking-[-0.72px]">Date</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[155px] items-center justify-end relative shrink-0 w-full" data-name="Frame">
      <p className="font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] relative shrink-0 text-[56px] w-full">20.09.2026</p>
      <p className="font-['Ballet:Regular',sans-serif] leading-[normal] relative shrink-0 text-[48px] w-full">Tsikhisdziri</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[14px] h-[60px] items-center justify-center relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] relative shrink-0 text-[36px] tracking-[-0.72px]">Datuna</p>
      <p className="font-['Babylonica:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[40px]">{`&`}</p>
      <p className="font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] relative shrink-0 text-[36px] tracking-[-0.72px]">Natura</p>
    </div>
  );
}

function Container() {
  return (
    <div className="[word-break:break-word] absolute z-10 content-stretch flex flex-col h-[874px] items-start justify-between left-0 not-italic py-[48px] text-[#ffe16c] text-center top-0 w-[402px]" data-name="Container">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 h-[50.231px] ml-0 mt-0 relative row-1 w-[62.582px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="50.2313" preserveAspectRatio="none" viewBox="0 0 62.5821 50.2313" width="62.5821">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2333cc00} fill="#B11625" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3fe30900} fill="#B8162D" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3fc3da00} fill="#C02941" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.pd0b6af0} fill="#D1465D" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p202b9500} fill="#C32A3F" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p7918780} fill="#EBD7D6" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p2652c180} fill="#DA5C73" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.pf53c000} fill="#CC334B" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p46cd300} fill="#E7B9C0" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p1d4c0700} fill="#EBCCCE" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p39999f00} fill="#E7B9C0" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p678c800} fill="#D76F7F" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p4a25900} fill="#B6223B" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p7389100} fill="#D2495E" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p3d762b00} fill="#C23C4F" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p280f2900} fill="#D2495E" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p182be380} fill="#CD556F" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p1cc12200} fill="#C0465D" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p1db04080} fill="#C1425B" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.p20215100} fill="#AC3449" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p21902500} fill="#CB506A" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p32125f00} fill="#D3737E" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p9a19780} fill="#E8919E" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p804d080} fill="#DF838F" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p3a866a00} fill="#BA1B39" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.p3f338f80} fill="#BC354B" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.p8e5a580} fill="#C92E49" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.p3d988000} fill="#AE1A2E" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p10565400} fill="#971629" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p28d3f3f0} fill="#E5A1AD" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.p3da71100} fill="#D7677A" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.p27718480} fill="#E28EA0" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.p3ada2c80} fill="#DB6F81" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p31662e00} fill="#DB7887" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p147c0b00} fill="#D1848B" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.pf564a80} fill="#E6ABB9" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.p252be00} fill="#F1C1CC" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p367760f0} fill="#C62439" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.p26549500} fill="#C02037" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.p38e8faf0} fill="#C0172D" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p36e5c5f0} fill="#C62439" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.p2aa52200} fill="#C8263B" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p2b0ecc00} fill="#D74253" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.p3bc24c00} fill="#DB4456" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p2c006a00} fill="#980C13" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p87a1c00} fill="#D33D50" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.p1cbfdd80} fill="#B20C22" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.p1375a080} fill="#B91A32" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.p8061b00} fill="#DD4F67" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p2c5abc00} fill="#D1465D" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.p2cb37200} fill="#D1465D" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.p2f807cc0} fill="#C6253C" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.p2763b680} fill="#B61B2E" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.p3c1ba800} fill="#C23F5E" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.pefc800} fill="#CB506A" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.pe3d4770} fill="#C84760" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.p3484900} fill="#D7647F" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p33b28200} fill="#DF7085" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p1584e280} fill="#CE556E" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.p3ef02300} fill="#C0253F" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p2bf5d100} fill="#CF3751" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.p2c984420} fill="#E45C73" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.p3503dd00} fill="#E3596F" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p246eb640} fill="#B4273A" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.p28119b80} fill="#C92E49" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p16621580} fill="#CC3750" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p382d8a80} fill="#D44D62" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.p3875ec00} fill="#B0374A" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.p2b4cfb00} fill="#E37E95" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.p18ea5780} fill="#C01730" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p3dc06fc0} fill="#D13A50" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.pad90180} fill="#AD1E2B" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p151ec700} fill="#C13348" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.p2cf65500} fill="#B8283D" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p26cb0300} fill="#C6415E" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.p381e2580} fill="#E2768F" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p26bccb40} fill="#B32744" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p1dd6ecf0} fill="#C84760" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p39377b80} fill="#BC2D4A" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.paf9dd00} fill="#C14860" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p207afef0} fill="#BB3F5E" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p3f4afb80} fill="#DD6683" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.pd160f00} fill="#CD5867" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p24882740} fill="#E07D8C" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.p8b4b5c0} fill="#CF5B6A" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p1f367600} fill="#ED94A5" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p35aa100} fill="#D7677A" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.p23074f80} fill="#EA8798" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.p2d594600} fill="#ED94A5" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p1a00cf80} fill="#D7677A" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p19baa00} fill="#D35971" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.pc0e2900} fill="#E6ABB3" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.p1375d100} fill="#DB6F81" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.p39f6af00} fill="#E79AA7" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p1f61d200} fill="#AF091B" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p251614c0} fill="#C72845" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.p13441f0} fill="#E79AA7" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.p2a670800} fill="#D88594" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.pb3e7900} fill="#DE97A2" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.p1da15000} fill="#D1465D" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.p3ba66800} fill="#BE1226" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.p21e0d600} fill="#D84157" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p2b25c800} fill="#B51020" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p277b8b40} fill="#B7172F" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p19afd600} fill="#C8263B" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.p3b3e4d80} fill="#D83C53" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.p39352e00} fill="#C0172D" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.p296a36c4} fill="#C8263B" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.pa598000} fill="#DC425B" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p397fe400} fill="#DC475E" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p206f2a80} fill="#DE5366" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p32f34f00} fill="#DB5F7C" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.p36759000} fill="#CF4B67" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p4d0a500} fill="#B32E4B" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p19cf7d80} fill="#B62C47" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.p6881700} fill="#BC2E4A" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.p18eee300} fill="#DA5D7A" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p38eaa900} fill="#CD4E66" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.pa6e0000} fill="#BC2D43" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.p39d37500} fill="#E66E8D" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p45dfe71} fill="#DA677B" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.p2312c900} fill="#D05167" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p2c77be80} fill="#CC5267" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.p39d92700} fill="#E27286" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.p7bc4400} fill="#D45C73" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p2bf8c400} fill="#DB667D" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p367c7880} fill="#D45B6E" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.p2e9f4700} fill="#D7677A" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.p1bccb500} fill="#E98195" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p10e75200} fill="#E58098" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p18a91f00} fill="#D8415E" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p2f2c1500} fill="#D8415E" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p11c0aa00} fill="#CF3751" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.p14008ec0} fill="#E55976" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.p148a3f00} fill="#AB0E22" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p17d32a80} fill="#C01730" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p227f900} fill="#CD243D" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p2cbe72f0} fill="#D93D5C" fillRule="evenodd" id="Vector_138" />
          <path clipRule="evenodd" d={svgPaths.p3af55b00} fill="#CC2641" fillRule="evenodd" id="Vector_139" />
          <path clipRule="evenodd" d={svgPaths.p3aaa2500} fill="#AF091B" fillRule="evenodd" id="Vector_140" />
          <path clipRule="evenodd" d={svgPaths.p1b4aec00} fill="#C4253A" fillRule="evenodd" id="Vector_141" />
          <path clipRule="evenodd" d={svgPaths.p1bb29500} fill="#F48CA1" fillRule="evenodd" id="Vector_142" />
          <path clipRule="evenodd" d={svgPaths.p378c5800} fill="#DB5D7B" fillRule="evenodd" id="Vector_143" />
          <path clipRule="evenodd" d={svgPaths.p33845300} fill="#D05167" fillRule="evenodd" id="Vector_144" />
          <path clipRule="evenodd" d={svgPaths.p130c07f0} fill="#CD4E66" fillRule="evenodd" id="Vector_145" />
          <path clipRule="evenodd" d={svgPaths.pf190500} fill="#D05167" fillRule="evenodd" id="Vector_146" />
          <path clipRule="evenodd" d={svgPaths.p38e3a370} fill="#C84760" fillRule="evenodd" id="Vector_147" />
          <path clipRule="evenodd" d={svgPaths.p26e91f00} fill="#D05167" fillRule="evenodd" id="Vector_148" />
          <path clipRule="evenodd" d={svgPaths.p3b841480} fill="#C33C50" fillRule="evenodd" id="Vector_149" />
          <path clipRule="evenodd" d={svgPaths.pe6b1640} fill="#C01730" fillRule="evenodd" id="Vector_150" />
          <path clipRule="evenodd" d={svgPaths.p16751900} fill="#E77794" fillRule="evenodd" id="Vector_151" />
          <path clipRule="evenodd" d={svgPaths.p419cd80} fill="#CB475F" fillRule="evenodd" id="Vector_152" />
          <path clipRule="evenodd" d={svgPaths.p6e061f0} fill="#BC3346" fillRule="evenodd" id="Vector_153" />
          <path clipRule="evenodd" d={svgPaths.p53b7400} fill="#DF6E89" fillRule="evenodd" id="Vector_154" />
          <path clipRule="evenodd" d={svgPaths.p3d259a00} fill="#CB596F" fillRule="evenodd" id="Vector_155" />
          <path clipRule="evenodd" d={svgPaths.p1c325b00} fill="#EA8094" fillRule="evenodd" id="Vector_156" />
          <path clipRule="evenodd" d={svgPaths.p249da600} fill="#C0324F" fillRule="evenodd" id="Vector_157" />
          <path clipRule="evenodd" d={svgPaths.p2740fd40} fill="#D25568" fillRule="evenodd" id="Vector_158" />
          <path clipRule="evenodd" d={svgPaths.p3fe13100} fill="#C03D4F" fillRule="evenodd" id="Vector_159" />
          <path clipRule="evenodd" d={svgPaths.p23d4e500} fill="#DF6E89" fillRule="evenodd" id="Vector_160" />
          <path clipRule="evenodd" d={svgPaths.p10938d40} fill="#DF6E89" fillRule="evenodd" id="Vector_161" />
          <path clipRule="evenodd" d={svgPaths.p351efb00} fill="#DF6E89" fillRule="evenodd" id="Vector_162" />
          <path clipRule="evenodd" d={svgPaths.p36c17300} fill="#DB667D" fillRule="evenodd" id="Vector_163" />
          <path clipRule="evenodd" d={svgPaths.p8522db0} fill="#E67F9F" fillRule="evenodd" id="Vector_164" />
          <path clipRule="evenodd" d={svgPaths.p24ff600} fill="#EB809E" fillRule="evenodd" id="Vector_165" />
          <path clipRule="evenodd" d={svgPaths.p641a200} fill="#CC5272" fillRule="evenodd" id="Vector_166" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 h-[43.417px] ml-[58.61px] mt-[2.12px] relative row-1 w-[68.478px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="43.4171" preserveAspectRatio="none" viewBox="0 0 68.4781 43.4171" width="68.4781">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3a819700} fill="#B11625" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p298bbf00} fill="#B8162D" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p319a9f40} fill="#C02941" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p379b0100} fill="#D1465D" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p17c9bc00} fill="#C32A3F" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p8ac0680} fill="#EBD7D6" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p22641600} fill="#DA5C73" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1dd9ae00} fill="#CC334B" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p24a79a80} fill="#E7B9C0" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p30580c00} fill="#EBCCCE" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.pcf31370} fill="#E7B9C0" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p17b26400} fill="#D76F7F" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p117bd700} fill="#B6223B" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p1cf89280} fill="#D2495E" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p13d58000} fill="#C23C4F" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p25644000} fill="#D2495E" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p1329600} fill="#CD556F" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p1c84b700} fill="#C0465D" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p3cd141c0} fill="#C1425B" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.pfe89e00} fill="#AC3449" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p1b394300} fill="#CB506A" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p1ca7670} fill="#D3737E" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p55a7800} fill="#E8919E" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p6b57400} fill="#DF838F" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p1217a880} fill="#BA1B39" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.pf51780} fill="#BC354B" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.p3972ad00} fill="#C92E49" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.p4ab4d20} fill="#AE1A2E" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p33641f00} fill="#971629" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p3d838f00} fill="#E5A1AD" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.p87573c0} fill="#D7677A" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.p3e922f00} fill="#E28EA0" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.pfaaa500} fill="#DB6F81" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p288b6d00} fill="#DB7887" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p174b2bf0} fill="#D1848B" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.p60a8900} fill="#E6ABB9" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.p394e1100} fill="#F1C1CC" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p1c292480} fill="#C62439" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.p3172900} fill="#C02037" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.pbba6700} fill="#C0172D" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p337a5700} fill="#C62439" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.p16c02480} fill="#C8263B" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p149ca970} fill="#D74253" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.p205d1c00} fill="#DB4456" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p16e8be00} fill="#980C13" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p3941b1f0} fill="#D33D50" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.p1139d680} fill="#B20C22" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.p10c0ae00} fill="#B91A32" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.p3851ee80} fill="#DD4F67" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p21699280} fill="#D1465D" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.p225e2280} fill="#D1465D" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.p18f2ad00} fill="#C6253C" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.ped46100} fill="#B61B2E" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.pbee3780} fill="#C23F5E" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.p8f85580} fill="#CB506A" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.p12433000} fill="#C84760" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.p304f9000} fill="#D7647F" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p2c16c000} fill="#DF7085" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p6807680} fill="#CE556E" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.p326f5380} fill="#C0253F" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p1dadd300} fill="#CF3751" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.p2cbaf100} fill="#E45C73" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.p1fb30600} fill="#E3596F" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.pcc00b00} fill="#B4273A" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.p39ab71c0} fill="#C92E49" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p1e51dc80} fill="#CC3750" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p3d1c7f00} fill="#D44D62" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.p3a3a6a00} fill="#B0374A" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.p21d24900} fill="#E37E95" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.p304b7600} fill="#C01730" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p17c21780} fill="#D13A50" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.p8300000} fill="#AD1E2B" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p24697e72} fill="#C13348" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.p2e3b7400} fill="#B8283D" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p31f41d00} fill="#C6415E" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.p16ac4200} fill="#E2768F" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p353ad200} fill="#B32744" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.pe79b380} fill="#C84760" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p672eb00} fill="#BC2D4A" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.p2df25a00} fill="#C14860" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p19e8ff00} fill="#BB3F5E" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p53a9380} fill="#DD6683" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.p52d6680} fill="#CD5867" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p2ab0b580} fill="#E07D8C" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.p41a4a00} fill="#CF5B6A" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p2e03e600} fill="#ED94A5" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p28491080} fill="#D7677A" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.p2328fc90} fill="#EA8798" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.p21360c00} fill="#ED94A5" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p32707180} fill="#D7677A" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p2ab1d680} fill="#D35971" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.pc73ab80} fill="#E6ABB3" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.p10204400} fill="#DB6F81" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.pea75d00} fill="#E79AA7" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p31e2b700} fill="#AF091B" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p240cf00} fill="#C72845" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.p2da02500} fill="#E79AA7" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.p1e1f1000} fill="#D88594" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.p24689380} fill="#DE97A2" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.p32c4c800} fill="#D1465D" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.p5d69580} fill="#BE1226" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.pa586890} fill="#D84157" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p283aaa70} fill="#B51020" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p18e8c740} fill="#B7172F" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p14c34500} fill="#C8263B" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.p3dbca800} fill="#D83C53" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.pf15f700} fill="#C0172D" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.p28fde200} fill="#C8263B" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.p2e0a8380} fill="#DC425B" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p1b0d0500} fill="#DC475E" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p1d792700} fill="#DE5366" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p1175c700} fill="#DB5F7C" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.p3e1d0080} fill="#CF4B67" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p2b000130} fill="#B32E4B" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p31285600} fill="#B62C47" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.p32856800} fill="#BC2E4A" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.p18aea180} fill="#DA5D7A" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p2b850980} fill="#CD4E66" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.p2c613780} fill="#BC2D43" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.p32d78e00} fill="#E66E8D" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p21fb3a00} fill="#DA677B" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.p38454a00} fill="#D05167" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p2beb2980} fill="#CC5267" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.p23b18380} fill="#E27286" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.p1f29f080} fill="#D45C73" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p23071980} fill="#DB667D" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p30563c00} fill="#D45B6E" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.peb16f80} fill="#D7677A" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.p135cdf80} fill="#E98195" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p23b7de80} fill="#E58098" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p2d496300} fill="#D8415E" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p3438e780} fill="#D8415E" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p206e3d00} fill="#CF3751" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.p2c26cc00} fill="#E55976" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.p2a026400} fill="#AB0E22" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p3df5e180} fill="#C01730" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p3b25080} fill="#CD243D" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p11947200} fill="#D93D5C" fillRule="evenodd" id="Vector_138" />
          <path clipRule="evenodd" d={svgPaths.pe687f00} fill="#CC2641" fillRule="evenodd" id="Vector_139" />
          <path clipRule="evenodd" d={svgPaths.p27fc0c00} fill="#AF091B" fillRule="evenodd" id="Vector_140" />
          <path clipRule="evenodd" d={svgPaths.p3c116900} fill="#C4253A" fillRule="evenodd" id="Vector_141" />
          <path clipRule="evenodd" d={svgPaths.p3319940} fill="#F48CA1" fillRule="evenodd" id="Vector_142" />
          <path clipRule="evenodd" d={svgPaths.p5f0c080} fill="#DB5D7B" fillRule="evenodd" id="Vector_143" />
          <path clipRule="evenodd" d={svgPaths.p255f49c0} fill="#D05167" fillRule="evenodd" id="Vector_144" />
          <path clipRule="evenodd" d={svgPaths.p2aac400} fill="#CD4E66" fillRule="evenodd" id="Vector_145" />
          <path clipRule="evenodd" d={svgPaths.p3cf16480} fill="#D05167" fillRule="evenodd" id="Vector_146" />
          <path clipRule="evenodd" d={svgPaths.p6546480} fill="#C84760" fillRule="evenodd" id="Vector_147" />
          <path clipRule="evenodd" d={svgPaths.p28263b80} fill="#D05167" fillRule="evenodd" id="Vector_148" />
          <path clipRule="evenodd" d={svgPaths.p27db5c00} fill="#C33C50" fillRule="evenodd" id="Vector_149" />
          <path clipRule="evenodd" d={svgPaths.p19537a00} fill="#C01730" fillRule="evenodd" id="Vector_150" />
          <path clipRule="evenodd" d={svgPaths.p2b6e2572} fill="#E77794" fillRule="evenodd" id="Vector_151" />
          <path clipRule="evenodd" d={svgPaths.p22892380} fill="#CB475F" fillRule="evenodd" id="Vector_152" />
          <path clipRule="evenodd" d={svgPaths.p29af2480} fill="#BC3346" fillRule="evenodd" id="Vector_153" />
          <path clipRule="evenodd" d={svgPaths.p23f57300} fill="#DF6E89" fillRule="evenodd" id="Vector_154" />
          <path clipRule="evenodd" d={svgPaths.p1b206280} fill="#CB596F" fillRule="evenodd" id="Vector_155" />
          <path clipRule="evenodd" d={svgPaths.p3dca8180} fill="#EA8094" fillRule="evenodd" id="Vector_156" />
          <path clipRule="evenodd" d={svgPaths.p17237800} fill="#C0324F" fillRule="evenodd" id="Vector_157" />
          <path clipRule="evenodd" d={svgPaths.p1f3ffb00} fill="#D25568" fillRule="evenodd" id="Vector_158" />
          <path clipRule="evenodd" d={svgPaths.p2f140600} fill="#C03D4F" fillRule="evenodd" id="Vector_159" />
          <path clipRule="evenodd" d={svgPaths.p30fe9900} fill="#DF6E89" fillRule="evenodd" id="Vector_160" />
          <path clipRule="evenodd" d={svgPaths.p2be03180} fill="#DF6E89" fillRule="evenodd" id="Vector_161" />
          <path clipRule="evenodd" d={svgPaths.p20608700} fill="#DF6E89" fillRule="evenodd" id="Vector_162" />
          <path clipRule="evenodd" d={svgPaths.pdc5500} fill="#DB667D" fillRule="evenodd" id="Vector_163" />
          <path clipRule="evenodd" d={svgPaths.p1ebe11d0} fill="#E67F9F" fillRule="evenodd" id="Vector_164" />
          <path clipRule="evenodd" d={svgPaths.p2b6a8500} fill="#EB809E" fillRule="evenodd" id="Vector_165" />
          <path clipRule="evenodd" d={svgPaths.p2734f000} fill="#CC5272" fillRule="evenodd" id="Vector_166" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Cormorant_Garamond:Medium_Italic',sans-serif] font-medium gap-[16px] italic items-start leading-[normal] relative shrink-0 text-[#2a2e2b] text-[18px] text-center tracking-[-0.09px] w-full" data-name="Text">
      <RevealContainer delay={0} yOffset="24px">
        <p className="relative shrink-0 w-full">We’re so excited to share this special day with you! As we begin our journey together, we’d love for you to join us in celebrating our big day</p>
      </RevealContainer>
      <RevealContainer delay={0.2} yOffset="24px">
        <p className="relative shrink-0 w-full">Let’s make memories that will last a lifetime!</p>
      </RevealContainer>
    </div>
  );
}

function Button() {
  const title = encodeURIComponent("Datuna & Natura's Wedding");
  const details = encodeURIComponent("We are so excited to share this special day with you! Venue: Shukura, Tsikhisdziri.");
  const location = encodeURIComponent("Shukura, Tsikhisdziri, Kobuleti, Georgia");
  const startDate = "20260920T120000Z";
  const endDate = "20260921T000000Z";
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;

  return (
    <a
      href={googleCalendarUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="[word-break:break-word] bg-[#ffe16c] content-stretch flex gap-[12px] items-center justify-center not-italic px-[36px] py-[2px] relative rounded-[1000px] shrink-0 text-black text-center whitespace-nowrap no-underline cursor-pointer hover:scale-[1.03] active:scale-[0.98] transition-all"
      data-name="Button"
    >
      <p className="font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] relative shrink-0 text-[24px] tracking-[-0.48px]">Add</p>
      <p className="font-['Babylonica:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[28px]">to</p>
      <p className="font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] relative shrink-0 text-[24px] tracking-[-0.48px]">Calendar</p>
    </a>
  );
}

function Group4() {
  return (
    <div className="col-1 h-[50.231px] ml-0 mt-0 relative row-1 w-[62.582px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="50.2313" preserveAspectRatio="none" viewBox="0 0 62.5821 50.2313" width="62.5821">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2bbb4080} fill="#B11625" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pa44f080} fill="#B8162D" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1446e500} fill="#C02941" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p11ab1200} fill="#D1465D" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p21a7c00} fill="#C32A3F" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p23acb300} fill="#EBD7D6" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p4967300} fill="#DA5C73" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p33609d00} fill="#CC334B" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p206e9170} fill="#E7B9C0" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p2b781c80} fill="#EBCCCE" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p37450bc0} fill="#E7B9C0" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p128ed900} fill="#D76F7F" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p3644d00} fill="#B6223B" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p1bfd0400} fill="#D2495E" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p1201ed80} fill="#C23C4F" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p18370c80} fill="#D2495E" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p12c3c900} fill="#CD556F" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p24a6600} fill="#C0465D" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p19fc2ff0} fill="#C1425B" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.p34fae780} fill="#AC3449" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p1cbaed00} fill="#CB506A" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p352d2c00} fill="#D3737E" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p3bbcb800} fill="#E8919E" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p3f428900} fill="#DF838F" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p2a1c5480} fill="#BA1B39" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.pe7fdb80} fill="#BC354B" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.p10727300} fill="#C92E49" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.p1d5d3e80} fill="#AE1A2E" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p3bd39100} fill="#971629" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p35e39380} fill="#E5A1AD" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.p28a0b800} fill="#D7677A" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.p1964ee70} fill="#E28EA0" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.p84ac300} fill="#DB6F81" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p15dfd500} fill="#DB7887" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p275d5000} fill="#D1848B" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.p281a1b00} fill="#E6ABB9" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.p2c1d3e80} fill="#F1C1CC" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p26302c00} fill="#C62439" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.p1325df00} fill="#C02037" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.p3deeba00} fill="#C0172D" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p31da0400} fill="#C62439" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.p395e4b00} fill="#C8263B" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p1cc691f0} fill="#D74253" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.p3fb80b00} fill="#DB4456" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p198c7200} fill="#980C13" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p1caebb00} fill="#D33D50" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.p358f9a00} fill="#B20C22" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.p1e289700} fill="#B91A32" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.pb5df000} fill="#DD4F67" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p97fcc00} fill="#D1465D" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.pbb21a00} fill="#D1465D" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.p100f9d00} fill="#C6253C" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.p26320a00} fill="#B61B2E" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.p340a7f00} fill="#C23F5E" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.p3b68bb0} fill="#CB506A" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.p27bdbd20} fill="#C84760" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.p15845300} fill="#D7647F" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p8efb700} fill="#DF7085" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p389c600} fill="#CE556E" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.pa958500} fill="#C0253F" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p2aaca80} fill="#CF3751" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.pbec4c00} fill="#E45C73" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.p1b838f00} fill="#E3596F" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p39032000} fill="#B4273A" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.p152f0f40} fill="#C92E49" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p25854f00} fill="#CC3750" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p2b38d780} fill="#D44D62" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.pea39300} fill="#B0374A" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.pa3a5900} fill="#E37E95" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.pc28600} fill="#C01730" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p2ed4ce80} fill="#D13A50" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.p3918aa00} fill="#AD1E2B" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p2a454e80} fill="#C13348" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.p343c9e00} fill="#B8283D" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p2ccfc000} fill="#C6415E" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.p2b298e80} fill="#E2768F" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.pb2217f0} fill="#B32744" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p28641e00} fill="#C84760" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p38e50880} fill="#BC2D4A" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.p191d3700} fill="#C14860" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p24482900} fill="#BB3F5E" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p3c52e860} fill="#DD6683" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.p56e4f80} fill="#CD5867" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p626700} fill="#E07D8C" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.p25391d80} fill="#CF5B6A" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p2c7a3200} fill="#ED94A5" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p26f8f800} fill="#D7677A" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.p11dc7f80} fill="#EA8798" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.p17cfcd90} fill="#ED94A5" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p2c521500} fill="#D7677A" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p3ac3100} fill="#D35971" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.p173ee800} fill="#E6ABB3" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.p33bd4f00} fill="#DB6F81" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.p7f8b980} fill="#E79AA7" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p1bfb8440} fill="#AF091B" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p1003f800} fill="#C72845" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.p39cb7b00} fill="#E79AA7" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.p127cb400} fill="#D88594" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.p588980} fill="#DE97A2" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.p363e8a00} fill="#D1465D" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.pd55ff0} fill="#BE1226" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.p2cf36580} fill="#D84157" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p3497e9f0} fill="#B51020" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p13fb9400} fill="#B7172F" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p2fd19b80} fill="#C8263B" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.p12a02600} fill="#D83C53" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.p1638380} fill="#C0172D" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.p1215a780} fill="#C8263B" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.p318aba00} fill="#DC425B" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p19f65800} fill="#DC475E" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p1d585d00} fill="#DE5366" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p31e2de00} fill="#DB5F7C" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.p2cbf3a00} fill="#CF4B67" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p2806bbc0} fill="#B32E4B" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p28bc0600} fill="#B62C47" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.p13057200} fill="#BC2E4A" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.p2f779580} fill="#DA5D7A" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p2dfdb180} fill="#CD4E66" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.p4ede600} fill="#BC2D43" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.p1ebb9700} fill="#E66E8D" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p24588680} fill="#DA677B" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.p3ebe2600} fill="#D05167" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p1f938f00} fill="#CC5267" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.p27896080} fill="#E27286" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.p342d1df0} fill="#D45C73" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p12d8ef00} fill="#DB667D" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p152d4580} fill="#D45B6E" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.p3b16ea00} fill="#D7677A" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.p21f45780} fill="#E98195" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p2d920400} fill="#E58098" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p30ff6780} fill="#D8415E" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p214fca80} fill="#D8415E" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p25f269f0} fill="#CF3751" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.p3cf3ae00} fill="#E55976" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.p12b24900} fill="#AB0E22" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p3aac1b00} fill="#C01730" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p28426100} fill="#CD243D" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p270e4800} fill="#D93D5C" fillRule="evenodd" id="Vector_138" />
          <path clipRule="evenodd" d={svgPaths.p4ef1700} fill="#CC2641" fillRule="evenodd" id="Vector_139" />
          <path clipRule="evenodd" d={svgPaths.p348c4e80} fill="#AF091B" fillRule="evenodd" id="Vector_140" />
          <path clipRule="evenodd" d={svgPaths.p59ff100} fill="#C4253A" fillRule="evenodd" id="Vector_141" />
          <path clipRule="evenodd" d={svgPaths.p19ee8600} fill="#F48CA1" fillRule="evenodd" id="Vector_142" />
          <path clipRule="evenodd" d={svgPaths.p1d059100} fill="#DB5D7B" fillRule="evenodd" id="Vector_143" />
          <path clipRule="evenodd" d={svgPaths.pcd33d80} fill="#D05167" fillRule="evenodd" id="Vector_144" />
          <path clipRule="evenodd" d={svgPaths.p11261180} fill="#CD4E66" fillRule="evenodd" id="Vector_145" />
          <path clipRule="evenodd" d={svgPaths.p38f0ad80} fill="#D05167" fillRule="evenodd" id="Vector_146" />
          <path clipRule="evenodd" d={svgPaths.p351a580} fill="#C84760" fillRule="evenodd" id="Vector_147" />
          <path clipRule="evenodd" d={svgPaths.p1fae5500} fill="#D05167" fillRule="evenodd" id="Vector_148" />
          <path clipRule="evenodd" d={svgPaths.peabd7e0} fill="#C33C50" fillRule="evenodd" id="Vector_149" />
          <path clipRule="evenodd" d={svgPaths.p27258c70} fill="#C01730" fillRule="evenodd" id="Vector_150" />
          <path clipRule="evenodd" d={svgPaths.p3a048370} fill="#E77794" fillRule="evenodd" id="Vector_151" />
          <path clipRule="evenodd" d={svgPaths.pfa23200} fill="#CB475F" fillRule="evenodd" id="Vector_152" />
          <path clipRule="evenodd" d={svgPaths.p27db9400} fill="#BC3346" fillRule="evenodd" id="Vector_153" />
          <path clipRule="evenodd" d={svgPaths.p11ecbd80} fill="#DF6E89" fillRule="evenodd" id="Vector_154" />
          <path clipRule="evenodd" d={svgPaths.p2fd19a90} fill="#CB596F" fillRule="evenodd" id="Vector_155" />
          <path clipRule="evenodd" d={svgPaths.p17ecda00} fill="#EA8094" fillRule="evenodd" id="Vector_156" />
          <path clipRule="evenodd" d={svgPaths.p9e00} fill="#C0324F" fillRule="evenodd" id="Vector_157" />
          <path clipRule="evenodd" d={svgPaths.p1066f500} fill="#D25568" fillRule="evenodd" id="Vector_158" />
          <path clipRule="evenodd" d={svgPaths.p1afd7100} fill="#C03D4F" fillRule="evenodd" id="Vector_159" />
          <path clipRule="evenodd" d={svgPaths.p357a9a80} fill="#DF6E89" fillRule="evenodd" id="Vector_160" />
          <path clipRule="evenodd" d={svgPaths.p6b534c0} fill="#DF6E89" fillRule="evenodd" id="Vector_161" />
          <path clipRule="evenodd" d={svgPaths.p148d9d80} fill="#DF6E89" fillRule="evenodd" id="Vector_162" />
          <path clipRule="evenodd" d={svgPaths.pa335480} fill="#DB667D" fillRule="evenodd" id="Vector_163" />
          <path clipRule="evenodd" d={svgPaths.p29af1200} fill="#E67F9F" fillRule="evenodd" id="Vector_164" />
          <path clipRule="evenodd" d={svgPaths.p11934400} fill="#EB809E" fillRule="evenodd" id="Vector_165" />
          <path clipRule="evenodd" d={svgPaths.p1fc3cf80} fill="#CC5272" fillRule="evenodd" id="Vector_166" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 h-[43.417px] ml-[58.61px] mt-[4.69px] relative row-1 w-[68.478px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="43.4171" preserveAspectRatio="none" viewBox="0 0 68.4781 43.4171" width="68.4781">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1b8c86f0} fill="#B11625" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p466f200} fill="#B8162D" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3d8c9ea0} fill="#C02941" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p2f0a9f00} fill="#D1465D" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.pebb5580} fill="#C32A3F" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p27454c00} fill="#EBD7D6" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p1cedf380} fill="#DA5C73" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p6f11600} fill="#CC334B" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.pffd500} fill="#E7B9C0" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p18f39e40} fill="#EBCCCE" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p3cd49600} fill="#E7B9C0" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p3cb23a00} fill="#D76F7F" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p3d85e000} fill="#B6223B" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p10019e40} fill="#D2495E" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p1a962400} fill="#C23C4F" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p302cdc00} fill="#D2495E" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p8810b00} fill="#CD556F" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p40e2500} fill="#C0465D" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p394c7b80} fill="#C1425B" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.p166ecc00} fill="#AC3449" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p150fdb00} fill="#CB506A" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p1d4e9600} fill="#D3737E" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p2687f500} fill="#E8919E" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p2cf4db80} fill="#DF838F" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p2193cb80} fill="#BA1B39" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.p191c080} fill="#BC354B" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.p1c331600} fill="#C92E49" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.peaf380} fill="#AE1A2E" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p2ffa2380} fill="#971629" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p1106fdf0} fill="#E5A1AD" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.p36abe800} fill="#D7677A" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.p1d83f100} fill="#E28EA0" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.p2cb80a00} fill="#DB6F81" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p39828f70} fill="#DB7887" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p256b3480} fill="#D1848B" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.pa79a600} fill="#E6ABB9" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.p25c5500} fill="#F1C1CC" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p3e7a5280} fill="#C62439" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.pd1a3e00} fill="#C02037" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.p3bb71180} fill="#C0172D" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p2c2ed700} fill="#C62439" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.p38887170} fill="#C8263B" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p3712cc00} fill="#D74253" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.p28566500} fill="#DB4456" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p2bbe3dc0} fill="#980C13" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p1ef6d180} fill="#D33D50" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.pe6b6e00} fill="#B20C22" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.pfa7f080} fill="#B91A32" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.p28d78a00} fill="#DD4F67" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p336cb00} fill="#D1465D" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.p3d71b980} fill="#D1465D" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.p2cf84600} fill="#C6253C" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.p7b26980} fill="#B61B2E" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.pc81480} fill="#C23F5E" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.p1d745c00} fill="#CB506A" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.p17b5c300} fill="#C84760" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.p3e3d9800} fill="#D7647F" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p897c80} fill="#DF7085" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p18cc9e80} fill="#CE556E" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.p23e80870} fill="#C0253F" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p3b32ca00} fill="#CF3751" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.p1ab15a00} fill="#E45C73" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.pe647200} fill="#E3596F" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p1f1d6200} fill="#B4273A" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.p18b7cf00} fill="#C92E49" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p17361c80} fill="#CC3750" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.pf623080} fill="#D44D62" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.p186cf200} fill="#B0374A" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.p9cf0d00} fill="#E37E95" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.p2e53c0f0} fill="#C01730" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p2f9e9a00} fill="#D13A50" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.pb0b7200} fill="#AD1E2B" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p38550400} fill="#C13348" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.p235a6600} fill="#B8283D" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p3debd380} fill="#C6415E" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.p287ba000} fill="#E2768F" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p368aa7c0} fill="#B32744" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p17832f70} fill="#C84760" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p23b06780} fill="#BC2D4A" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.p25407ac0} fill="#C14860" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p2af33f00} fill="#BB3F5E" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p4afe880} fill="#DD6683" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.p2f096e00} fill="#CD5867" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p268a9200} fill="#E07D8C" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.p4af8900} fill="#CF5B6A" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p22397180} fill="#ED94A5" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p34122c00} fill="#D7677A" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.p13054000} fill="#EA8798" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.p2e628b00} fill="#ED94A5" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p1f3ce480} fill="#D7677A" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p2313c980} fill="#D35971" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.p246ad5f0} fill="#E6ABB3" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.pca10500} fill="#DB6F81" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.p1b28e100} fill="#E79AA7" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p5c6900} fill="#AF091B" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p582d800} fill="#C72845" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.pfbf5f00} fill="#E79AA7" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.p3d8d1000} fill="#D88594" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.p8396e00} fill="#DE97A2" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.p287d74c0} fill="#D1465D" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.p3ca96a00} fill="#BE1226" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.p72c0700} fill="#D84157" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p31e61600} fill="#B51020" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p176ef480} fill="#B7172F" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p23a8b300} fill="#C8263B" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.p38c3d980} fill="#D83C53" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.p10910000} fill="#C0172D" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.p283a400} fill="#C8263B" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.p20ad7580} fill="#DC425B" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p36c7d080} fill="#DC475E" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p1a0e9c80} fill="#DE5366" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p2d896f00} fill="#DB5F7C" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.p259a5d00} fill="#CF4B67" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p4a47000} fill="#B32E4B" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p2a7d9780} fill="#B62C47" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.p1a266d80} fill="#BC2E4A" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.pc005180} fill="#DA5D7A" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p4897d00} fill="#CD4E66" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.p1d43680} fill="#BC2D43" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.p2bca1900} fill="#E66E8D" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p1e24e480} fill="#DA677B" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.p20478e00} fill="#D05167" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p333bf100} fill="#CC5267" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.p10223f00} fill="#E27286" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.p327a0600} fill="#D45C73" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p380de700} fill="#DB667D" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p15097b00} fill="#D45B6E" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.p1b238c00} fill="#D7677A" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.p15120300} fill="#E98195" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p17a2b140} fill="#E58098" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p2d6b2c00} fill="#D8415E" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p5eeb600} fill="#D8415E" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p140c8300} fill="#CF3751" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.paec0700} fill="#E55976" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.pd5f8600} fill="#AB0E22" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p1dffa900} fill="#C01730" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p15486900} fill="#CD243D" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p2215c800} fill="#D93D5C" fillRule="evenodd" id="Vector_138" />
          <path clipRule="evenodd" d={svgPaths.p3791d600} fill="#CC2641" fillRule="evenodd" id="Vector_139" />
          <path clipRule="evenodd" d={svgPaths.pec57e00} fill="#AF091B" fillRule="evenodd" id="Vector_140" />
          <path clipRule="evenodd" d={svgPaths.pad46900} fill="#C4253A" fillRule="evenodd" id="Vector_141" />
          <path clipRule="evenodd" d={svgPaths.p66aaab0} fill="#F48CA1" fillRule="evenodd" id="Vector_142" />
          <path clipRule="evenodd" d={svgPaths.p3269a300} fill="#DB5D7B" fillRule="evenodd" id="Vector_143" />
          <path clipRule="evenodd" d={svgPaths.p39f3e1f2} fill="#D05167" fillRule="evenodd" id="Vector_144" />
          <path clipRule="evenodd" d={svgPaths.p82ff180} fill="#CD4E66" fillRule="evenodd" id="Vector_145" />
          <path clipRule="evenodd" d={svgPaths.p3a632780} fill="#D05167" fillRule="evenodd" id="Vector_146" />
          <path clipRule="evenodd" d={svgPaths.p3f42700} fill="#C84760" fillRule="evenodd" id="Vector_147" />
          <path clipRule="evenodd" d={svgPaths.pe101570} fill="#D05167" fillRule="evenodd" id="Vector_148" />
          <path clipRule="evenodd" d={svgPaths.p18cdf100} fill="#C33C50" fillRule="evenodd" id="Vector_149" />
          <path clipRule="evenodd" d={svgPaths.p329c9280} fill="#C01730" fillRule="evenodd" id="Vector_150" />
          <path clipRule="evenodd" d={svgPaths.p36d4e000} fill="#E77794" fillRule="evenodd" id="Vector_151" />
          <path clipRule="evenodd" d={svgPaths.p91b8480} fill="#CB475F" fillRule="evenodd" id="Vector_152" />
          <path clipRule="evenodd" d={svgPaths.p2e815200} fill="#BC3346" fillRule="evenodd" id="Vector_153" />
          <path clipRule="evenodd" d={svgPaths.p41cb000} fill="#DF6E89" fillRule="evenodd" id="Vector_154" />
          <path clipRule="evenodd" d={svgPaths.p21abfd00} fill="#CB596F" fillRule="evenodd" id="Vector_155" />
          <path clipRule="evenodd" d={svgPaths.pc9c2a80} fill="#EA8094" fillRule="evenodd" id="Vector_156" />
          <path clipRule="evenodd" d={svgPaths.pcd7a180} fill="#C0324F" fillRule="evenodd" id="Vector_157" />
          <path clipRule="evenodd" d={svgPaths.p4781300} fill="#D25568" fillRule="evenodd" id="Vector_158" />
          <path clipRule="evenodd" d={svgPaths.p31dba7f0} fill="#C03D4F" fillRule="evenodd" id="Vector_159" />
          <path clipRule="evenodd" d={svgPaths.p17ab7300} fill="#DF6E89" fillRule="evenodd" id="Vector_160" />
          <path clipRule="evenodd" d={svgPaths.p2b406b00} fill="#DF6E89" fillRule="evenodd" id="Vector_161" />
          <path clipRule="evenodd" d={svgPaths.p18a2b1f0} fill="#DF6E89" fillRule="evenodd" id="Vector_162" />
          <path clipRule="evenodd" d={svgPaths.p2a1c2b00} fill="#DB667D" fillRule="evenodd" id="Vector_163" />
          <path clipRule="evenodd" d={svgPaths.p1b49c00} fill="#E67F9F" fillRule="evenodd" id="Vector_164" />
          <path clipRule="evenodd" d={svgPaths.p3c4b43f0} fill="#EB809E" fillRule="evenodd" id="Vector_165" />
          <path clipRule="evenodd" d={svgPaths.p25017880} fill="#CC5272" fillRule="evenodd" id="Vector_166" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
      <Group4 />
      <Group5 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-0 px-[64px] pt-[80px] pb-[120px] top-[1584px] w-[402px]" data-name="Section">
      <Group />
      <Text />
      <RevealContainer delay={0.4}>
        <Button />
      </RevealContainer>
      <Group3 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-0" data-name="Layer 1">
      <svg className="absolute block inset-0 size-full" fill="none" height="64" preserveAspectRatio="none" viewBox="0 0 69.6454 64" width="69.6454">
        <g id="Group">
          <path d={svgPaths.pc639c00} fill="white" id="Vector" />
          <path d={svgPaths.pec8bf80} fill="white" id="Vector_2" />
          <path d={svgPaths.p39a93ff0} fill="white" id="Vector_3" />
          <path d={svgPaths.p3a1d1100} fill="white" id="Vector_4" />
          <path d={svgPaths.p1c3d4500} fill="white" id="Vector_5" />
          <path d={svgPaths.p1f66e500} fill="white" id="Vector_6" />
          <path d={svgPaths.p27a0c180} fill="white" id="Vector_7" />
          <path d={svgPaths.p3bde3bf0} fill="white" id="Vector_8" />
          <path d={svgPaths.p29686e00} fill="white" id="Vector_9" />
          <path d={svgPaths.p36902380} fill="white" id="Vector_10" />
          <path d={svgPaths.p25fce680} fill="white" id="Vector_11" />
          <path d={svgPaths.p12f36480} fill="white" id="Vector_12" />
          <path d={svgPaths.p34a76700} fill="white" id="Vector_13" />
          <path d={svgPaths.p2fedaa00} fill="white" id="Vector_14" />
          <path d={svgPaths.p352f1380} fill="white" id="Vector_15" />
          <path d={svgPaths.p239d9f00} fill="white" id="Vector_16" />
          <path d={svgPaths.p1b8a4f10} fill="white" id="Vector_17" />
          <path d={svgPaths.p3ab18c00} fill="white" id="Vector_18" />
          <path d={svgPaths.p207e780} fill="white" id="Vector_19" />
        </g>
      </svg>
    </div>
  );
}

function RoomsBatumi() {
  return (
    <div className="h-[64px] overflow-clip relative shrink-0 w-[69.645px]" data-name="RoomsBatumi 1">
      <Layer />
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-center text-white w-full">
      <p className="font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[36px] tracking-[-0.72px] whitespace-nowrap">
        <BlurFadeWords text="Accomodation" />
      </p>
      <p className="font-['Cormorant_Garamond:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[18px] tracking-[-0.09px] w-[min-content]">
        <BlurFadeWords text="Enjoy an exclusive wedding rate at Rooms Hotel Batumi, reserved especially for our guests." />
      </p>
    </div>
  );
}

const ROOMS_DATA = [
  {
    id: 1,
    title: "Junior King Room Old Town View",
    description: "A spacious room features with a king-size bed, wooden accents, a balcony and a sitting area. Enjoy views of the old town.",
    singleRate: "90 USD",
    doubleRate: "110 USD",
    image: imgImage5,
    link: "https://roomshotels.com/batumi/"
  },
  {
    id: 2,
    title: "Signature King Room Old Town View",
    description: "A large room with a king-size bed, wooden accents, a sitting area and a balcony with old-town views.",
    singleRate: "100 USD",
    doubleRate: "120 USD",
    image: imgImage6,
    link: "https://roomshotels.com/batumi/"
  },
  {
    id: 3,
    title: "Signature King Room Sea View",
    description: "This room offers a king-size bed, wooden accents, a sitting area and a balcony with sea views.",
    singleRate: "110 USD",
    doubleRate: "130 USD",
    image: imgImage7,
    link: "https://roomshotels.com/batumi/"
  },
  {
    id: 4,
    title: "King Room Old Town View",
    description: "Features a plush king-size bed, wooden design accents, and a private balcony overlooking Batumi's charming old town.",
    singleRate: "85 USD",
    doubleRate: "105 USD",
    image: imgImage5,
    link: "https://roomshotels.com/batumi/"
  },
  {
    id: 5,
    title: "Twin Room Old Town View",
    description: "Offers two comfortable single beds, warm wooden interior touches, and views of the historic town.",
    singleRate: "85 USD",
    doubleRate: "105 USD",
    image: imgImage6,
    link: "https://roomshotels.com/batumi/"
  },
  {
    id: 6,
    title: "King Room Sea View",
    description: "Stunning Black Sea views accompanied by a comfortable king-size bed, modern amenities, and private balcony.",
    singleRate: "95 USD",
    doubleRate: "115 USD",
    image: imgImage7,
    link: "https://roomshotels.com/batumi/"
  },
  {
    id: 7,
    title: "Twin Room Sea View",
    description: "Features twin beds and floor-to-ceiling windows with panoramic Black Sea scenery and a private balcony.",
    singleRate: "95 USD",
    doubleRate: "115 USD",
    image: imgImage5,
    link: "https://roomshotels.com/batumi/"
  },
  {
    id: 8,
    title: "Executive Suite Old Town View",
    description: "Expansive suite featuring separate living and sleeping areas, premium wooden finishes, and dual balconies.",
    singleRate: "140 USD",
    doubleRate: "160 USD",
    image: imgImage6,
    link: "https://roomshotels.com/batumi/"
  },
  {
    id: 9,
    title: "Executive Suite Sea View",
    description: "Luxury suite with breathtaking sea vistas, spacious lounge area, plush king bed, and private terrace.",
    singleRate: "160 USD",
    doubleRate: "180 USD",
    image: imgImage7,
    link: "https://roomshotels.com/batumi/"
  },
  {
    id: 10,
    title: "Corner Suite Sea View",
    description: "Corner positioning provides 270-degree views of the sea and city coastline, complete with custom design elements.",
    singleRate: "180 USD",
    doubleRate: "200 USD",
    image: imgImage5,
    link: "https://roomshotels.com/batumi/"
  },
  {
    id: 11,
    title: "Rooms Penthouse Suite",
    description: "Top-floor penthouse featuring unmatched sea views, expansive private terrace, master bedroom, and dining lounge.",
    singleRate: "250 USD",
    doubleRate: "270 USD",
    image: imgImage6,
    link: "https://roomshotels.com/batumi/"
  }
];

function RoomCardsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const cardWidth = 360;
    const index = Math.round(target.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), ROOMS_DATA.length - 1));
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Scrollable Snap Container */}
      <div 
        onScroll={handleScroll}
        className="w-full flex overflow-x-auto snap-x snap-mandatory gap-[16px] px-[16px] py-1 scrollbar-none no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `.no-scrollbar::-webkit-scrollbar { display: none; }`}} />
        {ROOMS_DATA.map((room) => (
          <a
            key={room.id}
            href={room.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[344px] shrink-0 bg-white snap-center flex flex-col p-[12px] shadow-xs rounded-none text-decoration-none text-black hover:opacity-95 transition-opacity"
          >
            {/* Image */}
            <div className="w-full h-[195px] overflow-hidden bg-gray-100 mb-[12px]">
              <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
            </div>

            {/* Title */}
            <h3 className="font-['Cormorant_Garamond',serif] text-[20px] font-semibold text-center text-[#2A2E2B] leading-tight mb-2">
              {room.title}
            </h3>

            {/* Description */}
            <p 
              className="text-center mb-[12px] min-h-[30px]"
              style={{
                color: '#000',
                textAlign: 'center',
                fontFamily: '"Google Sans Flex", sans-serif',
                fontSize: '11px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '115%',
                letterSpacing: '-0.22px',
                opacity: 0.6,
              }}
            >
              {room.description}
            </p>

            {/* Divider Line & Rates Block (12px top and bottom gaps) */}
            <div className="w-full border-t border-gray-200/80 pt-[12px] pb-[4px]">
              <div className="text-center">
                <span style={{ color: '#000', fontFamily: '"PP Pangaia", sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 200, lineHeight: '115%', letterSpacing: '-0.28px' }}>
                  Single Occupancy - 
                </span>
                <span style={{ color: '#000', fontFamily: '"PP Pangaia", sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 500, lineHeight: '115%', letterSpacing: '-0.28px' }}>
                  {room.singleRate}
                </span>
                <span style={{ color: '#000', fontFamily: '"PP Pangaia", sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 200, lineHeight: '115%', letterSpacing: '-0.28px' }}>
                  &nbsp; Double Occupancy - 
                </span>
                <span style={{ color: '#000', fontFamily: '"PP Pangaia", sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 500, lineHeight: '115%', letterSpacing: '-0.28px' }}>
                  {room.doubleRate}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination Dots (16px below carousel) */}
      <div className="flex items-center justify-center gap-1.5 mt-[16px]">
        {ROOMS_DATA.map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex 
                ? 'w-[16px] h-[6px] bg-[#2A2E2B]' 
                : 'w-[6px] h-[6px] bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function AccommodationPage({ onBack }: { onBack?: () => void }) {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  const fontStyle: React.CSSProperties = {
    color: '#2A2E2B',
    textAlign: 'center',
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.08px',
  };

  return (
    <div 
      className="bg-[#f7f5ef] overflow-y-auto w-full min-h-screen flex flex-col items-center"
      style={{ 
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0px)' : 'translateY(16px)',
        transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        WebkitOverflowScrolling: 'touch' 
      }}
    >
      <div className="w-full max-w-[402px] flex flex-col items-center pt-6 pb-[40px] relative shrink-0">
        {/* Top Section */}
        <div 
          className="relative flex flex-col items-center w-full px-[16px] shrink-0"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0px)' : 'translateY(16px)',
            transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.30s, transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.30s',
            willChange: 'opacity, transform',
          }}
        >
          {/* Back Button */}
          <button 
            onClick={handleBack} 
            className="absolute left-[16px] top-0 w-10 h-10 bg-white rounded-xl shadow-xs flex items-center justify-center cursor-pointer hover:bg-gray-50 active:scale-95 transition-all z-20"
            aria-label="Go back"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Rooms Logo (roomslogo.svg 104x32) */}
          <div className="pt-1 flex justify-center w-full">
            <img src={imgRoomsLogo} alt="Rooms Hotels Logo" className="w-[104px] h-[32px] object-contain" />
          </div>

          {/* Text Block (24px below logo) */}
          <div className="w-full text-center mt-[24px] space-y-[16px]">
            <p style={fontStyle}>
              For reservations and further information, please contact Rooms Hotel Batumi using the details below.
            </p>
            <p style={fontStyle}>
              Kindly mention “Datuna & Natia Wedding” when booking to receive the special rate available for stays from 19–22 September.
            </p>
          </div>

          {/* Contact Action Pills (24px below text block) */}
          <div className="flex flex-row items-center gap-[8px] w-full mt-[24px] justify-center">
            <a 
              href="mailto:dghambashidze@roomshotels.com" 
              className="flex items-center justify-center gap-[4px] bg-[#FFF] border border-gray-200/80 rounded-[32px] px-[12px] py-[8px] hover:bg-gray-50 transition-colors shrink-0"
              style={{
                boxSizing: 'border-box',
                color: '#000',
                fontFamily: '"Google Sans Flex", sans-serif',
                fontSize: '11px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '115%',
                letterSpacing: '-0.22px',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 text-black">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span>dghambashidze@roomshotels.com</span>
            </a>
            <a 
              href="tel:+995593262633" 
              className="flex items-center justify-center gap-[4px] bg-[#FFF] border border-gray-200/80 rounded-[32px] px-[12px] py-[8px] hover:bg-gray-50 transition-colors shrink-0"
              style={{
                boxSizing: 'border-box',
                color: '#000',
                fontFamily: '"Google Sans Flex", sans-serif',
                fontSize: '11px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '115%',
                letterSpacing: '-0.22px',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 text-black">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+995 593 262 633</span>
            </a>
          </div>
        </div>

        {/* 11 Room Cards Carousel (40px below contact pills) */}
        <div 
          className="w-full mt-[40px] shrink-0"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0px)' : 'translateY(25px)',
            transition: 'opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.64s, transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.64s',
            willChange: 'opacity, transform',
          }}
        >
          <RoomCardsCarousel />
        </div>

        {/* Footer Info Note (40px below indicator dots) */}
        <div 
          className="flex flex-col items-center text-center gap-2 text-xs text-gray-700 mt-[40px] px-[16px] shrink-0"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0px)' : 'translateY(15px)',
            transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.96s, transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.96s',
            willChange: 'opacity, transform',
          }}
        >
          <div className="w-7 h-7 rounded-full border border-gray-500 flex items-center justify-center">
            <span className="font-serif italic font-bold text-xs">i</span>
          </div>
          <div className="space-y-0.5 font-['Cormorant_Garamond',serif] text-[15px] leading-tight text-[#2A2E2B]">
            <p>Rates are quoted per room per night</p>
            <p>Rates are excluding VAT at 18%</p>
            <p>Rates are including breakfasts</p>
            <p className="pt-2 text-[13px] text-gray-600 px-2">
              Special rates are subject to room availability, so early booking is recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#77adff] content-stretch flex h-[46px] items-center justify-center px-[36px] py-[2px] relative rounded-[1000px] shrink-0 cursor-pointer hover:bg-[#6099ee] active:scale-[0.98] transition-all shadow-sm" 
      data-name="Frame"
    >
      <p className="[word-break:break-word] font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] whitespace-nowrap">Book a Stay</p>
    </button>
  );
}

function Frame4({ onBookStay }: { onBookStay?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full" data-name="Frame">
      <RoomsBatumi />
      <Frame8 />
      <Frame5 onClick={onBookStay} />
    </div>
  );
}

function Frame3({ onBookStay }: { onBookStay?: () => void }) {
  return (
    <div className="absolute h-[828.083px] left-0 top-[3639px] w-[402px]" data-name="AccommodationSection">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[828.083px] left-1/2 top-[calc(50%-0.46px)] w-[402px]" data-name="Union">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="828.083" src={imgUnion} width="402" />
      </div>
      <div className="absolute bottom-[110px] left-[24px] right-[24px] z-10">
        <Frame4 onBookStay={onBookStay} />
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[0_0_-0.02%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="39.78" preserveAspectRatio="none" viewBox="0 0 138.16 39.78" width="138.16">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p30072700} fill="#2E322E" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p29303000} fill="#211A2D" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pe0b7200} fill="#33323D" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p3d0d4600} fill="#40463F" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p29476e00} fill="#56634D" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p14de82f0} fill="#455143" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p1531b000} fill="#363F30" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1518c300} fill="#1D1823" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p219cf900} fill="#54624D" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p11ade900} fill="#47524A" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.pe495000} fill="#52624F" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p37c32000} fill="#2A2D34" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p37df300} fill="#3E493D" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p6002980} fill="#21242C" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p16fba570} fill="#38443B" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p58dae00} fill="#31283B" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p1c60bf00} fill="#536047" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p8075300} fill="#394B36" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p373ccf00} fill="#7D9B74" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.p393c0f20} fill="#2B2D35" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p34f6c100} fill="#81866C" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p227bfa00} fill="#557045" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p394d4070} fill="#515E4E" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p251f1000} fill="#71954D" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p2cad5380} fill="#2B232C" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.p17ab0200} fill="#2D2D35" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.pf129e00} fill="#201E2E" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.p18dbe4f0} fill="#33323D" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p8fcae00} fill="#3B4543" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p30d8ba80} fill="#2A2D34" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.peff9600} fill="#222539" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.pe24c0c0} fill="#5C6A56" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.p26791800} fill="#435637" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p2cd3dc00} fill="#425140" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p1acfe900} fill="#282B28" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.p2a7df100} fill="#7D8772" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.p4d03b80} fill="#546943" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p2af5b940} fill="#485E3D" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.p28958780} fill="#33323D" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.p2089fc00} fill="#4E5E45" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p1948cc80} fill="#393F34" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.p31aeaf70} fill="#63755C" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p12018270} fill="#313E33" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.pa1b3c00} fill="#5C7154" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.p16020680} fill="#313E33" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p2f3d9180} fill="#5E7144" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.p15c7b700} fill="#585945" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.p17b4c380} fill="#4E643D" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.p64b0100} fill="#648444" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.p13a45580} fill="#5D7352" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.p2547180} fill="#434F3B" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.pa5dc280} fill="#3C4134" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.p21702100} fill="#4A5C40" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.p26276bb0} fill="#44573F" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.p35f45f0} fill="#5C7150" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.p5a48080} fill="#33472D" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.p2646f800} fill="#5C7150" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p15e02b00} fill="#232D1C" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p16639100} fill="#5C7150" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.p3ab8e800} fill="#486C33" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p2664a500} fill="#496634" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.p13f59500} fill="#496634" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.p3a698e00} fill="#598136" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p2670f400} fill="#3E4F31" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.pef6d380} fill="#0F0B28" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p385d3e00} fill="#272237" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p8a21e00} fill="#56504B" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.p7aa4ac0} fill="#7C8865" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.pb4b3d00} fill="#7C8865" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.pf2f0900} fill="#646A52" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p7c4a200} fill="#93BA6C" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.p6ca8830} fill="#5E8138" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p15e22900} fill="#7DA45B" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.pc85a300} fill="#546B51" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.pe695800} fill="#71954D" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.p1f833200} fill="#49433E" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p1952ab00} fill="#587837" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p1c49b600} fill="#455143" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p2f9c1600} fill="#222923" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.p1f446300} fill="#141823" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p392bf180} fill="#4B5D3D" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p2e1c4800} fill="#586A4E" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.p3bac9380} fill="#7B7E67" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p27588a80} fill="#343C32" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.p19c68c00} fill="#485E3D" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p25738900} fill="#685F59" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p1d8e9a00} fill="#9C9691" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.p2f013a00} fill="#5B704D" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.p36794000} fill="#70924B" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p79bb300} fill="#72994C" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p2148b9e0} fill="#324329" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.p3eea5700} fill="#5E7E4E" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.p3e4c2070} fill="#648444" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.p19330e80} fill="#648444" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p7abb80} fill="#72994C" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p203ac680} fill="#4C6E2C" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.p13f0ef70} fill="#8FB668" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.p2c5d3500} fill="#54634F" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.p3a2ca480} fill="#6E855E" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.pd6d7700} fill="#496736" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.p2acecb80} fill="#3D4539" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.p6d66e80} fill="#7AA160" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p38d7e3c0} fill="#6E904C" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p1fba600} fill="#618442" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p24bc87f0} fill="#618442" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.ped02580} fill="#507626" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.p4032b00} fill="#638634" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.p3b2b2d80} fill="#769F49" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.p28df7300} fill="#536631" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p3e1c5880} fill="#6A923D" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p2d710200} fill="#5D7E39" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p3098f200} fill="#4B5C39" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.p2bae5400} fill="#6E8650" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p2f7c1e00} fill="#0E061F" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p3ab62380} fill="#8CA46C" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.pa297d00} fill="#4A613A" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.p39b61280} fill="#9EBB73" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p2d913f70} fill="#354535" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.p3217a580} fill="#495842" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.p144cba00} fill="#6A844F" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p2f1d0e00} fill="#4C6041" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.p31996300} fill="#4C5735" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p326e3ac0} fill="#5E7E51" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.p3d160d30} fill="#495842" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.pb58a00} fill="#4C6041" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p58bc900} fill="#586850" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p1df9bc00} fill="#50663A" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.p3da08b80} fill="#667B48" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.p2f859800} fill="#586850" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p293b4580} fill="#4C4F53" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p3840fb80} fill="#91AE8F" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p15c73d00} fill="#64844C" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p35cae100} fill="#241431" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.p11361b70} fill="#1E1D24" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.p242a8f40} fill="#374238" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p2d39a00} fill="#353335" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p3f69ef00} fill="#252232" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p5349280} fill="#292928" fillRule="evenodd" id="Vector_138" />
          <path clipRule="evenodd" d={svgPaths.p32a0f80} fill="#435637" fillRule="evenodd" id="Vector_139" />
          <path clipRule="evenodd" d={svgPaths.pe4ffc70} fill="#8EB269" fillRule="evenodd" id="Vector_140" />
          <path clipRule="evenodd" d={svgPaths.p4479300} fill="#86A963" fillRule="evenodd" id="Vector_141" />
          <path clipRule="evenodd" d={svgPaths.pcbb1360} fill="#39571A" fillRule="evenodd" id="Vector_142" />
          <path clipRule="evenodd" d={svgPaths.p32068800} fill="#74A14D" fillRule="evenodd" id="Vector_143" />
          <path clipRule="evenodd" d={svgPaths.p2b7b5500} fill="#658E3D" fillRule="evenodd" id="Vector_144" />
          <path clipRule="evenodd" d={svgPaths.p25d07b00} fill="#658E3D" fillRule="evenodd" id="Vector_145" />
          <path clipRule="evenodd" d={svgPaths.pa5b6700} fill="#618B39" fillRule="evenodd" id="Vector_146" />
          <path clipRule="evenodd" d={svgPaths.p29ede780} fill="#3B591A" fillRule="evenodd" id="Vector_147" />
          <path clipRule="evenodd" d={svgPaths.p25fa2500} fill="#81AD5C" fillRule="evenodd" id="Vector_148" />
          <path clipRule="evenodd" d={svgPaths.p3579e500} fill="#9BC372" fillRule="evenodd" id="Vector_149" />
          <path clipRule="evenodd" d={svgPaths.p3d52e1f0} fill="#8DB365" fillRule="evenodd" id="Vector_150" />
          <path clipRule="evenodd" d={svgPaths.p21204700} fill="#434944" fillRule="evenodd" id="Vector_151" />
          <path clipRule="evenodd" d={svgPaths.p313c0500} fill="#434944" fillRule="evenodd" id="Vector_152" />
          <path clipRule="evenodd" d={svgPaths.p3ca39700} fill="#527641" fillRule="evenodd" id="Vector_153" />
          <path clipRule="evenodd" d={svgPaths.p1e90500} fill="#242D19" fillRule="evenodd" id="Vector_154" />
          <path clipRule="evenodd" d={svgPaths.paf1d070} fill="#546835" fillRule="evenodd" id="Vector_155" />
          <path clipRule="evenodd" d={svgPaths.p14503c00} fill="#7C9F4F" fillRule="evenodd" id="Vector_156" />
          <path clipRule="evenodd" d={svgPaths.p13b86780} fill="#6E9152" fillRule="evenodd" id="Vector_157" />
          <path clipRule="evenodd" d={svgPaths.p366cdd00} fill="#517028" fillRule="evenodd" id="Vector_158" />
          <path clipRule="evenodd" d={svgPaths.p53bf00} fill="#89AA63" fillRule="evenodd" id="Vector_159" />
          <path clipRule="evenodd" d={svgPaths.p21786280} fill="#8EB068" fillRule="evenodd" id="Vector_160" />
          <path clipRule="evenodd" d={svgPaths.p3574b200} fill="#8FB165" fillRule="evenodd" id="Vector_161" />
          <path clipRule="evenodd" d={svgPaths.p2826ce00} fill="#638634" fillRule="evenodd" id="Vector_162" />
          <path clipRule="evenodd" d={svgPaths.p2fda7800} fill="#76964A" fillRule="evenodd" id="Vector_163" />
          <path clipRule="evenodd" d={svgPaths.p1f2b6500} fill="#5A7935" fillRule="evenodd" id="Vector_164" />
          <path clipRule="evenodd" d={svgPaths.p33a433b0} fill="#6A923D" fillRule="evenodd" id="Vector_165" />
          <path clipRule="evenodd" d={svgPaths.p18d17200} fill="#578128" fillRule="evenodd" id="Vector_166" />
          <path clipRule="evenodd" d={svgPaths.p2587d280} fill="#76964A" fillRule="evenodd" id="Vector_167" />
          <path clipRule="evenodd" d={svgPaths.p38a2c200} fill="#64844C" fillRule="evenodd" id="Vector_168" />
          <path clipRule="evenodd" d={svgPaths.p1833d080} fill="#658E3D" fillRule="evenodd" id="Vector_169" />
          <path clipRule="evenodd" d={svgPaths.p2165ee00} fill="#759859" fillRule="evenodd" id="Vector_170" />
          <path clipRule="evenodd" d={svgPaths.p24608270} fill="#81A062" fillRule="evenodd" id="Vector_171" />
          <path clipRule="evenodd" d={svgPaths.p1f234240} fill="#5C7C46" fillRule="evenodd" id="Vector_172" />
          <path clipRule="evenodd" d={svgPaths.pae1cf00} fill="#546739" fillRule="evenodd" id="Vector_173" />
          <path clipRule="evenodd" d={svgPaths.p1d350800} fill="#40553C" fillRule="evenodd" id="Vector_174" />
          <path clipRule="evenodd" d={svgPaths.p14e1d400} fill="#40553C" fillRule="evenodd" id="Vector_175" />
          <path clipRule="evenodd" d={svgPaths.p31f75500} fill="#354535" fillRule="evenodd" id="Vector_176" />
          <path clipRule="evenodd" d={svgPaths.p3524a970} fill="#607F3B" fillRule="evenodd" id="Vector_177" />
          <path clipRule="evenodd" d={svgPaths.p5468a70} fill="#648449" fillRule="evenodd" id="Vector_178" />
          <path clipRule="evenodd" d={svgPaths.p17d85900} fill="#4E6837" fillRule="evenodd" id="Vector_179" />
          <path clipRule="evenodd" d={svgPaths.p37fe6840} fill="#7A9D50" fillRule="evenodd" id="Vector_180" />
          <path clipRule="evenodd" d={svgPaths.p28882870} fill="#698C3E" fillRule="evenodd" id="Vector_181" />
          <path clipRule="evenodd" d={svgPaths.p2d6e7d00} fill="#667B48" fillRule="evenodd" id="Vector_182" />
          <path clipRule="evenodd" d={svgPaths.p1f85eef0} fill="#353335" fillRule="evenodd" id="Vector_183" />
          <path clipRule="evenodd" d={svgPaths.p155d6b80} fill="#384329" fillRule="evenodd" id="Vector_184" />
          <path clipRule="evenodd" d={svgPaths.p20856700} fill="#444F32" fillRule="evenodd" id="Vector_185" />
          <path clipRule="evenodd" d={svgPaths.pd3fc900} fill="#52652F" fillRule="evenodd" id="Vector_186" />
          <path clipRule="evenodd" d={svgPaths.p300e1600} fill="#486039" fillRule="evenodd" id="Vector_187" />
          <path clipRule="evenodd" d={svgPaths.p15d14700} fill="#40542F" fillRule="evenodd" id="Vector_188" />
          <path clipRule="evenodd" d={svgPaths.p19d7aa80} fill="#51663E" fillRule="evenodd" id="Vector_189" />
          <path clipRule="evenodd" d={svgPaths.p2ce30d80} fill="#23232E" fillRule="evenodd" id="Vector_190" />
          <path clipRule="evenodd" d={svgPaths.p670200} fill="#586D3B" fillRule="evenodd" id="Vector_191" />
          <path clipRule="evenodd" d={svgPaths.p2fc4ca00} fill="#53554C" fillRule="evenodd" id="Vector_192" />
          <path clipRule="evenodd" d={svgPaths.p2065b100} fill="#8DAA61" fillRule="evenodd" id="Vector_193" />
          <path clipRule="evenodd" d={svgPaths.pd50980} fill="#201F18" fillRule="evenodd" id="Vector_194" />
          <path clipRule="evenodd" d={svgPaths.p1fdac700} fill="#8EB161" fillRule="evenodd" id="Vector_195" />
          <path clipRule="evenodd" d={svgPaths.p39e51000} fill="#658E3D" fillRule="evenodd" id="Vector_196" />
          <path clipRule="evenodd" d={svgPaths.p1756a400} fill="#546835" fillRule="evenodd" id="Vector_197" />
          <path clipRule="evenodd" d={svgPaths.p67b6200} fill="#3E4238" fillRule="evenodd" id="Vector_198" />
          <path clipRule="evenodd" d={svgPaths.p53d100} fill="#434430" fillRule="evenodd" id="Vector_199" />
          <path clipRule="evenodd" d={svgPaths.p91e4980} fill="#365424" fillRule="evenodd" id="Vector_200" />
          <path clipRule="evenodd" d={svgPaths.p3804cd00} fill="#365424" fillRule="evenodd" id="Vector_201" />
          <path clipRule="evenodd" d={svgPaths.p128827f0} fill="#4A6229" fillRule="evenodd" id="Vector_202" />
          <path clipRule="evenodd" d={svgPaths.p3eb56600} fill="#779C53" fillRule="evenodd" id="Vector_203" />
          <path clipRule="evenodd" d={svgPaths.p18dc4d00} fill="#3E4F20" fillRule="evenodd" id="Vector_204" />
          <path clipRule="evenodd" d={svgPaths.p34f6bd00} fill="#607F3B" fillRule="evenodd" id="Vector_205" />
          <path clipRule="evenodd" d={svgPaths.p1627ce00} fill="#516E30" fillRule="evenodd" id="Vector_206" />
          <path clipRule="evenodd" d={svgPaths.p2f7d3700} fill="#5A7935" fillRule="evenodd" id="Vector_207" />
          <path clipRule="evenodd" d={svgPaths.p35ce2280} fill="#98B270" fillRule="evenodd" id="Vector_208" />
          <path clipRule="evenodd" d={svgPaths.p137b2380} fill="#6F9149" fillRule="evenodd" id="Vector_209" />
          <path clipRule="evenodd" d={svgPaths.p1985a980} fill="#2A2C2A" fillRule="evenodd" id="Vector_210" />
          <path clipRule="evenodd" d={svgPaths.p2e0ee400} fill="#364136" fillRule="evenodd" id="Vector_211" />
          <path clipRule="evenodd" d={svgPaths.p293ce000} fill="#2F2C3C" fillRule="evenodd" id="Vector_212" />
          <path clipRule="evenodd" d={svgPaths.p3ccd3900} fill="#15152B" fillRule="evenodd" id="Vector_213" />
          <path clipRule="evenodd" d={svgPaths.p2150ed80} fill="#3E4540" fillRule="evenodd" id="Vector_214" />
          <path clipRule="evenodd" d={svgPaths.p26410180} fill="#455231" fillRule="evenodd" id="Vector_215" />
          <path clipRule="evenodd" d={svgPaths.p2527580} fill="#444C3F" fillRule="evenodd" id="Vector_216" />
          <path clipRule="evenodd" d={svgPaths.p3cd82100} fill="#21232D" fillRule="evenodd" id="Vector_217" />
          <path clipRule="evenodd" d={svgPaths.p3bbcbc80} fill="#51613E" fillRule="evenodd" id="Vector_218" />
          <path clipRule="evenodd" d={svgPaths.p387eb400} fill="#394237" fillRule="evenodd" id="Vector_219" />
          <path clipRule="evenodd" d={svgPaths.p130fc700} fill="#3C4336" fillRule="evenodd" id="Vector_220" />
          <path clipRule="evenodd" d={svgPaths.p24e92b00} fill="#374234" fillRule="evenodd" id="Vector_221" />
          <path clipRule="evenodd" d={svgPaths.p1d80c500} fill="#537035" fillRule="evenodd" id="Vector_222" />
          <path clipRule="evenodd" d={svgPaths.p2da828f0} fill="#54723B" fillRule="evenodd" id="Vector_223" />
          <path clipRule="evenodd" d={svgPaths.p2301ef00} fill="#54723B" fillRule="evenodd" id="Vector_224" />
          <path clipRule="evenodd" d={svgPaths.p14d41180} fill="#6B8D51" fillRule="evenodd" id="Vector_225" />
          <path clipRule="evenodd" d={svgPaths.p33cfa600} fill="#40553C" fillRule="evenodd" id="Vector_226" />
          <path clipRule="evenodd" d={svgPaths.p2cf5ec00} fill="#455B3A" fillRule="evenodd" id="Vector_227" />
          <path clipRule="evenodd" d={svgPaths.pc8a4900} fill="#6F9244" fillRule="evenodd" id="Vector_228" />
          <path clipRule="evenodd" d={svgPaths.p3be47f80} fill="#4F6F27" fillRule="evenodd" id="Vector_229" />
          <path clipRule="evenodd" d={svgPaths.p1957f480} fill="#4E6E2E" fillRule="evenodd" id="Vector_230" />
          <path clipRule="evenodd" d={svgPaths.p215bc5c0} fill="#789C5C" fillRule="evenodd" id="Vector_231" />
          <path clipRule="evenodd" d={svgPaths.pdcfbd00} fill="#5E7735" fillRule="evenodd" id="Vector_232" />
          <path clipRule="evenodd" d={svgPaths.p32cc9400} fill="#2A371B" fillRule="evenodd" id="Vector_233" />
          <path clipRule="evenodd" d={svgPaths.p22982f00} fill="#7A9850" fillRule="evenodd" id="Vector_234" />
          <path clipRule="evenodd" d={svgPaths.p1f7ae730} fill="#1E2021" fillRule="evenodd" id="Vector_235" />
          <path clipRule="evenodd" d={svgPaths.p7458e40} fill="#3A542B" fillRule="evenodd" id="Vector_236" />
          <path clipRule="evenodd" d={svgPaths.p3cec5e80} fill="#4D6A38" fillRule="evenodd" id="Vector_237" />
          <path clipRule="evenodd" d={svgPaths.p36be0b00} fill="#7C9961" fillRule="evenodd" id="Vector_238" />
          <path clipRule="evenodd" d={svgPaths.pc09200} fill="#3A542B" fillRule="evenodd" id="Vector_239" />
          <path clipRule="evenodd" d={svgPaths.p18fdb800} fill="#74905D" fillRule="evenodd" id="Vector_240" />
          <path clipRule="evenodd" d={svgPaths.pc0daf00} fill="#4F5E46" fillRule="evenodd" id="Vector_241" />
          <path clipRule="evenodd" d={svgPaths.p23c35e80} fill="#211923" fillRule="evenodd" id="Vector_242" />
          <path clipRule="evenodd" d={svgPaths.p2c47cc00} fill="#90AA63" fillRule="evenodd" id="Vector_243" />
          <path clipRule="evenodd" d={svgPaths.p31c80b00} fill="#ABC57E" fillRule="evenodd" id="Vector_244" />
          <path clipRule="evenodd" d={svgPaths.p3b7d8ff0} fill="#323B22" fillRule="evenodd" id="Vector_245" />
          <path clipRule="evenodd" d={svgPaths.p13664f80} fill="#809956" fillRule="evenodd" id="Vector_246" />
          <path clipRule="evenodd" d={svgPaths.p1941d400} fill="#A8C780" fillRule="evenodd" id="Vector_247" />
          <path clipRule="evenodd" d={svgPaths.p2b88dc00} fill="#A0BD74" fillRule="evenodd" id="Vector_248" />
          <path clipRule="evenodd" d={svgPaths.pf4f23c0} fill="#829B56" fillRule="evenodd" id="Vector_249" />
          <path clipRule="evenodd" d={svgPaths.p315ed000} fill="#48474E" fillRule="evenodd" id="Vector_250" />
          <path clipRule="evenodd" d={svgPaths.p3e919e00} fill="#333037" fillRule="evenodd" id="Vector_251" />
          <path clipRule="evenodd" d={svgPaths.p604d880} fill="#7E955C" fillRule="evenodd" id="Vector_252" />
          <path clipRule="evenodd" d={svgPaths.p2752c840} fill="#4F6742" fillRule="evenodd" id="Vector_253" />
          <path clipRule="evenodd" d={svgPaths.p3a609240} fill="#58563F" fillRule="evenodd" id="Vector_254" />
          <path clipRule="evenodd" d={svgPaths.p258ca640} fill="#728F51" fillRule="evenodd" id="Vector_255" />
          <path clipRule="evenodd" d={svgPaths.p381fe900} fill="#6E8D4A" fillRule="evenodd" id="Vector_256" />
          <path clipRule="evenodd" d={svgPaths.p19aa8370} fill="#607F3B" fillRule="evenodd" id="Vector_257" />
          <path clipRule="evenodd" d={svgPaths.p10aaa300} fill="#52722E" fillRule="evenodd" id="Vector_258" />
          <path clipRule="evenodd" d={svgPaths.p2375e900} fill="#516D41" fillRule="evenodd" id="Vector_259" />
          <path clipRule="evenodd" d={svgPaths.p200d4dc0} fill="#5C6B4A" fillRule="evenodd" id="Vector_260" />
          <path clipRule="evenodd" d={svgPaths.p2e67e100} fill="#48592D" fillRule="evenodd" id="Vector_261" />
          <path clipRule="evenodd" d={svgPaths.p4798c80} fill="#829B56" fillRule="evenodd" id="Vector_262" />
          <path clipRule="evenodd" d={svgPaths.p2a227000} fill="#333037" fillRule="evenodd" id="Vector_263" />
          <path clipRule="evenodd" d={svgPaths.p3815ad00} fill="#5F6C55" fillRule="evenodd" id="Vector_264" />
          <path clipRule="evenodd" d={svgPaths.p1c887e00} fill="#181E1B" fillRule="evenodd" id="Vector_265" />
          <path clipRule="evenodd" d={svgPaths.p3f8d9300} fill="#8DAA61" fillRule="evenodd" id="Vector_266" />
          <path clipRule="evenodd" d={svgPaths.p1c47f380} fill="#75914C" fillRule="evenodd" id="Vector_267" />
          <path clipRule="evenodd" d={svgPaths.p3b068700} fill="#243318" fillRule="evenodd" id="Vector_268" />
          <path clipRule="evenodd" d={svgPaths.p1d035500} fill="#8AA165" fillRule="evenodd" id="Vector_269" />
          <path clipRule="evenodd" d={svgPaths.p1ebdeb00} fill="#2C3F1F" fillRule="evenodd" id="Vector_270" />
          <path clipRule="evenodd" d={svgPaths.p1aae4980} fill="#3F5121" fillRule="evenodd" id="Vector_271" />
          <path clipRule="evenodd" d={svgPaths.p11651900} fill="#586D3B" fillRule="evenodd" id="Vector_272" />
          <path clipRule="evenodd" d={svgPaths.p11b30900} fill="#272726" fillRule="evenodd" id="Vector_273" />
          <path clipRule="evenodd" d={svgPaths.p21245380} fill="#272726" fillRule="evenodd" id="Vector_274" />
          <path clipRule="evenodd" d={svgPaths.p360d7f00} fill="#8DAA61" fillRule="evenodd" id="Vector_275" />
          <path clipRule="evenodd" d={svgPaths.p29243680} fill="#829B56" fillRule="evenodd" id="Vector_276" />
          <path clipRule="evenodd" d={svgPaths.p2f5ad000} fill="#1F152B" fillRule="evenodd" id="Vector_277" />
          <path clipRule="evenodd" d={svgPaths.p3abc6100} fill="#272F28" fillRule="evenodd" id="Vector_278" />
          <path clipRule="evenodd" d={svgPaths.p179b0c00} fill="#3D4E2C" fillRule="evenodd" id="Vector_279" />
          <path clipRule="evenodd" d={svgPaths.p212b5880} fill="#2F3B1A" fillRule="evenodd" id="Vector_280" />
          <path clipRule="evenodd" d={svgPaths.p16668780} fill="#2E3D2D" fillRule="evenodd" id="Vector_281" />
          <path clipRule="evenodd" d={svgPaths.p98ef380} fill="#7C9C59" fillRule="evenodd" id="Vector_282" />
          <path clipRule="evenodd" d={svgPaths.p3d6cea00} fill="#384C1A" fillRule="evenodd" id="Vector_283" />
          <path clipRule="evenodd" d={svgPaths.pfaaed00} fill="#749255" fillRule="evenodd" id="Vector_284" />
          <path clipRule="evenodd" d={svgPaths.p23c1ea40} fill="#6D894F" fillRule="evenodd" id="Vector_285" />
          <path clipRule="evenodd" d={svgPaths.p2dfefc80} fill="#586D3B" fillRule="evenodd" id="Vector_286" />
          <path clipRule="evenodd" d={svgPaths.p10d62400} fill="#3D4B32" fillRule="evenodd" id="Vector_287" />
          <path clipRule="evenodd" d={svgPaths.p19934680} fill="#3D4E2C" fillRule="evenodd" id="Vector_288" />
          <path clipRule="evenodd" d={svgPaths.p3474e8f2} fill="#141616" fillRule="evenodd" id="Vector_289" />
        </g>
      </svg>
    </div>
  );
}

function Objects() {
  return (
    <div className="absolute contents inset-[0_0_-0.02%_0]" data-name="OBJECTS">
      <Group6 />
    </div>
  );
}

function Asset() {
  return (
    <div className="h-[39.77px] overflow-clip relative shrink-0 w-[138.16px]" data-name="Asset 3 1">
      <Objects />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-black text-center w-full">
      <p className="font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[36px] tracking-[-0.72px] whitespace-nowrap">
        <BlurFadeWords text="What to Wear" />
      </p>
      <p className="font-['Cormorant_Garamond:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[18px] tracking-[-0.09px] w-[min-content]">
        <BlurFadeWords text="Dress Code & Palette" />
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center w-[354px]" data-name="Frame">
      <Asset />
      <Frame11 />
    </div>
  );
}

function DressCodeSection({ style }: { style?: React.CSSProperties }) {
  return (
    <div 
      className="absolute left-0 w-[402px] flex flex-col items-center z-10 pb-[120px]"
      style={style}
      data-name="DressCodeSection"
    >
      {/* Header: Green leaves + What to Wear + Dress Code & Palette */}
      <Frame6 />

      {/* 40px Gap between Header and Photo Grid */}
      <div className="relative w-[402px] h-[1260px] mt-[40px]">
        {/* Photo 1 (top left): image 8 */}
        <RevealAbsolute className="absolute flex h-[290.284px] items-center justify-center left-[1.34px] top-[0px] w-[215.325px]" delay={0}>
          <div className="flex-none rotate-[-6.95deg]">
            <div className="h-[270px] relative w-[184px]" data-name="image 8">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
            </div>
          </div>
        </RevealAbsolute>

        {/* Photo 2 (top right): image 9 */}
        <RevealAbsolute className="absolute flex h-[316.778px] items-center justify-center left-[205px] top-[30px] w-[239.056px]" delay={0.15}>
          <div className="flex-none rotate-[5.82deg]">
            <div className="h-[297px] relative w-[210px]" data-name="image 9">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
            </div>
          </div>
        </RevealAbsolute>

        {/* Photo 4 (middle right): image 11 - placed under adjacent photos */}
        <RevealAbsolute className="absolute flex h-[327.918px] items-center justify-center left-[215px] top-[420px] w-[250.549px] z-0" delay={0.15}>
          <div className="flex-none rotate-[-1.17deg]">
            <div className="h-[323px] relative w-[244px]" data-name="image 11">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
            </div>
          </div>
        </RevealAbsolute>

        {/* Photo 3 (middle left): image 10 */}
        <RevealAbsolute className="absolute flex h-[371.003px] items-center justify-center left-[-36px] top-[310px] w-[285.108px] z-10" delay={0}>
          <div className="flex-none rotate-[7.6deg]">
            <div className="h-[342px] relative w-[242px]" data-name="image 10">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
            </div>
          </div>
        </RevealAbsolute>

        {/* Ladies Cursive Text Overlay: Frame15 */}
        <div className="absolute flex h-[170.041px] items-center justify-center left-[0px] top-[500px] w-[198.78px] z-20">
          <div className="flex-none rotate-[-16.06deg]">
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Homemade_Apple:Regular',sans-serif] gap-[10px] items-start leading-[1.5] not-italic relative text-[#ffe16c] w-[170px]">
              <p className="relative shrink-0 text-[32px] tracking-[-0.64px] w-full">Ladies</p>
              <p className="relative shrink-0 text-[23px] tracking-[-0.46px] w-full">
                <BlurFadeWords text="Colorful Attire" />
              </p>
            </div>
          </div>
        </div>

        {/* Photo 5 (bottom center): image 12 */}
        <RevealAbsolute className="absolute flex h-[405.889px] items-center justify-center left-[0px] top-[700px] w-[334.43px] z-10" delay={0}>
          <div className="flex-none rotate-[-8.53deg]">
            <div className="h-[368px] relative w-[283px]" data-name="image 12">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage12} />
            </div>
          </div>
        </RevealAbsolute>

        {/* Red branch asset: Asset1 */}
        <div className="absolute flex h-[141.762px] items-center justify-center left-[297px] top-[800px] w-[125.001px]">
          <div className="flex-none rotate-[-33.99deg]">
            <div className="h-[127.1px] overflow-clip relative w-[65.07px]" data-name="Asset 4 1">
              <Objects1 />
            </div>
          </div>
        </div>

        {/* Gentlemen Cursive Text Overlay: Frame16 */}
        <div className="absolute flex h-[147.141px] items-center justify-center left-[45px] top-[1080px] w-[316.638px] z-20">
          <div className="flex-none rotate-[-10.33deg]">
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Homemade_Apple:Regular',sans-serif] gap-[11px] items-start leading-[1.5] not-italic relative text-[#7a843e] w-[304.718px]">
              <p className="relative shrink-0 text-[32px] w-full">Gentlemen</p>
              <p className="relative shrink-0 text-[23px] w-full whitespace-pre-wrap">
                <BlurFadeWords text="Black Suit White Shirt" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[0_0_0.03%_-0.01%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="26.183" preserveAspectRatio="none" viewBox="0 0 18.0015 26.183" width="18.0015">
        <g id="Group">
          <path d={svgPaths.p17ea9b00} fill="#F20C03" id="Vector" />
          <path d={svgPaths.p1c429200} fill="#FB5D4F" id="Vector_2" />
          <path d={svgPaths.pe808e00} fill="#F63A31" id="Vector_3" />
          <path d={svgPaths.p2df0cb00} fill="#F65048" id="Vector_4" />
          <path d={svgPaths.p17ec0280} fill="#F7463B" id="Vector_5" />
          <path d={svgPaths.p2d392d80} fill="#F94C40" id="Vector_6" />
          <path d={svgPaths.p6f119f0} fill="#F21C13" id="Vector_7" />
          <path d={svgPaths.p3d16a080} fill="#F65048" id="Vector_8" />
          <path d={svgPaths.p381aa200} fill="#EB0700" id="Vector_9" />
          <path d={svgPaths.paeebd40} fill="#F00A00" id="Vector_10" />
          <path d={svgPaths.p28424080} fill="#F85B50" id="Vector_11" />
          <path d={svgPaths.pfe66900} fill="#ED0700" id="Vector_12" />
          <path d={svgPaths.p357a6c00} fill="#F66A64" id="Vector_13" />
          <path d={svgPaths.p2ff0af00} fill="#F4534C" id="Vector_14" />
          <path d={svgPaths.p217f0e00} fill="#F83C2F" id="Vector_15" />
          <path d={svgPaths.p3d3f4b00} fill="#FA766D" id="Vector_16" />
          <path d={svgPaths.pafd0800} fill="#EF352F" id="Vector_17" />
          <path d={svgPaths.p2d2d200} fill="#F65851" id="Vector_18" />
          <path d={svgPaths.p2dcc3300} fill="#EB0700" id="Vector_19" />
          <path d={svgPaths.p108d0600} fill="#FC7A6E" id="Vector_20" />
          <path d={svgPaths.p21de6780} fill="#EE0900" id="Vector_21" />
          <path d={svgPaths.p1c58ef80} fill="#EE0900" id="Vector_22" />
          <path d={svgPaths.p3bcb5a00} fill="#F8746E" id="Vector_23" />
          <path d={svgPaths.p14026580} fill="#FC8277" id="Vector_24" />
          <path d={svgPaths.p34268b70} fill="#F75E56" id="Vector_25" />
          <path d={svgPaths.p3b9bb000} fill="#F2423C" id="Vector_26" />
          <path d={svgPaths.p1d3ea9f0} fill="#F95D53" id="Vector_27" />
          <path d={svgPaths.pecc7500} fill="#F97971" id="Vector_28" />
          <path d={svgPaths.p1f06ca00} fill="#ED0700" id="Vector_29" />
          <path d={svgPaths.p314f7a00} fill="#F66C66" id="Vector_30" />
          <path d={svgPaths.p3680d700} fill="#EE2119" id="Vector_31" />
          <path d={svgPaths.p15bc6e00} fill="#EA0700" id="Vector_32" />
          <path d={svgPaths.p3abb4280} fill="#F7534A" id="Vector_33" />
          <path d={svgPaths.p20462980} fill="#EA0700" id="Vector_34" />
          <path d={svgPaths.p357daa00} fill="#F96C65" id="Vector_35" />
          <path d={svgPaths.p3319b680} fill="#F13731" id="Vector_36" />
          <path d={svgPaths.p3eb26700} fill="#F66C66" id="Vector_37" />
          <path d={svgPaths.p37386e00} fill="#F66C66" id="Vector_38" />
          <path d={svgPaths.p2834cef0} fill="#F94C40" id="Vector_39" />
          <path d={svgPaths.p39e65e80} fill="#EA0600" id="Vector_40" />
          <path d={svgPaths.p2ffdbdc0} fill="#F75A51" id="Vector_41" />
          <path d={svgPaths.p21fee00} fill="#F7463B" id="Vector_42" />
          <path d={svgPaths.p3f9d6480} fill="#EF352F" id="Vector_43" />
          <path d={svgPaths.p13713000} fill="#F1514D" id="Vector_44" />
          <path d={svgPaths.p15768200} fill="#F57771" id="Vector_45" />
          <path d={svgPaths.p3fa8e4c0} fill="#F9675F" id="Vector_46" />
          <path d={svgPaths.p32990400} fill="#FC6F62" id="Vector_47" />
          <g id="Vector_48" />
          <path d={svgPaths.p23f05980} fill="#EA0700" id="Vector_49" />
          <path d={svgPaths.pd7f5f00} fill="#FA6A5D" id="Vector_50" />
          <path d={svgPaths.p311cd180} fill="#FC8277" id="Vector_51" />
          <path d={svgPaths.p28d2c380} fill="#FB6153" id="Vector_52" />
          <path d={svgPaths.pbf3200} fill="#E50806" id="Vector_53" />
          <path d={svgPaths.p27af19f0} fill="#F57771" id="Vector_54" />
          <path d={svgPaths.p1a8eb580} fill="#FA6A5D" id="Vector_55" />
          <g id="Vector_56" />
          <path d={svgPaths.p2a5f24b0} fill="#EE0900" id="Vector_57" />
          <g id="Vector_58" />
          <path d={svgPaths.p20fed580} fill="#EA0600" id="Vector_59" />
          <g id="Vector_60" />
          <g id="Vector_61" />
          <path d={svgPaths.p1cfef200} fill="#F20C03" id="Vector_62" />
          <path d={svgPaths.p13033900} fill="#F20C03" id="Vector_63" />
          <g id="Vector_64" />
          <path d={svgPaths.p3d355800} fill="#F13731" id="Vector_65" />
          <g id="Vector_66" />
          <g id="Vector_67" />
          <path d={svgPaths.p325c6c00} fill="#F66C66" id="Vector_68" />
          <g id="Vector_69" />
          <path d={svgPaths.p32bdd700} fill="#F30C00" id="Vector_70" />
          <path d={svgPaths.p119bb300} fill="#F20A00" id="Vector_71" />
          <path d={svgPaths.p3272000} fill="#F30B00" id="Vector_72" />
          <path d={svgPaths.p5f45a80} fill="#F20A00" id="Vector_73" />
          <path d={svgPaths.p35671940} fill="#F20A00" id="Vector_74" />
          <path d={svgPaths.p3308e700} fill="#F00900" id="Vector_75" />
          <path d={svgPaths.p685bf80} fill="#F30C00" id="Vector_76" />
          <path d={svgPaths.p1f201b00} fill="#F30D02" id="Vector_77" />
          <path d={svgPaths.p20014580} fill="#F41105" id="Vector_78" />
          <g id="Vector_79" />
          <path d={svgPaths.p36a51f00} fill="#FC6A5B" id="Vector_80" />
          <path d={svgPaths.p252cd00} fill="#FB6153" id="Vector_81" />
          <path d={svgPaths.p33600700} fill="#F95143" id="Vector_82" />
          <path d={svgPaths.pf24a800} fill="#FA6A5D" id="Vector_83" />
          <path d={svgPaths.p2082a600} fill="#F95143" id="Vector_84" />
          <path d={svgPaths.p8306af0} fill="#FB6656" id="Vector_85" />
          <path d={svgPaths.p34160780} fill="#FA564A" id="Vector_86" />
          <path d={svgPaths.p2a6e8700} fill="#FA564A" id="Vector_87" />
          <path d={svgPaths.p2221fe80} fill="#F62C20" id="Vector_88" />
          <path d={svgPaths.p12d7c300} fill="#F64035" id="Vector_89" />
          <path d={svgPaths.p3bd0af00} fill="#F74339" id="Vector_90" />
          <path d={svgPaths.p215dc380} fill="#F62C20" id="Vector_91" />
          <path d={svgPaths.p1fae0df0} fill="#F74339" id="Vector_92" />
          <path d={svgPaths.p256e2c40} fill="#F74237" id="Vector_93" />
          <path d={svgPaths.pb0fa580} fill="#F73226" id="Vector_94" />
          <path d={svgPaths.p3ed47500} fill="#F40F02" id="Vector_95" />
          <path d={svgPaths.p17d62a80} fill="#F73B2F" id="Vector_96" />
          <path d={svgPaths.p3782400} fill="#F9493D" id="Vector_97" />
          <path d={svgPaths.p6b08200} fill="#F73529" id="Vector_98" />
          <path d={svgPaths.p3c2e8f40} fill="#F63228" id="Vector_99" />
          <path d={svgPaths.pa589400} fill="#F6352B" id="Vector_100" />
          <path d={svgPaths.p28c51f00} fill="#F73B2F" id="Vector_101" />
          <path d={svgPaths.p39050200} fill="#F65048" id="Vector_102" />
          <path d={svgPaths.pcc07d00} fill="#FB594A" id="Vector_103" />
          <path d={svgPaths.p2488aa00} fill="#FA5446" id="Vector_104" />
          <path d={svgPaths.p33592d72} fill="#F83F34" id="Vector_105" />
          <path d={svgPaths.p3763af80} fill="#FB594A" id="Vector_106" />
          <path d={svgPaths.p3d4c7600} fill="#FB594A" id="Vector_107" />
          <path d={svgPaths.p2e193800} fill="#F30C00" id="Vector_108" />
          <path d={svgPaths.p1cc2be80} fill="#F13731" id="Vector_109" />
          <path d={svgPaths.p1d303280} fill="#F20C03" id="Vector_110" />
          <path d={svgPaths.p1b5a0180} fill="#F40F02" id="Vector_111" />
          <path d={svgPaths.p19b1f980} fill="#F20C03" id="Vector_112" />
          <path d={svgPaths.p2dbf6bc0} fill="#F64138" id="Vector_113" />
          <path d={svgPaths.p22023c00} fill="#DD0200" id="Vector_114" />
          <path d={svgPaths.p125ea300} fill="#EA0700" id="Vector_115" />
          <g id="Vector_116" />
          <path d={svgPaths.p307c1c80} fill="#EF0900" id="Vector_117" />
          <path d={svgPaths.p2e32f300} fill="#EF0800" id="Vector_118" />
          <path d={svgPaths.p25071f00} fill="#ED0700" id="Vector_119" />
          <path d={svgPaths.p8c6da00} fill="#F10A00" id="Vector_120" />
          <path d={svgPaths.p29e25d00} fill="#EA0600" id="Vector_121" />
          <path d={svgPaths.p1671d000} fill="#EC0800" id="Vector_122" />
          <path d={svgPaths.p19aa0300} fill="#ED0700" id="Vector_123" />
          <path d={svgPaths.p3a6999c0} fill="#F84637" id="Vector_124" />
          <path d={svgPaths.pbf7000} fill="#F7291D" id="Vector_125" />
          <path d={svgPaths.p2db11600} fill="#F41F15" id="Vector_126" />
          <g id="Vector_127" />
          <path d={svgPaths.p10732480} fill="#F00A00" id="Vector_128" />
          <g id="Vector_129" />
          <path d={svgPaths.p30590800} fill="#FB5A4D" id="Vector_130" />
          <path d={svgPaths.p35d0ef00} fill="#FB665A" id="Vector_131" />
          <path d={svgPaths.p2c2e9680} fill="#FB665A" id="Vector_132" />
          <path d={svgPaths.p38dc9370} fill="#FC6F62" id="Vector_133" />
          <path d={svgPaths.p6e9cf80} fill="#FB6153" id="Vector_134" />
          <path d={svgPaths.p35a9e280} fill="#FC675A" id="Vector_135" />
          <g id="Vector_136" />
          <path d={svgPaths.p305f0} fill="#FA766D" id="Vector_137" />
          <path d={svgPaths.p36a98480} fill="#F20A00" id="Vector_138" />
          <path d={svgPaths.p24c89d80} fill="#F41105" id="Vector_139" />
          <path d={svgPaths.p244da200} fill="#EE0900" id="Vector_140" />
          <path d={svgPaths.p2b3ede00} fill="#F00A00" id="Vector_141" />
          <path d={svgPaths.p249e04f0} fill="#FC6F62" id="Vector_142" />
          <path d={svgPaths.p7366c00} fill="#FC7C6F" id="Vector_143" />
          <path d={svgPaths.p2d28e80} fill="#EB0700" id="Vector_144" />
          <path d={svgPaths.p2fc77c00} fill="#F5170A" id="Vector_145" />
          <path d={svgPaths.p28118200} fill="#F40F02" id="Vector_146" />
          <path d={svgPaths.p29c495c0} fill="#F41105" id="Vector_147" />
          <path d={svgPaths.p2ac76a00} fill="#F41105" id="Vector_148" />
          <path d={svgPaths.p2fae1400} fill="#F41105" id="Vector_149" />
          <path d={svgPaths.p22c87980} fill="#F30C00" id="Vector_150" />
          <path d={svgPaths.p39825b00} fill="#F20C03" id="Vector_151" />
          <path d={svgPaths.p2335dd00} fill="#F00A00" id="Vector_152" />
          <path d={svgPaths.p2b22e000} fill="#F50D00" id="Vector_153" />
          <path d={svgPaths.p9a78e80} fill="#F40D00" id="Vector_154" />
          <path d={svgPaths.p25568b00} fill="#F20C03" id="Vector_155" />
          <path d={svgPaths.p10e77380} fill="#F40D00" id="Vector_156" />
          <path d={svgPaths.pa987c00} fill="#F00A00" id="Vector_157" />
          <path d={svgPaths.p5e17900} fill="#F20C03" id="Vector_158" />
          <path d={svgPaths.p2c6c4700} fill="#F20C03" id="Vector_159" />
          <g id="Vector_160" />
          <path d={svgPaths.p28b08e80} fill="#F20C03" id="Vector_161" />
          <path d={svgPaths.p3ba83600} fill="#FC6456" id="Vector_162" />
          <path d={svgPaths.p354bdc00} fill="#FD7568" id="Vector_163" />
          <path d={svgPaths.p28de7d40} fill="#FC5A4A" id="Vector_164" />
          <path d={svgPaths.p11480c00} fill="#FB5A4A" id="Vector_165" />
          <g id="Vector_166" />
          <path d={svgPaths.pb604c70} fill="#FB6153" id="Vector_167" />
          <g id="Vector_168" />
          <path d={svgPaths.p34929a00} fill="#FC6A5B" id="Vector_169" />
          <path d={svgPaths.p10990e80} fill="#FC675A" id="Vector_170" />
          <path d={svgPaths.p2b98970} fill="#F8473B" id="Vector_171" />
          <path d={svgPaths.p697d9f0} fill="#F7392C" id="Vector_172" />
          <path d={svgPaths.p2b1b7300} fill="#F84637" id="Vector_173" />
          <path d={svgPaths.p3ac02600} fill="#F95143" id="Vector_174" />
          <path d={svgPaths.p37cf8c00} fill="#F95143" id="Vector_175" />
          <path d={svgPaths.p226aa080} fill="#F61D11" id="Vector_176" />
          <path d={svgPaths.pd796c00} fill="#F63A31" id="Vector_177" />
          <path d={svgPaths.p15546700} fill="#F6352B" id="Vector_178" />
          <path d={svgPaths.p338f7a00} fill="#F63A31" id="Vector_179" />
          <path d={svgPaths.p2f67ad00} fill="#F62C20" id="Vector_180" />
          <path d={svgPaths.p1b3eaba0} fill="#F63A31" id="Vector_181" />
          <path d={svgPaths.p177fc900} fill="#F0231F" id="Vector_182" />
          <path d={svgPaths.p205d5800} fill="#F0302A" id="Vector_183" />
          <path d={svgPaths.p36f78900} fill="#F63A31" id="Vector_184" />
          <path d={svgPaths.p2e1e4c00} fill="#EF352F" id="Vector_185" />
          <path d={svgPaths.p7f94e80} fill="#F63A31" id="Vector_186" />
          <path d={svgPaths.p256ba100} fill="#F62C20" id="Vector_187" />
          <path d={svgPaths.p25430c00} fill="#F64035" id="Vector_188" />
          <path d={svgPaths.p3a51e680} fill="#F95144" id="Vector_189" />
          <path d={svgPaths.p23d15600} fill="#F73B2F" id="Vector_190" />
          <path d={svgPaths.p1c9a6280} fill="#F73B2F" id="Vector_191" />
          <path d={svgPaths.p2fb89970} fill="#F84B3E" id="Vector_192" />
          <path d={svgPaths.p9da6080} fill="#F62519" id="Vector_193" />
          <path d={svgPaths.p2a999a00} fill="#F73226" id="Vector_194" />
          <path d={svgPaths.p3877d700} fill="#FB6356" id="Vector_195" />
          <path d={svgPaths.p15cbb5c0} fill="#F83B2E" id="Vector_196" />
          <path d={svgPaths.p37b23f00} fill="#F7463B" id="Vector_197" />
          <path d={svgPaths.p2cbfd180} fill="#FB594A" id="Vector_198" />
          <path d={svgPaths.p14189480} fill="#F23931" id="Vector_199" />
          <g id="Vector_200" />
          <path d={svgPaths.p14cb9500} fill="#F6271B" id="Vector_201" />
          <path d={svgPaths.p14bc7a00} fill="#F62C21" id="Vector_202" />
          <g id="Vector_203" />
          <g id="Vector_204" />
          <path d={svgPaths.p2db97600} fill="#F62C21" id="Vector_205" />
          <path d={svgPaths.pb108380} fill="#FC6A5B" id="Vector_206" />
          <path d={svgPaths.p1ac9f900} fill="#FB6153" id="Vector_207" />
          <path d={svgPaths.pd4c2d80} fill="#FB6153" id="Vector_208" />
          <path d={svgPaths.p3b7668c0} fill="#F40F02" id="Vector_209" />
          <path d={svgPaths.p18f27e80} fill="#F30C00" id="Vector_210" />
          <path d={svgPaths.p2e823b00} fill="#F40F02" id="Vector_211" />
          <path d={svgPaths.p18447800} fill="#F00A00" id="Vector_212" />
          <path d={svgPaths.p12b09580} fill="#FA5D4E" id="Vector_213" />
          <path d={svgPaths.pbf98600} fill="#FB6153" id="Vector_214" />
          <path d={svgPaths.p323e4500} fill="#F41105" id="Vector_215" />
          <g id="Vector_216" />
          <g id="Vector_217" />
          <path d={svgPaths.p33e061f0} fill="#F62C20" id="Vector_218" />
          <path d={svgPaths.p1ea06280} fill="#F41105" id="Vector_219" />
          <path d={svgPaths.p3bc2fb00} fill="#F41105" id="Vector_220" />
          <g id="Vector_221" />
          <path d={svgPaths.p15d96c00} fill="#F41105" id="Vector_222" />
          <path d={svgPaths.p2f947a00} fill="#F41105" id="Vector_223" />
          <path d={svgPaths.p29d36ef0} fill="#F5180C" id="Vector_224" />
          <path d={svgPaths.p27414500} fill="#F5170A" id="Vector_225" />
          <path d={svgPaths.p910d900} fill="#FC7264" id="Vector_226" />
          <path d={svgPaths.p21094b00} fill="#FC7366" id="Vector_227" />
          <path d={svgPaths.pc4f1d00} fill="#FD7D70" id="Vector_228" />
          <path d={svgPaths.pd2b0f80} fill="#FC6A5B" id="Vector_229" />
          <path d={svgPaths.p13aa9d00} fill="#FC7366" id="Vector_230" />
          <path d={svgPaths.p3b8338e0} fill="#FC6A5B" id="Vector_231" />
          <path d={svgPaths.p159dc800} fill="#FB6656" id="Vector_232" />
          <path d={svgPaths.p1f18ee00} fill="#FA4E3E" id="Vector_233" />
          <g id="Vector_234" />
          <path d={svgPaths.p142fb600} fill="#F62C20" id="Vector_235" />
          <path d={svgPaths.p3a9b4d00} fill="#F84336" id="Vector_236" />
          <path d={svgPaths.p3946ab00} fill="#F95041" id="Vector_237" />
          <path d={svgPaths.p23575740} fill="#FB5B4D" id="Vector_238" />
          <path d={svgPaths.p3918c900} fill="#F62114" id="Vector_239" />
          <path d={svgPaths.p109d1380} fill="#F64E45" id="Vector_240" />
          <path d={svgPaths.pc276200} fill="#F5342C" id="Vector_241" />
          <path d={svgPaths.p1e6d3600} fill="#FB6356" id="Vector_242" />
          <path d={svgPaths.p3fb81000} fill="#F64E45" id="Vector_243" />
          <g id="Vector_244" />
          <path d={svgPaths.p3c65c780} fill="#F64035" id="Vector_245" />
          <path d={svgPaths.p2d877200} fill="#F6352B" id="Vector_246" />
          <path d={svgPaths.p31807000} fill="#F73B2F" id="Vector_247" />
          <path d={svgPaths.p11079380} fill="#F84336" id="Vector_248" />
          <path d={svgPaths.p13debe00} fill="#F74237" id="Vector_249" />
          <path d={svgPaths.p19514e00} fill="#F73B2F" id="Vector_250" />
          <path d={svgPaths.p1f205180} fill="#F74237" id="Vector_251" />
          <path d={svgPaths.p16984900} fill="#F62114" id="Vector_252" />
          <path d={svgPaths.p7730a00} fill="#F5160B" id="Vector_253" />
          <path d={svgPaths.p9b8b600} fill="#F83122" id="Vector_254" />
          <path d={svgPaths.p1828e300} fill="#F41D12" id="Vector_255" />
          <path d={svgPaths.p22251070} fill="#FC6B5E" id="Vector_256" />
          <path d={svgPaths.p2b97b380} fill="#FC6E60" id="Vector_257" />
          <path d={svgPaths.p2464bb00} fill="#FA5D51" id="Vector_258" />
          <path d={svgPaths.p3944b880} fill="#FC6E60" id="Vector_259" />
          <path d={svgPaths.p11c7a200} fill="#F31E14" id="Vector_260" />
          <path d={svgPaths.paf54300} fill="#FD7B6C" id="Vector_261" />
          <path d={svgPaths.p2834ebc0} fill="#FC776A" id="Vector_262" />
          <path d={svgPaths.p11bc0300} fill="#FD7D70" id="Vector_263" />
          <g id="Vector_264" />
          <path d={svgPaths.p3036e900} fill="#F30C00" id="Vector_265" />
          <path d={svgPaths.pc52da80} fill="#F41507" id="Vector_266" />
          <path d={svgPaths.p946d200} fill="#F5180C" id="Vector_267" />
          <path d={svgPaths.p24ab4d00} fill="#FB6E5F" id="Vector_268" />
          <path d={svgPaths.pca018b0} fill="#FB6659" id="Vector_269" />
          <path d={svgPaths.p3865c200} fill="#FA6859" id="Vector_270" />
          <path d={svgPaths.p2ea2f100} fill="#FB6656" id="Vector_271" />
          <path d={svgPaths.pa3fc900} fill="#FB5B4D" id="Vector_272" />
          <g id="Vector_273" />
          <path d={svgPaths.p35651200} fill="#FC776A" id="Vector_274" />
          <path d={svgPaths.pb62a680} fill="#FD7869" id="Vector_275" />
          <path d={svgPaths.p8c3bcf0} fill="#FC6E60" id="Vector_276" />
          <path d={svgPaths.p204f5180} fill="#FB6659" id="Vector_277" />
          <g id="Vector_278" />
          <path d={svgPaths.p394ce380} fill="#F62519" id="Vector_279" />
          <path d={svgPaths.p4cc7650} fill="#FB6356" id="Vector_280" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute contents inset-[0_0_0.03%_-0.01%]" data-name="BACKGROUND 1">
      <Group7 />
    </div>
  );
}

function LocationPin() {
  return (
    <div className="absolute h-[26.19px] left-[192px] overflow-clip top-[1689px] w-[18px]" data-name="Location pin 1">
      <Background />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#7a843e] text-center w-full">
      <p className="font-['PP_Pangaia:Medium',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[48px] tracking-[-0.96px] w-full">Shukura</p>
      <p className="font-['Cormorant_Garamond:Medium_Italic',sans-serif] font-medium italic leading-[normal] relative shrink-0 text-[18px] tracking-[-0.09px] w-full">Shukura Tsikhisdziri, Kobuleti, Georgia, 6200</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[0_0_0.03%_-0.01%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.9936" preserveAspectRatio="none" viewBox="0 0 16.4963 23.9936" width="16.4963">
        <g id="Group">
          <path d={svgPaths.p8055400} fill="#F20C03" id="Vector" />
          <path d={svgPaths.p1ba19c00} fill="#FB5D4F" id="Vector_2" />
          <path d={svgPaths.p391e2900} fill="#F63A31" id="Vector_3" />
          <path d={svgPaths.p16def700} fill="#F65048" id="Vector_4" />
          <path d={svgPaths.p222e2e40} fill="#F7463B" id="Vector_5" />
          <path d={svgPaths.p1a994a00} fill="#F94C40" id="Vector_6" />
          <path d={svgPaths.p47f0770} fill="#F21C13" id="Vector_7" />
          <path d={svgPaths.p2d5078f0} fill="#F65048" id="Vector_8" />
          <path d={svgPaths.p2428ca80} fill="#EB0700" id="Vector_9" />
          <path d={svgPaths.p1bb10000} fill="#F00A00" id="Vector_10" />
          <path d={svgPaths.p38400600} fill="#F85B50" id="Vector_11" />
          <path d={svgPaths.p42b1000} fill="#ED0700" id="Vector_12" />
          <path d={svgPaths.p4787740} fill="#F66A64" id="Vector_13" />
          <path d={svgPaths.p3a888a80} fill="#F4534C" id="Vector_14" />
          <path d={svgPaths.pa919100} fill="#F83C2F" id="Vector_15" />
          <path d={svgPaths.p9c81000} fill="#FA766D" id="Vector_16" />
          <path d={svgPaths.pbaa6400} fill="#EF352F" id="Vector_17" />
          <path d={svgPaths.p12ece200} fill="#F65851" id="Vector_18" />
          <path d={svgPaths.p2699b1f0} fill="#EB0700" id="Vector_19" />
          <path d={svgPaths.p3cc3ca00} fill="#FC7A6E" id="Vector_20" />
          <path d={svgPaths.p26976e80} fill="#EE0900" id="Vector_21" />
          <path d={svgPaths.p17074380} fill="#EE0900" id="Vector_22" />
          <path d={svgPaths.p3793f500} fill="#F8746E" id="Vector_23" />
          <path d={svgPaths.p24bb9300} fill="#FC8277" id="Vector_24" />
          <path d={svgPaths.p18faf00} fill="#F75E56" id="Vector_25" />
          <path d={svgPaths.p3655be00} fill="#F2423C" id="Vector_26" />
          <path d={svgPaths.p26e30400} fill="#F95D53" id="Vector_27" />
          <path d={svgPaths.p2e2be600} fill="#F97971" id="Vector_28" />
          <path d={svgPaths.p35ac8b80} fill="#ED0700" id="Vector_29" />
          <path d={svgPaths.p138c2480} fill="#F66C66" id="Vector_30" />
          <path d={svgPaths.p27c5f100} fill="#EE2119" id="Vector_31" />
          <path d={svgPaths.p17d7e5f0} fill="#EA0700" id="Vector_32" />
          <path d={svgPaths.p923f40} fill="#F7534A" id="Vector_33" />
          <path d={svgPaths.p2d4a2600} fill="#EA0700" id="Vector_34" />
          <path d={svgPaths.p2adee000} fill="#F96C65" id="Vector_35" />
          <path d={svgPaths.p3ded4d00} fill="#F13731" id="Vector_36" />
          <path d={svgPaths.p73be280} fill="#F66C66" id="Vector_37" />
          <path d={svgPaths.p276dde80} fill="#F66C66" id="Vector_38" />
          <path d={svgPaths.p1c9d7900} fill="#F94C40" id="Vector_39" />
          <path d={svgPaths.p340a2e70} fill="#EA0600" id="Vector_40" />
          <path d={svgPaths.p170d3700} fill="#F75A51" id="Vector_41" />
          <path d={svgPaths.p16f74980} fill="#F7463B" id="Vector_42" />
          <path d={svgPaths.p359f3200} fill="#EF352F" id="Vector_43" />
          <path d={svgPaths.p9a07700} fill="#F1514D" id="Vector_44" />
          <path d={svgPaths.p3e1cab10} fill="#F57771" id="Vector_45" />
          <path d={svgPaths.p3d4b6380} fill="#F9675F" id="Vector_46" />
          <path d={svgPaths.p12a03100} fill="#FC6F62" id="Vector_47" />
          <g id="Vector_48" />
          <path d={svgPaths.p15f60900} fill="#EA0700" id="Vector_49" />
          <path d={svgPaths.p11cf7340} fill="#FA6A5D" id="Vector_50" />
          <path d={svgPaths.p19556480} fill="#FC8277" id="Vector_51" />
          <path d={svgPaths.p276d2500} fill="#FB6153" id="Vector_52" />
          <path d={svgPaths.p39b58900} fill="#E50806" id="Vector_53" />
          <path d={svgPaths.p10940000} fill="#F57771" id="Vector_54" />
          <path d={svgPaths.p6dca670} fill="#FA6A5D" id="Vector_55" />
          <g id="Vector_56" />
          <path d={svgPaths.p650f400} fill="#EE0900" id="Vector_57" />
          <g id="Vector_58" />
          <path d={svgPaths.p175ccb00} fill="#EA0600" id="Vector_59" />
          <g id="Vector_60" />
          <g id="Vector_61" />
          <path d={svgPaths.pf533400} fill="#F20C03" id="Vector_62" />
          <path d={svgPaths.pd42cdf0} fill="#F20C03" id="Vector_63" />
          <g id="Vector_64" />
          <path d={svgPaths.p2c306900} fill="#F13731" id="Vector_65" />
          <g id="Vector_66" />
          <g id="Vector_67" />
          <path d={svgPaths.p1005a400} fill="#F66C66" id="Vector_68" />
          <g id="Vector_69" />
          <path d={svgPaths.p46fff80} fill="#F30C00" id="Vector_70" />
          <path d={svgPaths.p1dbfb500} fill="#F20A00" id="Vector_71" />
          <path d={svgPaths.p27224970} fill="#F30B00" id="Vector_72" />
          <path d={svgPaths.p123b5c00} fill="#F20A00" id="Vector_73" />
          <path d={svgPaths.p28a4aa80} fill="#F20A00" id="Vector_74" />
          <path d={svgPaths.p29366380} fill="#F00900" id="Vector_75" />
          <path d={svgPaths.p1fbc9200} fill="#F30C00" id="Vector_76" />
          <path d={svgPaths.p27072f00} fill="#F30D02" id="Vector_77" />
          <path d={svgPaths.p1e95dd00} fill="#F41105" id="Vector_78" />
          <g id="Vector_79" />
          <path d={svgPaths.p31087b80} fill="#FC6A5B" id="Vector_80" />
          <path d={svgPaths.p3997c980} fill="#FB6153" id="Vector_81" />
          <path d={svgPaths.p6781a40} fill="#F95143" id="Vector_82" />
          <path d={svgPaths.p3feaaa40} fill="#FA6A5D" id="Vector_83" />
          <path d={svgPaths.p182b0280} fill="#F95143" id="Vector_84" />
          <path d={svgPaths.pcecd580} fill="#FB6656" id="Vector_85" />
          <path d={svgPaths.p21cff00} fill="#FA564A" id="Vector_86" />
          <path d={svgPaths.p1ea5ec00} fill="#FA564A" id="Vector_87" />
          <path d={svgPaths.p19ea0300} fill="#F62C20" id="Vector_88" />
          <path d={svgPaths.p249f28f0} fill="#F64035" id="Vector_89" />
          <path d={svgPaths.p8c3b4c0} fill="#F74339" id="Vector_90" />
          <path d={svgPaths.pe1a6740} fill="#F62C20" id="Vector_91" />
          <path d={svgPaths.pf542c80} fill="#F74339" id="Vector_92" />
          <path d={svgPaths.p71d6200} fill="#F74237" id="Vector_93" />
          <path d={svgPaths.p33512580} fill="#F73226" id="Vector_94" />
          <path d={svgPaths.p3e341b00} fill="#F40F02" id="Vector_95" />
          <path d={svgPaths.p359ed900} fill="#F73B2F" id="Vector_96" />
          <path d={svgPaths.pbbf400} fill="#F9493D" id="Vector_97" />
          <path d={svgPaths.p3a5be380} fill="#F73529" id="Vector_98" />
          <path d={svgPaths.p8629f00} fill="#F63228" id="Vector_99" />
          <path d={svgPaths.p3854ea00} fill="#F6352B" id="Vector_100" />
          <path d={svgPaths.p39bf4f80} fill="#F73B2F" id="Vector_101" />
          <path d={svgPaths.p1ed37380} fill="#F65048" id="Vector_102" />
          <path d={svgPaths.p35f8e200} fill="#FB594A" id="Vector_103" />
          <path d={svgPaths.p38c1bf80} fill="#FA5446" id="Vector_104" />
          <path d={svgPaths.p2a12e500} fill="#F83F34" id="Vector_105" />
          <path d={svgPaths.p11c58580} fill="#FB594A" id="Vector_106" />
          <path d={svgPaths.p378e4800} fill="#FB594A" id="Vector_107" />
          <path d={svgPaths.p23269500} fill="#F30C00" id="Vector_108" />
          <path d={svgPaths.p3b8e9d00} fill="#F13731" id="Vector_109" />
          <path d={svgPaths.p2ad59e00} fill="#F20C03" id="Vector_110" />
          <path d={svgPaths.p35aaea40} fill="#F40F02" id="Vector_111" />
          <path d={svgPaths.pfbb6900} fill="#F20C03" id="Vector_112" />
          <path d={svgPaths.p3aed7d00} fill="#F64138" id="Vector_113" />
          <path d={svgPaths.p83dff00} fill="#DD0200" id="Vector_114" />
          <path d={svgPaths.p13e54d80} fill="#EA0700" id="Vector_115" />
          <g id="Vector_116" />
          <path d={svgPaths.p9ed79c0} fill="#EF0900" id="Vector_117" />
          <path d={svgPaths.p1a3eca00} fill="#EF0800" id="Vector_118" />
          <path d={svgPaths.p24a42980} fill="#ED0700" id="Vector_119" />
          <path d={svgPaths.pfa29980} fill="#F10A00" id="Vector_120" />
          <path d={svgPaths.p2debf700} fill="#EA0600" id="Vector_121" />
          <path d={svgPaths.p192f9100} fill="#EC0800" id="Vector_122" />
          <path d={svgPaths.p308df600} fill="#ED0700" id="Vector_123" />
          <path d={svgPaths.p34478a40} fill="#F84637" id="Vector_124" />
          <path d={svgPaths.p31e3fd00} fill="#F7291D" id="Vector_125" />
          <path d={svgPaths.p2260a500} fill="#F41F15" id="Vector_126" />
          <g id="Vector_127" />
          <path d={svgPaths.p22c4be80} fill="#F00A00" id="Vector_128" />
          <g id="Vector_129" />
          <path d={svgPaths.p15352180} fill="#FB5A4D" id="Vector_130" />
          <path d={svgPaths.p1468ec80} fill="#FB665A" id="Vector_131" />
          <path d={svgPaths.p14708600} fill="#FB665A" id="Vector_132" />
          <path d={svgPaths.p1f9d8500} fill="#FC6F62" id="Vector_133" />
          <path d={svgPaths.p2afd4680} fill="#FB6153" id="Vector_134" />
          <path d={svgPaths.p361cd1c0} fill="#FC675A" id="Vector_135" />
          <g id="Vector_136" />
          <path d={svgPaths.p31432200} fill="#FA766D" id="Vector_137" />
          <path d={svgPaths.p123cf100} fill="#F20A00" id="Vector_138" />
          <path d={svgPaths.p14d59020} fill="#F41105" id="Vector_139" />
          <path d={svgPaths.p9a1f570} fill="#EE0900" id="Vector_140" />
          <path d={svgPaths.p324bed00} fill="#F00A00" id="Vector_141" />
          <path d={svgPaths.p1c4f7000} fill="#FC6F62" id="Vector_142" />
          <path d={svgPaths.p1416a9f0} fill="#FC7C6F" id="Vector_143" />
          <path d={svgPaths.p340ea900} fill="#EB0700" id="Vector_144" />
          <path d={svgPaths.p175e4200} fill="#F5170A" id="Vector_145" />
          <path d={svgPaths.p2eed180} fill="#F40F02" id="Vector_146" />
          <path d={svgPaths.p1eb0c450} fill="#F41105" id="Vector_147" />
          <path d={svgPaths.peebe800} fill="#F41105" id="Vector_148" />
          <path d={svgPaths.p7e93bd0} fill="#F41105" id="Vector_149" />
          <path d={svgPaths.pcf2b900} fill="#F30C00" id="Vector_150" />
          <path d={svgPaths.p14f2b700} fill="#F20C03" id="Vector_151" />
          <path d={svgPaths.pfd53e80} fill="#F00A00" id="Vector_152" />
          <path d={svgPaths.p363fc680} fill="#F50D00" id="Vector_153" />
          <path d={svgPaths.p1df3fa80} fill="#F40D00" id="Vector_154" />
          <path d={svgPaths.p1b8a5280} fill="#F20C03" id="Vector_155" />
          <path d={svgPaths.p2afd4800} fill="#F40D00" id="Vector_156" />
          <path d={svgPaths.p31e36600} fill="#F00A00" id="Vector_157" />
          <path d={svgPaths.p1606c00} fill="#F20C03" id="Vector_158" />
          <path d={svgPaths.p3b716900} fill="#F20C03" id="Vector_159" />
          <g id="Vector_160" />
          <path d={svgPaths.pb0ab880} fill="#F20C03" id="Vector_161" />
          <path d={svgPaths.p2c6c1e00} fill="#FC6456" id="Vector_162" />
          <path d={svgPaths.p241a5d80} fill="#FD7568" id="Vector_163" />
          <path d={svgPaths.p28d0ad00} fill="#FC5A4A" id="Vector_164" />
          <path d={svgPaths.p2bde8f80} fill="#FB5A4A" id="Vector_165" />
          <g id="Vector_166" />
          <path d={svgPaths.p23bffcc0} fill="#FB6153" id="Vector_167" />
          <g id="Vector_168" />
          <path d={svgPaths.p2f43a500} fill="#FC6A5B" id="Vector_169" />
          <path d={svgPaths.p1290e100} fill="#FC675A" id="Vector_170" />
          <path d={svgPaths.p3a548e80} fill="#F8473B" id="Vector_171" />
          <path d={svgPaths.p3e3d9500} fill="#F7392C" id="Vector_172" />
          <path d={svgPaths.p224c9600} fill="#F84637" id="Vector_173" />
          <path d={svgPaths.p1ae1bb80} fill="#F95143" id="Vector_174" />
          <path d={svgPaths.p4165700} fill="#F95143" id="Vector_175" />
          <path d={svgPaths.p7b02d40} fill="#F61D11" id="Vector_176" />
          <path d={svgPaths.p1c37c800} fill="#F63A31" id="Vector_177" />
          <path d={svgPaths.p1bc5800} fill="#F6352B" id="Vector_178" />
          <path d={svgPaths.p13ee4d50} fill="#F63A31" id="Vector_179" />
          <path d={svgPaths.p33bcc900} fill="#F62C20" id="Vector_180" />
          <path d={svgPaths.pf1a5a80} fill="#F63A31" id="Vector_181" />
          <path d={svgPaths.p24d1a100} fill="#F0231F" id="Vector_182" />
          <path d={svgPaths.p36561800} fill="#F0302A" id="Vector_183" />
          <path d={svgPaths.p3ba2f00} fill="#F63A31" id="Vector_184" />
          <path d={svgPaths.p23859200} fill="#EF352F" id="Vector_185" />
          <path d={svgPaths.p305dddf0} fill="#F63A31" id="Vector_186" />
          <path d={svgPaths.p3af520f0} fill="#F62C20" id="Vector_187" />
          <path d={svgPaths.p3ba34680} fill="#F64035" id="Vector_188" />
          <path d={svgPaths.p4acdd80} fill="#F95144" id="Vector_189" />
          <path d={svgPaths.p23326300} fill="#F73B2F" id="Vector_190" />
          <path d={svgPaths.p372c7e70} fill="#F73B2F" id="Vector_191" />
          <path d={svgPaths.p2eb7bd00} fill="#F84B3E" id="Vector_192" />
          <path d={svgPaths.p21f1e400} fill="#F62519" id="Vector_193" />
          <path d={svgPaths.p986fd00} fill="#F73226" id="Vector_194" />
          <path d={svgPaths.p353e1580} fill="#FB6356" id="Vector_195" />
          <path d={svgPaths.p1dba5bf1} fill="#F83B2E" id="Vector_196" />
          <path d={svgPaths.pbc08d80} fill="#F7463B" id="Vector_197" />
          <path d={svgPaths.p147a7880} fill="#FB594A" id="Vector_198" />
          <path d={svgPaths.pa781b00} fill="#F23931" id="Vector_199" />
          <g id="Vector_200" />
          <path d={svgPaths.p273de00} fill="#F6271B" id="Vector_201" />
          <path d={svgPaths.p17874e80} fill="#F62C21" id="Vector_202" />
          <g id="Vector_203" />
          <g id="Vector_204" />
          <path d={svgPaths.p114e4600} fill="#F62C21" id="Vector_205" />
          <path d={svgPaths.p3f674380} fill="#FC6A5B" id="Vector_206" />
          <path d={svgPaths.p3003aa00} fill="#FB6153" id="Vector_207" />
          <path d={svgPaths.p148a64e0} fill="#FB6153" id="Vector_208" />
          <path d={svgPaths.p1901e900} fill="#F40F02" id="Vector_209" />
          <path d={svgPaths.p76d9700} fill="#F30C00" id="Vector_210" />
          <path d={svgPaths.p27cb2000} fill="#F40F02" id="Vector_211" />
          <path d={svgPaths.p1927d680} fill="#F00A00" id="Vector_212" />
          <path d={svgPaths.p23cfd780} fill="#FA5D4E" id="Vector_213" />
          <path d={svgPaths.p208fa280} fill="#FB6153" id="Vector_214" />
          <path d={svgPaths.p134f530} fill="#F41105" id="Vector_215" />
          <g id="Vector_216" />
          <g id="Vector_217" />
          <path d={svgPaths.p1321a600} fill="#F62C20" id="Vector_218" />
          <path d={svgPaths.p3f23f880} fill="#F41105" id="Vector_219" />
          <path d={svgPaths.p269b2f00} fill="#F41105" id="Vector_220" />
          <g id="Vector_221" />
          <path d={svgPaths.p3bf99600} fill="#F41105" id="Vector_222" />
          <path d={svgPaths.p3cb9c500} fill="#F41105" id="Vector_223" />
          <path d={svgPaths.p38c7eb80} fill="#F5180C" id="Vector_224" />
          <path d={svgPaths.p4150220} fill="#F5170A" id="Vector_225" />
          <path d={svgPaths.p172b4c00} fill="#FC7264" id="Vector_226" />
          <path d={svgPaths.p2aa3edf0} fill="#FC7366" id="Vector_227" />
          <path d={svgPaths.p347bb400} fill="#FD7D70" id="Vector_228" />
          <path d={svgPaths.p3d551f00} fill="#FC6A5B" id="Vector_229" />
          <path d={svgPaths.p2632e800} fill="#FC7366" id="Vector_230" />
          <path d={svgPaths.p261c2b80} fill="#FC6A5B" id="Vector_231" />
          <path d={svgPaths.p18f80b00} fill="#FB6656" id="Vector_232" />
          <path d={svgPaths.pd0d49c0} fill="#FA4E3E" id="Vector_233" />
          <g id="Vector_234" />
          <path d={svgPaths.p22379000} fill="#F62C20" id="Vector_235" />
          <path d={svgPaths.p10bc9180} fill="#F84336" id="Vector_236" />
          <path d={svgPaths.paad7600} fill="#F95041" id="Vector_237" />
          <path d={svgPaths.p1b66ad00} fill="#FB5B4D" id="Vector_238" />
          <path d={svgPaths.p6c893f0} fill="#F62114" id="Vector_239" />
          <path d={svgPaths.p23cf5a80} fill="#F64E45" id="Vector_240" />
          <path d={svgPaths.p213fdc00} fill="#F5342C" id="Vector_241" />
          <path d={svgPaths.p1eca5c00} fill="#FB6356" id="Vector_242" />
          <path d={svgPaths.p12d2c00} fill="#F64E45" id="Vector_243" />
          <g id="Vector_244" />
          <path d={svgPaths.p2f6b8f00} fill="#F64035" id="Vector_245" />
          <path d={svgPaths.p308ace40} fill="#F6352B" id="Vector_246" />
          <path d={svgPaths.p1c9d3c00} fill="#F73B2F" id="Vector_247" />
          <path d={svgPaths.p336d2000} fill="#F84336" id="Vector_248" />
          <path d={svgPaths.p39774f80} fill="#F74237" id="Vector_249" />
          <path d={svgPaths.p365d9d80} fill="#F73B2F" id="Vector_250" />
          <path d={svgPaths.p20961200} fill="#F74237" id="Vector_251" />
          <path d={svgPaths.p28955d80} fill="#F62114" id="Vector_252" />
          <path d={svgPaths.p3c7d3000} fill="#F5160B" id="Vector_253" />
          <path d={svgPaths.p11301700} fill="#F83122" id="Vector_254" />
          <path d={svgPaths.p2ef26f00} fill="#F41D12" id="Vector_255" />
          <path d={svgPaths.p180e7700} fill="#FC6B5E" id="Vector_256" />
          <path d={svgPaths.p1f0e0e80} fill="#FC6E60" id="Vector_257" />
          <path d={svgPaths.p7adf780} fill="#FA5D51" id="Vector_258" />
          <path d={svgPaths.pe58e0} fill="#FC6E60" id="Vector_259" />
          <path d={svgPaths.p1a518f00} fill="#F31E14" id="Vector_260" />
          <path d={svgPaths.pecfb700} fill="#FD7B6C" id="Vector_261" />
          <path d={svgPaths.p4c4d300} fill="#FC776A" id="Vector_262" />
          <path d={svgPaths.p29ac7100} fill="#FD7D70" id="Vector_263" />
          <g id="Vector_264" />
          <path d={svgPaths.p42c7700} fill="#F30C00" id="Vector_265" />
          <path d={svgPaths.p198e3980} fill="#F41507" id="Vector_266" />
          <path d={svgPaths.p1f2f3400} fill="#F5180C" id="Vector_267" />
          <path d={svgPaths.p1dcc5840} fill="#FB6E5F" id="Vector_268" />
          <path d={svgPaths.p3ca57b80} fill="#FB6659" id="Vector_269" />
          <path d={svgPaths.p3b25db00} fill="#FA6859" id="Vector_270" />
          <path d={svgPaths.p1f83200} fill="#FB6656" id="Vector_271" />
          <path d={svgPaths.p3f508900} fill="#FB5B4D" id="Vector_272" />
          <g id="Vector_273" />
          <path d={svgPaths.p5f50400} fill="#FC776A" id="Vector_274" />
          <path d={svgPaths.pc680880} fill="#FD7869" id="Vector_275" />
          <path d={svgPaths.p1a3f1a00} fill="#FC6E60" id="Vector_276" />
          <path d={svgPaths.p20d50800} fill="#FB6659" id="Vector_277" />
          <g id="Vector_278" />
          <path d={svgPaths.p1b18cc00} fill="#F62519" id="Vector_279" />
          <path d={svgPaths.p6e2df00} fill="#FB6356" id="Vector_280" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute contents inset-[0_0_0.03%_-0.01%]" data-name="BACKGROUND 1">
      <Group8 />
    </div>
  );
}

function LocationPin1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[16.495px]" data-name="Location pin 1">
      <Background1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[12px] h-[46px] items-center justify-center px-[36px] py-[2px] relative rounded-[1000px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#7a843e] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <LocationPin1 />
      <p className="[word-break:break-word] font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#7a843e] text-[24px] text-center tracking-[-0.48px] whitespace-nowrap">Open in Maps</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-0 p-[24px] top-[1998px] w-[402px]">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[0_0_0_0.02%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="127.105" preserveAspectRatio="none" viewBox="0 0 65.06 127.105" width="65.06">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3f07fb00} fill="#E58498" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p194feb80} fill="#D76880" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p33acd000} fill="#DD8599" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p22443600} fill="#DDB3BE" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3e692a00} fill="#D98399" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p223df8c0} fill="#C85D6D" fillRule="evenodd" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.pb7d4d00} fill="#C2475C" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1459a880} fill="#DD8599" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p2c587a00} fill="#C22C41" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p15951080} fill="#D6485A" fillRule="evenodd" id="Vector_10" />
          <path clipRule="evenodd" d={svgPaths.p19821880} fill="#B2172D" fillRule="evenodd" id="Vector_11" />
          <path clipRule="evenodd" d={svgPaths.p1dfbbe80} fill="#B62838" fillRule="evenodd" id="Vector_12" />
          <path clipRule="evenodd" d={svgPaths.p37934280} fill="#C22C41" fillRule="evenodd" id="Vector_13" />
          <path clipRule="evenodd" d={svgPaths.p1d6bd80} fill="#B11B32" fillRule="evenodd" id="Vector_14" />
          <path clipRule="evenodd" d={svgPaths.p81ee480} fill="#C44B5F" fillRule="evenodd" id="Vector_15" />
          <path clipRule="evenodd" d={svgPaths.p7c3200} fill="#D8718B" fillRule="evenodd" id="Vector_16" />
          <path clipRule="evenodd" d={svgPaths.p6198a00} fill="#D4546E" fillRule="evenodd" id="Vector_17" />
          <path clipRule="evenodd" d={svgPaths.p3a610f00} fill="#E37C91" fillRule="evenodd" id="Vector_18" />
          <path clipRule="evenodd" d={svgPaths.p15d91900} fill="#C93751" fillRule="evenodd" id="Vector_19" />
          <path clipRule="evenodd" d={svgPaths.p2e218980} fill="#E76E83" fillRule="evenodd" id="Vector_20" />
          <path clipRule="evenodd" d={svgPaths.p2d39e100} fill="#B51C2E" fillRule="evenodd" id="Vector_21" />
          <path clipRule="evenodd" d={svgPaths.p13607980} fill="#D8566C" fillRule="evenodd" id="Vector_22" />
          <path clipRule="evenodd" d={svgPaths.p2a15cd00} fill="#C95066" fillRule="evenodd" id="Vector_23" />
          <path clipRule="evenodd" d={svgPaths.p15342970} fill="#DF6578" fillRule="evenodd" id="Vector_24" />
          <path clipRule="evenodd" d={svgPaths.p32a3b840} fill="#E37C91" fillRule="evenodd" id="Vector_25" />
          <path clipRule="evenodd" d={svgPaths.p678f780} fill="#E798A7" fillRule="evenodd" id="Vector_26" />
          <path clipRule="evenodd" d={svgPaths.p1667b080} fill="#D24A64" fillRule="evenodd" id="Vector_27" />
          <path clipRule="evenodd" d={svgPaths.p3ef3fe80} fill="#DE5D78" fillRule="evenodd" id="Vector_28" />
          <path clipRule="evenodd" d={svgPaths.p1162a400} fill="#BE2339" fillRule="evenodd" id="Vector_29" />
          <path clipRule="evenodd" d={svgPaths.p3e47b800} fill="#B61F38" fillRule="evenodd" id="Vector_30" />
          <path clipRule="evenodd" d={svgPaths.pe05e630} fill="#D1526A" fillRule="evenodd" id="Vector_31" />
          <path clipRule="evenodd" d={svgPaths.p1a5d0480} fill="#C95066" fillRule="evenodd" id="Vector_32" />
          <path clipRule="evenodd" d={svgPaths.p10122300} fill="#9C444F" fillRule="evenodd" id="Vector_33" />
          <path clipRule="evenodd" d={svgPaths.p3a5b3200} fill="#D76075" fillRule="evenodd" id="Vector_34" />
          <path clipRule="evenodd" d={svgPaths.p2cf0080} fill="#E17288" fillRule="evenodd" id="Vector_35" />
          <path clipRule="evenodd" d={svgPaths.p30d13e00} fill="#E57C92" fillRule="evenodd" id="Vector_36" />
          <path clipRule="evenodd" d={svgPaths.pc896f0} fill="#D85869" fillRule="evenodd" id="Vector_37" />
          <path clipRule="evenodd" d={svgPaths.p39396700} fill="#D3687A" fillRule="evenodd" id="Vector_38" />
          <path clipRule="evenodd" d={svgPaths.p5362100} fill="#DA707E" fillRule="evenodd" id="Vector_39" />
          <path clipRule="evenodd" d={svgPaths.p1ef4ea70} fill="#AB1526" fillRule="evenodd" id="Vector_40" />
          <path clipRule="evenodd" d={svgPaths.p1bd77280} fill="#BD2635" fillRule="evenodd" id="Vector_41" />
          <path clipRule="evenodd" d={svgPaths.p26f95d80} fill="#9E1119" fillRule="evenodd" id="Vector_42" />
          <path clipRule="evenodd" d={svgPaths.p3a304e00} fill="#E798A4" fillRule="evenodd" id="Vector_43" />
          <path clipRule="evenodd" d={svgPaths.p2909cea0} fill="#DA707E" fillRule="evenodd" id="Vector_44" />
          <path clipRule="evenodd" d={svgPaths.pa45c80} fill="#BD2635" fillRule="evenodd" id="Vector_45" />
          <path clipRule="evenodd" d={svgPaths.p184ef500} fill="#C7263D" fillRule="evenodd" id="Vector_46" />
          <path clipRule="evenodd" d={svgPaths.p2313ad00} fill="#B4152A" fillRule="evenodd" id="Vector_47" />
          <path clipRule="evenodd" d={svgPaths.p3c95b780} fill="#AC1526" fillRule="evenodd" id="Vector_48" />
          <path clipRule="evenodd" d={svgPaths.p27fcb080} fill="#D7465E" fillRule="evenodd" id="Vector_49" />
          <path clipRule="evenodd" d={svgPaths.pc244200} fill="#D54559" fillRule="evenodd" id="Vector_50" />
          <path clipRule="evenodd" d={svgPaths.p16425880} fill="#D75064" fillRule="evenodd" id="Vector_51" />
          <path clipRule="evenodd" d={svgPaths.p1ec1b200} fill="#AF0C21" fillRule="evenodd" id="Vector_52" />
          <path clipRule="evenodd" d={svgPaths.pbcb3a00} fill="#E36884" fillRule="evenodd" id="Vector_53" />
          <path clipRule="evenodd" d={svgPaths.p133b5550} fill="#CC4259" fillRule="evenodd" id="Vector_54" />
          <path clipRule="evenodd" d={svgPaths.pd95e000} fill="#A11227" fillRule="evenodd" id="Vector_55" />
          <path clipRule="evenodd" d={svgPaths.p28266d30} fill="#C72E46" fillRule="evenodd" id="Vector_56" />
          <path clipRule="evenodd" d={svgPaths.p329f5540} fill="#D63F59" fillRule="evenodd" id="Vector_57" />
          <path clipRule="evenodd" d={svgPaths.p2d4300} fill="#DA5F73" fillRule="evenodd" id="Vector_58" />
          <path clipRule="evenodd" d={svgPaths.p3203fd00} fill="#C13545" fillRule="evenodd" id="Vector_59" />
          <path clipRule="evenodd" d={svgPaths.p3fff9a00} fill="#D24A64" fillRule="evenodd" id="Vector_60" />
          <path clipRule="evenodd" d={svgPaths.p1360e700} fill="#C6384C" fillRule="evenodd" id="Vector_61" />
          <path clipRule="evenodd" d={svgPaths.p15233d00} fill="#AD152C" fillRule="evenodd" id="Vector_62" />
          <path clipRule="evenodd" d={svgPaths.pd8af200} fill="#BE263D" fillRule="evenodd" id="Vector_63" />
          <path clipRule="evenodd" d={svgPaths.p28b28800} fill="#C15465" fillRule="evenodd" id="Vector_64" />
          <path clipRule="evenodd" d={svgPaths.p393e6b00} fill="#BE1E34" fillRule="evenodd" id="Vector_65" />
          <path clipRule="evenodd" d={svgPaths.p1a3af2f0} fill="#AC1728" fillRule="evenodd" id="Vector_66" />
          <path clipRule="evenodd" d={svgPaths.p125c100} fill="#C6384C" fillRule="evenodd" id="Vector_67" />
          <path clipRule="evenodd" d={svgPaths.p7ca780} fill="#B01027" fillRule="evenodd" id="Vector_68" />
          <path clipRule="evenodd" d={svgPaths.p36bfe480} fill="#AC1728" fillRule="evenodd" id="Vector_69" />
          <path clipRule="evenodd" d={svgPaths.p316b2580} fill="#CD4B58" fillRule="evenodd" id="Vector_70" />
          <path clipRule="evenodd" d={svgPaths.p1610980} fill="#CF4E60" fillRule="evenodd" id="Vector_71" />
          <path clipRule="evenodd" d={svgPaths.pac50b00} fill="#CD4D5F" fillRule="evenodd" id="Vector_72" />
          <path clipRule="evenodd" d={svgPaths.p347e6c00} fill="#C33347" fillRule="evenodd" id="Vector_73" />
          <path clipRule="evenodd" d={svgPaths.p34249740} fill="#BB273C" fillRule="evenodd" id="Vector_74" />
          <path clipRule="evenodd" d={svgPaths.p1447d440} fill="#D85A6F" fillRule="evenodd" id="Vector_75" />
          <path clipRule="evenodd" d={svgPaths.p1c9be380} fill="#D8697E" fillRule="evenodd" id="Vector_76" />
          <path clipRule="evenodd" d={svgPaths.p1535a200} fill="#D76F82" fillRule="evenodd" id="Vector_77" />
          <path clipRule="evenodd" d={svgPaths.p2d13ec00} fill="#B62A38" fillRule="evenodd" id="Vector_78" />
          <path clipRule="evenodd" d={svgPaths.p13d871c0} fill="#CD4B58" fillRule="evenodd" id="Vector_79" />
          <path clipRule="evenodd" d={svgPaths.p2c593100} fill="#C63A46" fillRule="evenodd" id="Vector_80" />
          <path clipRule="evenodd" d={svgPaths.p97afc00} fill="#CF7786" fillRule="evenodd" id="Vector_81" />
          <path clipRule="evenodd" d={svgPaths.p1eca4380} fill="#D37E8C" fillRule="evenodd" id="Vector_82" />
          <path clipRule="evenodd" d={svgPaths.p3282000} fill="#C96070" fillRule="evenodd" id="Vector_83" />
          <path clipRule="evenodd" d={svgPaths.p317c00} fill="#D55365" fillRule="evenodd" id="Vector_84" />
          <path clipRule="evenodd" d={svgPaths.p33650700} fill="#E06F83" fillRule="evenodd" id="Vector_85" />
          <path clipRule="evenodd" d={svgPaths.p22b52f00} fill="#CD3545" fillRule="evenodd" id="Vector_86" />
          <path clipRule="evenodd" d={svgPaths.p113e1e00} fill="#AE1B29" fillRule="evenodd" id="Vector_87" />
          <path clipRule="evenodd" d={svgPaths.p20189900} fill="#9B0A11" fillRule="evenodd" id="Vector_88" />
          <path clipRule="evenodd" d={svgPaths.p16990500} fill="#DA707E" fillRule="evenodd" id="Vector_89" />
          <path clipRule="evenodd" d={svgPaths.p36500380} fill="#CD3047" fillRule="evenodd" id="Vector_90" />
          <path clipRule="evenodd" d={svgPaths.p2e241380} fill="#B10D23" fillRule="evenodd" id="Vector_91" />
          <path clipRule="evenodd" d={svgPaths.p1a1fa100} fill="#CD3047" fillRule="evenodd" id="Vector_92" />
          <path clipRule="evenodd" d={svgPaths.p254c500} fill="#E66078" fillRule="evenodd" id="Vector_93" />
          <path clipRule="evenodd" d={svgPaths.p2bca6f80} fill="#A40D24" fillRule="evenodd" id="Vector_94" />
          <path clipRule="evenodd" d={svgPaths.p3afe9300} fill="#B82844" fillRule="evenodd" id="Vector_95" />
          <path clipRule="evenodd" d={svgPaths.p2573bc00} fill="#BB2340" fillRule="evenodd" id="Vector_96" />
          <path clipRule="evenodd" d={svgPaths.p63b3300} fill="#A80A1E" fillRule="evenodd" id="Vector_97" />
          <path clipRule="evenodd" d={svgPaths.pc40d900} fill="#94080F" fillRule="evenodd" id="Vector_98" />
          <path clipRule="evenodd" d={svgPaths.p1494eab0} fill="#8D0612" fillRule="evenodd" id="Vector_99" />
          <path clipRule="evenodd" d={svgPaths.p18838600} fill="#AD1327" fillRule="evenodd" id="Vector_100" />
          <path clipRule="evenodd" d={svgPaths.p3d520780} fill="#C13952" fillRule="evenodd" id="Vector_101" />
          <path clipRule="evenodd" d={svgPaths.p3191d880} fill="#CC697A" fillRule="evenodd" id="Vector_102" />
          <path clipRule="evenodd" d={svgPaths.p1db94000} fill="#BE5767" fillRule="evenodd" id="Vector_103" />
          <path clipRule="evenodd" d={svgPaths.p799ef0} fill="#CA4C61" fillRule="evenodd" id="Vector_104" />
          <path clipRule="evenodd" d={svgPaths.p123e680} fill="#BE4457" fillRule="evenodd" id="Vector_105" />
          <path clipRule="evenodd" d={svgPaths.p33fb9e00} fill="#BF475A" fillRule="evenodd" id="Vector_106" />
          <path clipRule="evenodd" d={svgPaths.p1a083f00} fill="#D04057" fillRule="evenodd" id="Vector_107" />
          <path clipRule="evenodd" d={svgPaths.p11d6d8c0} fill="#AF2537" fillRule="evenodd" id="Vector_108" />
          <path clipRule="evenodd" d={svgPaths.pf427d00} fill="#BA2135" fillRule="evenodd" id="Vector_109" />
          <path clipRule="evenodd" d={svgPaths.p916d70} fill="#C0243C" fillRule="evenodd" id="Vector_110" />
          <path clipRule="evenodd" d={svgPaths.p3d694a00} fill="#BE384E" fillRule="evenodd" id="Vector_111" />
          <path clipRule="evenodd" d={svgPaths.p35ebcf0} fill="#A61C32" fillRule="evenodd" id="Vector_112" />
          <path clipRule="evenodd" d={svgPaths.pfe1ce00} fill="#BE384E" fillRule="evenodd" id="Vector_113" />
          <path clipRule="evenodd" d={svgPaths.p280f8900} fill="#A00E1C" fillRule="evenodd" id="Vector_114" />
          <path clipRule="evenodd" d={svgPaths.p329f8a80} fill="#CD4B58" fillRule="evenodd" id="Vector_115" />
          <path clipRule="evenodd" d={svgPaths.p1a074200} fill="#E55F75" fillRule="evenodd" id="Vector_116" />
          <path clipRule="evenodd" d={svgPaths.p228f0880} fill="#9A0B12" fillRule="evenodd" id="Vector_117" />
          <path clipRule="evenodd" d={svgPaths.p1ebcbb00} fill="#CF3B52" fillRule="evenodd" id="Vector_118" />
          <path clipRule="evenodd" d={svgPaths.p13b4b080} fill="#AD1426" fillRule="evenodd" id="Vector_119" />
          <path clipRule="evenodd" d={svgPaths.p35bd5500} fill="#6E0912" fillRule="evenodd" id="Vector_120" />
          <path clipRule="evenodd" d={svgPaths.p5428ac0} fill="#A00E1C" fillRule="evenodd" id="Vector_121" />
          <path clipRule="evenodd" d={svgPaths.pa013b80} fill="#C52E4A" fillRule="evenodd" id="Vector_122" />
          <path clipRule="evenodd" d={svgPaths.p35585800} fill="#D4606E" fillRule="evenodd" id="Vector_123" />
          <path clipRule="evenodd" d={svgPaths.pd717600} fill="#BB2C36" fillRule="evenodd" id="Vector_124" />
          <path clipRule="evenodd" d={svgPaths.p1007d280} fill="#C6384C" fillRule="evenodd" id="Vector_125" />
          <path clipRule="evenodd" d={svgPaths.p25202580} fill="#C1313C" fillRule="evenodd" id="Vector_126" />
          <path clipRule="evenodd" d={svgPaths.p30e2a280} fill="#D85A6F" fillRule="evenodd" id="Vector_127" />
          <path clipRule="evenodd" d={svgPaths.p5c6fa00} fill="#C4394D" fillRule="evenodd" id="Vector_128" />
          <path clipRule="evenodd" d={svgPaths.p28cb6a00} fill="#D85869" fillRule="evenodd" id="Vector_129" />
          <path clipRule="evenodd" d={svgPaths.p306d3780} fill="#D97685" fillRule="evenodd" id="Vector_130" />
          <path clipRule="evenodd" d={svgPaths.p29df7a00} fill="#E58F9F" fillRule="evenodd" id="Vector_131" />
          <path clipRule="evenodd" d={svgPaths.p3512fe00} fill="#CD3047" fillRule="evenodd" id="Vector_132" />
          <path clipRule="evenodd" d={svgPaths.p122ad800} fill="#991022" fillRule="evenodd" id="Vector_133" />
          <path clipRule="evenodd" d={svgPaths.p2a20dc00} fill="#DAB2B6" fillRule="evenodd" id="Vector_134" />
          <path clipRule="evenodd" d={svgPaths.pa25e600} fill="#8C1F2D" fillRule="evenodd" id="Vector_135" />
          <path clipRule="evenodd" d={svgPaths.p12bb2100} fill="#8C1F2D" fillRule="evenodd" id="Vector_136" />
          <path clipRule="evenodd" d={svgPaths.p2d52a080} fill="#B41D38" fillRule="evenodd" id="Vector_137" />
          <path clipRule="evenodd" d={svgPaths.p10506b80} fill="#A31229" fillRule="evenodd" id="Vector_138" />
          <path clipRule="evenodd" d={svgPaths.p87b8380} fill="#A31229" fillRule="evenodd" id="Vector_139" />
          <path clipRule="evenodd" d={svgPaths.p1e869900} fill="#B52B41" fillRule="evenodd" id="Vector_140" />
        </g>
      </svg>
    </div>
  );
}

function Objects1() {
  return (
    <div className="absolute contents inset-[0_0_0_0.02%]" data-name="OBJECTS">
      <Group9 />
    </div>
  );
}

function Asset1() {
  return (
    <div className="absolute flex h-[141.762px] items-center justify-center left-[320px] top-[3436px] w-[125.001px]">
      <div className="flex-none rotate-[-33.99deg]">
        <div className="h-[127.1px] overflow-clip relative w-[65.07px]" data-name="Asset 4 1">
          <Objects1 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute flex h-[170.041px] items-center justify-center left-[35px] top-[2836px] w-[198.78px] z-20">
      <div className="flex-none rotate-[-16.06deg]">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Homemade_Apple:Regular',sans-serif] gap-[10px] items-start leading-[1.5] not-italic relative text-[#ffe16c] w-[170px]">
          <p className="relative shrink-0 text-[32px] tracking-[-0.64px] w-full">Ladies</p>
          <p className="relative shrink-0 text-[23px] tracking-[-0.46px] w-full">
            <BlurFadeWords text="Colorful Attire" />
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute flex h-[147.141px] items-center justify-center left-[45px] top-[3536px] w-[316.638px] z-20">
      <div className="flex-none rotate-[-10.33deg]">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Homemade_Apple:Regular',sans-serif] gap-[11px] items-start leading-[1.5] not-italic relative text-[#7a843e] w-[304.718px]">
          <p className="relative shrink-0 text-[32px] w-full">Gentlemen</p>
          <p className="relative shrink-0 text-[23px] w-full whitespace-pre-wrap">
            <BlurFadeWords text="Black Suit White Shirt" />
          </p>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[0_-0.01%_0_0.01%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="88.0031" preserveAspectRatio="none" viewBox="0 0 83.8871 88.0031" width="83.8871">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p239fce00} fill="#E2E6E8" fillRule="evenodd" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p24f3b00} fill="#F0FFF7" id="Vector_2" />
            <path d={svgPaths.p5f0c600} fill="#D6E2DC" id="Vector_3" />
            <path d={svgPaths.p35322700} fill="#D6E2DC" id="Vector_4" />
            <path clipRule="evenodd" d={svgPaths.p34e7a00} fill="#89A391" fillRule="evenodd" id="Vector_5" />
            <path clipRule="evenodd" d={svgPaths.p2c97d000} fill="#A17675" fillRule="evenodd" id="Vector_6" />
            <path clipRule="evenodd" d={svgPaths.p33785490} fill="#9A756A" fillRule="evenodd" id="Vector_7" />
            <path clipRule="evenodd" d={svgPaths.p3954cdf0} fill="#A0A59F" fillRule="evenodd" id="Vector_8" />
            <path clipRule="evenodd" d={svgPaths.p3ad08680} fill="#7E837A" fillRule="evenodd" id="Vector_9" />
            <path clipRule="evenodd" d={svgPaths.p4e46380} fill="#9FA4A0" fillRule="evenodd" id="Vector_10" />
            <path clipRule="evenodd" d={svgPaths.p1bac6580} fill="#A0A5A0" fillRule="evenodd" id="Vector_11" />
            <path clipRule="evenodd" d={svgPaths.pcfd6200} fill="#939891" fillRule="evenodd" id="Vector_12" />
            <path clipRule="evenodd" d={svgPaths.p33925cc0} fill="#8D928C" fillRule="evenodd" id="Vector_13" />
            <path clipRule="evenodd" d={svgPaths.p2b373470} fill="#704F46" fillRule="evenodd" id="Vector_14" />
            <path clipRule="evenodd" d={svgPaths.p3d93cd00} fill="#4B3429" fillRule="evenodd" id="Vector_15" />
            <path clipRule="evenodd" d={svgPaths.p2bc45c00} fill="#677A58" fillRule="evenodd" id="Vector_16" />
            <path clipRule="evenodd" d={svgPaths.p22bfcc00} fill="#8E9E86" fillRule="evenodd" id="Vector_17" />
            <path clipRule="evenodd" d={svgPaths.p3d03ae00} fill="#D5D6C2" fillRule="evenodd" id="Vector_18" />
            <path clipRule="evenodd" d={svgPaths.p2fe02b80} fill="#6C4A3F" fillRule="evenodd" id="Vector_19" />
            <path clipRule="evenodd" d={svgPaths.p35c8d80} fill="#E2EBDC" fillRule="evenodd" id="Vector_20" />
            <path clipRule="evenodd" d={svgPaths.p43a1ac0} fill="#819C8B" fillRule="evenodd" id="Vector_21" />
            <path clipRule="evenodd" d={svgPaths.p27878200} fill="#E1EFE4" fillRule="evenodd" id="Vector_22" />
            <path clipRule="evenodd" d={svgPaths.p16156200} fill="#706B37" fillRule="evenodd" id="Vector_23" />
            <path clipRule="evenodd" d={svgPaths.p32684a80} fill="#82732E" fillRule="evenodd" id="Vector_24" />
            <path clipRule="evenodd" d={svgPaths.p30debe00} fill="#819C8B" fillRule="evenodd" id="Vector_25" />
            <path clipRule="evenodd" d={svgPaths.p15902000} fill="#819E8C" fillRule="evenodd" id="Vector_26" />
            <path clipRule="evenodd" d={svgPaths.p1bec2180} fill="#D4E5D6" fillRule="evenodd" id="Vector_27" />
            <g id="Vector_28" />
            <path clipRule="evenodd" d={svgPaths.p2a0c4880} fill="#728E7B" fillRule="evenodd" id="Vector_29" />
            <path clipRule="evenodd" d={svgPaths.p3b9b3700} fill="#B38589" fillRule="evenodd" id="Vector_30" />
            <path clipRule="evenodd" d={svgPaths.p3a2ed500} fill="#A87D7C" fillRule="evenodd" id="Vector_31" />
            <path clipRule="evenodd" d={svgPaths.p2282600} fill="#A77C7C" fillRule="evenodd" id="Vector_32" />
            <path clipRule="evenodd" d={svgPaths.p10fe6500} fill="#889B90" fillRule="evenodd" id="Vector_33" />
            <path clipRule="evenodd" d={svgPaths.p79f3180} fill="#6B8879" fillRule="evenodd" id="Vector_34" />
            <path clipRule="evenodd" d={svgPaths.p56f3a00} fill="#B78E8D" fillRule="evenodd" id="Vector_35" />
            <path clipRule="evenodd" d={svgPaths.p3234b700} fill="#E8F0EE" fillRule="evenodd" id="Vector_36" />
            <path clipRule="evenodd" d={svgPaths.p5316100} fill="#8CA698" fillRule="evenodd" id="Vector_37" />
            <path clipRule="evenodd" d={svgPaths.p312a4a80} fill="#BEC6BB" fillRule="evenodd" id="Vector_38" />
            <path clipRule="evenodd" d={svgPaths.p6b04980} fill="#96A49B" fillRule="evenodd" id="Vector_39" />
            <path clipRule="evenodd" d={svgPaths.p12501700} fill="#E1EBE8" fillRule="evenodd" id="Vector_40" />
            <path clipRule="evenodd" d={svgPaths.p126e8f00} fill="#A7CABD" fillRule="evenodd" id="Vector_41" />
            <path clipRule="evenodd" d={svgPaths.p24452f00} fill="#83998F" fillRule="evenodd" id="Vector_42" />
            <path clipRule="evenodd" d={svgPaths.p1d5c100} fill="#8EA79D" fillRule="evenodd" id="Vector_43" />
            <path clipRule="evenodd" d={svgPaths.paef7780} fill="#9FA5A4" fillRule="evenodd" id="Vector_44" />
            <path clipRule="evenodd" d={svgPaths.p3e6c7d00} fill="#ACB0AF" fillRule="evenodd" id="Vector_45" />
            <path clipRule="evenodd" d={svgPaths.p3e3db100} fill="#ACB0AF" fillRule="evenodd" id="Vector_46" />
            <path clipRule="evenodd" d={svgPaths.p5a1a240} fill="#E6E9E6" fillRule="evenodd" id="Vector_47" />
            <path clipRule="evenodd" d={svgPaths.p1e479000} fill="#8F968F" fillRule="evenodd" id="Vector_48" />
            <path clipRule="evenodd" d={svgPaths.pb616800} fill="#6C6F65" fillRule="evenodd" id="Vector_49" />
            <path clipRule="evenodd" d={svgPaths.p1f147900} fill="#E2E6E8" fillRule="evenodd" id="Vector_50" />
            <path clipRule="evenodd" d={svgPaths.p272c0380} fill="#ACC0B4" fillRule="evenodd" id="Vector_51" />
            <path clipRule="evenodd" d={svgPaths.p23d8e80} fill="#D6E2DC" fillRule="evenodd" id="Vector_52" />
            <path clipRule="evenodd" d={svgPaths.pd50100} fill="#AEC1B8" fillRule="evenodd" id="Vector_53" />
            <path clipRule="evenodd" d={svgPaths.p50ae700} fill="#B79194" fillRule="evenodd" id="Vector_54" />
            <path clipRule="evenodd" d={svgPaths.p224eb70} fill="#A17D7B" fillRule="evenodd" id="Vector_55" />
            <path clipRule="evenodd" d={svgPaths.p156fb300} fill="#997E78" fillRule="evenodd" id="Vector_56" />
            <path clipRule="evenodd" d={svgPaths.p3efcc700} fill="#A58D88" fillRule="evenodd" id="Vector_57" />
            <path clipRule="evenodd" d={svgPaths.p47acdf0} fill="#888E89" fillRule="evenodd" id="Vector_58" />
            <path clipRule="evenodd" d={svgPaths.p3bde1300} fill="#AC8B88" fillRule="evenodd" id="Vector_59" />
            <path clipRule="evenodd" d={svgPaths.p1fa74e80} fill="#B3CDC3" fillRule="evenodd" id="Vector_60" />
            <path clipRule="evenodd" d={svgPaths.p315d69f2} fill="#AAC5BD" fillRule="evenodd" id="Vector_61" />
            <path clipRule="evenodd" d={svgPaths.p2c6f8d00} fill="#B99896" fillRule="evenodd" id="Vector_62" />
            <path clipRule="evenodd" d={svgPaths.p1ef69b40} fill="#98807F" fillRule="evenodd" id="Vector_63" />
            <path clipRule="evenodd" d={svgPaths.p11e710f0} fill="#777E87" fillRule="evenodd" id="Vector_64" />
            <path clipRule="evenodd" d={svgPaths.p38ff7f00} fill="#888C93" fillRule="evenodd" id="Vector_65" />
            <path clipRule="evenodd" d={svgPaths.p3d9cd7f0} fill="#91989C" fillRule="evenodd" id="Vector_66" />
            <path clipRule="evenodd" d={svgPaths.p1ff5ba40} fill="#70787E" fillRule="evenodd" id="Vector_67" />
            <path clipRule="evenodd" d={svgPaths.p13a6c300} fill="#656C6E" fillRule="evenodd" id="Vector_68" />
            <path clipRule="evenodd" d={svgPaths.p2e2fab80} fill="#74797C" fillRule="evenodd" id="Vector_69" />
            <path clipRule="evenodd" d={svgPaths.p26e34300} fill="#9DBBB0" fillRule="evenodd" id="Vector_70" />
            <path clipRule="evenodd" d={svgPaths.p18042900} fill="#AFCBBF" fillRule="evenodd" id="Vector_71" />
            <path clipRule="evenodd" d={svgPaths.p1f34ca00} fill="#AFCBBF" fillRule="evenodd" id="Vector_72" />
            <path clipRule="evenodd" d={svgPaths.pf69f400} fill="#ABCCC1" fillRule="evenodd" id="Vector_73" />
            <path clipRule="evenodd" d={svgPaths.p2b656480} fill="#A87E81" fillRule="evenodd" id="Vector_74" />
            <path clipRule="evenodd" d={svgPaths.pa30eb00} fill="#815353" fillRule="evenodd" id="Vector_75" />
            <path clipRule="evenodd" d={svgPaths.p3b51e370} fill="#B5928F" fillRule="evenodd" id="Vector_76" />
            <path clipRule="evenodd" d={svgPaths.p3f17c570} fill="#522E2B" fillRule="evenodd" id="Vector_77" />
            <path clipRule="evenodd" d={svgPaths.p2e51ed00} fill="#7B5551" fillRule="evenodd" id="Vector_78" />
            <path clipRule="evenodd" d={svgPaths.p625a700} fill="#5C413A" fillRule="evenodd" id="Vector_79" />
            <path clipRule="evenodd" d={svgPaths.p11de3700} fill="#7B5551" fillRule="evenodd" id="Vector_80" />
            <path clipRule="evenodd" d={svgPaths.p2d30c000} fill="#A17675" fillRule="evenodd" id="Vector_81" />
            <path clipRule="evenodd" d={svgPaths.p29fb37f0} fill="#52332F" fillRule="evenodd" id="Vector_82" />
            <path clipRule="evenodd" d={svgPaths.p3d7aa400} fill="#A6857E" fillRule="evenodd" id="Vector_83" />
            <path clipRule="evenodd" d={svgPaths.p3cb21f00} fill="#96756E" fillRule="evenodd" id="Vector_84" />
            <path clipRule="evenodd" d={svgPaths.p2b8c7e00} fill="#BE9235" fillRule="evenodd" id="Vector_85" />
            <path clipRule="evenodd" d={svgPaths.p39f8ba80} fill="#645B28" fillRule="evenodd" id="Vector_86" />
            <path clipRule="evenodd" d={svgPaths.p3a063b00} fill="#D4E5D6" fillRule="evenodd" id="Vector_87" />
            <path clipRule="evenodd" d={svgPaths.pa7c3580} fill="#D1E2CC" fillRule="evenodd" id="Vector_88" />
            <path clipRule="evenodd" d={svgPaths.p158fdf00} fill="#BC9A37" fillRule="evenodd" id="Vector_89" />
            <path clipRule="evenodd" d={svgPaths.p2886e800} fill="#D1E2CC" fillRule="evenodd" id="Vector_90" />
            <path clipRule="evenodd" d={svgPaths.p3db5ab80} fill="#E7F1E9" fillRule="evenodd" id="Vector_91" />
            <path clipRule="evenodd" d={svgPaths.pd047900} fill="#889B90" fillRule="evenodd" id="Vector_92" />
            <path clipRule="evenodd" d={svgPaths.p194d0480} fill="#82732E" fillRule="evenodd" id="Vector_93" />
            <path clipRule="evenodd" d={svgPaths.p36c9bf80} fill="#BC9A37" fillRule="evenodd" id="Vector_94" />
            <path clipRule="evenodd" d={svgPaths.pa2ea00} fill="#A6797C" fillRule="evenodd" id="Vector_95" />
            <path clipRule="evenodd" d={svgPaths.pca4380} fill="#BE9094" fillRule="evenodd" id="Vector_96" />
            <path clipRule="evenodd" d={svgPaths.pf939d00} fill="#D5E0DB" fillRule="evenodd" id="Vector_97" />
            <path clipRule="evenodd" d={svgPaths.p2d181b80} fill="#96A49B" fillRule="evenodd" id="Vector_98" />
            <path clipRule="evenodd" d={svgPaths.p27171c0} fill="#DBE8E0" fillRule="evenodd" id="Vector_99" />
            <path clipRule="evenodd" d={svgPaths.p4372c00} fill="#D6E2D7" fillRule="evenodd" id="Vector_100" />
            <path clipRule="evenodd" d={svgPaths.p2ba554f0} fill="#D5E0DB" fillRule="evenodd" id="Vector_101" />
            <path clipRule="evenodd" d={svgPaths.p20422900} fill="#D5E0DB" fillRule="evenodd" id="Vector_102" />
            <path clipRule="evenodd" d={svgPaths.pf1dce00} fill="#D5E0DB" fillRule="evenodd" id="Vector_103" />
            <path clipRule="evenodd" d={svgPaths.p2689c1f0} fill="#7B9B8C" fillRule="evenodd" id="Vector_104" />
            <path clipRule="evenodd" d={svgPaths.p52edf80} fill="#7F8C80" fillRule="evenodd" id="Vector_105" />
            <path clipRule="evenodd" d={svgPaths.p188e700} fill="#656D66" fillRule="evenodd" id="Vector_106" />
            <path clipRule="evenodd" d={svgPaths.p2230eb00} fill="#565F57" fillRule="evenodd" id="Vector_107" />
            <path clipRule="evenodd" d={svgPaths.p137b7c00} fill="#D4E3D9" fillRule="evenodd" id="Vector_108" />
            <path clipRule="evenodd" d={svgPaths.p1859e71} fill="#D2E7E7" fillRule="evenodd" id="Vector_109" />
            <path clipRule="evenodd" d={svgPaths.p36d85300} fill="#CFDFD5" fillRule="evenodd" id="Vector_110" />
            <path clipRule="evenodd" d={svgPaths.p113ffd00} fill="#DCE9E2" fillRule="evenodd" id="Vector_111" />
            <path clipRule="evenodd" d={svgPaths.p16d3700} fill="#EBF4F5" fillRule="evenodd" id="Vector_112" />
            <path clipRule="evenodd" d={svgPaths.pcd59400} fill="#A6ADA9" fillRule="evenodd" id="Vector_113" />
            <path clipRule="evenodd" d={svgPaths.p1ceaba00} fill="#EAEDEC" fillRule="evenodd" id="Vector_114" />
            <path clipRule="evenodd" d={svgPaths.p1932d080} fill="#989E9D" fillRule="evenodd" id="Vector_115" />
            <path clipRule="evenodd" d={svgPaths.pcf0cd80} fill="#DFE5E2" fillRule="evenodd" id="Vector_116" />
            <path clipRule="evenodd" d={svgPaths.p15383200} fill="#CDD2D0" fillRule="evenodd" id="Vector_117" />
            <path clipRule="evenodd" d={svgPaths.p6b30cc1} fill="#E6E8E4" fillRule="evenodd" id="Vector_118" />
            <path clipRule="evenodd" d={svgPaths.p1d1a3240} fill="#C7CDCB" fillRule="evenodd" id="Vector_119" />
            <path clipRule="evenodd" d={svgPaths.p326a0000} fill="#BFBFBA" fillRule="evenodd" id="Vector_120" />
            <path clipRule="evenodd" d={svgPaths.p2d98bfb0} fill="#B8BEBA" fillRule="evenodd" id="Vector_121" />
            <path clipRule="evenodd" d={svgPaths.p3fef7000} fill="#B3B8B3" fillRule="evenodd" id="Vector_122" />
            <path clipRule="evenodd" d={svgPaths.p197229f0} fill="#767D73" fillRule="evenodd" id="Vector_123" />
            <path clipRule="evenodd" d={svgPaths.p2a711980} fill="#616A63" fillRule="evenodd" id="Vector_124" />
            <path clipRule="evenodd" d={svgPaths.p7b6b670} fill="#92A199" fillRule="evenodd" id="Vector_125" />
            <path clipRule="evenodd" d={svgPaths.pdaf3d00} fill="#888E89" fillRule="evenodd" id="Vector_126" />
            <path clipRule="evenodd" d={svgPaths.p1cbd5d00} fill="#CBD1D0" fillRule="evenodd" id="Vector_127" />
            <path clipRule="evenodd" d={svgPaths.p3046c580} fill="#E7F3F2" fillRule="evenodd" id="Vector_128" />
            <path clipRule="evenodd" d={svgPaths.p25483080} fill="#D0E5E3" fillRule="evenodd" id="Vector_129" />
            <path clipRule="evenodd" d={svgPaths.pa862f80} fill="#BBD2CA" fillRule="evenodd" id="Vector_130" />
            <path clipRule="evenodd" d={svgPaths.pc2eb180} fill="#A4B7AF" fillRule="evenodd" id="Vector_131" />
            <path clipRule="evenodd" d={svgPaths.p18195480} fill="#9A807C" fillRule="evenodd" id="Vector_132" />
            <path clipRule="evenodd" d={svgPaths.p1ec2f200} fill="#AE9690" fillRule="evenodd" id="Vector_133" />
            <path clipRule="evenodd" d={svgPaths.p33e86900} fill="#8F968F" fillRule="evenodd" id="Vector_134" />
            <path clipRule="evenodd" d={svgPaths.p13a71c00} fill="#93B09D" fillRule="evenodd" id="Vector_135" />
            <path clipRule="evenodd" d={svgPaths.p25094400} fill="#816158" fillRule="evenodd" id="Vector_136" />
            <path clipRule="evenodd" d={svgPaths.p1951b780} fill="#B39694" fillRule="evenodd" id="Vector_137" />
            <path clipRule="evenodd" d={svgPaths.p4903380} fill="#AAC6B1" fillRule="evenodd" id="Vector_138" />
            <path clipRule="evenodd" d={svgPaths.p2f30d100} fill="#A3BAB0" fillRule="evenodd" id="Vector_139" />
            <path clipRule="evenodd" d={svgPaths.p228d4ff0} fill="#785050" fillRule="evenodd" id="Vector_140" />
            <path clipRule="evenodd" d={svgPaths.p17dd9900} fill="#664747" fillRule="evenodd" id="Vector_141" />
            <path clipRule="evenodd" d={svgPaths.p89eee80} fill="#A3BAB0" fillRule="evenodd" id="Vector_142" />
            <path clipRule="evenodd" d={svgPaths.pf7fe500} fill="#9FBAB3" fillRule="evenodd" id="Vector_143" />
            <path clipRule="evenodd" d={svgPaths.p355d8b00} fill="#92AFA7" fillRule="evenodd" id="Vector_144" />
            <path clipRule="evenodd" d={svgPaths.p3db88e00} fill="#8BA89E" fillRule="evenodd" id="Vector_145" />
            <path clipRule="evenodd" d={svgPaths.p390f2e80} fill="#CDA1A4" fillRule="evenodd" id="Vector_146" />
            <path clipRule="evenodd" d={svgPaths.pb29bc00} fill="#C6A1A0" fillRule="evenodd" id="Vector_147" />
            <path clipRule="evenodd" d={svgPaths.pb0af780} fill="#AAC5BD" fillRule="evenodd" id="Vector_148" />
            <path clipRule="evenodd" d={svgPaths.p103d700} fill="#94AEA6" fillRule="evenodd" id="Vector_149" />
            <path clipRule="evenodd" d={svgPaths.p1a07600} fill="#C6A1A0" fillRule="evenodd" id="Vector_150" />
            <path clipRule="evenodd" d={svgPaths.p34090b00} fill="#A8858D" fillRule="evenodd" id="Vector_151" />
            <path clipRule="evenodd" d={svgPaths.p52180} fill="#6B767F" fillRule="evenodd" id="Vector_152" />
            <path clipRule="evenodd" d={svgPaths.p35e7eb40} fill="#6D7781" fillRule="evenodd" id="Vector_153" />
            <path clipRule="evenodd" d={svgPaths.p11a0c400} fill="#7A858F" fillRule="evenodd" id="Vector_154" />
            <path clipRule="evenodd" d={svgPaths.p233cef00} fill="#687273" fillRule="evenodd" id="Vector_155" />
            <path clipRule="evenodd" d={svgPaths.p25351c00} fill="#6D4F51" fillRule="evenodd" id="Vector_156" />
            <path clipRule="evenodd" d={svgPaths.p1ef8c000} fill="#616D74" fillRule="evenodd" id="Vector_157" />
            <path clipRule="evenodd" d={svgPaths.p27284800} fill="#98787B" fillRule="evenodd" id="Vector_158" />
            <path clipRule="evenodd" d={svgPaths.p275f3200} fill="#65494C" fillRule="evenodd" id="Vector_159" />
            <path clipRule="evenodd" d={svgPaths.pee21fc0} fill="#7C848B" fillRule="evenodd" id="Vector_160" />
            <path clipRule="evenodd" d={svgPaths.p3df7e00} fill="#886665" fillRule="evenodd" id="Vector_161" />
            <path clipRule="evenodd" d={svgPaths.p4b70570} fill="#697178" fillRule="evenodd" id="Vector_162" />
            <path clipRule="evenodd" d={svgPaths.p2082eac0} fill="#87726D" fillRule="evenodd" id="Vector_163" />
            <path clipRule="evenodd" d={svgPaths.p12777200} fill="#5A666D" fillRule="evenodd" id="Vector_164" />
            <path clipRule="evenodd" d={svgPaths.p974ca00} fill="#60686A" fillRule="evenodd" id="Vector_165" />
            <path clipRule="evenodd" d={svgPaths.p34f8ab00} fill="#E0E7ED" fillRule="evenodd" id="Vector_166" />
            <path clipRule="evenodd" d={svgPaths.p39814580} fill="#6D747B" fillRule="evenodd" id="Vector_167" />
            <path clipRule="evenodd" d={svgPaths.pe09e00} fill="#9EA4AE" fillRule="evenodd" id="Vector_168" />
            <path clipRule="evenodd" d={svgPaths.p2ece7e00} fill="#ADAFB9" fillRule="evenodd" id="Vector_169" />
            <path clipRule="evenodd" d={svgPaths.p9dd4500} fill="#626974" fillRule="evenodd" id="Vector_170" />
            <path clipRule="evenodd" d={svgPaths.p28caf280} fill="#A8ACB1" fillRule="evenodd" id="Vector_171" />
            <path clipRule="evenodd" d={svgPaths.p32ef3e00} fill="#CAD1DA" fillRule="evenodd" id="Vector_172" />
            <path clipRule="evenodd" d={svgPaths.p26246c80} fill="#6F4646" fillRule="evenodd" id="Vector_173" />
            <path clipRule="evenodd" d={svgPaths.pa043e00} fill="#B38589" fillRule="evenodd" id="Vector_174" />
            <path clipRule="evenodd" d={svgPaths.p18faa7a0} fill="#C4979E" fillRule="evenodd" id="Vector_175" />
            <path clipRule="evenodd" d={svgPaths.p1063f300} fill="#926C6C" fillRule="evenodd" id="Vector_176" />
            <path clipRule="evenodd" d={svgPaths.p1b708380} fill="#7D5555" fillRule="evenodd" id="Vector_177" />
            <path clipRule="evenodd" d={svgPaths.p268caa00} fill="#B58C8F" fillRule="evenodd" id="Vector_178" />
            <path clipRule="evenodd" d={svgPaths.p7933a00} fill="#4E2D2A" fillRule="evenodd" id="Vector_179" />
            <path clipRule="evenodd" d={svgPaths.pdac0c00} fill="#533331" fillRule="evenodd" id="Vector_180" />
            <path clipRule="evenodd" d={svgPaths.p33121f80} fill="#533331" fillRule="evenodd" id="Vector_181" />
            <path clipRule="evenodd" d={svgPaths.p16473a80} fill="#90695E" fillRule="evenodd" id="Vector_182" />
            <path clipRule="evenodd" d={svgPaths.p26a31d00} fill="#4E2D2A" fillRule="evenodd" id="Vector_183" />
            <path clipRule="evenodd" d={svgPaths.p2f92b800} fill="#C5A3A3" fillRule="evenodd" id="Vector_184" />
            <path clipRule="evenodd" d={svgPaths.p2da82be0} fill="#E9DCC8" fillRule="evenodd" id="Vector_185" />
            <path clipRule="evenodd" d={svgPaths.p3f53ed00} fill="#816F68" fillRule="evenodd" id="Vector_186" />
            <path clipRule="evenodd" d={svgPaths.p310e9700} fill="#492F2D" fillRule="evenodd" id="Vector_187" />
            <path clipRule="evenodd" d={svgPaths.p2fe3ae00} fill="#BA9C9E" fillRule="evenodd" id="Vector_188" />
            <path clipRule="evenodd" d={svgPaths.p2b35200} fill="#D5A935" fillRule="evenodd" id="Vector_189" />
            <path clipRule="evenodd" d={svgPaths.p1fa71000} fill="#E3B93F" fillRule="evenodd" id="Vector_190" />
            <path clipRule="evenodd" d={svgPaths.p22ff4400} fill="#E7E9DB" fillRule="evenodd" id="Vector_191" />
            <path clipRule="evenodd" d={svgPaths.p26ca7170} fill="#D5AA35" fillRule="evenodd" id="Vector_192" />
            <path clipRule="evenodd" d={svgPaths.p3b20d100} fill="#D3D2C5" fillRule="evenodd" id="Vector_193" />
            <path clipRule="evenodd" d={svgPaths.p1e443a00} fill="#DBE9DF" fillRule="evenodd" id="Vector_194" />
            <path clipRule="evenodd" d={svgPaths.p11f621f0} fill="#D8DCC0" fillRule="evenodd" id="Vector_195" />
            <path clipRule="evenodd" d={svgPaths.p2ce5f080} fill="#CFCB99" fillRule="evenodd" id="Vector_196" />
            <path clipRule="evenodd" d={svgPaths.p17b7a100} fill="#D6E6DC" fillRule="evenodd" id="Vector_197" />
            <path clipRule="evenodd" d={svgPaths.p1fde8e70} fill="#D3AA3A" fillRule="evenodd" id="Vector_198" />
            <path clipRule="evenodd" d={svgPaths.p2c112a00} fill="#D3AA3A" fillRule="evenodd" id="Vector_199" />
            <path clipRule="evenodd" d={svgPaths.p18bf4100} fill="#D6E6DC" fillRule="evenodd" id="Vector_200" />
            <path clipRule="evenodd" d={svgPaths.pb1fec00} fill="#E0EDE5" fillRule="evenodd" id="Vector_201" />
            <path clipRule="evenodd" d={svgPaths.p325e3700} fill="#CBA02A" fillRule="evenodd" id="Vector_202" />
            <path clipRule="evenodd" d={svgPaths.p20a176f0} fill="#D4E3D9" fillRule="evenodd" id="Vector_203" />
            <path clipRule="evenodd" d={svgPaths.pe11c400} fill="#D4E3D9" fillRule="evenodd" id="Vector_204" />
            <path clipRule="evenodd" d={svgPaths.p276e7a80} fill="#E1EEE7" fillRule="evenodd" id="Vector_205" />
            <path clipRule="evenodd" d={svgPaths.p10f38100} fill="#D6E6DC" fillRule="evenodd" id="Vector_206" />
            <path clipRule="evenodd" d={svgPaths.p24e72d00} fill="#5B635C" fillRule="evenodd" id="Vector_207" />
            <path clipRule="evenodd" d={svgPaths.p362f50f0} fill="#E9EEEC" fillRule="evenodd" id="Vector_208" />
            <path clipRule="evenodd" d={svgPaths.p17437900} fill="#6F7670" fillRule="evenodd" id="Vector_209" />
            <path clipRule="evenodd" d={svgPaths.p1ae9f600} fill="#779A93" fillRule="evenodd" id="Vector_210" />
            <path clipRule="evenodd" d={svgPaths.pbcdb800} fill="#94ABA4" fillRule="evenodd" id="Vector_211" />
            <path clipRule="evenodd" d={svgPaths.p210af700} fill="#D6EBEC" fillRule="evenodd" id="Vector_212" />
            <path clipRule="evenodd" d={svgPaths.p28fca400} fill="#BCD2D1" fillRule="evenodd" id="Vector_213" />
            <path clipRule="evenodd" d={svgPaths.p241b7f00} fill="#94ABA4" fillRule="evenodd" id="Vector_214" />
            <path clipRule="evenodd" d={svgPaths.pd569b80} fill="#EBF5F4" fillRule="evenodd" id="Vector_215" />
            <path clipRule="evenodd" d={svgPaths.p360f7280} fill="#623B46" fillRule="evenodd" id="Vector_216" />
            <path clipRule="evenodd" d={svgPaths.p13d16240} fill="#3A272D" fillRule="evenodd" id="Vector_217" />
            <path clipRule="evenodd" d={svgPaths.p2005c380} fill="#553A40" fillRule="evenodd" id="Vector_218" />
            <path clipRule="evenodd" d={svgPaths.p30a96d60} fill="#82656F" fillRule="evenodd" id="Vector_219" />
            <path clipRule="evenodd" d={svgPaths.p31e91400} fill="#947682" fillRule="evenodd" id="Vector_220" />
            <path clipRule="evenodd" d={svgPaths.p33636b00} fill="#774E56" fillRule="evenodd" id="Vector_221" />
            <path clipRule="evenodd" d={svgPaths.p10329900} fill="#654C4F" fillRule="evenodd" id="Vector_222" />
            <path clipRule="evenodd" d={svgPaths.p16664e40} fill="#EBEBE5" fillRule="evenodd" id="Vector_223" />
            <path clipRule="evenodd" d={svgPaths.p1509e700} fill="#82713E" fillRule="evenodd" id="Vector_224" />
            <path clipRule="evenodd" d={svgPaths.p1f098100} fill="#DFE5E2" fillRule="evenodd" id="Vector_225" />
            <path clipRule="evenodd" d={svgPaths.p3bf93500} fill="#A2A7A5" fillRule="evenodd" id="Vector_226" />
            <path clipRule="evenodd" d={svgPaths.p16ce2340} fill="#BE9F52" fillRule="evenodd" id="Vector_227" />
            <path clipRule="evenodd" d={svgPaths.p3572a000} fill="#B3B5B1" fillRule="evenodd" id="Vector_228" />
            <path clipRule="evenodd" d={svgPaths.p2c285070} fill="#D6DBDD" fillRule="evenodd" id="Vector_229" />
            <path clipRule="evenodd" d={svgPaths.p365fe8f2} fill="#B8BFB8" fillRule="evenodd" id="Vector_230" />
            <path clipRule="evenodd" d={svgPaths.p2d7a6f80} fill="#BABDB9" fillRule="evenodd" id="Vector_231" />
            <path clipRule="evenodd" d={svgPaths.p2688500} fill="#D7DDDF" fillRule="evenodd" id="Vector_232" />
            <path clipRule="evenodd" d={svgPaths.p139fca00} fill="#C2C5C3" fillRule="evenodd" id="Vector_233" />
            <path clipRule="evenodd" d={svgPaths.p36c64120} fill="#D9E0DE" fillRule="evenodd" id="Vector_234" />
            <path clipRule="evenodd" d={svgPaths.p97ff00} fill="#D6DCDE" fillRule="evenodd" id="Vector_235" />
            <path clipRule="evenodd" d={svgPaths.p3b632300} fill="#BDC6BF" fillRule="evenodd" id="Vector_236" />
            <path clipRule="evenodd" d={svgPaths.p12003070} fill="#D9E0DE" fillRule="evenodd" id="Vector_237" />
            <path clipRule="evenodd" d={svgPaths.p15cace00} fill="#E9F4F3" fillRule="evenodd" id="Vector_238" />
            <path clipRule="evenodd" d={svgPaths.p2a9a9f00} fill="#D3E5E2" fillRule="evenodd" id="Vector_239" />
            <path clipRule="evenodd" d={svgPaths.p2dae9380} fill="#94A298" fillRule="evenodd" id="Vector_240" />
            <path clipRule="evenodd" d={svgPaths.p2a9d0000} fill="#926C6C" fillRule="evenodd" id="Vector_241" />
            <path clipRule="evenodd" d={svgPaths.p2e637a30} fill="#D9E3DE" fillRule="evenodd" id="Vector_242" />
            <path clipRule="evenodd" d={svgPaths.p2ba8a0c0} fill="#8B948F" fillRule="evenodd" id="Vector_243" />
            <path clipRule="evenodd" d={svgPaths.pfb62340} fill="#8C9283" fillRule="evenodd" id="Vector_244" />
            <path clipRule="evenodd" d={svgPaths.p2cd5ac00} fill="#8A6165" fillRule="evenodd" id="Vector_245" />
            <path clipRule="evenodd" d={svgPaths.p291c5c00} fill="#858C8A" fillRule="evenodd" id="Vector_246" />
            <path clipRule="evenodd" d={svgPaths.p1ab08740} fill="#7C7D7B" fillRule="evenodd" id="Vector_247" />
            <path clipRule="evenodd" d={svgPaths.p3a87f0f0} fill="#8E988F" fillRule="evenodd" id="Vector_248" />
            <path clipRule="evenodd" d={svgPaths.pf130c80} fill="#92696F" fillRule="evenodd" id="Vector_249" />
            <path clipRule="evenodd" d={svgPaths.p2a9eff00} fill="#7B5B5C" fillRule="evenodd" id="Vector_250" />
            <path clipRule="evenodd" d={svgPaths.p11dc0900} fill="#8BA793" fillRule="evenodd" id="Vector_251" />
            <path clipRule="evenodd" d={svgPaths.p24fee800} fill="#DEC8C4" fillRule="evenodd" id="Vector_252" />
            <path clipRule="evenodd" d={svgPaths.p478c00} fill="#A68581" fillRule="evenodd" id="Vector_253" />
            <path clipRule="evenodd" d={svgPaths.p1c54d200} fill="#674D41" fillRule="evenodd" id="Vector_254" />
            <path clipRule="evenodd" d={svgPaths.p18c12200} fill="#E3E7D9" fillRule="evenodd" id="Vector_255" />
            <path clipRule="evenodd" d={svgPaths.p32735b71} fill="#87A99E" fillRule="evenodd" id="Vector_256" />
            <path clipRule="evenodd" d={svgPaths.p38684f80} fill="#697456" fillRule="evenodd" id="Vector_257" />
            <path clipRule="evenodd" d={svgPaths.p33a45600} fill="#B88F90" fillRule="evenodd" id="Vector_258" />
            <path clipRule="evenodd" d={svgPaths.p2ba36700} fill="#B49190" fillRule="evenodd" id="Vector_259" />
            <path clipRule="evenodd" d={svgPaths.p15204700} fill="#7E5951" fillRule="evenodd" id="Vector_260" />
            <path clipRule="evenodd" d={svgPaths.p14008e00} fill="#C09898" fillRule="evenodd" id="Vector_261" />
            <path clipRule="evenodd" d={svgPaths.p7e09100} fill="#B88F90" fillRule="evenodd" id="Vector_262" />
            <path clipRule="evenodd" d={svgPaths.p3ffd0980} fill="#99716D" fillRule="evenodd" id="Vector_263" />
            <path clipRule="evenodd" d={svgPaths.p3cf54e00} fill="#D3E5E2" fillRule="evenodd" id="Vector_264" />
            <path clipRule="evenodd" d={svgPaths.p29452700} fill="#94AAA4" fillRule="evenodd" id="Vector_265" />
            <path clipRule="evenodd" d={svgPaths.p68dac00} fill="#A07F82" fillRule="evenodd" id="Vector_266" />
            <path clipRule="evenodd" d={svgPaths.p15b93580} fill="#A58685" fillRule="evenodd" id="Vector_267" />
            <path clipRule="evenodd" d={svgPaths.p6e7a300} fill="#D3E5E2" fillRule="evenodd" id="Vector_268" />
            <path clipRule="evenodd" d={svgPaths.p3e9b6100} fill="#422D30" fillRule="evenodd" id="Vector_269" />
            <path clipRule="evenodd" d={svgPaths.p38ca8f71} fill="#8F6B71" fillRule="evenodd" id="Vector_270" />
            <path clipRule="evenodd" d={svgPaths.p25e36a00} fill="#453034" fillRule="evenodd" id="Vector_271" />
            <path clipRule="evenodd" d={svgPaths.p17b5c700} fill="#B7939A" fillRule="evenodd" id="Vector_272" />
            <path clipRule="evenodd" d={svgPaths.p3c8f6180} fill="#89939D" fillRule="evenodd" id="Vector_273" />
            <path clipRule="evenodd" d={svgPaths.p3ab32f00} fill="#828B96" fillRule="evenodd" id="Vector_274" />
            <path clipRule="evenodd" d={svgPaths.p3820e00} fill="#7E8994" fillRule="evenodd" id="Vector_275" />
            <path clipRule="evenodd" d={svgPaths.p1444ae0} fill="#747E8C" fillRule="evenodd" id="Vector_276" />
            <path clipRule="evenodd" d={svgPaths.p3e251ce0} fill="#89939D" fillRule="evenodd" id="Vector_277" />
            <path clipRule="evenodd" d={svgPaths.p91df920} fill="#A2A6B0" fillRule="evenodd" id="Vector_278" />
            <path clipRule="evenodd" d={svgPaths.pad60900} fill="#76818B" fillRule="evenodd" id="Vector_279" />
            <path clipRule="evenodd" d={svgPaths.p3cc06800} fill="#7C848B" fillRule="evenodd" id="Vector_280" />
            <path clipRule="evenodd" d={svgPaths.p1c824200} fill="#76818B" fillRule="evenodd" id="Vector_281" />
            <path clipRule="evenodd" d={svgPaths.p393d8000} fill="#38252A" fillRule="evenodd" id="Vector_282" />
            <path clipRule="evenodd" d={svgPaths.p25da9e00} fill="#B88F9E" fillRule="evenodd" id="Vector_283" />
            <path clipRule="evenodd" d={svgPaths.pf6b1f80} fill="#7C5A64" fillRule="evenodd" id="Vector_284" />
            <path clipRule="evenodd" d={svgPaths.p48b0600} fill="#A6959C" fillRule="evenodd" id="Vector_285" />
            <path clipRule="evenodd" d={svgPaths.p107bf780} fill="#9CA1A5" fillRule="evenodd" id="Vector_286" />
            <path clipRule="evenodd" d={svgPaths.pa82ea00} fill="#B79BA5" fillRule="evenodd" id="Vector_287" />
            <path clipRule="evenodd" d={svgPaths.p3980f100} fill="#896370" fillRule="evenodd" id="Vector_288" />
            <path clipRule="evenodd" d={svgPaths.p5251d00} fill="#B79BA5" fillRule="evenodd" id="Vector_289" />
            <path clipRule="evenodd" d={svgPaths.p25914300} fill="#B2BFCA" fillRule="evenodd" id="Vector_290" />
            <path clipRule="evenodd" d={svgPaths.p21190300} fill="#432E2B" fillRule="evenodd" id="Vector_291" />
            <path clipRule="evenodd" d={svgPaths.pb606970} fill="#492F2D" fillRule="evenodd" id="Vector_292" />
            <path clipRule="evenodd" d={svgPaths.p3f4bc8f0} fill="#8B7B76" fillRule="evenodd" id="Vector_293" />
            <path clipRule="evenodd" d={svgPaths.p3f1ac00} fill="#DBB03D" fillRule="evenodd" id="Vector_294" />
            <path clipRule="evenodd" d={svgPaths.p151810f2} fill="#E3BA48" fillRule="evenodd" id="Vector_295" />
            <path clipRule="evenodd" d={svgPaths.p2dc60f00} fill="#9DB2A4" fillRule="evenodd" id="Vector_296" />
            <path clipRule="evenodd" d={svgPaths.p4d70770} fill="#D5B149" fillRule="evenodd" id="Vector_297" />
            <path clipRule="evenodd" d={svgPaths.p3d569c80} fill="#BA9538" fillRule="evenodd" id="Vector_298" />
            <path clipRule="evenodd" d={svgPaths.p22fcd400} fill="#9A8837" fillRule="evenodd" id="Vector_299" />
            <path clipRule="evenodd" d={svgPaths.p1508ee00} fill="#B2973B" fillRule="evenodd" id="Vector_300" />
            <path clipRule="evenodd" d={svgPaths.p31a0c100} fill="#E0BB4F" fillRule="evenodd" id="Vector_301" />
            <path clipRule="evenodd" d={svgPaths.p10b5fe00} fill="#E1EEE7" fillRule="evenodd" id="Vector_302" />
            <path clipRule="evenodd" d={svgPaths.p1c720000} fill="#E1EEE7" fillRule="evenodd" id="Vector_303" />
            <path clipRule="evenodd" d={svgPaths.p2225ff80} fill="#DCE9E2" fillRule="evenodd" id="Vector_304" />
            <path clipRule="evenodd" d={svgPaths.pbf02d00} fill="#CADAD4" fillRule="evenodd" id="Vector_305" />
            <path clipRule="evenodd" d={svgPaths.p1601f00} fill="#626C64" fillRule="evenodd" id="Vector_306" />
            <path clipRule="evenodd" d={svgPaths.p2da08f70} fill="#DAE0E0" fillRule="evenodd" id="Vector_307" />
            <path clipRule="evenodd" d={svgPaths.p16c39780} fill="#828A84" fillRule="evenodd" id="Vector_308" />
            <path clipRule="evenodd" d={svgPaths.p4d9a140} fill="#A78E46" fillRule="evenodd" id="Vector_309" />
            <path clipRule="evenodd" d={svgPaths.p30b9ebc0} fill="#9AA29B" fillRule="evenodd" id="Vector_310" />
            <path clipRule="evenodd" d={svgPaths.p21805580} fill="#D2E7E7" fillRule="evenodd" id="Vector_311" />
            <path clipRule="evenodd" d={svgPaths.p3ea90880} fill="#80A197" fillRule="evenodd" id="Vector_312" />
            <path clipRule="evenodd" d={svgPaths.p2ae09a00} fill="#A2A7A5" fillRule="evenodd" id="Vector_313" />
            <path clipRule="evenodd" d={svgPaths.p37df8900} fill="#A17787" fillRule="evenodd" id="Vector_314" />
            <path clipRule="evenodd" d={svgPaths.p3a7e5bc0} fill="#AC7C90" fillRule="evenodd" id="Vector_315" />
            <path clipRule="evenodd" d={svgPaths.p18fcfd00} fill="#949697" fillRule="evenodd" id="Vector_316" />
            <path clipRule="evenodd" d={svgPaths.p22c13400} fill="#926874" fillRule="evenodd" id="Vector_317" />
            <path clipRule="evenodd" d={svgPaths.p1cd22200} fill="#956675" fillRule="evenodd" id="Vector_318" />
            <path clipRule="evenodd" d={svgPaths.pd445200} fill="#9A6D82" fillRule="evenodd" id="Vector_319" />
            <path clipRule="evenodd" d={svgPaths.p1e061880} fill="#956675" fillRule="evenodd" id="Vector_320" />
            <path clipRule="evenodd" d={svgPaths.p1faff180} fill="#3F2A32" fillRule="evenodd" id="Vector_321" />
            <path clipRule="evenodd" d={svgPaths.p49fad00} fill="#422C34" fillRule="evenodd" id="Vector_322" />
            <path clipRule="evenodd" d={svgPaths.pe959c0} fill="#C9CEC7" fillRule="evenodd" id="Vector_323" />
            <path clipRule="evenodd" d={svgPaths.pecba100} fill="#D0AA36" fillRule="evenodd" id="Vector_324" />
            <path clipRule="evenodd" d={svgPaths.p27418900} fill="#CCA444" fillRule="evenodd" id="Vector_325" />
            <path clipRule="evenodd" d={svgPaths.p1f42c600} fill="#DDE5E1" fillRule="evenodd" id="Vector_326" />
            <path clipRule="evenodd" d={svgPaths.p38028180} fill="#C7CDCB" fillRule="evenodd" id="Vector_327" />
            <path clipRule="evenodd" d={svgPaths.p38b99200} fill="#D6DCDE" fillRule="evenodd" id="Vector_328" />
            <path clipRule="evenodd" d={svgPaths.p1d2c80} fill="#D9E0DE" fillRule="evenodd" id="Vector_329" />
            <path clipRule="evenodd" d={svgPaths.p4802000} fill="#C1C8C2" fillRule="evenodd" id="Vector_330" />
            <path clipRule="evenodd" d={svgPaths.p34e15600} fill="#7F8A85" fillRule="evenodd" id="Vector_331" />
            <path clipRule="evenodd" d={svgPaths.p3484fe00} fill="#897133" fillRule="evenodd" id="Vector_332" />
            <path clipRule="evenodd" d={svgPaths.p2b4ec900} fill="#9E7781" fillRule="evenodd" id="Vector_333" />
            <path clipRule="evenodd" d={svgPaths.p377e9f00} fill="#97717B" fillRule="evenodd" id="Vector_334" />
            <path clipRule="evenodd" d={svgPaths.p12d1a300} fill="#675356" fillRule="evenodd" id="Vector_335" />
            <path clipRule="evenodd" d={svgPaths.p14e95900} fill="#92696F" fillRule="evenodd" id="Vector_336" />
            <path clipRule="evenodd" d={svgPaths.p485a500} fill="#AB818B" fillRule="evenodd" id="Vector_337" />
            <path clipRule="evenodd" d={svgPaths.p1c41aa80} fill="#F0F0EA" fillRule="evenodd" id="Vector_338" />
            <path clipRule="evenodd" d={svgPaths.p1ad6a170} fill="#E1E0CC" fillRule="evenodd" id="Vector_339" />
            <path clipRule="evenodd" d={svgPaths.p2a9ff300} fill="#ECE6E0" fillRule="evenodd" id="Vector_340" />
            <path clipRule="evenodd" d={svgPaths.p34117400} fill="#C69E36" fillRule="evenodd" id="Vector_341" />
            <path clipRule="evenodd" d={svgPaths.pef4e280} fill="#9FBCA9" fillRule="evenodd" id="Vector_342" />
            <path clipRule="evenodd" d={svgPaths.p17aef600} fill="#9FBCA9" fillRule="evenodd" id="Vector_343" />
            <path clipRule="evenodd" d={svgPaths.p257dd480} fill="#D8DCC0" fillRule="evenodd" id="Vector_344" />
            <path clipRule="evenodd" d={svgPaths.p5a29c80} fill="#AC8688" fillRule="evenodd" id="Vector_345" />
            <path clipRule="evenodd" d={svgPaths.pf2b9680} fill="#67403E" fillRule="evenodd" id="Vector_346" />
            <path clipRule="evenodd" d={svgPaths.p2602bf80} fill="#6F4E46" fillRule="evenodd" id="Vector_347" />
            <path clipRule="evenodd" d={svgPaths.p27b35ef2} fill="#C6979B" fillRule="evenodd" id="Vector_348" />
            <path clipRule="evenodd" d={svgPaths.p17d4aa80} fill="#C59F9E" fillRule="evenodd" id="Vector_349" />
            <path clipRule="evenodd" d={svgPaths.p3c4e6f00} fill="#6A4947" fillRule="evenodd" id="Vector_350" />
            <path clipRule="evenodd" d={svgPaths.pe986700} fill="#8E6A75" fillRule="evenodd" id="Vector_351" />
            <path clipRule="evenodd" d={svgPaths.p2c9b9880} fill="#9C7582" fillRule="evenodd" id="Vector_352" />
            <path clipRule="evenodd" d={svgPaths.p21f9e680} fill="#7E878E" fillRule="evenodd" id="Vector_353" />
            <path clipRule="evenodd" d={svgPaths.p1936d980} fill="#949EA9" fillRule="evenodd" id="Vector_354" />
            <path clipRule="evenodd" d={svgPaths.p6059e00} fill="#7B848B" fillRule="evenodd" id="Vector_355" />
            <path clipRule="evenodd" d={svgPaths.p6dc9180} fill="#7E8994" fillRule="evenodd" id="Vector_356" />
            <path clipRule="evenodd" d={svgPaths.p2733ec00} fill="#564249" fillRule="evenodd" id="Vector_357" />
            <path clipRule="evenodd" d={svgPaths.p3bf6fe00} fill="#A27B84" fillRule="evenodd" id="Vector_358" />
            <path clipRule="evenodd" d={svgPaths.p28724f00} fill="#8B676F" fillRule="evenodd" id="Vector_359" />
            <path clipRule="evenodd" d={svgPaths.p106bf500} fill="#947076" fillRule="evenodd" id="Vector_360" />
            <path clipRule="evenodd" d={svgPaths.p5abc900} fill="#785858" fillRule="evenodd" id="Vector_361" />
            <path clipRule="evenodd" d={svgPaths.p1641ea00} fill="#9A6D82" fillRule="evenodd" id="Vector_362" />
            <path clipRule="evenodd" d={svgPaths.p14ee4400} fill="#C399A8" fillRule="evenodd" id="Vector_363" />
            <path clipRule="evenodd" d={svgPaths.p18b45900} fill="#422C34" fillRule="evenodd" id="Vector_364" />
            <path clipRule="evenodd" d={svgPaths.p16fe6140} fill="#422C34" fillRule="evenodd" id="Vector_365" />
            <path clipRule="evenodd" d={svgPaths.p2855d700} fill="#9F7885" fillRule="evenodd" id="Vector_366" />
            <path clipRule="evenodd" d={svgPaths.p2c209300} fill="#9F7885" fillRule="evenodd" id="Vector_367" />
            <path clipRule="evenodd" d={svgPaths.p3bd41300} fill="#C399A8" fillRule="evenodd" id="Vector_368" />
            <path clipRule="evenodd" d={svgPaths.p20101e00} fill="#7C6169" fillRule="evenodd" id="Vector_369" />
            <path clipRule="evenodd" d={svgPaths.pc426cc0} fill="#492F2D" fillRule="evenodd" id="Vector_370" />
            <path clipRule="evenodd" d={svgPaths.pb28ea00} fill="#6E5751" fillRule="evenodd" id="Vector_371" />
            <path clipRule="evenodd" d={svgPaths.p1e8e0c00} fill="#AC934B" fillRule="evenodd" id="Vector_372" />
            <path clipRule="evenodd" d={svgPaths.p9b6bc00} fill="#AC934B" fillRule="evenodd" id="Vector_373" />
            <path clipRule="evenodd" d={svgPaths.p26d42700} fill="#DEB53A" fillRule="evenodd" id="Vector_374" />
            <path clipRule="evenodd" d={svgPaths.pa26c600} fill="#9B8128" fillRule="evenodd" id="Vector_375" />
            <path clipRule="evenodd" d={svgPaths.p2ca2e00} fill="#EDEBE1" fillRule="evenodd" id="Vector_376" />
            <path clipRule="evenodd" d={svgPaths.p15176800} fill="#E5DDC8" fillRule="evenodd" id="Vector_377" />
            <path clipRule="evenodd" d={svgPaths.p4727900} fill="#6B4752" fillRule="evenodd" id="Vector_378" />
            <path clipRule="evenodd" d={svgPaths.p1545c200} fill="#8B6672" fillRule="evenodd" id="Vector_379" />
            <path clipRule="evenodd" d={svgPaths.p19687280} fill="#AA9FA6" fillRule="evenodd" id="Vector_380" />
            <path clipRule="evenodd" d={svgPaths.p2343bf00} fill="#BE9F52" fillRule="evenodd" id="Vector_381" />
            <path clipRule="evenodd" d={svgPaths.pb232a00} fill="#DEB53A" fillRule="evenodd" id="Vector_382" />
            <path clipRule="evenodd" d={svgPaths.pa446ef0} fill="#C69C35" fillRule="evenodd" id="Vector_383" />
            <path clipRule="evenodd" d={svgPaths.p28d5e00} fill="#E7BD3D" fillRule="evenodd" id="Vector_384" />
            <path clipRule="evenodd" d={svgPaths.p157ada00} fill="#DEB53A" fillRule="evenodd" id="Vector_385" />
            <path clipRule="evenodd" d={svgPaths.p240aff00} fill="#C69E36" fillRule="evenodd" id="Vector_386" />
            <path clipRule="evenodd" d={svgPaths.p2dfce000} fill="#B08791" fillRule="evenodd" id="Vector_387" />
            <path clipRule="evenodd" d={svgPaths.p14dc6d80} fill="#807F7D" fillRule="evenodd" id="Vector_388" />
            <path clipRule="evenodd" d={svgPaths.p230f8900} fill="#C69A33" fillRule="evenodd" id="Vector_389" />
            <path clipRule="evenodd" d={svgPaths.p57fbb90} fill="#C69E36" fillRule="evenodd" id="Vector_390" />
            <path clipRule="evenodd" d={svgPaths.p31e27d80} fill="#A17D36" fillRule="evenodd" id="Vector_391" />
            <path clipRule="evenodd" d={svgPaths.p332fad80} fill="#C49833" fillRule="evenodd" id="Vector_392" />
            <path clipRule="evenodd" d={svgPaths.p338a4700} fill="#C09129" fillRule="evenodd" id="Vector_393" />
            <path clipRule="evenodd" d={svgPaths.p16105200} fill="#CFA031" fillRule="evenodd" id="Vector_394" />
            <path clipRule="evenodd" d={svgPaths.p1b040800} fill="#855F61" fillRule="evenodd" id="Vector_395" />
            <path clipRule="evenodd" d={svgPaths.pb8a40f0} fill="#A78941" fillRule="evenodd" id="Vector_396" />
            <path clipRule="evenodd" d={svgPaths.p11bb3500} fill="#C0B4B6" fillRule="evenodd" id="Vector_397" />
            <path clipRule="evenodd" d={svgPaths.p3e4bb100} fill="#DEB033" fillRule="evenodd" id="Vector_398" />
            <path clipRule="evenodd" d={svgPaths.pe344a00} fill="#D0AA36" fillRule="evenodd" id="Vector_399" />
            <path clipRule="evenodd" d={svgPaths.p2de8ce80} fill="#E8C042" fillRule="evenodd" id="Vector_400" />
            <path clipRule="evenodd" d={svgPaths.p2307a200} fill="#EAC141" fillRule="evenodd" id="Vector_401" />
            <path clipRule="evenodd" d={svgPaths.p488300} fill="#E7C043" fillRule="evenodd" id="Vector_402" />
            <path clipRule="evenodd" d={svgPaths.pe032980} fill="#E6C149" fillRule="evenodd" id="Vector_403" />
            <path clipRule="evenodd" d={svgPaths.p3040bbc0} fill="#DCAD2F" fillRule="evenodd" id="Vector_404" />
            <path clipRule="evenodd" d={svgPaths.p1ac42d00} fill="#DEB033" fillRule="evenodd" id="Vector_405" />
            <path clipRule="evenodd" d={svgPaths.p3394da00} fill="#EAC13F" fillRule="evenodd" id="Vector_406" />
            <path clipRule="evenodd" d={svgPaths.pbe85400} fill="#C09222" fillRule="evenodd" id="Vector_407" />
            <path clipRule="evenodd" d={svgPaths.p281db500} fill="#E6BB39" fillRule="evenodd" id="Vector_408" />
            <path clipRule="evenodd" d={svgPaths.p3a711948} fill="#EAC141" fillRule="evenodd" id="Vector_409" />
            <path clipRule="evenodd" d={svgPaths.p156fdc00} fill="#DEB231" fillRule="evenodd" id="Vector_410" />
            <path clipRule="evenodd" d={svgPaths.p13103900} fill="#DEB231" fillRule="evenodd" id="Vector_411" />
            <path clipRule="evenodd" d={svgPaths.p22a81a80} fill="#EAC141" fillRule="evenodd" id="Vector_412" />
            <path clipRule="evenodd" d={svgPaths.p2570e400} fill="#EAC141" fillRule="evenodd" id="Vector_413" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Objects2() {
  return (
    <div className="absolute contents inset-[0_-0.01%_0_0.01%]" data-name="OBJECTS">
      <Group10 />
    </div>
  );
}

function Asset2() {
  return (
    <div className="h-[88px] overflow-clip relative shrink-0 w-[83.886px]" data-name="Asset 5 1">
      <Objects2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center relative shrink-0 text-black text-center w-full">
      <p className="font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[36px] tracking-[-0.72px] whitespace-nowrap">
        <BlurFadeWords text="RSVP" />
      </p>
      <div className="font-['Cormorant_Garamond:Medium_Italic',sans-serif] font-medium italic leading-[normal] min-w-full relative shrink-0 text-[18px] tracking-[-0.09px] w-[min-content] text-center">
        <BlurFadeWords text="Please let us know if you’ll be joining us by September 20" />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Frame">
      <BlurFade delay={0} yOffset="10px" className="w-full flex justify-center">
        <Asset2 />
      </BlurFade>
      <Frame19 />
    </div>
  );
}

function Radio({ checked }: { checked: boolean }) {
  return (
    <div className="relative rounded-[24px] shrink-0 size-[16px]" data-name="Radio">
      <div
        aria-hidden
        className={`absolute border-solid inset-0 pointer-events-none rounded-[24px] transition-all ${
          checked ? "border-6 border-[#77adff]" : "border-2 border-[#999]"
        }`}
      />
    </div>
  );
}

function Frame21({ rsvp, setRsvp }: { rsvp: any; setRsvp: any }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <button
        onClick={() => setRsvp((s: any) => ({ ...s, attendance: "yes" }))}
        className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 cursor-pointer bg-transparent border-0 outline-none"
        type="button"
      >
        <Radio checked={rsvp.attendance === "yes"} />
        <p className={`[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-center tracking-[-0.09px] whitespace-nowrap transition-colors ${rsvp.attendance === "yes" ? "text-black" : "text-[rgba(0,0,0,0.6)]"}`}>
          Yes, I’ll be there
        </p>
      </button>

      <button
        onClick={() => setRsvp((s: any) => ({ ...s, attendance: "no" }))}
        className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 cursor-pointer bg-transparent border-0 outline-none"
        type="button"
      >
        <Radio checked={rsvp.attendance === "no"} />
        <p className={`[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-center tracking-[-0.09px] whitespace-nowrap transition-colors ${rsvp.attendance === "no" ? "text-black" : "text-[rgba(0,0,0,0.6)]"}`}>
          Sorry, I can’t make it
        </p>
      </button>
    </div>
  );
}

function InputContainer({ rsvp, setRsvp }: { rsvp: any; setRsvp: any }) {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] min-h-[46px] relative rounded-[12px] w-full" data-name="Input Container">
      <div aria-hidden className="absolute border border-[#d5a8cc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <input
        type="text"
        value={rsvp.name}
        onChange={(e) => setRsvp((s: any) => ({ ...s, name: e.target.value }))}
        placeholder="Your full name"
        className="w-full h-full px-[12px] py-[8px] font-['Cormorant_Garamond:Medium',sans-serif] font-medium text-[18px] text-black tracking-[-0.09px] bg-transparent outline-none placeholder-[rgba(0,0,0,0.35)] rounded-[12px] relative z-10"
      />
    </div>
  );
}

function Frame22({ onSubmit, isSubmitting }: { onSubmit: any; isSubmitting: boolean }) {
  return (
    <button
      onClick={onSubmit}
      disabled={isSubmitting}
      className="bg-[#77adff] h-[46px] relative rounded-[1000px] shrink-0 w-full cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all border-0 outline-none flex items-center justify-center"
      type="button"
    >
      <p className="[word-break:break-word] font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] whitespace-nowrap">
        {isSubmitting ? "Sending..." : "Send RSVP"}
      </p>
    </button>
  );
}

function Frame20({ rsvp, setRsvp, onSubmit, isSubmitting }: { rsvp: any; setRsvp: any; onSubmit: any; isSubmitting: boolean }) {
  if (rsvp.submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-[16px] w-full py-[32px] fade-in">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}} />
        <p className="font-['Cormorant_Garamond:Medium_Italic',sans-serif] font-medium italic text-[24px] text-black text-center leading-[normal] tracking-[-0.12px]">
          {rsvp.attendance === "yes"
            ? "We can’t wait to celebrate with you! 🎉"
            : "We’ll miss you, but thank you for letting us know! 💛"}
        </p>
        <p className="font-['Cormorant_Garamond:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.5)] text-center tracking-[-0.09px]">
          {rsvp.name}
        </p>
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[18px] text-black text-center tracking-[-0.09px] w-[min-content]">Will you attend?</p>
      <Frame21 rsvp={rsvp} setRsvp={setRsvp} />
      <div className="h-[72px] relative shrink-0 w-full" data-name="MDS-Public-TW-Text input">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <p className="[word-break:break-word] font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full">Full Name*</p>
          <InputContainer rsvp={rsvp} setRsvp={setRsvp} />
        </div>
      </div>
      <Frame22 onSubmit={onSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}

function Frame17({ rsvp, setRsvp, onSubmit, isSubmitting }: { rsvp: any; setRsvp: any; onSubmit: any; isSubmitting: boolean }) {
  return (
    <div className="-translate-x-1/2 absolute top-[7545px] z-20 content-stretch flex flex-col gap-[48px] items-center left-1/2 pb-[24px] pt-[8px] px-[24px] w-[402px] min-h-[475px]">
      <div aria-hidden className="absolute bg-[#ffe3f6] inset-0 mix-blend-multiply pointer-events-none" />
      <Frame18 />
      <Frame20 rsvp={rsvp} setRsvp={setRsvp} onSubmit={onSubmit} isSubmitting={isSubmitting} />
      <div className="-translate-x-1/2 absolute h-[69px] left-1/2 top-[-69px] w-[402px]">
        <div className="absolute inset-[8.58%_0_0_0]">
          <svg className="block size-full" fill="none" height="63.0823" preserveAspectRatio="none" viewBox="0 0 402 63.0823" width="402">
            <g id="Vector 1">
              <path d={svgPaths.p1a9cdd40} fill="#FFE3F6" style={{ mixBlendMode: "multiply" }} />
            </g>
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[-69px] flex h-[69px] items-center justify-center left-1/2 w-[402px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[69px] relative w-[402px]">
            <div className="absolute inset-[8.58%_0_0_0]">
              <svg className="block size-full" fill="none" height="63.0823" preserveAspectRatio="none" viewBox="0 0 402 63.0823" width="402">
                <g id="Vector 1">
                  <path d={svgPaths.p1a9cdd40} fill="#FFE3F6" style={{ mixBlendMode: "multiply" }} />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center justify-center min-h-px not-italic relative text-[#ffe16c] w-full" data-name="Frame">
      <p className="font-['PP Pangaia:Ultralight',sans-serif] leading-[1.15] relative shrink-0 text-[36px] tracking-[-0.72px]">Datuna</p>
      <p className="font-['Babylonica:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[40px]">{`&`}</p>
      <p className="font-['PP Pangaia:Ultralight',sans-serif] leading-[1.15] relative shrink-0 text-[36px] tracking-[-0.72px]">Natura</p>
    </div>
  );
}

export function UnifiedFooter() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 120) {
        setIsRevealed(true);
      } else if (window.scrollY < maxScroll - 180) {
        setIsRevealed(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const duration = 0.6;
  const blur = "8px";
  const yOffset = "8px";
  const easing = "cubic-bezier(0.16, 1, 0.3, 1)";

  const titleWords = ["Datuna", "&", "Natura"];
  const subtitleWords = ["Made", "with", "love", "❤️", "by", "Lezho"];

  return (
    <div className="-translate-x-1/2 absolute bottom-0 w-[411px] left-[calc(50%+0.5px)] overflow-hidden" style={{ height: "550px", aspectRatio: "68/91" }} data-name="Footer">
      <img alt="" className="absolute block inset-0 max-w-none size-full object-cover pointer-events-none" src={imgSubtract} />
      <div className="absolute inset-0 flex flex-col items-center pt-[80px] z-10 px-[24px]">
        
        {/* Title Words */}
        <div className="content-stretch flex gap-[14px] h-[60px] items-center justify-center relative shrink-0 w-full whitespace-nowrap text-[#ffe16c]">
          {titleWords.map((word, idx) => {
            let fontClass = "font-['PP_Pangaia:Ultralight',sans-serif] leading-[1.15] relative shrink-0 text-[36px] tracking-[-0.72px]";
            if (word === "&") {
              fontClass = "font-['Babylonica:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[40px]";
            }
            return (
              <span
                key={idx}
                className={`inline-block ${fontClass}`}
                style={{
                  opacity: isRevealed ? 1 : 0,
                  filter: isRevealed ? "blur(0px)" : `blur(${blur})`,
                  transform: isRevealed ? "translateY(0px)" : `translateY(${yOffset})`,
                  transition: `opacity ${duration}s ${easing}, filter ${duration}s ${easing}, transform ${duration}s ${easing}`,
                  transitionDelay: `${idx * 0.08}s`,
                  willChange: "opacity, filter, transform",
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Subtitle Words */}
        <div className="mt-[16px] text-center flex flex-wrap justify-center gap-x-[6px] w-full">
          {subtitleWords.map((word, idx) => {
            return (
              <span
                key={idx}
                className="inline-block font-['Cormorant_Garamond:Medium',sans-serif] font-medium leading-[normal] text-[18px] text-white tracking-[-0.09px]"
                style={{
                  opacity: isRevealed ? 1 : 0,
                  filter: isRevealed ? "blur(0px)" : `blur(${blur})`,
                  transform: isRevealed ? "translateY(0px)" : `translateY(${yOffset})`,
                  transition: `opacity ${duration}s ${easing}, filter ${duration}s ${easing}, transform ${duration}s ${easing}`,
                  transitionDelay: `${(idx * 0.06) + 0.24}s`, // start after title words reveal!
                  willChange: "opacity, filter, transform",
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

      </div>
    </div>
  );
}

function LeafVineHeader() {
  return (
    <svg width="78" height="24" viewBox="0 0 78 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14C20 11 40 12 74 9" stroke="#3D5030" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 13C12 8 16 5 21 9C18 12 15 13 14 13Z" fill="#3D5030"/>
      <path d="M28 12C27 7 32 4 37 8.5C34 11.5 30 12 28 12Z" fill="#3D5030"/>
      <path d="M42 11.5C42 6.5 48 4.5 52 9C49 12 44 12 42 11.5Z" fill="#3D5030"/>
      <path d="M56 10.5C57 5.5 63 4.5 66 8.5C63 11 58 11 56 10.5Z" fill="#3D5030"/>
      <path d="M20 13.5C23 17 19 20 15 16.5C17 14.5 19 13.5 20 13.5Z" fill="#3D5030"/>
      <path d="M35 12.8C38 16.5 33 19.5 29 16C31.5 14 33.5 13 35 12.8Z" fill="#3D5030"/>
      <path d="M49 12C52.5 15.5 48 18.5 44 15.2C46 13.2 47.8 12.2 49 12Z" fill="#3D5030"/>
    </svg>
  );
}

function TimelineSection() {
  const items = [
    {
      time: "12:30",
      title: "Holy Ceremony",
      description: "We warmly invite you to witness our vows at the church",
      imgSrc: imgHolyCeremony,
      alt: "Holy Ceremony",
    },
    {
      time: "15:30",
      title: "Warm Welcome",
      description: "Gathering for welcome drinks and capturing sweet memories",
      imgSrc: null,
      alt: "Warm Welcome",
    },
    {
      time: "16:00",
      title: 'Saying "I Do"',
      description: "Join us as we officially sign our love story",
      imgSrc: null,
      alt: "Saying I Do",
    },
    {
      time: "16:30",
      title: "Cocktail Hour",
      description: "Raising a glass together with light bites and smiles",
      imgSrc: null,
      alt: "Cocktail Hour",
    },
    {
      time: "18:00",
      title: "Dinner & Toasts",
      description: "Sharing a delicious feast, heartfelt words and laughter",
      imgSrc: null,
      alt: "Dinner and Toasts",
    },
    {
      time: "21:00",
      title: "Cake & Celebration",
      description: "A sweet tradition followed by dancing the night away",
      imgSrc: null,
      alt: "Cake & Celebration",
    },
  ];

  return (
    <div 
      className="absolute left-0 top-[4467px] w-[402px] flex flex-col items-center z-10"
      style={{
        background: 'transparent',
        paddingTop: '80px',
        paddingBottom: '140px',
      }}
      data-name="AgendaSection"
    >
      {/* Header Leaf Icon matching Dress Code section */}
      <div className="flex justify-center mb-[14px]">
        <Asset />
      </div>

      {/* Section Title */}
      <div className="flex flex-col items-center justify-center text-center mb-[48px]">
        <h2
          style={{
            color: '#2A2E2B',
            textAlign: 'center',
            fontFamily: '"PP Pangaia:Ultralight", "PP Pangaia", sans-serif',
            fontSize: '36px',
            fontStyle: 'normal',
            fontWeight: 200,
            lineHeight: '110%',
            letterSpacing: '-0.36px',
            margin: 0,
          }}
        >
          Wedding Events
        </h2>
        <h2
          style={{
            color: '#2A2E2B',
            textAlign: 'center',
            fontFamily: '"PP Pangaia:Ultralight", "PP Pangaia", sans-serif',
            fontSize: '36px',
            fontStyle: 'normal',
            fontWeight: 200,
            lineHeight: '110%',
            letterSpacing: '-0.36px',
            margin: 0,
          }}
        >
          Timeline
        </h2>
      </div>

      {/* Timeline Items */}
      <div className="flex flex-col items-center gap-[48px] w-full px-[36px]">
        {items.map((item, index) => (
          <RevealContainer key={index} delay={0.05}>
            <div className="flex flex-col items-center text-center w-full">
              {/* Image Container */}
              <div 
                className={`w-[330px] h-[260px] overflow-hidden mb-[8px] flex items-center justify-center relative ${
                  item.imgSrc ? 'bg-transparent' : 'rounded-[16px] bg-[#EBE7DF]'
                }`}
                style={item.imgSrc ? {} : { boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
              >
                {item.imgSrc ? (
                  <img 
                    src={item.imgSrc} 
                    alt={item.alt}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-[20px] bg-[#EAE6DE] text-[#2A2E2B]/40">
                    <span className="text-[32px] mb-[6px]">🖼️</span>
                    <span 
                      style={{
                        fontFamily: '"PP Pangaia:Ultralight", "PP Pangaia", sans-serif',
                        fontSize: '15px',
                        fontWeight: 200,
                      }}
                    >
                      Image for {item.time} ({item.title})
                    </span>
                  </div>
                )}
              </div>

              {/* Time */}
              <span
                style={{
                  color: '#2A2E2B',
                  textAlign: 'center',
                  fontFamily: '"PP Pangaia:Ultralight", "PP Pangaia", sans-serif',
                  fontSize: '34px',
                  fontStyle: 'normal',
                  fontWeight: 200,
                  lineHeight: 'normal',
                  letterSpacing: '-0.17px',
                  marginTop: '8px',
                  marginBottom: '8px',
                  display: 'block',
                }}
              >
                {item.time}
              </span>

              {/* Title */}
              <h3
                style={{
                  color: '#2A2E2B',
                  textAlign: 'center',
                  fontFamily: '"PP Pangaia:Bold", "PP Pangaia", sans-serif',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  letterSpacing: '-0.12px',
                  margin: '0 0 4px 0',
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: '#2A2E2B',
                  textAlign: 'center',
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '18px',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  letterSpacing: '-0.09px',
                  margin: 0,
                  maxWidth: '290px',
                }}
              >
                {item.description}
              </p>
            </div>
          </RevealContainer>
        ))}
      </div>
    </div>
  );
}

export default function Landing({
  rsvp,
  setRsvp,
  onSubmit,
  isSubmitting,
  isLocked,
  onUnlock,
  onBookStay,
}: {
  rsvp: any;
  setRsvp: any;
  onSubmit: any;
  isSubmitting: boolean;
  isLocked: boolean;
  onUnlock: () => void;
  onBookStay?: () => void;
}) {
  const [scrollY, setScrollY] = useState(0);
  const [step, setStep] = useState<'locked' | 'printing' | 'printed' | 'transitioning' | 'unlocked'>(
    isLocked ? 'locked' : 'unlocked'
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync step with isLocked prop
  useEffect(() => {
    if (!isLocked) {
      setStep('unlocked');
    } else if (step === 'unlocked') {
      setStep('locked');
    }
  }, [isLocked]);

  const handleOpenInvitation = () => {
    if (step !== 'locked') return;
    setStep('printing');

    // 1. Printing phase takes 3.5s
    setTimeout(() => {
      setStep('printed');
      
      // 2. Pause 600ms in printed state before expansion transition
      setTimeout(() => {
        setStep('transitioning');
        
        // 3. Unlock scrolling after transition finishes (1.8s)
        setTimeout(() => {
          setStep('unlocked');
          onUnlock();
        }, 1800);
      }, 600);
    }, 3500);
  };

  const getStripContainerStyle = (): React.CSSProperties => {
    const isExpanded = step === 'transitioning' || step === 'unlocked';
    return {
      position: 'absolute',
      left: '138px',   // centered in 250px photobooth
      top: '218px',    // 68px below photobooth top (150px + 68px)
      width: '127px',  // 127px mask width
      minWidth: '127px',
      maxWidth: '127px',
      height: '320px', // 320px mask height
      overflow: isExpanded ? 'visible' : 'hidden', // open mask during scale up!
      zIndex: isExpanded ? 30 : 10, // bring above title and machine
      display: 'flex',
      justifyContent: 'center',
      background: 'transparent',
    };
  };

  const getStripImageStyle = (): React.CSSProperties => {
    const isExpanded = step === 'transitioning' || step === 'unlocked';

    let transformStr = 'translateY(0%) scale(1)';
    if (step === 'locked') {
      transformStr = 'translateY(calc(-100% + 23px)) scale(1)';
    } else if (step === 'printing' || step === 'printed') {
      transformStr = 'translateY(0%) scale(1)';
    } else if (isExpanded) {
      // Shifted 40px up from previous -68px -> -108px
      transformStr = 'translateY(-108px) scale(2.12)';
    }

    let transitionStr = 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)';
    if (step === 'printing') {
      transitionStr = 'transform 3.5s linear';
    } else if (step === 'printed') {
      transitionStr = 'transform 0.1s ease-out';
    } else if (isExpanded) {
      transitionStr = 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)';
    }

    return {
      width: '102px',  // fixed base width (102px)
      minWidth: '102px',
      maxWidth: '102px',
      height: '319px', // fixed base height (319px)
      display: 'block',
      objectFit: 'cover',
      transform: transformStr,
      transition: transitionStr,
      transformOrigin: 'center center',
      boxShadow: 'none',
      filter: 'none',
      background: 'transparent',
    };
  };

  return (
    <div className="relative w-[402px] h-[8639px]" data-name="Landing">
      <div className="absolute left-[79px] size-[254px] top-[8720px]" data-name="O Sole Mio 1" />
      <Bg />
      {/* Interactive Photobooth HeroWrapper */}
      <div 
        className="absolute left-0 top-0 w-[402px] h-[710px] overflow-hidden z-20" 
        style={{ 
          background: '#C6B39A',
          boxShadow: '0 0 0 3px #C6B39A',
        }}
        data-name="HeroWrapper"
      >
        {/* Top Titles: fades out when transitioning or unlocked */}
        <div 
          className="absolute left-0 top-0 w-full select-none transition-opacity duration-1000 z-10"
          style={{
            opacity: (step === 'transitioning' || step === 'unlocked') ? 0 : 1,
            pointerEvents: (step === 'transitioning' || step === 'unlocked') ? 'none' : 'auto',
          }}
        >
          {/* Datuna & Natura Container */}
          <div 
            style={{
              display: 'flex',
              width: '402px',
              height: '54px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              position: 'absolute',
              top: '18px',
              left: '0',
            }}
          >
            <span
              style={{
                color: '#220406',
                textAlign: 'center',
                fontFamily: '"PP Pangaia:Ultralight", "PP Pangaia", sans-serif',
                fontSize: '38px',
                fontStyle: 'normal',
                fontWeight: 200,
                lineHeight: '115%',
                letterSpacing: '-0.76px',
              }}
            >
              Datuna
            </span>
            <span
              style={{
                color: '#220406',
                textAlign: 'center',
                fontFamily: '"Babylonica:Regular", Babylonica, cursive',
                fontSize: '42px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '150%',
              }}
            >
              &amp;
            </span>
            <span
              style={{
                color: '#220406',
                textAlign: 'center',
                fontFamily: '"PP Pangaia:Ultralight", "PP Pangaia", sans-serif',
                fontSize: '38px',
                fontStyle: 'normal',
                fontWeight: 200,
                lineHeight: '115%',
                letterSpacing: '-0.76px',
              }}
            >
              Natura
            </span>
          </div>

          {/* Wedding Text */}
          <div
            style={{
              position: 'absolute',
              top: '70px',
              width: '402px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: '#220406',
                textAlign: 'center',
                fontFamily: '"Ballet:Regular", Ballet, cursive',
                fontSize: '42px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              Wedding
            </span>
          </div>
        </div>

        {/* Photobooth Machine Image */}
        <div 
          className="absolute transition-opacity duration-1000 z-10"
          style={{
            left: '76px',
            top: '150px',
            width: '250px',
            height: '440px',
            opacity: (step === 'transitioning' || step === 'unlocked') ? 0 : 1,
            pointerEvents: (step === 'transitioning' || step === 'unlocked') ? 'none' : 'auto',
          }}
        >
          <img src={imgPhotoboothMachine} alt="Photo Booth Machine" className="w-full h-full object-contain pointer-events-none" />
        </div>

        {/* Photo Strip Container with Clip Mask */}
        <div style={getStripContainerStyle()}>
          <img 
            src={imgPhotostrip} 
            alt="Photo Strip"
            style={getStripImageStyle()}
          />
        </div>

        {/* Bottom Button: Open Invitation */}
        <div 
          className="absolute left-0 w-full flex justify-center z-30 transition-opacity duration-1000"
          style={{
            top: '612px',
            opacity: step === 'locked' ? 1 : 0,
            pointerEvents: step === 'locked' ? 'auto' : 'none',
          }}
        >
          <button
            onClick={handleOpenInvitation}
            style={{
              display: 'inline-flex',
              height: '44px',
              padding: '2px 28px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid #220406',
              borderRadius: '9999px',
              background: 'transparent',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            className="hover:bg-[#220406]/10 active:scale-[0.96] transition-all duration-300 shadow-md"
          >
            <span style={{ color: '#220406', fontSize: '13px', opacity: 0.9 }}>✧</span>
            <span
              style={{
                color: '#220406',
                textAlign: 'center',
                fontFamily: '"PP Pangaia:Ultralight", "PP Pangaia", sans-serif',
                fontSize: '22px',
                fontStyle: 'normal',
                fontWeight: 200,
                lineHeight: '115%',
                letterSpacing: '-0.44px',
              }}
            >
              Open Invitation
            </span>
            <span style={{ color: '#220406', fontSize: '13px', opacity: 0.9 }}>✧</span>
          </button>
        </div>

        {/* Bottom Details: Date and Location matching Figma proportions */}
        <div 
          className="absolute left-0 w-full flex flex-col items-center justify-center text-center z-30 pointer-events-none transition-all duration-700"
          style={{
            top: '540px',
            opacity: (step === 'transitioning' || step === 'unlocked') ? 1 : 0,
          }}
        >
          {/* Date: 20.09.2026 (Figma 72px) */}
          <div className="inline-flex justify-center items-center">
            {"20.09.2026".split("").map((char, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-block',
                  color: '#220406',
                  textAlign: 'center',
                  fontFamily: '"Ballet:Regular", Ballet, cursive',
                  fontSize: '72px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  opacity: (step === 'transitioning' || step === 'unlocked') ? 1 : 0,
                  filter: (step === 'transitioning' || step === 'unlocked') ? 'blur(0px)' : 'blur(8px)',
                  transform: (step === 'transitioning' || step === 'unlocked') ? 'translateY(0px)' : 'translateY(6px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${0.6 + idx * 0.06}s`,
                  willChange: 'opacity, filter, transform',
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Location: Tsikhisdziri (Figma 24px) */}
          <div className="inline-flex justify-center items-center" style={{ marginTop: '-46px' }}>
            {"Tsikhisdziri".split("").map((char, idx) => (
              <span
                key={idx}
                style={{
                  display: 'inline-block',
                  color: '#220406',
                  textAlign: 'center',
                  fontFamily: '"PP Pangaia:Ultralight", "PP Pangaia", sans-serif',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 200,
                  lineHeight: '160%',
                  opacity: (step === 'transitioning' || step === 'unlocked') ? 1 : 0,
                  filter: (step === 'transitioning' || step === 'unlocked') ? 'blur(0px)' : 'blur(8px)',
                  transform: (step === 'transitioning' || step === 'unlocked') ? 'translateY(0px)' : 'translateY(6px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: `${1.1 + idx * 0.05}s`,
                  willChange: 'opacity, filter, transform',
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div 
        className="absolute left-0 top-[710px] w-[402px] h-[874px] overflow-hidden z-10" 
        data-name="LocationSection"
      >
        {/* Background Asset: locationasset.png */}
        <img 
          src={imgLocationAsset} 
          alt="Location Background" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" 
        />

        {/* Content Overlay */}
        <div 
          className="absolute left-0 top-0 w-full flex flex-col items-center z-10"
          style={{ paddingTop: '90px' }}
        >
          {/* Text: "The Wedding will take place at" */}
          <BlurFade delay={0.1} yOffset="12px" className="w-full text-center">
            <p
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '-0.09px',
              }}
            >
              The Wedding will take place at
            </p>
          </BlurFade>

          {/* Logo: shukura.svg (width: 255.8px, height: 43.39px, 16px below text) */}
          <BlurFade delay={0.25} yOffset="12px" className="w-full flex justify-center">
            <img 
              src={imgShukuraLogo} 
              alt="Shukura Logo"
              style={{
                width: '255.8px',
                height: '43.39px',
                marginTop: '16px',
                objectFit: 'contain',
              }}
            />
          </BlurFade>

          {/* Button: "Open in Maps" (24px below logo) */}
          <BlurFade delay={0.4} yOffset="12px" className="w-full flex justify-center">
            <a
              href="https://maps.google.com/?q=Shukura+Tsikhisdziri"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                height: '46px',
                padding: '2px 28px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px',
                marginTop: '24px',
                borderRadius: '9999px',
                background: '#FFF',
                textDecoration: 'none',
                cursor: 'pointer',
                userSelect: 'none',
              }}
              className="hover:bg-white/90 active:scale-[0.96] transition-all duration-300 shadow-md"
            >
              <span
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: '"PP Pangaia:Ultralight", "PP Pangaia", sans-serif',
                  fontSize: '22px',
                  fontStyle: 'normal',
                  fontWeight: 200,
                  lineHeight: '115%',
                  letterSpacing: '-0.44px',
                }}
              >
                Open in Maps
              </span>
            </a>
          </BlurFade>
        </div>
      </div>
      {/* 3. Add to Calendar Section (Starts at top: 1584px) */}
      <Section />

      {/* 4. Dress Code Section (Starts at top: 2148px) */}
      <DressCodeSection style={{ top: '2148px' }} />

      {/* 5. Accommodation Section (Starts at top: 3639px) */}
      <Frame3 onBookStay={onBookStay} />

      {/* 6. Timeline / Agenda Section (Starts at top: 4467px) */}
      <TimelineSection />

      {/* 7. RSVP Section (Starts at top: 7345px) */}
      <Frame17 rsvp={rsvp} setRsvp={setRsvp} onSubmit={onSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}