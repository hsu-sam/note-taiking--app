import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../services/apiNote";
import { useIsDarkMode } from "../context/DarkModeContext";

function Tags({ selectedTag, setSelectedTag }) {
  const isDarkMode = useIsDarkMode();
  const { data: notes = [] } = useQuery({
    queryKey: ["note"],
    queryFn: getNotes,
  });

  const uniqueTags = [
    ...new Set(
      notes.flatMap((note) =>
        note.tags?.split(",").map((tag) => tag.trim() || []),
      ),
    ),
  ];

  return (
    <div className="flex flex-col">
      <p className="pb-4 text-neutral-500">Tags</p>
      {uniqueTags.map((tag, i) => (
        <div
          key={i}
          onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
          className={`flex cursor-pointer items-center justify-between gap-2 rounded px-4 py-1 text-[14px] transition ${
            selectedTag === tag
              ? "bg-blue-100 dark:bg-neutral-800"
              : "hover:bg-neutral-100 dark:hover:bg-neutral-700"
          }`}
        >
          <div className="flex items-center">
            {!isDarkMode ? (
              <img src="/svgs/tag.svg" alt="" />
            ) : (
              <img src="/svgs/tag-dark.svg" alt="Tag" />
            )}
            <span className="text-1 px-2 py-1">{tag}</span>
          </div>

          {selectedTag === tag && <img src="svgs/chevron-right.svg" alt="" />}
        </div>
      ))}
    </div>
  );
}

export default Tags;
