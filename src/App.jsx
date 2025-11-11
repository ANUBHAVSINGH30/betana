import React, { useState } from "react";
import { motion } from "framer-motion";
import  background from "./assets/bg.png";
import packet from "./assets/package.png";

export default function BetanaPremium() {
  const products = [
    { id: "masala", name: "Betana Bite (small)", price: 25, desc: "Traditional betel nut with authentic spices (50 gm)", img: packet },
    { id: "honey", name: "Betana Bite (medium)", price: 100, desc: "Sweetened with natural honey and sesame (250 gm)", img : packet },
    { id: "almond", name: "Betana Bite (large)", price: 180, desc: "Premium almonds with rich flavor (500 gm)", img:packet },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function addToCart(p) {
    setCart((prev) => {
      const found = prev.find((x) => x.id === p.id);
      if (found) return prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...prev, { ...p, qty: 1 }];
    });
    setCartOpen(true);
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(x => x.id !== id));
  }

  function changeQty(id, delta) {
    setCart(prev => prev.map(x => x.id === id ? { ...x, qty: Math.max(1, x.qty + delta) } : x));
  }

  function placeOrder() {
  if (!name || !phone) {
    alert("Please fill in your name and phone number before placing the order.");
    return;
  }
  alert(`Thank you, ${name}! Your order for ${cart.length} item(s) has been received. We'll contact you at ${phone}.`);
  setCart([]);
  setCartOpen(false);
}


  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#2D2A26] antialiased font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;600&display=swap');
        :root { --primary:#DDEDE2; --accent:#C99B3C; --muted:#7B756F }
        .font-serif { font-family:'Playfair Display', serif }
        .font-sans { font-family:'Inter',sans-serif }
      `}</style>

      {/* Sticky Navbar */}
      <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#F6F4EA] to-[#FFF2DA] flex items-center justify-center shadow-sm">
              <span className="font-serif text-lg">Bb</span>
            </div>
            <div className="font-serif text-lg">Betana Bites</div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm text-[#5b564f]">
            <a href="#mission" className="hover:text-[var(--accent)] transition-colors">Mission</a>
            <a href="#shop" className="hover:text-[var(--accent)] transition-colors">Flavours</a>
            <a href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</a>
            <button 
              onClick={() => setCartOpen(true)}
              className="ml-4 px-4 py-2 rounded-full bg-[var(--accent)] text-white font-semibold shadow relative">
              Cart {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>}
            </button>
          </nav>

          {/* Mobile cart button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setCartOpen(true)} className="px-3 py-2 rounded bg-[var(--accent)] text-white">Cart ({totalItems})</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative">
          <div className="h-[70vh] w-full">
            <img src= {background} alt="hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          <div className="absolute left-6 md:left-20 top-32 md:top-40 max-w-xl">
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-white drop-shadow-lg">
              Betana Bites — Heritage in Every Bite
            </h1>
            <p className="mt-4 text-white/90 text-lg max-w-md">
              From pineapple peels and betel leaves to handcrafted premium snacks. Small-batch, preservative-free, and rooted in Assam.
            </p>
            <div className="mt-6 flex gap-4">
              <button 
                onClick={() => addToCart(products[0])} 
                className="rounded-full px-6 py-3 bg-[var(--accent)] text-white font-semibold shadow-lg hover:bg-[#b88b33] transition">
                Order Sample
              </button>
              <a href="#shop" className="rounded-full px-5 py-3 border border-white/40 text-white hover:bg-white/10 transition">
                Explore
              </a>
            </div>
          </div>

          {/* <div className="absolute right-6 md:right-20 bottom-8 md:bottom-12 w-48 md:w-64">
            <img src = {background} 
                 alt="packet" 
                 className="rounded-xl shadow-2xl border-4 border-white" />
          </div> */}
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-[#FFF7E8]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow text-2xl">🍍</div>
            <div>
              <div className="text-sm text-[var(--muted)]">SUSTAINABLE</div>
              <div className="font-semibold">Waste to wealth</div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow text-2xl">👩‍🌾</div>
            <div>
              <div className="text-sm text-[var(--muted)]">COMMUNITY</div>
              <div className="font-semibold">Women-led income</div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow text-2xl">🌱</div>
            <div>
              <div className="text-sm text-[var(--muted)]">NATURAL</div>
              <div className="font-semibold">No preservatives</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
              We started in Nappam village, near Tezpur. Pineapple peel and betel leaves were being discarded — we saw opportunity. 
              By partnering with fruit vendors and training local households, especially women, we make snacks that are tasty, 
              nutritious, and sustainable. The production model is zero-waste and community-centric.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-serif text-xl mb-3">Sustainable Sourcing</h3>
              <p className="text-[var(--muted)]">Raw materials come from local farms and vendors — reducing waste and supporting farmers.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-serif text-xl mb-3">Community Empowerment</h3>
              <p className="text-[var(--muted)]">We engage households with incentive-based pay and skill training, prioritizing women's employment.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
              <div className="text-4xl mb-4">🍃</div>
              <h3 className="font-serif text-xl mb-3">Healthy & Natural</h3>
              <p className="text-[var(--muted)]">No preservatives — jaggery and spices give authentic flavour and nutrition.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-[#FFFDF8]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-[380px] bg-[#FFF8EF] flex items-center justify-center overflow-hidden rounded-t-2xl">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-[410px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                 />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2">{p.name}</h3>
                  <p className="text-sm text-[var(--muted)] mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-semibold text-[var(--accent)]">₹{p.price}</div>
                    <button 
                      onClick={() => addToCart(p)}
                      className="px-4 py-2 rounded-full bg-[var(--accent)] text-white font-semibold hover:bg-[#b88b33] transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-6">Get in Touch</h2>
          <p className="text-lg text-[var(--muted)] mb-8">
            Questions? Wholesale inquiries? Reach out to the Betana Bites team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div>
              <div className="text-3xl mb-2">📍</div>
              <div className="font-semibold">Location</div>
              <div className="text-sm text-[var(--muted)]">Nappam, Tezpur, Assam</div>
            </div>
            <div>
              <div className="text-3xl mb-2">📧</div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-[var(--muted)]">hello@betanabites.com</div>
            </div>
            <div>
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-[var(--muted)]">+91 98765 43210</div>
            </div>
          </div>
          <a 
            href="https://wa.me/919876543210?text=Hello! I want to order Betana Bites"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-[var(--accent)] text-white font-semibold shadow-lg hover:bg-[#b88b33] transition">
            Order on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2A26] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="font-serif text-2xl mb-4">Betana Bites</div>
          <p className="text-sm text-gray-400 mb-6">Heritage snacks. Zero waste. Community first.</p>
          <p className="text-xs text-gray-500">© 2025 Betana Bites. All rights reserved.</p>
        </div>
      </footer>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/30" onClick={() => setCartOpen(false)} />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="font-serif text-2xl">Your Cart</h3>
              <button onClick={() => setCartOpen(false)} className="text-2xl">&times;</button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-[var(--muted)]">
                  <div className="text-5xl mb-4">🛒</div>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 mb-6 pb-6 border-b">
                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-[var(--muted)]">₹{item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => changeQty(item.id, -1)} className="px-2 py-1 border rounded">-</button>
                        <span className="font-semibold">{item.qty}</span>
                        <button onClick={() => changeQty(item.id, 1)} className="px-2 py-1 border rounded">+</button>
                        <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-500 text-sm">Remove</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
  <div className="p-6 border-t bg-gray-50 space-y-3">
    {/* User Details Inputs */}
    <div className="flex flex-col gap-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="border p-2 rounded"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        className="border p-2 rounded"
      />
    </div>

    {/* Total Price */}
    <div className="flex justify-between mt-3 text-lg font-semibold">
      <span>Total</span>
      <span className="text-[var(--accent)]">₹{totalPrice}</span>
    </div>

    {/* Place Order Button */}
    <button
      onClick={placeOrder}
      className="block w-full text-center px-6 py-4 rounded-full bg-[var(--accent)] text-white font-semibold hover:bg-[#b88b33] transition"
    >
      Place Order
    </button>
  </div>
)}

          </motion.div>
        </div>
      )}
    </div>
  );
}
