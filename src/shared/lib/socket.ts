import { io } from "socket.io-client";

// let socket: Socket | null = null;

// export const getSocket = (): Socket => {
//   if (!socket) {
//     socket = io(import.meta.env.VITE_SERVER_URL || "http://localhost:3001", {
//       withCredentials: true,

//       reconnectionAttempts: 2,
//       reconnection: true,
//     });
//   }

//   return socket;
// };

// // // Для явного отключения (при логауте)
// export const disconnectSocket = (): void => {
//   if (socket) {
//     socket.disconnect();
//     socket = null;
//   }
// };

// socket = getSocket();
// export { socket };

export const socket = io(import.meta.env.VITE_SERVER_URL || "http://localhost:3001", {
  withCredentials: true,

  reconnectionAttempts: 2,
  reconnection: true,
});
