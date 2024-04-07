import { fail } from "@sveltejs/kit"

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals: { supabaseServiceRole } }) => {
    const formData = await request.formData()
    const errors: { [fieldName: string]: string } = {}

    const email = formData.get("email")?.toString() ?? ""
    if (email.length < 6) {
      errors["email"] = "Email is required"
    } else if (email.length > 500) {
      errors["email"] = "Email too long"
    } else if (!email.includes("@") || !email.includes(".")) {
      errors["email"] = "Invalid email"
    }

    console.log("errors:", errors)
    if (Object.keys(errors).length > 0) {
      return fail(400, { errors })
    }

    // Save to database
    const { error: insertError } = await supabaseServiceRole
      .from("emails")
      .insert({
        email,
        created_at: new Date(),
      })

    if (insertError) {
      return fail(500, { errors: { _: "Error saving" } })
    }

    return { success: true }
  },
}
