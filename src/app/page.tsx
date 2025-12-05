'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  ChefHat,
  Heart,
  Cookie,
  Cake,
  ShoppingBag
} from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua', icon: <Heart className="w-4 h-4" /> },
    { id: 'bread', name: 'Roti', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'cake', name: 'Kue', icon: <Cake className="w-4 h-4" /> },
    { id: 'pastry', name: 'Pastry', icon: <Cookie className="w-4 h-4" /> }
  ];

  const products = [
    {
      id: 1,
      name: 'Roti Manis Lembut',
      category: 'bread',
      price: 'Rp 15.000',
      description: 'Roti manis dengan tekstur lembut dan rasa yang nikmat',
      image: '🍞'
    },
    {
      id: 2,
      name: 'Kue Ulang Tahun',
      category: 'cake',
      price: 'Rp 150.000',
      description: 'Kue ulang tahun dengan design menarik dan rasa premium',
      image: '🎂'
    },
    {
      id: 3,
      name: 'Croissant Butter',
      category: 'pastry',
      price: 'Rp 25.000',
      description: 'Croissant dengan butter premium dan tekstur berlapis',
      image: '🥐'
    },
    {
      id: 4,
      name: 'Roti Gandum',
      category: 'bread',
      price: 'Rp 20.000',
      description: 'Roti gandum sehat dengan serat tinggi',
      image: '🍞'
    },
    {
      id: 5,
      name: 'Brownies Fudgy',
      category: 'cake',
      price: 'Rp 45.000',
      description: 'Brownies dengan tekstur fudgy dan coklat premium',
      image: '🍫'
    },
    {
      id: 6,
      name: 'Danish Pastry',
      category: 'pastry',
      price: 'Rp 30.000',
      description: 'Pastry Denmark dengan filling buah segar',
      image: '🥐'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  ZAHRA PUTRIA AYUNI ASSYAMSUDIN
                </h1>
                <p className="text-sm text-gray-600">Roti & Kue Premium</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">Tentang</a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors">Produk</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 w-fit">
                <Heart className="w-3 h-3 mr-1" />
                Dibuat dengan Cinta
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Roti & Kue
                <span className="block bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Premium untuk Anda
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nikmati berbagai pilihan roti dan kue segar yang dibuat dengan bahan-bahan 
                berkualitas tinggi dan resep spesial dari <strong>ZAHRA PUTRIA AYUNI ASSYAMSUDIN</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white">
                  Lihat Menu
                </Button>
                <Button variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  Hubungi Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/logo.png" 
                  alt="ZAHRA PUTRIA AYUNI ASSYAMSUDIN Logo"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-60 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami adalah usaha roti dan kue yang berkomitmen untuk menyajikan produk berkualitas tinggi
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Berkualitas</h3>
                <p className="text-gray-600">Menggunakan bahan-bahan pilihan dan resep spesial</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                <p className="text-gray-600">Setiap produk dibuat dengan penuh kasih sayang</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Taste</h3>
                <p className="text-gray-600">Rasa yang lezat dan memuaskan setiap pelanggan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Unggulan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Pilihan roti dan kue terbaik untuk setiap momen spesial Anda
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className={activeCategory === category.id 
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600" 
                    : "border-orange-300 text-orange-600 hover:bg-orange-50"
                  }
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-6xl text-center mb-4">{product.image}</div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                    <Button size="sm" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                      Pesan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pesan sekarang dan nikmati roti & kue segar dari dapur kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Alamat</h4>
                  <p className="text-gray-600">
                    KP Bojong Kidul, Desa Bojong, Kec. Cikembar, Kab. Sukabumi, Jawa Barat 43347
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Telepon</h4>
                  <p className="text-gray-600">+6282382466226</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Jam Buka</h4>
                  <p className="text-gray-600">Setiap Hari: 07:00 - 20:00</p>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Pesan Sekarang</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Pesanan</label>
                    <textarea 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      rows={3}
                      placeholder="Detail pesanan Anda"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
                    Kirim Pesanan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                ZAHRA PUTRIA AYUNI ASSYAMSUDIN
              </h3>
              <p className="text-gray-400">
                Penyedia roti dan kue premium dengan kualitas terbaik untuk setiap momen spesial Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">Beranda</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">Tentang</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-orange-400 transition-colors">Produk</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-gray-800 mb-8" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ZAHRA PUTRIA AYUNI ASSYAMSUDIN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}