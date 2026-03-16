import AgentInterface from '@vadmin/components/agent-ui/AgentInterface';
import { Suspense } from 'react';

export default function AgentPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AgentInterface />
        </Suspense>
    );
}
