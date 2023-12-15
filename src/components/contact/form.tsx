export function ContactForm() {
  return (
    <div className="flex mt-10 md:mt-0 flex-col gap-6 [&>div>h4]:font-semibold [&>div>input]:bg-transparent [&>div>input]:border [&>div>input]:border-gray-300 [&>div>input]:rounded-xl [&>div>input]:p-2 [&>div>input]:border-opacity-50 [&>div]:flex [&>div]:flex-col [&>div]:gap-2">
      <div>
        <h4>Nombre y apellido</h4>

        <input
          type="text"
          name="Nombre"
          id="name"
          placeholder="Felipe Batista"
        />
      </div>

      <div>
        <h4>Email</h4>

        <input
          type="email"
          name="Email"
          id="email"
          placeholder="hellojavaa@gmail.com"
        />
      </div>

      <div>
        <h4>Mensaje</h4>

        <textarea
          name="Mensaje"
          id="message"
          className="border border-gray-300 rounded-xl p-2 border-opacity-50 bg-transparent max-h-[50vh]"
          placeholder="Hola Felipe, me gustaría trabajar contigo en un proyecto..."
        />
      </div>

        <button className="bg-[#7d6b6b] text-white font-semibold rounded-xl p-2 hover:scale-105 transition-all">
            Enviar  
        </button>
    </div>
  );
}
