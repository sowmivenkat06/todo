function Card({
  id = 0,
  title = "default title",
  desc = "default desc",
  handleDelete,
  handleEdit
}) {
  return (
    <div className="min-w-sm max-w-sm bg-white m-3 p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      
      <h3 className="font-bold uppercase text-xl text-gray-800 truncate">
        {id}. {title}
      </h3>

      <p className="break-words p-2 pb-4 text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>

      <div className="flex justify-end gap-3">
        <button
          className="px-4 py-1.5 rounded-md bg-orange-400 text-white text-sm font-medium hover:bg-orange-500 transition-colors"
          onClick={() => handleEdit(id - 1)}
        >
          Edit
        </button>

        <button
          className="px-4 py-1.5 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
          onClick={() => handleDelete(id - 1)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
