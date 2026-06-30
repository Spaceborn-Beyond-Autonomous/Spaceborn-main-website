import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Mission Studio | Spaceborn',
  description: 'Mission Planning Made Simple.',
};

export default function MissionStudioPage() {
  return (
    <CompanyPageLayout
      title="MISSION STUDIO"
      subtitle="Mission Planning Made Simple."
      paragraphs={[
        'Mission Studio is Spaceborn\'s mission planning and orchestration platform, designed to simplify the process of creating, managing, and executing autonomous operations. It provides operators, developers, and mission planners with an intuitive environment to design complex missions without sacrificing the flexibility required for advanced autonomous systems.',
        'Modern autonomous platforms rarely perform a single predefined task. They often need to navigate changing environments, coordinate with multiple systems, respond to unexpected events, and execute dynamic objectives. Mission Studio provides the tools required to transform high-level operational goals into structured mission plans that can be executed efficiently by ANSA-powered autonomous platforms.',
        'Built around a visual workflow, Mission Studio allows users to define waypoints, assign objectives, configure behaviors, establish safety constraints, and manage mission timelines through an organized interface. Instead of manually programming every action, operators can compose missions using reusable building blocks, reducing mission preparation time while improving consistency across deployments.',
        'Mission Studio integrates seamlessly with the broader Spaceborn ecosystem. Planned missions can be validated within Certanity before deployment, executed through ANSA during live operations, monitored by Fleet Manager, and enhanced using DERYK\'s AI-powered mission assistance. This connected workflow ensures that every mission progresses from planning to execution with minimal friction while maintaining operational visibility throughout its lifecycle.',
        'Whether supporting industrial inspections, autonomous drone operations, research experiments, emergency response, or future aerospace missions, Mission Studio provides a scalable platform for mission creation that adapts to both single-vehicle and multi-agent operations.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Visual Mission Editor',
            'Route & Waypoint Planning',
            'Mission Templates',
            'Task Sequencing',
            'Conditional Logic',
            'Fleet Assignment',
            'Mission Scheduling',
            'Mission History & Version Control',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Autonomous drone missions',
            'Multi-robot coordination',
            'Infrastructure inspections',
            'Surveying and mapping',
            'Emergency response operations',
            'Industrial automation',
            'Research experiments',
            'Aerospace mission planning',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'ANSA',
            'Certanity',
            'Fleet Manager',
            'DERYK AI Platform',
            'Reality Engine',
          ],
        },
      ]}
    />
  );
}
