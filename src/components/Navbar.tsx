"use client"; // Component này chạy hoàn toàn phía client (do có interactivity và styling động)

export default function Navbar() {
  return (
    // Thanh điều hướng cố định trên đầu, có hiệu ứng mờ nền
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md px-8 py-4 flex justify-between items-center">
      {/* Logo của trang, trỏ về đầu trang */}
      <div className="maxius-logo">
        <a href="#hero" className="text-2xl font-semibold text-white">
          Maxius
        </a>
      </div>

      {/* Menu điều hướng ẩn trên mobile, hiển thị trên desktop */}
      <ul className="hidden md:flex space-x-6 text-sm">
        <li>
          <a href="#features" className="hover:text-gray-300">
            Features
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
