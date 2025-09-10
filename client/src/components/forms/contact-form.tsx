import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      toast({
        title: data.emailSent ? "Email sent successfully!" : "Message received!",
        description: data.emailSent 
          ? "We'll get back to you within 24 hours." 
          : "Your message was saved. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Sent!</h3>
        <p className="text-gray-600">
          Thank you for your message. We'll get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="mt-4"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Send Email Message</h3>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-blue-800 text-sm">
          <Mail className="w-4 h-4 inline mr-2" />
          We'll respond to your email within 24 hours.
        </p>
      </div>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...form.register("name")}
            className="mt-2"
            placeholder="Your full name"
          />
          {form.formState.errors.name && (
            <p className="text-red-600 text-sm mt-1">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            className="mt-2"
            placeholder="your@email.com"
          />
          {form.formState.errors.email && (
            <p className="text-red-600 text-sm mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            {...form.register("company")}
            className="mt-2"
            placeholder="Your company name (optional)"
          />
        </div>

        <div>
          <Label htmlFor="message">How can we help? *</Label>
          <Textarea
            id="message"
            {...form.register("message")}
            rows={4}
            className="mt-2"
            placeholder="Tell us about your security needs or questions..."
          />
          {form.formState.errors.message && (
            <p className="text-red-600 text-sm mt-1">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            data-testid="button-send-message"
          >
            {mutation.isPending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
