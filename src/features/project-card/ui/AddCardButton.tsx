import { Plus } from "lucide-react";
import { Button } from "@/shared/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProjectInfoTextData } from "@/shared/api/types";
import { useAddProject } from "../api";
import { useState } from "react";
import { ProjectInfoFormSchema } from "../model";
import { FormInput, FormModalComponent, FormSelect, FormTextarea } from "@/entities/auth";

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
    <FormModalComponent
      className={className}
      open={modalOpen}
      setOpen={setModalOpen}
      content={
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormSelect options={["КТП", "РП", "ТП"]} />
            <FormInput label="Название проекта" name="title" />
            <FormTextarea label="Описание проекта" name="description" />

            <Button type="submit">
              {addProjectMutation.isPending ? "Создание..." : "Создать проект"}
            </Button>
          </form>
        </FormProvider>
      }
      dialogTitle={"Создание проекта"}
      triggerTitle={<Plus />}
      dialogDescription={"Создание данных проекта"}
    />
  );
}
