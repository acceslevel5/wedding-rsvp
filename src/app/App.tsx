import { useState, useEffect, useRef } from "react";
import Landing, { UnifiedFooter, AccommodationPage } from "@/imports/Landing-1/index";

export interface RSVPState {
  attendance: "yes" | "no" | null;
  name: string;
  submitted: boolean;
}

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio("/assets/O Sole Mio.mp4");
    audio.loop = true;
    audioRef.current = audio;

    // Autoplay handler on first user interaction (standard web practice)
    const startPlay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          // Remove interaction listeners once playing starts
          document.removeEventListener("click", startPlay);
          document.removeEventListener("touchstart", startPlay);
        })
        .catch((err) => {
          console.log("Autoplay blocked:", err);
        });
    };

    document.addEventListener("click", startPlay);
    document.addEventListener("touchstart", startPlay);

    return () => {
      audio.pause();
      document.removeEventListener("click", startPlay);
      document.removeEventListener("touchstart", startPlay);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Play failed:", err));
    }
  };

  const waveBars = [
    { height: "8px", duration: "0.8s", delay: "0.1s" },
    { height: "12px", duration: "0.5s", delay: "0s" },
    { height: "10px", duration: "0.7s", delay: "0.2s" },
    { height: "7px", duration: "0.6s", delay: "0.15s" },
  ];

  return (
    <div className="fixed z-50 top-[24px] w-full max-w-[402px] flex justify-end px-[16px] pointer-events-none">
      <style>{`
        @keyframes audio-dance {
          0% {
            transform: scaleY(0.25);
          }
          100% {
            transform: scaleY(1);
          }
        }
      `}</style>
      <button
        onClick={togglePlay}
        className="pointer-events-auto flex items-center justify-center w-[28px] h-[28px] rounded-full hover:bg-black/5 active:scale-[0.95] transition-all cursor-pointer select-none"
        aria-label="Toggle music"
      >
        {/* Animated Audio Wave Bars (Middle Aligned) */}
        <div className="flex items-center gap-[2.2px] h-[12px] w-[16px] justify-center">
          {waveBars.map((bar, idx) => (
            <div
              key={idx}
              className="w-[1.8px] bg-[#7a843e] rounded-full origin-center transition-all duration-300"
              style={{
                height: isPlaying ? bar.height : "2px",
                animation: isPlaying ? `audio-dance ${bar.duration} ease-in-out ${bar.delay} infinite alternate` : "none",
                opacity: isPlaying ? 1 : 0.35,
              }}
            />
          ))}
        </div>
      </button>
    </div>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    () => window.location.pathname + window.location.hash
  );
  const [savedScrollPos, setSavedScrollPos] = useState<number>(0);
  const [scale, setScale] = useState(1);
  const [rsvp, setRsvp] = useState<RSVPState>({
    attendance: null,
    name: "",
    submitted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const BASE_WIDTH = 402;
  const BASE_HEIGHT = 8639;

  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbzZ5MMYiXDR6rpgvYlujvBuyWIUzrMq4BoxtnsbxGKGcU87jj71kAEftIICwzma6_4X7Q/exec";

  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname + window.location.hash;
      const returningToHome = !newPath.includes("accommodation") && !newPath.includes("book-stay");
      setCurrentPath(newPath);

      if (returningToHome) {
        setTimeout(() => {
          window.scrollTo({ top: savedScrollPos, left: 0, behavior: "instant" as any });
        }, 20);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [savedScrollPos]);

  const handleGoToAccommodation = () => {
    const currentY = window.scrollY || document.documentElement.scrollTop || 0;
    setSavedScrollPos(currentY);
    window.history.pushState({}, "", "/accommodation");
    setCurrentPath("/accommodation");
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
  };

  const handleGoToHome = () => {
    window.history.pushState({}, "", "/");
    setCurrentPath("/");
    setTimeout(() => {
      window.scrollTo({ top: savedScrollPos, left: 0, behavior: "instant" as any });
    }, 20);
  };

  const isAccommodation = currentPath.includes("accommodation") || currentPath.includes("book-stay");

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      setViewportHeight(screenHeight);

      // Consistent scale calculation for both locked & unlocked states to prevent layout shift
      if (screenWidth < 480) {
        setScale(screenWidth / BASE_WIDTH);
      } else {
        setScale(1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLocked, isAccommodation]);

  useEffect(() => {
    if (isLocked && !isAccommodation) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isLocked, isAccommodation]);

  function handleSubmit() {
    if (!rsvp.name.trim() || !rsvp.attendance) {
      alert("გთხოვთ შეავსოთ სახელი და მონიშნოთ დასწრება.");
      return;
    }

    setIsSubmitting(true);

    const data = {
      guest_name: rsvp.name,
      attendance: rsvp.attendance,
      timestamp: new Date().toLocaleString()
    };

    fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(() => {
        setIsSubmitting(false);
        setRsvp((s) => ({ ...s, submitted: true }));
      })
      .catch((error) => {
        console.error('Error sending RSVP:', error);
        setIsSubmitting(false);
        setRsvp((s) => ({ ...s, submitted: true }));
      });
  }

  return (
    <div className="w-full min-h-screen relative">
      {/* Vinyl record player fixed to viewport - persistent across all routes */}
      <MusicPlayer />

      {isAccommodation ? (
        <div className="flex justify-center w-full min-h-screen relative" style={{ background: "#f7f5ef" }}>
          <div className="w-full flex justify-center">
            <AccommodationPage onBack={handleGoToHome} />
          </div>
        </div>
      ) : (
        <div 
          className="flex justify-center w-full min-h-screen relative" 
          style={{ background: isLocked ? "#C6B39A" : "#1a1c1a" }}
        >
          {/* Fixed Footer Reveal Container */}
          {!isLocked && (
            <div 
              className="fixed bottom-0 left-1/2 -translate-x-1/2 overflow-hidden z-0"
              style={{ 
                width: `${BASE_WIDTH * scale}px`, 
                height: `${550 * scale}px`,
              }}
            >
              <div 
                className="origin-bottom-left"
                style={{ 
                  width: `${BASE_WIDTH}px`, 
                  height: `550px`,
                  transform: `scale(${scale})`
                }}
              >
                <UnifiedFooter />
              </div>
            </div>
          )}

          <div 
            className="relative overflow-hidden z-10" 
            style={{ 
              width: `${BASE_WIDTH * scale}px`, 
              height: isLocked ? `${viewportHeight}px` : `${BASE_HEIGHT * scale}px`,
              transition: "width 0.05s ease, height 0.05s ease"
            }}
          >
            <div 
              className="absolute left-0 top-0 origin-top-left"
              style={{ 
                width: `${BASE_WIDTH}px`, 
                height: isLocked ? `${viewportHeight / scale}px` : `${BASE_HEIGHT}px`,
                transform: `scale(${scale})`
              }}
            >
              <Landing 
                rsvp={rsvp} 
                setRsvp={setRsvp} 
                onSubmit={handleSubmit} 
                isSubmitting={isSubmitting} 
                isLocked={isLocked}
                onUnlock={() => setIsLocked(false)}
                onBookStay={handleGoToAccommodation}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
