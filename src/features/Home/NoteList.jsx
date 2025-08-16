import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../../services/apiNote";
import Loading from "../../ui/Loading";
import ActiveNotes from "./ActiveNotes";
import EmptyNote from "./EmptyNote";

function NoteList({
  onNoteClick,
  searchQuery = "",
  selectedNoteId,
  selectedTag,
}) {
  const {
    isLoading,
    data: notes,
    error,
  } = useQuery({
    queryKey: ["note"],
    queryFn: getNotes,
  });

  if (isLoading) return <Loading />;

  if (!notes || notes.length === 0) return <EmptyNote />;

  if (error) return <p className="px-3 py-5">Failed to load Notes</p>;

  const filteredNotes = searchQuery.trim()
    ? notes.filter((note) => {
        const query = searchQuery.toLocaleLowerCase().trim();
        const inTitle = note.title?.toLowerCase().includes(query);
        const inTags = note.tags?.toLowerCase().includes(query);
        const inContent = note.note_text?.toLowerCase().includes(query);
        return inTitle || inTags || inContent;
      })
    : notes;

  if (searchQuery.trim() && filteredNotes.length === 0)
    return <p className="px-3 py-5">Note could not be found</p>;

  return (
    <div className="flex flex-col items-start gap-1 px-2">
      {selectedTag && (
        <p className="pb-3 text-sm text-neutral-700">
          All notes with the
          <span className="text-neutral-950">"{selectedTag}"</span> tag are
          shown here.
        </p>
      )}
      {filteredNotes.map((note) => (
        <ActiveNotes
          onNoteClick={onNoteClick}
          selectedNoteId={selectedNoteId}
          note={note}
          key={note.id}
        />
      ))}
    </div>
  );
}

export default NoteList;
