
import { categories } from "../data/categories"

export default function Form() {
  return (
    <form className="space-y-5 bg-white shadow-lg p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select id="category" className="border border-slate-300 p-2 rounded-lg w-full bg-white">
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>

                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Actividad:</label>
            <input 
                id="activity"
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej. Comida: Zumo de naranja, Ejercicio: Correr 5km"
            />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Calorias:</label>
            <input 
                id="activity"
                type="number"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej: 300"
            />
        </div>
        <input 
            type="submit" 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value="Guardar cambios"
            />

    </form>
  )
}
