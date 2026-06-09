import { useState } from 'react';
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import emailjs from "@emailjs/browser";

type FormState = "idle" | "submitting" | "success" | "error";

function Rating() {
  const [rating, setRating] = useState<number>(0);
  const [hovered, setHovered] = useState<number>(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  const labels: Record<number, string> = {
    1: "Muy malo",
    2: "Malo",
    3: "Regular",
    4: "Bueno",
    5: "¡Perfecto!",
  };

  const handleSubmit = async () => {
    if (!rating || !name.trim()) return;
    setFormState("submitting");

    try {
       await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre: name,
          estrellas: `${rating} / 5 - ${labels[rating]}`,
          comentario: comment || "Sin comentario",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormState("success");
    } catch (error) {
      console.error(error);
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <section className="mt-24 mb-44 px-6">
        <div className="max-w-xl mx-auto text-center bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-5xl mb-4">🦷</div>
          <h3 className="text-2xl font-extrabold text-primary mb-2">
            ¡Gracias por tu calificación!
          </h3>
          <p className="text-gray-500 text-sm">
            Tu opinión nos ayuda a seguir mejorando nuestros servicios.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-24 mb-44 px-6">
      <div className="max-w-xl mx-auto">
        <p className="text-center text-3xl text-secondary font-extrabold uppercase mb-2">
          Califica nuestro servicio
        </p>
        <p className="text-center text-gray-400 text-sm mb-10">
          Tu opinión es muy importante para nosotros
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col gap-6">
          {/* Estrellas */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHovered(star)}
                  onMouseLeave={() => setHovered(0)}
                  className="transition-transform hover:scale-110 focus:outline-none"
                  aria-label={`Calificar con ${star} estrella${star > 1 ? 's' : ''}`}
                >
                  {star <= (hovered || rating) ? (
                    <IconStarFilled size={28} className="text-yellow-400" />
                  ) : (
                    <IconStar size={28} className="text-gray-300" />
                  )}
                </button>
              ))}
            </div>
            <p className="text-sm font-semibold text-secondary h-5">
              {hovered || rating ? labels[hovered || rating] : ""}
            </p>
          </div>

          {/* Nombre */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-primary uppercase tracking-wide">
              Tu nombre
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="¿Cómo te llamas?"
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-secondary transition-colors"
            />
          </div>

          {/* Comentario */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-primary uppercase tracking-wide">
              Comentario{" "}
              <span className="text-gray-400 normal-case font-normal">
                (opcional)
              </span>
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Cuéntanos tu experiencia..."
              rows={3}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
            />
          </div>

          {/* Botón */}
          <button
            onClick={handleSubmit}
            disabled={!rating || !name.trim() || formState === "submitting"}
            className="bg-secondary text-white font-bold py-3 rounded-lg text-sm uppercase tracking-wide transition-opacity disabled:opacity-40 hover:opacity-90"
          >
            {formState === "submitting" ? "Enviando..." : "Enviar calificación"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Rating;