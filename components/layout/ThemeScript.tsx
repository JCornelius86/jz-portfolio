// Inline pre-hydration script. Sets the .dark class on <html> before
// React mounts so the first paint matches the user's stored or
// system preference (no theme flash on load).
export default function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
