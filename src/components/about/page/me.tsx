"use client";

import Section from "@/components/section";

import { motion } from "framer-motion";
import { CardSection } from "./card";

export function AboutPageMe() {
  return (
    <div
      id="me"
      className="bg-background-primary flex items-center shrink-0 z-10 md:py-[7rem] py-[3rem]"
    >
      <Section>
        <div className="flex flex-col lg:gap-[30vh] gap-[5rem]">
          <CardSection
            type="INICIOS"
            title="Empezando con Java en Minecraft"
            left={true}
            description="Mi primer contacto con la programación fue en el año 2017, años despues de empezar a jugar Minecraft. En ese momento, me interesó mucho la programación de plugins para servidores de Minecraft, por lo que empecé a aprender Java. Lo que me llevó a encontrar mi pasión por la programación."
            image="/about/mine.jpg"
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/about/arrow.svg"
              alt=""
              className="opacity-70 hidden lg:block  absolute w-[25vh] h-[25vh] rotate-[160deg] right-[45%] bottom-[-26vh]"
            />
          </CardSection>

          <CardSection
            type="POCO TIEMPO LUEGO"
            title="Mis primeros pasos en .NET y Spring Boot"
            left={false}
            description="A mediados de 2018, empecé a aprender C# y .NET, intentando hacer aplicaciones de escritorio. También empecé a aprender SQL, para poder hacer bases de datos para mis aplicaciones. Mi primer proyecto de API RESTful fue un gestor de tareas. Mas tarde mi próximo 'gran paso' sería un sistema de gestión de empleados y clientes con Spring Boot."
            image="/about/spring.png"
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/about/arrow.svg"
              alt=""
              className="opacity-70 hidden lg:block  absolute w-[25vh] h-[25vh] rotate-[80deg] right-[45%] bottom-[-26vh]"
            />
          </CardSection>

          <CardSection
            type="AÑOS DESPUÉS"
            title="Siguiendo con el desarrollo web"
            left={true}
            description="A mediados de 2018, empecé a aprender C# y .NET, intentando hacer aplicaciones de escritorio. También empecé a aprender SQL, para poder hacer bases de datos para mis aplicaciones. Mi primer proyecto de API RESTful fue un gestor de tareas. Mas tarde mi próximo 'gran paso' sería un sistema de gestión de empleados y clientes con Spring Boot."
            image="/about/react.png"
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/about/arrow.svg"
              alt=""
              className="opacity-70 hidden lg:block absolute w-[25vh] h-[25vh] rotate-[160deg] right-[45%] bottom-[-26vh]"
            />
          </CardSection>

          <CardSection
            type="ACTUALIDAD"
            title="Mejorando mis habilidades"
            left={false}
            description="Actualmente, me decidí por el mundo back-end, siento que es el lugar donde más disfruto programar. 
            Voy en progreso con proyectos personales, y también estoy aprendiendo nuevas tecnologías,
            tales como Django y Laravel, que son frameworks que me llaman mucho la atención. "
            image="/about/actual.png"
          ></CardSection>
        </div>
      </Section>
    </div>
  );
}
