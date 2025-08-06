import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={cn("relative flex items-center hover:opacity-80 transition-opacity", className)}>
      <div className="flex flex-col items-start">
        <div className="flex">
          <span className="text-xl font-bold text-[#0D0F1C] font-space-grotesk">OR</span>
          <span className="text-xl font-bold text-[#0D0F1C] font-space-grotesk ml-1">ZA</span>
        </div>
        <div className="w-6 h-0.5 bg-[#1C4AF2] mt-1"></div>
      </div>
    </Link>
  )
}

export default Logo
