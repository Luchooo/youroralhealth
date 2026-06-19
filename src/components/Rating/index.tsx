import { useState, useEffect } from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

type Review = {
  id: number;
  Nombre: string;
  Estrellas: number;
  Comentario: string;
  created_at: string;
};

type FormState = "idle" | "submitting" | "success" | "error";

function Rating() {
  const [rating, setRating] = useState<number>(0);
  const [hovered, setHovered] = useState<number>(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [reviews, setReviews] = useState<Review[]>([]);

  const labels: Record<number, string> = {
    1: "Muy malo",
    2: "Malo",
    3: "Regular",
    4: "Bueno",
    5: "¡Perfecto!",
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .eq("Aprobado", true)
      .order("created_at", { ascending: false });
    if (data) setReviews(data);
  };

  const handleSubmit = async () => {
    if (!rating || !name.trim()) return;
    setFormState("submitting");
    try {
      const { error } = await supabase.from("reviews").insert([
        {
          Nombre: name,
          Estrellas: rating,
          Comentario: comment || "Sin comentario",
          Aprobado: true,
        },
      ]);
      if (error) throw error;
      setFormState("success");
      setRating(0);
      setName("");
      setComment("");
      fetchReviews();
    } catch (error) {
      console.error(error);
      setFormState("error");
    }
  };

  return (
    <section className="mt-24 mb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-3xl text-secondary font-extrabold uppercase mb-2">
          Lo que dicen nuestros pacientes
        </p>
        <p className="text-center text-gray-500 text-sm mb-10">
          Tu experiencia es muy importante para nosotros. Comparte cómo fue tu atención en Your Oral Health.
        </p>

        {/* Formulario */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 max-w-xl mx-auto">
          <div className="flex justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
              >
                {star <= (hovered || rating) ? (
                  <IconStarFilled size={32} className="text-yellow-400" />
                ) : (
                  <IconStar size={32} className="text-yellow-400" />
                )}
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-center text-secondary font-semibold mb-4">
              {labels[rating]}
            </p>
          )}
          <div className="mb-4">
            <label className="text-xs font-bold text-gray-500 uppercase">Tu nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <label className="text-xs font-bold text-gray-500 uppercase">
              Comentario <span className="font-normal">(opcional)</span>
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {formState === "success" && (
            <p className="text-green-500 text-center text-sm mb-4">
              ✅ ¡Gracias! Tu reseña ha sido publicada.
            </p>
          )}
          {formState === "error" && (
            <p className="text-red-500 text-center text-sm mb-4">
              ❌ Hubo un error. Intenta de nuevo.
            </p>
          )}
          <button
            onClick={handleSubmit}
            disabled={formState === "submitting"}
            className="w-full bg-secondary hover:bg-blue-700 text-white font-bold py-3 rounded-lg uppercase tracking-wider transition"
          >
            {formState === "submitting" ? "Enviando..." : "Publicar reseña"}
          </button>
        </div>

        {/* Reseñas publicadas */}
        {reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IconStarFilled
                      key={star}
                      size={18}
                      className={star <= review.Estrellas ? "text-yellow-400" : "text-gray-200"}
                    />
                  ))}
                </div>
                <p className="font-bold text-gray-800 mb-1">{review.Nombre}</p>
                <p className="text-gray-600 text-sm">{review.Comentario}</p>
                <p className="text-gray-400 text-xs mt-3">
                  {new Date(review.created_at).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Rating;