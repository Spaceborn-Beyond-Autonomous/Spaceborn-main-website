import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'ESC Systems | Spaceborn',
  description: 'Intelligent power delivery for autonomous platforms.',
};

export default function EscSystemsPage() {
  return (
    <CompanyPageLayout
      title="ESC SYSTEMS"
      subtitle="Intelligent Power Delivery for Autonomous Platforms."
      paragraphs={[
        'Spaceborn Electronic Speed Controller (ESC) Systems are high-performance motor control solutions engineered to provide precise, reliable, and efficient power management for autonomous aerial and robotic platforms. Acting as the critical interface between the flight controller and electric motors, ESC Systems ensure smooth motor operation, rapid response to control inputs, and dependable performance across a wide range of mission profiles.',
        'Every autonomous platform relies on accurate motor control to maintain stability, execute precise maneuvers, and respond instantly to changing flight conditions. Spaceborn ESC Systems are designed to deliver low-latency motor control while continuously monitoring electrical performance, temperature, and system health. This enables autonomous vehicles to achieve greater flight efficiency, improved maneuverability, and enhanced operational safety.',
        'Unlike conventional ESCs that simply regulate motor speed, Spaceborn ESC Systems function as intelligent power management modules. They continuously communicate with the Flight Controller, providing real-time telemetry including motor RPM, voltage, current consumption, power efficiency, operating temperature, and fault diagnostics. This constant flow of information allows the autonomy system to make informed decisions, optimize energy consumption, and identify potential hardware issues before they affect mission performance.',
        'Built for demanding operational environments, ESC Systems incorporate advanced protection mechanisms that safeguard both the propulsion system and the aircraft. Features such as over-current protection, thermal management, voltage monitoring, motor synchronization, and automatic fault detection help maintain reliable operation even under heavy loads or challenging environmental conditions. These capabilities are especially critical for enterprise drones, defense systems, industrial inspection platforms, and long-endurance autonomous missions where reliability is paramount.',
        'Spaceborn ESC Systems are fully integrated into the broader autonomy ecosystem. Working alongside Flight Controllers, ANSA, and Telemetry, they provide real-time propulsion data that can be monitored during live operations or analyzed after mission completion. Through Fleet Manager, operators gain visibility into propulsion system health across entire fleets, enabling predictive maintenance and reducing unexpected equipment failures.',
        'Designed with scalability in mind, the platform supports everything from lightweight quadcopters to heavy-lift multirotor systems and future autonomous aerial vehicles. As propulsion technologies continue to evolve, Spaceborn ESC Systems provide a modular foundation capable of supporting higher power outputs, improved energy efficiency, and next-generation autonomous flight capabilities.',
        'By combining intelligent motor control with continuous diagnostics and real-time communication, Spaceborn ESC Systems deliver the reliability, efficiency, and precision required to power the future of autonomous aviation.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'High-Efficiency Motor Control',
            'Low-Latency Response',
            'Real-Time RPM Monitoring',
            'Voltage & Current Measurement',
            'Temperature Monitoring',
            'Intelligent Fault Detection',
            'Over-Current Protection',
            'Thermal Protection',
            'Regenerative Power Monitoring',
            'High-Speed Digital Communication',
            'Multi-Motor Synchronization',
            'Integrated Telemetry',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Autonomous drones',
            'Heavy-lift UAVs',
            'Industrial inspection platforms',
            'Defense aerial systems',
            'Agricultural drones',
            'Delivery and logistics UAVs',
            'Research and development',
            'Future aerospace vehicles',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'Flight Controllers',
            'ANSA',
            'Telemetry',
            'Fleet Manager',
            'Embedded SDK',
            'Mission Studio',
          ],
        },
      ]}
    />
  );
}
