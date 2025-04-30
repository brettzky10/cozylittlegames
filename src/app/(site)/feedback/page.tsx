"use client"

import { useEffect, useState } from "react"
import { useFormState } from "react-dom"
import { submitFeedback } from "@/lib/actions/feedback"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Star } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const initialState = {
  success: false,
  error: "",
}

export default function FeedbackPage() {
  const [state, formAction] = useFormState(submitFeedback, initialState)
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const characterCount = description.length
  const isOverLimit = characterCount > 500
  const router = useRouter()

    // Show toast notifications when state changes
    useEffect(() => {
      if (state.success) {
        toast.success("Thank you for your feedback!", {
          description: "We will review it shortly.",
          icon: <CheckCircle2 className="h-5 w-5" />,
        })
        router.push("/")
      }
  
      if (state.error) {
        toast.error("Error submitting feedback", {
          description: state.error,
          icon: <AlertCircle className="h-5 w-5" />,
        })
      }
    }, [state])


  return (
    <div className="container max-w-2xl py-10 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Submit Feedback</CardTitle>
          <CardDescription>We value your feedback! Please let us know your thoughts about our games.</CardDescription>
        </CardHeader>
        <CardContent>
          {state.success && (
            <Alert className="mb-6 bg-green-50">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>Thank you for your feedback. We will review it shortly.</AlertDescription>
            </Alert>
          )}

          {state.error && (
            <Alert className="mb-6 bg-red-50" variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="overview">Feedback Overview</Label>
              <Input id="overview" name="overview" placeholder="Brief summary of your feedback" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="game">Select Game</Label>
              <Select name="game" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a game" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small-defenders">Small Defenders</SelectItem>
                  <SelectItem value="mleep-fruit">Mleep Fruit</SelectItem>
                  <SelectItem value="guesser">Guesser</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card className="border-dashed">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Rate Your Experience</CardTitle>
                <CardDescription>How would you rate your experience with this game?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => {
                        setRating(star)
                      }}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="p-1 transition-all focus:outline-none"
                      aria-label={`Rate ${star} stars out of 5`}
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
                <input type="hidden" name="rating" value={rating} />
                {rating === 0 && <p className="text-xs text-center mt-2 text-amber-600">Please select a rating</p>}
              </CardContent>
            </Card>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="description">Description</Label>
                <span className={`text-xs ${isOverLimit ? "text-red-500 font-medium" : "text-gray-500"}`}>
                  {characterCount}/500
                </span>
              </div>
              <Textarea
                id="description"
                name="description"
                placeholder="Please provide detailed feedback (max 500 characters)"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={isOverLimit ? "border-red-500 focus-visible:ring-red-500" : ""}
                required
              />
              {isOverLimit && (
                <p className="text-xs text-red-500">Description exceeds maximum length of 500 characters</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isOverLimit || rating === 0}>
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
