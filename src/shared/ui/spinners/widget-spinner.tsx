import { cn } from "@/shared/lib";
import { Spinner } from "./spinner";

export function WidgetSpinner({
  className,
  title = "Сохрянем данные...",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 left-0 right-0 bg-slate-400/65 grid place-content-center z-9999",
        className
      )}
    >
      {title && <h1 className="select-none">{title}</h1>}
      <Spinner animate={"spin"} />
    </div>
  );
}
