"use client"

import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface SheetContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const SheetContext = React.createContext<SheetContextValue | undefined>(
  undefined
)

function Sheet({ open = false, onOpenChange = () => { }, children }: SheetProps) {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  )
}

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, children, asChild, ...props }, ref) => {
  const context = React.useContext(SheetContext)
  if (!context) throw new Error("SheetTrigger must be used within Sheet")

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
        context.onOpenChange(true)
        props.onClick?.(e as React.MouseEvent<HTMLButtonElement>)
      },
    } as any)
  }

  return (
    <button
      ref={ref}
      className={className}
      onClick={() => context.onOpenChange(true)}
      {...props}
    >
      {children}
    </button>
  )
})
SheetTrigger.displayName = "SheetTrigger"

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left"
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => {
    const context = React.useContext(SheetContext)
    if (!context) throw new Error("SheetContent must be used within Sheet")

    React.useEffect(() => {
      if (context.open) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
      return () => {
        document.body.style.overflow = ""
      }
    }, [context.open])

    if (!context.open) return null

    return (
      <>
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => context.onOpenChange(false)}
        />
        <div
          ref={ref}
          className={cn(
            "fixed z-[101] bg-white dark:bg-card p-0 shadow-2xl transition ease-in-out duration-300",
            side === "right" && "right-0 top-0 bottom-0 h-screen w-[85%] sm:max-w-sm border-l",
            side === "left" && "left-0 top-0 bottom-0 h-screen w-[85%] sm:max-w-sm border-r",
            side === "top" && "top-0 left-0 right-0 h-auto w-full border-b",
            side === "bottom" && "bottom-0 left-0 right-0 h-auto w-full border-t",
            className
          )}
          {...props}
        >
          <button
            onClick={() => context.onOpenChange(false)}
            className="absolute right-4 top-5 z-[110] rounded-sm opacity-70 transition-opacity hover:opacity-100 p-2"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
          <div className="h-full w-full overflow-y-auto">
            {children}
          </div>
        </div>
      </>
    )
  }
)
SheetContent.displayName = "SheetContent"

export { Sheet, SheetTrigger, SheetContent }

