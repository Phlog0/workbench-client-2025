import { Pencil } from "lucide-react";
import { Button } from "@/shared/ui";
import { FieldErrors, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProjectId, UpdateProjectInfo, UpdateProjectInfoSchema } from "@/shared/api/types";
import { useUpdateProjectInfo } from "../api";
import { useState } from "react";

import { FormInput, FormModalComponent, FormSelect } from "@/entities/auth";
import { toast } from "sonner";
import { ProjectTypeArray } from "@/shared/constants";

export function EditCardButton({
  id,
  description,
  projectType,
  title,
  className,
  markerColor,
}: UpdateProjectInfo & { id: ProjectId; className?: string }) {
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(UpdateProjectInfoSchema),
    defaultValues: {
      description,
      projectType,
      title,
      markerColor,
    },
  });

  const updateProjectMutation = useUpdateProjectInfo(id);

  const onSubmit: SubmitHandler<UpdateProjectInfo> = data => {
    updateProjectMutation.mutate(data);
    setModalOpen(false);
  };

  const onError = (error: FieldErrors<UpdateProjectInfo>) => {
    console.error("Form validation errors:", error);

    toast.error("Ошибка при обновлении структуры документа");
  };
  return (
    <FormModalComponent
      className={className}
      open={modalOpen}
      setOpen={setModalOpen}
      content={
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onError)}>
            <FormSelect
              name="projectType"
              options={ProjectTypeArray}
            />
            <FormInput
              label="Название проекта"
              name="title"
            />
            <FormInput
              label="Описание проекта"
              name="description"
            />
            <FormSelect
              name="markerColor"
              options={["green", "red", "blue"]}
            />

            <Button type="submit">
              {updateProjectMutation.isPending ? "Обновление..." : "Обновить данные о проекте"}
            </Button>
          </form>
        </FormProvider>
      }
      dialogTitle={"Редактирование проекта"}
      triggerTitle={<Pencil />}
      dialogDescription={"Изменение данных проекта"}
    />
  );
}
