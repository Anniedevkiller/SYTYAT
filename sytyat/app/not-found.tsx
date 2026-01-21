
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Construction, Sparkles, Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Background blobs for visual interest */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse delay-700" />

            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">

                {/* Icon & 404 Display */}
                <div className="relative inline-block">
                    <h1 className="text-[10rem] sm:text-[12rem] font-black text-foreground/5 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-4 rounded-full border border-border/50 shadow-xl">
                        <Construction className="w-16 h-16 text-primary" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Page Under Construction? Or Just Missing?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto">
                        We couldn't find the page you were looking for. It might have been moved, renamed, or maybe it never existed.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button asChild size="lg" className="h-12 px-8 rounded-full shadow-lg shadow-primary/20">
                        <Link href="/">
                            <Home className="mr-2 w-4 h-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full">
                        <Link href="/programs">
                            View Programs
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

            </div>

            {/* Footer-like note */}
            <div className="absolute bottom-8 text-sm text-muted-foreground/50">
                Error Code: 404_NOT_FOUND
            </div>
        </div>
    )
}
