import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import BottomNav from "./components/BottomNav";
import CategoryBrowse from "./pages/CategoryBrowse";
import BrowsePage from "./pages/BrowsePage";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Learning from "./pages/Learning";
import SignIn from "./pages/SignIn";
import Crops from "./pages/Crops";
import Livestock from "./pages/Livestock";
import { Chat, Weather, Profile } from "./pages/OtherPages";

export default function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const currentCategoryId = active.startsWith("category-") ? active.split("-").slice(1).join("-") : null;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem('ugconnect-user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse stored user', error);
      }
    }
  }, []);

  const handleCreatePost = () => {
    if (!user) {
      setActive('signin');
      return;
    }
    setActive('home');
  };

  const handleSignIn = (signedInUser) => {
    setUser(signedInUser);
    window.localStorage.setItem('ugconnect-user', JSON.stringify(signedInUser));
    setActive('home');
  };

  const handleSignOut = () => {
    setUser(null);
    window.localStorage.removeItem('ugconnect-user');
    setActive('home');
  };

  const getPageContent = () => {
    if (currentCategoryId) {
      return <CategoryBrowse categoryId={currentCategoryId} setActive={setActive} user={user} />;
    }

    switch (active) {
      case "home":
        return <Home setActive={setActive} user={user} />;
      case "marketplace":
        return <BrowsePage setActive={setActive} />;
      case "jobs":
        return <Jobs user={user} />;
      case "learning":
        return <Learning user={user} />;
      case "signin":
        return <SignIn onSignIn={handleSignIn} />;
      case "communities":
      case "messages":
        return <Chat user={user} />;
      case "weather":
        return <Weather />;
      case "profile":
        return <Profile user={user} />;
      case "crops":
        return <Crops />;
      case "livestock":
        return <Livestock />;
      default:
        return <Home setActive={setActive} />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f8fd",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!isMobile && <Navigation active={active} setActive={setActive} onCreatePost={handleCreatePost} user={user} onSignIn={() => setActive('signin')} onSignOut={handleSignOut} />}

      <div
        style={{
          flex: 1,
          overflow: "auto",
          ...(isMobile && {
            maxWidth: "430px",
            margin: "0 auto",
            width: "100%",
            boxShadow: "0 0 60px rgba(0,0,0,0.08)",
            background: "#f5f8fd",
          }),
        }}
      >
        {getPageContent()}
      </div>

      {isMobile && <BottomNav active={active} setActive={setActive} />}
    </div>
  );
}
