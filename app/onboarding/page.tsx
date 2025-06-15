"use client";

import * as React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "./_actions";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SmartDatetimeInput } from "@/components/ui/extension/smart-datetime-input";
import { toast } from "sonner";
const steps = [
  [
    {
      checked: true,
      description: "What is your first name?",
      disabled: false,
      label: "First Name",
      name: "first_name",
      placeholder: "Jon",
      required: true,
      rowIndex: 0,
      type: "text",
      value: "",
      variant: "Input",
      min: 1,
    },
  ],
  [
    {
      checked: true,
      description: "Name of Folder",
      disabled: false,
      label: "Folder Name",
      name: "folder_name",
      placeholder: "Sales Calls",
      required: true,
      rowIndex: 0,
      type: "",
      value: "",
      variant: "Input",
    },
    {
      checked: true,
      description: "short description of the folder",
      disabled: false,
      label: "Folder description",
      name: "folder_description",
      placeholder: "shadcn",
      required: true,
      rowIndex: 1,
      type: "",
      value: "",
      variant: "Input",
    },
  ],
  {
    checked: true,
    description: "Please select a preferred time",
    disabled: false,
    label: "Preferred Time",
    name: "preferred_time",
    placeholder: "Placeholder",
    required: true,
    rowIndex: 0,
    type: "",
    value: "",
    variant: "Smart Datetime Input",
    hour12: true,
  },
];

const formSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  folder_name: z.string().min(1),
  folder_description: z.string().min(1),
  preferred_time: z.unknown(),
  name_7474055486: z.unknown(),
});
export default function OnboardingComponent() {
  const [error, setError] = React.useState("");
  const { user } = useUser();
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferred_time: new Date(),
      name_7474055486: new Date(),
    },
  });
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    // const res = await completeOnboarding(values)
    // if (res?.message) {
    //   // Reloads the user's data from the Clerk API
    //   await user?.reload()
    //   router.push('/')
    // }
    // if (res?.error) {
    //   setError(res?.error)
    // }
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
           <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jon" type="text" {...field} />
                    </FormControl>
                    <FormDescription>What is your first name?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 ">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jon" type="text" {...field} />
                    </FormControl>
                    <FormDescription>What is your first name?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
            </div>
              <div className="col-span-6">
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" type="text" {...field} />
                    </FormControl>
                    <FormDescription>What is your last name?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="folder_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Folder Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Sales Calls" type="" {...field} />
                    </FormControl>
                    <FormDescription>Name of Folder</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="folder_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Folder description</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="" {...field} />
                    </FormControl>
                    <FormDescription>
                      short description of the folder
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="preferred_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What time do you want to receive emails</FormLabel>
                <FormControl>
                  <SmartDatetimeInput
                    value={field.value as Date}
                    onValueChange={field.onChange}
                    placeholder="e.g. Tomorrow morning 9am"
                  />
                </FormControl>
                <FormDescription>
                  Please select a preferred time
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
