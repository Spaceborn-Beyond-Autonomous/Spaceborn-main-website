import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Wildlife & Conservation | Spaceborn',
  description: 'Advancing Conservation Through Intelligent Autonomous Technologies.',
};

export default function WildlifeConservationPage() {
  return (
    <CompanyPageLayout
      title="WILDLIFE & CONSERVATION"
      subtitle="Advancing Conservation Through Intelligent Autonomous Technologies."
      paragraphs={[
        'Spaceborn supports conservation organizations, wildlife researchers, environmental agencies, and ecological institutions by providing autonomous technologies that enable safer, more efficient, and data-driven environmental monitoring. Through intelligent software, aerial robotics, high-fidelity simulation, and advanced sensing capabilities, Spaceborn helps organizations better understand and protect natural ecosystems while minimizing human impact on sensitive habitats.',
        'Monitoring large forests, wetlands, mountains, coastlines, and protected reserves often requires significant time, resources, and field personnel. Autonomous drones and robotic platforms equipped with intelligent navigation and advanced sensors can assist researchers by collecting environmental data, mapping habitats, monitoring ecosystem changes, and conducting routine surveys over large areas with minimal disturbance to wildlife.',
        'Using Certanity and Reality Engine, conservation teams can simulate monitoring missions before field deployment, optimizing flight paths, sensor placement, and operational procedures while accounting for terrain, weather, and environmental conditions. This simulation-first approach improves mission efficiency and reduces unnecessary field operations.',
        'ANSA enables autonomous platforms to safely navigate complex natural environments while collecting imagery, LiDAR data, and environmental measurements. Combined with Mission Studio, organizations can automate recurring monitoring missions, ensuring consistent data collection for long-term ecological studies and habitat management.',
        'Digital Twins provide virtual representations of protected landscapes and conservation sites, allowing researchers to compare historical and current environmental data, visualize ecosystem changes, and support long-term environmental planning. Fleet Manager enables centralized coordination of multiple autonomous platforms operating across large conservation areas while providing real-time telemetry and operational oversight.',
        'Spaceborn\'s technologies are designed to assist—not replace—the work of conservation professionals, scientists, and field researchers. By providing reliable tools for environmental data collection and analysis, Spaceborn helps organizations make informed decisions that support biodiversity, ecosystem resilience, and sustainable environmental management.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Autonomous Environmental Monitoring',
            'Habitat Mapping',
            'Aerial Survey Missions',
            'High-Fidelity Environmental Simulation',
            'Digital Twin Ecosystem Modeling',
            'LiDAR & Multisensor Data Collection',
            'Fleet Coordination',
            'Real-Time Telemetry',
            'Long-Term Environmental Analytics',
            'Repeatable Monitoring Workflows',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Wildlife Habitat Monitoring',
            'Forest Health Assessment',
            'Wetland & Coastal Surveys',
            'Biodiversity Research',
            'Protected Area Management',
            'Ecological Restoration Monitoring',
            'Environmental Impact Studies',
            'Natural Resource Management',
            'Conservation Research',
            'Climate & Ecosystem Observation',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'ANSA',
            'Certanity',
            'Reality Engine',
            'Mission Studio',
            'Fleet Manager',
            'Digital Twins',
            'LiDAR Simulator',
            'Telemetry',
          ],
        },
      ]}
    />
  );
}
