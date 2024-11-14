import Link from "next/link";
import Image from "next/image";

import TodoAjout from "@/components/Todo";

export default function page() {
  return (
    <div
      className="flex justify-center items-center bg-cover h-screen"
      style={{ backgroundImage: `url(/todo.gif)` }}
    >
      <TodoAjout />
    </div>
  );
}
