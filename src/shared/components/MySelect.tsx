import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
} from "shared/ui";

type MySelect = {
  label: string;
  selectId: string;
  value: string;
  query: string;
};

export const MySelect = ({ label, query, selectId, value }: MySelect) => {
  const items = [
    {
      title: "Light",
    },
    {
      title: "Dark",
    },
    {
      title: "System",
    },
  ];
  return (
    <div>
      <Label>{label}</Label>
      <Select data-id={selectId}>
        <SelectTrigger>
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {items?.map((item) => (
            <SelectItem value={item.title}>{item.title}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
