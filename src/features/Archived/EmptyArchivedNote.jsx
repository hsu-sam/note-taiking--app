function EmptyArchivedNote() {
  return (
    <div>
      <p className="rounded-lg border border-neutral-200 bg-neutral-100 p-0.5 text-[14px] text-neutral-700">
        No notes have been archived yet. Move notes here for safekeeping or
        <span>create a new note.</span>
      </p>
    </div>
  );
}

export default EmptyArchivedNote;
