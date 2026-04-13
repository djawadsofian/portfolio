import Navigation from "../components/common/Navigation";
import Footer from "../components/sections/Footer";
import { type ComponentType } from "react";

const withLayout = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const LayoutHOC = (props: P) => {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-500 overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-yellow-500/5 to-gray-900/80" />
          <div className="absolute left-[8%] top-[12%] h-24 w-24 rounded-full bg-yellow-400/5 blur-3xl sm:h-32 sm:w-32" />
          <div className="absolute right-[10%] top-[30%] h-20 w-20 rounded-full bg-yellow-500/5 blur-3xl sm:h-28 sm:w-28" />
          <div className="absolute bottom-[12%] left-[18%] h-28 w-28 rounded-full bg-white/5 blur-3xl sm:h-36 sm:w-36" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
        </div>

        <div className="relative z-10">
          <Navigation />

          <main className="pt-20 sm:pt-24">
            <WrappedComponent {...props} />
          </main>

          <Footer />
        </div>
      </div>
    );
  };

  // Set display name for better debugging
  LayoutHOC.displayName = `withLayout(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return LayoutHOC;
};

export default withLayout;
