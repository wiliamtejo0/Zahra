'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Eye, Lock, Cookie } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  ZAHRA PUTRIA AYUNI ASSYAMSUDIN
                </h1>
                <p className="text-xs text-gray-600">Privacy Policy</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</Link>
              <Link href="/terms" className="text-gray-700 hover:text-orange-600 transition-colors">Terms & Conditions</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kebijakan Privasi untuk <strong>ZAHRA PUTRIA AYUNI ASSYAMSUDIN</strong> - 
              Perlindungan data Anda adalah prioritas kami
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-semibold">Pendahuluan</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Selamat datang di kebijakan privasi <strong>ZAHRA PUTRIA AYUNI ASSYAMSUDIN</strong>. 
                  Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, 
                  dan membagikan informasi pribadi Anda saat menggunakan layanan roti dan kue kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kami berkomitmen untuk melindungi privasi Anda dan memastikan keamanan data pribadi 
                  yang Anda percayakan kepada kami sesuai dengan peraturan perundang-undangan yang berlaku.
                </p>
              </CardContent>
            </Card>

            {/* Information Collection */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Cookie className="w-6 h-6 text-pink-500 mr-3" />
                  <h2 className="text-2xl font-semibold">Informasi yang Kami Kumpulkan</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Informasi Pribadi</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Nomor telepon</li>
                      <li>Alamat email</li>
                      <li>Alamat pengiriman</li>
                      <li>Informasi pembayaran</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Informasi Transaksi</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Riwayat pesanan</li>
                      <li>Produk yang dipesan</li>
                      <li>Metode pembayaran</li>
                      <li>Status pengiriman</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Informasi Teknis</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Alamat IP</li>
                      <li>Jenis browser</li>
                      <li>Perangkat yang digunakan</li>
                      <li>Cookies dan data analytics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-yellow-500 mr-3" />
                  <h2 className="text-2xl font-semibold">Penggunaan Informasi</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Kami menggunakan informasi yang Anda berikan untuk:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Memproses dan menyelesaikan pesanan Anda</li>
                    <li>Menyediakan layanan pelanggan yang lebih baik</li>
                    <li>Mengirimkan informasi tentang produk dan promosi</li>
                    <li>Meningkatkan kualitas produk dan layanan kami</li>
                    <li>Memastikan keamanan transaksi</li>
                    <li>Mematuhi kewajiban hukum dan peraturan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Perlindungan Data</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>ZAHRA PUTRIA AYUNI ASSYAMSUDIN</strong> mengimplementasikan berbagai 
                  langkah keamanan untuk melindungi informasi pribadi Anda:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Enkripsi data sensitif</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>System keamanan berlapis</li>
                  <li>Monitoring keamanan 24/7</li>
                  <li>Backup data teratur</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Pembagian Informasi</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada 
                  pihak ketiga tanpa persetujuan Anda, kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Untuk memproses pesanan (layanan pengiriman)</li>
                  <li>Untuk pemrosesan pembayaran (payment gateway)</li>
                  <li>Jika diwajibkan oleh hukum atau peraturan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pelanggan lainnya</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Hak Anda</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sebagai pengguna layanan kami, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan</li>
                  <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda</li>
                  <li>Menolak pemasaran langsung</li>
                  <li>Meminta salinan data pribadi Anda</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-pink-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin 
                  melaksanakan hak Anda, silakan hubungi kami:
                </p>
                <div className="bg-white rounded-lg p-6 space-y-3">
                  <div>
                    <span className="font-semibold">Nama Usaha:</span>
                    <p className="text-gray-600">ZAHRA PUTRIA AYUNI ASSYAMSUDIN</p>
                  </div>
                  <div>
                    <span className="font-semibold">Alamat:</span>
                    <p className="text-gray-600">
                      KP Bojong Kidul, Desa Bojong, Kec. Cikembar, Kab. Sukabumi, Jawa Barat 43347
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold">Telepon:</span>
                    <p className="text-gray-600">+6282382466226</p>
                  </div>
                  <div>
                    <span className="font-semibold">Email:</span>
                    <p className="text-gray-600">[Email akan ditambahkan]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Updated */}
            <div className="text-center py-8">
              <p className="text-gray-500">
                Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID')}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              ZAHRA PUTRIA AYUNI ASSYAMSUDIN
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Penyedia roti dan kue premium dengan kualitas terbaik
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors">Beranda</Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors">Terms & Conditions</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</Link>
            </div>
            <Separator className="bg-gray-800 my-4" />
            <p className="text-gray-400 text-sm">
              &copy; 2024 ZAHRA PUTRIA AYUNI ASSYAMSUDIN. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}