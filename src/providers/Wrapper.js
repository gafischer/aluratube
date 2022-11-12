import ColorModeProvider from "./ColorMode";

export const ProviderWrapper = ({ children }) => {
  return (
    <ColorModeProvider initialMode={"dark"}>
      {children}
    </ColorModeProvider>
  );
}
