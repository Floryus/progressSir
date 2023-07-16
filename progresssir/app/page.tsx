"use client";

export default function Home() {
  function handleAddButton() {
    console.log("Add button clicked");
  }

  return (
    <div>
      <h1>Hallo</h1>
      <button type="button" onClick={handleAddButton} className="">
        Add
      </button>
    </div>
  );
}
