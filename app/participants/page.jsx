import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import ParticipantsFeatures from '../../components/ParticipantsFeatures';
import ParticipantsCoreFeaturesGrid from '../../components/ParticipantsCoreFeaturesGrid';
import WhoItsForRow from '../../components/WhoItsForRow';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import FoundersProgramCta from '../../components/FoundersProgramCta';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Participant CRM | HelpOne Software',
    description: '360° view. Lifetime value + engagement scoring. Unlimited records. Self-service portal. Deep integrations.',
};

export default function ParticipantsPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="Participants • Part of the HelpOne OS"
                title="Participants & CRM,"
                titleAccent="Rebuilt for Impact."
                subtitle="360° view. Lifetime value + engagement scoring (cash + volunteer time + recency). Unlimited records. Self-service portal. Deep integrations. Know every participant deeply — turn one-time donors into lifelong supporters."
             />

            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            <ParticipantsFeatures />

            <ParticipantsCoreFeaturesGrid />

            <WhoItsForRow
                title="Who It's For"
                items={[
                    'Faith Communities',
                    'Schools & Youth Groups',
                    'Animal Rescues',
                    'Arts & Culture Organizations',
                    'Community Groups',
                    'Environmental Causes'
                ]}
            />

            <ModulesGrid />

            <FutureProof />

            <FoundersProgramCta />

            <CtaBanner
                title="Ready to know every participant deeply?"
                subtitle="Let's turn one-time donors into lifelong supporters."
            />
        </main>
    );
}
