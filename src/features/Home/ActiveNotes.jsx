function ActiveNotes({ note, onNoteClick, selectedNoteId }) {
  const isSelected = note.id === selectedNoteId;
  return (
    <>
      <div
        onClick={() => onNoteClick(note)}
        className={`focus-visible flex w-full cursor-pointer flex-col flex-wrap items-start gap-1 border-b-2 border-neutral-100 px-2 pb-2 dark:border-neutral-800 ${
          isSelected ? "rounded-md bg-neutral-100 dark:bg-neutral-700" : ""
        }`}
      >
        <h2 className="text-1 font-semibold">{note.title}</h2>
        <div className="flex gap-2">
          {note.tags?.split(",").map((tag, index) => (
            <span
              key={index}
              className="rounded-[4px] bg-neutral-200 p-0.75 text-[12px] dark:bg-neutral-700"
            >
              {tag.trim()}
            </span>
          ))}
        </div>

        <p className="text-[12px] text-neutral-700 dark:text-neutral-200">
          {new Date(note.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </>
  );
}

export default ActiveNotes;
