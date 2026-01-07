function Footer() {
    return (
        <footer className="mt-24 pb-10">
            <div className="h-px w-full bg-[#111]/20" />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[#111]/70">
                    © {new Date().getFullYear()} takeaway
                </span>
            </div>
        </footer>
    );
}

export default Footer;
