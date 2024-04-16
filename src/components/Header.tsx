import React from "react";
import { IonIcon } from "@ionic/react";
import { moonOutline, moon } from "ionicons/icons";

interface HeaderProps {
  darkMode?: boolean;
  changeDarkMode?: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, changeDarkMode }) => {
  return (
    <header className={darkMode ? "dark" : ""}>
      <h1>Where in the world?</h1>
      <div className="dark-mode" onClick={changeDarkMode}>
        {darkMode ? <IonIcon icon={moon} /> : <IonIcon icon={moonOutline} />}
        <p>Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
