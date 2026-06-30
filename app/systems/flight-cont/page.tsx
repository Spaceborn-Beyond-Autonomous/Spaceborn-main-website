import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Flight Controllers | Spaceborn',
  description: 'Precision Control at the Core of Every Autonomous System.',
};

export default function FlightControllersPage() {
  return (
    <CompanyPageLayout
      title="FLIGHT CONTROLLERS"
      subtitle="Precision Control at the Core of Every Autonomous System."
      paragraphs={[
        'Spaceborn Flight Controllers are the real-time control systems that serve as the central computing unit for autonomous aerial platforms. Acting as the bridge between high-level autonomy software and physical hardware, they continuously process sensor data, execute flight control algorithms, and manage communication between onboard components to ensure safe, stable, and reliable operation throughout every mission.',
        'Every autonomous aircraft relies on a flight controller to maintain stability while responding to changing environmental conditions and mission requirements. Spaceborn Flight Controllers are engineered to provide deterministic, low-latency control for professional drone platforms ranging from compact research vehicles to enterprise-grade unmanned aerial systems. Designed with reliability, scalability, and modularity in mind, they form the hardware foundation of the Spaceborn autonomy ecosystem.',
        'The flight controller continuously collects information from onboard sensors including inertial measurement units (IMUs), GPS receivers, magnetometers, barometers, LiDAR sensors, cameras, and other navigation devices. This data is processed in real time to estimate the vehicle\'s state, maintain flight stability, execute navigation commands, and coordinate with higher-level autonomy modules running on ANSA. The result is smooth, responsive, and intelligent flight capable of adapting to dynamic environments.',
        'Built for seamless integration, Spaceborn Flight Controllers communicate directly with ESCs, payload systems, companion computers, telemetry modules, and ground control stations. Through support for standardized communication protocols and modular interfaces, developers can integrate custom sensors, AI accelerators, cameras, and mission-specific hardware without redesigning the core flight architecture.',
        'The platform supports a wide range of autonomous capabilities, including waypoint navigation, autonomous takeoff and landing, obstacle avoidance, precision hovering, return-to-home procedures, GPS-denied navigation, and fully autonomous mission execution. Combined with ANSA, Mission Studio, and Fleet Manager, the flight controller becomes part of a complete software-defined autonomy stack capable of supporting both research and commercial deployments.',
        'Spaceborn Flight Controllers are designed to meet the demanding requirements of industrial inspection, infrastructure monitoring, logistics, defense, agriculture, emergency response, and future aerospace applications. Their modular architecture ensures that new sensors, communication technologies, and autonomous capabilities can be incorporated as the platform evolves, extending hardware longevity while reducing development complexity.',
        'By combining robust embedded hardware with intelligent software integration, Spaceborn Flight Controllers provide the reliable foundation required to build the next generation of autonomous aerial systems.',
      ]}
      sections={[
        {
          title: 'Available Series',
          items: [
            'F7 Series – High-performance flight controller for advanced autonomous drones and research platforms.',
            'H7 Series – Enterprise-grade controller offering increased processing power, expanded connectivity, and support for complex AI workloads.',
            'Enterprise Series (Future) – Next-generation flight control platform designed for large autonomous fleets, aerospace systems, and mission-critical applications.',
          ],
        },
        {
          title: 'Key Capabilities',
          items: [
            'Real-Time Flight Control',
            'Sensor Fusion',
            'Autonomous Navigation',
            'Hardware Abstraction Layer Support',
            'Low-Latency Processing',
            'Multi-Sensor Integration',
            'Companion Computer Support',
            'Redundant Safety Systems',
            'High-Speed Communication Interfaces',
            'Expandable Modular Architecture',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Professional UAVs',
            'Autonomous inspection drones',
            'Defense and surveillance systems',
            'Industrial automation',
            'Agricultural drones',
            'Mapping and surveying',
            'Emergency response operations',
            'Research and educational platforms',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'ANSA',
            'Mission Studio',
            'Fleet Manager',
            'Telemetry',
            'Embedded SDK',
            'Reality Engine',
          ],
        },
      ]}
    />
  );
}
