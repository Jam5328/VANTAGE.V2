import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitLead } from "@workspace/api-client-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const clientTypeOptions = [
  { value: "letting_agency", label: "Letting Agency" },
  { value: "property_manager", label: "Property Manager" },
  { value: "serviced_accommodation", label: "Serviced Accommodation Operator" },
  { value: "airbnb_host", label: "Airbnb Host" },
  { value: "other", label: "Other" },
] as const;

const leadFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  clientType: z.enum(["letting_agency", "property_manager", "serviced_accommodation", "airbnb_host", "other"], {
    required_error: "Please select a client type",
  }),
  message: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

export default function LeadForm() {
  const [success, setSuccess] = useState(false);
  const submitLead = useSubmitLead();

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      clientType: "letting_agency",
      message: "",
    },
  });

  function onSubmit(data: LeadFormValues) {
    submitLead.mutate(
      {
        data: {
          name: data.name,
          email: data.email,
          company: data.company ?? null,
          clientType: data.clientType,
          message: data.message ?? null,
          sourcePage: "home",
        },
      },
      {
        onSuccess: () => {
          setSuccess(true);
          form.reset();
        },
      }
    );
  }

  if (success) {
    return (
      <div className="py-12 text-center space-y-4">
        <h3 className="text-xl font-serif">Submission Received</h3>
        <p className="text-muted-foreground">We will review your details and be in touch shortly.</p>
        <Button variant="outline" onClick={() => setSuccess(false)} className="mt-4">
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" data-testid="input-name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" data-testid="input-email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your organisation" data-testid="input-company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="clientType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Client Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-client-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {clientTypeOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Outline your requirements or property volume..."
                  className="min-h-[100px]"
                  data-testid="textarea-message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={submitLead.isPending}
          data-testid="button-submit"
        >
          {submitLead.isPending ? "Submitting..." : "Submit Details"}
        </Button>
      </form>
    </Form>
  );
}
