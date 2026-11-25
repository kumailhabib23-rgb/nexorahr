import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Users, CalendarDays, Wallet, ChartNoAxesCombined, ShieldCheck, ClipboardList, MessageCircle, Bot, Building2, Target, FolderCheck, Bell, FileSpreadsheet, LockKeyhole, BriefcaseBusiness, Sparkles, Check, Mail, Phone, MapPin, ChevronRight, Zap, Globe2, HeartHandshake, Clock3, Sun, Moon } from 'lucide-react';
import { Logo, Header, Footer, Card, PageHero, AboutHero, groups, featureSections, platformCapabilityCount, maxAreaCapabilityCount, solutions, homeAudiences, homeFaqs, fade } from '../shared.jsx';
import { solutionsArtwork, pricingArtwork, contactArtwork, featuresArtwork } from '../assets.jsx';
export function Home() {
    const overviewStats = [
        [Users, 'Connected areas', featureSections.length, 'Teams + partners'],
        [ClipboardList, 'Capabilities', platformCapabilityCount, `Across ${featureSections.length} areas`],
        [Bot, 'Shared workspace', 1, 'Shared teams']
    ];
    const trustItems = [
        [Zap, 'Automate workflows', 'Less admin, more impact'],
        [ChartNoAxesCombined, 'Track performance', 'Insights that move you forward'],
        [ShieldCheck, 'Protect your people', 'Permission-aware access'],
        [Globe2, 'Work from anywhere', 'Your HR, always in reach']
    ];
    const workflowSteps = [
        [Users, '01', 'Organize people work', 'Keep employee profiles, attendance, leave, and documents within a clear people workflow.'],
        [ClipboardList, '02', 'Make daily work visible', 'Assign tasks, set due dates, share updates, and keep progress in context.'],
        [HeartHandshake, '03', 'Collaborate with control', 'Give partners access to approved projects and keep AI support advisory.']
    ];

    return <>
        <section className="hero">
            <div className="hero-orb orb-one" />
            <div className="hero-orb orb-two" />
            <div className="container hero-grid">
                <motion.div className="hero-copy" initial="hidden" animate="show" variants={fade}>
                    <div className="eyebrow"><Sparkles size={15} /> Smarter HR. Stronger Teams.</div>
                    <h1>One platform for <span>people, projects & progress.</span></h1>
                    <p className="hero-lead">Bring HR management, team operations, AI assistance, and NGO partner collaboration together in one connected workspace.</p>
                    <div className="hero-buttons">
                        <a href="/contact" className="btn btn-primary btn-large">Explore Nexora HR <ArrowRight size={18} /></a>
                        <a href="/features" className="btn btn-outline btn-large">Discover features</a>
                    </div>
                    <div className="trust-row">
                        <div className="avatar-stack"><span>HR</span><span>TM</span><span>AI</span><span>+</span></div>
                        <div><strong>Built for connected teams</strong><small>From employee records to partner projects</small></div>
                    </div>
                </motion.div>
                <motion.div className="hero-visual" initial={{ opacity: 0, scale: .9, x: 35 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .8, delay: .15 }}>
                    <div className="visual-glow" />
                    <div className="people-art">
                        <div className="person person-back person-left"><div className="person-head" /><div className="person-body" /></div>
                        <div className="person person-back person-right"><div className="person-head" /><div className="person-body" /></div>
                        <div className="person person-front"><div className="person-head" /><div className="person-body" /><div className="person-shirt" /></div>
                    </div>
                    <motion.div className="floating-card growth-card" animate={{ y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                        <span className="mini-icon"><Users size={18} /></span>
                        <div><small>Team collaboration</small><strong>Connected</strong></div>
                    </motion.div>
                    <motion.div className="floating-card overview-card" animate={{ y: [0, 7, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                        <div className="overview-top"><strong>HR Workspace</strong><small>Platform overview</small></div>
                        <div className="overview-stats">
                            {overviewStats.map(([Icon, label, value, note]) => <div key={label}>
                                <span className="stat-icon violet"><Icon size={15} /></span>
                                <small>{label}</small>
                                <b>{value}</b>
                                <em>{note}</em>
                            </div>)}
                        </div>
                        <div className="chart-label">One connected workspace <span>All teams</span></div>
                        <svg className="overview-chart" viewBox="0 0 330 72"><path d="M0 60 C25 54 31 34 58 42 S94 51 118 31 S160 43 184 28 S222 38 246 18 S292 26 330 5" fill="none" stroke="#5b50ed" strokeWidth="3" /></svg>
                    </motion.div>
                    <div className="floating-pill"><Zap size={15} /> HR made effortless</div>
                </motion.div>
            </div>
        </section>
        <section className="trust-strip">
            <div className="container trust-items">
                {trustItems.map(([Icon, title, description]) => <div key={title}><Icon /><span><b>{title}</b><small>{description}</small></span></div>)}
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="section-heading">
                    <div className="eyebrow centered">Platform capabilities</div>
                    <h2>Everything your organization needs, <span>in one place.</span></h2>
                    <p>Purpose-built tools for people management, collaboration, and partner operations.</p>
                </div>
                <div className="expanded-feature-grid">
                    {groups.map(group => {
                        const highlights = group.items
                            ? group.items.slice(0, 3).map(([title]) => title)
                            : [group.sections[0].items[0][0], group.sections[0].items[1][0], group.sections[1].items[1][0]];

                        return <motion.a href={group.path} className="home-feature" key={group.path} whileHover={{ y: -8 }}>
                            <span className="feature-icon violet"><group.icon /></span>
                            <h3>{group.name}</h3>
                            <p>{group.desc}</p>
                            <ul className="home-feature-highlights">{highlights.map(highlight => <li key={highlight}><Check size={14} />{highlight}</li>)}</ul>
                            <b>Explore {group.name} <ArrowRight size={15} /></b>
                        </motion.a>;
                    })}
                </div>
            </div>
        </section>
        <section className="section home-workflow-section">
            <div className="container">
                <div className="section-heading">
                    <div className="eyebrow centered">How it works together</div>
                    <h2>From people operations to <span>shared progress.</span></h2>
                    <p>Keep essential people work, team coordination, and partner collaboration connected in one practical flow.</p>
                </div>
                <div className="home-workflow-grid">
                    {workflowSteps.map(([Icon, number, title, description]) => <motion.article className="home-workflow-card" key={number} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -6 }}>
                        <span className="home-workflow-number">{number}</span>
                        <span className="feature-icon violet"><Icon size={22} /></span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </motion.article>)}
                </div>
                <div className="home-workflow-link"><a className="text-link" href="/features">See all platform capabilities <ArrowRight size={16} /></a></div>
            </div>
        </section>
        <section className="section home-audience-section">
            <div className="container">
                <div className="section-heading">
                    <div className="eyebrow centered">One platform, different roles</div>
                    <h2>Useful for the people doing <span>the work.</span></h2>
                    <p>Give each group a clear place in the same connected workspace.</p>
                </div>
                <div className="home-audience-grid">
                    {homeAudiences.map(({ icon: Icon, title, desc, href, highlights }) => <motion.a className="home-audience-card" href={href} key={title} whileHover={{ y: -6 }}>
                        <div className="home-audience-top"><span className="feature-icon violet"><Icon size={22} /></span><span className="home-audience-label">BUILT FOR YOUR TEAM</span></div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                        <ul>{highlights.map(highlight => <li key={highlight}><Check size={14} />{highlight}</li>)}</ul>
                        <span className="home-audience-link">Explore this area <ArrowRight size={15} /></span>
                    </motion.a>)}
                </div>
            </div>
        </section>
        <section className="section home-faq-section">
            <div className="container">
                <div className="section-heading">
                    <div className="eyebrow centered">Quick answers</div>
                    <h2>A few things teams <span>often ask.</span></h2>
                    <p>Learn how Nexora brings people, work, AI assistance, and partners together.</p>
                </div>
                <div className="home-faq-list">
                    {homeFaqs.map(([question, answer], index) => <details className="home-faq-item" key={question} open={index === 0}>
                        <summary>{question}<span aria-hidden="true" /></summary>
                        <p>{answer}</p>
                    </details>)}
                </div>
                <div className="home-faq-contact">Have another question? <a href="/contact">Talk to our team <ArrowRight size={15} /></a></div>
            </div>
        </section>
        <section className="cta-section">
            <div className="container cta-box">
                <div className="cta-spark"><Sparkles /></div>
                <div>
                    <div className="eyebrow">Your next chapter starts here</div>
                    <h2>Ready to make HR feel <span>human again?</span></h2>
                    <p>Tell us about your organization and the teams you want to connect.</p>
                </div>
                <a className="btn btn-primary" href="/contact">Let's talk <ArrowRight /></a>
            </div>
        </section>
    </>;
}