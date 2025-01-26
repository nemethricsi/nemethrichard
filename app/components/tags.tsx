export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-md border bg-card px-2 py-1 text-sm">
          {tag}
        </span>
      ))}
    </div>
  );
};
