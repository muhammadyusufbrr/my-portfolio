"use client";

import React from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "@/components/ui/input";
import TextArea from "@/components/ui/textArea";
import Label from "@/components/ui/label";
import Button from "@/components/ui/button";

/* ✅ 1. Yup schema */
const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Please enter your name!")
    .min(2, "Name is too short!")
    .max(40, "Name cannot exceed 40 characters."),
  email: yup
    .string()
    .trim()
    .required("Please enter your email!")
    .email("Invalid email format!"),
  message: yup
    .string()
    .trim()
    .max(160, "Message cannot exceed 160 characters.")
    .notRequired(),
});

/* ✅ 2. TypeScript type */
type FormData = yup.InferType<typeof schema>;

/* ✅ 3. Component */
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData>,
    mode: "onChange", // ✅ bu real-time validatsiya uchun
  });

  // watch orqali inputlarni kuzatamiz
  const name = watch("name");
  const email = watch("email");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("✅ Form data:", data);
    alert("Message sent successfully!");
    reset();
  };

  // name va email to‘ldirilmagan bo‘lsa disable bo‘ladi
  const isButtonDisabled =
    !name?.trim() || !email?.trim() || !isValid || isSubmitting;

  return (
    <div className="pt-[60px] border-r border-[#1E2D3D] w-full max-w-[632px] h-full flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[372px] space-y-6"
      >
        {/* Name */}
        <div className="flex flex-col gap-[7px]">
          <Label title="_name:" />
          <Input
            type="text"
            {...register("name")}
            errorMessage={errors.name?.message}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-[7px]">
          <Label title="_email:" />
          <Input
            type="email"
            {...register("email")}
            errorMessage={errors.email?.message}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-[7px]">
          <Label title="_message:" />
          <TextArea
            {...register("message")}
            errorMessage={errors.message?.message}
          />
        </div>

        {/* Submit Button */}
        <Button
          title={isSubmitting ? "sending..." : "submit-message"}
          species={
            isButtonDisabled && isButtonDisabled ? "disabled" : "primary"
          }
      
          type="submit"
        />
      </form>
    </div>
  );
};

export default ContactForm;
