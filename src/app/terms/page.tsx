'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FileText, ShoppingCart, Users, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  ZAHRA PUTRIA AYUNI ASSYAMSUDIN
                </h1>
                <p className="text-xs text-gray-600">Terms & Conditions</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-orange-600 transition-colors">Privacy Policy</Link>
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Syarat dan Ketentuan layanan untuk <strong>ZAHRA PUTRIA AYUNI ASSYAMSUDIN</strong> - 
              Aturan main yang jelas untuk pengalaman terbaik Anda
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-semibold">Pendahuluan</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Selamat datang di <strong>ZAHRA PUTRIA AYUNI ASSYAMSUDIN</strong>. 
                  Syarat dan Ketentuan ini mengatur penggunaan layanan kami, termasuk pemesanan, 
                  pembayaran, dan pengiriman produk roti dan kue.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan 
                  yang tercantum di bawah ini. Harap baca dengan seksama sebelum melakukan pemesanan.
                </p>
              </CardContent>
            </Card>

            {/* Product Information */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-pink-500 mr-3" />
                  <h2 className="text-2xl font-semibold">Informasi Produk</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Kualitas Produk</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Semua produk dibuat dengan bahan-bahan berkualitas tinggi</li>
                      <li>Produk segar dibuat setiap hari</li>
                      <li>Kami berhak menolak pesanan jika kualitas tidak memenuhi standar</li>
                      <li>Foto produk adalah ilustrasi dan dapat berbeda sedikit dengan produk asli</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Deskripsi Produk</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Kami berusaha memberikan informasi produk yang akurat</li>
                      <li>Informasi alergen tersedia untuk setiap produk</li>
                      <li>Harap informasikan alergi atau pantangan makanan saat pemesanan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ordering Process */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-yellow-500 mr-3" />
                  <h2 className="text-2xl font-semibold">Proses Pemesanan</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cara Pemesanan</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Pemesanan dapat dilakukan via telepon, WhatsApp, atau datang langsung</li>
                      <li>Pemesanan minimal 1 hari sebelumnya untuk kue khusus</li>
                      <li>Konfirmasi pemesanan akan dikirim melalui WhatsApp</li>
                      <li>Pemesanan dianggap sah setelah konfirmasi pembayaran</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Pembatalan Pesanan</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Pembatalan dapat dilakukan maksimal 24 jam sebelum pengiriman</li>
                      <li>Uang akan dikembalikan 100% untuk pembatalan tepat waktu</li>
                      <li>Pembatalan kurang dari 24 jam dikenakan biaya 50%</li>
                      <li>Pesanan yang sudah dibuat tidak dapat dibatalkan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Syarat Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Metode Pembayaran</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Transfer Bank (BCA, Mandiri, BNI)</li>
                      <li>E-Wallet (GoPay, OVO, DANA)</li>
                      <li>Pembayaran tunai (cash on delivery)</li>
                      <li>Pembayaran di tempat (untuk take away)</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ketentuan Pembayaran</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Pembayaran penuh harus dilakukan sebelum pengiriman</li>
                      <li>Untuk pesanan besar, DP 50% diperlukan</li>
                      <li>Bukti pembayaran harus dikirim via WhatsApp</li>
                      <li>Harga sudah termasuk PPN (jika berlaku)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Pengiriman</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Area Pengiriman</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Cikembar dan sekitarnya: Gratis ongkir (minimum order)</li>
                      <li>Sukabumi Kota: Biaya pengiriman sesuai jarak</li>
                      <li>Luar kota: Menggunakan jasa ekspedisi</li>
                      <li>Take away: Tidak ada biaya tambahan</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Waktu Pengiriman</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Pengiriman: 08:00 - 17:00</li>
                      <li>Same day delivery: Order sebelum 10:00</li>
                      <li>Next day delivery: Order sebelum 20:00</li>
                      <li>Pengiriman hari libur: Berlaku biaya tambahan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Returns and Refunds */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Pengembalian dan Refund</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Kondisi Pengembalian</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Produk rusak saat diterima</li>
                      <li>Produk tidak sesuai pesanan</li>
                      <li>Kualitas produk tidak memenuhi standar</li>
                      <li>Keluhan harus disampaikan maksimal 2 jam setelah penerimaan</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proses Refund</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Foto produk rusak harus dikirim sebagai bukti</li>
                      <li>Refund akan diproses maksimal 3x24 jam</li>
                      <li>Penggantian produk atau uang kembali 100%</li>
                      <li>Ongkir pengembalian ditanggung pembeli</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
                  <h2 className="text-2xl font-semibold">Batasan Tanggung Jawab</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>ZAHRA PUTRIA AYUNI ASSYAMSUDIN</strong> tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Keterlambatan pengiriman karena faktor eksternal (macet, cuaca, dll)</li>
                  <li>Alergi atau reaksi kesehatan akibat konsumsi produk</li>
                  <li>Kerusakan produk karena penanganan yang salah setelah diterima</li>
                  <li>Kehilangan produk setelah diterima pembeli</li>
                  <li>Kerugian tidak langsung yang timbul dari penggunaan produk kami</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Hak Kekayaan Intelektual</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Semua konten di website dan materi promosi <strong>ZAHRA PUTRIA AYUNI ASSYAMSUDIN</strong>, 
                  termasuk namun tidak terbatas pada logo, resep, foto produk, dan desain, 
                  dilindungi oleh hak cipta dan merek dagang.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Dilarang menyalin, mendistribusikan, atau menggunakan materi kami tanpa izin</li>
                  <li>Resep produk adalah rahasia dagang dan tidak dapat dipublikasikan</li>
                  <li>Foto produk hanya boleh digunakan untuk review dengan mencantumkan sumber</li>
                  <li>Pelanggaran hak kekayaan intelektual akan ditindak sesuai hukum</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-pink-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan kami, 
                  silakan hubungi kami:
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
                Syarat & Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID')}
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
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors">Terms & Conditions</Link>
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