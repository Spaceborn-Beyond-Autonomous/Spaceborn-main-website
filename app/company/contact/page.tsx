import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Contact | Spaceborn',
  description: "Let's Build the Future Together.",
};

export default function ContactPage() {
  return (
    <CompanyPageLayout
      title="CONTACT"
      subtitle="Let's Build the Future Together."
      paragraphs={[
        "Whether you're exploring our platforms, interested in a partnership, looking for technical support, or simply want to learn more about Spaceborn, we'd love to hear from you.",
        'Our team works with startups, enterprises, researchers, educational institutions, and government organizations to develop intelligent autonomous systems that solve real-world challenges.',
        "Whatever your goals, we're here to help you find the right solution.",
        'Follow Spaceborn for product updates, engineering insights, research, and company news as we continue building the software infrastructure for intelligent autonomous systems.',
      ]}
      relatedLinks={[
        { label: 'About', href: '/company/about' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Partners', href: '/company/partners' },
        { label: 'Investors', href: '/company/investors' },
      ]}
    >
      <div className="company-contact-grid">
        <div className="company-contact-item">
          <h3>General Enquiries</h3>
          <p>Questions about Spaceborn, our technologies, or our company.</p>
        </div>
        <div className="company-contact-item">
          <h3>Sales</h3>
          <p>Learn how Spaceborn&apos;s platforms can support your organization.</p>
        </div>
        <div className="company-contact-item">
          <h3>Technical Support</h3>
          <p>Get assistance with our products, documentation, or developer resources.</p>
        </div>
        <div className="company-contact-item">
          <h3>Partnerships</h3>
          <p>Explore collaboration opportunities with Spaceborn.</p>
        </div>
        <div className="company-contact-item">
          <h3>Careers</h3>
          <p>Interested in joining our team? We&apos;d love to hear from you.</p>
        </div>
        <div className="company-contact-item">
          <h3>Media</h3>
          <p>For press enquiries, interviews, and media requests.</p>
        </div>
      </div>

      <div className="company-founder-block">
        <h2 className="company-section-title font-inter">Headquarters</h2>
        <p className="company-founder-name font-inter" style={{ fontSize: '20px' }}>
          Spaceborn Technologies
        </p>
        <p className="company-desc font-inter">
          Building the Future of Intelligent Autonomy.
        </p>
      </div>
    </CompanyPageLayout>
  );
}
