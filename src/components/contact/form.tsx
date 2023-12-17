"use client";

import { useState } from "react";
import { useToast } from "../ui/use-toast";

export function ContactForm() {
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

    const sendEmail = await fetch(
      "/api/resend?name=" + name + "&email=" + email + "&message=" + message,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const res = await sendEmail.json();

    setName("");
    setEmail("");
    setMessage("");

    if (res.success) {
      toast({
        className: "bg-[#18181b] text-white border-0",
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
    <div className="flex mt-10 md:mt-0 flex-col gap-6 [&>div>h4]:font-semibold [&>div>input]:bg-transparent [&>div>input]:border [&>div>input]:border-gray-300 [&>div>input]:rounded-xl [&>div>input]:p-2 [&>div>input]:border-opacity-50 [&>div]:flex [&>div]:flex-col [&>div]:gap-2">
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
          className="border border-gray-300 rounded-xl p-2 border-opacity-50 bg-transparent max-h-[50vh]"
          placeholder="Hola Felipe, me gustaría trabajar contigo en un proyecto..."
        />

        <p className="text-red-500">{messageError}</p>
      </div>
      <button
        disabled={loading}
        onClick={handleSubmit}
        className="bg-[#7d6b6b] text-white font-semibold rounded-xl p-2 hover:scale-105 transition-all"
      >
        Enviar mensaje{loading && "..."}
      </button>
    </div>
  );
}
