import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="grid place-content-center h-screen">
      <h1>Упс! Здесь ничего нет</h1>
      <Link className="text-blue-500 underline" to={"/sign-in"}>
        Логин
      </Link>
    </div>
  );
}
