import { TableModelApi } from "@/features/project-card/api";
import { Input } from "@/shared/ui";
import { Column } from "@tanstack/react-table";
import { debounce } from "lodash";
import { ChangeEvent, useEffect, useMemo } from "react";

export function ColumnFilter({ column }: { column: Column<TableModelApi, unknown> }) {
  const debouncedHandleChange = useMemo(
    () =>
      debounce((value: string) => {
        return column.setFilterValue(value);
      }, 1000),
    [column]
  );

  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  }, [debouncedHandleChange]);
  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;
    debouncedHandleChange(value);
    // setLocalText(value);
  };

  return (
    <Input
      onFocus={e => e.stopPropagation()}
      onClick={e => e.stopPropagation()}
      className=" border shadow rounded"
      onChange={handleClick}
      placeholder={`Поиск...`}
      type="text"
    />
  );
}
