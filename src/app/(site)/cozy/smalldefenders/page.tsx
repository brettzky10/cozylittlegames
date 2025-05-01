import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const SmallDefendersPage = () => {
  return (
   
    <div className="container max-w-screen-7xl mx-auto mt-32">
        <div className="flex justify-center">
          <Card className="w-full max-w-7xl bg-white/30 backdrop-blur-sm shadow-xl">
            
            {/* <CardHeader className='space-y-10'>
                <Button asChild size={"sm"}>
                <Link href="/">
                Go Back
                </Link>
                </Button><span className='text-3xl font-bold '>Small Defenders</span>
                <CardDescription className='p-5 pb-10'>
                Defend your king from the terrifying average goblin invaders.
            </CardDescription>
                
            </CardHeader> */}
           
            <CardContent className='mx-auto max-w-7xl mt-5'>
            <iframe
                src="/unity/index.html"
                className="h-[95vh] flex"
                width="95%"
                height="95%"
                style={{ border: "none", top: 0 }}
                allowFullScreen
            />
              {/* <div className="mt-6 flex justify-center">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium">
                  Play Now
                </button>
              </div> */}
            </CardContent>
            <CardFooter className='flex-col flex  mb-32'>
                <h3 className='text-xl my-20'>
                🏰 Small Defenders: Attack of the Average Goblin Horde  🗡️
                </h3>
                <p>
                Survive the waves of goblins to win! 🧌⚔️<br/>
            Defend your King 👑 (a powerful, large unit) — if he falls, the kingdom is lost! 💀<br/>
            <br/>
            🖱️ Click on castle to build units.<br/>
            🎯 Click on units to issue direct commands.<br/>
            👷‍♂️ Deploy workers to:<br/>
            <br/>
                    🌲 Log trees<br/>
            <br/>
                    ⛏️ Mine for gold<br/>
            <br/>
                    🏗️ Build structures<br/>
            <br/>
            🆓 Completely FREE to play!<br/>
            📅 Progress: <br/>
                <s>- 2 levels complete as of April 2025.</s> <br/>
                - 3 levels complete as of May 2025. <br/>
                Stay tuned for more!<br/>
                </p>
            
            </CardFooter>
          </Card>
        </div>
      </div>
   
  
  )
}

export default SmallDefendersPage