import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Enterprise | Spaceborn',
  description: 'Intelligent Autonomy for Modern Enterprises.',
};

export default function EnterprisePage() {
  return (
    <CompanyPageLayout
      title="ENTERPRISE"
      subtitle="Intelligent Autonomy for Modern Enterprises."
      paragraphs={[
        'Spaceborn enables enterprises to deploy autonomous technologies that improve operational efficiency, reduce costs, and enhance workplace safety. Through intelligent software, simulation, fleet management, and analytics, organizations can build scalable autonomous operations.',
        'Modern enterprises increasingly rely on intelligent systems to automate inspections, monitor assets, optimize workflows, and improve productivity. Spaceborn provides the software infrastructure required to support these operations.',
        'Simulation tools allow organizations to evaluate autonomous workflows before deployment. Digital Twins provide real-time visibility into operations, while Fleet Manager enables centralized control of distributed autonomous assets.',
        'Whether managing a single facility or multiple locations, enterprises can leverage autonomy to improve decision-making and operational performance.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Enterprise fleet management',
            'Digital twins',
            'Predictive maintenance',
            'AI-powered analytics',
            'Remote operations',
            'Operational intelligence',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Industrial automation',
            'Asset inspection',
            'Infrastructure monitoring',
            'Warehouse operations',
            'Security systems',
            'Smart facilities',
          ],
        },
      ]}
    />
  );
}
