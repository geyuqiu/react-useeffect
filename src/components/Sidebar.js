export default function Sidebar({
  allBreeds,
  selectedBreed,
  setSelectedBreed
}) {
  return (
    <aside className="sidebar col-3">
      <h2>Dogs List</h2>
      <ul>
        {allBreeds.map((item) => (
          <li
            key={item}
            className={selectedBreed === item ? "selected" : ""}
            onClick={() => setSelectedBreed(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
