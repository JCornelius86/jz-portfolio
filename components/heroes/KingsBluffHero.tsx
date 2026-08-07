import Image from "next/image";

/**
 * Component hero for the King's Bluff project: the 5x6 board with a hand
 * of three cards floating over its near edge, which is the whole game in
 * one frame (chess position, poker hand, one of them a lie).
 *
 * The card faces are rebuilt from the project's own Gilt & Ink tokens
 * rather than screenshotted, so the float animation is live. Geometry,
 * palette, hatching, and the 2px ink outline with a hard unblurred drop
 * all match design/components.css in the King's Bluff repo.
 *
 * Motion follows that system's rule, "unresolved hovers, resolved sits":
 * kbFloat is a 3.4s 7px bob, staggered per card so the fan breathes out
 * of sync. The selected card also carries the gold frame and glow it
 * gets in game. Everything sits still under prefers-reduced-motion.
 */

const css = `
.kbh-stage { --kbh-ink: #1a1418; --kbh-parchment: #f4ecd8; --kbh-gold: #f2b52e; --kbh-crimson: #ff5548; --kbh-back: #332830; }
.kbh-card { width: 62px; height: 90px; background: var(--kbh-parchment); border: 2px solid #000; border-radius: 7px; box-shadow: 0 4px 0 #000; padding: 4px; box-sizing: content-box; }
.kbh-corner { font: 900 12px/1 -apple-system, BlinkMacSystemFont, system-ui, sans-serif; color: var(--kbh-ink); }
.kbh-corner--red { color: var(--kbh-crimson); }
.kbh-art { margin: 3px 2px 0; height: 56px; border-radius: 3px; }
.kbh-art--spade { background: repeating-linear-gradient(45deg, #1a1418 0 6px, #f4ecd8 6px 12px); opacity: 0.5; }
.kbh-art--heart { background: repeating-linear-gradient(135deg, #ff5548 0 6px, #f4ecd8 6px 12px); opacity: 0.6; }
.kbh-card--selected { border: 3px solid var(--kbh-gold); box-shadow: 0 4px 0 #000, 0 0 30px rgba(242, 181, 46, 0.35); }
.kbh-card--back { background: var(--kbh-back); display: flex; align-items: flex-end; justify-content: center; padding-bottom: 10px; box-sizing: border-box; height: 98px; }
.kbh-diamond { width: 16px; height: 16px; transform: rotate(45deg); background: var(--kbh-gold); opacity: 0.8; }
.kbh-theirs { width: 46px; height: 66px; background: var(--kbh-back); border: 2px solid #000; border-radius: 6px; box-shadow: 0 3px 0 #000; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 6px; box-sizing: border-box; }
.kbh-diamond--sm { width: 11px; height: 11px; transform: rotate(45deg); background: var(--kbh-gold); opacity: 0.8; }
@media (prefers-reduced-motion: no-preference) {
  @keyframes kbhFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
  .kbh-float { animation: kbhFloat 3.4s ease-in-out infinite; }
}
`;

export default function KingsBluffHero() {
  return (
    <div className="kbh-stage relative w-full max-w-[360px] aspect-[1/2] mx-auto md:ml-auto md:mr-0 flex items-center overflow-hidden rounded-[22px] border border-rule bg-[#1a1418] px-4">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* Their hand, hanging face-down from the top edge. The count is a
          physical fact you can see, not a stat, so it stays in frame. */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 -top-7 flex justify-center gap-1.5"
      >
        {[-9, -3, 3, 9].map((deg) => (
          <div key={deg} className="kbh-theirs" style={{ transform: `rotate(${deg}deg)` }}>
            <i className="kbh-diamond--sm" />
          </div>
        ))}
      </div>

      {/* Board plus the hand held over its near edge. Grouped and centred
          so the table breathes above and below, the way the portrait phone
          layout actually sits. */}
      <div className="relative w-full -translate-y-8">
        <Image
          src="/images/kings-bluff/board-states.png"
          alt="A 5 by 6 King's Bluff board showing the game's state languages at once: a marked king in red brackets, a chained knight counting down its frozen turns, a guarded knight behind a gold shield, and the selected queen lit in a gold frame."
          width={620}
          height={800}
          priority
          className="block w-full h-auto rounded-[12px]"
        />

        {/* Your hand, held over the near edge of the board. */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 -bottom-20 flex justify-center items-end gap-2"
        >
          <div className="kbh-float" style={{ animationDelay: "0s" }}>
            <div className="kbh-card" style={{ transform: "rotate(-8deg)" }}>
              <div className="kbh-corner">
                K<br />♠
              </div>
              <div className="kbh-art kbh-art--spade" />
            </div>
          </div>

          <div className="kbh-float mb-2" style={{ animationDelay: "-1.1s" }}>
            <div className="kbh-card kbh-card--selected" style={{ transform: "rotate(1deg)" }}>
              <div className="kbh-corner kbh-corner--red">
                K<br />♥
              </div>
              <div className="kbh-art kbh-art--heart" />
            </div>
          </div>

          <div className="kbh-float" style={{ animationDelay: "-2.2s" }}>
            <div className="kbh-card kbh-card--back" style={{ transform: "rotate(8deg)" }}>
              <i className="kbh-diamond" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
