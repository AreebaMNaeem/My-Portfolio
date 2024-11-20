export default function Projects() {
    return (
      <section className="p-8">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h2 className="text-2xl font-semibold">Project 1</h2>
            <p>A description of the project goes here.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-2xl font-semibold">Project 2</h2>
            <p>A description of the project goes here.</p>
          </div>
          {/* Add more project entries here */}
        </div>
      </section>
    );
  }
  