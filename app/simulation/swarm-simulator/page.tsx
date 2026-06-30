import CompanyPageLayout from '../../../components/CompanyPageLayout';

export const metadata = {
  title: 'Swarm Simulator | Spaceborn',
  description: 'Simulate hundreds. Coordinate thousands.',
};

export default function SwarmSimulatorPage() {
  return (
    <CompanyPageLayout
      title="SWARM SIMULATOR"
      subtitle="Simulate Hundreds. Coordinate Thousands."
      paragraphs={[
        "Swarm Simulator is Spaceborn's large-scale multi-agent simulation platform designed to develop, test, and validate coordinated autonomous systems operating as intelligent swarms. It enables developers to simulate hundreds or even thousands of autonomous drones, robots, and vehicles working together in complex environments before deploying them in the real world.",
        'As autonomous technology advances, many missions can no longer be accomplished efficiently by a single machine. Applications such as aerial surveillance, search and rescue, environmental monitoring, precision agriculture, logistics, defense, and planetary exploration increasingly rely on multiple autonomous platforms working together as a coordinated fleet. Swarm Simulator provides a realistic environment where these large-scale operations can be designed, analyzed, and optimized without the cost and complexity of physical testing.',
        'The platform models the behavior of every individual autonomous agent while simultaneously simulating the interactions between the entire swarm. Each vehicle operates independently using its own perception, navigation, and decision-making systems while continuously communicating and coordinating with neighboring agents. This allows developers to study collective behaviors such as formation flying, collaborative mapping, distributed sensing, dynamic task allocation, obstacle avoidance, and autonomous decision-making under realistic operating conditions.',
        "Built upon Spaceborn's Reality Engine, Swarm Simulator accurately reproduces environmental factors including terrain, weather, communication latency, signal loss, sensor limitations, and dynamic obstacles. Developers can evaluate how swarms respond to unexpected events such as hardware failures, communication disruptions, changing mission objectives, or the loss of individual agents. This enables organizations to build resilient autonomous systems capable of adapting to real-world uncertainties.",
        'Swarm Simulator integrates seamlessly with the entire Spaceborn ecosystem. Missions created in Mission Studio can be executed simultaneously across multiple autonomous platforms running ANSA, while Fleet Manager provides centralized monitoring and operational oversight. Certanity enables scenario development and testing, Reality Engine delivers realistic simulation environments, and DERYK enhances swarm coordination through AI-assisted mission planning and intelligent decision support.',
        'The platform supports both centralized and decentralized coordination architectures, allowing developers to experiment with different communication strategies, leadership models, and collaborative behaviors. Whether designing coordinated drone inspections, autonomous warehouse fleets, military reconnaissance operations, disaster response teams, or future planetary exploration missions, Swarm Simulator provides the tools necessary to evaluate performance at scale.',
        'By enabling organizations to safely test complex multi-agent operations before physical deployment, Swarm Simulator reduces development costs, improves mission reliability, and accelerates the advancement of collaborative autonomous technologies that will define the future of intelligent systems.',
      ]}
      sections={[
        {
          title: 'Key Capabilities',
          items: [
            'Multi-Agent Simulation',
            'Large-Scale Fleet Coordination',
            'Formation Control',
            'Distributed Task Allocation',
            'Swarm Communication Modeling',
            'Dynamic Mission Execution',
            'Collision Avoidance',
            'Cooperative Navigation',
            'Failure & Recovery Simulation',
            'Real-Time Swarm Visualization',
            'Performance Analytics',
            'Scenario Replay',
          ],
        },
        {
          title: 'Applications',
          items: [
            'Drone swarm operations',
            'Search and rescue missions',
            'Defense reconnaissance',
            'Environmental monitoring',
            'Precision agriculture',
            'Warehouse robotics',
            'Autonomous logistics',
            'Smart city infrastructure',
            'Space robotics',
            'Academic research',
          ],
        },
        {
          title: 'Related Platforms',
          items: [
            'Reality Engine',
            'Certanity',
            'ANSA',
            'Mission Studio',
            'Fleet Manager',
            'DERYK AI Platform',
          ],
        },
      ]}
    />
  );
}
