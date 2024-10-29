import React from "react";

const Todos = () => {
  return (
    <div className="w-full lg:w-1/3 h-auto mt-5">
      <h2 className="text-2xl font-bold text-white mb-4 px-4 border-l-4 border-blue-500 ml-4">
        Works
      </h2>

      <div className="flex flex-col space-y-2 p-4 mx-6">
        {[
          {
            name: "Here will be task 1",
            completed: true,
            completedDate: "2023-04-15",
            dueDate: "2023-04-20",
          },
          {
            name: "Here will be task 2",
            completed: false,
            completedDate: null,
            dueDate: "2023-04-25",
          },
          {
            name: "Here will be task 3",
            completed: true,
            completedDate: "2023-04-18",
            dueDate: "2023-04-22",
          },
          {
            name: "Here will be task 4",
            completed: false,
            completedDate: null,
            dueDate: "2023-04-30",
          },
        ].map((todo, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                className="mr-2"
                readOnly
              />
              <span
                className={todo.completed ? "text-green-400" : "text-white"}
              >
                {todo.name}
              </span>
            </div>
            <div className="ml-6 text-sm">
              <span className="text-yellow-400 block">
                Due Date: {todo.dueDate}
              </span>
              {todo.completed && (
                <span className="text-green-400 my-2">
                  Completed Date: {todo.completedDate}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
