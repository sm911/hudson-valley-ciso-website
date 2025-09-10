import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, AlertTriangle, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

const SERVICE_OPTIONS = [
  { value: "vciso", label: "vCISO leadership & ongoing guidance" },
  { value: "assessment", label: "Security assessment / risk review" },
  { value: "compliance", label: "Compliance & audit readiness (HIPAA, SOC 2, PCI, etc.)" },
  { value: "incident", label: "Incident response / breach help" },
  { value: "cloud-iam", label: "Cloud & IAM / Zero Trust" },
  { value: "data-protection", label: "Data protection / DLP" },
  { value: "guidance", label: "Not sure — guide me" }
];

const COMPLIANCE_FRAMEWORKS = [
  "HIPAA", "SOC 2", "PCI", "ISO 27001", "FERPA", "GDPR", "Other"
];

const TIMELINE_OPTIONS = [
  { value: "urgent", label: "Urgent (≤72 hours)" },
  { value: "month", label: "This month (1–3 weeks)" },
  { value: "quarter", label: "This quarter (1–3 months)" },
  { value: "exploring", label: "Exploring options" }
];

export function ConsultationForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      serviceType: "",
      timeline: "",
      message: "",
      complianceFrameworks: [],
      isActiveIncident: false,
      attachments: [],
    },
  });

  const watchedServiceType = form.watch("serviceType");

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      const isUrgent = form.getValues("timeline") === "urgent" || form.getValues("isActiveIncident");
      toast({
        title: "Consultation request received!",
        description: isUrgent 
          ? "I'll prioritize this and reach out promptly." 
          : "I respond within one business day.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
        description: "Please try again or email support@hvciso.com directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate({
      ...data,
      complianceFrameworks: selectedFrameworks.length > 0 ? selectedFrameworks : undefined
    });
  };

  const handleFrameworkChange = (framework: string, checked: boolean) => {
    setSelectedFrameworks(prev => 
      checked 
        ? [...prev, framework]
        : prev.filter(f => f !== framework)
    );
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
        <p className="text-gray-600 mb-4">
          I've received your consultation request and will reply within one business day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
          >
            Submit Another Request
          </Button>
          <Button 
            asChild
            className="bg-blue-600 hover:bg-blue-700"
          >
            <a href="https://calendly.com/cyberintelpros" target="_blank" rel="noopener">
              Prefer to Schedule Now?
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Security Consultation</h3>
        <div className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          <Clock className="w-4 h-4 mr-1" />
          I respond within one business day
        </div>
        <p className="text-gray-600 text-sm mt-2">Your information is confidential.</p>
      </div>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <Label htmlFor="name" className="required">Full name</Label>
          <Input
            id="name"
            {...form.register("name")}
            className="mt-2"
            placeholder="First and last name"
            data-testid="input-name"
          />
          {form.formState.errors.name && (
            <p className="text-red-600 text-sm mt-1">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <Label htmlFor="email" className="required">Work email</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            className="mt-2"
            placeholder="you@company.com"
            data-testid="input-email"
          />
          {form.formState.errors.email && (
            <p className="text-red-600 text-sm mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            {...form.register("company")}
            className="mt-2"
            placeholder="Company name (optional)"
            data-testid="input-company"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            {...form.register("phone")}
            className="mt-2"
            placeholder="(###) ###-####"
            data-testid="input-phone"
          />
          <p className="text-gray-500 text-sm mt-1">
            Optional — useful if your request is time-sensitive.
          </p>
        </div>

        {/* Service Type */}
        <div>
          <Label className="required">What do you need help with?</Label>
          <RadioGroup 
            value={form.watch("serviceType")} 
            onValueChange={(value) => form.setValue("serviceType", value)}
            className="mt-2 space-y-2"
          >
            {SERVICE_OPTIONS.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="font-normal cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {form.formState.errors.serviceType && (
            <p className="text-red-600 text-sm mt-1">
              {form.formState.errors.serviceType.message}
            </p>
          )}

          {/* Compliance Frameworks Conditional */}
          {watchedServiceType === "compliance" && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <Label className="text-sm font-medium">Frameworks in scope (optional)</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {COMPLIANCE_FRAMEWORKS.map((framework) => (
                  <div key={framework} className="flex items-center space-x-2">
                    <Checkbox
                      id={framework}
                      checked={selectedFrameworks.includes(framework)}
                      onCheckedChange={(checked) => 
                        handleFrameworkChange(framework, checked === true)
                      }
                    />
                    <Label htmlFor={framework} className="text-sm font-normal cursor-pointer">
                      {framework}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Incident Active Check */}
          {watchedServiceType === "incident" && (
            <div className="mt-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <Label className="font-medium">Is this active right now?</Label>
              </div>
              <RadioGroup 
                value={form.watch("isActiveIncident") ? "yes" : "no"}
                onValueChange={(value) => form.setValue("isActiveIncident", value === "yes")}
                className="mt-2 flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="incident-yes" />
                  <Label htmlFor="incident-yes" className="font-normal">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="incident-no" />
                  <Label htmlFor="incident-no" className="font-normal">No</Label>
                </div>
              </RadioGroup>
              <p className="text-orange-700 text-sm mt-2">
                If active, mark 'Yes' and I'll prioritize the response.
              </p>
            </div>
          )}
        </div>

        {/* Timeline */}
        <div>
          <Label>Timeline</Label>
          <RadioGroup 
            value={form.watch("timeline") || ""} 
            onValueChange={(value) => form.setValue("timeline", value)}
            className="mt-2 space-y-2"
          >
            {TIMELINE_OPTIONS.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`timeline-${option.value}`} />
                <Label htmlFor={`timeline-${option.value}`} className="font-normal cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message" className="required">Describe your security needs</Label>
          <Textarea
            id="message"
            {...form.register("message")}
            rows={5}
            className="mt-2"
            placeholder="Briefly describe your goal, systems in scope, compliance drivers, and desired outcome."
            data-testid="textarea-message"
          />
          <div className="text-gray-500 text-xs mt-1 space-y-1">
            <div>• Goal (e.g., pass audit, reduce risk, respond to incident)</div>
            <div>• Environment (cloud(s), endpoints, data types)</div>
            <div>• Deadlines or constraints</div>
          </div>
          {form.formState.errors.message && (
            <p className="text-red-600 text-sm mt-1">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>

        {/* Consent */}
        <div>
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="consent"
              required
              data-testid="checkbox-consent"
            />
            <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
              I consent to be contacted about my request and have read the{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </Label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
            data-testid="button-request-consultation"
          >
            {mutation.isPending ? "Submitting..." : "Request Consultation"}
          </button>
          
          <p className="text-gray-500 text-xs text-center mt-2">
            Your submission is encrypted in transit. I never sell or share your information.
          </p>
        </div>
      </form>
    </div>
  );
}