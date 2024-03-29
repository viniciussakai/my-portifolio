import { Reveal } from "./reveal"
import { Separator } from "./ui/separator"

const freelancerTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "JQuery",
  "PHP",
  "Laravel",
  "WordPress",
  "MySQL",
  "PostgreSQL",
]

export function Experience() {
  return (
    <section className="container grid items-center  gap-2 pb-8 pt-6 lg:py-10">
      <Reveal>
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0">
          Experiencias
        </h2>
      </Reveal>
      <Separator />

      <div className="flex justify-center pt-6 ">
        <div className="border-b pb-5">
          <div className="mb-4 flex justify-between">
            <Reveal>
              <h3 className="text-xl md:file:text-2xl font-semibold leading-none tracking-tight">
                Freelancer
              </h3>
            </Reveal>
            <Reveal>
              <span className="text-sm md:text-md">2023 - Presente</span>
            </Reveal>
          </div>
          <div className="flex justify-between">
            <Reveal>
              <h3 className="text-md md:text-xl font-semibold leading-none tracking-tight text-blue-500">
                Desenvolvedor de Software
              </h3>
            </Reveal>
            <Reveal>
              <span className="text-sm ">Online</span>
            </Reveal>
          </div>
          <Reveal>
            <p className="max-w-[600px] lg:max-w-full">
              Como freelancer, meu foco principal é o desenvolvimento de
              aplicativos e sites personalizados para atender às necessidades
              específicas de empresas e indivíduos. Ao longo da minha carreira,
              adquiri ampla experiência e expertise em diversas linguagens e
              tecnologias fundamentais para criar produtos de alta qualidade.
            </p>
          </Reveal>

          <Reveal>
            <ul className="flex list-none gap-4 flex-wrap">
              {freelancerTechs.map((tech, index) => (
                <li className=" rounded bg-muted px-3 py-1 text-sm font-semibold transition-all hover:scale-105">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
