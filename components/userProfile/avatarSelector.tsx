"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { updatedUserSchema } from "@/utils/zodSchemas/userSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import { z } from "zod";
import { DbUser } from "@/types/dbUser";

export default function AvatarSelector({ user }: { user: DbUser | null }) {
  const [image, setImage] = useState(user?.avatar || 1);
  const avatars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof updatedUserSchema>>({
    resolver: zodResolver(updatedUserSchema),
    defaultValues: {
      avatar: user?.avatar || 1,
    },
  });

  const onSubmit = async () => {
    console.log("Submitting form...");
    setLoading(true);

    try {
      const response = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user?.id,
          username: user?.username,
          email: user?.email,
          avatar: image,
        }),
      });

      if (response.ok) {
        console.log("Profile updated successfully");
        setLoading(false);
        router.refresh();
        toast({
          title: "Profile updated",
          description: "The profile is successfully updated",
          variant: "default",
        });
        mutate("/api/user");
      } else {
        const error = await response.json();
        console.error("Error updating profile:", error);
        toast({
          title: "Request failed",
          description:
            error.message || "An error occurred while updating the profile",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast({
        title: "Request failed",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/4">
        <Dialog>
          <DialogTrigger className="absolute right-0 rounded-full top-2 bg-stone-700 ring-2 ring-stone-300 hover:bg-amber-700 hover:ring-amber-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="m-2"
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
            </svg>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center tracking-widest font-normal mb-2">
                {user?.avatar === image
                  ? "Current avatar selected"
                  : "Select your avatar!"}
              </DialogTitle>
              <DialogDescription className="flex flex-col items-center justify-center">
                <ScrollArea className="h-[200px] w-full rounded border bg-stone-700 border-stone-400 p-4">
                  <div className="grid grid-cols-3 gap-4 p-2">
                    {avatars.map((avatar, index) => (
                      <Image
                        onClick={() => setImage(avatar)}
                        key={index}
                        className={`rounded-full ${
                          image === avatar
                            ? "ring-amber-300 ring-4"
                            : "ring-stone-300 ring-2"
                        }`}
                        src={`${`/avatars/${avatar}.png`}`}
                        height={128}
                        width={128}
                        alt={`avatar #${avatar}`}
                      />
                    ))}
                  </div>
                </ScrollArea>
                <Button
                  className="w-full mt-6 font-bold tracking-widest bg-sky-700 hover:bg-amber-500 disabled:bg-stone-500 "
                  onClick={onSubmit}
                  disabled={loading || user?.avatar === image}
                >
                  {loading ? "Saving" : "Save changes"}
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </form>
    </Form>
  );
}
