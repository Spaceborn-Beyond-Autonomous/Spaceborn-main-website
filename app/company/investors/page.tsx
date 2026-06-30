import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Investors | Spaceborn',
  description: 'Building the Future of Autonomy.',
};

export default function InvestorsPage() {
  return (
    <CompanyPageLayout
      title="INVESTORS"
      subtitle="Building the Future of Autonomy."
      paragraphs={[
        'Spaceborn is building the software infrastructure that powers the next generation of autonomous systems across robotics, aerospace, enterprise, and intelligent industries.',
        'As autonomous technologies continue to reshape the global economy, we are focused on developing scalable platforms that simplify autonomy development while enabling organizations to deploy intelligent systems faster, safer, and more efficiently.',
        'Our integrated ecosystem combines autonomy software, simulation, digital twins, AI, fleet management, and embedded technologies into a unified platform designed for long-term innovation.',
        'We welcome conversations with investors who share our vision of building foundational technologies for the future of intelligent machines.',
      ]}
      sections={[
        {
          title: 'Investment Highlights',
          items: [
            'High-growth autonomy market',
            'Scalable software platform',
            'Simulation-first architecture',
            'Hardware-agnostic ecosystem',
            'Enterprise-ready technology',
            'Long-term product vision',
            'Strong engineering foundation',
          ],
        },
      ]}
      ctas={[
        {
          label: 'For investment opportunities or strategic discussions',
          buttonText: 'CONTACT INVESTOR RELATIONS',
          href: '/company/contact',
        },
      ]}
      relatedLinks={[
        { label: 'About', href: '/company/about' },
        { label: 'Leadership', href: '/company/leadership' },
        { label: 'Partners', href: '/company/partners' },
        { label: 'Contact', href: '/company/contact' },
      ]}
    />
  );
}
