import { useState, useEffect, useRef } from "react";

const AnimatedText = ({
  text = "",
  className = "",
  delay = 0,
  speed = 100,
  showCursor = true,
  cursorAlwaysOn = false, // kalau true: cursor tetap berkedip setelah selesai
}) => {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef(null);
  const startDelayRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    // reset setiap kali text / delay / speed berubah
    setDisplayed("");
    setIsComplete(false);
    indexRef.current = 0;

    // jika text kosong, tidak perlu mulai animasi
    if (!text) return;

    const tick = () => {
      // ambil char dengan charAt -- aman jika out-of-range
      const ch = text.charAt(indexRef.current);
      if (ch !== "") {
        setDisplayed(prev => prev + ch);
        indexRef.current += 1;
        // lanjutkan ke huruf berikutnya
        timeoutRef.current = setTimeout(tick, speed);
      } else {
        // selesai
        setIsComplete(true);
      }
    };

    // mulai setelah delay yang diberikan
    startDelayRef.current = setTimeout(tick, delay);

    return () => {
      // bersihkan semua timer ketika unmount atau dependency berubah
      if (startDelayRef.current) clearTimeout(startDelayRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && (
        <span
          className={`inline-block ml-2 w-[5px] h-10 rounded align-middle animate-blink ${
            isComplete && !cursorAlwaysOn ? "opacity-0" : ""
          }`}
          aria-hidden="true"
        />
      )}
    </span>
  );
};

export default AnimatedText;
