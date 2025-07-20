import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <h1>Упс! Здесь ничего нет</h1>
      <Link className="text-blue-500 underline" to={"/sign-in"}>
        Логин
      </Link>
    </>
  );
}
