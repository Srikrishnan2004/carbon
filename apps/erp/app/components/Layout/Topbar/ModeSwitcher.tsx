import { Button, HStack, Select } from "@carbon/react";
import { useMode } from "@carbon/remix";
import { themes } from "@carbon/utils";
import { LuMoon, LuSun } from "react-icons/lu";
import { useOptimisticLocation } from "~/hooks";

const ModeSwitcher = () => {
  const { mode, setMode } = useMode();
  const location = useOptimisticLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentTheme = searchParams.get("theme") || "dreampi";

  const handleThemeChange = (newTheme: string) => {
    const url = new URL(
      location.pathname + location.search,
      window.location.origin
    );
    url.searchParams.set("theme", newTheme);
    window.history.replaceState({}, "", url.toString());
    window.location.reload();
  };

  return (
    <HStack spacing={2} className="items-center">
      {/* Theme Selector */}
      <div className="relative group">
        <Select
          value={currentTheme}
          onChange={(e) => handleThemeChange(e.target.value)}
          className="min-w-[140px] h-9 bg-white/80 backdrop-blur-sm border border-white/30 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 rounded-xl text-sm font-medium"
        >
          {themes.map((theme) => (
            <option key={theme.name} value={theme.name}>
              {theme.label}
            </option>
          ))}
        </Select>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Mode Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className="h-9 w-9 p-0 bg-white/80 backdrop-blur-sm border border-white/30 hover:bg-white/90 hover:border-purple-400/50 transition-all duration-300 rounded-xl group"
      >
        {mode === "light" ? (
          <LuMoon className="h-4 w-4 text-slate-600 group-hover:text-purple-600 transition-colors" />
        ) : (
          <LuSun className="h-4 w-4 text-slate-300 group-hover:text-yellow-400 transition-colors" />
        )}
      </Button>
    </HStack>
  );
};

export default ModeSwitcher;
