import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-background border-t border-white/10 py-12 md:py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Brand */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-widest uppercase text-white">HORIZON</h2>
                    <p className="text-gray-400 text-sm max-w-xs">
                        Redefining vision with intelligence and precision engineering.
                    </p>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-12 md:gap-24">
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">Product</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-accent transition-colors">Frames</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Technology</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Lenses</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-accent transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Social */}
                <div className="flex gap-4">
                    <Link href="#" className="p-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-all">
                        <Twitter size={20} />
                    </Link>
                    <Link href="#" className="p-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-all">
                        <Instagram size={20} />
                    </Link>
                    <Link href="#" className="p-2 rounded-full border border-white/10 hover:border-accent hover:text-accent transition-all">
                        <Linkedin size={20} />
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                <p>© 2026 Horizon AI Glasses. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
