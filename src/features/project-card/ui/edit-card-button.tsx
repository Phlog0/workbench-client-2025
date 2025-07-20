import { Pencil } from "lucide-react";
import { Button, Form } from "@/shared/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProjectId, ProjectInfoTextData } from "@/shared/api/types";
import { AuthFormField, AuthModalComponent, AuthSelect } from "@/entities/auth";
import { useUpdateProject } from "../api";
import { useState } from "react";
import { ProjectInfoFormSchema } from "../model";

export function EditCardButton({
  id,
  description,
  projectType,
  title,
}: ProjectInfoTextData & { id: ProjectId }) {
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(ProjectInfoFormSchema),
    defaultValues: {
      description,
      projectType,
      title,
    },
  });

  const updateProjectMutation = useUpdateProject(id);

  const onSubmit: SubmitHandler<ProjectInfoTextData> = (data) => {
    updateProjectMutation.mutate(data);
    setModalOpen(false);
  };
  return (
    <AuthModalComponent
      open={modalOpen}
      setOpen={setModalOpen}
      content={
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 max-w-5xl mx-auto">
            <Controller
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <AuthSelect label={"Тип проекта"} field={field} options={["КТП", "ТП", "РП"]} />
              )}
            ></Controller>
            <AuthFormField
              control={form.control}
              formLabel={"Название проекта"}
              name="title"
              inputType="text"
            />
            <AuthFormField
              control={form.control}
              formLabel={"Описание проекта"}
              name="description"
              inputType="text"
            />
            <Button type="submit">Сохранить изменения</Button>
          </form>
        </Form>
      }
      dialogTitle={"Редактирование проекта"}
      triggerTitle={<Pencil />}
      dialogDescription={"Изменение данных проекта"}
    />
  );
}
