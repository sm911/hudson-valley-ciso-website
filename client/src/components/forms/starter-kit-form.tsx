import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Download, Mail, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertStarterKitSchema, type InsertStarterKit } from "@shared/schema";

export function StarterKitForm() {
  const { toast } = useToast();
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string>("");

  const form = useForm<InsertStarterKit>({
    resolver: zodResolver(insertStarterKitSchema),
    defaultValues: {
      email: "",
      name: "",
      company: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertStarterKit) => {
      const response = await apiRequest("POST", "/api/starter-kit", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsDownloaded(true);
      toast({
        title: "Download link sent!",
        description: "Check your email for the instant download link.",
      });
    },
    onError: (error) => {
      toast({
        title: "Download failed",
        description: "Please try again or contact support@hvciso.com.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertStarterKit) => {
    mutation.mutate(data);
  };

  if (isDownloaded) {
    return (
      <div className="bg-green-50 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Link Sent!</h3>
        <p className="text-gray-600 mb-6">
          Check your email for the download link to your comprehensive security starter kit. You can download it immediately.
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={() => setIsDownloaded(false)}
            variant="outline"
          >
            Request Another Copy
          </Button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">What You'll Receive:</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Security Assessment Checklist (.xlsx)</li>
            <li>• Incident Response Plan Template (.docx)</li>
            <li>• Employee Security Awareness Guide (.docx)</li>
            <li>• Vendor Risk Assessment Framework (.xlsx)</li>
            <li>• Basic Compliance Roadmap (.docx)</li>
          </ul>
          <p className="text-sm text-blue-700 mt-3 font-medium">Available as individual files or complete ZIP download</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Security Starter Kit</h3>
        <p className="text-gray-600">
          Essential templates and checklists with instant download link sent to your email.
        </p>
      </div>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <Label htmlFor="email" className="required">Email address</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            className="mt-2"
            placeholder="you@company.com"
            data-testid="input-starter-email"
          />
          {form.formState.errors.email && (
            <p className="text-red-600 text-sm mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Name (Optional) */}
        <div>
          <Label htmlFor="name">Name (optional)</Label>
          <Input
            id="name"
            {...form.register("name")}
            className="mt-2"
            placeholder="Your name"
            data-testid="input-starter-name"
          />
        </div>

        {/* Company (Optional) */}
        <div>
          <Label htmlFor="company">Company (optional)</Label>
          <Input
            id="company"
            {...form.register("company")}
            className="mt-2"
            placeholder="Company name"
            data-testid="input-starter-company"
          />
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
            data-testid="button-download-starter-kit"
          >
            <Mail className="w-4 h-4 mr-2" />
            {mutation.isPending ? "Sending..." : "Get Starter Kit"}
          </button>
          
          <p className="text-gray-500 text-xs text-center mt-2">
            We'll email you the download link and occasionally share security insights. No spam, unsubscribe anytime.
          </p>
        </div>
      </form>
    </div>
  );
}