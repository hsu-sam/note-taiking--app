import { useState } from "react";
import Button from "../../ui/Button";
import { useDeleteArchivedNote } from "./useDeleteArchivedNote";
import ConfirmModal from "../../ui/ConfirmModal";
import { useRestoreNote } from "./useRestoreNote";
import { useIsDarkMode } from "../../context/DarkModeContext";

function IteractiveArchiveButton({ noteId, onClose }) {
  const { isDeletingArchiveNote, deleteArchiveNote } = useDeleteArchivedNote({
    onSuccess: onClose,
  });
  const { restore, isRestoring } = useRestoreNote({ onSuccess: onClose });
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const isDarkMode = useIsDarkMode();

  function handleDeleteArchivedNote() {
    deleteArchiveNote(noteId);
    setShowConfirmDelete(false);
  }
  function handleRestoreNote() {
    restore(noteId);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-3 pt-5">
        <Button
          type="button"
          variant="neutral"
          disabled={isRestoring}
          onClick={handleRestoreNote}
        >
          {!isDarkMode ? (
            <img src="svgs/refresh-left.svg" alt="Archive" />
          ) : (
            <img src="svgs/refresh-left-dark.svg" alt="Archive" />
          )}
          <span>Restore Note</span>
        </Button>

        <Button
          disabled={isDeletingArchiveNote}
          type="button"
          variant="neutral"
          onClick={() => setShowConfirmDelete(true)}
        >
          {!isDarkMode ? (
            <img src="/svgs/delete.svg" alt="Delete" />
          ) : (
            <img src="/svgs/delete-dark.svg" alt="Delete" />
          )}
          <span>Delete Note</span>
        </Button>
      </div>

      {showConfirmDelete && (
        <ConfirmModal
          title="Delete note"
          description="Are you sure you want to permanently delete this note? This action cannot be undone."
          onCancel={() => setShowConfirmDelete(false)}
          onConfirm={handleDeleteArchivedNote}
          actionType="delete"
        />
      )}
    </>
  );
}

export default IteractiveArchiveButton;
