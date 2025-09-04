import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";
import { useEffect, useState } from "react";

function AppLayout() {
  const [selectedTag, setSelectedTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px breakpoint for mobile
    };

    checkScreenSize(); // check on load
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <p>
          Please visit this site on a desktop for the best experience. The
          mobile version is currently in production.
        </p>
      </div>
    );
  }

  return (
    <div className="grid h-screen grid-cols-[16rem_1fr] grid-rows-[auto_1fr]">
      <Header
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <Sidebar selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <Main>
        <Outlet
          context={{ selectedTag, setSelectedTag, searchQuery, setSearchQuery }}
        />
      </Main>
    </div>
  );

  // return (
  //   <>
  //     {/* Desktop */}
  //     <div className="hidden lg:block">
  //       <DesktopLayout>
  //         <Outlet />
  //       </DesktopLayout>
  //     </div>

  //     {/* Tablet */}
  //     <div className="hidden md:block lg:hidden">
  //       <MobileTabletLayout>
  //         <Outlet />
  //       </MobileTabletLayout>
  //     </div>
  //   </>
  // );
}

export default AppLayout;
