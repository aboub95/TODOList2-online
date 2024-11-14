"use client";
import { useState } from "react";

const TodoAjout = () => {
  const [tache, setTache] = useState([]); // Liste des tâches
  const [nouvelleTache, setNouvelleTache] = useState(""); // Texte de la nouvelle tâche
  const [editerId, setEditerId] = useState(null); // ID de la tâche en cours de modification

  // Je cree une constante pour  ajouter une tâche
  const ajouterTache = () => {
    if (nouvelleTache.trim()) {
      setTache([...tache, { id: Date.now(), text: nouvelleTache }]);
      setNouvelleTache("");
    }
  };

  // Je crée une constante  pour supprimer une tâche
  const supprimerTache = (id) => {
    setTache(tache.filter((task) => task.id !== id));
  };

  //Je crée une constante pour la modification d'une tâche
  const modifierTache = (id) => {
    const tacheEdite = tache.find((task) => task.id === id);
    if (tacheEdite) {
      setNouvelleTache(tacheEdite.text);
      setEditerId(id);
    }
  };

  //
  const mettreAjourTache = () => {
    setTache(
      tache.map((task) =>
        task.id === editerId ? { ...task, text: nouvelleTache } : task
      )
    );
    setNouvelleTache("");
    setEditerId(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4  w-10/12 bg-transparent  rounded-lg shadow-lg sm:scale-100 md:scale-125 lg:scale-150">
      <h1 className="text-3xl text-white font-bold text-center mb-6">
        Ma Todo Listes
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
          placeholder="Ajouter une tâche"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={editerId ? mettreAjourTache : ajouterTache}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:scale-125 transition duration-00"
        >
          {editerId ? "Mettre à jour" : "Ajouter"}
        </button>
      </div>
      <ul className="space-y-2">
        {tache.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded"
          >
            <span className="flex-1">{task.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => modifierTache(task.id)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition hover:scale-110 duration-100 "
              >
                Modifier
              </button>
              <button
                onClick={() => supprimerTache(task.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition hover:scale-110 duration-100"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAjout;
