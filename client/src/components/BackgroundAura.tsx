export default function BackgroundAura() {
  return (
    <div aria-hidden className="pointer-events-none">
      <span className="aura aura--primary" />
      <span className="aura aura--accent" />
      <span className="aura aura--bottom" />
    </div>
  );
}
