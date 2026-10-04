'use client';
import { 
  Search, 
  Globe, 
  User, 
  Play, 
  Plus, 
  ChevronRight, 
  Headphones, 
  Flame, 
  Crown, 
  Gift 
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Home() {
  // Dữ liệu mẫu (Mock data)
  const trendingMovies = [
    { id: 1, title: 'Forbidden Desire', color: 'bg-red-500' },
    { id: 2, title: "Rex's Law", color: 'bg-orange-500' },
    { id: 3, title: 'Pecado En La Carreta', color: 'bg-yellow-500' },
    { id: 4, title: 'The Flesh Trap', color: 'bg-purple-500' },
  ];

  const genericMovies = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white font-sans">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black/80 to-transparent fixed top-0 w-full z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="bg-orange-500 p-1.5 rounded">
              <Play fill="white" size={16} />
            </div>
            <span>THE SHORT MOVIES</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <a href="#" className="text-orange-500">Home</a>
            <a href="#" className="hover:text-white">Category</a>
            <a href="#" className="hover:text-white">Subscribe</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search dramas..." 
              className="bg-[#1f2129] border border-gray-700 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-orange-500 w-64"
            />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <Globe size={18} />
            <span className="text-sm">English</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer bg-[#1f2129] px-3 py-1.5 rounded-full border border-gray-700">
            <User size={18} />
            <span className="text-sm">Visitor</span>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="relative h-[80vh] flex items-center px-12 pt-20">
        {/* Background Overlay giả lập ảnh nền */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c10] via-[#0b0c10]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-slate-800 object-cover opacity-30" /> {/* Thay bằng ảnh nền thật */}

        <div className="relative z-20 max-w-2xl">
          <div className="flex gap-2 mb-4 text-xs font-semibold">
            <span className="bg-orange-500 px-2 py-1 rounded text-white">HOT</span>
            <span className="bg-gray-800 px-2 py-1 rounded">30 Episodes</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Mythology</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Secret</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Fantasy</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-4">
            The Pharaoh's <br /> Forbidden Bride
          </h1>
          
          <p className="text-gray-300 text-sm mb-8 leading-relaxed max-w-xl">
            Bound to the Prince, priestess Merit commits an unpardonable sin—giving her heart and soul to the ruthless Pharaoh himself. Trapped between a tyrant father and his bitter son, who will claim the forbidden bride?
          </p>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition">
              <Play fill="white" size={18} /> Watch Now
            </button>
            <button className="flex items-center gap-2 bg-[#1f2129] hover:bg-gray-700 text-white px-8 py-3 rounded-full font-bold transition">
              <Plus size={18} /> Add to List
            </button>
          </div>
        </div>

        {/* Thumbnail các tập phim bên phải */}
        <div className="relative z-20 ml-auto flex gap-3 hidden lg:flex">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="w-24 h-36 bg-gray-800 rounded-lg border-2 border-transparent hover:border-orange-500 cursor-pointer overflow-hidden">
               <div className="w-full h-full bg-slate-700 flex items-center justify-center text-xs text-gray-500">Ep {item}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-12 py-8 space-y-12">
        {/* MOST TRENDING */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Flame className="text-orange-500" />
            <h2 className="text-2xl font-bold">Most Trending</h2>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {trendingMovies.map((movie) => (
              <div key={movie.id} className="relative group cursor-pointer">
                {/* Ranking Badge */}
                <div className={`absolute -top-3 -left-3 w-10 h-10 ${movie.color} rounded-lg flex items-center justify-center font-bold text-lg z-10 shadow-lg`}>
                  {movie.id}
                </div>
                <div className="aspect-[3/4] bg-gray-800 rounded-xl overflow-hidden relative">
                   {/* Nút Play hiển thị khi hover */}
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                     <div className="bg-orange-500 p-3 rounded-full"><Play fill="white" /></div>
                   </div>
                </div>
                <h3 className="mt-3 font-semibold truncate">{movie.title}</h3>
                <p className="text-xs text-gray-400">Category | Category</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXCLUSIVE SERIES */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Crown className="text-orange-500" />
              <h2 className="text-2xl font-bold">Exclusive Series</h2>
            </div>
            <a href="#" className="flex items-center text-sm text-gray-400 hover:text-white">Explore More <ChevronRight size={16} /></a>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {genericMovies.map((item) => (
              <div key={item} className="w-[180px] flex-none cursor-pointer group">
                <div className="h-[250px] bg-gray-800 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                     <Play fill="white" size={32} />
                   </div>
                </div>
                <h3 className="mt-2 font-semibold text-sm truncate">Movie Title {item}</h3>
                <p className="text-[10px] text-gray-400">Category | Category</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEWLY RELEASED */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Gift className="text-orange-500" />
              <h2 className="text-2xl font-bold">Newly Released</h2>
            </div>
            <a href="#" className="flex items-center text-sm text-gray-400 hover:text-white">Explore More <ChevronRight size={16} /></a>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {genericMovies.map((item) => (
              <div key={item} className="w-[180px] flex-none cursor-pointer">
                <div className="h-[250px] bg-gray-800 rounded-lg"></div>
                <h3 className="mt-2 font-semibold text-sm truncate">New Drama {item}</h3>
                <p className="text-[10px] text-gray-400">Category | Category</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
{/* Đoạn code Footer đã được sửa */}
<div className="flex gap-3">
  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer">
    <FaFacebook size={16} color="white" />
  </div>
  <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer">
    <FaInstagram size={16} color="white" />
  </div>
  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer">
    <FaYoutube size={16} color="white" />
  </div>
</div>
    </div>
  );
}