import TeamCard from './TeamCard';

const teamData = [
	{
		name: 'Alba Caicedo',
		profession: 'Odontóloga General',
		university: 'Universidad sergio arboleda',
		rol: 'Gerente en servicios de Salud y Auditoría',
	},
	{
		name: 'John Suarez',
		profession: 'Periodoncista',
		university: 'Colegio Odontológico',
	},
	{
		name: 'Jorge Alarcón',
		profession: 'Cirujano dental',
		university: 'Universidad Nacional',
	},
	{
		name: 'Maria Montealegre',
		profession: 'Prostodoncista',
		university: 'Universidad del Bosque',
	},
	{
		name: 'Daniel Hernandez',
		profession: 'Odontólogo Estético y Restaurador',
		university: 'Universidad Nacional',
	},
	{
		name: 'Julian porras',
		profession: 'Endodoncista',
		university: 'Universidad Nacional',
	},
	{
		name: 'Ximena Torres',
		profession: 'Endodoncista',
		university: 'Universidad del Bosque',
	},
	{
		name: 'Juan Sebastian Álvarez',
		profession: 'Cirugía Maxilofacial',
		university: 'Universidad del Bosque',
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
			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-7xl px-6">
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