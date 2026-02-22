import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export function MyButton({
  text,
  classname,
  copyText,
  link,
}: {
  text: string;
  classname?: string;
  link?: string;
  copyText?: string;
}) {
  const copyHandle = async (copyText?: string) => {
    try {
      if (!copyText) {
        return;
      }
      await navigator.clipboard.writeText(copyText);
      toast.success("Скопировано! :)");
    } catch (err) {
      console.error("Не удалось скопировать текст: ", err);
    }
  };
  return (
    <Button
      onClick={() => copyHandle(copyText)}
      variant="outline"
      className={cn(
        "group relative overflow-hidden border-2 transition-all duration-300",
        { "p-0 grid place-content-center": link },
        classname
      )}
    >
      {link ? (
        <a
          className="block w-full h-full px-2"
          href={link}
          target="_blank"
        >
          <div
            className={cn(
              "absolute inset-0 -z-10 bg-linear-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500",
              "via-white/25"
            )}
          />
          {text}
        </a>
      ) : (
        <>
          <div
            className={cn(
              "absolute inset-0 -z-10 bg-linear-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500",
              "via-white/25"
            )}
          />
          {text}
          <Copy />
        </>
      )}
    </Button>
  );
}
