import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Government & Public Safety | Spaceborn',
  description: 'Empowering Safer Communities Through Intelligent Systems.',
};

export default function GovernmentPublicSafetyPage() {
  return (
    <CompanyPageLayout
      title="GOVERNMENT & PUBLIC SAFETY"
      subtitle="Empowering Safer Communities Through Intelligent Systems."
      paragraphs={[
        'Spaceborn develops autonomous technologies that support government agencies, emergency services, and public safety organizations in responding to critical situations with greater speed, accuracy, and situational awareness.',
        'Autonomous systems can assist in disaster response, infrastructure monitoring, emergency management, environmental observation, and search-and-rescue operations while reducing risks to human personnel.',
        'Simulation platforms enable agencies to train responders and validate operational scenarios before real-world deployment. GPS-denied navigation, intelligent perception, and real-time telemetry provide reliable operation in challenging environments.',
        'Fleet Manager enables centralized coordination of multiple autonomous assets during emergency operations.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Emergency mission planning',
            'Disaster response simulation',
            'Autonomous inspection',
            'GPS-denied navigation',
            'Real-time monitoring',
            'Fleet coordination',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Search and rescue',
            'Disaster management',
            'Infrastructure inspection',
            'Environmental monitoring',
            'Smart cities',
            'Emergency services',
          ],
        },
      ]}
    />
  );
}
