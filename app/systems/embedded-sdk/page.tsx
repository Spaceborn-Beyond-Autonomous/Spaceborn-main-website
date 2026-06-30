import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Embedded SDK | Spaceborn',
  description: 'Build Once. Integrate Everywhere.',
};

export default function EmbeddedSdkPage() {
  return (
    <CompanyPageLayout
      title="EMBEDDED SDK"
      subtitle="Build Once. Integrate Everywhere."
      paragraphs={[
        "The Embedded SDK is Spaceborn's software development kit for embedded systems, hardware integration, and autonomous platforms. It provides developers with APIs, libraries, drivers, firmware tools, and documentation required to build intelligent embedded applications.",
        'Developing autonomous hardware often requires extensive low-level programming and hardware-specific software. The Embedded SDK simplifies this process through standardized interfaces and reusable software components.',
        'The SDK includes support for sensors, communication systems, telemetry, diagnostics, mission execution, and device management. Developers can integrate custom hardware while maintaining compatibility with the broader Spaceborn ecosystem.',
        'Simulation integration allows embedded software to be validated before deployment, reducing development time and improving reliability.',
      ]}
      sections={[
        {
          title: 'SDK Components',
          items: [
            'Hardware Abstraction Layer',
            'Device Drivers',
            'Embedded APIs',
            'Firmware Libraries',
            'Communication Protocols',
            'Debugging Tools',
            'Example Projects',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Flight controllers',
            'Robotics systems',
            'Industrial automation',
            'Sensor integration',
            'Autonomous vehicles',
            'Aerospace systems',
          ],
        },
      ]}
    />
  );
}
