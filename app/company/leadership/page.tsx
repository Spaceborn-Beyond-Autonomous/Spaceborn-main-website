import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Leadership | Spaceborn',
  description: 'Building the Future Through Vision, Innovation, and Engineering Excellence.',
};

export default function LeadershipPage() {
  return (
    <CompanyPageLayout
      title="LEADERSHIP"
      subtitle="Building the Future Through Vision, Innovation, and Engineering Excellence."
      paragraphs={[
        'At Spaceborn, leadership is driven by a shared commitment to advancing autonomous technologies that solve meaningful real-world challenges. Our leadership team brings together expertise in software engineering, artificial intelligence, robotics, aerospace systems, and product development to build technologies that define the future of intelligent machines.',
        'We believe that successful innovation begins with a clear vision and strong engineering culture. Every decision at Spaceborn is guided by our commitment to creating reliable, scalable, and accessible autonomy platforms that empower developers, enterprises, governments, and research organizations around the world.',
        'Rather than operating as a traditional hierarchy, Spaceborn encourages collaboration across engineering, research, product design, and customer success. By maintaining close communication between teams, we ensure that every platform we build addresses real-world challenges while maintaining the highest standards of quality, reliability, and performance.',
        'As Spaceborn continues to grow, our leadership remains focused on long-term innovation, continuous learning, and responsible technology development. We believe that the future of autonomy will be built through collaboration, openness, and engineering excellence.',
      ]}
      sections={[
        {
          title: 'Leadership Principles',
          items: [
            'Customer-Driven Innovation',
            'Engineering Excellence',
            'Long-Term Thinking',
            'Open Collaboration',
            'Responsible AI Development',
            'Simulation-First Engineering',
          ],
        },
      ]}
      relatedLinks={[
        { label: 'About', href: '/company/about' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Partners', href: '/company/partners' },
        { label: 'Contact', href: '/company/contact' },
      ]}
    >
      <div className="company-founder-block">
        <p className="company-founder-role">Founder & Chief Executive Officer</p>
        <h2 className="company-founder-name font-inter">Adarsh Kumar</h2>
        <p className="company-desc font-inter">
          Founder and CEO of Spaceborn. Adarsh founded Spaceborn with the vision of building the
          software infrastructure that powers the next generation of intelligent autonomous systems.
          His focus spans autonomy software, simulation technologies, artificial intelligence, digital
          twins, and scalable engineering platforms that accelerate the development of robotics and
          aerospace systems.
        </p>
        <p className="company-desc font-inter">
          Under his leadership, Spaceborn is building an integrated ecosystem that enables
          organizations to develop, simulate, validate, and deploy autonomous technologies with
          confidence.
        </p>
      </div>
    </CompanyPageLayout>
  );
}
