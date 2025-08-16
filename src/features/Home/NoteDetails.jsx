import { useState } from "react";
import Button from "../../ui/Button";
import NoteList from "./NoteList";
import CreateNote from "./CreateNote";
import { useOutletContext } from "react-router-dom";

function NoteDetails() {
  const { selectedTag, searchQuery } = useOutletContext();
  const [showNoteInput, setShowNoteInput] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const effectiveSearchQuery = selectedTag || searchQuery;

  return (
    <>
      <div className="grid h-screen grid-cols-[16rem_1fr] grid-rows-[auto_1fr]">
        <div className="flex flex-col gap-5 border-r border-neutral-200 pt-7 dark:border-neutral-800">
          <Button
            onClick={() => {
              setSelectedNote(null);
              setShowNoteInput((show) => !show);
            }}
            className="mx-2"
          >
            + Create New Note
          </Button>
          <NoteList
            searchQuery={effectiveSearchQuery}
            selectedTag={effectiveSearchQuery}
            selectedNoteId={selectedNote?.id}
            onNoteClick={setSelectedNote}
          />
        </div>

        {(showNoteInput || selectedNote) && (
          <CreateNote
            key={selectedNote?.id}
            noteToEdit={selectedNote}
            onClose={() => {
              setSelectedNote(null);
              setShowNoteInput(false);
            }}
          />
        )}
      </div>
    </>
  );
}

export default NoteDetails;
