import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Telemetry | Spaceborn',
  description: 'Every Mission. Every Sensor. Every Insight.',
};

export default function TelemetryPage() {
  return (
    <CompanyPageLayout
      title="TELEMETRY"
      subtitle="Every Mission. Every Sensor. Every Insight."
      paragraphs={[
        'Telemetry is Spaceborn\'s real-time data acquisition, monitoring, and analytics platform that provides continuous visibility into the health, performance, and operational status of autonomous systems. It enables developers, operators, and organizations to collect, visualize, analyze, and replay mission data, transforming raw sensor information into actionable insights that improve system reliability, operational efficiency, and mission success.',
        'Every autonomous machine continuously generates vast amounts of data, including position, velocity, battery health, sensor measurements, processor performance, communication status, navigation decisions, environmental observations, and mission events. Managing and understanding this information is essential for safe and effective autonomous operations. Spaceborn Telemetry serves as the central intelligence layer that captures this data in real time and presents it through intuitive dashboards and analytical tools.',
        'Designed for both development and live operations, Telemetry allows engineers to observe the internal state of autonomous systems while missions are in progress. Operators can monitor flight paths, system health, communication quality, battery levels, sensor outputs, and mission progress from a centralized interface. Automatic alerts notify teams of abnormal conditions, allowing issues to be identified and resolved before they impact mission objectives.',
        'Beyond real-time monitoring, Telemetry provides comprehensive mission replay capabilities. Every mission is recorded and can be reconstructed for post-mission analysis, allowing engineers to review navigation decisions, inspect sensor data, evaluate AI behavior, and diagnose unexpected system responses. This capability significantly accelerates debugging, software validation, and performance optimization while creating valuable datasets for future development.',
        'Telemetry integrates seamlessly across the Spaceborn ecosystem. ANSA continuously streams operational data during mission execution, Fleet Manager aggregates telemetry from multiple autonomous platforms, Reality Engine and Certanity generate simulated telemetry during virtual testing, and DERYK analyzes historical mission data to provide intelligent recommendations and operational insights. This unified data pipeline ensures that developers and operators have complete visibility throughout the entire autonomy lifecycle.',
        'Built with scalability in mind, Telemetry supports deployments ranging from a single autonomous robot to thousands of connected systems operating simultaneously across distributed environments. Whether supporting industrial automation, defense operations, robotics research, infrastructure inspection, or future aerospace missions, Telemetry provides the operational awareness required to confidently manage autonomous technologies at scale.',
        'By turning continuous streams of machine data into meaningful operational intelligence, Telemetry empowers organizations to improve decision-making, enhance safety, optimize performance, and accelerate the development of next-generation autonomous systems.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Real-Time Data Streaming',
            'Live System Health Monitoring',
            'Mission Progress Tracking',
            'Sensor Data Visualization',
            'Battery & Power Monitoring',
            'Communication Diagnostics',
            'Performance Analytics',
            'Historical Mission Replay',
            'Event Logging',
            'Intelligent Alerts & Notifications',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Live drone operations',
            'Robotic fleet monitoring',
            'Industrial automation',
            'Infrastructure inspections',
            'Defense mission control',
            'Autonomous vehicle analytics',
            'Research and testing',
            'Predictive maintenance',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'ANSA',
            'Fleet Manager',
            'Certanity',
            'Reality Engine',
            'DERYK AI Platform',
          ],
        },
      ]}
    />
  );
}
