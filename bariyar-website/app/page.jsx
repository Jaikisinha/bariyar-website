import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="p-6 flex justify-between items-center shadow-sm bg-white">
        <h1 className="text-2xl font-bold">Bariyar</h1>
        <nav className="space-x-4">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section initial={{opacity:0}} animate={{opacity:1}} className="p-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Sustainable Style, Naturally Strong</h2>
        <p className="mb-6">We provide sustainable jute products made from natural fiber.</p>
        <Button>Contact Us</Button>
      </motion.section>

      {/* Products Section */}
      <section id="products" className="p-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n:'Jute Tote Bag', d:'Eco-friendly daily carry bag' },
            { n:'Jute Folder', d:'Office & document storage' },
            { n:'Jute File', d:'Durable business files' },
            { n:'Jute Carry Bag', d:'Reusable shopping bag' }
          ].map(p => (
            <Card key={p.n} className="rounded-2xl shadow-md">
              <CardContent className="p-4 text-center">
                <div className="h-32 bg-gray-200 rounded mb-3"></div>
                <h3 className="font-semibold">{p.n}</h3>
                <p className="text-sm">{p.d}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>We specialize in jute bags, tote bags, folders, files, and carry bags for businesses and individuals.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Email: bakshi01.sinha@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-sm bg-gray-100">© 2026 Bariyar</footer>
    </div>
  );
}

