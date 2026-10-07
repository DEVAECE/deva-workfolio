import { requireChatGPTUser } from '../chatgpt-auth';
import Portfolio from '../portfolio';
export const dynamic='force-dynamic';
export default async function Page(){await requireChatGPTUser('/manage');return <Portfolio manage/>;}
