import TeamCard from "./TeamCard";

function Team() {
  return (
    <section className="mt-24 mb-44">
      <div className="container mx-auto p-6">
        <p className="text-center text-3xl text-secondary font-extrabold uppercase mb-6">
          Nuestros doctores
        </p>
      </div>
      <section className="flex flex-wrap gap-4 justify-center mx-6">
      <TeamCard
          name="Alba Caicedo"
          profession="Odontológa General"
          university="Universidad del Bosque"
          rol="Gerente en servios de Salud y Auditoría"
        />
        <TeamCard
          name="Dalia Eslava"
          profession="Odontológa General"
          university="Colegio Odontológico"
          rol="Énfasis en Odontología Biológica y Quirúrgica"
        />
        <TeamCard
          name="Johana Umbarila"
          profession="Odontológa General"
          university="UNICOC"
          rol="Énfasis en Odontología Biológica y Quirúrgica"
        />
        <TeamCard
          name="Maria Montealegre"
          profession="Prostodoncista"
          university="Universidad del Bosque"
        />
        <TeamCard
          name="Ana Contreras"
          profession="Cirujana Maxilofacial"
          university="Universidad Javeriana"
        />
        <TeamCard
          name="Andrea Arias"
          profession="Ortodoncista"
          university="Universidad Antonio Nariño"
        />
        <TeamCard
          name="Angélica Forigua"
          profession="Endodoncista"
          university="Universidad Nacional"
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
