import { getKTPIcon } from "./map-icons/get-ktp-icon";
import { getRPIcon } from "./map-icons/get-rp-icon";
import { getTPIcon } from "./map-icons/get-tp-icon";

export const mapIcons = {
  РП: (color: string, size?: number) => getRPIcon(color, size),
  ТП: (color: string, size?: number) => getTPIcon(color, size),
  КТП: (color: string, size?: number) => getKTPIcon(color, size),
};
