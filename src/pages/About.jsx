import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Users, CalendarDays, Wallet, ChartNoAxesCombined, ShieldCheck, ClipboardList, MessageCircle, Bot, Building2, Target, FolderCheck, Bell, FileSpreadsheet, LockKeyhole, BriefcaseBusiness, Sparkles, Check, Mail, Phone, MapPin, ChevronRight, Zap, Globe2, HeartHandshake, Clock3, Sun, Moon } from 'lucide-react';
import { Logo, Header, Footer, Card, PageHero, AboutHero, groups, featureSections, platformCapabilityCount, maxAreaCapabilityCount, solutions, homeAudiences, homeFaqs, fade } from '../shared.jsx';
import { solutionsArtwork, pricingArtwork, contactArtwork, featuresArtwork } from '../assets.jsx';
export function About() {
    const stats = [
        { value: featureSections.length, label: 'Connected areas', note: 'People, operations, AI, and partners' },
        { value: platformCapabilityCount, label: 'Listed capabilities', note: 'Purpose-built tools across the platform' },
        { value: '1', label: 'Shared workspace', note: 'One place to bring teams together' }
    ];

    return <>
        <AboutHero />
        <section className="section about-overview">
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual">
                        <div className="about-panel">
                            <div className="panel-head"><i /><i /><i /><small>nexora / people insights</small></div>
                            <div className="panel-content">
                                <div className="panel-title">Your people. Your progress.</div>
                                <div className="panel-kpis">
                                    <div><small>Connected areas</small><b>{featureSections.length}</b><em>One connected platform</em></div>
                                    <div><small>Capabilities</small><b>{platformCapabilityCount}</b><em>Across {featureSections.length} work areas</em></div>
                                </div>
                                <div className="bar-chart" aria-label="Capabilities by work area">
                                    {featureSections.map(section => <span key={section.id} title={`${section.name}: ${section.items.length} capabilities`} style={{ height: `${Math.max(28, Math.round(section.items.length / maxAreaCapabilityCount * 100))}%` }} />)}
                                </div>
                                <div className="panel-legend">{featureSections.map(section => <span key={section.id}><i />{section.name}</span>)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="about-copy">
                        <div className="eyebrow">People-first by design</div>
                        <h2>Give your people team room to <span>do great things.</span></h2>
                        <p>Spend less time chasing updates and more time making work better.</p>
                        <ul>{['One connected employee experience', 'Clear workflows and timely approvals', 'Project-scoped partner collaboration', 'AI assistance with human oversight'].map(item => <li key={item}><Check />{item}</li>)}</ul>
                    </div>
                </div>
                <div className="about-facts" aria-label="Nexora HR platform facts">
                    {stats.map((stat, index) => <motion.article className="about-fact" key={stat.label} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: index * .08 }}><span className="about-fact-value">{stat.value}</span><div><h3>{stat.label}</h3><p>{stat.note}</p></div></motion.article>)}
                </div>
            </div>
        </section>
        <section className="section about-principles">
            <div className="container">
                <div className="about-principles-heading">
                    <span className="eyebrow">WHAT GUIDES US</span>
                    <h2>Built around people, not paperwork.</h2>
                    <p>Every part of the platform is designed to make work clearer, more connected, and more human.</p>
                </div>
                <div className="about-principles-grid">
                    {[[HeartHandshake, 'People first', 'Make everyday HR feel more thoughtful and easier to navigate.'], [ShieldCheck, 'Responsible by design', 'Keep sensitive information controlled and AI support under human oversight.'], [Globe2, 'Better together', 'Bring internal teams and trusted partners into shared workflows.']].map(([Icon, title, description]) => <motion.article key={title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -5 }}><span className="feature-icon violet"><Icon size={22} /></span><h3>{title}</h3><p>{description}</p></motion.article>)}
                </div>
            </div>
        </section>
    </>;
}