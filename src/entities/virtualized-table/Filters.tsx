import { Input } from "@/shared/ui";
import { Column } from "@tanstack/react-table";
import { debounce } from "lodash";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

export function ColumnFilter({ column }: { column: Column<unknown, unknown> }) {
  const columnFilterValue = column.getFilterValue();
  //   const { filterVariant } = column.columnDef.meta ?? {};
  //   https://tanstack.com/table/latest/docs/framework/react/examples/filters?panel=code
  const [localText, setLocalText] = useState(columnFilterValue ?? "");
  useEffect(() => {
    setLocalText(columnFilterValue ?? "");
  }, [columnFilterValue]);

  const debouncedHandleChange = useMemo(
    () =>
      debounce((value: string) => {
        return column.setFilterValue(value);
      }, 1000),
    [column],
  );
  // Очистка при размонтировании или изменении зависимости
  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel(); // Отмена pending таймеров
    };
  }, [debouncedHandleChange]);
  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;
    debouncedHandleChange(value);
    setLocalText(value);
  };

  return (
    <Input
      onFocus={(e) => e.stopPropagation()}
      onClick={(e) => e.stopPropagation()}
      className=" border shadow rounded"
      onChange={handleClick}
      placeholder={`Поиск...`}
      type="text"
      value={localText as string}
    />
  );
}
