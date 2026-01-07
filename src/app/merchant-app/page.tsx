import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const FEATURES = [
    {
        title: "Fast checkout",
        desc: "Tap-to-sell with a POS flow designed for busy booths.",
    },
    {
        title: "Live sales + payouts",
        desc: "Track revenue, commissions, and settlement status in real time.",
    },
    {
        title: "Inventory + menu",
        desc: "Update items, pricing, and availability in seconds.",
    },
    {
        title: "Event-ready",
        desc: "Works for queues, peak hours, and multi-day events.",
    },
];

export default function MerchantsComingSoonPage() {
    return (
        <main className="min-h-screen bg-linear-to-b from-white to-slate-50">
            {/* Top bar */}
            <Header />

            {/* Hero */}
            <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-14 pt-8 lg:grid-cols-2 lg:items-center">
                {/* Left */}
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#2B55A0]/10 px-4 py-2 text-sm font-semibold text-[#2B55A0]">
                        Merchant App • Coming Soon
                    </div>

                    <h1 className="mt-6 text-[44px] font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-[56px]">
                        A merchant POS that feels familiar —
                        <span className="text-[#2B55A0]">
                            {" "}
                            built for your convenience
                        </span>
                        .
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                        Sell faster, track commissions automatically, and stay
                        in control during peak rush. The takeaway Merchant App
                        is launching soon for iOS and Android.
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-3">
                            {/* Replace with official badges if you have them */}
                            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                                iOS • Soon
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                                Android • Soon
                            </div>
                        </div>
                    </div>

                    {/* Trust row */}
                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
                        <span>✅ Familiar POS flow</span>
                        <span>✅ Works for queues</span>
                        <span>✅ Commission-ready</span>
                    </div>
                </div>

                {/* Right: phone mock */}
                <div className="relative">
                    <div className="relative mx-auto aspect-video w-full max-w overflow-hidden rounded-[42px] bg-slate-900 shadow-2xl">
                        {/* Replace with your actual screenshot */}
                        <Image
                            src={"/landing/merchant_POS_SS.png"}
                            alt=""
                            fill
                            className="object-fill"
                            priority
                        />
                    </div>

                    {/* Floating card */}
                    <div className="pointer-events-none absolute w-full mt-4 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-xl backdrop-blur">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-sm font-semibold text-slate-900">
                                    Built for Singapore-style vendor events
                                </p>
                                <p className="mt-1 text-sm text-slate-600">
                                    Smooth checkout • Live sales • End-to-end
                                    reconciliation
                                </p>
                            </div>
                            <div className="rounded-2xl bg-[#2B55A0]/10 px-3 py-1 text-xs font-semibold text-[#2B55A0]">
                                Beta soon
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="mx-auto h-px w-full max-w-6xl bg-slate-200/70" />

            {/* Features */}
            <section className="mx-auto w-full max-w-6xl px-6 py-16">
                <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                            What merchants get
                        </h2>
                        <p className="mt-4 text-slate-600">
                            A lightweight app designed for high-volume sales and
                            clean settlement after the event.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:col-span-2 sm:grid-cols-2">
                        {FEATURES.map((f) => (
                            <div
                                key={f.title}
                                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                {/* <div className="mb-4 h-10 w-10 rounded-2xl bg-[#2B55A0]/10" /> */}
                                <h3 className="text-lg font-bold text-slate-900">
                                    {f.title}
                                </h3>
                                <p className="mt-2 text-slate-600">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}
