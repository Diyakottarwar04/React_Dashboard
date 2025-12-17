import useFetch from "../../hooks/useFetch";

export default function TasksWidget() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  if (loading) return <p>Loading tasks...</p>;

  return (
    <ul>
      {data.map(task => (
        <li key={task.id}>
          <input type="checkbox" checked={task.completed} readOnly />
          {task.title}
        </li>
      ))}
    </ul>
  );
}
