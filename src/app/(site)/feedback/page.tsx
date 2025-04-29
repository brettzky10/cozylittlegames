"use client"

import { useState } from "react"
import { useFormState } from "react-dom"
import { submitFeedback } from "@/lib/actions/feedback"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const initialState = {
  success: false,
  error: "",
}

export default function FeedbackPage() {
  const [state, formAction] = useFormState(submitFeedback, initialState)
  const [description, setDescription] = useState("")
  const characterCount = description.length
  const isOverLimit = characterCount > 500

  return (
    <div className="container max-w-2xl py-10">
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
              <AlertDescription>Thank you for your feedback. We'll review it shortly.</AlertDescription>
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

            <Button type="submit" className="w-full" disabled={isOverLimit}>
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
