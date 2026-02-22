import { Mic, Plus } from "lucide-react";
import { Button } from "@/shared/ui";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProjectInfoTextData } from "@/shared/api/types";
import { useCreateProject } from "../api";
import { useState } from "react";
import { ProjectInfoFormSchema } from "../model";
import { FormInput, FormModalComponent, FormSelect, FormTextarea } from "@/entities/auth";

export function AddCardButton({ className }: { className?: string }) {
  const [modalOpen, setModalOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(ProjectInfoFormSchema),
    mode: "all",
    defaultValues: {
      description: "descr",
      projectType: "КТП",
      title: "Title",
      prompt: "",
    },
  });

  const addProjectMutation = useCreateProject();

  const onSubmit: SubmitHandler<ProjectInfoTextData> = data => {
    addProjectMutation.mutate(data);
    setModalOpen(false);
  };

  return (
    <FormModalComponent
      className={className}
      open={modalOpen}
      setOpen={setModalOpen}
      content={
        <>
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col"
            >
              <FormSelect options={["КТП", "РП", "ТП"]} />
              <FormInput
                label="Название проекта"
                name="title"
              />
              <FormTextarea
                label="Описание проекта"
                name="description"
              />
              <fieldset
                disabled
                className="flex flex-col gap-0 w-full items-end outline-1 outline-slate-400 p-4"
              >
                <FormTextarea
                  label="AI (Необязательно (будет работать в будущем))"
                  name="prompt"
                  className="p-0"
                />
                <Button>
                  <Mic />
                </Button>
              </fieldset>
              <Button
                type="submit"
                className="mt-4"
              >
                {addProjectMutation.isPending ? "Создание..." : "Создать проект"}
              </Button>
            </form>
          </FormProvider>
        </>
      }
      dialogTitle={"Создание проекта"}
      triggerTitle={<Plus />}
      dialogDescription={"Создание данных проекта"}
    />
  );
}
