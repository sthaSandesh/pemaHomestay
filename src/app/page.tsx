

export default function Home() {
  return (
    <main>
      <section
         className="bg-[url('/homeBg.png')] bg-cover bg-center  min-h-[calc(100vh-90px)]">

        <div className="flex flex-col items-center justify-between p-24">
          <h1 className="text-4xl font-bold">Welcome to Our Hotel</h1>
          <p className="mt-4 text-lg">Experience luxury and comfort like never before.</p>
          <div className="mt-8">
            <a href="#features" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Explore Features
            </a>
          </div>
        </div>
      </section>
      <section className="bg-primary h-60 py-12 padx">
        <div className="container mx-auto text-white">
          <h2 className="text-3xl font-extrabold text-center">Our Services & Amenities</h2>
          <p className="mt-4 text-lg font-semibold text-center">Enjoy a comfortable stay with all the conveniences you need</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Feature cards go here */}
          </div>
        </div>
      </section>
    </main>
  );
}
