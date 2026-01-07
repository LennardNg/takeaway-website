import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Takeaway — Event Organizers (Coming Soon)",
    description:
        "Takeaway Events is coming soon. Join the organizer waitlist for early access.",
};

export default function OrganizerComingSoonPage() {
    return (
        <div className="min-h-screen bg-linear-to-b from-white to-slate-50 text-[#111]">
            {/* Header */}
            <Header />

            {/* Body */}
            <main className="mx-auto max-w-295 px-6 pb-20 pt-14">
                <section className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
                    {/* Left */}
                    <div>
                        <p className="inline-flex items-center rounded-full bg-white/60 px-5 py-2 text-sm font-semibold text-[#2B55A0] ring-1 ring-black/5">
                            Events for Organizers • Coming Soon
                        </p>

                        <h1 className="mt-6 text-[56px] font-extrabold leading-[1.05] tracking-tight">
                            The organizer dashboard for{" "}
                            <span className="text-[#2B55A0]">
                                merchant events
                            </span>{" "}
                            is almost here.
                        </h1>

                        <p className="mt-6 text-[22px] leading-relaxed text-[#111]/75 max-w-2xl">
                            We’re building a streamlined way to run bazaars,
                            festivals and pop-ups — from merchant onboarding to
                            live sales visibility and post-event reconciliation.
                        </p>

                        {/* Highlights */}
                        <ul className="mt-10 space-y-4 text-[20px] text-[#111]/80">
                            {[
                                "Live merchant sales + performance overview",
                                "Commission rules and payout reconciliation",
                                "Merchant-friendly POS setup for fast onboarding",
                                "Roles and staff access for event operations",
                            ].map((t) => (
                                <li key={t} className="flex items-start gap-3">
                                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2B55A0] text-white">
                                        ✓
                                    </span>
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right card */}
                    <div className="lg:pt-10">
                        <div className="rounded-[28px] bg-white/60 p-8 shadow-sm ring-1 ring-black/5">
                            <h2 className="text-[28px] font-extrabold">
                                Launching soon for:
                            </h2>

                            <div className="mt-6 space-y-4 text-[18px] text-[#111]/80">
                                {[
                                    "Festivals & Bazaars",
                                    "Pasar Malam / Night Markets",
                                    "Campus Pop-ups",
                                    "Lifestyle Markets",
                                ].map((x) => (
                                    <div
                                        key={x}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#D7F0FF] text-[#2B55A0] font-bold">
                                            ✓
                                        </span>
                                        <span className="font-medium">{x}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 rounded-[20px] bg-[#F3F5F7] p-6 ring-1 ring-black/5">
                                <p className="text-2xl font-semibold text-[#2B55A0]">
                                    Want to talk?
                                </p>
                                <p className="text-lg mt-2 text-[#111]/75">
                                    If you’re organizing an upcoming market,
                                    we’d love to learn your workflow and pain
                                    points.
                                </p>
                                <div className="text-lg mt-2 text-[#111]/75">
                                    <text>Email us at </text>
                                    <text className="font-bold">
                                        sales@takeawayevents.com
                                    </text>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}
