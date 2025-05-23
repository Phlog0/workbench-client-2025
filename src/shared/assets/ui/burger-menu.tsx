export function BurgerMenu({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M8.5 19H21v-4.02H8.5zM3 9.02h4.5V5H3zM3 14h4.5v-3.98H3zm0 5h4.5v-4.02H3zm5.5-5H21v-3.98H8.5zm0-4.98H21V5H8.5z"
      />
    </svg>
  );
}
