
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Menu, X, Users, CalendarDays, Wallet,
    ChartNoAxesCombined, ShieldCheck, ClipboardList,
    MessageCircle, Bot, Building2, Target, FolderCheck,
    Bell, FileSpreadsheet, LockKeyhole, BriefcaseBusiness,
    Sparkles, Check, Mail, Phone, MapPin, ChevronRight,
    Zap, Globe2, HeartHandshake, Clock3, Sun, Moon
} from 'lucide-react';

import solutionsArtwork from './assets/solutions-illustration.svg';
import pricingArtwork from './assets/pricing-illustration.svg';
import contactArtwork from './assets/contact-illustration.svg';
import featuresArtwork from './assets/features-illustration.svg';
import nexoraLogo from './assets/nexora-logo-cropped.png';

// ==========================================
// PLATFORM GROUPS
// ==========================================

export const groups = [
    {
        path: '/features#people',
        name: 'HR & People',
        eyebrow: 'PEOPLE MANAGEMENT',
        title: 'Make every people process feel effortless.',
        desc: 'A connected view of your workforce, from the first day to every milestone.',
        icon: Users,
        items: [
            ['Employee directory & profiles', Users, 'Create employee records, manage profiles, and keep workforce information organized.'],
            ['Attendance tracking', CalendarDays, 'Review attendance activity, daily summaries, and workforce availability.'],
            ['Leave management', Clock3, 'Review requests, follow approval workflows, and keep teams informed.'],
            ['Payroll records', Wallet, 'View payroll records and payment statuses in one organized workspace.'],
            ['Departments & positions', Building2, 'Organize teams, departments, roles, and reporting structures.'],
            ['Performance reviews', Target, 'Support goals, ratings, feedback, and structured conversations.'],
            ['Documents & verification', FolderCheck, 'Upload, organize, and review employee documents.'],
            ['HR reports', ChartNoAxesCombined, 'Turn workforce information into useful reports and summaries.'],
            ['Profile & account settings', LockKeyhole, 'Manage profile details, preferences, and password changes.']
        ]
    },
    {
        path: '/features#operations',
        name: 'Team Operations',
        eyebrow: 'TEAM OPERATIONS',
        title: 'Keep every team moving in the same direction.',
        desc: 'Coordinate assignments, deadlines, evidence, and conversations without losing context.',
        icon: ClipboardList,
        items: [
            ['Task creation & assignment', ClipboardList, 'Assign ownership with department, status, and search filters.'],
            ['Deadlines & progress', Target, 'Track due dates, progress updates, and task status across teams.'],
            ['Image evidence uploads', FolderCheck, 'Attach supporting images and evidence to task updates.'],
            ['In-app notifications', Bell, 'Keep employees and managers aware of relevant activity.'],
            ['HR deadline reviews', ShieldCheck, 'Review delays and employee explanations through a dedicated workflow.'],
            ['Team chat', MessageCircle, 'Support team communication with real-time messaging capabilities.'],
            ['Workspace preferences', Sparkles, 'Choose appearance preferences, themes, and layout options.']
        ]
    },
    {
        path: '/features#ai-assistance',
        name: 'AI & Partners',
        eyebrow: 'CONNECTED INTELLIGENCE',
        title: 'Smarter support. Stronger partnerships.',
        desc: 'Bring responsible AI assistance and permission-based partner collaboration together in one trusted workspace.',
        icon: Sparkles,
        sections: [
            {
                eyebrow: 'RESPONSIBLE AI',
                title: 'Helpful intelligence, with people in control.',
                desc: 'Practical AI support for everyday work, with clear boundaries and human oversight.',
                icon: Bot,
                items: [
                    ['HR assistant', Bot, 'Ask supported HR questions with answers scoped to permitted roles.'],
                    ['Task assistant', ClipboardList, 'Draft task content and get advisory analysis of updates and evidence.'],
                    ['Partner assistant', Globe2, 'Explore limited project-level aggregate information when enabled.'],
                    ['Human-led decisions', ShieldCheck, 'AI does not automatically create tasks, verify evidence, or make payroll decisions.']
                ]
            },
            {
                eyebrow: 'PARTNER COLLABORATION',
                title: 'Work together, without losing control.',
                desc: 'Give trusted partners the project access and tools they need - nothing more.',
                icon: HeartHandshake,
                items: [
                    ['Partner invitations', Users, 'Invite partner users and assign project or department access.'],
                    ['Project-scoped access', BriefcaseBusiness, 'Partners work within the projects and departments granted to them.'],
                    ['Scoped employee tools', Users, 'Allow viewing, adding, or editing selected employee details.'],
                    ['CSV exports', FileSpreadsheet, 'Enable report downloads when export permission is granted.'],
                    ['Granular permissions', LockKeyhole, 'Control names, work contacts, salary amounts, downloads, and partner AI.'],
                    ['Sensitive data boundaries', ShieldCheck, 'Salary visibility does not expose payroll runs, tax, or bank details.']
                ]
            }
        ]
    }
];

// ==========================================
// FEATURE SECTIONS
// ==========================================

export const featureSections = [
    { ...groups[0], id: 'people' },
    { ...groups[1], id: 'operations' },
    ...groups[2].sections.map((section, index) => ({
        ...section,
        name: index === 0 ? 'AI' : 'Partners',
        id: index === 0 ? 'ai-assistance' : 'partners'
    }))
];

export const platformCapabilityCount = featureSections.reduce(
    (total, section) => total + section.items.length,
    0
);

export const maxAreaCapabilityCount = Math.max(
    ...featureSections.map(section => section.items.length)
);

// ==========================================
// SOLUTIONS
// ==========================================

export const solutions = [
    ['Growing businesses', 'Build consistent people processes as your team grows.', Building2],
    ['People & HR teams', 'Bring employee information and daily HR work together.', Users],
    ['NGO & project teams', 'Coordinate departments, tasks, and approved partner access.', HeartHandshake],
    ['Distributed teams', 'Keep teams aligned with shared workflows and visibility.', Globe2]
];

// ==========================================
// HOME AUDIENCES
// ==========================================

export const homeAudiences = [
    {
        icon: Users,
        title: 'People & HR teams',
        desc: 'Keep employee information and everyday people processes clear and organized.',
        href: '/features#people',
        highlights: groups[0].items.slice(0, 3).map(([title]) => title)
    },
    {
        icon: ClipboardList,
        title: 'Managers & employees',
        desc: 'Keep assignments, deadlines, evidence, and team conversations connected.',
        href: '/features#operations',
        highlights: groups[1].items.slice(0, 3).map(([title]) => title)
    },
    {
        icon: HeartHandshake,
        title: 'NGO & project partners',
        desc: 'Work together within the projects and permissions your organization grants.',
        href: '/features#partners',
        highlights: groups[2].sections[1].items.slice(0, 3).map(([title]) => title)
    }
];

// ==========================================
// FAQ
// ==========================================

export const homeFaqs = [
    [
        'What can Nexora HR help our team manage?',
        'Nexora brings people records, attendance and leave, team tasks, responsible AI assistance, and partner collaboration into one connected platform.'
    ],
    [
        'Can partner access be limited to selected projects?',
        'Yes. Partner access is designed to be project- and permission-scoped, including selected employee tools and exports when granted.'
    ],
    [
        'Does the AI make HR or payroll decisions?',
        'No. AI assistance is advisory. It does not automatically make payroll decisions, verify evidence, or replace human judgment.'
    ],
    [
        'Is Nexora only for NGO teams?',
        'No. The platform is designed for growing businesses, HR teams, distributed teams, and organizations coordinating work with NGO partners.'
    ]
];

// ==========================================
// ANIMATION
// ==========================================

export const fade = {
    hidden: {
        opacity: 0,
        y: 24
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55
        }
    }
};

// ==========================================
// LOGO
// ==========================================

export function Logo() {
    return (
        <a className="brand" href="/" aria-label="Nexora HR home">
            <img
                className="brand-logo"
                src={nexoraLogo}
                alt="Nexora HR"
            />
        </a>
    );
}

// ==========================================
// HEADER / NAVIGATION
// ==========================================

export function Header() {
    const [open, setOpen] = useState(false);

    const [dark, setDark] = useState(
        () => localStorage.getItem('nexora-theme') === 'dark'
    );

    const currentPath =
        window.location.pathname.replace(/\/$/, '') || '/';

    const activePath = [
        '/operations',
        '/ai-tools',
        '/partners'
    ].includes(currentPath)
        ? '/features'
        : currentPath;

    const links = [
        ['Home', '/'],
        ['Features', '/features'],
        ['Solutions', '/solutions'],
        ['About', '/about'],
        ['Pricing', '/pricing'],
        ['Contact', '/contact']
    ];

    useEffect(() => {
        document.documentElement.classList.toggle('nex-dark', dark);

        localStorage.setItem(
            'nexora-theme',
            dark ? 'dark' : 'light'
        );
    }, [dark]);

    return (
        <header className="header">
            <div className="container nav-wrap">

                <Logo />

                <nav className={open ? 'nav-links open' : 'nav-links'}>
                    {links.map(([name, path]) => (
                        <a
                            key={path}
                            href={path}
                            aria-current={
                                activePath === path ? 'page' : undefined
                            }
                            onClick={() => setOpen(false)}
                        >
                            {name}
                        </a>
                    ))}

                    <div className="mobile-actions">
                        <button
                            className="theme-toggle"
                            onClick={() => setDark(!dark)}
                            aria-label={
                                dark
                                    ? 'Switch to light theme'
                                    : 'Switch to dark theme'
                            }
                            aria-pressed={dark}
                        >
                            {dark ? <Sun size={17} /> : <Moon size={17} />}
                        </button>

                        <a className="btn btn-primary" href="/pricing">
                            Get Started <ArrowRight size={16} />
                        </a>
                    </div>
                </nav>

                <div className="nav-actions">
                    <button
                        className="theme-toggle"
                        onClick={() => setDark(!dark)}
                        aria-label={
                            dark
                                ? 'Switch to light theme'
                                : 'Switch to dark theme'
                        }
                        aria-pressed={dark}
                    >
                        {dark ? <Sun size={17} /> : <Moon size={17} />}
                    </button>

                    <a className="btn btn-primary nav-cta" href="/pricing">
                        Get Started <ArrowRight size={16} />
                    </a>
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    {open ? <X /> : <Menu />}
                </button>

            </div>
        </header>
    );
}

// ==========================================
// FOOTER
// ==========================================

export function Footer() {
    return (
        <footer className="footer">

            <div className="container footer-main">

                <div className="footer-brand">
                    <Logo />
                    <p>
                        Smarter HR. Stronger Teams.
                        <br />
                        A better workplace starts here.
                    </p>
                </div>

                <div>
                    <h4>Platform</h4>
                    <a href="/features">Features</a>
                </div>

                <div>
                    <h4>Company</h4>
                    <a href="/about">About Nexora</a>
                    <a href="/solutions">Solutions</a>
                    <a href="/pricing">Pricing</a>
                    <a href="/contact">Contact</a>
                </div>

                <div className="footer-login">
                    <h4>Ready to get started?</h4>
                    <p>Bring your people, projects, and partners together.</p>

                    <a className="btn btn-primary" href="/register">
                        Get started <ArrowRight size={15} />
                    </a>

                    <a href="mailto:hello@nexorahr.com">
                        <Mail size={14} /> hello@nexorahr.com
                    </a>
                </div>

            </div>

            <div className="container footer-bottom">
                <span>
                    © {new Date().getFullYear()} Nexora HR. All rights reserved.
                </span>

                <span>
                    Built for people. Designed for progress.
                </span>
            </div>

        </footer>
    );
}

// ==========================================
// FEATURE CARD
// ==========================================

export function Card({ item, i = 0 }) {
    const [title, Icon, desc] = item;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const handleEscape = event => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleEscape);
        };
    }, [open]);

    return (
        <>
            <motion.article
                className="feature-card expanded-feature-card"
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: (i % 3) * 0.07 }}
                whileHover={{ y: -7, scale: 1.015 }}
                onClick={() => setOpen(true)}
                onKeyDown={event => {
                    if (
                        event.key === 'Enter' ||
                        event.key === ' '
                    ) {
                        event.preventDefault();
                        setOpen(true);
                    }
                }}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`View details for ${title}`}
            >
                <div className="feature-icon violet">
                    <Icon size={22} />
                </div>

                <h3>{title}</h3>
                <p>{desc}</p>

                <span className="card-arrow">
                    <ArrowRight size={16} />
                </span>
            </motion.article>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="modal-backdrop feature-detail-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onMouseDown={event => {
                            if (event.target === event.currentTarget) {
                                setOpen(false);
                            }
                        }}
                    >
                        <motion.div
                            className="feature-detail-modal"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby={`feature-detail-title-${i}`}
                            initial={{ opacity: 0, y: 24, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 18, scale: 0.96 }}
                            transition={{ duration: 0.22 }}
                        >
                            <button
                                className="modal-close"
                                type="button"
                                onClick={() => setOpen(false)}
                                aria-label="Close feature details"
                            >
                                <X size={17} />
                            </button>

                            <div className="feature-detail-icon feature-icon violet">
                                <Icon size={28} />
                            </div>

                            <span className="feature-detail-label">
                                PLATFORM FEATURE
                            </span>

                            <h3 id={`feature-detail-title-${i}`}>
                                {title}
                            </h3>

                            <p>{desc}</p>

                            <div className="feature-detail-benefit">
                                <ShieldCheck size={18} />
                                <span>
                                    Designed for clear workflows,
                                    permission-aware access, and everyday team use.
                                </span>
                            </div>

                            <div className="feature-detail-actions">
                                <a className="btn btn-primary" href="/contact">
                                    Talk to our team <ArrowRight size={16} />
                                </a>

                                <button
                                    className="btn btn-outline"
                                    type="button"
                                    onClick={() => setOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// ==========================================
// PAGE HERO
// ==========================================

export function PageHero({
    tag,
    title,
    desc,
    artwork,
    artworkAlt,
    topCard = [
        Users,
        'Connected teams',
        'One shared workspace'
    ],
    bottomCard = [
        ChartNoAxesCombined,
        `${platformCapabilityCount} capabilities`,
        `Across ${featureSections.length} work areas`
    ]
}) {
    const [TopCardIcon, topCardTitle, topCardNote] = topCard;
    const [BottomCardIcon, bottomCardTitle, bottomCardNote] = bottomCard;

    return (
        <section className={`inner-hero${artwork ? ' inner-hero-with-art' : ''}`}>
            <div className="container">

                <motion.div
                    className="inner-hero-copy"
                    variants={fade}
                    initial="hidden"
                    animate="show"
                >
                    <span className="eyebrow">
                        <Sparkles size={14} />
                        {tag}
                    </span>

                    <h1>{title}</h1>
                    <p>{desc}</p>

                    <div className="hero-buttons">
                        <a className="btn btn-primary btn-large" href="/contact">
                            Talk to our team <ArrowRight size={17} />
                        </a>

                        <a className="btn btn-outline btn-large" href="/features">
                            Explore platform
                        </a>
                    </div>
                </motion.div>

                {artwork && (
                    <motion.div
                        className="inner-hero-art"
                        initial={{ opacity: 0, scale: 0.94, x: 18 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inner-hero-art-glow" />

                        <div className="inner-hero-art-frame">
                            <img src={artwork} alt={artworkAlt} />
                        </div>

                        <div className="inner-hero-float-card inner-hero-float-card-top">
                            <span className="inner-hero-float-icon">
                                <TopCardIcon size={17} />
                            </span>

                            <span>
                                <b>{topCardTitle}</b>
                                <small>{topCardNote}</small>
                            </span>

                            <span className="inner-hero-float-check">
                                <Check size={14} />
                            </span>
                        </div>

                        <div className="inner-hero-float-card inner-hero-float-card-bottom">
                            <span className="inner-hero-float-icon mint">
                                <BottomCardIcon size={17} />
                            </span>

                            <span>
                                <b>{bottomCardTitle}</b>
                                <small>{bottomCardNote}</small>
                            </span>

                            <span className="inner-hero-float-check">
                                <Check size={14} />
                            </span>
                        </div>
                    </motion.div>
                )}

                <div className="inner-orb orb-a" />
                <div className="inner-orb orb-b" />

            </div>
        </section>
    );
}

// ==========================================
// ABOUT HERO
// ==========================================

export function AboutHero() {
    return (
        <section className="about-hero">

            <div className="container about-hero-grid">

                <motion.div
                    className="about-hero-copy"
                    variants={fade}
                    initial="hidden"
                    animate="show"
                >
                    <span className="eyebrow">
                        <HeartHandshake size={15} />
                        A BETTER WAY TO WORK
                    </span>

                    <h1>
                        Technology should make work
                        <span> more human.</span>
                    </h1>

                    <p>
                        Nexora HR connects people, projects, and partners
                        so teams can focus on the work that matters.
                    </p>

                    <div className="hero-buttons">
                        <a className="btn btn-primary btn-large" href="/contact">
                            Talk to our team <ArrowRight size={17} />
                        </a>

                        <a className="btn btn-outline btn-large" href="/features">
                            Explore platform
                        </a>
                    </div>

                    <div className="about-hero-trust">
                        <span><Check size={15} /></span>

                        <div>
                            <b>Built around people</b>
                            <small>Responsible AI. Human-led decisions.</small>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="about-hero-art"
                    initial={{ opacity: 0, scale: 0.94, x: 24 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.65 }}
                >
                    <div className="about-hero-art-glow" />

                    <div className="about-hero-image">
                        <img
                            src={solutionsArtwork}
                            alt="People working together with shared project information"
                        />
                    </div>

                    <div className="about-hero-stat about-hero-stat-top">
                        <span className="about-hero-stat-icon">
                            <Users size={17} />
                        </span>

                        <div>
                            <b>{featureSections.length} connected areas</b>
                            <small>One shared workspace</small>
                        </div>
                    </div>

                    <div className="about-hero-stat about-hero-stat-bottom">
                        <span className="about-hero-stat-icon mint">
                            <Sparkles size={17} />
                        </span>

                        <div>
                            <b>{platformCapabilityCount} useful capabilities</b>
                            <small>Designed for real team needs</small>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
