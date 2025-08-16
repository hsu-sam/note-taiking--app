import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import ArchivedNoteList from "./ArchivedNoteList";
import CreateArchiveNote from "./CreateArchiveNote";

function ArchivedNoteDetails() {
  const [selectedArchivedNote, setSelectedArchivedNote] = useState(null);
  const [showArchiveInput, setShowArchiveInput] = useState(false);

  useEffect(() => {
    if (selectedArchivedNote) setShowArchiveInput(false);
  }, [selectedArchivedNote]);

  return (
    <div className="grid h-screen grid-cols-[16rem_1fr] grid-rows-[auto_1fr]">
      <div className="flex flex-col gap-5 border-r border-neutral-200 px-2 pt-7 dark:border-neutral-800">
        <Button
          onClick={() => {
            setShowArchiveInput((show) => !show);
            setSelectedArchivedNote(null);
          }}
        >
          + Create New Note
        </Button>
        <p className="text-[14px] text-neutral-700 dark:text-neutral-200">
          All your archived notes are stored here. You can restore or delete
          them anytime.
        </p>

        <ArchivedNoteList
          selectedArchiveNoteId={selectedArchivedNote?.id}
          onSelectArchivedNote={setSelectedArchivedNote}
        />
      </div>

      {(showArchiveInput || selectedArchivedNote) && (
        <CreateArchiveNote
          key={selectedArchivedNote?.id || "new"}
          noteToEdit={selectedArchivedNote}
          onClose={() => {
            setSelectedArchivedNote(null);
            setShowArchiveInput(false);
          }}
        />
      )}
    </div>
  );
}

export default ArchivedNoteDetails;
