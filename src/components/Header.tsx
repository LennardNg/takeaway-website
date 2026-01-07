import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="mx-auto max-w px-6 pt-6">
            <nav className="flex items-center justify-between">
                {/* Brand - matches mockup: large wordmark on left */}
                <Link href="/" className="flex items-center gap-3">
                    {/* Swap this image with your logo */}
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-[#0E1630]">
                        <Image
                            src="/landing/Takeaway_Logo.png"
                            alt="Takeaway"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    <span className="text-[44px] font-extrabold tracking-tight text-[#2B55A0] leading-none">
                        takeaway
                    </span>
                </Link>
            </nav>

            <div className="mt-5 h-px w-full bg-[#111]/20" />
        </header>
    );
}

export default Header;
