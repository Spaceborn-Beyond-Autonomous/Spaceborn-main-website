import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Newsroom | Spaceborn',
  description: 'The Latest From Spaceborn.',
};

export default function NewsroomPage() {
  return (
    <CompanyPageLayout
      title="NEWSROOM"
      subtitle="The Latest From Spaceborn."
      paragraphs={[
        "The Newsroom serves as Spaceborn's official communication platform for company announcements, product updates, engineering insights, research developments, and industry perspectives.",
        'As autonomous technologies continue to evolve, transparency and knowledge sharing become increasingly important. The Newsroom provides customers, developers, researchers, and partners with insights into the technologies, products, and innovations being developed at Spaceborn.',
        'Beyond company announcements, the Newsroom includes technical articles, engineering blogs, research findings, case studies, and industry analysis that demonstrate how autonomous technologies are shaping the future.',
        'It serves as a bridge between the company, the developer community, industry partners, and the broader autonomy ecosystem.',
      ]}
      sections={[
        {
          title: 'Content Categories',
          items: [
            'Product Launches',
            'Engineering Blogs',
            'Research Publications',
            'Company News',
            'Industry Insights',
            'Case Studies',
            'Technical Tutorials',
            'Event Coverage',
          ],
        },
        {
          title: 'Future Topics',
          items: [
            'ANSA Updates',
            'Simulation Research',
            'AI & Robotics Articles',
            'Engineering Deep Dives',
            'Product Roadmaps',
            'Customer Stories',
          ],
        },
      ]}
      relatedLinks={[
        { label: 'About', href: '/company/about' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Partners', href: '/company/partners' },
        { label: 'Contact', href: '/company/contact' },
      ]}
    />
  );
}
