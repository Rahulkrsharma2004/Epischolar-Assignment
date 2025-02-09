"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button" // Import the Button component

export function FiltersSidebar() {
  return (
    <div className="w-64 p-6 space-y-6">
      <div className="bg-[#1A202C] rounded-lg p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-center mb-2">Update your data !</h3>
        <p className="text-sm text-gray-400 text-center mb-4">Update your data and find the best opportunities</p>
        <Button className="w-full">Update your data</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm text-gray-400 mb-2">Working schedule</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="fulltime" />
                <label
                  htmlFor="fulltime"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Full Time
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="internship" />
                <label
                  htmlFor="internship"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Internship
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="freelance" />
                <label
                  htmlFor="freelance"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Freelance
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contractual" />
                <label
                  htmlFor="contractual"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Contractual
                </label>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-400 mb-2">Employment type</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="fullday" />
                <label
                  htmlFor="fullday"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Full day
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="flexible" />
                <label
                  htmlFor="flexible"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Flexible schedule
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <label
                  htmlFor="remote"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Distant work
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

