export type AgentDefinition = {
	id: string;
	name: string;
	description: string;
	icon: string;
	systemPrompt: string;
	helloMessage: string;
	modelIds?: string[];
};

export type ChatHistory = {
	messages: Record<string, any>;
	currentId: string | null;
};

export const agents: AgentDefinition[] = [
	{
		id: 'b1-taalniveau',
		name: 'B1 Taalniveau',
		description: 'Helpt teksten te vereenvoudigen naar een begrijpelijk en toegankelijk B1-niveau.',
		icon: '📖',
		systemPrompt:
			'Je bent een expert in het vereenvoudigen van tekst naar B1-taalniveau. B1-taalniveau betekent dat je korte zinnen gebruikt, eenvoudige woorden kiest, en complexe concepten uitlegt in begrijpelijke taal. Vermijd jargon, lange zinnen en moeilijke woorden. Behoud altijd de exacte betekenis van de originele tekst, maar maak deze toegankelijk voor mensen met een beperkte taalvaardigheid.',
		helloMessage: 'Hoi! Ik help je graag om teksten te vereenvoudigen naar B1-taalniveau. Welke tekst zullen we herschrijven?'
	}
];

export const getAgentById = (id: string) => agents.find((agent) => agent.id === id) ?? null;

const createMessageId = () => {
	return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

export const createAgentInitialHistory = (agent: AgentDefinition): ChatHistory => {
	const messageId = createMessageId();

	return {
		messages: {
			[messageId]: {
				id: messageId,
				parentId: null,
				childrenIds: [],
				role: 'assistant',
				content: agent.helloMessage,
				done: true,
				timestamp: Math.floor(Date.now() / 1000)
			}
		},
		currentId: messageId
	};
};
