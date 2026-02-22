import { Pencil } from "lucide-react";
import { Button } from "@/shared/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProjectId, ProjectInfoTextData } from "@/shared/api/types";

import { useUpdateProjectInfo } from "../api";
import { useState } from "react";
import { ProjectInfoFormSchema } from "../model";
import { FormInput, FormModalComponent, FormSelect } from "@/entities/auth";

export function EditCardButton({
  id,
  description,
  projectType,
  title,
  className,
}: ProjectInfoTextData & { id: ProjectId; className?: string }) {
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(ProjectInfoFormSchema),
    defaultValues: {
      description,
      projectType,
      title,
    },
  });

  const updateProjectMutation = useUpdateProjectInfo(id);

  const onSubmit: SubmitHandler<ProjectInfoTextData> = data => {
    updateProjectMutation.mutate(data);
    setModalOpen(false);
  };
  return (
    <FormModalComponent
      className={className}
      open={modalOpen}
      setOpen={setModalOpen}
      content={
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormSelect options={["КТП", "РП", "ТП"]} />
            <FormInput
              label="Название проекта"
              name="title"
            />
            <FormInput
              label="Описание проекта"
              name="description"
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
