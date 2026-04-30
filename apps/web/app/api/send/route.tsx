import { render } from "react-email";
import { VercelInviteUserEmail } from "transactional/emails/vercel-invite-user";

export async function POST(request: Request) {
	const { username } = await request.json();

	const emailHtml = await render(<VercelInviteUserEmail username={username} />);

	return new Response(emailHtml, {
		status: 200,
		headers: {
			"Content-Type": "application/html",
		},
	});
}
