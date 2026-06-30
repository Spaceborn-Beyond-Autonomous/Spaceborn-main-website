import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Edge Compute | Spaceborn',
  description: 'Intelligence at the Edge. Decisions in Real Time.',
};

export default function EdgeComputePage() {
  return (
    <CompanyPageLayout
      title="EDGE COMPUTE"
      subtitle="Intelligence at the Edge. Decisions in Real Time."
      paragraphs={[
        'Edge Compute is Spaceborn\'s onboard computing platform designed to bring high-performance processing, artificial intelligence, and autonomous decision-making directly to intelligent machines. Rather than relying on cloud connectivity for computation, Edge Compute enables autonomous systems to analyze sensor data, execute AI models, make navigation decisions, and respond to dynamic environments entirely on the vehicle itself, ensuring low-latency performance even in disconnected or mission-critical environments.',
        'Modern autonomous systems generate enormous amounts of data from cameras, LiDAR, radar, GPS, IMUs, and numerous onboard sensors. Transmitting all of this information to remote servers introduces latency, bandwidth limitations, and potential communication failures that can compromise mission success. Edge Compute eliminates these challenges by processing data locally, allowing autonomous platforms to make critical decisions within milliseconds.',
        'Built to support demanding AI and robotics workloads, the Edge Compute platform combines high-performance CPUs, GPUs, and AI accelerators within a compact, power-efficient architecture. This enables real-time perception, computer vision, sensor fusion, navigation, object detection, path planning, and mission execution while maintaining low power consumption and operational reliability.',
        'Edge Compute serves as the execution layer for ANSA\'s autonomy software and DERYK\'s AI capabilities. Navigation algorithms, machine learning models, perception pipelines, and mission logic all execute directly on the onboard computing system, allowing autonomous platforms to operate independently even in environments with little or no network connectivity. This is especially critical for defense operations, remote inspections, disaster response, industrial automation, and future space exploration missions where reliable communication cannot always be guaranteed.',
        'The platform is designed with scalability and modularity in mind, supporting a wide range of processors, AI accelerators, operating systems, and embedded hardware configurations. Developers can integrate custom applications, deploy machine learning models, process high-resolution sensor streams, and optimize workloads for specific mission requirements without changing the overall software architecture.',
        'Integrated throughout the Spaceborn ecosystem, Edge Compute works alongside Flight Controllers for real-time vehicle control, Sensor Modules for environmental perception, Telemetry for system monitoring, Fleet Manager for fleet-wide management, and Certanity for simulation-based software validation. Developers can train and validate AI models in simulation before deploying them directly to onboard computing systems with minimal changes to the software stack.',
        'As autonomous platforms continue to evolve toward greater intelligence and independence, Edge Compute provides the computational foundation required to support increasingly complex AI workloads while ensuring that critical decisions are made exactly where they matter most—at the edge.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'High-Performance Onboard Computing',
            'AI Model Inference',
            'Computer Vision Processing',
            'Real-Time Sensor Fusion',
            'Autonomous Decision Making',
            'GPU & AI Accelerator Support',
            'Low-Latency Processing',
            'Multi-Camera Processing',
            'Secure Edge Deployment',
            'Offline Autonomous Operation',
            'Containerized Application Support',
            'Hardware Acceleration',
          ],
        },
        {
          title: 'Applications',
          items: [
            'AI-powered drones',
            'Autonomous robotics',
            'Industrial inspection',
            'Defense and surveillance',
            'Smart infrastructure',
            'Autonomous vehicles',
            'Disaster response',
            'Space robotics',
            'Precision agriculture',
            'Research and development',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'ANSA',
            'DERYK AI Platform',
            'Flight Controllers',
            'Sensor Modules',
            'Telemetry',
            'Fleet Manager',
            'Reality Engine',
            'Certanity',
          ],
        },
      ]}
    />
  );
}
