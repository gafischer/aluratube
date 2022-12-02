import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export const subscribe = (table, onSuccess, event = "*") => {
	const subscription = supabase
		.channel(`public:${table}`)
		.on(
			"postgres_changes",
			{ event: `${event}`, schema: "public", table: `${table}` },
			async (payload) => {
				onSuccess(payload.new);
			}
		)
		.subscribe();

	return subscription;
};

export default supabase;
