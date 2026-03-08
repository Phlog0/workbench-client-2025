import { useOnlineStatus } from "./use-online-status";

export const OnlineIndicator = () => {
  const { onlineCount, isConnected } = useOnlineStatus();

  // Цвет индикатора в зависимости от количества
  const getStatusColor = (count: number) => {
    if (count === 0) return "bg-gray-400";
    if (count < 5) return "bg-yellow-400";
    return "bg-green-500";
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100">
      <span
        className={`w-2.5 h-2.5 rounded-full transition-colors ${
          isConnected ? getStatusColor(onlineCount) : "bg-red-500"
        }`}
        title={isConnected ? "Онлайн" : "Нет соединения"}
      />

      <span className="text-sm font-medium text-gray-700">
        {onlineCount} {onlineCount === 1 ? "пользователь" : "пользователей"} онлайн
      </span>
    </div>
  );
};
