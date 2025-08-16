import { useState } from "react";
import { useDeleteNote } from "../features/Home/useDeleteNote";
import Button from "./Button";
import ConfirmModal from "./ConfirmModal";
import { useArchiveNote } from "../features/Archived/useArchivedNote";
import { useIsDarkMode } from "../context/DarkModeContext";

function InteractiveButton({ noteId, onClose }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showConfirmArchive, setShowConfirmArchive] = useState(false);
  const { isDeleting, deleteNote } = useDeleteNote({ onClose });
  const { archive, isArchiving } = useArchiveNote({ onSuccess: onClose });
  const isDarkMode = useIsDarkMode();

  function handleDelete() {
    deleteNote(noteId);
    setShowConfirmDelete(false);
  }

  function handleArchive() {
    archive(noteId);
    setShowConfirmArchive(false);
  }

  return (
    <>
      <div className="flex flex-col items-center gap-3 pt-5">
        <Button
          type="button"
          disabled={isArchiving}
          onClick={() => setShowConfirmArchive(true)}
          variant="neutral"
        >
          {!isDarkMode ? (
            <img src="svgs/archive.svg" alt="Archive" />
          ) : (
            <img src="/svgs/archive-dark.svg" alt="Archive" />
          )}
          <span>Archive Note</span>
        </Button>

        <Button
          type="button"
          onClick={() => setShowConfirmDelete(true)}
          disabled={isDeleting}
          variant="neutral"
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
          onConfirm={handleDelete}
          actionType="delete"
        />
      )}
      {showConfirmArchive && (
        <ConfirmModal
          title="Archive note"
          description="Are you sure you want to archive this note? You can restore it later from the archive."
          onCancel={() => setShowConfirmArchive(false)}
          onConfirm={handleArchive} // ✅ Correct handler
          actionType="archive"
        />
      )}
    </>
  );
}

export default InteractiveButton;
