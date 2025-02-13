export default function MobileContainer({ children }) {
  return (
    <div className="sm:hidden mt-10" id="mobile-menu">
      <div className="space-y-1 px-2 pt-2 pb-3">{children}</div>
    </div>
  );
}
