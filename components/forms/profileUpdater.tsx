"use client";

import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/providers/userProvider";
import { updatedUserSchema } from "@/utils/zodSchemas/userSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { mutate } from "swr";


const ProfileUpdater = () => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editMail, setEditMail] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof updatedUserSchema>>({
    resolver: zodResolver(updatedUserSchema),
    defaultValues: {
      username: user?.username,
      email: user?.email,
    },
  });

  const onSubmit = async (values: z.infer<typeof updatedUserSchema>) => {
    console.log("estoy vivo");
    setLoading(true);

    const response = await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user?.id,
        username: values.username,
        email: values.email,
        avatar: user?.avatar,
      }),
    });
    if (response.ok) {
      setLoading(false);
      router.refresh();
      toast({
        title: "profile updated",
        description: "the profile is succesfully updated",
        variant: "default",
      });
      mutate("/api/user");
    } else {
      toast({
        title: "request failed",
        description: "an error occurred while updating the profile",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/4">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="font-bold">Username</FormLabel>
                <FormControl>
                  <Input
                    disabled={!editName}
                    placeholder="username"
                    {...field}
                  />
                </FormControl>
                <button
                  type="button"
                  onClick={() => setEditName(!editName)}
                  className="absolute rounded-sm -left-8 top-8 bg-stone-700 ring-2 ring-stone-300 hover:bg-amber-700 hover:ring-amber-300"
                >
                  {editName ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="m-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="m-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                    </svg>
                  )}
                </button>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input disabled={!editMail} placeholder="email" {...field} />
                </FormControl>
                <button
                  type="button"
                  onClick={() => setEditMail(!editMail)}
                  className="absolute rounded-sm -left-8 top-8 bg-stone-700 ring-2 ring-stone-300 hover:bg-amber-700 hover:ring-amber-300"
                >
                  {editMail ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="m-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="m-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                    </svg>
                  )}
                </button>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-full mt-6 font-bold tracking-widest bg-sky-700 hover:bg-amber-500 disabled:bg-stone-500 "
          type="submit"
          disabled={loading || !editName && !editMail}
        >
          {loading ? "Saving" : "Save changes"}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileUpdater;
