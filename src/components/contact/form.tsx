"use client";

import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { motion } from "framer-motion";
import { Resend } from "resend";

export function ContactForm() {
  //const resend = new Resend(process.env.RESEND_API_KEY);
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);

    if (name === "") {
      setNameError("Por favor, ingresa tu nombre");
    }

    if (email === "") {
      setEmailError("Por favor, ingresa tu email");
    }

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

    const isValid = regex.test(email);

    if (message === "") {
      setMessageError("Por favor, ingresa tu mensaje");
    }

    if (!isValid) {
      setEmailError("Por favor, ingresa un email válido");
      setLoading(false);
      return;
    }

    if (emailError !== "" || nameError !== "" || messageError !== "") {
      setLoading(false);
      return;
    }

    /*const mail = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["hellojavaa@gmail.com"],
      subject: "PORTOFOLIO - " + name + " - " + email,
      text: "" + message,
    });*/

    const sendEmail = await fetch(
      "https://www.acentus.agency/api/resend?email=" +
        email +
        "&description=" +
        message +
        "&type=" +
        name,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    const res = await sendEmail.json();

    setName("");
    setEmail("");
    setMessage("");

    if (res.success) {
      toast({
        className: "bg-background-primary text-black border-0",
        title: "¡Mensaje enviado!",
        description: "Recibirás una respuesta en menos de 2 días habiles.",
      });
    } else {
      toast({
        title: "¡Error!",
        description: "Hubo un error al enviar el mensaje, intenta de nuevo.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="flex text-description-sm mt-10 md:mt-0 flex-col gap-[3vh] [&>div>h4]:font-semibold [&>div>input]:bg-transparent [&>div>input]:border [&>div>input]:border-gray-300 [&>div>input]:rounded-xl [&>div>input]:p-2 [&>div>input]:border-opacity-80 [&>div]:flex [&>div]:flex-col [&>div]:gap-2"
    >
      <div>
        <h4>Nombre y apellido</h4>

        <input
          type="text"
          name="Nombre"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
            setNameError("");
          }}
          value={name}
          placeholder="Felipe Batista"
        />

        <p className="text-red-500">{nameError}</p>
      </div>

      <div>
        <h4>Email</h4>

        <input
          type="email"
          name="Email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          placeholder="hellojavaa@gmail.com"
        />

        <p className="text-red-500">{emailError}</p>
      </div>

      <div>
        <h4>Mensaje</h4>

        <textarea
          name="Mensaje"
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setMessageError("");
          }}
          className="border border-gray-300 rounded-xl p-2 border-opacity-80 bg-transparent max-h-[50vh]"
          placeholder="Hola Felipe, me gustaría trabajar contigo en un proyecto..."
        />

        <p className="text-red-500">{messageError}</p>
      </div>
      <button
        disabled={loading}
        onClick={handleSubmit}
        className="bg-background-secondary text-black font-semibold rounded-xl p-2 hover:scale-105 transition-all border border-black border-opacity-20"
      >
        Enviar mensaje{loading && "..."}
      </button>
    </motion.div>
  );
}
