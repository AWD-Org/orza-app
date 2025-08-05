import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-space-grotesk hover:cursor-pointer",
    {
        variants: {
            variant: {
                primary: "bg-[#1C4AF2] text-white hover:bg-[#1C4AF2]/90",
                secondary: "bg-[#F7FAFC] text-[#0D0F1C] hover:bg-[#F7FAFC]/80 border border-[#CFD4E8]",
                outline: "border border-[#E5E8EB] bg-background hover:bg-[#F7FAFC] hover:text-[#0D0F1C]",
            },
            size: {
                sm: "h-9 rounded-lg px-3 text-sm",
                md: "h-10 px-4 py-2",
                lg: "h-12 rounded-xl px-8 text-base",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, isLoading, children, disabled, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
