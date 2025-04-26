"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { updatedUserSchema, userFormSchema } from "@/utils/zodSchemas/userSchemas";

const user = {
    id: "1",
    username: "aloy",
    email:"aaaaa",
    avatar:2
}

const TestForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
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
    console.error("estoy vivo");
    setLoading(true);
    const response = await fetch("/api/user", {
      method: "POST",
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
      router.push("/");
      router.refresh();
    } else {
      setLoading(false);
      toast({
        title: "Error de registro",
        description: "Ha ocurrido un error, intente nuevamente",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full p-4 pl-10 text-stone-900 rounded-md md:w-[400px]"
      >
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold tracking-wider">Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
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
                <FormLabel className="font-bold tracking-wider">Email</FormLabel>
                <FormControl>
                  <Input placeholder="aloy@guerrilla.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="w-full mt-6 font-bold bg-amber-700 hover:bg-amber-500"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing Up User..." : "Sign Up"}
        </Button>
      </form>
    </Form>
  );
};

export default TestForm;
