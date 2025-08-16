import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useIsDarkMode } from "../../context/DarkModeContext";

function ChangePassword() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const isDarkMode = useIsDarkMode();
  const showSrc = !isDarkMode ? (
    <img
      src="/svgs/show.svg"
      alt="Toggle visibility"
      className="absolute top-8 right-3 cursor-pointer"
      // onClick={() => setShowOld(!showOld)}
    />
  ) : (
    <img
      src="/svgs/show-dark.svg"
      alt="Toggle visibility"
      className="absolute top-8 right-3 cursor-pointer"
      // onClick={() => setShowOld(!showOld)}
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can validate and submit here
  };

  return (
    <div className="m-8 flex w-[528px] flex-col gap-6 rounded-lg">
      <h2 className="text-base font-semibold">Change Password</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-[24px]">
          {/* Old Password */}
          <div className="relative flex flex-col gap-1">
            <label htmlFor="old-password" className="font-medium">
              Old Password
            </label>
            <Input
              id="old-password"
              name="oldPassword"
              autoComplete="current-password"
              type={showOld ? "text" : "password"}
              required
              // className="rounded border border-neutral-300 bg-white px-3 py-2"
            />
            {showSrc}
          </div>

          {/* New Password */}
          <div className="relative flex flex-col gap-1">
            <label htmlFor="new-password" className="font-medium">
              New Password
            </label>
            <Input
              id="new-password"
              name="newPassword"
              autoComplete="new-password"
              type={showNew ? "text" : "password"}
              required
              // className="rounded border border-neutral-300 px-3 py-2"
            />
            {showSrc}
            <div className="mt-1 flex items-center gap-1 text-xs text-neutral-500">
              <img src="/svgs/info-circle.svg" alt="Info" />
              <span>At least 8 characters</span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative flex flex-col gap-1">
            <label htmlFor="confirm-password" className="font-medium">
              Confirm New Password
            </label>
            <Input
              id="confirm-password"
              name="confirmPassword"
              autoComplete="new-password"
              type={showConfirm ? "text" : "password"}
              required
              // className="rounded border border-neutral-300 px-3 py-2"
            />
            {showSrc}
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">Save Password</Button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
