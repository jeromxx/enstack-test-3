
import React, { useEffect, useState } from "react";
import { I18nProvider, Trans } from "@lingui/react";
import { i18n } from "@lingui/core";
import { dynamicActivate } from "./i18n"; // Adjust this import based on your i18n setup

function App() {
  const [language, setLanguage] = useState("en"); // Default language is English

  // Function to switch language and activate the chosen locale
  const switchLanguage = (locale: string) => {
    setLanguage(locale);        // Set the selected language in state
    dynamicActivate(locale);    // Activate the selected language dynamically
  };

  // Initially activate the default language
  useEffect(() => {
    dynamicActivate("en"); // Default language is English
  }, []);

  return (
    <I18nProvider i18n={i18n}>
      <div className="App">
        <header className="App-header">
          <h1>
            <Trans id="app.welcome_message" values={{ username: "Jerome" }} />
          </h1>
          <h3>
            <Trans id="app.title" />
          </h3>
          
          {/* Language Selection Buttons */}
          <div>
            <button onClick={() => switchLanguage("en")}>
              English
            </button>
            <button onClick={() => switchLanguage("vi")}>
              Tiếng Việt
            </button>
          </div>

          <h3>
            <Trans id="app.items_count" values={{ count: 3 }} />
          </h3>
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;


