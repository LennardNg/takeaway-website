"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Audience = "organizers" | "vendors";

function classNames(...xs: Array<string | false | null | undefined>) {
    return xs.filter(Boolean).join(" ");
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M5 12h12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
            <path
                d="M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

// Simple line icons to mimic the mockup’s outline look (no external libs)
function FeatureIcon({
    name,
}: {
    name:
        | "pos"
        | "tablet"
        | "commission"
        | "analytics"
        | "reconcile"
        | "roles"
        | "popups";
}) {
    const common = "h-9 w-9 text-[#2B55A0]";
    switch (name) {
        case "pos":
            return (
                <svg
                    className={common}
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M10 14h28v10H10V14Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M16 32h16"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M14 40h20"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M18 18h8"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M30 18h4"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case "tablet":
            return (
                <svg
                    className={common}
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden="true"
                >
                    <rect
                        x="13"
                        y="10"
                        width="22"
                        height="28"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M20 16h8"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M20 22h12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M20 28h10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case "commission":
            return (
                <svg
                    className={common}
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M14 34V16a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M18 22h12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M18 28h9"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M16 34h20"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M24 20l0 12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case "analytics":
            return (
                <svg
                    className={common}
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M10 38h28"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M14 34V26"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M22 34V18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M30 34V22"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M14 20l8-6 8 6 8-10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "reconcile":
            return (
                <svg
                    className={common}
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M16 14h16"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M16 22h10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M16 30h12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M30 28l3 3 5-7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="12"
                        y="10"
                        width="24"
                        height="28"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    />
                </svg>
            );
        case "roles":
            return (
                <svg
                    className={common}
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M18 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M30 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M10 38c1-7 6-11 12-11s11 4 12 11"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M28 38c.6-5 4-8 9-8"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case "popups":
        default:
            return (
                <svg
                    className={common}
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M12 20h24l-2 20H14l-2-20Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M18 20c0-5 2-8 6-8s6 3 6 8"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M16 28h16"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
            );
    }
}

export default function LandingPage() {
    const [audience, setAudience] = useState<Audience>("organizers");

    const hero = useMemo(() => {
        if (audience === "organizers") {
            return {
                headline: (
                    <>
                        Your{" "}
                        <span className="text-[#2B55A0]">entire event</span>,
                        managed on{" "}
                        <span className="text-[#2B55A0]">one dashboard</span>.
                    </>
                ),
                perfectForTitle: "Perfect for:",
                perfectFor: [
                    "Festivals & Bazaars",
                    "Pasar Malam / Night Markets",
                    "Campus Pop-ups",
                    "Lifestyle Markets",
                ],
                primary: {
                    label: "Create an Event",
                    href: "/event-organizer",
                },
                bullets: [
                    "Real-time visibility into vendor performance",
                    "Commission tracking baked into every sale",
                    "Organizer dashboard + vendor-friendly POS",
                ],
            };
        }

        return {
            headline: (
                <>
                    Focus on your <span className="text-[#2B55A0]">craft</span>—
                    Let us <span className="text-[#2B55A0]">takeaway</span> your
                    operational stress.
                </>
            ),
            perfectForTitle: "Perfect for:",
            perfectFor: [
                "Event Vendors",
                "Home-based Brands",
                "Cloud Kitchens",
                "Retail Storefronts",
            ],
            primary: { label: "Join as a Vendor", href: "/merchant-app" },
            bullets: [
                "Tablet-optimized order taking & payments",
                "Faster setup — reuse your menu and items",
                "Clear commission rates and payout reports",
            ],
        };
    }, [audience]);

    const features = useMemo(() => {
        // Right-side list in the mockup style, but events-focused.
        return [
            { icon: "pos" as const, label: "Event POS System" },
            { icon: "tablet" as const, label: "Vendor Tablet POS" },
            { icon: "commission" as const, label: "Commission Tracking" },
            { icon: "reconcile" as const, label: "Payout Reconciliation" },
            { icon: "analytics" as const, label: "Sales Analytics" },
            { icon: "roles" as const, label: "Roles & Staff Access" },
            { icon: "popups" as const, label: "Events Pop-up Online" },
        ];
    }, []);

    return (
        <div className="min-h-screen bg-[#F3F5F7] text-[#111]">
            {/* Top bar */}
            <Header />

            {/* HERO */}
            <main className="mx-auto max-w px-6 pb-20 pt-12">
                {/* tabs like mockup */}
                <div className="flex justify-center">
                    {/* Toggle switch between organizers and merchants */}
                    <div className="inline-flex rounded-full bg-slate-100 p-1">
                        <button
                            type="button"
                            onClick={() => setAudience("organizers")}
                            className={classNames(
                                "rounded-full px-6 py-3 text-lg font-bold transition",
                                audience === "organizers"
                                    ? "bg-white text-slate-900 shadow-sm"
                                    : "text-slate-600 hover:text-slate-900"
                            )}
                        >
                            For Organizers
                        </button>
                        <button
                            type="button"
                            onClick={() => setAudience("vendors")}
                            className={classNames(
                                "rounded-full px-6 py-3 text-lg font-bold transition",
                                audience === "vendors"
                                    ? "bg-white text-slate-900 shadow-sm"
                                    : "text-slate-600 hover:text-slate-900"
                            )}
                        >
                            For Vendors
                        </button>
                    </div>
                </div>

                <section className="grid gap-4 lg:grid-cols-5 lg:items-stretch mt-12">
                    {/* Left text block */}
                    <div className="col-span-2 lg:self-stretch flex items-center">
                        <h1 className="text-[56px] font-extrabold leading-[1.05] tracking-tight">
                            {hero.headline}
                        </h1>
                    </div>

                    {/* Right hero image */}
                    <div className="col-span-3 lg:self-stretch flex items-center justify-center lg:justify-end">
                        <div className="relative w-full">
                            <div className="relative aspect-video w-full overflow-hidden rounded-[42px] bg-black shadow-2xl">
                                <Image
                                    src={
                                        audience === "organizers"
                                            ? "/landing/Event_Org_Dashboard.png"
                                            : "/landing/merchant_POS_SS.png"
                                    }
                                    alt=""
                                    fill
                                    className="object-fill"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-4">
                    {/* Bullets (optional, but keeps event focus sharp) */}
                    <ul className="grid lg:grid-cols-2 mt-10 space-y-6 text-[28px]">
                        <li className="flex items-center gap-5">
                            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#2B55A0] text-white">
                                <CheckCircleIcon className="h-8 w-8" />
                            </span>
                            <span className="text-[#111]">
                                {hero.bullets[0]}
                            </span>
                        </li>
                        <li className="flex items-center gap-5">
                            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#2B55A0] text-white">
                                <CheckCircleIcon className="h-8 w-8" />
                            </span>
                            <span className="text-[#111]">
                                {hero.bullets[1]}
                            </span>
                        </li>
                        <li className="flex items-center gap-5">
                            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#2B55A0] text-white">
                                <CheckCircleIcon className="h-8 w-8" />
                            </span>
                            <span className="text-[#111]">
                                {hero.bullets[2]}
                            </span>
                        </li>
                    </ul>

                    {/* Perfect for */}
                    <div className="mt-12">
                        <p className="text-[40px] font-extrabold">
                            {hero.perfectForTitle}
                        </p>
                        <ul className="grid lg:grid-cols-2 mt-6 space-y-5 text-[30px]">
                            {hero.perfectFor.map((x) => (
                                <li key={x} className="flex items-center gap-5">
                                    <span className="grid h-14 w-14 place-items-center rounded-full bg-[#2B55A0] text-white">
                                        <CheckCircleIcon className="h-8 w-8" />
                                    </span>
                                    <span>{x}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTAs (pill style like mockup) */}
                    <div className="mt-14 flex flex-wrap justify-center items-center gap-10">
                        <Link
                            href={hero.primary.href}
                            className="inline-flex min-w-90 items-center justify-center gap-4 rounded-full bg-[#2B55A0] px-10 py-7 text-[26px] font-semibold text-white shadow-sm hover:brightness-95"
                        >
                            {hero.primary.label}
                            <ArrowRightIcon className="h-7 w-7" />
                        </Link>
                    </div>
                </section>

                <div className="my-12 h-0.5 w-full bg-black/20" />

                {/* SECTION 2 (matches mockup layout) */}
                <section className="mt-24 grid gap-16 lg:grid-cols-5">
                    {/* Left: headline + dashboard image */}
                    <div className="col-span-3 lg:flex lg:flex-col">
                        <h2 className="text-[62px] font-extrabold leading-[1.05] tracking-tight">
                            An <span className="text-[#2B55A0]">aesthetic</span>{" "}
                            dashboard <br />
                            operationally{" "}
                            <span className="text-[#2B55A0]">optimised</span>.
                        </h2>

                        {/* This fills leftover height and centers the image vertically */}
                        <div className="mt-10 lg:mt-0 lg:flex-1 lg:flex lg:items-center">
                            <div className="w-full">
                                <div className="relative aspect-video overflow-hidden rounded-[28px] border-2 border-[#2B55A0] bg-[#EAF3FF]">
                                    <Image
                                        src="/landing/dashboard.png"
                                        alt="Events dashboard preview"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Features list with icons */}
                    <div className="col-span-2 border-[#2952a3] border-4 rounded-[42px] shadow-2xl p-4">
                        <h3 className="text-[62px] font-extrabold leading-[1.05] tracking-tight">
                            Features:
                        </h3>

                        <ul className="mt-10 space-y-10">
                            {features.map((f) => (
                                <li
                                    key={f.label}
                                    className="flex items-center gap-8"
                                >
                                    <div className="shrink-0">
                                        <FeatureIcon name={f.icon} />
                                    </div>
                                    <span className="text-[34px] font-medium">
                                        {f.label}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Small Events MVP callout */}
                        <div className="mt-12 rounded-[22px] bg-white/60 p-6">
                            <p className="text-lg font-semibold text-[#111]">
                                Built for Singapore-style vendor events
                            </p>
                            <p className="mt-2 text-[#111]/70">
                                Organizers get control + visibility. Vendors get
                                a smooth, familiar POS. Commissions and
                                reconciliation are tracked end-to-end.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="my-12 h-0.5 w-full bg-black/20" />

                {/* Light extension: How it works (keeps the same aesthetic) */}
                <section className="mt-24">
                    <h3 className="text-[56px] font-extrabold leading-[1.05]">
                        From vendor onboarding to payouts — in 3 steps.
                    </h3>

                    <div className="mt-10 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "1) Create the event",
                                body: "Set dates, commission rules, and operational settings for the festival/bazaar.",
                            },
                            {
                                title: "2) Onboard vendors",
                                body: "Invite vendors, assign roles, and get them selling on the tablet POS quickly.",
                            },
                            {
                                title: "3) Track sales + reconcile",
                                body: "Monitor live performance, then export/confirm payouts with commission reporting.",
                            },
                        ].map((card) => (
                            <div
                                key={card.title}
                                className="rounded-[28px] bg-white/60 p-8 shadow-sm ring-1 ring-black/5"
                            >
                                <p className="text-[22px] font-semibold text-[#2B55A0]">
                                    {card.title}
                                </p>
                                <p className="mt-3 text-[20px] text-[#111]/75">
                                    {card.body}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 flex flex-wrap gap-8">
                        <Link
                            href="/event-organizer"
                            className="inline-flex items-center justify-center gap-4 rounded-full bg-[#2B55A0] px-10 py-6 text-[22px] font-semibold text-white hover:brightness-95"
                        >
                            Start an Event
                            <ArrowRightIcon className="h-6 w-6" />
                        </Link>

                        <Link
                            href="/merchant-app"
                            className="inline-flex items-center justify-center gap-4 rounded-full bg-[#D7F0FF] px-10 py-6 text-[22px] font-semibold text-[#111] hover:brightness-95"
                        >
                            Join as Vendor
                            <ArrowRightIcon className="h-6 w-6" />
                        </Link>
                    </div>
                </section>

                {/* Footer (simple, on-theme) */}
                <Footer />
            </main>
        </div>
    );
}
