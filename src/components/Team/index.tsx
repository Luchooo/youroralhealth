import TeamCard from './TeamCard';

const teamData = [
	{
		name: 'Alba Caicedo',
		profession: 'Odontóloga General',
		university: 'Universidad del Bosque',
		rol: 'Gerente en servicios de Salud y Auditoría',
	},
	{
		name: 'John Suarez',
		profession: 'Periodoncista',
		university: 'Colegio Odontológico',
	},
	{
		name: 'Oriana Arrieta',
		profession: 'Odontóloga General',
		university: 'Universidad del Atlántico',
	},
	{
		name: 'Maria Montealegre',
		profession: 'Prostodoncista',
		university: 'Universidad del Bosque',
	},
	{
		name: 'Ana Contreras',
		profession: 'Cirujana Maxilofacial',
		university: 'Universidad Javeriana',
	},
	{
		name: 'Andrea Arias',
		profession: 'Ortodoncista',
		university: 'Universidad Antonio Nariño',
	},
	{
		name: 'Ximena Torres',
		profession: 'Endodoncista',
		university: 'Universidad del Bosque',
	},
	{
		name: 'Monica Suarez',
		profession: 'Periodoncista',
		university: 'Colegio Odontológico',
	},
];

function Team() {
	return (
		<section className="mt-24 mb-44">
			<div className="container mx-auto p-6">
				<p className="text-center text-3xl text-secondary font-extrabold uppercase mb-6">
					Nuestros doctores
				</p>
			</div>
			<section className="flex flex-wrap gap-4 justify-center mx-6">
				{teamData.map((doctor, index) => (
					<TeamCard
						key={index}
						name={doctor.name}
						profession={doctor.profession}
						university={doctor.university}
						rol={doctor.rol}
					/>
				))}
			</section>
		</section>
	);
}

export default Team;
