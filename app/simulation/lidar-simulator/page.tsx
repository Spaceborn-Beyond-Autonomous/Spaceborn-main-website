import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'LiDAR Simulator | Spaceborn',
  description: 'Simulating Vision Beyond Sight.',
};

export default function LidarSimulatorPage() {
  return (
    <CompanyPageLayout
      title="LIDAR SIMULATOR"
      subtitle="Simulating Vision Beyond Sight."
      paragraphs={[
        "The LiDAR Simulator is Spaceborn's sensor simulation platform that generates realistic LiDAR data inside virtual environments. It enables developers to build, train, and validate perception algorithms without requiring expensive physical sensors or field testing.",
        'LiDAR is critical for autonomous navigation, mapping, localization, and obstacle detection. However, collecting real-world LiDAR data can be expensive and time-consuming. The LiDAR Simulator solves this problem by generating high-fidelity synthetic point clouds that closely resemble real-world sensor output.',
        'Built on Reality Engine, the simulator accurately models laser behavior, environmental interactions, terrain, obstacles, vegetation, buildings, and moving objects. Developers can customize sensor configurations including range, field of view, beam count, scanning frequency, and mounting position.',
        'By enabling rapid experimentation and validation, the LiDAR Simulator reduces development costs while improving perception system reliability.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Realistic point cloud generation',
            'Configurable sensor models',
            'Real-time scanning',
            'Dynamic environments',
            'Sensor replay',
            'Point cloud visualization',
            'Performance analysis',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Autonomous drones',
            'Robotics perception',
            'SLAM development',
            'Obstacle avoidance',
            'Mapping systems',
            'AI training',
          ],
        },
      ]}
    />
  );
}
