import { FormInput, FormModalComponent, FormSelect, FormTextarea } from "@/entities/auth";
import { useCreateProject, useGetProjectsList } from "@/features/project-card/api";

import { Button } from "@/shared/ui";
import { Spinner } from "@/shared/ui/spinners";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mic } from "lucide-react";
import { useState } from "react";
import { FieldErrors, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { toast } from "sonner";
import { CreateProjectInfo, CreateProjectInfoSchema, ProjectType } from "@/shared/api/types";
import { mapIcons } from "./map-icons";
import { ProjectTypeArray } from "@/shared/constants";
import { useNavigate } from "react-router-dom";

const getMarkerIcon = (projectType: ProjectType, color: string, _size?: number) => {
  const iconFn = mapIcons[projectType];
  return iconFn(color || "#e82dcc");
};
// Компонент для обработки кликов
function MapClickHandler({
  onMapClick,
}: {
  onMapClick: (latlng: { lat: number; lng: number }) => void;
}) {
  useMapEvents({
    click: e => {
      onMapClick(e.latlng);
    },
  });
  return null;
}
export function ProjectsMap() {
  const { isPending, error, data } = useGetProjectsList();
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(CreateProjectInfoSchema),
    mode: "all",
    defaultValues: {
      description: "КТП в ХМАО",
      projectType: "КТП",
      title: "ТП 10 / 04 кВ",
      prompt: "",
      markerColor: "blue",
      position: { lat: 0, lng: 0 },
    },
  });
  const handleMapClick = (latlng: { lat: number; lng: number }) => {
    setModalOpen(true);
    form.setValue("position", latlng);
  };
  const addProjectMutation = useCreateProject();
  const onSubmit: SubmitHandler<CreateProjectInfo> = data => {
    addProjectMutation.mutate(data);
    setModalOpen(false);
  };
  const onError = (data: FieldErrors<CreateProjectInfo>) => {
    console.error(data);
    toast.error("Проблема с позицией на карте");
  };

  if (isPending) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <MapContainer
        attributionControl={false}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "90vh", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler onMapClick={handleMapClick} />
        {data?.map(item => (
          <Marker
            key={item.id}
            icon={getMarkerIcon(item.projectType, item.markerColor)}
            riseOnHover={true}
            position={item.position}
            eventHandlers={{
              click: () => {
                navigate(`/projects/${item.id}`);
              },
            }}
          >
            <Popup>{item.title}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <FormModalComponent
        open={modalOpen}
        setOpen={setModalOpen}
        content={
          <>
            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onError)}
                className="flex flex-col gap-5"
              >
                <FormSelect
                  options={ProjectTypeArray}
                  name="projectType"
                  label="Тип проекта"
                />
                <FormInput
                  label="Название проекта"
                  name="title"
                />
                <FormTextarea
                  label="Описание проекта"
                  name="description"
                />
                <FormSelect
                  options={["green", "red", "blue"]}
                  name="markerColor"
                  label="Цвет маркера"
                />
                <fieldset
                  disabled
                  className="flex flex-col gap-0 w-full items-end outline-1 outline-slate-400 p-4"
                >
                  <FormTextarea
                    label="AI-запрос"
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
        dialogDescription={"Создание данных проекта"}
      />
    </>
  );
}
