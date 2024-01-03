"use client"

import { useWindowScroll } from "@uidotdev/usehooks"
import { ArrowUp } from "lucide-react"

export function TopIndicator() {
  const [{ x, y }, scrollTo] = useWindowScroll()

  if (y != null && y > 100) {
    return (
      <div
        className="w-12 h-12 rounded-full fixed bottom-5 right-5 bg-blue-500 cursor-pointer justify-center items-center flex transition-colors hover:bg-blue-600"
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" })
        }}
      >
        <ArrowUp className="w-8 h-8 text-white " />
      </div>
    )
  } else {
    return null
  }
}