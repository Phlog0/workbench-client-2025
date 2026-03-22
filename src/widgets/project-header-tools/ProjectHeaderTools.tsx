import { ChangeThemeButton } from "@/entities/(change-layout)/change-theme";
import { cn } from "@/shared/lib/cn";
import { RemoveReactFlowNodeButton, OpenModalPropertiesButton } from "@/features";
import { useBoundStore } from "@/shared/appStore";

import { Spinner } from "@/shared/ui/spinners";
import { ContactMe } from "@/entities/me";
import { ExitProjectButton } from "@/entities/exit-project";
import { ResponsiveButtons } from "./ResponsiveButtons";
import { ActionButtons } from "@/pages/ActionsButtons";
import { useNavigate, useParams } from "react-router-dom";
import { ExternalReactFlowDimensions } from "@/pages/FlowLayout";
import { useEffect, useRef, useState } from "react";
import { socket } from "@/shared/lib";
import { APP_ROUTES, SOCKET_EVENTS } from "@/shared/constants";
interface OnlineUser {
  projectId: string;
  id: string;
  userId: number;
  isOnline: boolean;
  joinedAt: Date;
  leftAt: Date | null;
  socketId: string;
}
interface Response {
  userId: number;
  projectId: string;
  onlineUsers: OnlineUser[];
}

export function ProjectHeaderTools({
  className,
  externalReactFlowDimensions,
}: {
  className?: string;
  externalReactFlowDimensions: ExternalReactFlowDimensions;
}) {
  const isSyncing = useBoundStore(state => state.isSyncing);
  const user = useBoundStore(state => state.user);

  const [onlineUsers, setOnlineUsers] = useState<OnlineUser[]>([]);
  const { projectId } = useParams();
  const userIdRef = useRef<number | null>(null);
  const isSubscribedRef = useRef(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.id || !projectId) {
      return;
    }
    const updateOnlineUsers = (data: Response) => {
      setOnlineUsers(data?.onlineUsers);
    };

    const kickedFromRoom = () => {
      navigate(APP_ROUTES.PROJECTS_LIST);
    };
    if (userIdRef.current !== user.id && socket.connected) {
      socket.emit(SOCKET_EVENTS.JOIN_ROOM, { userId: user.id, projectId });

      userIdRef.current = user.id;
    }
    if (!isSubscribedRef.current) {
      socket.on(SOCKET_EVENTS.PROJECT_USER_ONLINE_COUNT, updateOnlineUsers);
      socket.on(SOCKET_EVENTS.S_C_KICK_ALL_FROM_DELETED_ROOM, kickedFromRoom);

      isSubscribedRef.current = true;
    }
    return () => {
      socket.off(SOCKET_EVENTS.PROJECT_USER_ONLINE_COUNT, updateOnlineUsers);
      socket.off(SOCKET_EVENTS.S_C_KICK_ALL_FROM_DELETED_ROOM, kickedFromRoom);
      isSubscribedRef.current = false;
    };
  }, [navigate, projectId, user?.id]);

  return (
    <header className={cn("project-header", "overflow-y-visible", "theme-bg relative", className)}>
      <div className="flex items-center justify-start gap-4 h-full overflow-x-scroll">
        <ul className="flex">
          {onlineUsers?.map(item => (
            <li
              className="w-2 h-2 rounded-full bg-blue-400 text-white"
              key={item.id}
            >
              {item.id.at(0)}
            </li>
          ))}
        </ul>
        <ActionButtons
          projectId={projectId}
          reactFLowHeight={externalReactFlowDimensions.height}
          reactFlowWidth={externalReactFlowDimensions.width}
        />
        <ChangeThemeButton /> <ResponsiveButtons className="hidden max-lg:block" />
        <OpenModalPropertiesButton />
        <RemoveReactFlowNodeButton />
        <ExitProjectButton />
        <div className="flex items-center gap-4 max-lg:hidden">
          <ContactMe />
        </div>
        {isSyncing && (
          <div>
            <Spinner
              size={"small"}
              animate={isSyncing === true ? "spin" : "none"}
            />
          </div>
        )}
      </div>
    </header>
  );
}
