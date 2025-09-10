import { TRUST_BADGES } from "@/lib/constants";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TrustBarProps {
  variant?: "default" | "footer";
}

export function TrustBar({ variant = "default" }: TrustBarProps) {
  if (variant === "footer") {
    return (
      <>
        {TRUST_BADGES.map((badge) => (
          <div key={badge.name} className="bg-white rounded px-2 py-1">
            <span className="font-semibold text-sm" style={{color: '#2563eb'}}>
              {badge.name}
            </span>
          </div>
        ))}
      </>
    );
  }

  return (
    <TooltipProvider>
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <span className="font-medium">Trusted credentials:</span>
        <div className="flex space-x-3">
          {TRUST_BADGES.map((badge) => (
            <Tooltip key={badge.name}>
              <TooltipTrigger asChild>
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm border cursor-pointer">
                  <span className="font-semibold" style={{color: '#2563eb'}}>
                    {badge.name}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-semibold">{badge.fullName}</p>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
