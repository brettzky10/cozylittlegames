import Link from "next/link"
import { Globe } from "lucide-react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "../ui/button"

export function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Questions? Contact us.</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Speed Test
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Help Center</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="hover:underline">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Legal Notices
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Account</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="hover:underline">
                  Ways to Watch
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Corporate Information
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Only from Cozy Little Games
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Media Center</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col space-y-4">
          <div className="w-full max-w-[200px]">
            <Link href="/feedback">
            <Button>
                Feedback
            </Button>
            </Link>
            {/* <Select>
              <SelectTrigger className="bg-transparent border border-gray-600 text-gray-400 rounded h-10">
                <Globe className="mr-2 h-4 w-4" />
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select> */}
          </div>

          <p className="text-xs">Cozy Little Games {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
