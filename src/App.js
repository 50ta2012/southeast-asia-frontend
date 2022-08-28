import Root from "./web/Root"
import messageInZh from "./language/zh.json";
import React, { createContext, useState } from 'react';

export const LangContext = createContext();

function LangProvider({ children }) {
  const [lang, setLang] = useState({
    message: messageInZh,
    locale: "zh"
  });

  console.log(lang)

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Root></Root>
    </LangProvider>
  );
}