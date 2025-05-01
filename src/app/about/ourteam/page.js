import DirectorProfile from "@/app/components/Director";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const OurTeamPage = () => {
    return(
           <main className="min-h-screen">
            <Navbar />
            <section className="bg-[#5e6f47] text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Meet the dedicated individuals behind Satoru Foundation, committed to making a difference in the lives of older people.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <DirectorProfile />
                </div>
            </section>

            <Footer />
            </main>
        );
}

export default OurTeamPage