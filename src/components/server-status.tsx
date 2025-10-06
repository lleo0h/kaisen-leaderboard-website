import Image from "next/image"
import kaizen_logo from "@/../public/kaizen_logo.png"
import { minecraft } from "@/app/layout"
import { RefreshCcw } from "lucide-react"

interface StatusItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function StatusItem({ children, className, ...props }: StatusItemProps) {
  return (
    <div className={`bg-[rgba(21,12,48,0.3)] shadow-[-10px_10px_4px_rgba(0,0,0,0.25)] p-4 px-15 ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}

//add fetch for api, mobile responsive and auto reload

export function ServerStatus() {
  return (
    <div className={`${minecraft.className} relative flex bg-[rgba(21,12,48,0.5)] p-10 shadow-[-10px_10px_4px_rgba(0,0,0,0.25)]`}>
      <div>
        <Image
          src={kaizen_logo.src}
          width={150} height={150}
          alt="kaizen logo"
        />
      </div>
      <div className="flex flex-col flex-1 ml-6">
        <div className="flex gap-4">
          <StatusItem>
            <h1 className="text-[#A2FFBB]">kaizenmc.gg</h1>
          </StatusItem>
          <StatusItem>
            <h1>1.8v - 1.21v</h1>
          </StatusItem>
          <StatusItem className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-[#01FD7F]"></div>
            <h1 className="text-[#01FD7F]">ONLINE</h1>
          </StatusItem>
          <StatusItem>
            <h1>152/1000</h1>
          </StatusItem>
        </div>
        <div className="absolute bottom-2 right-4 flex items-center gap-2 text-sm text-cyan-900">
          <RefreshCcw size={20} />
          <p>Atualizado às 23:21:02</p>
        </div>
      </div>
    </div>
  )
}