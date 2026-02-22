import { MyButton } from "./MyButton";

export function ContactMe() {
  return (
    <div className="flex gap-4">
      <MyButton
        text="Почта: sergeyzadorkin.w@gmail.com
        "
        classname="border-[#d13438] bg-white text-[#d13438]  hover:bg-[#d13438] hover:text-white"
        copyText="sergeyzadorkin.w@gmail.com"
      />

      <MyButton
        text="Написать в Telegram"
        classname="border-blue-700 bg-white text-blue-700 transition-all duration-300 hover:bg-[#0088cc] hover:text-white"
        link="https://t.me/sergey_zadorkin"
      />
      <MyButton
        text="Мой GitHub"
        classname="border-[#181717] bg-white text-[#181717] transition-all duration-300 hover:bg-[#181717] hover:text-white hover:text-whitehover:text-white"
        link="https://github.com/Phlog0"
      />
    </div>
  );
}
