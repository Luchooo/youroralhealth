import "./style.css";
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
        <ul className="has-scrollbar">
          <TeamCard
            name="Dr. Alex Rubio"
            profession="Odontológo"
            imageUrl="./img/doctor-1.webp"
            university="Universidad del Bosque"
          />
          <TeamCard
            name="Dra. Johana Umbarila"
            profession="Odontológa"
            imageUrl="./img/doctor-2.webp"
            university="Universidad del Bosque"
          />
          <TeamCard
            name="Dr. Fernando Alvés"
            profession="Odontológo"
            imageUrl="./img/doctor-3.webp"
            university="Universidad del Bosque"
          />
          <TeamCard
            name="Dra. Alba Caicedo"
            profession="Odontológa"
            imageUrl="./img/doctor-4.webp"
            university="Universidad del Bosque"
          />
        </ul>
      </div>
    </section>
  );
}

export default Team;
