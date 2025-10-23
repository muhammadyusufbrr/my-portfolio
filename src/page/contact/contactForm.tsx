"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "@/components/ui/input";
import TextArea from "@/components/ui/textArea";
import Label from "@/components/ui/label";
import Button from "@/components/ui/button";

const schema = yup.object({
  name: yup.string().required("Ismni kiriting!").min(2, "Ism juda qisqa!"),
  email: yup
    .string()
    .required("Emailni kiriting!")
    .email("Wrong email address!"),
  message: yup.string().required("Xabar yozish shart!"),
});

type FormData = yup.InferType<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("✅ Forma ma’lumotlari:", data);

    alert("Xabar muvaffaqiyatli yuborildi!");
    reset();
  };

  return (
    <div className="px-[130px] pt-[60px] border-r border-[#1E2D3D]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[372px] space-y-6"
      >
        <div className="flex flex-col gap-[7px]">
          <Label title="_name:" />
          <Input type="text" {...register("name")} />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-[7px]">
          <Label title="_email:" />
          <Input type="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-[7px]">
          <Label title="_message:" />
          <TextArea {...register("message")} />
          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          title={isSubmitting ? "sending..." : "submit-message"}
          species={isSubmitting ? "disabled" : "primary"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default ContactForm;
