import React from 'react';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import DonorsContactsFeatures from '../../components/DonorsContactsFeatures';
import DonorsContactsCoreFeaturesGrid from '../../components/DonorsContactsCoreFeaturesGrid';
import WhoItsForRow from '../../components/WhoItsForRow';
import ModulesGrid from '../../components/ModulesGrid';
import FutureProof from '../../components/FutureProof';
import FoundersProgramCta from '../../components/FoundersProgramCta';
import CtaBanner from '../../components/CtaBanner';

export const metadata = {
    title: 'Donors & Contacts | HelpOne Software',
    description: '360° view. Lifetime value + engagement scoring. Unlimited records. Self-service portal. Form 990 integration.',
};

export default function DonorsContactsPage() {
    return (
        <main className="min-h-screen">
            <Hero
                badge="Donors & Contacts • Part of the HelpOne OS"
                title="Donors & Contacts,"
                titleAccent="Rebuilt for Impact."
                subtitle="360° view. Lifetime value + engagement scoring (cash + volunteer time + recency). Unlimited records. Self-service portal. Form 990 integration. Know every donor deeply — turn one-time givers into lifelong supporters."
             />

            <TrustBar
                items={[
                    "SOC 2 • PCI Level 1",
                    "AES-256 • GDPR",
                    "Built exclusively for nonprofits",
                    "30+ years nonprofit workflow expertise"
                ]}
            />

            <DonorsContactsFeatures />

            <DonorsContactsCoreFeaturesGrid />

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
                title="Ready to raise more with less effort?"
                subtitle="Let's make fundraising seamless and unlimited."
            />
        </main>
    );
}
