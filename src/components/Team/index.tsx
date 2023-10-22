import TeamCard from "./TeamCard";

function Team() {
  return (
    <section className="mt-24 mb-44">
      <div className="container mx-auto p-6">
        <p className="text-center text-2xl text-secondary font-extrabold uppercase mb-3">
          Nuestros doctores
        </p>
        <h2 className="text-center mb-14 text-4xl text-primary font-bold">
          Dentistas expertos
        </h2>
      </div>
      <section className="flex flex-wrap gap-4 justify-center mx-6">
        <TeamCard
          name="Dalia Eslava"
          profession="Odontológa General"
          university="Colegio Odontológico"
          rol="Énfasis Periodoncia"
        />
        <TeamCard
          name="Alba Caicedo"
          profession="Odontológa General"
          university="Universidad del Bosque"
          rol="Gerente en servios de Salud"
        />
        <TeamCard
          name="Johana Umbarila"
          profession="Odontológa General"
          university="UNICOC"
          rol="Énfasis Periodoncia"
        />
        <TeamCard
          name="Maria Montealegre"
          profession="Prostodoncista"
          university="Universidad del Bosque"
        />
        <TeamCard
          name="Monica Suarez"
          profession="Periodoncista"
          university="Colegio Odontológico"
        />
      </section>
    </section>
  );
}

export default Team;
