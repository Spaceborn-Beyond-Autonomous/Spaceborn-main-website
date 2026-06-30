import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Careers | Spaceborn',
  description: 'Build the Future of Intelligent Machines.',
};

export default function CareersPage() {
  return (
    <CompanyPageLayout
      title="CAREERS"
      subtitle="Build the Future of Intelligent Machines."
      paragraphs={[
        "At Spaceborn, we're building the technologies that will power the next generation of autonomous systems. From drones and robotics to industrial automation and future aerospace platforms, our work sits at the intersection of artificial intelligence, simulation, autonomy, and advanced software engineering.",
        "We're looking for curious minds, ambitious builders, and passionate engineers who want to solve complex technical challenges while creating products that have a real-world impact.",
        "Whether you're an experienced professional, a recent graduate, or a student looking for internship opportunities, Spaceborn offers an environment where learning, experimentation, and innovation are part of everyday work.",
        "We believe great ideas can come from anyone. That's why we foster a culture built on ownership, collaboration, continuous improvement, and technical excellence.",
      ]}
      sections={[
        {
          title: 'Why Join Spaceborn?',
          items: [
            'Work on cutting-edge autonomy technologies',
            'Build products with real-world impact',
            'Learn from experienced engineers',
            'Fast-paced startup environment',
            'Opportunities for growth and leadership',
            'Flexible and collaborative culture',
          ],
        },
        {
          title: 'Opportunities',
          items: [
            'Software Engineering',
            'Robotics Engineering',
            'AI & Machine Learning',
            'Simulation Engineering',
            'Embedded Systems',
            'Computer Vision',
            'Product Design',
            'Business Development',
            'Marketing & Communications',
            'Internships',
          ],
        },
        {
          title: 'Our Hiring Process',
          items: [
            'Application Review',
            'Technical Assessment',
            'Technical Interview',
            'Team Discussion',
            'Final Decision',
          ],
        },
      ]}
      ctas={[
        {
          label: 'Ready to build the future?',
          buttonText: 'VIEW OPENINGS',
          href: '#openings',
        },
        {
          label: 'Looking for an internship?',
          buttonText: 'INTERNSHIPS',
          href: '#internships',
        },
      ]}
      relatedLinks={[
        { label: 'About', href: '/company/about' },
        { label: 'Leadership', href: '/company/leadership' },
        { label: 'Contact', href: '/company/contact' },
      ]}
    />
  );
}
