import heroImage from '../assets/hero.png'

const Hero = () => {
    return (
        <>
            <section className="min-h-[85vh] flex items-center px-6">
                <div className="grid md:grid-cols-2 gap-10 items-center w-full">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                            Realza tu <span className="text-pink-400">belleza natural</span>
                        </h1>

                        <p className="mt-4 text-black">
                            Servicios profesionales de estética y cuidado personal con productos de alta calidad.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://wa.me/521XXXXXXXXXX"
                                className="bg-pink-400 text-black px-6 py-3 rounded-full"
                            >
                                Agendar cita
                            </a>

                            <a
                                href="#servicios"
                                className="border px-6 py-3 rounded-full"
                            >
                                Ver servicios
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={heroImage}
                            alt="Estética"
                            className="max-h-125 object-contain"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero