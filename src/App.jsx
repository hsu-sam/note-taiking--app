import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ColorTheme from "./features/Settings/ColorTheme";
import FontTheme from "./features/Settings/FontTheme";
import ChangePassword from "./features/authentication/ChangePassword";
import { DarkModeProvider } from "./context/DarkModeContext";
import { FontProvider } from "./context/FontContext";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Archived from "./pages/Archived";
import Setting from "./pages/Setting";
import Tags from "./pages/Tags";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <FontProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="all-notes" />} />
                <Route path="all-notes" element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="archived-notes" element={<Archived />} />
                <Route path="tags" element={<Tags />} />
                <Route path="settings" element={<Setting />}>
                  <Route path="color-theme" element={<ColorTheme />} />
                  <Route path="font-theme" element={<FontTheme />} />
                  <Route path="change-password" element={<ChangePassword />} />
                </Route>
              </Route>

              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>

          <Toaster
            position="bottom-right"
            gutter={20}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: { duration: 5000 },
              style: {
                fontSize: "14px",
                maxWidth: "400px",
                padding: "16px",
                backgroundColor: "var(--color-neutral-50)",
                color: "var(--color-neutral-800)",
              },
            }}
          />
        </QueryClientProvider>
      </FontProvider>
    </DarkModeProvider>
  );
}

export default App;
