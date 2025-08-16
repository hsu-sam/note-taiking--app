import { createPortal } from "react-dom";
import Button from "./Button";

function ConfirmModal({ actionType, onConfirm, onCancel, title, description }) {
  const isDelete = actionType === "delete";
  const defaultTitle = isDelete ? "Delete  note?" : "Archive note";
  const defaultDesc = isDelete
    ? "Are you sure you want to permanently delete this note? This action cannot be undone."
    : "Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.";

  const DeleteIcon = () => (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8521 3.87899L15.6702 5.66378H18.3097C19.1212 5.66378 19.7791 6.32166 19.7791 7.1332V8.2214C19.7791 8.77626 19.3293 9.22606 18.7745 9.22606H5.00466C4.4498 9.22606 4 8.77626 4 8.2214V7.1332C4 6.32166 4.65788 5.66378 5.46943 5.66378H8.10885L8.92705 3.87899C9.17255 3.34339 9.70775 3 10.2969 3H13.4821C14.0713 3 14.6065 3.34339 14.8521 3.87899Z"
        stroke="#0E121B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.24 9.30078V17.9865C18.24 19.6511 16.9073 21.0005 15.2634 21.0005H8.51661C6.8727 21.0005 5.54004 19.6511 5.54004 17.9865V9.30078"
        stroke="#0E121B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1992 12.8164V17.3248M13.5796 12.8164V17.3248"
        stroke="#0E121B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const ArchiveIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 7.78216V16.2169C21 19.165 18.9188 21 15.9736 21H8.02638C5.08119 21 3 19.165 3 16.2159V7.78216C3 4.83405 5.08119 3 8.02638 3H15.9736C18.9188 3 21 4.84281 21 7.78216Z"
        stroke="#0E121B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 14L11.9982 17L9 14"
        stroke="#0E121B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.998 17V10"
        stroke="#0E121B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9336 7H3.05859"
        stroke="#0E121B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-[90%] max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
        <div className="mb-6 flex gap-3">
          {isDelete ? <DeleteIcon /> : <ArchiveIcon />}
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-lg font-semibold">{title || defaultTitle}</h2>
            <p className="text-sm text-neutral-600">
              {description || defaultDesc}
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant={isDelete ? "danger" : "primary"} onClick={onConfirm}>
            {isDelete ? "Delete Note" : "Archive Note"}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ConfirmModal;
