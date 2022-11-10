import ColorModeProvider from "./ColorMode";

export function ProviderWrapper({ children }) {
  return (
    <ColorModeProvider initialMode={"dark"}>
      {children}
    </ColorModeProvider>
  );
}
