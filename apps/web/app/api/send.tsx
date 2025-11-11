'use server'
import { render } from '@react-email/components';
import { VercelInviteUserEmail } from 'transactional/emails/vercel-invite-user';

export async function POST(username: string) {
  const emailHtml = await render(<VercelInviteUserEmail username={username} />);

  return new Response(emailHtml, {
    status: 200,
    headers: {
      'Content-Type': 'application/html'
    }
  });
}
