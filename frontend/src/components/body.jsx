export default function Body() {
  return (
    <main className="grid grid-cols-12 gap-4 container mx-auto py-10">
      {/* Columna 1 */}
      <div className="col-span-12 md:col-span-2 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Columna 1</h2>
        <p>Contenido adicional aquí.</p>
      </div>

      {/* Contenido */}
      <div className="col-span-12 md:col-span-8">
        <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
        <div className="grid gap-6">
          {/* Ejemplo de Proyecto */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Proyecto Ejemplo</h3>
            <p>Descripción breve del proyecto.</p>
          </div>
        </div>
      </div>

      {/* Columna 2 */}
      <div className="col-span-12 md:col-span-2 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Columna 2</h2>
        <p>Más contenido aquí.</p>
      </div>
    </main>
  );
}
