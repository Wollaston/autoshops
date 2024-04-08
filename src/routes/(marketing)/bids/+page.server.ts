import { redirect } from "@sveltejs/kit"
import type { Actions } from "./$types"

export const actions: Actions = {
  default: async () => {
    throw redirect(303, "/bids/list")
  },
} satisfies Actions
