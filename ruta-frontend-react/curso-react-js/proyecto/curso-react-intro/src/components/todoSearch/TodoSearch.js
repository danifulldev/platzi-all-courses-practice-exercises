import "../todoSearch/TodoSearch.css";

function TodoSearch() {
  return (
    <>
      <div className="input-search">
        <svg
          className="icon"
          stroke-width="2"
          stroke="#E3FFE7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="swap-on"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        <input
          className="input"
          type="text"
          name="text"
          placeholder="Find your tasks"
        ></input>
      </div>
    </>
  );
}

export { TodoSearch };
