import { FileText } from "lucide-react";
import NavLink from "./nav-link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <FileText className="w-6 h-6 text-gray-900" />
          <span className="font-bold text-lg text-gray-900">PDFly.ai</span>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row gap-5 ml-18 text-gray-600 text-sm">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#pricing">Pricing</NavLink>
          <span className="cursor-pointer hover:text-gray-900 transition-colors duration-200">
            About
          </span>
          <span className="cursor-pointer hover:text-gray-900 transition-colors duration-200">
            Contact
          </span>
          <span className="cursor-pointer hover:text-gray-900 transition-colors duration-200">
            Privacy Policy
          </span>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} PDFly.ai All rights reserved.
        </div>
      </div>
    </footer>
  );
}
