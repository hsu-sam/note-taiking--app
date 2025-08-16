import { useQuery } from "@tanstack/react-query";
import { getArchivedNotes } from "../../services/apiNote";
import Loading from "../../ui/Loading";
import EmptyArchivedNote from "./EmptyArchivedNote";
import ActiveArchivedNotes from "./ActiveArchivedNotes";

function ArchivedNoteList({ selectedArchivedNoteId, onSelectArchivedNote }) {
  const {
    isLoading,
    data: archivedNote,
    error,
  } = useQuery({ queryKey: ["archivedNotes"], queryFn: getArchivedNotes });

  if (isLoading) return <Loading />;

  if (!archivedNote || archivedNote.length === 0) return <EmptyArchivedNote />;

  if (error) return <p className="px-3 py-5">Failed to load Archived notes</p>;

  return (
    <div>
      {archivedNote.map((archiveNote) => (
        <ActiveArchivedNotes
          selectedArchivedNoteId={selectedArchivedNoteId}
          archiveNote={archiveNote}
          key={archiveNote.id}
          onSelect={() => onSelectArchivedNote(archiveNote)}
        />
      ))}
    </div>
  );
}

export default ArchivedNoteList;
