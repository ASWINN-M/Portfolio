import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const BOOT_LINES = [
  "Initializing agent runtime…",
  "Loading memory & tool adapters…",
  "Warming retrieval pipelines…",
  "Connecting MCP interfaces…",
  "Almost ready — entering portfolio…",
];

const CRITICAL_ASSETS = [
  "assets/coding-pov.png",
  "assets/astronaut.glb",
];

const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, "")}`;

const PageLoader = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const finishedRef = useRef(false);
  const assetsDoneRef = useRef(false);
  const windowLoadedRef = useRef(false);

  const nodes = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        angle: (360 / 8) * i,
      })),
    []
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const startedAt = performance.now();
    const MIN_MS = 2800;
    let cancelled = false;
    let loadedCount = 0;
    const totalAssets = CRITICAL_ASSETS.length;

    const tryFinish = async () => {
      if (cancelled || finishedRef.current) return;
      if (!assetsDoneRef.current && !windowLoadedRef.current) return;

      const elapsed = performance.now() - startedAt;
      if (elapsed < MIN_MS) {
        await new Promise((r) => setTimeout(r, MIN_MS - elapsed));
      }
      if (cancelled || finishedRef.current) return;

      finishedRef.current = true;
      setProgress(100);
      setLineIndex(BOOT_LINES.length - 1);

      window.setTimeout(() => {
        if (cancelled) return;
        setVisible(false);
      }, 450);

      window.setTimeout(() => {
        if (!cancelled) onFinished?.();
      }, 1000);
    };

    const progressTimer = window.setInterval(() => {
      if (finishedRef.current) return;
      setProgress((prev) => {
        if (prev >= 94) return prev;
        const step = prev < 65 ? 1.6 : prev < 85 ? 0.55 : 0.18;
        return Math.min(prev + step, 94);
      });
    }, 40);

    const lineTimer = window.setInterval(() => {
      if (finishedRef.current) return;
      setLineIndex((i) => Math.min(i + 1, BOOT_LINES.length - 2));
    }, 520);

    const onAsset = () => {
      loadedCount += 1;
      if (loadedCount >= totalAssets) {
        assetsDoneRef.current = true;
        tryFinish();
      }
    };

    CRITICAL_ASSETS.forEach((path) => {
      const src = assetUrl(path);
      if (src.endsWith(".glb")) {
        fetch(src, { method: "GET", cache: "force-cache" })
          .then(() => onAsset())
          .catch(() => onAsset());
        return;
      }
      const img = new Image();
      img.onload = onAsset;
      img.onerror = onAsset;
      img.src = src;
    });

    const onWindowLoad = () => {
      windowLoadedRef.current = true;
      // Finish even if one asset HEAD/fetch stalls.
      window.setTimeout(() => {
        assetsDoneRef.current = true;
        tryFinish();
      }, 900);
    };

    if (document.readyState === "complete") onWindowLoad();
    else window.addEventListener("load", onWindowLoad, { once: true });

    const safety = window.setTimeout(() => {
      assetsDoneRef.current = true;
      windowLoadedRef.current = true;
      tryFinish();
    }, 7500);

    return () => {
      cancelled = true;
      window.clearInterval(progressTimer);
      window.clearInterval(lineTimer);
      window.clearTimeout(safety);
      window.removeEventListener("load", onWindowLoad);
    };
  }, [onFinished]);

  const shownProgress = Math.round(progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-primary"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(51,194,204,0.18),transparent_45%),radial-gradient(circle_at_70%_70%,rgba(87,219,150,0.1),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
            <div className="relative mb-10 h-44 w-44">
              <div className="absolute inset-0 rounded-full border border-aqua/20" />
              <div className="absolute inset-4 rounded-full border border-mint/15" />

              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                {nodes.map((node) => (
                  <span
                    key={node.id}
                    className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-aqua shadow-[0_0_12px_rgba(51,194,204,0.9)]"
                    style={{
                      transform: `rotate(${node.angle}deg) translateY(-78px) translate(-50%, -50%)`,
                    }}
                  />
                ))}
              </motion.div>

              <motion.div
                className="absolute inset-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              >
                {[0, 120, 240].map((angle) => (
                  <span
                    key={angle}
                    className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-mint shadow-[0_0_10px_rgba(87,219,150,0.8)]"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-54px) translate(-50%, -50%)`,
                    }}
                  />
                ))}
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-aqua/40 bg-navy/80 shadow-[0_0_40px_rgba(51,194,204,0.25)] backdrop-blur-sm"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-xl font-semibold tracking-widest text-aqua">
                    AI
                  </span>
                </motion.div>
              </div>
            </div>

            <p className="text-xs uppercase tracking-[0.28em] text-aqua/80">
              Aswin · Agent Boot
            </p>
            <h1 className="mt-2 text-center text-2xl font-semibold text-white md:text-3xl">
              Spinning up the workspace
            </h1>

            <div className="mt-5 min-h-[1.5rem] text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={lineIndex}
                  className="font-mono text-sm text-mint/90"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  {BOOT_LINES[lineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="mt-8 w-full">
              <div className="mb-2 flex items-center justify-between text-xs text-neutral-400">
                <span>System load</span>
                <span className="tabular-nums text-aqua">{shownProgress}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-storm">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-aqua via-mint to-aqua"
                  animate={{ width: `${shownProgress}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-neutral-500">
              Hang tight — the portal opens when boot completes.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
