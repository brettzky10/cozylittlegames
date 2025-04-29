"use server"

import { z } from "zod"
import { sendFeedbackEmail } from "@/lib/email"

const feedbackSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  overview: z.string().min(1, "Please provide a feedback overview"),
  game: z.enum(["small-defenders", "mleep-fruit", "guesser"], {
    errorMap: () => ({ message: "Please select a valid game" }),
  }),
  description: z.string().max(500, "Description must be 500 characters or less"),
})

export async function submitFeedback(prevState: any, formData: FormData) {
  try {
    // Extract and validate form data
    const validatedFields = feedbackSchema.safeParse({
      email: formData.get("email"),
      overview: formData.get("overview"),
      game: formData.get("game"),
      description: formData.get("description"),
    })

    if (!validatedFields.success) {
      return {
        success: false,
        error: validatedFields.error.errors[0]?.message || "Invalid form data",
      }
    }

    const { email, overview, game, description } = validatedFields.data

    // Get game display name
    const gameDisplayNames = {
      "small-defenders": "Small Defenders",
      "mleep-fruit": "Mleep Fruit",
      guesser: "Guesser",
    }

    // Send email
    await sendFeedbackEmail({
      userEmail: email,
      overview,
      game: gameDisplayNames[game],
      description,
    })

    return {
      success: true,
      error: "",
    }
  } catch (error) {
    console.error("Error submitting feedback:", error)
    return {
      success: false,
      error: "Failed to submit feedback. Please try again later.",
    }
  }
}
