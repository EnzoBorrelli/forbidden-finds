"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { loginFormSchema } from "@/utils/zodSchemas/userSchemas";

const LogInForm = () => {
  const [loading,setLoading] = useState(false)
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    setLoading(true)
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      toast({
        title: "wrong credentials",
        description: "please check your email and password",
        variant: 'destructive'
      });
      setLoading(false)
    } else {
      setLoading(false)
      router.push("/");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-4 rounded-md md:w-1/3 bg-bg-200 dark:bg-bg-500">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="aloy@guerilla.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="type your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6 font-bold bg-amber-600 hover:bg-blue-600" type="submit" disabled={loading}>
          {loading?"Loggin In User...":"Log In"}
        </Button>
      </form>
      <p className="mt-2 text-sm text-center text-text-400 dark:text-text-300">
        if you do not have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/sign-up">
          Sign Up
        </Link>
      </p>
    </Form>
  );
};

export default LogInForm;