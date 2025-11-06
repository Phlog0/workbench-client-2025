import { Plus } from "lucide-react";
import { Button, Form } from "@/shared/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProjectInfoTextData } from "@/shared/api/types";
import { AuthFormField, AuthModalComponent, AuthSelect } from "@/entities/auth";
import { useAddProject } from "../api";
import { useState } from "react";
import { ProjectInfoFormSchema } from "../model";

export function AddCardButton({ className }: { className?: string }) {
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(ProjectInfoFormSchema),
    defaultValues: {
      description: "descr",
      projectType: "КТП",
      title: "Title",
    },
  });

  const addProjectMutation = useAddProject();

  const onSubmit: SubmitHandler<ProjectInfoTextData> = (data) => {
    addProjectMutation.mutate(data);
    setModalOpen(false);
  };

  return (
    <AuthModalComponent
      className={className}
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
            <Button type="submit">
              {addProjectMutation.isPending ? "Создание..." : "Создать проект"}
            </Button>
          </form>
        </Form>
      }
      dialogTitle={"Создание проекта"}
      triggerTitle={<Plus />}
      dialogDescription={"Создание данных проекта"}
    />
  );
}
