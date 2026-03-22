import { useBoundStore } from "@/shared/appStore";
import { SOCKET_EVENTS } from "@/shared/constants";
import { socket } from "@/shared/lib";
import { useEffect, useRef, useState } from "react";

export const useOnlineStatus = () => {
  const user = useBoundStore(state => state.user);
  const [onlineCount, setOnlineCount] = useState<number>(0);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const userIdRef = useRef<number | null>(null);
  const isSubscribedRef = useRef(false);
  useEffect(() => {
    if (!socket || !user) {
      console.warn("⚠️ Socket not available in useOnlineStatus");
      return;
    }
    const onOnlineCount = (count: number) => setOnlineCount(count);
    if (userIdRef.current !== user.id && socket.connected) {
      socket.emit(SOCKET_EVENTS.SET_USER_ID, user.id, (data: { success: true }) => {
        setIsConnected(data.success);
      });
      userIdRef.current = user.id;
    }

    if (!isSubscribedRef.current) {
      socket.on(SOCKET_EVENTS.BROADCAST_SYSTEM_ONLINE_COUNT, onOnlineCount);
      isSubscribedRef.current = true;

      return () => {
        socket.off(SOCKET_EVENTS.BROADCAST_SYSTEM_ONLINE_COUNT, onOnlineCount);
        isSubscribedRef.current = false;
      };
    }
  }, [user]);
  return { onlineCount, isConnected };
};
