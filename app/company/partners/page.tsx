import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Partners | Spaceborn',
  description: 'Building the Future Together.',
};

export default function PartnersPage() {
  return (
    <CompanyPageLayout
      title="PARTNERS"
      subtitle="Building the Future Together."
      paragraphs={[
        'Innovation is rarely achieved alone. At Spaceborn, we collaborate with organizations that share our vision of advancing intelligent autonomous systems through technology, research, and engineering excellence.',
        'Our partner ecosystem includes technology providers, hardware manufacturers, universities, research institutions, enterprise organizations, and strategic collaborators working together to accelerate the adoption of autonomy across industries.',
        'By combining expertise from different domains, we create solutions that are more reliable, scalable, and impactful than any organization could achieve independently.',
        "Whether you're building hardware, developing software, conducting research, or delivering enterprise solutions, we're always looking to collaborate with organizations that are shaping the future of intelligent systems.",
      ]}
      sections={[
        {
          title: 'Partnership Areas',
          items: [
            'Technology Partnerships',
            'Research Collaborations',
            'Academic Institutions',
            'Hardware Manufacturers',
            'OEM Integrations',
            'Enterprise Solutions',
            'Cloud Infrastructure',
            'System Integrators',
          ],
        },
      ]}
      ctas={[
        {
          label: 'Interested in building with Spaceborn?',
          buttonText: 'BECOME A PARTNER',
          href: '/company/contact',
        },
        {
          label: 'Already a partner?',
          buttonText: 'PARTNER LOGIN',
          href: '#login',
        },
      ]}
      relatedLinks={[
        { label: 'About', href: '/company/about' },
        { label: 'Leadership', href: '/company/leadership' },
        { label: 'Investors', href: '/company/investors' },
        { label: 'Contact', href: '/company/contact' },
      ]}
    />
  );
}
