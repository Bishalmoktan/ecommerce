import React from "react";
import { ShoppingCart, Menu, X, Store } from "lucide-react";

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartItemsCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-amber-700 text-white fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Store className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Kathmandu Crafts</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-amber-200">
              Home
            </a>
            <button
              onClick={onCartClick}
              className="relative hover:text-amber-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-amber-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 hover:bg-amber-600">
              Home
            </a>
            <button
              onClick={onCartClick}
              className="w-full text-left px-3 py-2 hover:bg-amber-600 flex items-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({cartItemsCount})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
